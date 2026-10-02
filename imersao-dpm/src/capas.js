// Capas Hotmart na identidade visual da Imersão: aulas (1280x720), módulos (1080x1920) e fundo do certificado (A4 paisagem).
// Uso: NODE_PATH=$(npm root -g) node capas.js
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { CSS_BASE, ASSETS } = require('./marca');
const OUT = path.join(__dirname, '..', 'capas');
const TMP = path.join(__dirname, '.render.html');
const m = t => t.replace(/\[([^\]]+)\]/g, '<span class="ouro">$1</span>');

const aulas = [
  { arq: 'aula-01-noite-1', n: '01', data: '08/09', titulo: 'Por que a sua vida [não dava certo]', sub: 'O jogo sem regras · O universo é um espelho · O CD em branco' },
  { arq: 'aula-02-noite-2', n: '02', data: '09/09', titulo: 'A noite da [reprogramação]', sub: 'Sobrevivente ou conquistadora · Frequência · Hipnose de Desbloqueio' },
  { arq: 'aula-03-noite-3', n: '03', data: '10/09', titulo: 'Ative seu ímã de [dinheiro, saúde e amor]', sub: "Soltar o velho · As duas listas · Ho'oponopono · Eu do futuro" },
];
const htmlAula = a => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS_BASE}
body{width:1280px;height:720px}
.foto{right:-60px;bottom:0;width:560px;height:700px}
.sombra{position:absolute;inset:0;background:linear-gradient(90deg, rgba(0,2,17,.97) 0%, rgba(0,2,17,.9) 48%, rgba(0,2,17,.2) 75%, transparent)}
.num{position:absolute;right:430px;bottom:-40px;font:900 300px/1 Montserrat;color:rgba(245,215,146,.08)}
.logo{position:absolute;left:70px;top:56px;width:300px;height:92px}
.box{position:absolute;left:70px;top:190px;width:700px}
.selo{font-size:20px;padding:8px 16px}
.titulo{font-weight:800;font-size:62px;line-height:1.08;margin:22px 0 20px;letter-spacing:-.5px}
.sub{font-weight:500;font-size:21px;line-height:1.5;color:#C9CEDD}
.data{position:absolute;left:70px;bottom:52px;font-weight:600;font-size:17px;letter-spacing:.28em;color:rgba(255,255,255,.6)}
</style></head><body><div class="cosmos"></div>
<div class="brilho" style="right:120px;top:120px;width:420px;height:420px"></div>
<div class="num">${a.n}</div><div class="foto"></div><div class="sombra"></div>
<div class="logo"></div>
<div class="box"><span class="selo">Aula ${a.n} · Noite ${Number(a.n)}</span>
<div class="titulo">${m(a.titulo)}</div><div class="sub">${a.sub}</div></div>
<div class="data">${a.data} · AULA GRAVADA · DRA. PRÓTON</div>
</body></html>`;

const modulos = [
  { arq: 'modulo-00-boas-vindas', tag: 'Comece aqui', titulo: '[Boas-vindas] à Imersão', sub: 'Como aproveitar as 3 noites' },
  { arq: 'modulo-01-as-3-noites', tag: 'Módulo 01', titulo: 'As [3 noites] da Imersão', sub: 'Consciência · Reprogramação · Criação' },
  { arq: 'modulo-02-materiais-de-apoio', tag: 'Módulo 02', titulo: '[Materiais] de apoio', sub: 'Resumos das aulas · Material completo · Protocolo diário' },
  { arq: 'modulo-03-bonus', tag: 'Módulo 03', titulo: '[Bônus] Códigos de Grabovoi', sub: 'E-book · Mantras da manhã e da noite' },
];
const htmlModulo = x => `<!doctype html><html><head><meta charset="utf-8"><style>${CSS_BASE}
body{width:1080px;height:1920px}
.foto{left:50%;transform:translateX(-50%);bottom:0;width:980px;height:1250px}
.sombra{position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,2,17,.95) 0%, rgba(0,2,17,.6) 38%, transparent 55%, rgba(0,2,17,.2) 70%, rgba(0,2,17,.96) 88%)}
.logo{position:absolute;left:50%;transform:translateX(-50%);top:120px;width:560px;height:172px;background-position:center}
.topo{position:absolute;left:90px;right:90px;top:380px;text-align:center}
.selo{font-size:32px;padding:12px 26px}
.titulo{font-weight:800;font-size:112px;line-height:1.04;margin-top:34px;letter-spacing:-1px}
.base{position:absolute;left:90px;right:90px;bottom:150px;text-align:center}
.sub{font-weight:600;font-size:38px;line-height:1.4;color:#fff}
.linha{width:140px;height:6px;background:#F5D792;margin:0 auto 34px}
.dra{margin-top:30px;font-weight:600;font-size:28px;letter-spacing:.3em;color:#F5D792}
</style></head><body><div class="cosmos"></div>
<div class="brilho" style="left:280px;top:820px;width:520px;height:520px"></div>
<div class="foto"></div><div class="sombra"></div>
<div class="logo"></div>
<div class="topo"><span class="selo">${x.tag}</span><div class="titulo">${m(x.titulo)}</div></div>
<div class="base"><div class="linha"></div><div class="sub">${x.sub}</div><div class="dra">DRA. PRÓTON</div></div>
</body></html>`;

// Certificado em tom marfim (o texto da Hotmart é impresso em cor escura) com moldura marinho e ouro.
const htmlCert = `<!doctype html><html><head><meta charset="utf-8"><style>${CSS_BASE}
body{width:3508px;height:2480px;background:#FBF7EE;color:#0A1233}
.faixa{position:absolute;left:0;right:0;top:0;height:520px;background:radial-gradient(ellipse 60% 120% at 50% 0%, #0A1233, #000211)}
.faixa::after{content:"";position:absolute;left:0;right:0;bottom:0;height:14px;background:linear-gradient(90deg,#C9A45A,#F5D792,#C9A45A)}
.logo{position:absolute;left:50%;transform:translateX(-50%);top:110px;width:1100px;height:300px;background-position:center}
.moldura{position:absolute;left:140px;right:140px;top:640px;bottom:140px;border:6px solid #C9A45A;border-radius:24px}
.titulo{position:absolute;left:0;right:0;top:760px;text-align:center;font:800 150px Montserrat;letter-spacing:.18em;color:#0A1233}
.sub{position:absolute;left:0;right:0;top:960px;text-align:center;font:600 56px Montserrat;letter-spacing:.35em;color:#C9A45A}
.ass{position:absolute;left:50%;transform:translateX(-50%);bottom:330px;width:1000px;text-align:center;border-top:5px solid #0A1233;padding-top:30px;font:700 54px Montserrat}
.ass small{display:block;font:500 40px Montserrat;color:#6b6f80;margin-top:10px}
</style></head><body>
<div class="faixa"><div class="logo"></div></div>
<div class="moldura"></div>
<div class="titulo">CERTIFICADO</div>
<div class="sub">DE CONCLUSÃO</div>
<div class="ass">Dra. Próton<small>Imersão Desbloqueie o Poder da Sua Mente</small></div>
</body></html>`;

(async () => {
  const b = await chromium.launch();
  const shot = async (html, w, h, file) => {
    const p = await b.newPage({ viewport: { width: w, height: h } });
    fs.writeFileSync(TMP, html);
    await p.goto('file://' + TMP);
    await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(OUT, file), type: 'jpeg', quality: 90 });
    await p.close();
  };
  fs.mkdirSync(OUT, { recursive: true });
  for (const a of aulas) await shot(htmlAula(a), 1280, 720, a.arq + '.jpg');
  for (const x of modulos) await shot(htmlModulo(x), 1080, 1920, x.arq + '.jpg');
  await shot(htmlCert, 3508, 2480, 'certificado-fundo-a4.jpg');
  fs.rmSync(TMP, { force: true });
  await b.close();
  console.log('ok');
})();
