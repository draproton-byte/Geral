// Gera os criativos de frase no formato do print de referência (story e feed).
// Uso: NODE_PATH=$(npm root -g) node criativos.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const frases = JSON.parse(fs.readFileSync(path.join(__dirname, 'frases.json'), 'utf8'));
const OUT = path.join(__dirname, '..', 'criativos');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const marcar = t => esc(t).replace(/\[([^\]]+)\]/g, '<mark>$1</mark>');

// Papel envelhecido: base bege + manchas + ruído SVG.
const PAPEL = `
  background:
    radial-gradient(ellipse at 50% 45%, rgba(255,250,235,.55), transparent 60%),
    radial-gradient(ellipse at 10% 90%, rgba(140,95,40,.28), transparent 45%),
    radial-gradient(ellipse at 95% 5%, rgba(140,95,40,.22), transparent 40%),
    linear-gradient(160deg, #eadcbf, #e3d2b0 55%, #d9c49d);
`;
const RUIDO = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .35  0 0 0 0 .25  0 0 0 0 .12  0 0 0 .35 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

function html(f, formato) {
  const story = formato === 'story';
  const W = 1080, H = story ? 1920 : 1350;
  const cardW = story ? 940 : 960, cardH = story ? 1200 : 1180;
  const len = f.texto.replace(/[\[\]]/g, '').length;
  // Tamanho da fonte proporcional ao tamanho da frase.
  const fs = len < 30 ? 150 : len < 50 ? 118 : len < 70 ? 100 : len < 90 ? 88 : 78;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:${W}px;height:${H}px;overflow:hidden;position:relative;
    background:
      linear-gradient(90deg, rgba(20,18,10,.9) 0 6%, transparent 14% 86%, rgba(20,18,10,.9) 94%),
      repeating-linear-gradient(180deg, #6b5a1c 0 90px, #c9a825 160px, #2c2715 240px, #8d8a78 330px, #6b5a1c 420px);
  }
  body::before{content:"";position:absolute;inset:0;backdrop-filter:blur(40px);background:rgba(190,180,160,.35)}
  .card{position:absolute;left:${(W - cardW) / 2}px;top:${(H - cardH) / 2 - (story ? 40 : 0)}px;width:${cardW}px;height:${cardH}px;
    border-radius:18px;${PAPEL};box-shadow:0 30px 60px rgba(0,0,0,.35), inset 0 0 90px rgba(120,80,30,.45);
    padding:0 ${story ? 90 : 95}px;display:flex;flex-direction:column;justify-content:center;overflow:hidden}
  .card::after{content:"";position:absolute;inset:0;background:${RUIDO};opacity:.55;mix-blend-mode:multiply;pointer-events:none}
  .fantasma{position:absolute;right:40px;top:40px;width:45%;opacity:.07;font:14px/1.9 'Playfair Display';color:#3b2a10}
  p.frase{font-family:Anton;font-size:${fs}px;line-height:1.16;color:#111;letter-spacing:-.5px;position:relative;z-index:1}
  mark{background:linear-gradient(transparent 0 16%, #f2c200 16% 97%, transparent 97%);color:#111;padding:0 .08em;box-decoration-break:clone;-webkit-box-decoration-break:clone}
  .ass{margin-top:${Math.round(fs * .55)}px;font:500 36px Inter;color:#222;position:relative;z-index:1}
  .ass b{font-weight:800}
  .arroba{position:absolute;left:${(W - cardW) / 2 + 12}px;top:${(H + cardH) / 2 - (story ? 40 : 0) + 26}px;font:600 34px Inter;color:#fff;opacity:.9;text-shadow:0 2px 8px rgba(0,0,0,.4)}
  </style></head><body>
  <div class="card">
    <div class="fantasma">Energia é uma onda de informação. Tudo o que você pensa, sente, fala, escuta e escreve gera uma vibração. O universo é um campo que devolve o que você vibra. Frequência muda tudo. O cérebro não distingue o real do imaginado.</div>
    <p class="frase">${marcar(f.texto)}</p>
    <p class="ass">— Dra. <b>Próton</b></p>
  </div>
  <div class="arroba">@dra.proton</div>
  </body></html>`;
}

(async () => {
  const b = await chromium.launch();
  const only = process.argv[2];
  for (const formato of ['story', 'feed']) {
    const dir = path.join(OUT, formato);
    fs.mkdirSync(dir, { recursive: true });
    const p = await b.newPage({ viewport: { width: 1080, height: formato === 'story' ? 1920 : 1350 } });
    for (const f of frases) {
      if (only && f.id !== only) continue;
      await p.setContent(html(f, formato));
      await p.evaluate(() => document.fonts.ready);
      await p.screenshot({ path: path.join(dir, `${f.id}-${formato}.jpg`), type: 'jpeg', quality: 90 });
    }
    await p.close();
  }
  await b.close();
  console.log('ok');
})();
