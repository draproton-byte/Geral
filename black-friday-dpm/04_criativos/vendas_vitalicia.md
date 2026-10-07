# Vendas da Vitalícia (pós-live): estáticos, legendas e remarketing de vendas

| Campo | Definição |
|---|---|
| **Peça** | 24 anúncios de venda (VIT-01 a 24, os 18 primeiros modelados em CR1 a CR18) + 5 legendas (LEG-VIT-01 a 05) + 12 anúncios de remarketing de vendas (RMV-01 a 12) + 4 legendas (LEG-RMV-01 a 04) = 45 IDs |
| **Canal** | Meta Ads (feed, stories, reels); legendas também no Instagram orgânico |
| **Público** | Quem assistiu à live, visitou a página de vendas ou iniciou o checkout (remarketing); lista de interesse e base morna (venda). S1 (alunas) e S2/S3 (não-alunas) em conjuntos separados |
| **Momento** | A partir da abertura do carrinho na live, 03/11, 21h28 (oferta revelada 20h51, preço 21h09, live termina 21h56), até `[[PENDENTE: fechamento]]`. Nenhuma peça deste arquivo vai ao ar antes de 21h09 se tiver preço, nem antes de 21h28 se levar ao checkout ou à página de vendas |
| **Objetivo** | Compra pelo checkout do lote vigente |
| **Consciência** | 3 a 5 |
| **Modelo no Desafio** | Criativos de venda do Clube Secreto no Desafio (CR1 a CR18), legenda de vendas do Clube, remarketing do Clube (Ad 1 a 25) e legenda de remarketing do Clube |
| **O que acontece depois do clique** | Checkout (lote e segmento) → compra aprovada → trilha de entrada → primeiro passo em 48 horas (ver `10_pos_compra`) |

**Trabalho contratado:** "Eu quero uma decisão que eu só precise tomar uma vez." O Clube vendia "365 dias comigo". A Vitalícia vende o fim do prazo: acesso para sempre, sem recomeçar.

**Transformação dos modelos CR do Clube:** onde o CR dizia "365 dias" ou parcela mensal, a Black diz "acesso vitalício" e usa os placeholders. O argumento dos 365 dias não some: vira "o que muda em 365 dias" (VIT-15 e VIT-18), porque 365 dias vão passar de qualquer jeito.

## Entrega para o designer

**Identidade visual: `[[PENDENTE: identidade visual]]`.** Cor, fonte, logo e estilo de ilustração ainda não existem. Nada aqui é especificação final. "Destaque" é o elemento de maior contraste e peso dentro da identidade futura. Até lá, o designer entrega versão neutra só para validar texto, hierarquia, posição e frame 0.

| Item | Valor |
|---|---|
| Formato F (feed) | 1080 × 1350 px (4:5), margem de 65 px nas laterais |
| Formato S (story e reels) | 1080 × 1920 px (9:16). Área segura: 250 px livres no topo e 340 px na base em stories; em reels, 250 px no topo, 670 px na base e 65 px nas laterais `[[CONFIRMAR: gabarito vigente da Meta no dia da produção]]` |
| Padrão | Todo anúncio sai em F e em S, em JPG ou PNG. O texto de cada arte é fixo: o designer não corta nem troca palavras para caber |
| Kit A | Texto da arte + marca `[[PENDENTE: identidade visual]]` |
| Kit B | Kit A + `[[FOTO DRA]]` em alta resolução, fundo livre |
| Kit C | Kit A + imagem ou ícone de apoio a critério do designer (estilo a definir) |
| Kit D | Kit A + print de depoimento autorizado (`[[DEPOIMENTO REAL]]`) |
| Hierarquia | N1 = o que para o scroll; N2 = título; N3 = apoio (lote, data, preço) |
| Anúncios "Ambos" | Viram **duas artes**: uma com `[[PREÇO LOTE ALUNAS]]` (conjunto S1) e outra com `[[PREÇO LOTE NÃO-ALUNAS]]` (conjunto S2/S3). Nunca uma arte com os dois placeholders |

**Convenção de preço:** `[[PREÇO LOTE ALUNAS]]` ou `[[PREÇO LOTE NÃO-ALUNAS]]`, conforme o conjunto de anúncios. Parcelas: `[[CONFIRMAR: nº de parcelas e valor]]`. Âncora: `[[CONFIRMAR: valor da mentoria individual e se ainda vale]]`. Garantia: `[[PENDENTE: garantia]]`. Bônus: `[[PENDENTE: bônus]]`. Preço avulso: `[[PENDENTE: preço avulso]]`. Nenhum valor aparece antes de 03/11, 20h.

**Forma de escassez:** só por lote real (`[[PENDENTE: data do lote]]`) e por "esta condição não se repete". Nenhum anúncio promete dinheiro, tratamento ou fim da autossabotagem, e nenhum usa palavra de limite de lugares (o carrinho tem lotes por data). O texto diz a data do lote só quando ela estiver confirmada.

**Linguagem (políticas da Meta):** nenhum título ou texto afirma condição pessoal do leitor (dinheiro, dívida, saúde, emoção, compras anteriores). O padrão aparece como pergunta, frase entre aspas, dado de pesquisa em terceira pessoa ou descrição da oferta. Tráfego frio e remarketing usam texto neutro de gênero, sem formas com parênteses para marcar gênero. Em S1 o feminino é aceito. Remarketing não revela rastreio: nenhum texto diz que a pessoa voltou, fechou a aba ou abriu o checkout.

