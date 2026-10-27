
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
 'Rose': {name:'Lâmina Rubi', shape:'dagger', tint:'#ff4d6f', blades:1, power:1.00, durability:3, protection:0},
 'Heart Me': {name:'Lâmina Coração', shape:'heart', tint:'#ff5ca8', blades:1, power:1.03, durability:4, protection:0},
 'TikTok': {name:'Lâmina Neon', shape:'neon', tint:'#49dfff', blades:1, power:1.04, durability:4, protection:0},
 'GG': {name:'Lâmina Gamer', shape:'pixel', tint:'#70ff9d', blades:1, power:1.05, durability:5, protection:0},
 'Ice Cream Cone': {name:'Lâmina Gelo', shape:'ice', tint:'#8be9ff', blades:1, power:1.04, durability:5, protection:0},
 'Finger Heart': {name:'Lâminas Gêmeas', shape:'twin', tint:'#ff7bb8', blades:2, power:1.12, durability:10, protection:1},
 'Okay': {name:'Lâmina Veloz', shape:'speed', tint:'#6affd0', blades:2, power:1.10, durability:9, protection:1},
 'Ice Cream': {name:'Lâmina Congelante', shape:'ice', tint:'#a9f3ff', blades:2, power:1.11, durability:10, protection:1},
 'Rosa': {name:'Sabre Floral', shape:'petal', tint:'#ff75a8', blades:2, power:1.16, durability:15, protection:2},
 'Friendship Necklace': {name:'Anel Guardião', shape:'ring', tint:'#d28cff', blades:2, power:1.14, durability:16, protection:3},
 'Perfume': {name:'Lâmina Prisma', shape:'prism', tint:'#c986ff', blades:2, power:1.22, durability:22, protection:3},
 'Doughnut': {name:'Disco Circular', shape:'disc', tint:'#ffbf66', blades:3, power:1.28, durability:28, protection:4},
 'Paper Crane': {name:'Asas Cortantes', shape:'wing', tint:'#e6f6ff', blades:3, power:1.38, durability:40, protection:6},
 'Hand Hearts': {name:'Orbitais Carmesim', shape:'orbital', tint:'#ff6faa', blades:3, power:1.45, durability:45, protection:7},
 'Confetti': {name:'Estilhaços Festa', shape:'shard', tint:'#ffdc5d', blades:3, power:1.44, durability:44, protection:7},
 'Sunglasses': {name:'Lâminas Sombra', shape:'shadow', tint:'#7c8cff', blades:3, power:1.55, durability:55, protection:9},
 'Corgi': {name:'Presas Corgi', shape:'fang', tint:'#ffb65d', blades:4, power:1.70, durability:70, protection:12},
 'Boxing Gloves': {name:'Punhos Orbitais', shape:'heavy', tint:'#ff5364', blades:4, power:1.74, durability:72, protection:12},
 'Money Gun': {name:'Lâminas Douradas', shape:'gold', tint:'#ffd95b', blades:4, power:1.92, durability:90, protection:15},
 'Swan': {name:'Asas Reais', shape:'wing', tint:'#d9f7ff', blades:4, power:2.00, durability:100, protection:17},
 'Train': {name:'Lâminas Ferro', shape:'heavy', tint:'#a7b8c8', blades:5, power:2.10, durability:115, protection:20},
 'Galaxy': {name:'Lâminas Cósmicas', shape:'cosmic', tint:'#8e72ff', blades:5, power:2.35, durability:140, protection:24},
 'Fireworks': {name:'Lâminas Explosivas', shape:'spark', tint:'#ff8a62', blades:5, power:2.42, durability:145, protection:25},
 'Whale Diving': {name:'Tridentes Abissais', shape:'trident', tint:'#55cfff', blades:5, power:2.65, durability:175, protection:30},
 'Private Jet': {name:'Lâminas Turbo', shape:'jet', tint:'#59f0ff', blades:6, power:3.05, durability:225, protection:38},
 'Sports Car': {name:'Lâminas Nitro', shape:'speed', tint:'#ff4d68', blades:6, power:3.35, durability:255, protection:42},
 'Yacht': {name:'Tridentes Reais', shape:'trident', tint:'#72eaff', blades:6, power:3.55, durability:280, protection:46},
 'Interstellar': {name:'Sabres Interestelares', shape:'cosmic', tint:'#9d79ff', blades:7, power:4.00, durability:330, protection:55},
 'Rocket': {name:'Lanças Foguete', shape:'jet', tint:'#ff7a50', blades:8, power:4.60, durability:400, protection:65},
 'Lion': {name:'Garras do Leão', shape:'claw', tint:'#ffd15a', blades:9, power:5.25, durability:500, protection:80},
 'TikTok Universe': {name:'Arsenal Universo', shape:'universe', tint:'#ffffff', blades:12, power:6.50, durability:700, protection:100},
 'Hatch Me': {name:'Lâmina Hatch', shape:'hatch', tint:'#65ffb2', blades:2, power:1.18, durability:12, protection:2}
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
       g.fillStyle='#080d16';
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
 {min:0,title:'SEGUIDOR',desc:'Nv.1 • 1 lâmina',color:'#64ddff',blades:1},
 {min:1,title:'INICIANTE',desc:'+HP e XP',color:'#7fdcff',blades:1},
 {min:5,title:'ÁGIL',desc:'+velocidade',color:'#5affb3',blades:1},
 {min:30,title:'CRESCIDO',desc:'+tamanho e vida',color:'#ffd35a',blades:1},
 {min:99,title:'RARO',desc:'aura + escudo',color:'#b66dff',blades:1},
 {min:100,title:'ORBITAL I',desc:'2 lâminas',color:'#ff6eae',blades:2},
 {min:299,title:'ORBITAL II',desc:'3 lâminas + defesa',color:'#ff8c55',blades:3},
 {min:500,title:'ELITE',desc:'regeneração',color:'#ff4d6d',blades:3},
 {min:1000,title:'CÓSMICO',desc:'4 lâminas + aura',color:'#7f8cff',blades:4},
 {min:2150,title:'TITÃ',desc:'muito HP',color:'#4ce1ff',blades:4},
 {min:4888,title:'MÍTICO',desc:'5 lâminas + turbo',color:'#d95cff',blades:5},
 {min:10000,title:'INTERESTELAR',desc:'6 lâminas + escudo',color:'#8f62ff',blades:6},
 {min:20000,title:'FORTALEZA',desc:'7 lâminas + armadura',color:'#ffc65c',blades:7},
 {min:29999,title:'TITÃ SUPREMO',desc:'8 lâminas',color:'#ff874d',blades:8},
 {min:44999,title:'UNIVERSO',desc:'FORMA MÁXIMA',color:'#ffffff',blades:10}
];

