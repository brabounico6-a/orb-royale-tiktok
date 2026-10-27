import express from 'express';
import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import { Server as SocketIOServer } from 'socket.io';
import {
  TikTokLiveConnection,
  WebcastEvent,
  ControlEvent
} from 'tiktok-live-connector';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT || 3000);
const ADMIN_PIN = String(process.env.ADMIN_PIN || '').trim();
const EULER_API_KEY = String(process.env.EULER_API_KEY || process.env.SIGN_API_KEY || '').trim();

if (!ADMIN_PIN) {
  console.warn('[AVISO] ADMIN_PIN não configurado. Defina no Render antes de usar o painel.');
}

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  transports: ['websocket', 'polling'],
  perMessageDeflate: false,
  pingInterval: 20000,
  pingTimeout: 15000
});

app.disable('x-powered-by');
app.use(express.json({ limit: '64kb' }));
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: 0,
  etag: true,
  setHeaders(res) {
    res.setHeader('Cache-Control', 'no-cache');
  }
}));

let liveConnection = null;
let giftCostById = new Map();
let likeBatch = 0;
let likeTimer = null;

const status = {
  connected: false,
  connecting: false,
  username: '',
  roomId: '',
  message: 'Desconectado',
  eventCount: 0,
  lastEventType: ''
};

function safeStatus() {
  return { ...status };
}

function emitStatus() {
  io.emit('live:status', safeStatus());
}

function emitEvent(type, payload = {}) {
  status.eventCount += 1;
  status.lastEventType = type;
  io.emit('live:event', {
    type,
    ts: Date.now(),
    ...payload
  });
}

function userName(data) {
  return String(
    data?.user?.uniqueId ||
    data?.user?.displayId ||
    data?.uniqueId ||
    data?.user?.nickname ||
    'usuario'
  ).replace(/^@/, '').trim().slice(0, 64) || 'usuario';
}

function giftName(data) {
  return String(
    data?.gift?.name ||
    data?.giftDetails?.giftName ||
    data?.extendedGiftInfo?.name ||
    data?.giftName ||
    data?.gift?.describe ||
    `Gift ${data?.giftId ?? data?.gift?.id ?? ''}`
  ).trim() || 'Presente';
}

function giftId(data) {
  return String(
    data?.giftId ??
    data?.gift?.id ??
    data?.gift?.giftId ??
    data?.giftDetails?.giftId ??
    data?.extendedGiftInfo?.id ??
    ''
  );
}

function giftUnitCoins(data) {
  const candidates = [
    data?.gift?.diamondCount,
    data?.gift?.diamond_count,
    data?.giftDetails?.diamondCount,
    data?.giftDetails?.diamond_count,
    data?.giftDetails?.price,
    data?.diamondCount,
    data?.diamond_count,
    data?.extendedGiftInfo?.diamondCount,
    data?.extendedGiftInfo?.diamond_count
  ];

  for (const value of candidates) {
    const n = Number(value);
    if (Number.isFinite(n) && n > 0) {
      return Math.floor(n);
    }
  }

  return 1;
}

function authorized(req) {
  if (!ADMIN_PIN) return false;
  const pin = String(req.get('X-Admin-Pin') || req.body?.pin || '').trim();
  return pin === ADMIN_PIN;
}

function requireAdmin(req, res, next) {
  if (!ADMIN_PIN) {
    return res.status(503).json({ error: 'ADMIN_PIN não configurado no servidor.' });
  }
  if (!authorized(req)) {
    return res.status(401).json({ error: 'PIN incorreto.' });
  }
  next();
}

async function disconnectTikTok(reason = 'Desconectado') {
  clearTimeout(likeTimer);
  likeTimer = null;
  likeBatch = 0;

  const old = liveConnection;
  liveConnection = null;

  if (old) {
    try {
      await Promise.resolve(old.disconnect());
    } catch (err) {
      console.warn('[TikTok] erro ao desconectar:', err?.message || err);
    }
  }

  status.connected = false;
  status.connecting = false;
  status.roomId = '';
  status.message = reason;
  emitStatus();
}

function flushLikes() {
  likeTimer = null;
  if (likeBatch <= 0) return;
  const count = likeBatch;
  likeBatch = 0;
  emitEvent('like', { count });
}

function queueLikes(count) {
  const n = Math.max(1, Math.floor(Number(count) || 1));
  likeBatch += n;
  if (!likeTimer) {
    likeTimer = setTimeout(flushLikes, 220);
  }
}