**Links:** cada anúncio e cada legenda traz a linha "Link de destino" com um token do mapa de links (`16_MAPA_DE_LINKS.md`), canal `ads-meta`. O lote muda ao longo da campanha e o mesmo anúncio roda em mais de um lote, então o destino é a página que mostra o lote vigente: página de vendas (S2 e S3) ou página das alunas (S1). Nos anúncios "Ambos", a linha "Link de destino" vale para o conjunto de S2 e S3 e uma segunda linha "Link de destino do conjunto S1" vale para S1. Os anúncios por lote fixo (escassez) estão em `escassez_e_virada_de_lote.md`, com checkout.

**Depois de entrar:** os anúncios de venda dizem o que vem depois (trilha de entrada, primeiro passo em 48 horas) ou que o que a aluna já fez conta. Onde isso falta por espaço (stories), o texto do anúncio carrega a frase.

## A conta: quanto custaria comprar tudo separado

Usada nas peças VIT-13, VIT-19, LEG-VIT-02, RMV-09, LEG-RMV-04, VID-09 (em `roteiros_video_curto.md`) e CAR-VIT, card 8 (em `carrossel_instagram.md`). Sem preço avulso confirmado, a conta não pode ser publicada. **Condição de honestidade:** só publicar se cada preço avulso for um preço realmente praticado (`[[CONFIRMAR: preços avulsos praticados]]`); preço de tabela que nunca foi cobrado não entra.

| Item | Preço avulso |
|---|---|
| Clube Secreto | `[[PENDENTE: preço avulso]]` |
| Fórmula da Riqueza | `[[PENDENTE: preço avulso]]` |
| Workshop Terapeuta de Elite | `[[PENDENTE: preço avulso]]` |
| Os 3 Áudios de Reprogramação | `[[PENDENTE: preço avulso]]` |
| Código de Ativação Próton | `[[PENDENTE: preço avulso]]` |
| Imersão Desbloqueie o Poder da Sua Mente | `[[PENDENTE: preço avulso]]` |
| Desafio A Nova Realidade | `[[PENDENTE: preço avulso]]` |
| Cura da Criança Interior | `[[PENDENTE: preço avulso]]` |
| Instagram Profissional | `[[PENDENTE: preço avulso]]` |
| Destrave o Dinheiro | `[[PENDENTE: preço avulso]]` |
| Cura da Escassez Financeira | `[[PENDENTE: preço avulso]]` |
| Sequências Numéricas de Grabovoi | `[[PENDENTE: preço avulso]]` |
| **Total comprando separado** | `[[PENDENTE: soma dos preços avulsos]]` |
| **Vitalícia, pagamento único** | `[[PREÇO LOTE ALUNAS]]` ou `[[PREÇO LOTE NÃO-ALUNAS]]` (um por arte) |
| Diferença | `[[CÁLCULO: soma menos preço do lote]]` |

---

## Parte 1: 24 anúncios de venda

### VIT-01 | Modelo CR1 | Ambos | Aberto
- **Texto na arte:** N1 "ACESSO VITALÍCIO ABERTO" · N2 "Topa parar de recomeçar e ficar de vez, com o Clube Secreto e tudo o que a Dra. Próton já criou?"
- **Texto do anúncio:** Pagamento único. Lote atual até [[PENDENTE: data do lote]]. Quem entra recebe a trilha de entrada.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** B
- **Frame 0:** "ACESSO VITALÍCIO ABERTO" como maior elemento, em destaque, e `[[FOTO DRA]]` sorrindo ao lado. Para o scroll porque a palavra "aberto" avisa a mudança de fase (foi revelado) e é o primeiro anúncio que a base espera.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-01]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-01]]

### VIT-02 | Modelo CR2 | Ambos
- **Texto na arte:** N1 "Um pagamento. Para sempre." · N2 "Clube Secreto + 11 produtos."
- **Texto do anúncio:** Acesso vitalício ao Clube Secreto e aos 11 produtos, em pagamento único. Entre de vez.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "Um pagamento. Para sempre." em duas linhas, "para sempre" em destaque. Para o scroll porque a ideia central da campanha cabe em 4 palavras.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-02]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-02]]

### VIT-03 | Modelo CR3 | Ambos | Com preço
- **Texto na arte:** N1 "Recomeçar cansa." · N2 "Ficar de vez é outra decisão." · N3 "[[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por arte)"
- **Texto do anúncio:** Eu abri o acesso vitalício ao Clube Secreto e aos 11 produtos que criei. Pagamento único: [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por arte), com a opção de [[CONFIRMAR: nº de parcelas e valor]].
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** B
- **Frame 0:** a frase em N1, o preço em uma etiqueta de N3 (não na headline) e `[[FOTO DRA]]` à esquerda. Para o scroll porque a frase curta nomeia o cansaço de recomeçar e o preço fica em segundo plano.
- **Nota:** teste de preço escondido na etiqueta contra preço em destaque (VIT-20).
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-03]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-03]]

### VIT-04 | Modelo CR4 | Ambos
- **Texto na arte:** N1 "1 decisão" · N2 "Mais uma. Uma só, para sempre."
- **Texto do anúncio:** Acesso vitalício ao Clube Secreto e aos 11 produtos. Pagamento único, [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por arte) até [[PENDENTE: data do lote]].
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "1 decisão" como maior elemento, em destaque. Para o scroll porque o número 1 é concreto e conecta com o trabalho contratado.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-04]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-04]]