const S={orbs:new Map(),followed:new Set(),likes:0,totalKills:0,maxOrbs:40,baseDamage:7,hatchPrice:5,sound:true,showNames:true,last:performance.now(),particles:[],liveMode:false,grid:new Map(),cell:.14};
let popTimer=null,audio=null,lastUi=0;
loadGiftImages();

function resize(){const r=canvas.getBoundingClientRect(),d=Math.min(devicePixelRatio||1,1.5);canvas.width=Math.max(1,r.width*d);canvas.height=Math.max(1,r.height*d);ctx.setTransform(d,0,0,d,0,0)}
function randColor(name){let h=0;for(const ch of name)h=(h*33+ch.charCodeAt(0))%360;return `hsl(${h} 80% 60%)`}
function tierFor(coins){let t=tiers[0];for(const x of tiers)if(coins>=x.min)t=x;return t}
function beep(freq=620,dur=.055){if(!S.sound)return;try{audio=audio||new(window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')audio.resume();const o=audio.createOscillator(),g=audio.createGain(),n=audio.currentTime;o.type='sine';o.frequency.value=freq;g.gain.setValueAtTime(.0001,n);g.gain.exponentialRampToValueAtTime(.035,n+.004);g.gain.exponentialRampToValueAtTime(.0001,n+dur);o.connect(g);g.connect(audio.destination);o.start(n);o.stop(n+dur+.01)}catch{}}
function show(user,title,sub,color,giftName=''){
 const p=$('eventPop');
 $('eventUser').textContent='@'+user;
 $('eventTitle').textContent=title;
 $('eventSub').textContent=sub;
 p.style.borderColor=color||'#354d68';
 if(giftName)setEventGiftImage(giftName);else setEventGiftImage('');
 p.classList.add('show');
 clearTimeout(popTimer);
 popTimer=setTimeout(()=>p.classList.remove('show'),1450);
}
function burst(o,color,n=14){const limit=S.orbs.size>28?8:n;for(let i=0;i<limit;i++)S.particles.push({x:o.x,y:o.y,vx:(Math.random()-.5)*.45,vy:(Math.random()-.5)*.45,life:1,color})}
function normalizeUser(u){return String(u||'usuario').replace(/^@/,'').trim().slice(0,26)||'usuario'}
function createOrb(user,source='follow'){
 user=normalizeUser(user);
 if(S.orbs.has(user))return S.orbs.get(user);
 if(S.orbs.size>=S.maxOrbs){show(user,'ARENA CHEIA','O limite atual de bolinhas foi atingido','#ff5d78');return null}
 const a=Math.random()*Math.PI*2,r=.10+Math.random()*.28,t=tiers[0];
 const o={user,x:.5+Math.cos(a)*r,y:.5+Math.sin(a)*r,vx:(Math.random()-.5)*.48,vy:(Math.random()-.5)*.48,color:randColor(user),
 hp:110,maxHp:110,level:1,xp:0,totalCoins:0,size:.0245,speed:1.05,blades:1,damage:S.baseDamage,shield:0,regen:.15,kills:0,angle:Math.random()*6.28,lastHit:new Map(),tier:t.title,aura:t.color,alive:true,
 dashAt:performance.now()+500+Math.random()*1200,dashPulse:0,wallFlash:0,
 weaponName:'Lâmina Inicial',weaponShape:'dagger',weaponTint:'#64ddff',weaponPower:1,
 durability:110,protection:0,lastGift:'Entrada'};
 S.orbs.set(user,o);burst(o,t.color,20);show(
 user,
 source==='follow' ? '➕ SEGUIU E ENTROU!' :
 source==='share' ? '🔁 COMPARTILHOU E ENTROU!' :
 '⚪ ENTROU NA ARENA',
 source==='share' ? 'Nv.1 • 1 lâmina • 1 escudo' : 'Nv.1 • 1 lâmina de energia',
 source==='share' ? '#c58aff' : t.color
);beep(530,.075);updateUI(true);return o
}

function follow(user){
 user=normalizeUser(user);
 S.followed.add(user);
 createOrb(user,'follow')
}

function share(user){
 user=normalizeUser(user);
 let o=S.orbs.get(user);

 if(!o){
   o=createOrb(user,'share');
   if(!o)return;
   o.shield=Math.max(1,o.shield);
   o.xp+=6;
   o.protection=Math.max(8,o.protection);
   o.durability=Math.max(125,o.durability);
   o.maxHp=Math.max(125,o.maxHp);
   o.hp=Math.max(o.hp,125);
   o.aura='#c58aff';
   burst(o,'#c58aff',20);
   show(user,'🔁 COMPARTILHOU A LIVE!','Nv.1 • 1 lâmina • 1 escudo','#c58aff');
   beep(720,.08);
 }else{
   o.shield=Math.min(4,o.shield+1);
   o.xp+=8;
   o.hp=Math.min(o.maxHp,o.hp+8);
   burst(o,'#c58aff',16);
   show(user,'🔁 COMPARTILHOU A LIVE!','+1 escudo • +XP','#c58aff');
   beep(760,.07);
 }
 updateUI(true)
}
function upgrade(user,gift,coins){
 user=normalizeUser(user);
 coins=Math.max(1,Math.floor(Number(coins)||1));

 let o=S.orbs.get(user)||createOrb(user,'gift');
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
   o.weaponTint='#65ffb2';
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
   gift
 );

 beep(660+Math.min(850,coins/32),.085);
 updateUI(true);
}
function removeOrb(o,killer){
 if(!o.alive)return;o.alive=false;burst(o,'#ffffff',22);S.orbs.delete(o.user);
 if(killer&&killer.alive){killer.kills++;S.totalKills++;killer.xp+=12;killer.hp=Math.min(killer.maxHp,killer.hp+8);show(killer.user,'⚔️ ELIMINAÇÃO!',`@${o.user} foi eliminado`,killer.aura);beep(900,.065)}
 updateUI(true)
}
function hit(target,attacker,dmg){
 const dx=target.x-attacker.x,dy=target.y-attacker.y,len=Math.hypot(dx,dy)||1;
 if(target.shield>0){
   target.shield--;target.vx+=dx/len*.18;target.vy+=dy/len*.18;
   burst(target,'#69efff',8);beep(760,.025);return
 }
 const reduced=dmg*(1-Math.min(.72,(target.protection||0)/160));
 target.hp-=reduced;
 target.vx+=dx/len*.24;target.vy+=dy/len*.24;
 attacker.vx-=dx/len*.045;attacker.vy-=dy/len*.045;
 target.wallFlash=1;
 burst(target,'#ff6985',6);beep(470,.018);
 if(target.hp<=0)removeOrb(target,attacker)
}
function addLikes(n){
 S.likes+=Math.max(0,Number(n)||0);
 while(S.likes>=100){S.likes-=100;if(S.orbs.size){for(const o of S.orbs.values()){o.xp+=2;o.hp=Math.min(o.maxHp,o.hp+3)}const arr=[...S.orbs.values()],winner=arr[Math.floor(Math.random()*arr.length)];winner.xp+=10;winner.hp=Math.min(winner.maxHp,winner.hp+12);burst(winner,'#ff5d91',16);show(winner.user,'❤️ 100 CURTIDAS','DROP DE XP + RECUPERAÇÃO','#ff5d91')}}
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
     if(d<min){
       const nx=dx/d,ny=dy/d,push=(min-d)*.55;
       a.x-=nx*push;a.y-=ny*push;b.x+=nx*push;b.y+=ny*push;

       const rvx=b.vx-a.vx,rvy=b.vy-a.vy,closing=rvx*nx+rvy*ny;
       const impulse=Math.max(.07,Math.abs(closing)*.72+.055);
       a.vx-=nx*impulse;a.vy-=ny*impulse;
       b.vx+=nx*impulse;b.vy+=ny*impulse;

       a.dashPulse=Math.max(a.dashPulse,.35);
       b.dashPulse=Math.max(b.dashPulse,.35);

       if(Math.random()<.22){
         burst({x:(a.x+b.x)/2,y:(a.y+b.y)/2},'#dff7ff',3);
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
           hit(b,a,a.damage);
         }
       }
     }
   }
 }
}
function updateUI(force=false){
 const now=performance.now();if(!force&&now-lastUi<220)return;lastUi=now;
 $('orbCount').textContent=S.orbs.size;$('killCount').textContent=S.totalKills;$('maxLevel').textContent=S.orbs.size?Math.max(...[...S.orbs.values()].map(o=>o.level)):0;$('likesCount').textContent=`${S.likes}/100`;
 $('likesMeterText').textContent=`${S.likes}/100`;$('likesMeterFill').style.width=`${S.likes}%`;$('emptyHint').classList.toggle('hidden',S.orbs.size>0);
 $('arenaStatus').textContent=S.orbs.size?`${S.orbs.size} PARTICIPANTE${S.orbs.size>1?'S':''} BATALHANDO`:'AGUARDANDO PARTICIPANTES';
 const arr=[...S.orbs.values()].sort((a,b)=>(b.kills-a.kills)||(b.totalCoins-a.totalCoins)||(b.level-a.level)).slice(0,10);
 $('ranking').innerHTML=arr.length?arr.map((o,i)=>`<div class="rank-row"><div class="rank-n">#${i+1}</div><div class="rank-user"><b>@${esc(o.user)}</b><small>Nv.${o.level} • ${o.weaponName} • ${Math.max(0,Math.ceil(o.hp))}/${Math.ceil(o.maxHp)} DUR • ${o.protection} PROT</small></div><div class="rank-kills">${o.kills} KO</div></div>`).join(''):'<div style="font-size:7px;color:#718399;padding:10px;text-align:center">Siga a LIVE para entrar.</div>'
}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function draw(){
 const r=canvas.getBoundingClientRect(),w=r.width,h=r.height;
 const bg=ctx.createRadialGradient(w*.5,h*.44,15,w*.5,h*.44,w*.68);bg.addColorStop(0,'#1c1e48');bg.addColorStop(.56,'#0a1124');bg.addColorStop(1,'#02050a');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
 ctx.strokeStyle='rgba(93,132,195,.07)';ctx.lineWidth=1;for(let i=0;i<13;i++){ctx.beginPath();ctx.moveTo(0,i*h/13);ctx.lineTo(w,i*h/13);ctx.stroke()}for(let i=0;i<13;i++){ctx.beginPath();ctx.moveTo(i*w/13,0);ctx.lineTo(i*w/13,h);ctx.stroke()}
 ctx.strokeStyle='rgba(78,220,255,.15)';ctx.lineWidth=2;ctx.beginPath();ctx.ellipse(w*.5,h*.49,w*.47,h*.43,0,0,Math.PI*2);ctx.stroke();
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

   if((o.wallFlash||0)>.02){
     ctx.globalAlpha=Math.min(.55,o.wallFlash);
     ctx.strokeStyle='#ffffff';
     ctx.lineWidth=3;
     ctx.beginPath();ctx.arc(px,py,rr+8,0,Math.PI*2);ctx.stroke();
     ctx.globalAlpha=1;
   }
   if(!many){const aura=ctx.createRadialGradient(px,py,rr*.35,px,py,rr*2);aura.addColorStop(0,o.aura+'44');aura.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=aura;ctx.beginPath();ctx.arc(px,py,rr*2,0,Math.PI*2);ctx.fill()}
   if(o.shield>0){ctx.strokeStyle='#66efff';ctx.lineWidth=2;ctx.beginPath();ctx.arc(px,py,rr+6,0,Math.PI*2);ctx.stroke()}
   const g=ctx.createRadialGradient(px-rr*.32,py-rr*.35,rr*.12,px,py,rr);g.addColorStop(0,'#fff');g.addColorStop(.16,o.color);g.addColorStop(1,'#15182b');ctx.fillStyle=g;ctx.beginPath();ctx.arc(px,py,rr,0,Math.PI*2);ctx.fill();ctx.strokeStyle=o.aura;ctx.lineWidth=1.8;ctx.stroke();
   for(let k=0;k<o.blades;k++){
     const ang=o.angle*2.9+k*Math.PI*2/o.blades;
     const rad=rr+12+Math.min(18,o.blades*1.45);
     const bx=px+Math.cos(ang)*rad,by=py+Math.sin(ang)*rad;

     ctx.save();
     ctx.translate(bx,by);
     ctx.rotate(ang+Math.PI/2);
     if(!many){ctx.shadowColor=o.weaponTint||o.aura;ctx.shadowBlur=9}
     ctx.fillStyle=o.weaponTint||o.aura;
     ctx.strokeStyle='#ffffffaa';
     ctx.lineWidth=1;

     switch(o.weaponShape){
       case 'disc':
       case 'ring':
         ctx.beginPath();ctx.arc(0,0,6,0,Math.PI*2);ctx.fill();
         ctx.fillStyle='#08101b';ctx.beginPath();ctx.arc(0,0,2.5,0,Math.PI*2);ctx.fill();
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
         ctx.fillStyle='#eafff4';ctx.beginPath();ctx.arc(0,-3,2.2,0,Math.PI*2);ctx.fill();
         break;

       default:
         ctx.beginPath();ctx.moveTo(0,-10);ctx.lineTo(4,7);ctx.lineTo(0,4);ctx.lineTo(-4,7);ctx.closePath();ctx.fill();ctx.stroke();
     }
     ctx.restore();
   }
   if(S.showNames&&!many){ctx.textAlign='center';ctx.fillStyle='#fff';ctx.font=`900 ${Math.max(7,Math.min(10,rr*.55))}px Arial`;ctx.fillText('@'+o.user,px,py-rr-8)}
   const bw=Math.max(25,rr*1.55),hp=Math.max(0,o.hp/o.maxHp);ctx.fillStyle='rgba(0,0,0,.55)';ctx.fillRect(px-bw/2,py+rr+5,bw,3);ctx.fillStyle=hp>.45?'#49e2a0':'#ff5873';ctx.fillRect(px-bw/2,py+rr+5,bw*hp,3);
   if(!many){ctx.fillStyle='#dceaff';ctx.textAlign='center';ctx.font='700 6px Arial';ctx.fillText(`Nv.${o.level}`,px,py+rr+16)}
 }
 const particleCap=many?40:90;if(S.particles.length>particleCap)S.particles.splice(0,S.particles.length-particleCap);
 for(let i=S.particles.length-1;i>=0;i--){const p=S.particles[i];p.x+=p.vx*.01;p.y+=p.vy*.01;p.vx*=.95;p.vy*=.95;p.life-=.03;ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.beginPath();ctx.arc(p.x*w,p.y*h,2.2,0,Math.PI*2);ctx.fill();if(p.life<=0)S.particles.splice(i,1)}ctx.globalAlpha=1;
 requestAnimationFrame(draw)
}
function loop(now){const dt=Math.min(.04,(now-S.last)/1000);S.last=now;step(dt);updateUI();requestAnimationFrame(loop)}

