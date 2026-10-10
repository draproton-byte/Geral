// Motor de criativos Black Próton Vitalícia (feed 1080x1350 e stories 1080x1920; versões escuro e claro).
// Regras do briefing: Dra. Próton RECORTADA e solta no fundo (sem moldura), tronco para cima, grande;
// NENHUMA palavra sobre a figura (texto e figura em áreas separadas); Montserrat; logo solto; paleta oficial.
// Item: { id, etapa, formato:'feed'|'story', versao:'escuro'|'claro', recorte:'recorte-12.png', headline:'TEXTO [destaque]',
//         apoio:'texto\nlinha', fechamento, selo, data:true|false, cta, layout:'lado'|'pilha'|'capas', capas:[...] }
const { chromium } = require('playwright-core');
const { PNG } = require('pngjs');
const fs = require('fs'), path = require('path');

const ROOT = path.join(__dirname, '..');
const FONTS = [300, 400, 500, 600, 700, 800, 900].map(w =>
  `@font-face{font-family:Montserrat;font-weight:${w};src:url('file://${path.join(ROOT, 'node_modules/@fontsource/montserrat/files/montserrat-latin-' + w + '-normal.woff2')}')}`).join('');
const U = p => 'file://' + path.join(ROOT, p);
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const hiWords = s => s.split(' ').map(w => `<span class="hi">${w}</span>`).join(' ');
const hl = s => esc(s).replace(/\{\{([^}]+)\}\}/g, '<span class="pend">$1</span>').replace(/\[([^\]]+)\]/g, (_, g) => hiWords(g)).replace(/\n/g, '<br>');

// ---- geometria do recorte: caixa do corpo pelo canal alfa (cache) ----
const bboxCache = {};
function bboxDe(arquivo) {
  if (bboxCache[arquivo]) return bboxCache[arquivo];
  const png = PNG.sync.read(fs.readFileSync(path.join(ROOT, 'recortes', arquivo)));
  let x0 = png.width, y0 = png.height, x1 = 0, y1 = 0;
  const P = new Array(Math.ceil(png.height / 8)).fill(png.width);
  for (let y = 0; y < png.height; y++) for (let x = 0; x < png.width; x++) {
    if (png.data[(y * png.width + x) * 4 + 3] > 60) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; const b = y >> 3; if (x < P[b]) P[b] = x; }
  }
  return (bboxCache[arquivo] = { x0, y0, x1, y1, w: png.width, h: png.height, P });
}

const T = {
  escuro: { bg: '#150808', bg2: '#0A0607', txt: '#F9F3EA', txt2: '#E9DCC9', hi: 'linear-gradient(90deg,#F0CD7A,#D4A84E 55%,#A37A27)', line: '#D4A84E', ring: 'rgba(212,168,78,.13)', glow: 'rgba(212,168,78,.34)', card: 'rgba(249,243,234,.06)', cardLine: 'rgba(212,168,78,.55)', btnBg: 'linear-gradient(90deg,#F0CD7A,#D4A84E 60%,#C29A3F)', btnTxt: '#150808', btnDot: '#150808', btnArrow: '#F0CD7A' },
  claro: { bg: '#F9F3EA', bg2: '#F1E8D8', txt: '#1D1110', txt2: '#3b2a25', hi: 'linear-gradient(90deg,#B8862E,#A37A27 55%,#8A6217)', line: '#A37A27', ring: 'rgba(163,122,39,.16)', glow: 'rgba(212,168,78,.40)', card: 'rgba(29,17,16,.05)', cardLine: 'rgba(163,122,39,.6)', btnBg: 'linear-gradient(135deg,#2a1512,#150808)', btnTxt: '#F0CD7A', btnDot: '#D4A84E', btnArrow: '#150808' },
};

// variações de cor de fundo (mesma paleta de destaque dourada)
T.vinho = { ...T.escuro, bg: '#2B0A12', bg2: '#12040A', glow: 'rgba(214,92,104,.34)', ring: 'rgba(240,205,122,.14)' };
T.ambar = { ...T.escuro, bg: '#2A1A0C', bg2: '#100803', glow: 'rgba(240,205,122,.42)', ring: 'rgba(240,205,122,.16)' };

const ICONES = {
  cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>',
  rel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  live: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="2.2" fill="currentColor"/><path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9l5 3-5 3z"/></svg>',
};