### VIT-05 | Modelo CR5 | Ambos
- **Texto na arte:** N1 "Recomeçar não é fraqueza." · N2 "Ficar é uma decisão."
- **Texto do anúncio:** Decidir uma vez, com um lugar para ficar: é isso que o acesso vitalício abre. Entre agora.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** B
- **Frame 0:** `[[FOTO DRA]]` de frente e a frase ao lado, "ficar" em destaque. Para o scroll porque a frase absolve o recomeço e aponta a saída sem culpa.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-05]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-05]]

### VIT-06 | Modelo CR6 | Ambos
- **Texto na arte:** N1 "A mente pode ser o maior bloqueio."
- **Texto do anúncio:** Com o acesso vitalício, você tem o tempo que precisar para descobrir como reprogramá-la, sem prazo para dar conta. Quem entra recebe a trilha de entrada.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** a silhueta de uma cabeça com uma porta aberta no lugar do pensamento. Para o scroll porque a imagem é uma metáfora simples, entendida sem texto. Estilo da ilustração a definir.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-06]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-06]]

### VIT-07 | Modelo CR7 | Ambos
- **Texto na arte:** N1 "E se o bloqueio nunca foi falta de esforço?"
- **Texto do anúncio:** O que trava a vida costuma começar lá atrás, e dá para olhar para isso sem pressa. Não é terapia: é prática guiada, com acesso vitalício.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "nunca foi falta de esforço" em destaque, a pergunta em duas linhas. Para o scroll porque desculpa o esforço e abre a causa.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-07]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-07]]

### VIT-08 | Modelo CR8 | Ambos | Parcelamento
- **Texto na arte:** N1 "Pagamento único. Acesso vitalício." · N3 "[[CONFIRMAR: nº de parcelas e valor]]"
- **Texto do anúncio:** O que ficou pela metade tantas vezes ganha um lugar para ficar, sem pagar de novo.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o valor da parcela em tamanho grande, com "sem pagar de novo" em N2 abaixo. Para o scroll porque o parcelamento visível é o que a base mais escolhe (cartão parcelado) e aqui ele aparece sem esforço de leitura.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-08]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-08]]

### VIT-09 | Modelo CR9 | Ambos
- **Texto na arte:** N1 "Curso, livro, mentoria. Quantos ficaram pela metade?"
- **Texto do anúncio:** Muitas vezes o que falta não é conteúdo: é companhia no "depois". Com o acesso vitalício há a trilha de entrada, o Clube Secreto e um ponto de partida claro. `[[CONFIRMAR: aulas ao vivo e suporte inclusos na Vitalícia]]`
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** uma pilha de livros e cursos com "ficaram pela metade?" em destaque. Para o scroll porque é o retrato da objeção número 2 da base ("já comprei outros e não tive resultado", 11% no Aulão).
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-09]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-09]]

### VIT-10 | Modelo CR10 | Ambos
- **Texto na arte:** N1 "Conteúdo tem de sobra. Falta alguém do lado."
- **Texto do anúncio:** Acesso vitalício ao Clube Secreto, com aulas ao vivo toda terça e suporte no WhatsApp, e aos 11 produtos. `[[CONFIRMAR: aulas ao vivo e suporte inclusos na Vitalícia]]`
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "alguém do lado" em destaque. Para o scroll porque dá nome ao que falta, não ao que sobra.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-10]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-10]]

### VIT-11 | Modelo CR11 | Ambos
- **Texto na arte:** N1 "O padrão que se quer mudar é o mesmo que sabota a mudança."
- **Texto do anúncio:** Por isso, sem apoio, muita gente trava no mesmo lugar. No Clube Secreto o método não se aplica no escuro: aplica-se com a Dra. Próton e com a trilha de entrada.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** duas setas em sentido contrário, uma delas em destaque, e a frase abaixo. Para o scroll porque o conflito é visual e a frase é uma sentença sobre o que acontece com muita gente.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-11]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-11]]

### VIT-12 | Modelo CR12 | Ambos | Depoimento
- **Texto na arte:** N1 "Mais de 70 mil alunos em 44 países." · N3 print `[[DEPOIMENTO REAL]]` ao fundo
- **Texto do anúncio:** Um depoimento real, publicado com autorização. Acesso vitalício aberto.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** D
- **Frame 0:** o print do depoimento em foco, com a frase por cima em faixa. Para o scroll porque a prova social real, em print, é o elemento de maior confiança para quem desconfia.
- **Condição:** só publicar com depoimento autorizado.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-12]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-12]]

### VIT-13 | Substitui CR13 | Ambos | A conta de tudo separado
- **Texto na arte:** N1 "Comprando tudo separado: [[PENDENTE: soma dos preços avulsos]]" · N2 "Acesso vitalício: [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por arte)"
- **Texto do anúncio:** O Clube Secreto e 11 produtos, em um pagamento único. Diferença: [[CÁLCULO: soma menos preço do lote]].
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** dois números, o primeiro riscado e com menos peso, o segundo maior e em destaque. Para o scroll porque a comparação de preço é o formato mais rápido de ler.
- **Condição:** só com os preços avulsos confirmados e praticados (ver a tabela da conta).
- **Nota:** o CR13 do Clube (preço dividido por dia) não cabe em um acesso sem prazo; foi substituído pela conta de tudo separado.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-13]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-13]]