async function hydrateGiftCosts(conn) {
  giftCostById = new Map();

  try {
    const list = await conn.fetchAvailableGifts();
    if (!Array.isArray(list)) return;

    for (const gift of list) {
      const id = String(gift?.id ?? gift?.gift_id ?? '');
      const cost = Number(
        gift?.diamond_count ??
        gift?.diamondCount ??
        gift?.cost ??
        0
      );

      if (id && Number.isFinite(cost) && cost > 0) {
        giftCostById.set(id, Math.floor(cost));
      }
    }

    console.log(`[TikTok] catálogo carregado: ${giftCostById.size} presentes`);
  } catch (err) {
    console.warn('[TikTok] não foi possível carregar catálogo:', err?.message || err);
  }
}

async function connectTikTok(username) {
  const clean = String(username || '').trim().replace(/^@/, '');
  if (!clean) throw new Error('Digite o nome de usuário da LIVE.');

  await disconnectTikTok('Preparando nova conexão...');

  status.username = clean;
  status.connecting = true;
  status.connected = false;
  status.message = `Conectando em @${clean}...`;
  emitStatus();

  const options = {
    enableExtendedGiftInfo: false,
    fetchRoomInfoOnConnect: true
  };

  if (EULER_API_KEY) {
    options.signApiKey = EULER_API_KEY;
  }

  const conn = new TikTokLiveConnection(clean, options);
  liveConnection = conn;

  conn.on(WebcastEvent.FOLLOW, data => {
    emitEvent('follow', {
      user: userName(data)
    });
  });

  conn.on(WebcastEvent.SHARE, data => {
    emitEvent('share', {
      user: userName(data)
    });
  });

  conn.on(WebcastEvent.LIKE, data => {
    queueLikes(
      data?.likeCount ??
      data?.count ??
      data?.likes ??
      1
    );
  });

  conn.on(WebcastEvent.GIFT, data => {
    const giftType = Number(
      data?.gift?.type ??
      data?.gift?.giftType ??
      data?.giftDetails?.giftType ??
      data?.giftType ??
      0
    );

    // Presentes em streak emitem eventos parciais.
    // Processa somente o evento final para não duplicar.
    if (giftType === 1 && !data?.repeatEnd) return;

    const repeatCount = Math.max(
      1,
      Math.floor(Number(data?.repeatCount) || 1)
    );

    const unitCoins = giftUnitCoins(data);
    const coins = Math.max(1, unitCoins * repeatCount);

    emitEvent('gift', {
      user: userName(data),
      giftName: giftName(data),
      giftId: giftId(data),
      unitCoins,
      repeatCount,
      coins
    });
  });

  conn.on(ControlEvent.ERROR, err => {
    console.error('[TikTok] erro:', err?.message || err);
    status.message = `Erro: ${err?.message || 'falha na conexão'}`;
    emitStatus();
  });

  conn.on(ControlEvent.DISCONNECTED, info => {
    if (liveConnection !== conn) return;
    status.connected = false;
    status.connecting = false;
    status.message = `TikTok desconectado${info?.reason ? `: ${info.reason}` : ''}`;
    emitStatus();
  });

  const state = await conn.connect();

  if (liveConnection !== conn) {
    try { await Promise.resolve(conn.disconnect()); } catch {}
    throw new Error('Conexão substituída por outra tentativa.');
  }

  status.connected = true;
  status.connecting = false;
  status.username = clean;
  status.roomId = String(state?.roomId || conn.roomId || '');
  status.message = `Conectado em @${clean}`;
  emitStatus();

  // Catálogo premium desativado: usamos os dados do próprio evento.

  return safeStatus();
}

app.post('/api/admin/check', requireAdmin, (req, res) => {
  res.json({ ok: true, status: safeStatus() });
});

app.post('/api/connect', requireAdmin, async (req, res) => {
  try {
    const newStatus = await connectTikTok(req.body?.username);
    res.json({ ok: true, status: newStatus });
  } catch (err) {
    status.connected = false;
    status.connecting = false;
    status.message = err?.message || 'Falha ao conectar.';
    emitStatus();

    res.status(400).json({
      error: status.message,
      status: safeStatus()
    });
  }
});

app.post('/api/disconnect', requireAdmin, async (req, res) => {
  await disconnectTikTok('Desconectado pelo painel.');
  res.json({ ok: true, status: safeStatus() });
});

app.get('/api/status', (req, res) => {
  res.json(safeStatus());
});

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    tiktokConnected: status.connected,
    username: status.username || null
  });
});

io.on('connection', socket => {
  socket.emit('live:status', safeStatus());

  socket.on('live:status:get', () => {
    socket.emit('live:status', safeStatus());
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`ORB ROYALE V6 rodando na porta ${PORT}`);
});
