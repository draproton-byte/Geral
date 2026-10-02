// Criativos de frases da Dra. Próton na identidade visual da Imersão (feed 1080x1350 e story 1080x1920).
// Uso: NODE_PATH=$(npm root -g) node criativos.js [ID]
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { CSS_BASE } = require('./marca');

const frases = JSON.parse(fs.readFileSync(path.join(__dirname, 'frases.json'), 'utf8'));
const OUT = path.join(__dirname, '..', 'criativos');
const TMP = path.join(__dirname, '.render.html');

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const marcar = t => esc(t).replace(/\[([^\]]+)\]/g, '<span class="ouro">$1</span>');

function html(f, formato) {
  const story = formato === 'story';
  const W = 1080, H = story ? 1920 : 1350;
  const len = f.texto.replace(/[\[\]]/g, '').length;
  const fs = story
    ? (len < 30 ? 108 : len < 50 ? 92 : len < 70 ? 80 : 70)
    : (len < 30 ? 92 : len < 50 ? 76 : len < 70 ? 66 : 58);
  return `<!doctype html><html><head><meta charset="utf-8"><style>${CSS_BASE}
  body{width:${W}px;height:${H}px}
  .foto{${story ? 'right:-250px;bottom:0;width:820px;height:1180px' : 'right:-200px;bottom:0;width:720px;height:1090px'}}
  .sombra{position:absolute;inset:0;background:linear-gradient(90deg, rgba(0,2,17,.96) 0%, rgba(0,2,17,.85) 45%, rgba(0,2,17,.15) 75%, transparent 100%)}
  .logo{position:absolute;left:80px;top:${story ? 150 : 80}px;width:${story ? 470 : 400}px;height:${story ? 146 : 124}px}
  .bloco{position:absolute;left:80px;width:${story ? 640 : 640}px;${story ? 'top:400px' : 'top:0;bottom:0;display:flex;flex-direction:column;justify-content:center'}}
  .aspas{font:800 ${story ? 200 : 170}px/0.6 Montserrat;color:#F5D792;opacity:.9;height:${story ? 90 : 70}px}
  .frase{font-weight:800;font-size:${fs}px;line-height:1.13;letter-spacing:-.5px;text-shadow:0 2px 20px rgba(0,0,0,.5)}
  .linha{width:110px;height:5px;background:#F5D792;margin:${story ? 54 : 44}px 0 ${story ? 26 : 22}px}
  .ass{font-weight:700;font-size:${story ? 38 : 32}px;color:#F5D792;letter-spacing:.04em}
  .arroba{font-weight:500;font-size:${story ? 30 : 26}px;color:rgba(255,255,255,.7);margin-top:8px}
  .rodape{position:absolute;left:80px;bottom:${story ? 140 : 70}px;font-weight:600;font-size:${story ? 24 : 21}px;letter-spacing:.3em;color:rgba(255,255,255,.55)}
  </style></head><body>
  <div class="cosmos"></div>
  <div class="brilho" style="right:120px;top:${story ? 520 : 260}px;width:520px;height:520px"></div>
  <div class="foto"></div>
  <div class="sombra"></div>
  <div class="logo"></div>
  <div class="bloco">
    <div class="aspas">“</div>
    <p class="frase">${marcar(f.texto)}</p>
    <div class="linha"></div>
    <div class="ass">Dra. Próton</div>
    <div class="arroba">@dra.proton</div>
  </div>
  <div class="rodape">IMERSÃO · DESBLOQUEIE O PODER DA SUA MENTE</div>
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
      fs.writeFileSync(TMP, html(f, formato));
      await p.goto('file://' + TMP);
      await p.evaluate(() => document.fonts.ready);
      await p.screenshot({ path: path.join(dir, `${f.id}-${formato}.jpg`), type: 'jpeg', quality: 90 });
    }
    await p.close();
  }
  fs.rmSync(TMP, { force: true });
  await b.close();
  console.log('ok');
})();