### VIT-14 | Modelo CR14 | Ambos | Âncora
- **Texto na arte:** N1 "Minha mentoria individual custa [[CONFIRMAR: valor da mentoria individual e se ainda vale]]." · N2 "O acesso vitalício ao Clube Secreto: [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por arte)."
- **Texto do anúncio:** São entregas diferentes: uma é individual, a outra é o Clube Secreto e 11 produtos em pagamento único.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o valor da âncora riscado ao lado do preço do lote. Para o scroll porque a âncora é a comparação mais antiga do funil da Dra.
- **Condição:** só publicar se a âncora for confirmada.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-14]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-14]]

### VIT-15 | Modelo CR15 | Ambos | O que muda em 365 dias
- **Texto na arte:** N1 "365" · N2 "Quanto está custando continuar mais um ano exatamente no mesmo lugar?"
- **Texto do anúncio:** 365 dias vão passar de qualquer jeito. São 52 semanas. A pergunta é: você vai passar por elas recomeçando, ou vai ter parado de recomeçar?
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "365" gigante e a pergunta abaixo. Para o scroll porque é o número do ano, que todos usam, e a pergunta costura as duas respostas.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-15]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-15]]

### VIT-16 | Modelo CR16 | Ambos
- **Texto na arte:** N1 "Faltou um lugar para ficar, não força de vontade."
- **Texto do anúncio:** Quem recomeça tantas vezes talvez só precise de um lugar onde ficar. O acesso vitalício é esse lugar, sem prazo para dar conta.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "lugar para ficar" em destaque, o resto em N2. Para o scroll porque desloca a culpa da pessoa para a falta de um lugar.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-16]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-16]]

### VIT-17 | Modelo CR17 | Ambos
- **Texto na arte:** N1 "Isso não é sobre aprender. É sobre ficar."
- **Texto do anúncio:** O Clube Secreto e o catálogo inteiro, em acesso vitalício.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "ficar" em destaque, grande, em fundo liso. Para o scroll porque a palavra "ficar" é o eixo da campanha.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-17]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-17]]

### VIT-18 | Modelo CR18 | Ambos | Future pacing
- **Texto na arte:** N1 "Daqui a 365 dias, qual versão sua vai estar aqui?"
- **Texto do anúncio:** A que continuou recomeçando, ou a que parou de recomeçar? A última vez que você vai precisar recomeçar começa agora.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** duas silhuetas lado a lado, uma com menos peso e outra em destaque. Para o scroll porque é uma bifurcação visual simples.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-18]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-18]]

### VIT-19 | Novo | Ambos | O que entra
- **Texto na arte:** N1 "Clube Secreto + 11 produtos." · N2 "12 em 1" · N3 lista dos 11 produtos
- **Texto do anúncio:** Fórmula da Riqueza, Workshop Terapeuta de Elite, Os 3 Áudios de Reprogramação, Código de Ativação Próton, Imersão Desbloqueie o Poder da Sua Mente, Desafio A Nova Realidade, Cura da Criança Interior, Instagram Profissional, Destrave o Dinheiro, Cura da Escassez Financeira e Sequências Numéricas de Grabovoi. Tudo com acesso vitalício.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** uma grade de 12 caixas, uma por item, com "12 em 1" em destaque. Para o scroll porque a grade dá volume e o número 12 é concreto.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-19]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-19]]

### VIT-20 | Novo | Ambos | Parcelamento
- **Texto na arte:** N1 "Pagamento único, em [[CONFIRMAR: nº de parcelas e valor]]."
- **Texto do anúncio:** Acesso vitalício ao Clube Secreto e aos 11 produtos. Lote atual até [[PENDENTE: data do lote]].
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o valor da parcela em tamanho grande, com "no cartão" pequeno ao lado. Para o scroll porque responde à objeção "não tenho o dinheiro agora" (68% no Aulão) antes de ela ser dita.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-20]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-20]]

### VIT-21 | Novo | Ambos | Garantia
- **Texto na arte:** N1 "[[PENDENTE: garantia]]" · N2 "para você decidir com calma."
- **Texto do anúncio:** Acesso vitalício ao Clube Secreto e aos 11 produtos, com [[PENDENTE: garantia]].
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** o ícone de um selo de garantia com o prazo ao centro, em destaque. Para o scroll porque o selo é um símbolo conhecido de segurança.
- **Condição:** só publicar com a garantia confirmada.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-21]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-21]]

### VIT-22 | Novo | ALUNAS | Upgrade
- **Texto na arte:** N1 "Você já está dentro. Falta ficar para sempre." · N3 "Condição das alunas: [[PREÇO LOTE ALUNAS]]"
- **Texto do anúncio:** O que você já fez no Clube conta e continua contando. Não é recomeçar do zero. Acesso vitalício ao Clube Secreto e a 11 produtos.
- **CTA (botão):** Entrar de vez
- **Formato:** F e S · **Kit:** C
- **Frame 0:** a ilustração de uma porta já entreaberta, com "ficar para sempre" em destaque. Para o scroll porque fala diretamente com quem já conhece o Clube. Só para o conjunto S1.
- Link de destino: [[LINK: página das alunas | ads-meta | VIT-22]]