function html(it) {
  const story = it.formato === 'story', W = 1080, H = story ? 1920 : 1350;
  const t = T[it.versao];
  const k = story ? 1.14 : 1;
  const layout = it.layout || (story ? 'pilha' : 'lado');
  if (layout === 'alarme') return htmlAlarme(it);
  if (['notificacao', 'datahero', 'capasfaixa', 'savedate'].includes(layout)) return htmlExtra(it, layout);
  const rec = it.recorte && layout !== 'capas' && layout !== 'texto' ? it.recorte : null;
  const bb = rec ? bboxDe(rec) : null;
  const capas = (it.capas || []).map(c => U('capas-cursos/' + c + '.jpg'));
  const cfg = { W, H, story, layout, bb, hasCut: !!rec, padBottom: story ? 380 : 74, topY: story ? 450 : 190, fsStart: it.fs || (layout === 'texto' ? (story ? 120 : 92) : story ? 84 : 70), fsMin: story ? 40 : 34, bleed: it.bleed ?? 40, figW: it.figW || (story ? 1060 : 860), maxFigH: story ? 0.74 : 0.86, capasBox: (it.capasExtra || []).length, subStart: story ? 36 : 30, subMin: story ? 24 : 21 };

  const dataCard = it.data ? `
    <div class="date" id="date">
      <div class="d1"><i class="ic big">${ICONES.cal}</i><div><small>LIVE DE REVELAÇÃO</small><b>QUARTA · 04 DE NOVEMBRO</b></div></div>
      <div class="d2"><span><i class="ic">${ICONES.rel}</i>ÀS 20H</span><span><i class="ic">${ICONES.live}</i>AO VIVO</span><span><i class="ic">${ICONES.play}</i>NO YOUTUBE</span></div>
    </div>` : '';
  const cta = it.cta ? `<div class="cta"><span>${esc(it.cta)}</span><i>→</i></div>` : '';
  const selo = it.selo ? `<div class="selo">${hl(it.selo)}</div>` : '';
  const apoio = it.apoio ? `<p class="apoio">${it.apoio.includes('\n') ? it.apoio.split('\n').map(l => `<span class="li">${hl(l)}</span>`).join('') : hl(it.apoio)}</p>` : '';
  const fecho = it.fechamento ? `<div class="fecho">${hl(it.fechamento)}</div>` : '';
  const extraCapas = (it.capasExtra || []).map(c => `<img src="${U('capas-cursos/' + c + '.jpg')}">`).join('');
  const capasBoxHtml = extraCapas ? `<div id="capasbox">${extraCapas}</div>` : '';
  const capasHtml = capas.length ? `<div id="capas"${capas.length > 6 ? ' class="mosaico"' : ''}>${capas.map(c => `<img src="${c}">`).join('')}</div>` : '';

  const css = `${FONTS}*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px}
body{font-family:Montserrat;background:${t.bg};color:${t.txt};position:relative;overflow:hidden}
#bg{position:absolute;inset:0;background:radial-gradient(ellipse 60% 48% at var(--gx,72%) var(--gy,32%),${t.glow},transparent 72%),radial-gradient(ellipse 120% 90% at 50% 0%,${t.bg},${t.bg2})}
#bg svg{position:absolute;inset:0;width:100%;height:100%}
#logo{position:absolute;left:80px;top:${story ? 262 : 60}px;width:${story ? 400 : 330}px;filter:drop-shadow(0 4px 12px rgba(0,0,0,.28))}
#cutwrap{position:absolute;inset:0;overflow:hidden}
#cut{position:absolute;display:block}
#txt{position:absolute;left:80px}
h1{font-weight:900;text-transform:uppercase;line-height:1.04;letter-spacing:-.01em;color:${t.txt}}
.hi{display:inline-block;background:${t.hi};-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.pend{background:#FFD400;color:#150808;border-radius:8px;padding:0 .22em;font-weight:800;white-space:nowrap;-webkit-text-fill-color:#150808}
.hero .hi{font-size:1.9em;line-height:.95;letter-spacing:-.02em}
.apoio{font-weight:500;line-height:1.38;color:${t.txt2};margin-top:.55em}
.apoio .li{display:block;padding-left:1.1em;position:relative;margin-top:.28em}
.apoio .li::before{content:"";position:absolute;left:.1em;top:.62em;width:.42em;height:.42em;background:${t.line};transform:rotate(45deg)}
.apoio .hi{font-weight:800}
.fecho{margin-top:.9em;padding:.7em 1em;border:1.5px solid ${t.cardLine};background:${t.card};border-radius:18px;font-weight:600;line-height:1.35;color:${t.txt}}
.selo{display:inline-block;margin-top:.9em;padding:.55em 1.2em;border-radius:999px;background:linear-gradient(90deg,#F0CD7A,#D4A84E 60%,#C29A3F);color:#150808;font-weight:800;letter-spacing:.06em;text-transform:uppercase}
#actions{position:absolute;left:80px;right:80px;display:flex;flex-direction:column;gap:${Math.round(20 * k)}px;align-items:flex-start}
.date{width:100%;border-radius:26px;background:linear-gradient(135deg,#F0CD7A,#D4A84E 55%,#B88A33);color:#150808;padding:${Math.round(22 * k)}px ${Math.round(30 * k)}px;box-shadow:0 14px 34px rgba(0,0,0,.25)}
.d1{display:flex;align-items:center;gap:${Math.round(24 * k)}px}
.d1 small{display:block;font-weight:700;letter-spacing:.3em;font-size:${Math.round(19 * k)}px}
.d1 b{color:#150808;display:block;font-weight:900;font-size:${Math.round(44 * k)}px;line-height:1.1;margin-top:4px;white-space:nowrap}
.date.compact{padding:18px 22px}.date.compact .d1{gap:14px}.date.compact .d1 b{font-size:34px;white-space:normal;line-height:1.08}.date.compact .d1 small{font-size:15px;letter-spacing:.22em}.date.compact .ic.big{width:44px;height:44px;flex:none}.date.compact .d2{flex-direction:column;gap:8px;align-items:flex-start}.date.compact .d2 span{flex:none;font-size:23px;border-left:none!important;justify-content:flex-start;padding:0}.date.compact .d1 small{font-size:16px}.date.compact .d1 b{font-size:38px}
.ic{display:inline-flex;width:${Math.round(26 * k)}px;height:${Math.round(26 * k)}px}.ic.big{width:${Math.round(66 * k)}px;height:${Math.round(66 * k)}px}.ic svg{width:100%;height:100%}
.d2{display:flex;margin-top:${Math.round(16 * k)}px;padding-top:${Math.round(14 * k)}px;border-top:1.5px solid rgba(21,8,8,.35)}
.d2 span{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:800;font-size:${Math.round(23 * k)}px;letter-spacing:.04em;white-space:nowrap}
.d2 span+span{border-left:1.5px solid rgba(21,8,8,.35)}
.cta{display:flex;width:var(--ctaw,auto);max-width:100%;justify-content:space-between;line-height:1.15;overflow:hidden;align-items:center;gap:${Math.round(30 * k)}px;height:${Math.round(100 * k)}px;padding:0 ${Math.round(18 * k)}px 0 ${Math.round(46 * k)}px;border-radius:999px;background:${t.btnBg};color:${t.btnTxt};font-weight:800;font-size:${Math.round(33 * k)}px;letter-spacing:.07em;box-shadow:0 14px 34px rgba(0,0,0,.28)}
.cta i{flex:none;font-style:normal;width:${Math.round(66 * k)}px;height:${Math.round(66 * k)}px;border-radius:50%;background:${t.btnDot};color:${t.btnArrow};display:flex;align-items:center;justify-content:center;font-size:${Math.round(38 * k)}px;line-height:1;padding-bottom:3px}
#foot{position:absolute;left:80px;right:80px;height:20px;display:flex;align-items:center;gap:16px}
#foot::before,#foot::after{content:"";flex:1;height:1.5px;background:linear-gradient(90deg,transparent,${t.line})}
#foot::after{transform:scaleX(-1);order:2}
#foot i{width:11px;height:11px;background:${t.line};transform:rotate(45deg);order:1}
#capasbox{position:absolute;left:80px;display:none;flex-wrap:wrap;gap:14px;align-content:flex-start}
#capasbox img{display:block;border-radius:14px;box-shadow:0 14px 30px rgba(0,0,0,.4);border:1.5px solid ${t.cardLine};object-fit:cover}
#capas{position:absolute;left:80px;right:80px;display:flex;gap:22px;align-items:center;justify-content:center}
#capas.mosaico{flex-wrap:wrap;gap:12px;align-content:flex-start}
#capas.mosaico img{flex:none;width:calc((100% - 60px)/6);height:auto;aspect-ratio:720/1040;max-height:none}
#capas img{flex:1 1 0;min-width:0;max-height:100%;border-radius:16px;box-shadow:0 18px 40px rgba(0,0,0,.4);border:1.5px solid ${t.cardLine};object-fit:cover}
`;

  const script = `
const C=${JSON.stringify(cfg)};
const $=s=>document.querySelector(s);
const act=$('#actions'),txt=$('#txt'),h1=$('h1'),foot=$('#foot');
document.fonts.ready.then(()=>{ run(); document.title='ok'; });
function setFs(fs){h1.style.fontSize=fs+'px';}
function setSub(fs){['.apoio','.fecho','.selo'].forEach((q,i)=>{const e=$(q); if(e) e.style.fontSize=Math.round(fs*[1,0.92,0.78][i])+'px';});}
function placeCapas(colW,top,bottom,wide){
  const box=$('#capasbox'); if(!box||!C.capasBox) return;
  const imgs=[...box.querySelectorAll('img')]; const free=bottom-top; if(free<150) return;
  let cols=wide?4:2, gap=14, tw=Math.floor((colW-gap*(cols-1))/cols), th=Math.round(tw*1.25);
  if(wide&&th>free){ th=Math.floor(free); tw=Math.round(th/1.25); }
  const rows=wide?1:Math.max(0,Math.floor((free+gap)/(th+gap))); if(!rows) return;
  const n=Math.min(imgs.length,cols*rows); imgs.forEach((im,i)=>{im.style.display=i<n?'block':'none'; im.style.width=tw+'px'; im.style.height=th+'px';});
  const used=Math.ceil(n/cols); box.style.display='flex'; box.style.top=top+'px'; box.style.width=(wide?cols*tw+gap*(cols-1):colW)+'px'; box.style.left=(wide?Math.round((C.W-(cols*tw+gap*(cols-1)))/2):80)+'px';
}
function run(){
  const cw=$('#cutwrap'),cut=$('#cut');
  foot.style.top=(C.story?C.H-C.padBottom+22:C.H-46)+'px';
  if(C.hasCut){
    // figura grande, solta, sangrando pela base e pela direita (sem moldura, sem recorte do tronco)
    const bb=C.bb, bw=bb.x1-bb.x0;
    const t2=document.createElement('div'); t2.id='txt2'; t2.style.cssText='position:absolute;left:80px';
    ['.apoio','.fecho','.selo'].forEach(q=>{const e=$(q); if(e) t2.appendChild(e);}); document.body.appendChild(t2);
    txt.style.width=(C.W-160)+'px'; txt.style.top=C.topY+'px';
    act.style.right='auto'; if($('.cta')) $('.cta').style.setProperty('--ctaw','100%');
    const colW=360;
    const date=$('#date'), cta=$('.cta');
    let placed=false, geo=null;
    for(let figW=C.figW; figW>=C.figW-560 && !placed; figW-=30){
      let s=figW/bw; const maxH=C.H*C.maxFigH; if(bb.h*s>maxH) s=maxH/bb.h;
      const left=C.W+C.bleed-bb.x1*s, top=C.H-bb.h*s, bleft=left+bb.x0*s, figTop=top+bb.y0*s;
      // borda esquerda real da figura entre duas alturas (canvas): evita sobreposição pelo contorno, não pela caixa
      const leftAt=(ya,yb)=>{let m=C.W; for(let y=Math.max(0,Math.floor((ya-top)/s));y<=Math.min(bb.P.length*8-1,Math.ceil((yb-top)/s));y+=8){const v=bb.P[Math.min(bb.P.length-1,y>>3)]; if(v<bb.w) m=Math.min(m,left+v*s);} return m;};
      const colFor=(ya,yb)=>Math.max(0,leftAt(ya,yb)-28-80);
      for(let fs=C.fsStart;fs>=C.fsMin&&!placed;fs-=2){
        setFs(fs);
        if(h1.scrollWidth>txt.clientWidth+1) continue;
        if(C.topY+txt.offsetHeight>figTop-18) continue;
        const t2top=C.topY+txt.offsetHeight+22; t2.style.top=t2top+'px';
        for(let sf=C.subStart;sf>=C.subMin&&!placed;sf-=1){
          setSub(sf);
          // largura de cada bloco segue o contorno da figura na sua faixa vertical (3 passadas)
          let t2W=colFor(t2top,t2top+260), aW=colFor(C.H-C.padBottom-260,C.H-C.padBottom);
          for(let it2=0;it2<3;it2++){
            t2.style.width=Math.max(340,t2W)+'px'; act.style.width=Math.max(340,aW)+'px';
            if(date) date.classList.toggle('compact',Math.max(340,aW)<700);
            const actH=act.offsetHeight, actTop=C.H-C.padBottom-actH;
            t2W=colFor(t2top,t2top+t2.offsetHeight); aW=colFor(actTop,actTop+actH);
          }
          t2.style.width=Math.max(340,t2W)+'px'; act.style.width=Math.max(340,aW)+'px'; if(date) date.classList.toggle('compact',Math.max(340,aW)<700);
          if(cta){cta.style.fontSize='';cta.style.letterSpacing='';let cf=parseFloat(getComputedStyle(cta).fontSize);while(cta.scrollWidth>cta.clientWidth+1&&cf>20){cf-=1;cta.style.fontSize=cf+'px';}}
          const actH=act.offsetHeight, actTop=C.H-C.padBottom-actH; act.style.top=actTop+'px';
          const okW = t2W>=340 && aW>=340;
          if(okW && t2top+t2.offsetHeight<=actTop-18){placed=true;geo={s,left,top,bleft,figTop,t2W:Math.max(340,t2W),aW:Math.max(340,aW)};}
        }
      }
    }
    if(!placed){ const bw0=bb.x1-bb.x0; let s=(C.figW-560)/bw0; geo={s,left:C.W+C.bleed-bb.x1*s,top:C.H-bb.h*s,bleft:C.W+C.bleed-bb.x1*s+bb.x0*s,figTop:C.H-bb.h*s+bb.y0*s,t2W:340,aW:340}; window.__unplaced=1; }
    const {s,left,top,bleft,figTop}=geo;
    cut.src=cut.dataset.src; cut.style.width=(bb.w*s)+'px'; cut.style.left=left+'px'; cut.style.top=top+'px';
    document.documentElement.style.setProperty('--gx',Math.min(92,((left+((bb.x0+bb.x1)/2)*s)/C.W*100))+'%');
    document.documentElement.style.setProperty('--gy',((figTop+(bb.y1-bb.y0)*s*0.18)/C.H*100)+'%');
    placeCapas(Math.min(geo.t2W,geo.aW), t2.offsetTop+t2.offsetHeight+26, act.offsetTop-26, false);
    window.__txt=[80,C.topY,C.W-80,C.topY+txt.offsetHeight];
    window.__txt2=[80,t2.offsetTop,80+geo.t2W,t2.offsetTop+t2.offsetHeight];
    window.__act=[80,act.offsetTop,80+geo.aW,act.offsetTop+act.offsetHeight];
    window.__fig=null; window.__figTop=figTop; window.__unplacedFlag=!!window.__unplaced;
  } else { // sem figura: texto tipográfico ou capas
    act.style.top=(C.H-C.padBottom-act.offsetHeight)+'px';
    const actTop=C.H-C.padBottom-act.offsetHeight;
    txt.style.width=(C.W-160)+'px'; txt.style.top=C.topY+'px';
    const caps=$('#capas');
    for(let fs=C.fsStart;fs>=C.fsMin;fs-=2){setFs(fs); setSub(Math.max(fs*0.46,C.story?27:23)); const free=actTop-14-(C.topY+txt.offsetHeight+24); if(free>=(caps?(C.story?640:470):(C.capasBox?(C.story?420:300):0))&&h1.scrollWidth<=txt.clientWidth+1) break;}
    if(caps){caps.style.top=(C.topY+txt.offsetHeight+30)+'px'; if(!caps.classList.contains('mosaico')) caps.style.height=(actTop-14-(C.topY+txt.offsetHeight+30))+'px';}
    if(!caps){ if(C.capasBox){ placeCapas(C.W-160, C.topY+txt.offsetHeight+34, actTop-26, true); } else { const avail=actTop-14-C.topY; txt.style.top=(C.topY+Math.max(0,(avail-txt.offsetHeight)/2))+'px'; } }
    window.__txt=[80,txt.offsetTop,C.W-80,txt.offsetTop+txt.offsetHeight]; window.__act=[80,act.offsetTop,C.W-80,act.offsetTop+act.offsetHeight];
    window.__fig=null;
  }
}`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}${it.cssExtra || ''}</style></head><body>
<div id="bg"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><g fill="none" stroke="${t.ring}" stroke-width="2">${[260, 420, 590, 770].map(r => `<circle cx="${W * 0.72}" cy="${H * 0.3}" r="${r}"/>`).join('')}</g></svg></div>
<img id="logo" src="${U('assets/logo-dourado.png')}">
<div id="cutwrap"><img id="cut" data-src="${rec ? U('recortes/' + rec) : ''}"></div>
<div id="txt"${it.hero ? ' class="hero"' : ''}><h1>${hl(it.headline)}</h1>${apoio}${fecho}${selo}</div>
${capasHtml}${capasBoxHtml}
<div id="actions">${dataCard}${cta}</div>
<div id="foot"><i></i></div>
<script>${script}</script></body></html>`;
}

// ---- peça "alarme/lembrete" (tipográfica, estilo notificação de celular) ----
function htmlAlarme(it) {
  const story = it.formato === 'story', W = 1080, H = story ? 1920 : 1350, t = T[it.versao], claro = it.versao === 'claro';
  const a = it.alarme;
  const css = `${FONTS}*{margin:0;padding:0;box-sizing:border-box}html,body{width:${W}px;height:${H}px}
