// Identidade visual da Imersão Desbloqueie o Poder da Sua Mente (página + criativos oficiais).
const path = require('path');
const ASSETS = 'file://' + path.join(__dirname, '..', 'assets');

const COR = {
  fundo: '#000211',
  marinho: '#0A1233',
  roxo: '#24123F',
  ouro: '#F5D792',
  ouroEscuro: '#C9A45A',
  branco: '#FFFFFF',
  texto: '#C9CEDD',
};

// Fundo "cósmico" escuro com brilhos azul/roxo e poeira de estrelas.
const ESTRELAS = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='600'><filter id='s'><feTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='1' seed='7'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 18 -16.2'/></filter><rect width='100%' height='100%' filter='url(%23s)'/></svg>")`;

const CSS_BASE = `
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Montserrat;color:${COR.branco};overflow:hidden;position:relative;background:${COR.fundo}}
.cosmos{position:absolute;inset:0;
  background:
    radial-gradient(ellipse 55% 45% at 78% 30%, rgba(80,60,170,.45), transparent 70%),
    radial-gradient(ellipse 50% 40% at 15% 75%, rgba(40,70,170,.30), transparent 70%),
    radial-gradient(ellipse 80% 60% at 50% 50%, ${COR.marinho}, ${COR.fundo} 80%);}
.cosmos::after{content:"";position:absolute;inset:0;background:${ESTRELAS};opacity:.55}
.foto{position:absolute;background:url('${ASSETS}/foto.png') no-repeat bottom center/contain;
  -webkit-mask-image:linear-gradient(to bottom, #000 70%, transparent 98%);mask-image:linear-gradient(to bottom, #000 70%, transparent 98%)}
.brilho{position:absolute;border-radius:50%;filter:blur(60px);background:rgba(245,215,146,.18)}
.logo{background:url('${ASSETS}/logo-h.png') no-repeat left center/contain}
.ouro{color:${COR.ouro}}
.selo{display:inline-block;background:${COR.ouro};color:#111;font-weight:800;letter-spacing:.14em;text-transform:uppercase;border-radius:8px}
.pill{display:inline-block;border:2px solid ${COR.ouro};color:${COR.ouro};font-weight:700;letter-spacing:.2em;text-transform:uppercase;border-radius:999px}
`;

module.exports = { COR, CSS_BASE, ASSETS };