### VIT-23 | Novo | Ambos | Trilha de entrada
- **Texto na arte:** N1 "Clube Secreto + 11 produtos." · N2 "1 ordem para começar."
- **Texto do anúncio:** A trilha de entrada mostra por onde começar e em que ordem seguir, sem se perder. `[[PENDENTE: ordem de entrada]]`
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** uma linha de setas ligando 3 caixas numeradas. Para o scroll porque é o diagrama mais simples de uma trilha e resolve o medo de excesso.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-23]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-23]]

### VIT-24 | Novo | Ambos | Sem pressa
- **Texto na arte:** N1 "Sem prazo para usar." · N2 "Sem pressa para começar."
- **Texto do anúncio:** Pagamento único, acesso vitalício. Você entra e vai no seu ritmo, com a trilha de entrada.
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** dois "sem" em N1 e N2, a segunda linha em destaque, e o ícone de um relógio parado. Para o scroll porque a negação dupla é rápida e fácil de lembrar.
- Link de destino: [[LINK: página de vendas | ads-meta | VIT-24]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | VIT-24]]

---

## Parte 2: 5 legendas de venda

Modelo: Versão 0 (lista de benefícios com preço) e Versões 1 a 4 do Desafio. Uma legenda por conjunto (S1 ou S2/S3): o placeholder de preço é um só por publicação.

### LEG-VIT-01 | Lista de entrega (modelo Versão 0)
Já imaginou parar de recomeçar?

O acesso vitalício ao Clube Secreto e a tudo o que eu já criei está aberto, com a condição que eu revelei na live.

Você tem:
Acesso vitalício ao Clube Secreto.
Aulas ao vivo toda terça. `[[CONFIRMAR: aulas ao vivo e suporte inclusos na Vitalícia]]`
Ciclos de 21 dias. `[[CONFIRMAR: ciclos continuam depois do 12º na Vitalícia]]`
Suporte no WhatsApp.
11 produtos do catálogo.
[[PENDENTE: bônus]]

Tudo isso por [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por publicação), em pagamento único. [[CONFIRMAR: nº de parcelas e valor]]

Quem entra recebe a trilha de entrada, com o primeiro passo em 48 horas.

Clique em "Saiba mais" e entre.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-VIT-01]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-VIT-01]]

### LEG-VIT-02 | A conta
Eu fiz a conta.

Comprando tudo separado: [[PENDENTE: soma dos preços avulsos]].
O Clube Secreto e os 11 produtos, no acesso vitalício: [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por publicação).

A diferença é [[CÁLCULO: soma menos preço do lote]]. E tem mais uma conta: a de ficar mais um ano no mesmo lugar.

Esta condição não se repete. O que vier depois é outra oferta, com outro preço.

Clique em "Saiba mais" e garanta o seu acesso.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-VIT-02]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-VIT-02]]

### LEG-VIT-03 | O que muda em 365 dias
365 dias vão passar de qualquer jeito.

São 52 semanas. Dá para atravessá-las prometendo que dessa vez vai, ou dá para atravessá-las com o Clube Secreto e o catálogo inteiro ao seu lado e a decisão de parar de recomeçar já tomada.

É sobre decidir uma vez. Não é promessa de resultado.

Qual das duas versões você quer encontrar daqui a um ano? Clique em "Saiba mais" e decida.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-VIT-03]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-VIT-03]]

### LEG-VIT-04 | Alunas
Você já está dentro do Clube. E o que você já fez conta.

O acesso vitalício é para quem quer parar de recomeçar. A condição das alunas: [[PREÇO LOTE ALUNAS]] até [[PENDENTE: data do lote]].

Clique em "Saiba mais" e entre de vez.

- Link de destino: [[LINK: página das alunas | ads-meta | LEG-VIT-04]]

### LEG-VIT-05 | Medo de não implementar + garantia
"Tenho medo de comprar e não colocar em prática."

Eu entendo. Por isso a Vitalícia não tem prazo para dar conta. Você entra, tem a trilha de entrada para saber por onde começar e vai no seu ritmo. [[PENDENTE: ordem de entrada]]

E tem [[PENDENTE: garantia]].

Eu prefiro que você não compre do que compre e não viva.

Clique em "Saiba mais" e veja a condição.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-VIT-05]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-VIT-05]]

---

## Parte 3: remarketing de vendas (12 anúncios)

Público: quem visitou a página de vendas ou iniciou o checkout e não comprou. Excluir compradores. Texto neutro de gênero. Modelo: os 25 anúncios do remarketing do Clube Secreto no Desafio. Formato F e S para todos; kits indicados em cada peça.

### RMV-01 | Modelo Ad 1 e Ad 9
- **Texto na arte:** N1 "A condição está aberta." · N3 "O lote vigente vale até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** Depois da data, muda. Esta condição não se repete.
- **CTA (botão):** Entrar agora
- **Formato:** F e S · **Kit:** A
- **Frame 0:** a data do lote em tamanho grande e em destaque. Para o scroll porque o prazo real é o mais forte dos gatilhos.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-01]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-01]]

### RMV-02 | Modelo Ad 2
- **Texto na arte:** N1 "Voltar a pensar nisso diz alguma coisa."
- **Texto do anúncio:** O acesso vitalício ainda está aberto no lote vigente, até [[PENDENTE: data do lote]].
- **CTA (botão):** Entrar agora
- **Formato:** F e S · **Kit:** A
- **Frame 0:** a frase em N1, "diz alguma coisa" em destaque. Para o scroll porque a frase convida a olhar para o próprio interesse, sem dizer o que a pessoa fez.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-02]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-02]]

