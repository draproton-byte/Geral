const { chromium } = require('playwright-core');
const fs = require('fs'), path = require('path');
const FD = p => 'file://' + path.join(__dirname, 'node_modules/@fontsource/montserrat/files/montserrat-latin-' + p + '-normal.woff2');
const fonts = [400,500,600,700,800].map(w=>`@font-face{font-family:Montserrat;font-weight:${w};src:url('${FD(w)}')}`).join('');
const W=1080,H=1350;
const base = `${fonts}*{margin:0;padding:0;box-sizing:border-box}body{width:${W}px;height:${H}px;font-family:Montserrat;position:relative;overflow:hidden}
.logo{position:absolute;left:80px;top:70px;width:340px}`;
const dark = `<style>${base}
body{background:#0b0610;color:#fff}
.bg{position:absolute;inset:0;background:radial-gradient(ellipse 60% 50% at 75% 35%,rgba(150,95,30,.35),transparent 70%),#0b0610}
.foto{position:absolute;right:0;top:0;width:760px;height:1140px;background:url(foto1.jpg) center 8%/cover;
 -webkit-mask-image:linear-gradient(90deg,transparent 0,#000 38%),linear-gradient(180deg,#000 72%,transparent 100%);-webkit-mask-composite:source-in;mask-composite:intersect}
.sh{position:absolute;inset:0;background:linear-gradient(0deg,#0b0610 0,rgba(11,6,16,.85) 22%,transparent 45%)}
h1{position:absolute;left:80px;top:300px;width:560px;font-weight:800;font-size:74px;line-height:1.08;letter-spacing:-1px}
h1 b{color:#F2CB76}
.sub{position:absolute;left:80px;top:690px;width:480px;font-size:30px;line-height:1.4;color:#d9d3de}
.sub b{color:#F2CB76;font-weight:700}
.card{position:absolute;left:80px;right:80px;top:960px;height:130px;border:2px solid #C9A45A;border-radius:22px;background:rgba(30,18,10,.75);display:flex;align-items:center;justify-content:center;gap:34px;font-weight:800;font-size:60px;color:#F2CB76}
.card small{font-size:22px;letter-spacing:.3em;color:#fff;font-weight:600;display:block;margin-bottom:2px}
.btn{position:absolute;left:80px;right:80px;top:1140px;height:110px;border-radius:55px;background:linear-gradient(90deg,#F2CB76,#C9A45A);color:#1a0f05;font-weight:800;font-size:38px;letter-spacing:.08em;display:flex;align-items:center;justify-content:center}
</style><body><div class="bg"></div><div class="foto"></div><div class="sh"></div><img class="logo" src="logo.png">
<h1>Você <b>quase garantiu</b> seu lugar</h1>
<p class="sub">Falta só o cadastro pra <b>receber o link da live</b> de 04/11, às 20h.</p>
<div class="card"><span>04/11</span><span style="opacity:.5">|</span><span>às 20h</span></div>
<div class="btn">QUERO PARTICIPAR  →</div></body>`;
const light = `<style>${base}
body{background:#F8F1E6;color:#2a1410}
.bg{position:absolute;inset:0;background:radial-gradient(ellipse 60% 45% at 75% 35%,rgba(242,203,118,.45),transparent 70%)}
.arco{position:absolute;right:70px;top:150px;width:470px;height:700px;border-radius:235px 235px 28px 28px;border:3px solid #C9A45A;padding:12px}
.foto{width:100%;height:100%;border-radius:224px 224px 18px 18px;background:url(foto1.jpg) center 10%/cover}
h1{position:absolute;left:80px;top:300px;width:470px;font-weight:800;font-size:68px;line-height:1.08;letter-spacing:-1px}
h1 b{color:#B8862E}
.sub{position:absolute;left:80px;top:700px;width:460px;font-size:28px;line-height:1.4;color:#4a3a34}
.sub b{color:#6b1020;font-weight:700}
.card{position:absolute;left:80px;right:80px;top:930px;height:130px;border-radius:22px;background:linear-gradient(135deg,#6b1020,#3d0912);display:flex;align-items:center;justify-content:center;gap:34px;font-weight:800;font-size:60px;color:#F2CB76}
.btn{position:absolute;left:80px;right:80px;top:1110px;height:110px;border-radius:55px;background:linear-gradient(135deg,#6b1020,#3d0912);color:#fff;font-weight:800;font-size:36px;letter-spacing:.08em;display:flex;align-items:center;justify-content:center}
</style><body><div class="bg"></div><div class="arco"><div class="foto"></div></div><img class="logo" src="logo.png">
<h1>Você <b>quase garantiu</b> seu lugar</h1>
<p class="sub">Falta só o cadastro pra <b>receber o link da live</b> de 04/11, às 20h.</p>
<div class="card"><span>04/11</span><span style="opacity:.5">|</span><span>às 20h</span></div>
<div class="btn">QUERO PARTICIPAR  →</div></body>`;
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage({viewport:{width:W,height:H}});
for(const [n,h] of [['dark',dark],['light',light]]){fs.writeFileSync('r.html','<meta charset=utf-8>'+h);await p.goto('file://'+path.resolve('r.html'));await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:`pilot_${n}.jpg`,type:'jpeg',quality:84});}
await b.close()})();
