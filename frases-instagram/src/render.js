// Gera as artes de frases da Dra. Próton (feed 1080x1440, proporção 3:4) em 2 estilos:
//   ref  = estilo pergaminho (igual aos prints de referência da Dra.)
//   id   = identidade visual do produto (Clube Secreto, Desafio, Imersão) com logo
// Uso: NODE_PATH=$(npm root -g) node render.js [CURSO] [ID]
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const A = 'file://' + path.join(ROOT, 'assets');
const dados = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'frases.json'), 'utf8'));
const TMP = path.join(__dirname, '.render.html');
const W = 1080, H = 1440;

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const marcar = t => esc(t).replace(/\[([^\]]+)\]/g, '<span class="hl">$1</span>');

const FONT = `@font-face{font-family:Anton;src:url('${A}/Anton.ttf')}`;
const NOISE = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='500'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' seed='4'/><feColorMatrix values='0 0 0 0 .35  0 0 0 0 .22  0 0 0 0 .1  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

// Ajusta o corpo do texto para ocupar a caixa sem estourar.
const FIT = `
const box=document.querySelector('.txt');const max=+box.dataset.max,min=+box.dataset.min,maxh=+box.dataset.maxh;
let s=max;box.style.fontSize=s+'px';
while(s>min&&box.scrollHeight>maxh){s-=2;box.style.fontSize=s+'px';}
`;