### RMV-03 | Modelo Ad 4
- **Texto na arte:** N1 "A aba fecha. A decisão continua aberta."
- **Texto do anúncio:** Um processo guiado, com acesso vitalício, pode mostrar o que anos de tentativa sem apoio não mostraram.
- **CTA (botão):** Ver a página
- **Formato:** F e S · **Kit:** C
- **Frame 0:** a ilustração de uma janela de navegador com uma aba em destaque. Para o scroll porque é uma metáfora digital imediata.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-03]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-03]]

### RMV-04 | Modelo Ad 5
- **Texto na arte:** N1 "Eu abri esta condição para quem cansou de recomeçar."
- **Texto do anúncio:** Se este é o seu momento, a decisão é uma só. Depois de entrar, você recebe a trilha de entrada.
- **CTA (botão):** Decidir agora
- **Formato:** F e S · **Kit:** B
- **Frame 0:** `[[FOTO DRA]]` com a frase ao lado. Para o scroll porque a voz em primeira pessoa humaniza.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-04]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-04]]

### RMV-05 | Modelo Ad 7
- **Texto na arte:** N1 "[[CONFIRMAR: nº de pessoas que já entraram]] pessoas já entraram." · N3 "Hoje pode ser o seu dia 1."
- **Texto do anúncio:** Quem entra recebe a trilha de entrada, com o primeiro passo em 48 horas.
- **CTA (botão):** Entrar agora
- **Formato:** F e S · **Kit:** A
- **Frame 0:** o número em destaque, "já entraram" ao lado. Para o scroll porque o número real é prova social.
- **Condição:** só com número verdadeiro e atual.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-05]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-05]]

### RMV-06 | Modelo Ad 23
- **Texto na arte:** N1 "Faltou só um clique."
- **Texto do anúncio:** O checkout continua aberto no lote vigente, até [[PENDENTE: data do lote]].
- **CTA (botão):** Entrar agora
- **Formato:** F e S · **Kit:** C
- **Frame 0:** o ícone de um botão "Entrar" pela metade, em destaque. Para o scroll porque o botão pela metade é a imagem imediata do passo que falta.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-06]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-06]]

### RMV-07 | Modelo Ad 24
- **Texto na arte:** N1 "O checkout deste lote segue aberto." · N3 "[[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por arte) até [[PENDENTE: data do lote]]"
- **Texto do anúncio:** A condição deste lote vale só até a data da arte. Depois, outro valor.
- **CTA (botão):** Entrar agora
- **Formato:** F e S · **Kit:** C
- **Frame 0:** o ícone de um carrinho com a data do lote. Para o scroll porque o carrinho é o ícone do abandono.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-07]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-07]]

### RMV-08 | Modelo Ad 14
- **Texto na arte:** N1 "Dessa vez, com trilha de entrada."
- **Texto do anúncio:** Mais de uma em cada dez pessoas que responderam à minha pesquisa dizem que já compraram outros cursos e não tiveram resultado. Dessa vez a entrada tem uma trilha para começar sem se perder, e o acesso não tem prazo. `[[PENDENTE: ordem de entrada]]`
- **CTA (botão):** Saiba mais
- **Formato:** F e S · **Kit:** C
- **Frame 0:** "Dessa vez" em destaque e uma trilha curta desenhada. Para o scroll porque responde à objeção número 2 (11% no Aulão).
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-08]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-08]]

### RMV-09 | Modelo Ad 11 e Ad 12
- **Texto na arte:** N1 "Comprando tudo separado, [[PENDENTE: soma dos preços avulsos]]." · N2 "Aqui, [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por arte)."
- **Texto do anúncio:** Comprando tudo separado, a conta é uma. Continuando no mesmo lugar, é outra. Veja a conta completa.
- **CTA (botão):** Ver a conta
- **Formato:** F e S · **Kit:** A
- **Frame 0:** dois valores, o primeiro riscado e com menos peso. Para o scroll porque o contraste de preços é a leitura mais rápida.
- **Condição:** a mesma de VIT-13 (preços avulsos praticados).
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-09]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-09]]

### RMV-10 | Modelo Ad 13
- **Texto na arte:** N1 "Não é mais uma tentativa. É um lugar para ficar."
- **Texto do anúncio:** Acesso vitalício para não recomeçar do zero toda segunda-feira. [[CONFIRMAR: nº de parcelas e valor]]
- **CTA (botão):** Entrar
- **Formato:** F e S · **Kit:** A
- **Frame 0:** "lugar para ficar" em destaque. Para o scroll porque reforça a frase-guia pelo lado da identidade.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-10]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-10]]

### RMV-11 | Modelo Ad 25
- **Texto na arte:** N1 "Eu prefiro que você não compre do que compre e não viva."
- **Texto do anúncio:** Se a live fez sentido para você, confie nisso.
- **CTA (botão):** Eu decidi
- **Formato:** F e S · **Kit:** B
- **Frame 0:** a frase da Dra. em duas linhas e a foto de lado. Para o scroll porque é a frase de maior confiança para quem hesita.
- **Frase intocável usada:** literal.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-11]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-11]]

### RMV-12 | Garantia e dúvida
- **Texto na arte:** N1 "Ainda tem dúvida? Veja a garantia." · N2 "[[PENDENTE: garantia]]"
- **Texto do anúncio:** Você decide com a garantia à vista, no lote vigente até [[PENDENTE: data do lote]].
- **CTA (botão):** Ver a condição
- **Formato:** F e S · **Kit:** C
- **Frame 0:** o ícone de um selo de garantia em destaque. Para o scroll porque o selo é um sinal conhecido.
- **Condição:** só publicar com a garantia confirmada.
- Link de destino: [[LINK: página de vendas | ads-meta | RMV-12]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | RMV-12]]

