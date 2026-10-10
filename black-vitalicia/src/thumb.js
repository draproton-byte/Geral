// Thumb/capa de YouTube 1280x720 da live de revelacao Black Proton Vitalicia (3 variacoes A, B, C).
// Uso: node src/thumb.js [recorteA.png recorteB.png recorteC.png]
//   sem argumentos: usa recortes/recorte-*.png (se existirem) ou o recorte provisorio abaixo.
// Saida: thumbs/thumb-a.jpg, thumb-b.jpg, thumb-c.jpg (+ previas thumbs/mini-*.jpg a 320x180)
const { chromium } = require('playwright-core');
const fs = require('fs'), path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'thumbs');
const PROV = '/tmp/claude-0/-home-user-Geral/b4a1b9cf-d5c2-56c7-bc2b-c02a487eae2c/scratchpad/cut/c36.png';
const FONTS = [500, 600, 700, 800, 900].map(w =>
  `@font-face{font-family:Montserrat;font-weight:${w};src:url('file://${path.join(ROOT, 'node_modules/@fontsource/montserrat/files/montserrat-latin-' + w + '-normal.woff2')}')}`).join('');
const LOGO = 'file://' + path.join(ROOT, 'assets/logo-dourado.png');

// ---- icones (traco escuro ou dourado) ----
const ic = {
  cal: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,
  clock: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M12 6.5V12l3.5 2.2"/></svg>`,
  live: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="2.6" fill="${c}"/><path d="M7.5 7.5a6.4 6.4 0 0 0 0 9M16.5 7.5a6.4 6.4 0 0 1 0 9M4.4 4.4a10.8 10.8 0 0 0 0 15.2M19.6 4.4a10.8 10.8 0 0 1 0 15.2"/></svg>`,
  arrow: c => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};

const BASE = `${FONTS}*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1280px;height:720px}
body{font-family:Montserrat,sans-serif;background:#150808;color:#F9F3EA;position:relative;overflow:hidden}
.abs{position:absolute}
.bg{position:absolute;inset:0;background:
  radial-gradient(ellipse 52% 80% at var(--gx) 46%,rgba(212,168,78,.40),rgba(163,122,39,.14) 48%,transparent 74%),
  radial-gradient(ellipse 120% 100% at 50% 40%,#1d0c0b 0,#150808 55%,#0A0607 100%)}
.rings{position:absolute;inset:0}
.logo{position:absolute;filter:drop-shadow(0 4px 14px rgba(0,0,0,.5))}
.gold{background:linear-gradient(180deg,#F0CD7A 0,#D4A84E 55%,#A37A27 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
.titulo{font-weight:900;text-transform:uppercase;line-height:.96;letter-spacing:-1px}
.dra{position:absolute;overflow:hidden;filter:drop-shadow(0 0 26px rgba(240,205,122,.28)) drop-shadow(0 10px 24px rgba(0,0,0,.55))}
.dra img{position:absolute;max-width:none}
.card{display:flex;align-items:center;gap:20px;border-radius:26px;padding:0 34px 0 26px;background:linear-gradient(135deg,#F0CD7A 0,#D4A84E 52%,#A37A27 100%);color:#2a1408;box-shadow:0 12px 30px rgba(0,0,0,.45),inset 0 2px 0 rgba(255,255,255,.35)}
.card .ico{width:58px;height:58px;flex:none}
.card small{display:block;font-weight:800;letter-spacing:.24em;font-size:19px;line-height:1;margin-bottom:6px}
.card b{display:block;font-weight:900;line-height:.92;letter-spacing:-2px}
.info{display:flex;flex-direction:column;justify-content:center;gap:16px}
.info div{display:flex;align-items:center;gap:14px;font-weight:800;color:#F9F3EA;letter-spacing:.03em;white-space:nowrap}
.info div svg{width:38px;height:38px;flex:none}
.info .l2{color:#F0CD7A}
.pill{display:inline-flex;align-items:center;gap:20px;height:78px;padding:0 12px 0 40px;border-radius:999px;background:linear-gradient(90deg,#F0CD7A,#D4A84E 60%,#A37A27);color:#2a1408;font-weight:900;font-size:29px;letter-spacing:.07em;text-transform:uppercase;box-shadow:0 10px 26px rgba(0,0,0,.45),inset 0 2px 0 rgba(255,255,255,.3);white-space:nowrap}
.pill i{width:56px;height:56px;border-radius:50%;background:#150808;display:flex;align-items:center;justify-content:center}
.pill i svg{width:28px;height:28px}
`;

function rings(cx, cy) {
  const r = [150, 250, 360, 480, 620].map((v, i) => `<circle cx="${cx}" cy="${cy}" r="${v}" fill="none" stroke="#D4A84E" stroke-opacity="${(0.2 - i * 0.03).toFixed(2)}" stroke-width="1.5"/>`).join('');
  return `<svg class="rings" viewBox="0 0 1280 720">${r}</svg>`;
}

// Dra: img recortada pelo bbox do alfa, ancorada embaixo; (x = esquerda da caixa, w = largura alvo, h = altura alvo)
function dra(d, x, w, h, top) {
  const s = Math.max(h / d.bh, 0); const sw = d.bw * s;
  const bw = Math.min(sw, w) || sw;
  return `<div class="dra" style="left:${x}px;top:${top}px;width:${sw}px;height:${h}px"><img src="file://${d.file}" style="left:${-d.bx * s}px;top:${-d.by * s}px;width:${d.iw * s}px;height:${d.ih * s}px"></div>`;
}

const card = (h, f1, f2) => `<div class="card" style="height:${h}px"><div class="ico">${ic.cal('#2a1408')}</div><div><small style="font-size:${f1}px">DATA</small><b style="font-size:${f2}px">04/11</b></div></div>`;
const info = (f) => `<div class="info"><div style="font-size:${f}px">${ic.clock('#F0CD7A')}ÀS 20H</div><div class="l2" style="font-size:${f}px">${ic.live('#F0CD7A')}AO VIVO</div></div>`;
const pill = (fs) => `<div class="pill" style="font-size:${fs}px">ATIVE O LEMBRETE<i>${ic.arrow('#F0CD7A')}</i></div>`;

function pagina(v, d) {
  let gx, ringsC, body;
  if (v === 'A') {
    // texto a esquerda (x<700), Dra a direita
    gx = '76%'; ringsC = [930, 360];
    body = `<img class="logo" src="${LOGO}" style="left:56px;top:34px;width:250px">
      <div class="abs titulo gold" style="left:56px;top:128px;font-size:100px;width:640px">Black<br>Próton<br>Vitalícia</div>
      <div class="abs" style="left:56px;top:452px;display:flex;align-items:center;gap:30px">${card(130, 17, 66)}${info(32)}</div>
      <div class="abs" style="left:56px;top:606px">${pill(26)}</div>
      ${dra(d, 710, 560, 720, 0)}`;
  } else if (v === 'B') {
    // logo oficial como heroi (titulo), Dra grande a direita
    gx = '78%'; ringsC = [960, 340];
    body = `<img class="logo" src="${LOGO}" style="left:44px;top:40px;width:640px">
      <div class="abs" style="left:56px;top:322px;display:flex;align-items:center;gap:32px">${card(168, 20, 88)}${info(40)}</div>
      <div class="abs" style="left:56px;top:560px">${pill(34)}</div>
      ${dra(d, 720, 560, 760, -30)}`;
  } else {
    // espelhado: Dra a esquerda, texto a direita, data em faixa no topo
    gx = '24%'; ringsC = [330, 380];
    body = `<div class="abs" style="left:640px;top:40px;display:flex;align-items:center;gap:30px">${card(116, 16, 58)}${info(30)}</div>
      <img class="logo" src="${LOGO}" style="left:640px;top:190px;width:300px">
      <div class="abs titulo gold" style="left:640px;top:318px;font-size:66px;white-space:nowrap;width:620px">Black Próton<br>Vitalícia</div>
      <div class="abs" style="left:640px;top:520px">${pill(32)}</div>
      ${dra(d, 20, 600, 720, 0)}`;
  }
  return `<!doctype html><html><head><meta charset="utf-8"><style>:root{--gx:${gx}}${BASE}</style></head><body>
    <div class="bg"></div>${rings(ringsC[0], ringsC[1])}${body}</body></html>`;
}

function medir(file) {
  const py = "import sys,json;from PIL import Image;im=Image.open(sys.argv[1]).convert('RGBA');a=im.split()[-1].point(lambda v:255 if v>24 else 0);x0,y0,x1,y1=a.getbbox();print(json.dumps(dict(iw=im.width,ih=im.height,bx=x0,by=y0,bw=x1-x0,bh=y1-y0)))";
  return JSON.parse(require('child_process').execFileSync('python3', ['-I', '-c', py, file]).toString());
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  let files = process.argv.slice(2);
  if (!files.length) {
    const dir = path.join(ROOT, 'recortes');
    files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => /^recorte-\d+\.png$/.test(f)).sort().map(f => path.join(dir, f)) : [];
    if (!files.length) files = [PROV];
  }
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
  const page = await b.newPage({ viewport: { width: 1280, height: 720 } });
  for (const [i, v] of ['A', 'B', 'C'].entries()) {
    const file = path.resolve(files[i % files.length]);
    const d = { file, ...medir(file) };
    const tmp = path.join(OUT, `.tmp-${v}.html`); fs.writeFileSync(tmp, pagina(v, d)); await page.goto('file://' + tmp, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(250);
    const out = path.join(OUT, `thumb-${v.toLowerCase()}.jpg`);
    await page.screenshot({ path: out, type: 'jpeg', quality: 93 });
    fs.unlinkSync(tmp);
    console.log(out, '<-', file);
  }
  await b.close();
})();
