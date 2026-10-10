// Gera os criativos a partir de copy.json (docs de copy do Drive) + recortes/ (+ src/ajustes/*.json por id).
// Uso: node src/gerar.js [ID,ID...]   Saída: criativos/<ETAPA>/
const fs = require('fs'), path = require('path');
const { renderLote } = require('./render');
const ROOT = path.join(__dirname, '..');
const copy = JSON.parse(fs.readFileSync(path.join(__dirname, 'copy.json'), 'utf8'));
const filtro = (process.argv[2] || '').split(',').filter(Boolean);

const ajustes = {};
const dirAj = path.join(__dirname, 'ajustes');
if (fs.existsSync(dirAj)) for (const f of fs.readdirSync(dirAj).filter(x => x.endsWith('.json'))) Object.assign(ajustes, JSON.parse(fs.readFileSync(path.join(dirAj, f), 'utf8')));

const PASTA = { captacao: 'CAPTACAO', 'rmkt-captacao': 'RMKT DE CAPTACAO', aquecimento: 'AQUECIMENTO', antecipacao: 'ANTECIPACAO', escassez: 'ESCASSEZ', lembrete: 'LEMBRETE', vendas: 'VENDAS', 'rmkt-vendas': 'RMKT DE VENDAS' };
const dirRec = path.join(ROOT, 'recortes');
let recs = fs.readdirSync(dirRec).filter(f => /^recorte-\d+\.png$/.test(f)).sort();
const recJson = path.join(dirRec, 'recortes.json');
if (fs.existsSync(recJson)) { try { const j = JSON.parse(fs.readFileSync(recJson, 'utf8')); const arr = Array.isArray(j) ? j : j.recortes || []; const ok = arr.map(r => r.arquivo).filter(a => recs.includes(a)); if (ok.length) recs = ok; } catch (e) {} }
// feliz/serena primeiro no rodízio
const preferidos = ['recorte-36.png', 'recorte-24.png'].filter(r => recs.includes(r));
const rodizio = [...preferidos, ...recs.filter(r => !preferidos.includes(r))];

const SEM_FOTO = new Set(['C02', 'C04', 'C06', 'C08', 'ESC01', 'ESC02', 'ESC03', 'ESC04', 'AD02', 'AD03', 'AD08', 'AD09', 'AD13', 'AD14', 'AD15', 'AD16', 'AD17', 'AD18']);
const HERO = new Set(['ESC01', 'ESC02', 'ESC03', 'ESC04']);
const itens = [];
let ultimo = '';
copy.forEach((c, i) => {
  if (filtro.length && !filtro.includes(c.id)) return;
  const aj = ajustes[c.id] || {};
  let rec = aj.recorte || rodizio[(i * 7 + (c.etapa.length)) % rodizio.length];
  if (rec === ultimo) rec = rodizio[(rodizio.indexOf(rec) + 1) % rodizio.length];
  ultimo = rec;
  const pasta = PASTA[c.etapa];
  for (const formato of ['feed', 'story']) for (const versao of ['escuro', 'claro']) {
    const v = aj[formato + '-' + versao] || {};
    itens.push({ id: c.id, etapa: pasta, formato, versao, recorte: rec, headline: c.headline, apoio: c.apoio, fechamento: c.fechamento, selo: c.selo, data: c.data, cta: c.cta,
      layout: c.id === 'VEN05' ? 'capas' : SEM_FOTO.has(c.id) ? 'texto' : undefined, hero: HERO.has(c.id), capas: c.id === 'VEN05' ? ['clube-secreto', 'desbloqueie-o-poder-da-sua-mente', 'terapeuta-de-elite'] : undefined,
      nome: `${pasta}/BLACK PROTON VITALICIA - ${pasta} ${c.id} - ${formato === 'feed' ? 'FEED' : 'STORIES'}${versao === 'claro' ? ' - CLARO' : ''}`, ...aj, ...v });
  }
});
renderLote(itens, path.join(ROOT, 'criativos')).then(r => console.log(r.length + ' artes geradas'));