---

## Parte 4: 4 legendas de remarketing de vendas

Modelo: Versão 1 (reconhecimento, reescrita sem a expressão proibida do guia) e Versão 2 (confronto) do remarketing do Clube Secreto.

### LEG-RMV-01 | Reconhecimento
O acesso vitalício ao Clube Secreto e ao catálogo inteiro está aberto.

Esta condição não se repete. O lote vigente vale até [[PENDENTE: data do lote]]: [[PREÇO LOTE ALUNAS]] para alunas, [[PREÇO LOTE NÃO-ALUNAS]] para quem ainda não é do Clube.

Um acesso sem prazo, com a trilha de entrada, para parar de recomeçar.

Clique em "Saiba mais" e entre.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-RMV-01]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-RMV-01]]

### LEG-RMV-02 | Confronto
Até quando recomeçar toda segunda-feira?

O lote vigente vale até [[PENDENTE: data do lote]]. Depois dele, o valor é outro. E o que vier depois da Vitalícia é outra oferta, com outro preço.

Clique em "Saiba mais" e decida.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-RMV-02]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-RMV-02]]

### LEG-RMV-03 | Dúvida e garantia
Ainda tem dúvida?

Eu entendo. Por isso a Vitalícia tem [[PENDENTE: garantia]] e uma trilha de entrada para você saber por onde começar.

Clique em "Saiba mais" e veja a condição.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-RMV-03]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-RMV-03]]

### LEG-RMV-04 | Conta
Comprando tudo separado: [[PENDENTE: soma dos preços avulsos]].

No acesso vitalício: [[PREÇO LOTE ALUNAS]] ou [[PREÇO LOTE NÃO-ALUNAS]] (um por publicação), com a opção de [[CONFIRMAR: nº de parcelas e valor]].

A diferença é [[CÁLCULO: soma menos preço do lote]]. E tem a conta de mais um ano igual.

Clique em "Saiba mais" e garanta o seu acesso.

- Link de destino: [[LINK: página de vendas | ads-meta | LEG-RMV-04]]
- Link de destino do conjunto S1: [[LINK: página das alunas | ads-meta | LEG-RMV-04]]

---

## Notas ao implementador

1. **Valores:** a escada de preços do briefing não está neste arquivo. Quem troca os placeholders consulta `00_ESTRATEGIA_COPY_SENIOR.md`, seção 1. Nenhuma peça deste arquivo pode ir ao ar antes de 03/11, 20h.
2. **Pendências que bloqueiam o uso:** preço avulso dos 11 produtos e do Clube (sem ele, VIT-13, VIT-19 quando usada com a conta, LEG-VIT-02, RMV-09 e LEG-RMV-04 ficam fora), garantia (VIT-21, RMV-12, LEG-VIT-05, LEG-RMV-03), âncora da mentoria individual (VIT-14), parcelamento, bônus, datas de lote e fechamento, `[[DEPOIMENTO REAL]]`, `[[FOTO DRA]]`, ordem de entrada, `[[CONFIRMAR: aulas ao vivo e suporte inclusos na Vitalícia]]`, `[[CONFIRMAR: ciclos continuam depois do 12º na Vitalícia]]` (decisão 29 de `12_decisoes_e_pendencias.md`) e `[[PENDENTE: identidade visual]]`.
3. **Cobrança recorrente:** nenhuma peça compara o preço com cobrança recorrente nem fala em prorrogação do acesso. Se a equipe confirmar que existe cobrança recorrente de verdade, a comparação entra com a pendência de comparação prevista no guia (seção 3) e volta para revisão.
4. **Gênero:** todos os anúncios estão em texto neutro. VIT-22, LEG-VIT-04 e as peças de S1 aceitam o feminino se o time quiser. Em tráfego de remarketing frio, manter o neutro.
5. **Peças do Desafio sem equivalente:** CR13 e CR8 ("por dia" e "por mês") partem de um acesso de 365 dias; na Vitalícia, não há prazo para dividir o preço. Foram substituídos pela conta de tudo separado e pelo parcelamento. Os Ad 10 e Ad 16 do remarketing do Clube ("por dia" e "durante 1 ano") foram excluídos pela mesma razão.
6. **Testes A/B:** (a) VIT-13 (conta) contra VIT-15 (365 dias) em lookalike; (b) VIT-22 (upgrade) contra VIT-04 em alunas; (c) VIT-20 (parcelamento em destaque) contra VIT-03 (preço na etiqueta).
7. **Compliance:** nenhuma peça promete ganho, tratamento ou fim da autossabotagem; "decida uma vez" refere-se à escolha, não ao resultado. Nenhuma peça usa palavra de limite de lugares.
8. **Contagens:** VIT-01 a VIT-24 (24), LEG-VIT-01 a 05 (5), RMV-01 a RMV-12 (12), LEG-RMV-01 a 04 (4): 45 IDs.

---

## Links desta peça