window.liveFollow=(user)=>follow(user);
window.liveShare=(user)=>share(user);
window.liveGift=({user,giftName,coins})=>upgrade(user,giftName,coins);
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

function handleLiveEvent(evt){
 if(!evt||!evt.type)return;
 liveEventCount++;
 if($('liveEventCount'))$('liveEventCount').textContent=liveEventCount;
 if($('lastEventType'))$('lastEventType').textContent=String(evt.type).toUpperCase();

 if(evt.type==='follow'){
   follow(evt.user);
   addLiveLog(`➕ @${evt.user} seguiu`);
 }else if(evt.type==='share'){
   share(evt.user);
   addLiveLog(`🔁 @${evt.user} compartilhou`);
 }else if(evt.type==='gift'){
   upgrade(evt.user,evt.giftName||'Presente',Math.max(1,Number(evt.coins)||1));
   addLiveLog(`🎁 @${evt.user}: ${evt.giftName||'Presente'} • ${nf.format(evt.coins||1)} moedas`);
 }else if(evt.type==='like'){
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
$('shareBtn').onclick=()=>share($('userInput').value);
$('sendGiftBtn').onclick=()=>{if(sel.value==='HATCH')upgrade($('userInput').value,'Hatch Me',S.hatchPrice);else{const g=JSON.parse(sel.value);upgrade($('userInput').value,g.name,g.coins)}};
document.querySelectorAll('[data-user]').forEach(b=>b.onclick=()=>{$('userInput').value=b.dataset.user});
$('likesBtn').onclick=()=>addLikes(100);
$('fillArenaBtn').onclick=()=>{const names=['joao','maria','lucas','ana','davi','bia','leo','sofia','gui','lara','caio','nina','teo','luiza'];for(let i=0;i<names.length;i++){follow(names[i]);if(i%2===0){const g=gifts[Math.min(gifts.length-1,i*2)];upgrade(names[i],g.name,g.coins)}}};
$('resetBtn').onclick=()=>{S.orbs.clear();S.followed.clear();S.likes=0;S.totalKills=0;S.particles=[];updateUI(true)};
$('liveModeBtn').onclick=()=>{S.liveMode=!S.liveMode;document.body.classList.toggle('live-mode',S.liveMode);$('liveModeBtn').textContent=S.liveMode?'↩ SAIR LIVE':'📱 MODO LIVE';setTimeout(resize,100)};
$('settingsBtn').onclick=()=>{
 $('maxOrbsInput').value=S.maxOrbs;
 $('damageInput').value=S.baseDamage;
 $('hatchPriceInput').value=S.hatchPrice;
 $('soundInput').checked=S.sound;
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
$('saveSettings').onclick=()=>{S.maxOrbs=Math.max(8,Math.min(80,+$('maxOrbsInput').value||40));S.baseDamage=Math.max(1,Math.min(50,+$('damageInput').value||7));S.hatchPrice=Math.max(1,Math.min(100000,+$('hatchPriceInput').value||5));S.sound=$('soundInput').checked;S.showNames=$('namesInput').checked;$('settings').classList.add('hidden')};

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
 $('inspectCard').classList.remove('hidden');
}
$('inspectClose').onclick=()=>{$('inspectCard').classList.add('hidden');inspectedUser=null};

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
 if(inspectedUser){
   const o=S.orbs.get(inspectedUser);
   if(o)showInspect(o);else{$('inspectCard').classList.add('hidden');inspectedUser=null}
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

addEventListener('resize',resize);resize();updateUI(true);requestAnimationFrame(draw);requestAnimationFrame(loop);
})();
