
(()=>{
const $=id=>document.getElementById(id),canvas=$('game'),ctx=canvas.getContext('2d',{alpha:false}),nf=new Intl.NumberFormat('pt-BR');

const gifts=[
 {name:'Rose',coins:1,icon:'🌹'},{name:'Heart Me',coins:1,icon:'💗'},{name:'TikTok',coins:1,icon:'🎵'},{name:'GG',coins:1,icon:'🎮'},{name:'Ice Cream Cone',coins:1,icon:'🍦'},
 {name:'Finger Heart',coins:5,icon:'🫰'},{name:'Okay',coins:5,icon:'👌'},{name:'Ice Cream',coins:5,icon:'🍨'},
 {name:'Rosa',coins:10,icon:'🌸'},{name:'Friendship Necklace',coins:10,icon:'📿'},
 {name:'Perfume',coins:20,icon:'🧴'},{name:'Doughnut',coins:30,icon:'🍩'},
 {name:'Paper Crane',coins:99,icon:'🕊️'},{name:'Hand Hearts',coins:100,icon:'🫶'},{name:'Confetti',coins:100,icon:'🎉'},
 {name:'Sunglasses',coins:199,icon:'🕶️'},{name:'Corgi',coins:299,icon:'🐶'},{name:'Boxing Gloves',coins:299,icon:'🥊'},
 {name:'Money Gun',coins:500,icon:'💸'},{name:'Swan',coins:699,icon:'🦢'},{name:'Train',coins:899,icon:'🚂'},
 {name:'Galaxy',coins:1000,icon:'🌌'},{name:'Fireworks',coins:1088,icon:'🎆'},{name:'Whale Diving',coins:2150,icon:'🐋'},
 {name:'Private Jet',coins:4888,icon:'🛩️'},{name:'Sports Car',coins:7000,icon:'🏎️'},{name:'Yacht',coins:9888,icon:'🛥️'},
 {name:'Interstellar',coins:10000,icon:'🚀'},{name:'Rocket',coins:20000,icon:'🚀'},{name:'Lion',coins:29999,icon:'🦁'},
 {name:'TikTok Universe',coins:44999,icon:'🪐'}
];


const weaponCatalog = {
 'Rose': {name:'Lâmina Rubi', shape:'dagger', tint:'#c69438', blades:1, power:1.00, durability:3, protection:0},
 'Heart Me': {name:'Lâmina Coração', shape:'heart', tint:'#d0a34a', blades:1, power:1.03, durability:4, protection:0},
 'TikTok': {name:'Lâmina Neon', shape:'neon', tint:'#d9b052', blades:1, power:1.04, durability:4, protection:0},
 'GG': {name:'Lâmina Gamer', shape:'pixel', tint:'#d7aa45', blades:1, power:1.05, durability:5, protection:0},
 'Ice Cream Cone': {name:'Lâmina Gelo', shape:'ice', tint:'#e1bd62', blades:1, power:1.04, durability:5, protection:0},
 'Finger Heart': {name:'Lâminas Gêmeas', shape:'twin', tint:'#e0b553', blades:2, power:1.12, durability:10, protection:1},
 'Okay': {name:'Lâmina Veloz', shape:'speed', tint:'#dcb04c', blades:2, power:1.10, durability:9, protection:1},
 'Ice Cream': {name:'Lâmina Congelante', shape:'ice', tint:'#e6c66b', blades:2, power:1.11, durability:10, protection:1},
 'Rosa': {name:'Sabre Floral', shape:'petal', tint:'#e3b85a', blades:2, power:1.16, durability:15, protection:2},
 'Friendship Necklace': {name:'Anel Guardião', shape:'ring', tint:'#e4bd63', blades:2, power:1.14, durability:16, protection:3},
 'Perfume': {name:'Lâmina Prisma', shape:'prism', tint:'#e8c66e', blades:2, power:1.22, durability:22, protection:3},
 'Doughnut': {name:'Disco Circular', shape:'disc', tint:'#e7bd55', blades:3, power:1.28, durability:28, protection:4},
 'Paper Crane': {name:'Asas Cortantes', shape:'wing', tint:'#f0d67f', blades:3, power:1.38, durability:40, protection:6},
 'Hand Hearts': {name:'Orbitais Carmesim', shape:'orbital', tint:'#eac96f', blades:3, power:1.45, durability:45, protection:7},
 'Confetti': {name:'Estilhaços Festa', shape:'shard', tint:'#efd16e', blades:3, power:1.44, durability:44, protection:7},
 'Sunglasses': {name:'Lâminas Sombra', shape:'shadow', tint:'#d8ae49', blades:3, power:1.55, durability:55, protection:9},
 'Corgi': {name:'Presas Corgi', shape:'fang', tint:'#edc368', blades:4, power:1.70, durability:70, protection:12},
 'Boxing Gloves': {name:'Punhos Orbitais', shape:'heavy', tint:'#d8a43f', blades:4, power:1.74, durability:72, protection:12},
 'Money Gun': {name:'Lâminas Douradas', shape:'gold', tint:'#f0c95e', blades:4, power:1.92, durability:90, protection:15},
 'Swan': {name:'Asas Reais', shape:'wing', tint:'#f4df98', blades:4, power:2.00, durability:100, protection:17},
 'Train': {name:'Lâminas Ferro', shape:'heavy', tint:'#caa04a', blades:5, power:2.10, durability:115, protection:20},
 'Galaxy': {name:'Lâminas Cósmicas', shape:'cosmic', tint:'#e0b952', blades:5, power:2.35, durability:140, protection:24},
 'Fireworks': {name:'Lâminas Explosivas', shape:'spark', tint:'#e7bd58', blades:5, power:2.42, durability:145, protection:25},
 'Whale Diving': {name:'Tridentes Abissais', shape:'trident', tint:'#e6c36a', blades:5, power:2.65, durability:175, protection:30},
 'Private Jet': {name:'Lâminas Turbo', shape:'jet', tint:'#edcc72', blades:6, power:3.05, durability:225, protection:38},
 'Sports Car': {name:'Lâminas Nitro', shape:'speed', tint:'#d9a23a', blades:6, power:3.35, durability:255, protection:42},
 'Yacht': {name:'Tridentes Reais', shape:'trident', tint:'#efd37b', blades:6, power:3.55, durability:280, protection:46},
 'Interstellar': {name:'Sabres Interestelares', shape:'cosmic', tint:'#f0d47d', blades:7, power:4.00, durability:330, protection:55},
 'Rocket': {name:'Lanças Foguete', shape:'jet', tint:'#e1b34a', blades:8, power:4.60, durability:400, protection:65},
 'Lion': {name:'Garras do Leão', shape:'claw', tint:'#f2d26e', blades:9, power:5.25, durability:500, protection:80},
 'TikTok Universe': {name:'Arsenal Universo', shape:'universe', tint:'#fff3c4', blades:12, power:6.50, durability:700, protection:100},
 'Hatch Me': {name:'Lâmina Hatch', shape:'hatch', tint:'#d7ac48', blades:2, power:1.18, durability:12, protection:2}
};

function weaponForGift(giftName, coins){
 const exact=weaponCatalog[giftName];
 if(exact)return {...exact};
 const t=tierFor(coins);
 return {
   name:`Arma ${t.title}`,
   shape: coins>=10000?'cosmic':coins>=1000?'orbital':coins>=100?'dagger':'neon',
   tint:t.color,
   blades:Math.max(1,t.blades||1),
   power:1+Math.log10(Math.max(1,coins))*0.65,
   durability:Math.round(Math.sqrt(coins)*5),
   protection:Math.round(Math.sqrt(coins)*0.8)
 };
}


const GIFT_IMAGE_STORAGE_KEY='orbGiftImagesV1';
let giftImages={};

function loadGiftImages(){
 try{
   giftImages=JSON.parse(localStorage.getItem(GIFT_IMAGE_STORAGE_KEY)||'{}')||{};
 }catch{
   giftImages={};
 }
}

function saveGiftImages(){
 try{
   localStorage.setItem(GIFT_IMAGE_STORAGE_KEY,JSON.stringify(giftImages));
 }catch(e){
   alert('Não foi possível salvar mais imagens neste aparelho. Remova alguma imagem antiga.');
 }
}

function giftImageFor(name){
 return giftImages[String(name||'')]||'';
}

function giftEmojiFor(name){
 const g=gifts.find(x=>x.name===name);
 return g?.icon||'🎁';
}

function resizeGiftImage(file){
 return new Promise((resolve,reject)=>{
   if(!file)return reject(new Error('Escolha uma imagem.'));
   const reader=new FileReader();
   reader.onerror=()=>reject(new Error('Não foi possível ler a imagem.'));
   reader.onload=()=>{
     const img=new Image();
     img.onerror=()=>reject(new Error('Imagem inválida.'));
     img.onload=()=>{
       const size=180;
       const c=document.createElement('canvas');
       c.width=size;c.height=size;
       const g=c.getContext('2d');
       g.fillStyle='#090704';
       g.fillRect(0,0,size,size);

       const scale=Math.max(size/img.width,size/img.height);
       const w=img.width*scale,h=img.height*scale;
       g.drawImage(img,(size-w)/2,(size-h)/2,w,h);

       let data='';
       try{
         data=c.toDataURL('image/webp',.82);
       }catch{
         data=c.toDataURL('image/jpeg',.82);
       }
       resolve(data);
     };
     img.src=reader.result;
   };
   reader.readAsDataURL(file);
 });
}

function setEventGiftImage(giftName){
 const img=$('eventGiftImage');
 if(!img)return;
 const custom=giftImageFor(giftName);
 if(custom){
   img.src=custom;
   img.classList.remove('hidden');
 }else{
   img.removeAttribute('src');
   img.classList.add('hidden');
 }
}

function catalogVisual(g){
 const custom=giftImageFor(g.name);
 if(custom){
   return `<img class="catalog-gift-image" src="${custom}" alt="${esc(g.name)}">`;
 }
 return `<span class="catalog-gift-fallback">${g.icon||'🎁'}</span>`;
}

const tiers=[
 {min:0,title:'SEGUIDOR',desc:'Nv.1 • 1 lâmina',color:'#b8892f',blades:1},
 {min:1,title:'INICIANTE',desc:'+HP e XP',color:'#c99a3a',blades:1},
 {min:5,title:'ÁGIL',desc:'+velocidade',color:'#d0a64d',blades:1},
 {min:30,title:'CRESCIDO',desc:'+tamanho e vida',color:'#e0b84f',blades:1},
 {min:99,title:'RARO',desc:'aura + escudo',color:'#e6c15d',blades:1},
 {min:100,title:'ORBITAL I',desc:'2 lâminas',color:'#edc96a',blades:2},
 {min:299,title:'ORBITAL II',desc:'3 lâminas + defesa',color:'#f0cc70',blades:3},
 {min:500,title:'ELITE',desc:'regeneração',color:'#d9ad4d',blades:3},
 {min:1000,title:'CÓSMICO',desc:'4 lâminas + aura',color:'#e4bc58',blades:4},
 {min:2150,title:'TITÃ',desc:'muito HP',color:'#e9c760',blades:4},
 {min:4888,title:'MÍTICO',desc:'5 lâminas + turbo',color:'#f0d277',blades:5},
 {min:10000,title:'INTERESTELAR',desc:'6 lâminas + escudo',color:'#f3d982',blades:6},
 {min:20000,title:'FORTALEZA',desc:'7 lâminas + armadura',color:'#f5df91',blades:7},
 {min:29999,title:'TITÃ SUPREMO',desc:'8 lâminas',color:'#f7e5a3',blades:8},
 {min:44999,title:'UNIVERSO',desc:'FORMA MÁXIMA',color:'#fff3c4',blades:10}
];

const S={orbs:new Map(),followed:new Set(),likes:0,totalKills:0,maxOrbs:40,baseDamage:7,hatchPrice:5,sound:true,showNames:true,last:performance.now(),particles:[],liveMode:false,grid:new Map(),cell:.14};
let popTimer=null,audio=null,lastUi=0;

const avatarCache=new Map();

function loadAvatar(url){
 if(!url)return null;
 if(avatarCache.has(url))return avatarCache.get(url);

 const entry={img:null,loaded:false,failed:false};
 avatarCache.set(url,entry);

 const img=new Image();
 img.decoding='async';
 img.referrerPolicy='no-referrer';
 img.onload=()=>{entry.img=img;entry.loaded=true;};
 img.onerror=()=>{entry.failed=true;};
 img.src=url;

 return entry;
}

function setOrbAvatar(o,url){
 if(!o||!url)return;
 o.avatarUrl=url;
 loadAvatar(url);
}

function avatarInitial(user){
 return String(user||'?').trim().charAt(0).toUpperCase()||'?';
}

function demoAvatarData(user,color='#b8892f'){
 const initial=avatarInitial(user);
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120">
   <defs><radialGradient id="g"><stop offset="0" stop-color="#fff3c4"/><stop offset=".18" stop-color="${color}"/><stop offset="1" stop-color="#070604"/></radialGradient></defs>
   <rect width="120" height="120" rx="60" fill="url(#g)"/>
   <circle cx="60" cy="46" r="23" fill="rgba(255,255,255,.22)"/>
   <path d="M22 112c5-27 20-40 38-40s33 13 38 40" fill="rgba(255,255,255,.20)"/>
   <text x="60" y="68" font-family="Arial" text-anchor="middle" font-size="34" font-weight="900" fill="white">${initial}</text>
 </svg>`;
 return 'data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
}

function setEventUserAvatar(user,avatarUrl){
 const img=$('eventUserAvatar');
 const fb=$('eventUserAvatarFallback');
 if(!img||!fb)return;

 fb.textContent=avatarInitial(user);

 if(avatarUrl){
   img.src=avatarUrl;
   img.classList.remove('hidden');
   fb.classList.add('hidden');
   img.onerror=()=>{
     img.classList.add('hidden');
     fb.classList.remove('hidden');
   };
 }else{
   img.removeAttribute('src');
   img.classList.add('hidden');
   fb.classList.remove('hidden');
 }
}

function drawAvatarInsideOrb(o,px,py,rr){
 const url=o.avatarUrl||'';
 const entry=url?avatarCache.get(url):null;

 ctx.save();
 ctx.beginPath();
 ctx.arc(px,py,Math.max(4,rr*.76),0,Math.PI*2);
 ctx.clip();

 if(entry?.loaded && entry.img){
   const img=entry.img;
   const iw=img.naturalWidth||img.width||1;
   const ih=img.naturalHeight||img.height||1;
   const side=Math.min(iw,ih);
   const sx=(iw-side)/2;
   const sy=(ih-side)/2;
   ctx.drawImage(img,sx,sy,side,side,px-rr*.78,py-rr*.78,rr*1.56,rr*1.56);
 }else{
   const g=ctx.createRadialGradient(px-rr*.25,py-rr*.3,1,px,py,rr);
   g.addColorStop(0,'#f4df98');
   g.addColorStop(.28,o.color||'#b8892f');
   g.addColorStop(1,'#050403');
   ctx.fillStyle=g;
   ctx.fillRect(px-rr,py-rr,rr*2,rr*2);

   ctx.fillStyle='rgba(255,255,255,.93)';
   ctx.textAlign='center';
   ctx.textBaseline='middle';
   ctx.font=`900 ${Math.max(8,rr*.75)}px Arial`;
   ctx.fillText(avatarInitial(o.user),px,py+1);
 }
 ctx.restore();

 ctx.strokeStyle='rgba(255,255,255,.72)';
 ctx.lineWidth=Math.max(1.2,rr*.07);
 ctx.beginPath();
 ctx.arc(px,py,rr*.78,0,Math.PI*2);
 ctx.stroke();
}


const battleFeedItems=[];
let lastChampionUser='';


let koBannerTimer=null;
function showKOBanner(killer,target){
 const b=$('koBanner');
 if(!b)return;
 $('koBannerText').textContent=`@${killer}  ×  @${target}`;
 b.classList.remove('hidden');
 clearTimeout(koBannerTimer);
 koBannerTimer=setTimeout(()=>b.classList.add('hidden'),1100);
}

let evolutionTimer=null;
function showEvolutionBanner(user,title,sub){
 const b=$('evolutionBanner');
 if(!b)return;
 $('evolutionBannerUser').textContent='@'+user;
 $('evolutionBannerTitle').textContent=title;
 $('evolutionBannerSub').textContent=sub;
 b.classList.remove('hidden');
 clearTimeout(evolutionTimer);
 evolutionTimer=setTimeout(()=>b.classList.add('hidden'),1150);
}

function addBattleFeed(text,type=''){
 battleFeedItems.unshift({text,type});
 if(battleFeedItems.length>4)battleFeedItems.length=4;
 const box=$('battleFeed');
 if(box){
   box.innerHTML=battleFeedItems.map(x=>`<div class="feed-item ${x.type||''}">${x.text}</div>`).join('');
 }
}

function updateChampion(){
 const badge=$('championBadge');
 if(!badge)return;
 if(!S.orbs.size){
   badge.classList.add('hidden');
   lastChampionUser='';
   return;
 }
 const arr=[...S.orbs.values()].sort((a,b)=>(b.kills-a.kills)||(b.level-a.level)||(b.totalCoins-a.totalCoins));
 const champ=arr[0];
 $('championName').textContent='@'+champ.user;
 badge.classList.remove('hidden');
 if(lastChampionUser && lastChampionUser!==champ.user){
   addBattleFeed(`<b>@${esc(champ.user)}</b> assumiu a liderança`,'evo');
 }
 lastChampionUser=champ.user;
}

loadGiftImages();


/* ===== V21: ÁUDIO DA ARENA (dentro do jogo, sem escopo quebrado) ===== */
const SWORD_AUDIO_URL='assets/sword-clash.mp3';
const BATTLE_AUDIO_URL='assets/battle-theme.mp3';
let musicEnabled=true;
let musicVolume=.92;
let swordContext=null;
let swordBuffer=null;
let swordLoading=null;
let swordLastPlayedAt=0;
let musicDuckTimer=null;
let musicStarted=false;
const battleMusic=new Audio(BATTLE_AUDIO_URL);
battleMusic.loop=true;
battleMusic.preload='auto';
battleMusic.volume=musicVolume;
const swordFallbackPool=[];
let swordFallbackIndex=0;

// Exibe falhas reais no painel, ao invés de fingir que o som funcionou.
const soundDiagnostics={decoded:false,playCount:0,collisionCount:0,errors:0,lastError:'',contextState:'não iniciado'};
window.orbSoundStatus=soundDiagnostics;
function swordStatus(message){
 const el=$('swordSoundStatus');
 if(el)el.textContent=message;
}
function getSwordContext(){
 try{
   if(!swordContext){
     const AC=window.AudioContext||window.webkitAudioContext;
     if(!AC)throw new Error('Web Audio indisponível');
     swordContext=new AC({latencyHint:'interactive'});
   }
   soundDiagnostics.contextState=swordContext.state;
   if(swordContext.state==='suspended')swordContext.resume().then(()=>{
     soundDiagnostics.contextState=swordContext.state;
   }).catch(err=>{
     soundDiagnostics.lastError=String(err?.message||err);
   });
   return swordContext;
 }catch(err){
   soundDiagnostics.lastError=String(err?.message||err);
   return null;
 }
}
function preloadSword(){
 if(swordBuffer)return Promise.resolve(true);
 if(swordLoading)return swordLoading;
 swordLoading=(async()=>{
   const response=await fetch(SWORD_AUDIO_URL,{cache:'no-cache'});
   if(!response.ok)throw new Error('Arquivo de espada não encontrado: '+response.status);
   const bytes=await response.arrayBuffer();
   const ctx=getSwordContext();
   if(!ctx)throw new Error('Sem suporte ao áudio do navegador');
   swordBuffer=await ctx.decodeAudioData(bytes);
   soundDiagnostics.decoded=true;
   swordStatus('✓ Áudio da espada carregado');
   return true;
 })().catch(err=>{
   soundDiagnostics.errors++;
   soundDiagnostics.lastError=String(err?.message||err);
   swordStatus('Erro ao carregar áudio: '+soundDiagnostics.lastError);
   swordLoading=null;
   return false;
 });
 return swordLoading;
}
function makeFallbackPool(){
 if(swordFallbackPool.length)return;
 for(let i=0;i<4;i++){
   const audio=new Audio(SWORD_AUDIO_URL);
   audio.preload='auto';
   swordFallbackPool.push(audio);
 }
}
function playFallbackSword(){
 makeFallbackPool();
 const audio=swordFallbackPool[swordFallbackIndex++%swordFallbackPool.length];
 try{
   audio.pause();
   audio.currentTime=0;
   audio.volume=1;
   const promise=audio.play();
   if(promise)promise.then(()=>{soundDiagnostics.playCount++;}).catch(err=>{
     soundDiagnostics.errors++;
     soundDiagnostics.lastError=String(err?.message||err);
     swordStatus('Áudio bloqueado: toque na tela e teste novamente');
   });
 }catch(err){
   soundDiagnostics.errors++;
   soundDiagnostics.lastError=String(err?.message||err);
 }
}
function duckMusic(){
 if(!musicEnabled||battleMusic.paused)return;
 clearTimeout(musicDuckTimer);
 battleMusic.volume=Math.max(.2,musicVolume*.50);
 musicDuckTimer=setTimeout(()=>{
   if(musicEnabled)battleMusic.volume=musicVolume;
 },240);
}
function playSwordSample(force=false){
 if(!S.sound)return;
 const now=performance.now();
 // Uma espada forte é audível, sem dezenas de sobreposições por frame.
 if(!force&&now-swordLastPlayedAt<135)return;
 swordLastPlayedAt=now;
 const ctx=getSwordContext();
 if(ctx&&swordBuffer&&ctx.state==='running'){
   const source=ctx.createBufferSource();
   source.buffer=swordBuffer;
   source.playbackRate.value=.97+Math.random()*.05;
   const volume=ctx.createGain();
   volume.gain.value=.90;
   source.connect(volume);
   volume.connect(ctx.destination);
   source.start(0);
   soundDiagnostics.playCount++;
   swordStatus('✓ CLANG de espada reproduzido');
   duckMusic();
 }else if(ctx&&!swordBuffer){
   preloadSword().then(ok=>{
     if(ok&&S.sound)playSwordSample(true);
     else playFallbackSword();
   });
 }else{
   playFallbackSword();
 }
}
function soundSwordHit(){playSwordSample();}
function soundBladeClash(){
 soundDiagnostics.collisionCount++;
 playSwordSample();
}
function playShortTone(frequency,length=.1){
 if(!S.sound)return;
 const ctx=getSwordContext();
 if(!ctx||ctx.state!=='running')return;
 const o=ctx.createOscillator(),g=ctx.createGain(),t=ctx.currentTime;
 o.type='triangle';o.frequency.setValueAtTime(frequency,t);
 g.gain.setValueAtTime(.0001,t);
 g.gain.exponentialRampToValueAtTime(.027,t+.008);
 g.gain.exponentialRampToValueAtTime(.0001,t+length);
 o.connect(g);g.connect(ctx.destination);o.start(t);o.stop(t+length+.01);
}
function soundWhoosh(){playShortTone(420,.095);}
function soundPowerUp(){playShortTone(740,.23);}
function soundKO(){playShortTone(170,.22);}
function startBattleMusic(){
 if(!musicEnabled)return;
 battleMusic.volume=musicVolume;
 const p=battleMusic.play();
 if(p&&typeof p.catch==='function')p.then(()=>{musicStarted=true;}).catch(err=>{
   soundDiagnostics.lastError='Música: '+String(err?.message||err);
 });
}
function stopBattleMusic(){
 musicStarted=false;
 battleMusic.pause();
}
function setMusicEnabled(enabled){
 musicEnabled=!!enabled;
 const btn=$('musicToggleBtn');
 if(btn){btn.classList.toggle('off',!musicEnabled);btn.textContent=musicEnabled?'♫ ON':'♫ OFF';}
 const inp=$('musicInput');if(inp)inp.checked=musicEnabled;
 if(musicEnabled)startBattleMusic();else stopBattleMusic();
}
function setMusicVolume(value){
 musicVolume=Math.max(0,Math.min(1,Number(value)||0));
 battleMusic.volume=musicVolume;
}
function unlockGameAudio(){
 getSwordContext();
 preloadSword();
 if(musicEnabled&&!musicStarted)startBattleMusic();
}
// A amostra fica pré-carregada mesmo antes do primeiro toque.
// No Android, o toque libera a reprodução.
preloadSword();

function resize(){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.max(1,r.width*d);canvas.height=Math.max(1,r.height*d);ctx.setTransform(d,0,0,d,0,0)}
function randColor(name){let h=0;for(const ch of name)h=(h*33+ch.charCodeAt(0))%360;return `hsl(${h} 80% 60%)`}
function tierFor(coins){let t=tiers[0];for(const x of tiers)if(coins>=x.min)t=x;return t}
function beep(freq=620,dur=.055){if(!S.sound)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const o=audio.createOscillator(),g=audio.createGain(),n=audio.currentTime;o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(.0001,n);g.gain.exponentialRampToValueAtTime(.035,n+.004);g.gain.exponentialRampToValueAtTime(.0001,n+dur);o.connect(g);g.connect(audio.destination);o.start(n);o.stop(n+dur+.01)}catch{}}
function show(user,title,sub,color,giftName='',avatarUrl=''){
 const p=$('eventPop');
 $('eventUser').textContent='@'+user;
 setEventUserAvatar(user,avatarUrl);
 $('eventTitle').textContent=title;
 $('eventSub').textContent=sub;
 p.style.borderColor=color||'#6c4b16';
 if(giftName)setEventGiftImage(giftName);else setEventGiftImage('');
 p.classList.add('show');
 clearTimeout(popTimer);
 popTimer=setTimeout(()=>p.classList.remove('show'),1450);
}
function burst(o,color,n=14){const limit=S.orbs.size>28?8:n;for(let i=0;i<limit;i++)S.particles.push({x:o.x,y:o.y,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,life:1,color})}
function normalizeUser(u){return String(u||'usuario').replace(/^@/,'').trim().slice(0,26)||'usuario'}
function createOrb(user,source='follow',avatarUrl=''){
 user=normalizeUser(user);
 if(S.orbs.has(user))return S.orbs.get(user);
 if(S.orbs.size>=S.maxOrbs){show(user,'ARENA CHEIA','O limite atual de bolinhas foi atingido','#d9a23a');return null}
 const a=Math.random()*Math.PI*2,r=.10+Math.random()*.28,t=tiers[0];
 const o={user,avatarUrl:avatarUrl||'',x:.5+Math.cos(a)*r,y:.5+Math.sin(a)*r,vx:(Math.random()-.5)*.48,vy:(Math.random()-.5)*.48,color:'#d8aa45',
 hp:110,maxHp:110,level:1,xp:0,totalCoins:0,size:.0245,speed:1.05,blades:1,damage:S.baseDamage,shield:0,regen:.15,kills:0,angle:Math.random()*6.28,lastHit:new Map(),lastClash:new Map(),tier:t.title,aura:t.color,alive:true,
 dashAt:performance.now()+500+Math.random()*1200,dashPulse:0,wallFlash:0,
 weaponName:'Lâmina Inicial',weaponShape:'dagger',weaponTint:'#b8892f',weaponPower:1,
 durability:110,protection:0,lastGift:'Entrada'};
 S.orbs.set(user,o);if(avatarUrl)setOrbAvatar(o,avatarUrl);burst(o,t.color,20);show(
 user,
 source==='follow' ? '➕ SEGUIU E ENTROU!' :
 source==='share' ? '🔁 COMPARTILHOU E ENTROU!' :
 '⚪ ENTROU NA ARENA',
 source==='share' ? 'Nv.1 • 1 lâmina • 1 escudo' : 'Nv.1 • 1 lâmina de energia',
 source==='share' ? '#e6c15d' : t.color,
 '',
 avatarUrl
);soundWhoosh();addBattleFeed(`<b>@${esc(user)}</b> entrou na arena`,'');addBattleEnergy(8);updateUI(true);return o
}

function follow(user,avatarUrl=''){
 user=normalizeUser(user);
 S.followed.add(user);
 createOrb(user,'follow',avatarUrl)
}

/* V20: limite de bônus por compartilhamento, individual por usuário. */
const SHARE_BONUS_INTERVAL_MS=5*60*1000;
const SHARE_BONUS_STORAGE_KEY='orbShareBonusesV20';
const lastShareBonuses=new Map();

try{
 const saved=JSON.parse(localStorage.getItem(SHARE_BONUS_STORAGE_KEY)||'{}');
 const now=Date.now();
 for(const [key,timestamp] of Object.entries(saved)){
   const t=Number(timestamp);
   if(Number.isFinite(t) && t>0 && now-t<SHARE_BONUS_INTERVAL_MS){
     lastShareBonuses.set(key,t);
   }
 }
}catch{/* armazenamento pode estar indisponível no modo de teste */}

function shareBonusKey(user){
 const owner=String(liveStatus?.username||'teste').trim().toLowerCase();
 return `${owner}|${normalizeUser(user).toLowerCase()}`;
}

function shareRemainingMs(user){
 const last=lastShareBonuses.get(shareBonusKey(user));
 return last ? Math.max(0,SHARE_BONUS_INTERVAL_MS-(Date.now()-last)) : 0;
}

function recordShareBonus(user){
 lastShareBonuses.set(shareBonusKey(user),Date.now());
 const now=Date.now();
 // Limpa registros vencidos para não acumular nomes no navegador.
 for(const [key,at] of lastShareBonuses){
   if(now-at>=SHARE_BONUS_INTERVAL_MS)lastShareBonuses.delete(key);
 }
 try{localStorage.setItem(SHARE_BONUS_STORAGE_KEY,JSON.stringify(Object.fromEntries(lastShareBonuses)))}catch{}
}

function shareCooldownLabel(ms){
 const sec=Math.ceil(ms/1000);
 return `${Math.floor(sec/60)}min ${String(sec%60).padStart(2,'0')}s`;
}

function share(user,avatarUrl='',showCooldown=false){
 user=normalizeUser(user);
 const waiting=shareRemainingMs(user);
 if(waiting>0){
   if(showCooldown){
     show(user,'⏳ COMPARTILHAMENTO JÁ CONTADO',
       `Novo bônus em ${shareCooldownLabel(waiting)}`,'#e6c15d');
   }
   return false;
 }
 let o=S.orbs.get(user);
 if(o&&avatarUrl)setOrbAvatar(o,avatarUrl);

 if(!o){
   o=createOrb(user,'share',avatarUrl);
   if(!o)return false;
   o.shield=Math.max(1,o.shield);
   o.xp+=6;
   o.protection=Math.max(8,o.protection);
   o.durability=Math.max(125,o.durability);
   o.maxHp=Math.max(125,o.maxHp);
   o.hp=Math.max(o.hp,125);
   o.aura='#e6c15d';
   burst(o,'#e6c15d',20);
   show(user,'🔁 COMPARTILHOU A LIVE!','Nv.1 • orbital inicial • escudo','#e6c15d','',avatarUrl||o.avatarUrl||'');
   soundWhoosh();
 }else{
   o.shield=Math.min(4,o.shield+1);
   o.xp+=8;
   o.hp=Math.min(o.maxHp,o.hp+8);
   burst(o,'#e6c15d',16);
   show(user,'🔁 COMPARTILHOU A LIVE!','+1 escudo • +XP','#e6c15d','',avatarUrl||o.avatarUrl||'');
   soundWhoosh();
 }
 recordShareBonus(user);
 updateUI(true);
 return true;
}
function upgrade(user,gift,coins,avatarUrl=''){
 user=normalizeUser(user);
 coins=Math.max(1,Math.floor(Number(coins)||1));

 let o=S.orbs.get(user)||createOrb(user,'gift',avatarUrl);
 if(o&&avatarUrl)setOrbAvatar(o,avatarUrl);
 if(!o)return;

 const weapon=weaponForGift(gift,coins);
 const beforeWeapon=o.weaponName;
 const beforeLevel=o.level;

 o.totalCoins+=coins;
 o.xp+=Math.max(2,Math.round(Math.sqrt(coins)*2.6));

 // A bolinha é a mesma; só os atributos/equipamentos evoluem.
 o.level=Math.max(o.level,1+Math.floor(Math.log2(o.totalCoins+1)*1.45));
 o.size=Math.min(.060,o.size + Math.min(.012,Math.log10(coins+1)*.0017));
 o.speed=Math.min(2.55,o.speed + Math.min(.16,Math.log10(coins+1)*.025));

 o.durability=Math.max(o.durability,110+weapon.durability+Math.round(Math.sqrt(o.totalCoins)*2));
 o.maxHp=Math.max(o.maxHp,o.durability);
 o.hp=Math.min(o.maxHp,o.hp+Math.max(8,Math.round(Math.sqrt(coins)*2.4)));

 o.protection=Math.max(o.protection,weapon.protection);
 o.shield=Math.max(o.shield,Math.floor(o.protection/20));

 o.weaponName=weapon.name;
 o.weaponShape=weapon.shape;
 o.weaponTint=weapon.tint;
 o.weaponPower=weapon.power;
 o.lastGift=gift;

 o.blades=Math.max(o.blades,weapon.blades);
 o.damage=(S.baseDamage + o.blades*1.6 + Math.log10(o.totalCoins+1)*1.7) * weapon.power;

 if(coins>=500)o.regen=Math.min(6,o.regen+.45);
 if(String(gift).toLowerCase()==='hatch me'){
   o.blades=Math.max(o.blades,2);
   o.weaponName='Lâmina Hatch';
   o.weaponShape='hatch';
   o.weaponTint='#d7ac48';
 }

 const t=tierFor(o.totalCoins);
 o.tier=t.title;
 o.aura=weapon.tint || t.color;

 burst(o,o.aura,20+Math.min(24,o.blades*2));

 const levelUp=o.level>beforeLevel?` • Nv.${o.level}`:'';
 const weaponChanged=o.weaponName!==beforeWeapon?` • ${o.weaponName}`:'';

 show(
   user,
   `${gift} • ${nf.format(coins)} MOEDAS`,
   `EVOLUIU${levelUp}${weaponChanged} • ${o.blades} ARMA${o.blades>1?'S':''}`,
   o.aura,
   gift,
   avatarUrl||o.avatarUrl||''
 );

 if(coins>=1000){
   document.body.classList.add('legendary-pulse');
   setTimeout(()=>document.body.classList.remove('legendary-pulse'),700);
 }
 addBattleFeed(`<b>@${esc(user)}</b> evoluiu com ${esc(gift)}`,'evo');addBattleEnergy(Math.min(26,6+Math.log10(coins+1)*5));if(coins>=100)showEvolutionBanner(user,`Nv.${o.level}`,o.weaponName);
 soundPowerUp();
 updateUI(true);
}
function removeOrb(o,killer){
 if(!o.alive)return;o.alive=false;burst(o,'#fff3c4',22);S.orbs.delete(o.user);
 if(killer&&killer.alive){killer.kills++;S.totalKills++;killer.xp+=12;killer.hp=Math.min(killer.maxHp,killer.hp+8);show(killer.user,'⚡ ELIMINAÇÃO!',`@${o.user} foi eliminado`,killer.aura,'',killer.avatarUrl||'');addBattleFeed(`<b>@${esc(killer.user)}</b> eliminou @${esc(o.user)}`,'kill');showKOBanner(killer.user,o.user);addBattleEnergy(18);soundKO()}
 updateUI(true)
}
function hit(target,attacker,dmg){
 const dx=target.x-attacker.x,dy=target.y-attacker.y,len=Math.hypot(dx,dy)||1;
 if(target.shield>0){
   target.shield--;target.vx+=dx/len*.18;target.vy+=dy/len*.18;
   burst(target,'#f0c95e',8);soundSwordHit(.55);return
 }
 const reduced=dmg*(1-Math.min(.72,(target.protection||0)/160));
 target.hp-=reduced;
 target.vx+=dx/len*.24;target.vy+=dy/len*.24;
 attacker.vx-=dx/len*.045;attacker.vy-=dy/len*.045;
 target.wallFlash=1;
 target.swordFlash=1;
 burst(target,'#d9a23a',7);
 if(target.hp<=0)removeOrb(target,attacker)
}
function addLikes(n){
 S.likes+=Math.max(0,Number(n)||0);
 while(S.likes>=100){S.likes-=100;if(S.orbs.size){for(const o of S.orbs.values()){o.xp+=2;o.hp=Math.min(o.maxHp,o.hp+3)}const arr=[...S.orbs.values()],winner=arr[Math.floor(Math.random()*arr.length)];winner.xp+=10;winner.hp=Math.min(winner.maxHp,winner.hp+12);burst(winner,'#efc968',16);show(winner.user,'❤️ 100 CURTIDAS','DROP DE XP + RECUPERAÇÃO','#efc968')}}
 updateUI(true)
}
function cellKey(x,y){return `${Math.floor(x/S.cell)},${Math.floor(y/S.cell)}`}
function rebuildGrid(){S.grid.clear();for(const o of S.orbs.values()){const k=cellKey(o.x,o.y);if(!S.grid.has(k))S.grid.set(k,[]);S.grid.get(k).push(o)}}
function nearby(o){const cx=Math.floor(o.x/S.cell),cy=Math.floor(o.y/S.cell),out=[];for(let dx=-1;dx<=1;dx++)for(let dy=-1;dy<=1;dy++){const a=S.grid.get(`${cx+dx},${cy+dy}`);if(a)out.push(...a)}return out}
function step(dt){
 const now=performance.now();
 rebuildGrid();

 for(const o of S.orbs.values()){
   o.angle+=dt*(3.1+o.speed*.5);
   o.hp=Math.min(o.maxHp,o.hp+o.regen*dt);
   o.dashPulse=Math.max(0,(o.dashPulse||0)-dt*2.6);
   o.wallFlash=Math.max(0,(o.wallFlash||0)-dt*4);
   o.swordFlash=Math.max(0,(o.swordFlash||0)-dt*7);

   // Movimento constante e mais vivo.
   o.vx+=(Math.sin(o.angle*.91)*.115+(.5-o.x)*.026)*dt*o.speed;
   o.vy+=(Math.cos(o.angle*.77)*.115+(.49-o.y)*.026)*dt*o.speed;

   // Investida automática em outra bolinha de tempos em tempos.
   if(now>(o.dashAt||0) && S.orbs.size>1){
     const candidates=nearby(o).filter(x=>x!==o&&x.alive);
     let target=candidates.length?candidates[Math.floor(Math.random()*candidates.length)]:null;
     if(!target){
       const all=[...S.orbs.values()].filter(x=>x!==o&&x.alive);
       target=all.length?all[Math.floor(Math.random()*all.length)]:null;
     }
     if(target){
       const dx=target.x-o.x,dy=target.y-o.y,len=Math.hypot(dx,dy)||1;
       const power=.28+Math.min(.22,o.speed*.07);
       o.vx+=dx/len*power;o.vy+=dy/len*power;
       o.dashPulse=1;
     }
     o.dashAt=now+850+Math.random()*1700;
   }

   o.vx*=Math.pow(.58,dt);
   o.vy*=Math.pow(.58,dt);
   o.x+=o.vx*dt*o.speed*1.35;
   o.y+=o.vy*dt*o.speed*1.35;

   // Parede oval de verdade: bate, quica e volta para a arena.
   const cx=.5,cy=.49,rx=.455,ry=.405;
   const ex=(o.x-cx)/rx,ey=(o.y-cy)/ry;
   const q=Math.hypot(ex,ey);
   if(q>1){
     o.x=cx+(o.x-cx)/q*.985;
     o.y=cy+(o.y-cy)/q*.985;
     let nx=(o.x-cx)/(rx*rx),ny=(o.y-cy)/(ry*ry);
     const nl=Math.hypot(nx,ny)||1;nx/=nl;ny/=nl;
     const dot=o.vx*nx+o.vy*ny;
     if(dot>0){
       o.vx=(o.vx-1.9*dot*nx)*1.08;
       o.vy=(o.vy-1.9*dot*ny)*1.08;
     }else{
       o.vx-=nx*.06;o.vy-=ny*.06;
     }
     o.wallFlash=1;
     burst(o,o.aura,3);
   }
 }

 rebuildGrid();
 const checked=new Set();

 for(const a of S.orbs.values()){
   for(const b of nearby(a)){
     if(a===b)continue;
     const pair=a.user<b.user?`${a.user}|${b.user}`:`${b.user}|${a.user}`;
     if(checked.has(pair))continue;
     checked.add(pair);

     const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||.001,min=a.size+b.size;

     // Choque de ESPADAS: acontece antes das ORBs encostarem.
     if((a.blades||0)>0 && (b.blades||0)>0){
       const swordZone=min+.072+Math.min(.038,(a.blades+b.blades)*.0022);
       if(d<swordZone && d>min*.86){
         const clashPrev=a.lastClash?.get(b.user)||0;
         if(now-clashPrev>360){
           if(!a.lastClash)a.lastClash=new Map();
           if(!b.lastClash)b.lastClash=new Map();
           a.lastClash.set(b.user,now);
           b.lastClash.set(a.user,now);
           soundBladeClash();
           burst({x:(a.x+b.x)/2,y:(a.y+b.y)/2},'#fff3c4',7);
           a.vx-=dx/d*.035;a.vy-=dy/d*.035;
           b.vx+=dx/d*.035;b.vy+=dy/d*.035;
         }
       }
     }

     if(d<min){
       if((a.blades||0)>0 || (b.blades||0)>0){
         const bodyClashPrev=a.lastClash?.get('__body_'+b.user)||0;
         if(now-bodyClashPrev>420){
           if(!a.lastClash)a.lastClash=new Map();
           a.lastClash.set('__body_'+b.user,now);
           soundBladeClash();
         }
       }

       const nx=dx/d,ny=dy/d,push=(min-d)*.55;
       a.x-=nx*push;a.y-=ny*push;b.x+=nx*push;b.y+=ny*push;

       const rvx=b.vx-a.vx,rvy=b.vy-a.vy,closing=rvx*nx+rvy*ny;
       const impulse=Math.max(.07,Math.abs(closing)*.72+.055);
       a.vx-=nx*impulse;a.vy-=ny*impulse;
       b.vx+=nx*impulse;b.vy+=ny*impulse;

       a.dashPulse=Math.max(a.dashPulse,.35);
       b.dashPulse=Math.max(b.dashPulse,.35);

       if(Math.random()<.22){
         burst({x:(a.x+b.x)/2,y:(a.y+b.y)/2},'#fff3c4',3);
       }
     }
   }

   if(!a.blades)continue;
   for(const b of nearby(a)){
     if(a===b||!b.alive)continue;
     for(let k=0;k<a.blades;k++){
       const ang=a.angle*2.9+k*Math.PI*2/a.blades;
       const rad=a.size+.020+Math.min(.025,a.blades*.0021);
       const bx=a.x+Math.cos(ang)*rad,by=a.y+Math.sin(ang)*rad;
       if(Math.hypot(bx-b.x,by-b.y)<b.size+.008){
         const prev=a.lastHit.get(b.user)||0;
         if(now-prev>430){
           a.lastHit.set(b.user,now);
           soundSwordHit(Math.min(1.4,.7+a.damage/55));
           hit(b,a,a.damage);
         }
       }
     }
   }
 }
}

let recentBattleEnergy=0;
let battleEnergyDecayTimer=0;

function addBattleEnergy(amount){
 recentBattleEnergy=Math.max(0,Math.min(100,recentBattleEnergy+amount));
}

function updateBattleEnergy(){
 // base energy from activity/players
 const playerEnergy=Math.min(42,S.orbs.size*3.2);
 const killEnergy=Math.min(24,S.totalKills*2.5);
 const liveEnergy=recentBattleEnergy;
 const value=Math.max(0,Math.min(100,playerEnergy+killEnergy+liveEnergy));

 const fill=$('battleEnergyFill');
 const label=$('battleEnergyLabel');
 const mode=$('battleModeLabel');
 const readout=$('combatReadout');

 if(fill)fill.style.width=value+'%';
 if(label)label.textContent=Math.round(value)+'%';

 let state='AGUARDANDO';
 if(value>=75)state='RAGNAROK';
 else if(value>=48)state='INTENSO';
 else if(value>=22)state='ATIVO';
 else if(S.orbs.size>0)state='CALMO';

 if(mode)mode.textContent=state;
 if(readout)readout.textContent=state;

 recentBattleEnergy=Math.max(0,recentBattleEnergy-.9);
}

function updateUI(force=false){
 const now=performance.now();if(!force&&now-lastUi<220)return;lastUi=now;
 $('orbCount').textContent=S.orbs.size;$('killCount').textContent=S.totalKills;$('maxLevel').textContent=S.orbs.size?Math.max(...[...S.orbs.values()].map(o=>o.level)):0;$('likesCount').textContent=`${S.likes}/100`;
 $('likesMeterText').textContent=`${S.likes}/100`;$('likesMeterFill').style.width=`${S.likes}%`;$('emptyHint').classList.toggle('hidden',S.orbs.size>0);
 $('arenaStatus').textContent=S.orbs.size?`${S.orbs.size} PARTICIPANTE${S.orbs.size>1?'S':''} BATALHANDO`:'AGUARDANDO PARTICIPANTES';
 const arr=[...S.orbs.values()].sort((a,b)=>(b.kills-a.kills)||(b.totalCoins-a.totalCoins)||(b.level-a.level)).slice(0,10);
 $('ranking').innerHTML=arr.length?arr.map((o,i)=>{
 const avatar=o.avatarUrl
   ? `<img class="rank-avatar" src="${esc(o.avatarUrl)}" alt="">`
   : `<div class="rank-avatar-fallback">${esc(avatarInitial(o.user))}</div>`;
 return `<div class="rank-row">
   <div class="rank-n">#${i+1}</div>
   ${avatar}
   <div class="rank-user">
     <b>@${esc(o.user)}</b>
     <small>Nv.${o.level} • ${o.tier} • ${Math.max(0,Math.ceil(o.hp))}/${Math.ceil(o.maxHp)} DUR</small>
   </div>
   <div class="rank-kills">${o.kills} KO</div>
 </div>`;
}).join(''):'<div style="font-size:7px;color:#9d8a62;padding:10px;text-align:center">Siga a LIVE para entrar.</div>'
 updateChampion();
 updateBattleEnergy();
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function draw(){
 const r=canvas.getBoundingClientRect(),w=r.width,h=r.height;
 const bg=ctx.createRadialGradient(w*.5,h*.44,15,w*.5,h*.44,w*.68);bg.addColorStop(0,'#2a210d');bg.addColorStop(.56,'#0b0905');bg.addColorStop(1,'#010101');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
 ctx.strokeStyle='rgba(239,201,104,.055)';ctx.lineWidth=1;for(let i=0;i<13;i++){ctx.beginPath();ctx.moveTo(0,i*h/13);ctx.lineTo(w,i*h/13);ctx.stroke()}for(let i=0;i<13;i++){ctx.beginPath();ctx.moveTo(i*w/13,0);ctx.lineTo(i*w/13,h);ctx.stroke()}
 ctx.strokeStyle='rgba(239,201,104,.18)';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(w*.5,h*.49,w*.47,h*.43,0,0,Math.PI*2);ctx.stroke();
 const many=S.orbs.size>28;
 for(const o of S.orbs.values()){
   const px=o.x*w,py=o.y*h,rr=o.size*Math.min(w,h);

   // Rastro de velocidade: deixa a arena parecer muito mais ativa.
   const vel=Math.hypot(o.vx,o.vy);
   if((o.dashPulse||0)>.02 || vel>.16){
     const len=Math.min(34,8+vel*45);
     const vl=vel||1;
     ctx.globalAlpha=Math.min(.42,.12+(o.dashPulse||0)*.3);
     ctx.strokeStyle=o.aura;
     ctx.lineWidth=Math.max(2,rr*.22);
     ctx.beginPath();
     ctx.moveTo(px,py);
     ctx.lineTo(px-o.vx/vl*len,py-o.vy/vl*len);
     ctx.stroke();
     ctx.globalAlpha=1;
   }

   if((o.swordFlash||0)>.02){
     ctx.globalAlpha=Math.min(.85,o.swordFlash);
     ctx.strokeStyle='#fff3c4';
     ctx.lineWidth=2;
     ctx.beginPath();
     ctx.arc(px,py,rr+12+(1-o.swordFlash)*9,0,Math.PI*2);
     ctx.stroke();
     ctx.globalAlpha=1;
   }

   if((o.wallFlash||0)>.02){
     ctx.globalAlpha=Math.min(.55,o.wallFlash);
     ctx.strokeStyle='#fff3c4';
     ctx.lineWidth=3;
     ctx.beginPath();ctx.arc(px,py,rr+8,0,Math.PI*2);ctx.stroke();
     ctx.globalAlpha=1;
   }
   if(!many){const aura=ctx.createRadialGradient(px,py,rr*.35,px,py,rr*2);aura.addColorStop(0,o.aura+'44');aura.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=aura;ctx.beginPath();ctx.arc(px,py,rr*2,0,Math.PI*2);ctx.fill()}
   if(o.shield>0){ctx.strokeStyle='#efc968';ctx.lineWidth=2;ctx.beginPath();ctx.arc(px,py,rr+6,0,Math.PI*2);ctx.stroke()}
   // Corpo da ORB — moldura premium + foto do perfil
   ctx.save();
   ctx.shadowColor=o.aura;
   ctx.shadowBlur=many?5:14;

   const shell=ctx.createRadialGradient(px-rr*.3,py-rr*.35,rr*.12,px,py,rr);
   shell.addColorStop(0,'#fff3c4');
   shell.addColorStop(.12,o.aura||o.color);
   shell.addColorStop(.58,'#1c160b');
   shell.addColorStop(1,'#020202');
   ctx.fillStyle=shell;
   ctx.beginPath();
   ctx.arc(px,py,rr,0,Math.PI*2);
   ctx.fill();
   ctx.restore();

   drawAvatarInsideOrb(o,px,py,rr);

   // anéis mecânicos
   ctx.strokeStyle=o.aura;
   ctx.lineWidth=Math.max(1.5,rr*.08);
   ctx.beginPath();
   ctx.arc(px,py,rr,0,Math.PI*2);
   ctx.stroke();

   if(!many){
     ctx.globalAlpha=.45;
     ctx.strokeStyle='#efd67f';
     ctx.lineWidth=1;
     ctx.beginPath();
     ctx.arc(px,py,rr+3,-1.1,.65);
     ctx.stroke();
     ctx.beginPath();
     ctx.arc(px,py,rr+3,2.0,3.7);
     ctx.stroke();
     ctx.globalAlpha=1;
   }

   // badge de nível preso na orb
   const badgeR=Math.max(6,rr*.30);
   const bx=px+rr*.69,by=py+rr*.65;
   ctx.fillStyle='#030303';
   ctx.strokeStyle=o.aura;
   ctx.lineWidth=1.3;
   ctx.beginPath();
   ctx.arc(bx,by,badgeR,0,Math.PI*2);
   ctx.fill();ctx.stroke();
   ctx.fillStyle='#fff';
   ctx.textAlign='center';
   ctx.textBaseline='middle';
   ctx.font=`900 ${Math.max(5,badgeR*.85)}px Arial`;
   ctx.fillText(String(o.level),bx,by+.2);
   for(let k=0;k<o.blades;k++){
     const ang=o.angle*2.9+k*Math.PI*2/o.blades;
     const rad=rr+12+Math.min(18,o.blades*1.45);
     const bx=px+Math.cos(ang)*rad,by=py+Math.sin(ang)*rad;

     ctx.save();
     ctx.translate(bx,by);
     ctx.rotate(ang+Math.PI/2);
     if(!many){ctx.shadowColor=o.weaponTint||o.aura;ctx.shadowBlur=9}
     ctx.fillStyle=o.weaponTint||o.aura;
     ctx.strokeStyle='#fff3c4aa';
     ctx.lineWidth=1;

     switch(o.weaponShape){
       case 'disc':
       case 'ring':
         ctx.beginPath();ctx.arc(0,0,6,0,Math.PI*2);ctx.fill();
         ctx.fillStyle='#050403';ctx.beginPath();ctx.arc(0,0,2.5,0,Math.PI*2);ctx.fill();
         break;

       case 'wing':
         ctx.beginPath();ctx.moveTo(0,-11);ctx.quadraticCurveTo(8,-3,6,7);ctx.lineTo(0,3);ctx.lineTo(-6,7);ctx.quadraticCurveTo(-8,-3,0,-11);ctx.fill();ctx.stroke();
         break;

       case 'trident':
         ctx.fillRect(-1.5,-9,3,16);
         ctx.beginPath();ctx.moveTo(0,-12);ctx.lineTo(0,-5);ctx.moveTo(-5,-10);ctx.lineTo(-5,-4);ctx.moveTo(5,-10);ctx.lineTo(5,-4);ctx.stroke();
         break;

       case 'claw':
         for(let q=-1;q<=1;q++){ctx.beginPath();ctx.moveTo(q*4,6);ctx.quadraticCurveTo(q*6,-2,q*3,-11);ctx.stroke()}
         break;

       case 'heavy':
         ctx.beginPath();ctx.moveTo(-5,-9);ctx.lineTo(5,-9);ctx.lineTo(7,5);ctx.lineTo(0,9);ctx.lineTo(-7,5);ctx.closePath();ctx.fill();ctx.stroke();
         break;

       case 'cosmic':
       case 'universe':
         ctx.beginPath();
         for(let q=0;q<8;q++){const a=q*Math.PI/4,rad2=q%2?3:9;ctx.lineTo(Math.cos(a)*rad2,Math.sin(a)*rad2)}
         ctx.closePath();ctx.fill();ctx.stroke();
         break;

       case 'heart':
         ctx.beginPath();ctx.moveTo(0,8);ctx.bezierCurveTo(-10,0,-7,-8,0,-4);ctx.bezierCurveTo(7,-8,10,0,0,8);ctx.fill();
         break;

       case 'jet':
       case 'speed':
         ctx.beginPath();ctx.moveTo(0,-12);ctx.lineTo(5,7);ctx.lineTo(0,4);ctx.lineTo(-5,7);ctx.closePath();ctx.fill();
         ctx.globalAlpha=.45;ctx.fillStyle='#fff';ctx.fillRect(-1,7,2,8);ctx.globalAlpha=1;
         break;

       case 'hatch':
         ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(4,6);ctx.lineTo(0,3);ctx.lineTo(-4,6);ctx.closePath();ctx.fill();
         ctx.fillStyle='#fff0b8';ctx.beginPath();ctx.arc(0,-3,2.2,0,Math.PI*2);ctx.fill();
         break;

       default:
         ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(4,7);ctx.lineTo(0,4);ctx.lineTo(-4,7);ctx.closePath();ctx.fill();ctx.stroke();
     }
     ctx.restore();
   }
   if(S.showNames&&!many){
     const labelY=py-rr-10;
     ctx.textAlign='center';
     ctx.textBaseline='alphabetic';
     ctx.font=`900 ${Math.max(7,Math.min(10,rr*.55))}px Arial`;
     const name='@'+o.user;
     const tw=Math.max(34,ctx.measureText(name).width+12);
     ctx.fillStyle='rgba(2,7,12,.76)';
     ctx.beginPath();
     ctx.roundRect(px-tw/2,labelY-10,tw,13,5);
     ctx.fill();
     ctx.strokeStyle='rgba(111,210,255,.22)';
     ctx.lineWidth=1;
     ctx.stroke();
     ctx.fillStyle='#fff3c4';
     ctx.fillText(name,px,labelY);
   }
   const bw=Math.max(25,rr*1.55),hp=Math.max(0,o.hp/o.maxHp);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(px-bw/2,py+rr+5,bw,3);ctx.fillStyle=hp>.45?'#efc968':'#8c661f';ctx.fillRect(px-bw/2,py+rr+5,bw*hp,3);
   if(!many){
     ctx.fillStyle=o.aura;
     ctx.textAlign='center';
     ctx.font='800 5.5px Arial';
     ctx.fillText(`${o.tier}`,px,py+rr+17);
   }
 }
 const particleCap=many?40:90;if(S.particles.length>particleCap)S.particles.splice(0,S.particles.length-particleCap);
 for(let i=S.particles.length-1;i>=0;i--){const p=S.particles[i];p.x+=p.vx*.01;p.y+=p.vy*.01;p.vx*=.95;p.vy*=.95;p.life-=.03;ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x*w,p.y*h,2.2,0,Math.PI*2);ctx.fill();if(p.life<=0)S.particles.splice(i,1)}ctx.globalAlpha=1;
 requestAnimationFrame(draw)
}
function loop(now){const dt=Math.min(.04,(now-S.last)/1000);S.last=now;step(dt);updateUI();requestAnimationFrame(loop)}

window.liveFollow=(user,avatar='')=>follow(user,avatar);
window.liveShare=(user,avatar='')=>share(user,avatar);
window.liveGift=({user,giftName,coins,avatar=''})=>upgrade(user,giftName,coins,avatar);
window.liveLikes=(count)=>addLikes(count);

const sel=$('giftSelect');
for(const g of gifts){const op=document.createElement('option');op.value=JSON.stringify(g);op.textContent=`${g.icon} ${g.name} — ${nf.format(g.coins)} moedas`;sel.appendChild(op)}
const hatch=document.createElement('option');hatch.value='HATCH';hatch.textContent='🥚 Hatch Me — preço configurável';sel.appendChild(hatch);


/* ===== V6: conexão em tempo real ===== */
let adminPin=sessionStorage.getItem('orbAdminPin')||'';
let liveEventCount=0;
let liveStatus={connected:false,connecting:false,username:'',roomId:'',message:'Desconectado'};
const liveLogItems=[];

const socket=(typeof io==='function')
 ? io({
     transports:['websocket','polling'],
     upgrade:true,
     reconnection:true,
     reconnectionDelay:600,
     reconnectionDelayMax:2500,
     timeout:8000
   })
 : null;

function addLiveLog(text){
 liveLogItems.unshift(text);
 if(liveLogItems.length>10)liveLogItems.length=10;
 const box=$('liveLog');
 if(box)box.innerHTML=liveLogItems.map(x=>`<div>${esc(x)}</div>`).join('');
}

function renderLiveStatus(status=liveStatus){
 liveStatus={...liveStatus,...status};
 const badge=$('connectionBadge'),top=$('topLiveStatus'),msg=$('connectionMessage');
 const connected=!!liveStatus.connected,connecting=!!liveStatus.connecting;

 if(badge){
   badge.className=`connection-badge ${connected?'on':connecting?'connecting':'off'}`;
   badge.textContent=connected?'CONECTADO':connecting?'CONECTANDO':'DESCONECTADO';
 }
 if(top){
   top.className=`top-live-status ${connected?'on':connecting?'connecting':'off'}`;
   top.textContent=connected?`● @${liveStatus.username||'LIVE'}`:connecting?'● CONECTANDO':'● OFF';
 }
 if(msg)msg.textContent=liveStatus.message||(
   connected?`Conectado em @${liveStatus.username}`:'Desconectado'
 );
 if($('roomIdText'))$('roomIdText').textContent=liveStatus.roomId||'—';
}


function pulseActionCard(kind){
 const map={
   follow:'.v18-rule.action-follow',
   gift:'.v18-rule.action-gift',
   share:'.v18-rule.action-share',
   like:'.v18-rule.action-like'
 };
 const el=document.querySelector(map[kind]||'');
 if(!el)return;
 el.classList.remove('v14-pulse');
 void el.offsetWidth;
 el.classList.add('v14-pulse');
 setTimeout(()=>el.classList.remove('v14-pulse'),650);
}

function handleLiveEvent(evt){
 if(!evt||!evt.type)return;
 liveEventCount++;
 if($('liveEventCount'))$('liveEventCount').textContent=liveEventCount;
 if($('lastEventType'))$('lastEventType').textContent=String(evt.type).toUpperCase();

 if(evt.type==='follow'){
   pulseActionCard('follow');
   follow(evt.user,evt.avatar||'');
   addLiveLog(`➕ @${evt.user} seguiu`);
 }else if(evt.type==='share'){
   if(share(evt.user,evt.avatar||'')){
     pulseActionCard('share');
     addLiveLog(`🔁 @${evt.user}: bônus de compartilhar (+escudo/XP)`);
   }
 }else if(evt.type==='gift'){
   pulseActionCard('gift');
   upgrade(evt.user,evt.giftName||'Presente',Math.max(1,Number(evt.coins)||1),evt.avatar||'');
   addLiveLog(`🎁 @${evt.user}: ${evt.giftName||'Presente'} • ${nf.format(evt.coins||1)} moedas`);
 }else if(evt.type==='chat'){
   const o=S.orbs.get(normalizeUser(evt.user));
   if(o&&evt.avatar)setOrbAvatar(o,evt.avatar);
   if(evt.comment)addBattleFeed(`<b>@${esc(evt.user)}</b>: ${esc(String(evt.comment).slice(0,34))}`,'');
 }else if(evt.type==='like'){
   pulseActionCard('like');
   addLikes(Math.max(1,Number(evt.count)||1));
   addLiveLog(`❤️ +${nf.format(evt.count||1)} curtidas`);
 }
}

if(socket){
 socket.on('connect',()=>addLiveLog('🟢 Painel conectado ao servidor'));
 socket.on('disconnect',()=>addLiveLog('🟠 Painel reconectando ao servidor...'));
 socket.on('live:status',status=>renderLiveStatus(status));
 socket.on('live:event',evt=>handleLiveEvent(evt));
 socket.emit('live:status:get');
}

async function adminPost(url,body={}){
 const res=await fetch(url,{
   method:'POST',
   cache:'no-store',
   headers:{
     'Content-Type':'application/json',
     'X-Admin-Pin':adminPin
   },
   body:JSON.stringify(body)
 });
 const data=await res.json().catch(()=>({}));
 if(!res.ok)throw new Error(data.error||data.message||`Erro ${res.status}`);
 return data;
}

async function unlockAdmin(){
 const pin=String($('adminPinInput')?.value||'').trim();
 if(!pin){
   $('adminGateMessage').textContent='Digite o PIN.';
   return;
 }
 adminPin=pin;
 try{
   const data=await adminPost('/api/admin/check');
   sessionStorage.setItem('orbAdminPin',adminPin);
   $('adminGate').classList.add('hidden');
   $('adminContent').classList.remove('hidden');
   $('adminGateMessage').textContent='';
   const saved=localStorage.getItem('orbLastTikTokUser');
   if(saved&&!$('tiktokUsernameInput').value)$('tiktokUsernameInput').value=saved;
   if(data.status)renderLiveStatus(data.status);
   addLiveLog('🔓 Painel desbloqueado');
 }catch(e){
   $('adminGateMessage').textContent='❌ '+e.message;
 }
}

async function connectLive(){
 const username=String($('tiktokUsernameInput')?.value||'').trim().replace(/^@/,'');
 if(!username){
   $('connectionMessage').textContent='Digite o @usuário da LIVE.';
   return;
 }
 localStorage.setItem('orbLastTikTokUser',username);
 renderLiveStatus({connected:false,connecting:true,username,message:`Conectando em @${username}...`});
 $('connectLiveBtn').disabled=true;
 try{
   const data=await adminPost('/api/connect',{username});
   renderLiveStatus(data.status||{connected:true,username,message:`Conectado em @${username}`});
 }catch(e){
   renderLiveStatus({connected:false,connecting:false,username,message:'❌ '+e.message});
 }finally{
   $('connectLiveBtn').disabled=false;
 }
}

async function disconnectLive(){
 $('disconnectLiveBtn').disabled=true;
 try{
   const data=await adminPost('/api/disconnect');
   renderLiveStatus(data.status||{connected:false,connecting:false,message:'Desconectado'});
 }catch(e){
   $('connectionMessage').textContent='❌ '+e.message;
 }finally{
   $('disconnectLiveBtn').disabled=false;
 }
}

$('unlockAdminBtn').onclick=unlockAdmin;
$('adminPinInput').addEventListener('keydown',e=>{
 if(e.key==='Enter'){e.preventDefault();unlockAdmin()}
});
$('connectLiveBtn').onclick=connectLive;
$('disconnectLiveBtn').onclick=disconnectLive;
$('lockAdminBtn').onclick=()=>{
 adminPin='';
 sessionStorage.removeItem('orbAdminPin');
 $('adminContent').classList.add('hidden');
 $('adminGate').classList.remove('hidden');
 $('adminPinInput').value='';
};


$('followBtn').onclick=()=>follow($('userInput').value);
$('shareBtn').onclick=()=>share($('userInput').value,'',true);
$('sendGiftBtn').onclick=()=>{if(sel.value==='HATCH')upgrade($('userInput').value,'Hatch Me',S.hatchPrice);else{const g=JSON.parse(sel.value);upgrade($('userInput').value,g.name,g.coins)}};
document.querySelectorAll('[data-user]').forEach(b=>b.onclick=()=>{$('userInput').value=b.dataset.user});
$('likesBtn').onclick=()=>addLikes(100);
$('fillArenaBtn').onclick=()=>{
 const names=['joao','maria','lucas','ana','davi','bia','leo','sofia','gui','lara','caio','nina','teo','luiza'];
 for(let i=0;i<names.length;i++){
   const color=`hsl(${(i*43)%360} 76% 48%)`;
   const avatar=demoAvatarData(names[i],color);
   follow(names[i],avatar);
   if(i%2===0){
     const g=gifts[Math.min(gifts.length-1,i*2)];
     upgrade(names[i],g.name,g.coins,avatar);
   }
 }
};
$('resetBtn').onclick=()=>{S.orbs.clear();S.followed.clear();S.likes=0;S.totalKills=0;S.particles=[];updateUI(true)};
$('liveModeBtn').onclick=()=>{S.liveMode=!S.liveMode;document.body.classList.toggle('live-mode',S.liveMode);$('liveModeBtn').textContent=S.liveMode?'↩ SAIR LIVE':'📱 MODO LIVE';setTimeout(resize,100)};
$('settingsBtn').onclick=()=>{
 $('maxOrbsInput').value=S.maxOrbs;
 $('damageInput').value=S.baseDamage;
 $('hatchPriceInput').value=S.hatchPrice;
 $('soundInput').checked=S.sound;
 $('musicInput').checked=musicEnabled;
 $('musicVolumeInput').value=Math.round(musicVolume*100);
 $('namesInput').checked=S.showNames;

 if(adminPin){
   adminPost('/api/admin/check')
     .then(data=>{
       $('adminGate').classList.add('hidden');
       $('adminContent').classList.remove('hidden');
       if(data.status)renderLiveStatus(data.status);
     })
     .catch(()=>{
       adminPin='';
       sessionStorage.removeItem('orbAdminPin');
       $('adminContent').classList.add('hidden');
       $('adminGate').classList.remove('hidden');
     });
 }else{
   $('adminContent').classList.add('hidden');
   $('adminGate').classList.remove('hidden');
 }

 $('settings').classList.remove('hidden');
};
$('closeSettings').onclick=()=>$('settings').classList.add('hidden');
$('saveSettings').onclick=()=>{S.maxOrbs=Math.max(8,Math.min(80,+$('maxOrbsInput').value||40));S.baseDamage=Math.max(1,Math.min(50,+$('damageInput').value||7));S.hatchPrice=Math.max(1,Math.min(100000,+$('hatchPriceInput').value||5));S.sound=$('soundInput').checked;
setMusicEnabled($('musicInput').checked);
setMusicVolume((Number($('musicVolumeInput').value)||0)/100);
S.showNames=$('namesInput').checked;
$('settings').classList.add('hidden')};

$('evolutionList').innerHTML=tiers.map(t=>`<div class="evo-item" style="border-color:${t.color}44"><span>${t.min===0?'SEGUIU':nf.format(t.min)+'+ moedas'}</span><b style="color:${t.color}">${t.title}</b><small>${t.desc}</small></div>`).join('');
function renderGiftCatalog(){
 $('catalogList').innerHTML=gifts.map(g=>{
   const w=weaponForGift(g.name,g.coins);
   return `<div class="catalog-item">
     <div class="catalog-gift-head">
       ${catalogVisual(g)}
       <div>
         <b>${esc(g.name)}</b>
         <span>${nf.format(g.coins)} moedas</span>
       </div>
     </div>
     <span class="weapon-name">⚔ ${esc(w.name)}</span>
     <span class="weapon-stats">${w.blades} arma${w.blades>1?'s':''} • +${w.durability} DUR • +${w.protection} PROT</span>
   </div>`;
 }).join('');
}
renderGiftCatalog();


let inspectedUser=null;
let inspectEditing=false;

const weaponOptions=[
  {key:'Lâmina Inicial',name:'Lâmina Inicial',shape:'dagger',tint:'#b8892f',power:1},
  ...Object.values(weaponCatalog).map(w=>({
    key:w.name,
    name:w.name,
    shape:w.shape,
    tint:w.tint,
    power:w.power
  }))
];

const uniqueWeapons=[];
const seenWeaponNames=new Set();
for(const w of weaponOptions){
  if(seenWeaponNames.has(w.name))continue;
  seenWeaponNames.add(w.name);
  uniqueWeapons.push(w);
}

$('editOrbWeapon').innerHTML=uniqueWeapons
  .map(w=>`<option value="${esc(w.name)}">${esc(w.name)}</option>`)
  .join('');

function showInspect(o){
 if(!o)return;
 inspectedUser=o.user;

 $('inspectUser').textContent='@'+o.user;
 $('inspectLevel').textContent=o.level;
 $('inspectDurability').textContent=`${Math.max(0,Math.ceil(o.hp))}/${Math.ceil(o.maxHp)}`;
 $('inspectProtection').textContent=o.protection||0;
 $('inspectDamage').textContent=Math.round(o.damage);
 $('inspectWeapon').textContent=o.weaponName||'Lâmina Inicial';
 $('inspectWeaponDesc').textContent=`${o.blades} arma${o.blades>1?'s':''} orbital${o.blades>1?'is':''} • último presente: ${o.lastGift||'Entrada'}`;

 if(!inspectEditing){
   $('inspectView').classList.remove('hidden');
   $('inspectEditor').classList.add('hidden');
 }

 $('inspectCard').classList.remove('hidden');
}

function openOrbEditor(){
 if(!inspectedUser)return;

 if(!adminPin){
   $('inspectEditMessage').textContent='🔐 Desbloqueie o PIN em ⚙ para editar.';
   $('inspectView').classList.remove('hidden');
   $('inspectEditor').classList.remove('hidden');
   return;
 }

 const o=S.orbs.get(inspectedUser);
 if(!o)return;

 inspectEditing=true;
 $('inspectView').classList.add('hidden');
 $('inspectEditor').classList.remove('hidden');
 $('inspectEditMessage').textContent='';

 $('editOrbLevel').value=Math.max(1,Math.round(o.level||1));
 $('editOrbDurability').value=Math.max(1,Math.round(o.maxHp||o.durability||110));
 $('editOrbProtection').value=Math.max(0,Math.round(o.protection||0));
 $('editOrbDamage').value=Math.max(1,Math.round(o.damage||S.baseDamage));
 $('editOrbBlades').value=Math.max(1,Math.round(o.blades||1));

 const exists=[...$('editOrbWeapon').options].some(opt=>opt.value===o.weaponName);
 if(exists)$('editOrbWeapon').value=o.weaponName||'Lâmina Inicial';
}

function closeOrbEditor(){
 inspectEditing=false;
 $('inspectEditor').classList.add('hidden');
 $('inspectView').classList.remove('hidden');
 $('inspectEditMessage').textContent='';
 const o=inspectedUser?S.orbs.get(inspectedUser):null;
 if(o)showInspect(o);
}

function saveOrbEditor(){
 if(!adminPin){
   $('inspectEditMessage').textContent='🔐 Desbloqueie o PIN em ⚙ primeiro.';
   return;
 }

 const o=S.orbs.get(inspectedUser);
 if(!o){
   $('inspectEditMessage').textContent='Bolinha não encontrada.';
   return;
 }

 const level=Math.max(1,Math.min(9999,Number($('editOrbLevel').value)||1));
 const durability=Math.max(1,Math.min(999999,Number($('editOrbDurability').value)||110));
 const protection=Math.max(0,Math.min(9999,Number($('editOrbProtection').value)||0));
 const damage=Math.max(1,Math.min(999999,Number($('editOrbDamage').value)||1));
 const blades=Math.max(1,Math.min(20,Number($('editOrbBlades').value)||1));
 const weaponName=$('editOrbWeapon').value||'Lâmina Inicial';

 const weapon=uniqueWeapons.find(w=>w.name===weaponName) || uniqueWeapons[0];

 o.level=Math.round(level);
 o.durability=Math.round(durability);
 o.maxHp=Math.round(durability);
 o.hp=Math.min(o.maxHp,Math.max(1,o.hp));
 if(o.hp < o.maxHp*.25)o.hp=o.maxHp;

 o.protection=Math.round(protection);
 o.damage=damage;
 o.blades=Math.round(blades);

 o.weaponName=weapon.name;
 o.weaponShape=weapon.shape;
 o.weaponTint=weapon.tint;
 o.weaponPower=weapon.power;
 o.aura=weapon.tint;

 // Pequena adaptação visual ao nível manual.
 o.size=Math.min(.065,.0245+Math.log10(o.level+1)*.008);
 o.speed=Math.min(2.7,1.05+Math.log10(o.level+1)*.22);

 burst(o,o.aura,18);
 show(
   o.user,
   '✏ ATRIBUTOS ATUALIZADOS',
   `Nv.${o.level} • ${o.weaponName} • ${o.blades} arma${o.blades>1?'s':''}`,
   o.aura
 );

 inspectEditing=false;
 $('inspectEditor').classList.add('hidden');
 $('inspectView').classList.remove('hidden');
 updateUI(true);
 showInspect(o);
}

$('inspectEditBtn').onclick=openOrbEditor;
$('inspectCancelEdit').onclick=closeOrbEditor;
$('inspectSaveEdit').onclick=saveOrbEditor;

$('inspectClose').onclick=()=>{
 inspectEditing=false;
 $('inspectCard').classList.add('hidden');
 $('inspectEditor').classList.add('hidden');
 $('inspectView').classList.remove('hidden');
 inspectedUser=null;
};

canvas.addEventListener('pointerdown',e=>{
 const r=canvas.getBoundingClientRect();
 const nx=(e.clientX-r.left)/r.width,ny=(e.clientY-r.top)/r.height;
 let best=null,bd=.08;
 for(const o of S.orbs.values()){
   const d=Math.hypot(nx-o.x,ny-o.y);
   if(d<bd){bd=d;best=o}
 }
 if(best)showInspect(best);
});

setInterval(()=>{
 if(inspectedUser && !inspectEditing){
   const o=S.orbs.get(inspectedUser);
   if(o)showInspect(o);
   else{
     $('inspectCard').classList.add('hidden');
     inspectedUser=null;
   }
 }
},500);


/* ===== V7: gerenciador de fotos dos presentes ===== */
const giftImageSelect=$('giftImageSelect');
for(const g of gifts){
 const opt=document.createElement('option');
 opt.value=g.name;
 opt.textContent=`${g.name} — ${nf.format(g.coins)} moedas`;
 giftImageSelect.appendChild(opt);
}
const hatchImageOpt=document.createElement('option');
hatchImageOpt.value='Hatch Me';
hatchImageOpt.textContent='Hatch Me — preço configurável';
giftImageSelect.appendChild(hatchImageOpt);

let pendingGiftImageData='';

function refreshGiftImagePreview(){
 const name=giftImageSelect.value||gifts[0]?.name||'Presente';
 const custom=giftImageFor(name);
 $('giftImagePreviewName').textContent=name;
 $('giftImagePreviewFallback').textContent=giftEmojiFor(name);

 if(custom){
   $('giftImagePreview').src=custom;
   $('giftImagePreview').classList.remove('hidden');
   $('giftImagePreviewFallback').classList.add('hidden');
   $('giftImagePreviewStatus').textContent='Imagem personalizada ativa';
 }else{
   $('giftImagePreview').removeAttribute('src');
   $('giftImagePreview').classList.add('hidden');
   $('giftImagePreviewFallback').classList.remove('hidden');
   $('giftImagePreviewStatus').textContent='Usando imagem padrão';
 }
 pendingGiftImageData='';
 $('giftImageFile').value='';
}

giftImageSelect.addEventListener('change',refreshGiftImagePreview);

$('giftImageFile').addEventListener('change',async e=>{
 const file=e.target.files?.[0];
 if(!file)return;
 try{
   $('giftImagePreviewStatus').textContent='Preparando imagem...';
   pendingGiftImageData=await resizeGiftImage(file);
   $('giftImagePreview').src=pendingGiftImageData;
   $('giftImagePreview').classList.remove('hidden');
   $('giftImagePreviewFallback').classList.add('hidden');
   $('giftImagePreviewStatus').textContent='Prévia pronta • toque em SALVAR IMAGEM';
 }catch(err){
   pendingGiftImageData='';
   $('giftImagePreviewStatus').textContent='❌ '+err.message;
 }
});

$('saveGiftImageBtn').onclick=()=>{
 const name=giftImageSelect.value;
 if(!pendingGiftImageData){
   $('giftImagePreviewStatus').textContent='Escolha uma imagem primeiro.';
   return;
 }
 giftImages[name]=pendingGiftImageData;
 saveGiftImages();
 pendingGiftImageData='';
 $('giftImagePreviewStatus').textContent='✅ Imagem salva neste aparelho';
 renderGiftCatalog();
};

$('removeGiftImageBtn').onclick=()=>{
 const name=giftImageSelect.value;
 delete giftImages[name];
 saveGiftImages();
 refreshGiftImagePreview();
 renderGiftCatalog();
};

refreshGiftImagePreview();




$('musicToggleBtn').onclick=()=>{
 setMusicEnabled(!musicEnabled);
};

$('musicInput').addEventListener('change',e=>setMusicEnabled(e.target.checked));
$('musicVolumeInput').addEventListener('input',e=>setMusicVolume((Number(e.target.value)||0)/100));

window.addEventListener('pointerdown',unlockGameAudio,{once:true,passive:true});
window.addEventListener('touchstart',unlockGameAudio,{once:true,passive:true});
const swordTestBtn=$('testSwordSoundBtn');
if(swordTestBtn)swordTestBtn.onclick=async()=>{
 getSwordContext();
 const ready=await preloadSword();
 if(ready)playSwordSample(true);
 else playFallbackSword();
};

addEventListener('resize',resize);resize();updateUI(true);requestAnimationFrame(draw);requestAnimationFrame(loop);
})();