Canal `ads-meta` em todas. Nenhuma peça abre antes do carrinho (03/11, 21h28). Nenhuma URL real é escrita aqui; a fórmula está na seção 3 de `16_MAPA_DE_LINKS.md`. Nos anúncios "Ambos", a linha "(S1)" é o destino do conjunto de alunas.

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| VIT-01 | `[[LINK: página de vendas \| ads-meta \| VIT-01]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-01 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-01]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-02 | `[[LINK: página de vendas \| ads-meta \| VIT-02]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-02 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-02]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-03 | `[[LINK: página de vendas \| ads-meta \| VIT-03]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-03 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-03]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-04 | `[[LINK: página de vendas \| ads-meta \| VIT-04]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-04 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-04]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-05 | `[[LINK: página de vendas \| ads-meta \| VIT-05]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-05 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-05]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-06 | `[[LINK: página de vendas \| ads-meta \| VIT-06]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-06 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-06]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-07 | `[[LINK: página de vendas \| ads-meta \| VIT-07]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-07 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-07]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-08 | `[[LINK: página de vendas \| ads-meta \| VIT-08]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-08 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-08]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-09 | `[[LINK: página de vendas \| ads-meta \| VIT-09]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-09 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-09]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-10 | `[[LINK: página de vendas \| ads-meta \| VIT-10]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-10 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-10]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-11 | `[[LINK: página de vendas \| ads-meta \| VIT-11]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-11 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-11]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-12 | `[[LINK: página de vendas \| ads-meta \| VIT-12]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-12 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-12]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-13 | `[[LINK: página de vendas \| ads-meta \| VIT-13]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-13 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-13]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-14 | `[[LINK: página de vendas \| ads-meta \| VIT-14]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-14 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-14]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-15 | `[[LINK: página de vendas \| ads-meta \| VIT-15]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-15 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-15]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-16 | `[[LINK: página de vendas \| ads-meta \| VIT-16]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-16 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-16]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-17 | `[[LINK: página de vendas \| ads-meta \| VIT-17]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-17 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-17]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-18 | `[[LINK: página de vendas \| ads-meta \| VIT-18]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-18 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-18]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-19 | `[[LINK: página de vendas \| ads-meta \| VIT-19]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-19 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-19]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-20 | `[[LINK: página de vendas \| ads-meta \| VIT-20]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-20 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-20]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-21 | `[[LINK: página de vendas \| ads-meta \| VIT-21]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-21 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-21]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-22 | `[[LINK: página das alunas \| ads-meta \| VIT-22]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-23 | `[[LINK: página de vendas \| ads-meta \| VIT-23]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-23 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-23]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| VIT-24 | `[[LINK: página de vendas \| ads-meta \| VIT-24]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| VIT-24 (S1) | `[[LINK: página das alunas \| ads-meta \| VIT-24]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-VIT-01 | `[[LINK: página de vendas \| ads-meta \| LEG-VIT-01]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-VIT-01 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-VIT-01]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-VIT-02 | `[[LINK: página de vendas \| ads-meta \| LEG-VIT-02]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-VIT-02 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-VIT-02]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-VIT-03 | `[[LINK: página de vendas \| ads-meta \| LEG-VIT-03]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-VIT-03 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-VIT-03]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-VIT-04 | `[[LINK: página das alunas \| ads-meta \| LEG-VIT-04]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-VIT-05 | `[[LINK: página de vendas \| ads-meta \| LEG-VIT-05]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-VIT-05 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-VIT-05]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-01 | `[[LINK: página de vendas \| ads-meta \| RMV-01]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-01 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-01]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-02 | `[[LINK: página de vendas \| ads-meta \| RMV-02]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-02 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-02]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-03 | `[[LINK: página de vendas \| ads-meta \| RMV-03]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-03 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-03]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-04 | `[[LINK: página de vendas \| ads-meta \| RMV-04]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-04 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-04]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-05 | `[[LINK: página de vendas \| ads-meta \| RMV-05]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-05 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-05]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-06 | `[[LINK: página de vendas \| ads-meta \| RMV-06]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-06 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-06]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-07 | `[[LINK: página de vendas \| ads-meta \| RMV-07]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-07 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-07]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-08 | `[[LINK: página de vendas \| ads-meta \| RMV-08]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-08 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-08]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-09 | `[[LINK: página de vendas \| ads-meta \| RMV-09]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-09 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-09]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-10 | `[[LINK: página de vendas \| ads-meta \| RMV-10]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-10 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-10]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-11 | `[[LINK: página de vendas \| ads-meta \| RMV-11]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-11 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-11]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| RMV-12 | `[[LINK: página de vendas \| ads-meta \| RMV-12]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| RMV-12 (S1) | `[[LINK: página das alunas \| ads-meta \| RMV-12]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-RMV-01 | `[[LINK: página de vendas \| ads-meta \| LEG-RMV-01]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-RMV-01 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-RMV-01]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-RMV-02 | `[[LINK: página de vendas \| ads-meta \| LEG-RMV-02]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-RMV-02 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-RMV-02]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-RMV-03 | `[[LINK: página de vendas \| ads-meta \| LEG-RMV-03]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-RMV-03 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-RMV-03]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
| LEG-RMV-04 | `[[LINK: página de vendas \| ads-meta \| LEG-RMV-04]]` | Página de vendas (S2 e S3), que mostra o lote vigente e leva ao checkout | Web designer |
| LEG-RMV-04 (S1) | `[[LINK: página das alunas \| ads-meta \| LEG-RMV-04]]` | Página das alunas (S1), com a condição de aluna e o checkout do lote vigente | Web designer |
