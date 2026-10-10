// Motor de criativos Black Próton Vitalícia (feed 1080x1350 e stories 1080x1920; versões escuro e claro).
// Regras do briefing: Dra. Próton RECORTADA e solta no fundo (sem moldura), tronco para cima, grande;
// NENHUMA palavra sobre a figura (texto e figura em áreas separadas); Montserrat; logo solto; paleta oficial.
// Item: { id, etapa, formato:'feed'|'story', versao:'escuro'|'claro', recorte:'recorte-12.png', headline:'TEXTO [destaque]',
//         apoio:'texto\nlinha', fechamento, selo, data:true|false, cta, layout:'lado'|'pilha'|'capas', capas:[...] }
const { chromium } = require('playwright-core');
const { PNG } = require('pngjs');
const fs = require('fs'), path = require('path');

const ROOT = path.join(__dirname, '..');
const FONTS = [400, 500, 600, 700, 800, 900].map(w =>
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
  for (let y = 0; y < png.height; y++) for (let x = 0; x < png.width; x++) {
    if (png.data[(y * png.width + x) * 4 + 3] > 60) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  }
  return (bboxCache[arquivo] = { x0, y0, x1, y1, w: png.width, h: png.height });
}

const T = {
  escuro: { bg: '#150808', bg2: '#0A0607', txt: '#F9F3EA', txt2: '#E9DCC9', hi: 'linear-gradient(90deg,#F0CD7A,#D4A84E 55%,#A37A27)', line: '#D4A84E', ring: 'rgba(212,168,78,.13)', glow: 'rgba(212,168,78,.34)', card: 'rgba(249,243,234,.06)', cardLine: 'rgba(212,168,78,.55)', btnBg: 'linear-gradient(90deg,#F0CD7A,#D4A84E 60%,#C29A3F)', btnTxt: '#150808', btnDot: '#150808', btnArrow: '#F0CD7A' },
  claro: { bg: '#F9F3EA', bg2: '#F1E8D8', txt: '#1D1110', txt2: '#3b2a25', hi: 'linear-gradient(90deg,#B8862E,#A37A27 55%,#8A6217)', line: '#A37A27', ring: 'rgba(163,122,39,.16)', glow: 'rgba(212,168,78,.40)', card: 'rgba(29,17,16,.05)', cardLine: 'rgba(163,122,39,.6)', btnBg: 'linear-gradient(135deg,#2a1512,#150808)', btnTxt: '#F0CD7A', btnDot: '#D4A84E', btnArrow: '#150808' },
};

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
  const rec = it.recorte && layout !== 'capas' && layout !== 'texto' ? it.recorte : null;
  const bb = rec ? bboxDe(rec) : null;
  const capas = (it.capas || []).map(c => U('capas-cursos/' + c + '.jpg'));
  const cfg = { W, H, story, layout, bb, hasCut: !!rec, padBottom: story ? 380 : 74, topY: story ? 450 : 190, fsStart: it.fs || (layout === 'texto' ? (story ? 120 : 92) : story ? 92 : 64), fsMin: story ? 40 : 32, bleed: it.bleed ?? 40 };

  const dataCard = it.data ? `
    <div class="date" id="date">
      <div class="d1"><i class="ic big">${ICONES.cal}</i><div><small>LIVE DE REVELAÇÃO</small><b>QUARTA · 04 DE NOVEMBRO</b></div></div>
      <div class="d2"><span><i class="ic">${ICONES.rel}</i>ÀS 20H</span><span><i class="ic">${ICONES.live}</i>AO VIVO</span><span><i class="ic">${ICONES.play}</i>NO YOUTUBE</span></div>
    </div>` : '';
  const cta = it.cta ? `<div class="cta"><span>${esc(it.cta)}</span><i>→</i></div>` : '';
  const selo = it.selo ? `<div class="selo">${hl(it.selo)}</div>` : '';
  const apoio = it.apoio ? `<p class="apoio">${it.apoio.includes('\n') ? it.apoio.split('\n').map(l => `<span class="li">${hl(l)}</span>`).join('') : hl(it.apoio)}</p>` : '';
  const fecho = it.fechamento ? `<div class="fecho">${hl(it.fechamento)}</div>` : '';
  const capasHtml = capas.length ? `<div id="capas">${capas.map(c => `<img src="${c}">`).join('')}</div>` : '';

  const css = `${FONTS}*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${W}px;height:${H}px}
body{font-family:Montserrat;background:${t.bg};color:${t.txt};position:relative;overflow:hidden}
#bg{position:absolute;inset:0;background:radial-gradient(ellipse 60% 48% at var(--gx,72%) var(--gy,32%),${t.glow},transparent 72%),radial-gradient(ellipse 120% 90% at 50% 0%,${t.bg},${t.bg2})}
#bg svg{position:absolute;inset:0;width:100%;height:100%}
#logo{position:absolute;left:80px;top:${story ? 262 : 60}px;width:${story ? 400 : 330}px;filter:drop-shadow(0 4px 12px rgba(0,0,0,.28))}
#cutwrap{position:absolute;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,#000 0,#000 80%,transparent 100%)}
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
.ic{display:inline-flex;width:${Math.round(26 * k)}px;height:${Math.round(26 * k)}px}.ic.big{width:${Math.round(66 * k)}px;height:${Math.round(66 * k)}px}.ic svg{width:100%;height:100%}
.d2{display:flex;margin-top:${Math.round(16 * k)}px;padding-top:${Math.round(14 * k)}px;border-top:1.5px solid rgba(21,8,8,.35)}
.d2 span{flex:1;display:flex;align-items:center;justify-content:center;gap:10px;font-weight:800;font-size:${Math.round(23 * k)}px;letter-spacing:.04em;white-space:nowrap}
.d2 span+span{border-left:1.5px solid rgba(21,8,8,.35)}
.cta{display:inline-flex;align-items:center;gap:${Math.round(30 * k)}px;height:${Math.round(100 * k)}px;padding:0 ${Math.round(18 * k)}px 0 ${Math.round(46 * k)}px;border-radius:999px;background:${t.btnBg};color:${t.btnTxt};font-weight:800;font-size:${Math.round(33 * k)}px;letter-spacing:.07em;box-shadow:0 14px 34px rgba(0,0,0,.28)}
.cta i{font-style:normal;width:${Math.round(66 * k)}px;height:${Math.round(66 * k)}px;border-radius:50%;background:${t.btnDot};color:${t.btnArrow};display:flex;align-items:center;justify-content:center;font-size:${Math.round(38 * k)}px;line-height:1;padding-bottom:3px}
#foot{position:absolute;left:80px;right:80px;height:20px;display:flex;align-items:center;gap:16px}
#foot::before,#foot::after{content:"";flex:1;height:1.5px;background:linear-gradient(90deg,transparent,${t.line})}
#foot::after{transform:scaleX(-1);order:2}
#foot i{width:11px;height:11px;background:${t.line};transform:rotate(45deg);order:1}
#capas{position:absolute;left:80px;right:80px;display:flex;gap:22px;align-items:center;justify-content:center}
#capas img{flex:1 1 0;min-width:0;max-height:100%;border-radius:16px;box-shadow:0 18px 40px rgba(0,0,0,.4);border:1.5px solid ${t.cardLine};object-fit:cover}
`;

  const script = `
const C=${JSON.stringify(cfg)};
const $=s=>document.querySelector(s);
const act=$('#actions'),txt=$('#txt'),h1=$('h1'),foot=$('#foot');
document.fonts.ready.then(()=>{ run(); document.title='ok'; });
function setFs(fs){h1.style.fontSize=fs+'px';const a=$('.apoio'),f=$('.fecho'),s=$('.selo');
  if(a)a.style.fontSize=Math.round(Math.max(fs*0.46,C.story?27:23))+'px';
  if(f)f.style.fontSize=Math.round(Math.max(fs*0.42,C.story?26:22))+'px';
  if(s)s.style.fontSize=Math.round(Math.max(fs*0.34,C.story?24:20))+'px';}
function run(){
  const actH=act.offsetHeight; const actTop=C.H-C.padBottom-actH; act.style.top=actTop+'px';
  foot.style.top=(C.story?C.H-C.padBottom+22:C.H-46)+'px';
  const cw=$('#cutwrap'),cut=$('#cut');
  let regionTop=C.topY, regionBottom=actTop-14;
  if(C.layout==='lado'&&C.hasCut){
    const bb=C.bb, bh=bb.y1-bb.y0, bw=bb.x1-bb.x0;
    const s=Math.min((regionBottom-regionTop)/bh, 620/bw);
    const left=C.W+C.bleed-bb.x1*s, bleft=left+bb.x0*s;
    cut.src=cut.dataset.src; cut.style.width=(bb.w*s)+'px'; cut.style.left=left+'px'; cut.style.top=(-bb.y0*s)+'px';
    cw.style.left='0px';cw.style.width=C.W+'px';cw.style.top=regionTop+'px';cw.style.height=(regionBottom-regionTop)+'px';
    const textW=Math.max(380,bleft-28-80); txt.style.width=textW+'px'; txt.style.top=(regionTop+10)+'px';
    const maxH=regionBottom-regionTop-20;
    for(let fs=C.fsStart;fs>=C.fsMin;fs-=2){setFs(fs); if(txt.offsetHeight<=maxH&&h1.scrollWidth<=txt.clientWidth+1&&txt.scrollWidth<=txt.clientWidth+1) break;}
    document.documentElement.style.setProperty('--gx',Math.min(90,((left+((bb.x0+bb.x1)/2)*s)/C.W*100))+'%');
    document.documentElement.style.setProperty('--gy',((regionTop+bh*s*0.22)/C.H*100)+'%');
    window.__txt=[80,txt.offsetTop,80+textW,txt.offsetTop+txt.offsetHeight];
    window.__fig=[bleft,regionTop,C.W,regionBottom];
  } else if(C.layout==='pilha'&&C.hasCut){
    txt.style.width=(C.W-160)+'px'; txt.style.top=C.topY+'px';
    const bb=C.bb, bh=bb.y1-bb.y0, bw=bb.x1-bb.x0;
    for(let fs=C.fsStart;fs>=C.fsMin;fs-=2){setFs(fs); const free=actTop-14-(C.topY+txt.offsetHeight+24); if(free>=Math.min(C.story?760:520,(C.H*0.34))&&h1.scrollWidth<=txt.clientWidth+1) break;}
    regionTop=C.topY+txt.offsetHeight+24;
    const s=Math.min((regionBottom-regionTop)/bh,(C.W+160)/bw);
    const left=C.W/2-((bb.x0+bb.x1)/2)*s;
    cut.src=cut.dataset.src; cut.style.width=(bb.w*s)+'px'; cut.style.left=left+'px'; cut.style.top=(-bb.y0*s)+'px';
    cw.style.left='0px';cw.style.width=C.W+'px';cw.style.top=regionTop+'px';cw.style.height=(regionBottom-regionTop)+'px';
    document.documentElement.style.setProperty('--gx','50%');
    document.documentElement.style.setProperty('--gy',((regionTop+bh*s*0.2)/C.H*100)+'%');
    window.__txt=[80,txt.offsetTop,C.W-80,txt.offsetTop+txt.offsetHeight];
    window.__fig=[0,regionTop,C.W,regionBottom];
  } else { // capas (sem figura)
    txt.style.width=(C.W-160)+'px'; txt.style.top=C.topY+'px';
    const caps=$('#capas');
    for(let fs=C.fsStart;fs>=C.fsMin;fs-=2){setFs(fs); const free=actTop-14-(C.topY+txt.offsetHeight+24); if(free>=(caps?(C.story?640:470):0)&&h1.scrollWidth<=txt.clientWidth+1) break;}
    if(caps){caps.style.top=(C.topY+txt.offsetHeight+30)+'px';caps.style.height=(actTop-14-(C.topY+txt.offsetHeight+30))+'px';}
    if(!caps){const avail=actTop-14-C.topY; txt.style.top=(C.topY+Math.max(0,(avail-txt.offsetHeight)/2))+'px';}
    window.__txt=[80,txt.offsetTop,C.W-80,txt.offsetTop+txt.offsetHeight];
    window.__fig=null;
  }
}`;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${css}${it.cssExtra || ''}</style></head><body>
<div id="bg"><svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none"><g fill="none" stroke="${t.ring}" stroke-width="2">${[260, 420, 590, 770].map(r => `<circle cx="${W * 0.72}" cy="${H * 0.3}" r="${r}"/>`).join('')}</g></svg></div>
<img id="logo" src="${U('assets/logo-dourado.png')}">
<div id="cutwrap"><img id="cut" data-src="${rec ? U('recortes/' + rec) : ''}"></div>
<div id="txt"${it.hero ? ' class="hero"' : ''}><h1>${hl(it.headline)}</h1>${apoio}${fecho}${selo}</div>
${capasHtml}
<div id="actions">${dataCard}${cta}</div>
<div id="foot"><i></i></div>
<script>${script}</script></body></html>`;
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
        const t = window.__txt, f = window.__fig, a = document.getElementById('actions').getBoundingClientRect();
        const inter = t && f && !(t[2] <= f[0] || t[0] >= f[2] || t[3] <= f[1] || t[1] >= f[3]);
        return { over: t && t[3] > a.top - 8, inter, h1: parseFloat(document.querySelector('h1').style.fontSize) };
      });
      const id = `${it.id} ${formato} ${it.versao}`;
      if (chk.over) avisos.push(`${id}: texto encosta nas ações`);
      if (chk.inter) avisos.push(`${id}: texto invade a área da figura`);
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