body{font-family:Montserrat;background:${t.bg};color:${t.txt};position:relative;overflow:hidden}
#bg{position:absolute;inset:0;background:radial-gradient(ellipse 70% 40% at 0% 0%,${t.glow},transparent 70%),radial-gradient(ellipse 60% 35% at 100% 100%,${t.glow},transparent 70%),${claro ? t.bg : '#050304'}}
.w{position:absolute;left:90px;right:90px;top:${story ? 560 : 330}px}
.d{font-weight:700;font-size:${story ? 52 : 46}px;padding-bottom:22px;border-bottom:1.5px solid ${claro ? 'rgba(29,17,16,.28)' : 'rgba(249,243,234,.28)'}}
.h{display:flex;align-items:center;justify-content:space-between;padding:${story ? 26 : 18}px 0 ${story ? 28 : 20}px}
.h b{font-weight:300;font-size:${story ? 200 : 220}px;letter-spacing:-.03em;line-height:1;white-space:nowrap}
.tg{width:${story ? 190 : 170}px;height:${story ? 96 : 86}px;border-radius:999px;background:linear-gradient(135deg,#F0CD7A,#D4A84E 55%,#A37A27);position:relative;flex:none}
.tg::after{content:"";position:absolute;right:8px;top:8px;width:${story ? 80 : 70}px;height:${story ? 80 : 70}px;border-radius:50%;background:#F9F3EA;box-shadow:0 4px 14px rgba(0,0,0,.3)}
.p{font-weight:500;font-size:${story ? 40 : 34}px;line-height:1.4;color:${t.txt2};padding:0 0 26px;border-bottom:1.5px solid ${claro ? 'rgba(29,17,16,.28)' : 'rgba(249,243,234,.28)'}}
.c{margin-top:${story ? 90 : 60}px;text-align:center;font-weight:800;font-size:${story ? 42 : 36}px;line-height:1.35;text-transform:uppercase}
.c .hi{background:${t.hi};-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;display:inline-block}
.l{margin-top:${story ? 110 : 80}px;text-align:center}.l img{width:${story ? 380 : 320}px}
`;
  const body = `<div id="bg"></div><div class="w"><div class="d">${esc(a.data)}</div><div class="h"><b>${esc(a.hora)}</b><div class="tg"></div></div><div class="p">${esc(a.texto)}</div>
<div class="c">${hl(a.chamada)}</div><div class="l"><img src="${U('assets/logo-dourado.png')}"></div></div>`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}<script>window.__txt=null;window.__fig=null;document.fonts.ready.then(()=>{document.title='ok'});</script></body></html>`;
}

// ---- formatos extras (referências do cliente): notificação, data-herói, faixa de capas, save the date ----
function htmlExtra(it, layout) {
  const story = it.formato === 'story', W = 1080, H = story ? 1920 : 1350, t = T[it.versao], claro = it.versao === 'claro';
  const e = it.extra, k = story ? 1.12 : 1;
  const bb = it.recorte ? bboxDe(it.recorte) : null;
  const logo = `<img class="logo" src="${U('assets/logo-dourado.png')}">`;
  const cta = e.cta ? `<div class="cta2"><span>${esc(e.cta)}</span></div>` : '';
  const capas = (e.capas || []).map(c => `<img src="${U('capas-cursos/' + c + '.jpg')}">`).join('');
  const css = `${FONTS}*{margin:0;padding:0;box-sizing:border-box}html,body{width:${W}px;height:${H}px}
body{font-family:Montserrat;background:${t.bg};color:${t.txt};position:relative;overflow:hidden}
#bg{position:absolute;inset:0;background:radial-gradient(ellipse 80% 45% at 50% 100%,${t.glow},transparent 70%),radial-gradient(ellipse 60% 40% at 50% 0%,${t.glow},transparent 70%),${claro ? t.bg : '#080405'}}
.logo{position:absolute;left:50%;transform:translateX(-50%);width:${story ? 420 : 340}px;top:${story ? 262 : 60}px;filter:drop-shadow(0 4px 12px rgba(0,0,0,.28))}
.hi{background:${t.hi};-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;display:inline-block}
.cta2{display:inline-flex;padding:${Math.round(26 * k)}px ${Math.round(56 * k)}px;border-radius:${Math.round(22 * k)}px;background:${t.btnBg};color:${t.btnTxt};font-weight:800;font-size:${Math.round(34 * k)}px;letter-spacing:.04em;box-shadow:0 14px 34px rgba(0,0,0,.3)}
.c{position:absolute;left:80px;right:80px;text-align:center}
`;
  let body = '';
  if (layout === 'notificacao') {
    const word = [0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => `<div style="font-weight:900;font-size:${story ? 190 : 170}px;line-height:.95;letter-spacing:-.02em;white-space:nowrap;color:transparent;-webkit-text-stroke:2px ${claro ? 'rgba(163,122,39,.22)' : 'rgba(212,168,78,.22)'};text-align:center">LEMBRETE</div>`).join('');
    body = `<div style="position:absolute;left:-40px;right:-40px;top:${story ? 300 : 80}px;display:flex;flex-direction:column">${word}</div>
    <div class="c" style="top:${story ? 640 : 330}px"><div style="background:${claro ? '#fff' : '#F2EBDD'};color:#1D1110;border-radius:44px;padding:${story ? 70 : 56}px ${story ? 64 : 52}px;box-shadow:0 30px 70px rgba(0,0,0,.5)">
    <div style="font-weight:800;font-size:${story ? 62 : 52}px">${esc(e.titulo)}</div>
    <div style="font-weight:500;font-size:${story ? 44 : 37}px;line-height:1.42;margin:${story ? 34 : 24}px 0 ${story ? 50 : 36}px">${hl(e.texto)}</div>
    <div class="cta2" style="padding:${story ? 30 : 24}px ${story ? 110 : 90}px">${esc(e.cta)}</div></div></div>
    <img class="logo" style="top:auto;bottom:${story ? 400 : 70}px" src="${U('assets/logo-dourado.png')}">`;
  } else if (layout === 'datahero') {
    const relogio = `<svg viewBox="0 0 200 200" style="position:absolute;right:-120px;top:${story ? 520 : 260}px;width:${story ? 760 : 680}px;opacity:${claro ? .16 : .22}" fill="none" stroke="${claro ? '#A37A27' : '#D4A84E'}" stroke-width="2.4"><circle cx="100" cy="100" r="92"/><circle cx="100" cy="100" r="84" stroke-width="1"/><path d="M100 100V42M100 100l42 26" stroke-width="4" stroke-linecap="round"/>${Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<path d="M${100 + 78 * Math.sin(a)} ${100 - 78 * Math.cos(a)}L${100 + 88 * Math.sin(a)} ${100 - 88 * Math.cos(a)}" stroke-width="3"/>`; }).join('')}</svg>`;
    body = `<div style="position:absolute;left:0;right:0;top:0;height:${story ? 520 : 260}px;display:flex;opacity:${claro ? .25 : .35};filter:saturate(.8)">${capas}</div>
    <div style="position:absolute;left:0;right:0;top:0;height:${story ? 560 : 300}px;background:linear-gradient(180deg,transparent,${t.bg})"></div>${relogio}
    <div class="c" style="top:${story ? 640 : 330}px;text-align:left;left:90px">
      <div style="font-weight:600;font-size:${story ? 46 : 38}px;color:${t.txt2}">${esc(e.topo)}</div>
      <div style="font-weight:900;font-size:${story ? 118 : 100}px;line-height:1.02;text-transform:uppercase;margin-top:14px">${esc(e.linha)}</div>
      <div style="font-weight:900;font-size:${story ? 400 : 330}px;line-height:.92;letter-spacing:-.03em;margin-left:-8px"><span class="hi">${esc(e.numero)}</span></div>
      <div style="font-weight:600;font-size:${story ? 42 : 36}px;margin-top:${story ? 30 : 22}px;display:flex;align-items:center;gap:16px"><i style="width:18px;height:18px;border-radius:50%;background:#D4A84E;display:inline-block"></i>${esc(e.rodape)}</div>
    </div>
    <div class="c" style="bottom:${story ? 400 : 120}px">${cta}</div>${logo}`;
  } else if (layout === 'capasfaixa') {
    body = `${logo}<div class="c" style="top:${story ? 480 : 170}px"><div style="font-weight:900;font-size:${story ? 104 : 80}px;line-height:1.04;text-transform:uppercase">${hl(e.headline)}</div>
    <div style="font-weight:500;font-size:${story ? 42 : 35}px;line-height:1.4;margin-top:${story ? 40 : 28}px;color:${t.txt2}">${hl(e.apoio)}</div></div>
    <div style="position:absolute;left:60px;right:60px;top:${story ? 1080 : 700}px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center;align-content:flex-start">${(e.capas || []).map((c, i) => { const per = Math.min((e.capas || []).length, 6), tw = Math.floor((W - 120 - 12 * (per - 1)) / per); return `<img src="${U('capas-cursos/' + c + '.jpg')}" style="width:${tw}px;height:${Math.round(tw * 1.444)}px;border-radius:12px;box-shadow:0 18px 40px rgba(0,0,0,.45);border:1.5px solid ${t.cardLine};object-fit:cover">`; }).join('')}</div>
    <div class="c" style="bottom:${story ? 420 : 110}px">${cta}</div>`;
  } else if (layout === 'savedate') {
    const bw = bb.x1 - bb.x0, figW = story ? 880 : 640, s = figW / bw, figH = bb.h * s;
    const top = story ? 300 : 120;
    body = `<div style="position:absolute;left:0;right:0;top:${top}px;height:${story ? 900 : 560}px;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,#000 70%,transparent 100%)"><img src="${U('recortes/' + it.recorte)}" style="position:absolute;width:${bb.w * s}px;left:${W / 2 - ((bb.x0 + bb.x1) / 2) * s}px;top:${-bb.y0 * s + 10}px"></div>
    ${logo}
    <div class="c" style="top:${top + (story ? 900 : 560) + 10}px"><div style="font-weight:900;font-size:${story ? 92 : 74}px;line-height:1.05;text-transform:uppercase">${esc(e.titulo)}</div>
    <div style="font-weight:800;font-size:${story ? 62 : 50}px;text-transform:uppercase;margin-top:6px">${hl(e.linha)}</div>
    <div style="font-weight:500;font-size:${story ? 38 : 31}px;line-height:1.4;margin:${story ? 30 : 20}px 0 ${story ? 36 : 26}px;color:${t.txt2}">${hl(e.apoio)}</div>${cta}</div>`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}${it.cssExtra || ''}</style></head><body><div id="bg"></div>${body}<script>window.__txt=null;window.__fig=null;document.fonts.ready.then(()=>{document.title='ok'});</script></body></html>`;
}

