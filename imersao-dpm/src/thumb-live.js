// Thumb do YouTube (1280x720) da live de abertura: Black Próton Vitalício.
// Uso: NODE_PATH=$(npm root -g) node thumb-live.js
const { chromium } = require('playwright');
const path = require('path');
const { CSS_BASE, ASSETS } = require('./marca');
const OUT = path.join(__dirname, '..', 'capas', 'thumb-live-abertura-black-proton-vitalicio.jpg');
const TMP = path.join(__dirname, '.render.html');

const html = `<!doctype html><html><head><meta charset="utf-8"><style>${CSS_BASE}
body{width:1280px;height:720px;background:#000;font-family:Inter,Montserrat,sans-serif}
.cosmos{background:
  radial-gradient(ellipse 45% 70% at 76% 55%, rgba(201,164,90,.30), transparent 70%),
  radial-gradient(ellipse 60% 60% at 10% 100%, rgba(201,164,90,.14), transparent 70%),
  #000}
.cosmos::after{opacity:.25}
.foto{right:-10px;bottom:0;width:640px;height:760px}
.arco{position:absolute;right:-120px;bottom:-200px;width:760px;height:760px;border-radius:50%;border:10px solid transparent;
  border-top-color:#F5D792;border-left-color:#C9A45A;filter:drop-shadow(0 0 18px rgba(245,215,146,.7));transform:rotate(-20deg)}
.arco2{right:-60px;bottom:-250px;width:820px;height:820px;border-width:4px;opacity:.6}
.sombra{position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.96) 0%,rgba(0,0,0,.85) 42%,transparent 68%)}
.logo{position:absolute;left:64px;top:44px;width:250px;height:77px}
.selo{position:absolute;left:64px;top:158px;font-size:22px;padding:9px 18px}
.t{position:absolute;left:64px;top:218px;font-weight:900;font-size:112px;line-height:1;letter-spacing:-3px;text-transform:uppercase}
.t .ouro{background:linear-gradient(180deg,#FBE7B0,#C9A45A);-webkit-background-clip:text;color:transparent}
.pill{position:absolute;left:64px;bottom:50px;font-size:22px;padding:13px 30px;background:linear-gradient(90deg,#F5D792,#C9A45A);color:#111;border:0;letter-spacing:.14em}
</style></head><body><div class="cosmos"></div>
<div class="arco"></div><div class="arco arco2"></div>
<div class="foto"></div><div class="sombra"></div>
<div class="logo"></div>
<span class="selo">Live de abertura</span>
<div class="t">Black<br>Próton<br><span class="ouro">Vitalício</span></div>
<span class="pill">Com a Dra. Próton</span>
</body></html>`;

(async () => {
  require('fs').writeFileSync(TMP, html);
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  await p.goto('file://' + TMP);
  await p.waitForTimeout(500);
  await p.screenshot({ path: OUT, type: 'jpeg', quality: 93 });
  await b.close();
  require('fs').unlinkSync(TMP);
})();
