// Gera todos os criativos a partir de copy.json + fotos.json (+ ajustes.json com correções manuais por id).
// Uso: node src/gerar.js [filtroId,filtroId...]   Saída: criativos/<etapa>/
const fs = require('fs'), path = require('path');
const { renderLote } = require('./render');
const ROOT = path.join(__dirname, '..');
const copy = JSON.parse(fs.readFileSync(path.join(__dirname, 'copy.json'), 'utf8')).criativos;
const fotos = JSON.parse(fs.readFileSync(path.join(ROOT, 'fotos/fotos.json'), 'utf8'));
// ajustes manuais por id: src/ajustes/*.json  { "C01": { layout, foto, fs, cssExtra, "feed-escuro": {...override só dessa variante} } }
const ajustes = {};
const dirAj = path.join(__dirname, 'ajustes');
if (fs.existsSync(dirAj)) for (const f of fs.readdirSync(dirAj).filter(x => x.endsWith('.json'))) Object.assign(ajustes, JSON.parse(fs.readFileSync(path.join(dirAj, f), 'utf8')));
const filtro = (process.argv[2] || '').split(',').filter(Boolean);

const NOME_ETAPA = { captacao: 'CAPTACAO', 'rmkt-captacao': 'RMKT DE CAPTACAO', aquecimento: 'AQUECIMENTO', antecipacao: 'ANTECIPACAO', lembrete: 'LEMBRETE', vendas: 'VENDAS', 'rmkt-vendas': 'RMKT DE VENDAS', escassez: 'ESCASSEZ' };
const CAPAS = ['clube-secreto', 'a-nova-realidade', 'audios-poderosos', 'sequencias-numericas', 'terapeuta-de-elite', 'crianca-interior', 'cura-escassez-financeira', 'desbloqueie-o-poder-da-sua-mente'];
const LAYOUTS = ['direita', 'topo', 'arco', 'direita', 'cartao', 'topo', 'direita', 'arco'];

const uteis = fotos.filter(f => f.qualidade >= 3 && f.arquivo !== 'foto-36.jpg');
const feliz = fotos.find(f => f.arquivo === 'foto-36.jpg'), serena = fotos.find(f => f.arquivo === 'foto-24.jpg');
const bold = (txt, dest) => (dest || []).reduce((t, d) => t.replace(d, '**' + d + '**'), txt || '');

const itens = [];
let n = 0;
for (const c of copy) {
  if (c.tipo !== 'estatico' || !NOME_ETAPA[c.etapa]) continue;
  if (filtro.length && !filtro.includes(c.id)) continue;
  const i = n++;
  const aj = ajustes[c.id] || {};
  // foto: feliz a cada 3 criativos, serena a cada 7, senão rodízio
  let f = i % 3 === 0 ? feliz : i % 7 === 3 ? serena : uteis[i % uteis.length];
  if (aj.foto) f = fotos.find(x => x.arquivo === aj.foto) || f;
  const layout = aj.layout || (c.etapa === 'vendas' && i % 4 === 1 ? 'capas' : LAYOUTS[i % LAYOUTS.length]);
  const bd = c.bloco_data;
  for (const formato of ['feed', 'story']) for (const versao of ['escuro', 'claro']) {
    const v = (aj[formato + '-' + versao]) || {};
    itens.push({
      id: c.id, etapa: NOME_ETAPA[c.etapa], dir: c.etapa, formato, versao, layout, foto: f.arquivo, foco: [f.ponto_focal_x, f.ponto_focal_y], fundoFoto: f.fundo,
      eyebrow: c.eyebrow, headline: c.headline, subtexto: bold(c.subtexto, c.destaques),
      data: bd ? { rotulo: bd.rotulo, texto: bd.valor + (bd.extras ? '' : '') } : null,
      cta: c.cta, selo: (bd && bd.extras) || null, // selo_extra do copy.json são notas de direção de arte, não texto
      
      capas: [CAPAS[i % 8], CAPAS[(i + 1) % 8], CAPAS[(i + 2) % 8], CAPAS[(i + 3) % 8]],
      nome: `${NOME_ETAPA[c.etapa]}/BLACK PROTON VITALICIA - ${NOME_ETAPA[c.etapa]} ${c.id} - ${formato === 'feed' ? 'FEED' : 'STORIES'}${versao === 'claro' ? ' - CLARO' : ''}`,
      ...aj, ...v,
    });
  }
}
renderLote(itens, path.join(ROOT, 'criativos')).then(r => console.log(r.length + ' artes geradas'));