async function renderLote(itens, outDir, opts = {}) {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
  const tmp = path.join(ROOT, '.render-' + process.pid + '.html');
  const feitos = [], avisos = [];
  for (const formato of ['feed', 'story']) {
    const p = await b.newPage({ viewport: { width: 1080, height: formato === 'story' ? 1920 : 1350 } });
    for (const it of itens.filter(i => i.formato === formato)) {
      fs.writeFileSync(tmp, html(it));
      await p.goto('file://' + tmp);
      await p.waitForFunction(() => document.title === 'ok');
      await p.evaluate(async () => { await Promise.all([...document.images].map(i => i.complete ? 1 : new Promise(r => { i.onload = i.onerror = r; }))); });
      // checagens: texto não pode invadir as ações nem a figura
      const chk = await p.evaluate(() => {
        const f = window.__fig, boxes = [window.__txt, window.__txt2, window.__act].filter(Boolean);
        const inter = !!window.__unplacedFlag || (window.__figTop && window.__txt && window.__txt[3] > window.__figTop - 6);
        const t2 = window.__txt2, a = window.__act;
        return { boxes: JSON.stringify({z:window.__txt,t2:window.__txt2,a:window.__act,f}), over: t2 && a && t2[3] > a[1] - 6, inter, h1: parseFloat(document.querySelector('h1')?.style.fontSize) };
      });
      const id = `${it.id} ${formato} ${it.versao}`;
      if (chk.over) avisos.push(`${id}: texto encosta nas ações`);
      if (chk.inter) avisos.push(`${id}: texto invade a área da figura ${chk.boxes}`);
      if (chk.h1 && chk.h1 <= (formato === 'story' ? 44 : 34)) avisos.push(`${id}: headline pequena (${chk.h1}px)`);
      const nome = it.nome || `BLACK PROTON VITALICIA - ${it.etapa} ${it.id} - ${formato === 'feed' ? 'FEED' : 'STORIES'}${it.versao === 'claro' ? ' - CLARO' : ''}`;
      const dest = path.join(outDir, nome + '.jpg');
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      await p.screenshot({ path: dest, type: 'jpeg', quality: opts.quality || 88 });
      feitos.push(dest);
    }
    await p.close();
  }
  fs.rmSync(tmp, { force: true });
  await b.close();
  if (avisos.length) console.log('AVISOS:\n' + avisos.join('\n'));
  return feitos;
}

module.exports = { html, renderLote, T };

if (require.main === module) {
  const [lote, saida] = process.argv.slice(2);
  renderLote(JSON.parse(fs.readFileSync(lote, 'utf8')), saida || path.join(ROOT, 'saida')).then(f => console.log(f.length + ' artes'));
}