function htmlRef(f) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>${FONT}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;position:relative;overflow:hidden;background:#E6C38C;font-family:Inter,Arial}
.papel{position:absolute;inset:0;background:
  radial-gradient(ellipse 75% 70% at 45% 42%, #F4DDB4 0%, #EBCB95 55%, #D9AE6E 100%)}
.ruido{position:absolute;inset:0;background:${NOISE};opacity:.5;mix-blend-mode:multiply}
.luz{position:absolute;inset:0;background:repeating-linear-gradient(112deg,transparent 0 120px,rgba(120,70,10,.10) 120px 190px,transparent 190px 330px);mask-image:linear-gradient(200deg,#000 0%,transparent 70%);-webkit-mask-image:linear-gradient(200deg,#000 0%,transparent 70%)}
.borda{position:absolute;inset:0;box-shadow:inset 0 0 90px 18px rgba(120,60,5,.55),inset 0 0 14px 4px rgba(90,40,0,.6)}
.bloco{position:absolute;left:112px;right:96px;top:0;bottom:0;display:flex;flex-direction:column;justify-content:center;padding-bottom:80px}
.txt{font-family:Anton;color:#0a0a0a;line-height:1.14;letter-spacing:-.012em;word-spacing:-.04em;text-align:left}
.hl{background:linear-gradient(#F2C512,#F2C512) no-repeat 0 58%/100% 74%;padding:0 .16em 0 .12em;margin-left:-.12em;-webkit-box-decoration-break:clone;box-decoration-break:clone}
.ass{margin-top:64px;font-size:46px;color:#1a1a1a;letter-spacing:.01em}
.ass b{font-weight:800}
</style></head><body><div class="papel"></div><div class="luz"></div><div class="ruido"></div><div class="borda"></div>
<div class="bloco"><div class="txt" data-max="132" data-min="70" data-maxh="880">${marcar(f.texto)}</div>
<div class="ass">— Dra. <b>Próton</b></div></div>
<script>${FIT}</script></body></html>`;
}

const TEMAS = {
  clube: {
    bg: `radial-gradient(ellipse 70% 45% at 50% 18%, rgba(190,140,60,.42), transparent 70%),
         radial-gradient(ellipse 90% 60% at 50% 100%, rgba(120,80,30,.35), transparent 70%),
         radial-gradient(ellipse 100% 80% at 50% 50%, #17110A, #050403 85%)`,
    cor: '#E9C77A', logo: 'logo-clube-secreto.png', lw: 560, lh: 252, foto: null,
    rodape: 'CLUBE SECRETO · OS RENASCIDOS',
  },
  desafio: {
    bg: `radial-gradient(ellipse 60% 45% at 78% 22%, rgba(214,120,40,.50), transparent 70%),
         radial-gradient(ellipse 60% 45% at 12% 88%, rgba(110,50,140,.42), transparent 70%),
         radial-gradient(ellipse 100% 80% at 50% 50%, #1A0D12, #07040A 85%)`,
    cor: '#F0C264', logo: 'logo-desafio.png', lw: 700, lh: 212, foto: null,
    rodape: 'DESAFIO · A NOVA REALIDADE',
  },
  imersao: {
    bg: `radial-gradient(ellipse 55% 45% at 78% 30%, rgba(80,60,170,.45), transparent 70%),
         radial-gradient(ellipse 50% 40% at 15% 75%, rgba(40,70,170,.30), transparent 70%),
         radial-gradient(ellipse 80% 60% at 50% 50%, #0A1233, #000211 80%)`,
    cor: '#F5D792', logo: 'logo-imersao.png', lw: 520, lh: 161, foto: 'foto-imersao.png',
    rodape: 'IMERSÃO · DESBLOQUEIE O PODER DA SUA MENTE',
  },
};

function htmlId(f) {
  const t = TEMAS[f.curso_key];
  const foto = t.foto
    ? `<div class="foto" style="position:absolute;right:-230px;bottom:0;width:760px;height:1150px;background:url('${A}/${t.foto}') no-repeat bottom center/contain;-webkit-mask-image:linear-gradient(to bottom,#000 70%,transparent 98%)"></div>
       <div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,2,17,.96) 0%,rgba(0,2,17,.85) 48%,rgba(0,2,17,.12) 78%,transparent 100%)"></div>`
    : '';
  const largura = t.foto ? 640 : 860;
  return `<!doctype html><html><head><meta charset="utf-8"><style>${FONT}
*{margin:0;padding:0;box-sizing:border-box}
body{width:${W}px;height:${H}px;position:relative;overflow:hidden;background:#050403;font-family:Inter,Arial;color:#fff}
.fundo{position:absolute;inset:0;background:${t.bg}}
.estrelas{position:absolute;inset:0;background:${NOISE.replace(/\.35 {2}0 0 0 0 \.22 {2}0 0 0 0 \.1/, '1  0 0 0 0 1  0 0 0 0 1')};opacity:.18}
.moldura{position:absolute;inset:36px;border:2px solid ${t.cor};opacity:.55}
.logo{position:absolute;left:80px;top:96px;width:${t.lw}px;height:${t.lh}px;background:url('${A}/${t.logo}') no-repeat left center/contain}
.bloco{position:absolute;left:80px;width:${largura}px;top:430px;bottom:215px;display:flex;flex-direction:column;justify-content:center}
.aspas{font-family:Anton;font-size:190px;line-height:.6;height:84px;color:${t.cor};opacity:.9}
.txt{font-family:Anton;line-height:1.1;letter-spacing:.002em;text-shadow:0 2px 22px rgba(0,0,0,.55)}
.hl{color:${t.cor}}
.linha{width:110px;height:5px;background:${t.cor};margin:46px 0 24px}
.ass{font-weight:700;font-size:36px;color:${t.cor};letter-spacing:.04em}
.arroba{font-weight:500;font-size:28px;color:rgba(255,255,255,.7);margin-top:6px}
.rodape{position:absolute;left:80px;bottom:86px;font-weight:600;font-size:21px;letter-spacing:.3em;color:rgba(255,255,255,.55)}
</style></head><body><div class="fundo"></div><div class="estrelas"></div>${foto}<div class="moldura"></div><div class="logo"></div>
<div class="bloco"><div class="aspas">“</div><div class="txt" data-max="108" data-min="58" data-maxh="640">${marcar(f.texto)}</div>
<div class="linha"></div><div class="ass">Dra. Próton</div><div class="arroba">@dra.proton</div></div>
<div class="rodape">${t.rodape}</div>
<script>${FIT}</script></body></html>`;
}

(async () => {
  const [, , cursoArg, idArg] = process.argv;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: W, height: H } });
  let n = 0;
  for (const f of dados) {
    if (cursoArg && f.curso_key !== cursoArg) continue;
    if (idArg && f.id !== idArg) continue;
    for (const tipo of ['ref', 'id']) {
      const dir = path.join(ROOT, 'artes', f.curso_key, tipo === 'ref' ? 'estilo-referencia' : 'identidade-produto');
      fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(TMP, tipo === 'ref' ? htmlRef(f) : htmlId(f));
      await p.goto('file://' + TMP);
      await p.evaluate(() => document.fonts.ready);
      await p.screenshot({ path: path.join(dir, `${f.id}.jpg`), type: 'jpeg', quality: 88 });
      n++;
    }
  }
  fs.rmSync(TMP, { force: true });
  await b.close();
  console.log('artes geradas:', n);
})();
