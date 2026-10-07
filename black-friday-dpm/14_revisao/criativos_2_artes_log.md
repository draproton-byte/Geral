# Log de revisão: criativos 2 (artes e vídeo curto)

Revisor: copy sênior de tráfego pago, vídeo curto e direção de arte. Pergunta de aceite: "isso passaria avaliação minuciosa de estrategistas de SEO, TikTok, YouTube e de Harvard, sem ressalva?" Todas as edições foram feitas no lugar, mantendo IDs e estrutura.

## Arquivos revisados (`/home/user/Geral/black-friday-dpm/04_criativos/`)

| Arquivo | Linhas lidas (antes) | Peças lidas | Linhas (depois) |
|---|---|---|---|
| `lembretes_da_live_por_dia.md` | 319 | 24 criativos (LEM) + 10 legendas (LEG-LEM) = 34 IDs | 371 |
| `escassez_e_virada_de_lote.md` | 212 | 24 anúncios + 2 de bônus = 26 IDs | 267 |
| `vendas_vitalicia.md` | 392 | 24 VIT + 5 LEG-VIT + 12 RMV + 4 LEG-RMV = 45 IDs | 449 |
| `roteiros_video_curto.md` | 134 | 10 roteiros (VID-01 a 10) | 165 |
| `carrossel_instagram.md` | 203 | 3 carrosséis × 10 cards = 30 cards + 3 legendas citadas | 223 |
| `artes_de_api_ingresso_capas.md` | 265 | 25 artes + 1 mensagem de API modelo = 26 IDs | 298 |
| **Total** | **1.525** | **171 IDs / peças** | **1.773** |

Fontes lidas por inteiro antes da revisão: `RUBRICA.md`, `00_ESTRATEGIA_COPY_SENIOR.md`, `01_PESQUISAS_INSIGHTS.md`, `02_GUIA_DE_COPY.md`. Números recalculados contra `aulao.csv` (7.323 respostas) e contra o diagnóstico do Desafio (4.032 respostas).

## Defeitos achados e o que foi feito

### Bloqueantes

| # | Defeito | Onde | Correção |
|---|---|---|---|
| B1 | Identidade visual especificada como definitiva (amarelo, verde, cinza, branco, preto, vermelho, "fundo escuro", fontes de 64/90 px em "bold", "selo vermelho pulsando", "logo Black Próton Vitalícia") | Todos os 6 arquivos, em todo frame 0 e em "Regras de arte" | Todas as cores, fontes, logo e estilos foram removidos. Entrou direção neutra com hierarquia (N1, N2, N3), posição e frame 0, e `[[PENDENTE: identidade visual]]` em cada arte e em cada cabeçalho. "Destaque" substitui cor. Tamanhos ficaram só como referência de legibilidade 45+ |
| B2 | Títulos que afirmam condição pessoal do leitor (política de atributos pessoais da Meta): "se você já viveu 'entrou um dinheiro a mais...'", "Cansada da mesma vida? Você se sente exausta...", "Você está cansado(a) de tanto tentar", "Você não é preguiçosa... Você só foi programada assim", "Você só nunca teve um lugar para ficar", "Já pensou em desistir de novo?", "Já comprou curso... e nada mudou?", "Você vai assistir da plateia da própria vida de novo?", "o que tira a sua paz" | LEM-D7-1, D4-1, D3-3, HOJE-3; VIT-03, 04, 05, 09, 16, RMV-03, 04, 08; CAR-TERM 1, CAR-CONTA 3, 5, 6 | Reescritos como frase entre aspas, pergunta sobre o padrão, dado de pesquisa em terceira pessoa ou descrição da oferta. Nota de regra de linguagem no cabeçalho de cada arquivo |
| B3 | Estatística falsa em VID-06: "a resposta mais comum de quem entrou no meu último Desafio... foi essa" (a objeção mais comum é "sem dinheiro agora", 68%; "já comprei e não funcionou" é 11,4%) | VID-06 | Trocado por "mais de uma em cada dez pessoas que responderam à minha pesquisa" (11,4%, `aulao.csv`) |
| B4 | Número fora das fontes de 01: "quase 12% do diagnóstico" (476/4.032 é do diagnóstico do Desafio; confere, mas não está em 01) | LEM-D3-1, LEG-LEM-04 | Trocado por 13% da pesquisa do Aulão (13,3% "traumas ou feridas do passado", em 01) |
| B5 | "Essa foi uma das frases que mais apareceram nas minhas pesquisas" (sem fonte) | LEG-LEM-02 | Trocado por 22% (21,5% de `aulao.csv`, "procrastino e não consigo colocar em prática") |
| B6 | 51,9% atribuído a "minhas pesquisas" e marcado com `[[CONFIRMAR: origem]]` apesar de a rubrica fixar a origem | VID-02, CAR-TERM card 2 | Texto canônico: "51,9% das pessoas que responderam à pesquisa de presença (do Desafio)" e remoção do CONFIRMAR resolvido |
| B7 | Promessa em VID-10: "eu prometo que você não vai ter que recomeçar do zero nunca mais" | VID-10 | Trocado por "eu não prometo resultado. O que muda é o acesso: sem prazo, e com um lugar para ficar" |
| B8 | "mensalidade", "renovar", "sem renovar", "parar de renovar" em texto público | VIT-24, LEG-VIT-04, RMV, CAR-VIT card 4, ESC | Removidos. VIT-24 passou a ser "Sem prazo para usar. Sem pressa para começar." |
| B9 | "Cura" em texto público ("sem promessa de cura") | LEM, VIT-07, CAR-VIT | Removido de todo texto público. Resta só nos nomes de dois produtos (ver exceções abaixo) |
| B10 | Contador de 30 s decorativo em ESC-NSR-05 e 06 (urgência falsa) | ESC-NSR-05 e 06 | Contador passou a ser real, ligado à data do lote; vídeo sem fala, texto na tela |
| B11 | Replay negado por implicação ("uma live só", "ao vivo, uma vez", "primeiro") | LEM-D4-2, D2-2, HOJE-2, 1 live. 1 data. | Reescritos. `[[PENDENTE: replay]]` virou nota, não aparece mais dentro do texto da arte |
| B12 | LEM-LIVE-2 e LEG-LEM-10 diziam "a condição está sendo revelada agora" às 20h e 20h30, antes do ponto de revelação (20h45 em `05_whatsapp_api/dia_da_live_03_11.md`) | LEM-LIVE-2, LEG-LEM-10, ART-API-04 | Texto: "revelada ao longo da live". ART-API-04 vira o disparo de 20h45 com `[[CONFIRMAR: horário da revelação no roteiro da live]]`. LEG-LEM-10 foi para 20h15, como no cronograma |

### Altos

| # | Defeito | Correção |
|---|---|---|
| A1 | "Vaga" e "vagas abertas" em todo o pré e pós-live (a live não tem limite) | Pré-live: "cadastro" e "aviso". Pós-live: "acesso aberto". Botões: "Cadastre-se", "Saiba mais", "Entrar de vez", "Garantir meu acesso" |
| A2 | CTAs misturados na série de lembretes e incoerentes com a página de captura ("Ativar o lembrete", "Fazer o diagnóstico") | Botão "Cadastre-se" levando à captura, cujo botão diz "Quero descobrir meu padrão e entrar na live"; em 03/11, 20h: "Assistir agora" |
| A3 | Escada de preços (valores em R$) nas notas dos arquivos que o designer lê | Removida de todas as notas; apontamento para `00_ESTRATEGIA_COPY_SENIOR.md`, seção 1. R$ no texto: 0 |
| A4 | Âncora "R$ 120 mil" dentro de `[[CONFIRMAR]]` público (VIT-14) e CR13 "menos de R$ 3 por dia" na nota | `[[CONFIRMAR: valor da mentoria individual e se ainda vale]]`; texto do anúncio diz que são entregas diferentes (individual contra Clube + 11 produtos) |
| A5 | A conta "tudo separado" sem condição de honestidade | Condição nova: só publicar com preços avulsos realmente praticados (`[[CONFIRMAR: preços avulsos praticados]]`); tabela só com `[[PENDENTE: preço avulso]]` e soma e diferença em placeholders; aplicada a VIT-13, RMV-09, VID-09, CAR-VIT card 8 |
| A6 | "Lote Especial só ao vivo" sem tratamento; Família 1 de ESC incoerente se o Lote Especial acabar na live | `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` na primeira ocorrência de cada arquivo (lembretes, escassez, roteiros, artes). Em ESC, nota: se for exclusivo da live, a Família 1 não existe e a escassez começa na Família 2. VID-08 troca a abertura nesse caso |
| A7 | Honestidade de lote e data: "últimas horas" e "amanhã você vai lembrar" sem condição de data real; texto "a qualquer momento" sem critério | Condições explícitas: Família 3 só nas últimas horas reais; ESC-ULT-05 e 06 só na véspera do fechamento; anúncio sem data confirmada não publica; regra 4 e nota 4 (lote vira por data confirmada, ou por critério declarado) |
| A8 | Superlativo "a live mais importante" em ART-API-06, com CONFIRMAR | Removido (agora "a live de revelação"); superlativo só com `[[CONFIRMAR: superlativo]]` |
| A9 | "12 ciclos por ano" e "aulas toda terça" como direitos da Vitalícia, sem fonte (decisão 29 aberta em `12_decisoes_e_pendencias.md`) | `[[CONFIRMAR: aulas ao vivo e suporte inclusos na Vitalícia]]` e `[[CONFIRMAR: ciclos continuam depois do 12º na Vitalícia]]`; "12 ciclos de 21 dias" tirado de VIT-15 e VIT-18 |
| A10 | Contagens erradas no cabeçalho: VID dizia "6 de pré-live e 4 de pós-live" (existem 7 e 3); artes dizia "26 artes" (são 25 artes mais 1 mensagem de API) | Corrigidos e conferidos por script |
| A11 | Palavras por segundo nos roteiros: nenhum trecho tinha contagem; vários passavam de 2,5 palavras por segundo (VID-01, 02, 05, 06 CTA, 09, 10) | Roteiros reescritos e conferidos por script (tabela abaixo) |
| A12 | VID-03 abria com letra a letra (frame 0 vazio) | Frase completa visível desde o frame 0 |
| A13 | Cards de carrossel acima de 35 palavras (10 de 30) | Todos cortados; máximo atual: 35 (tabela abaixo) |
| A14 | Convite VIP: "apenas 100 cupons" citado do modelo; mensagem de API abria com "Olá, {{nome}}, Dra. Próton aqui." | Citação removida; abertura passou a "*{{nome}}, você recebeu um convite VIP.*" (9 linhas, termina em CTA com link e SAIR) |

### Médios

| # | Defeito | Correção |
|---|---|---|
| M1 | Frases acusatórias ou culpabilizantes ("esse depois é o mesmo padrão que te mantém no mesmo lugar", "o problema nunca foi o conteúdo", "decida de vez?", "mais uma chance que passou", "adiar sem decidir é o padrão que você já conhece") | Reescritas sem culpar |
| M2 | 3 negações em sequência ("Não é preguiça. Não é indisciplina. Não é fraqueza.") repetidas em LEM-D3-3, VIT-16, CAR-TERM card 7 e VID-03 | Variadas: "Não é preguiça. É um padrão.", "Faltou um lugar para ficar", "Sem promessa. Com um padrão à vista", duas negações em VID-03 |
| M3 | Frase "alguma parte sua já sabe a resposta" repetida em LEM-D1-3 e LEM-HOJE-1; "depois eu vejo" repetido em LEM-D1-1, LEG-LEM-06, VID-07 | Removidas ou diferenciadas |
| M4 | 02/11 (Finados, segunda) sem tratamento de tom | Tom sóbrio declarado e aplicado em LEM-D1-1 a 3, LEG-LEM-06, VID-07 (roupa neutra, sem música, sem sorriso de festa), ART-API-01, CAR (sem card novo) |
| M5 | 03/11 (terça, dia da aula do Clube): peças não tratavam a sobreposição | Nenhuma peça diz "aula" nem que a live a substitui; S1 excluída dos anúncios de 03/11 até `[[CONFIRMAR: aula de terça do Clube em 03/11]]` (decisão 33) |
| M6 | Formatos ausentes ou genéricos | Tabela de formatos (feed 1080 × 1350, story 1080 × 1920, imagem de API e capa de grupo 1080 × 1080 com círculo de 800 px, capa YouTube 1280 × 720, ingresso story) e coluna "Designer recebe" (foto da Dra., marca, QR, selo do Clube, print de depoimento) em cada arquivo e em cada arte |
| M7 | Placeholders de ingresso `[[FOTO DA PESSOA]]` e `[[NOME DA PESSOA]]` fora do conjunto do guia | `{{nome}}` e área para a foto enviada |
| M8 | Caminhos para arquivos do Desafio que não existem no repositório (`desafio_copys_...md`) | Substituídos por descrição ("lembretes do Desafio", "carrossel do Clube no Desafio"); `convite_vip_alunas_e_quiz.md` agora com caminho completo em `05_whatsapp_api/` |
| M9 | Conta ESC-PRI-05/06 "cada semana adiada é uma semana de 'depois eu vejo'" | Reescrita factual: "Passada a data, o mesmo acesso passa a custar..." |
| M10 | "Mais de 70 mil alunos... começaram exatamente de onde você está agora" (asserção sobre o leitor, sem fonte) | "Mais de 70 mil alunos em 44 países." |
| M11 | CAR-CONTA card 3 pedia somar o dinheiro gasto em cursos; card 4 "Dinheiro volta" | Trocado por contar cursos que ficaram pela metade, sem somar dinheiro; "O tempo não volta" |
| M12 | Mensagem de pós-conversão ausente nos anúncios de venda | Frase "quem entra recebe a trilha de entrada, com o primeiro passo em 48 horas" nos anúncios e legendas de não-alunas; "o que você já fez conta" nas de alunas |

### Baixos

- B-1: "pra" nos textos de anúncio trocado por "para" (a nota nos roteiros diz que a voz da Dra. pode ser adaptada na gravação).
- B-2: "Rodapé: Última página" e "Arrasta →" mantidos; acessibilidade (texto, não só seta) registrada.
- B-3: IDs, estrutura, frames 0 e variações A/B mantidos. Nenhum ID foi renomeado nem removido.
- B-4: "ART-API-07 a 12" renomeados na descrição de "vagas abertas" para "acesso aberto" (IDs mantidos).

## O que ainda depende de decisão (com placeholder já colocado)

| Decisão | Placeholder | Onde |
|---|---|---|
| Identidade visual (cor, fonte, logo, selo do Clube, estilo de ilustração e de motion) | `[[PENDENTE: identidade visual]]` | todos os arquivos |
| Lote Especial só para quem está ao vivo (muda a Família 1 de escassez, VID-08 e ART-API-08/09) | `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` | lembretes, escassez, roteiros, artes |
| Datas de virada de lote, fechamento, bônus, garantia | `[[PENDENTE: data do lote]]`, `[[PENDENTE: fechamento]]`, `[[PENDENTE: bônus]]`, `[[PENDENTE: garantia]]` | escassez, vendas, roteiros, carrossel, artes |
| Parcelamento | `[[CONFIRMAR: nº de parcelas e valor]]` (19 usos) | escassez, vendas, roteiros, carrossel, artes |
| Preços avulsos e se são praticados | `[[PENDENTE: preço avulso]]`, `[[PENDENTE: soma dos preços avulsos]]`, `[[CÁLCULO: soma menos preço do lote]]`, `[[CONFIRMAR: preços avulsos praticados]]` | vendas, roteiros, carrossel |
| Âncora da mentoria individual | `[[CONFIRMAR: valor da mentoria individual e se ainda vale]]` | VIT-14 |
| Aula de terça do Clube em 03/11 e o que a Vitalícia dá às alunas (aulas, suporte, ciclos após o 12º) | `[[CONFIRMAR: aula de terça do Clube em 03/11]]`, `[[CONFIRMAR: aulas ao vivo e suporte inclusos na Vitalícia]]`, `[[CONFIRMAR: ciclos continuam depois do 12º na Vitalícia]]` | lembretes, vendas, carrossel |
| Replay | `[[PENDENTE: replay]]` (nenhuma peça afirma nem nega; ART-YT-03 é condicional) | lembretes, carrossel, artes |
| Número real de inscritos e de pessoas que entraram | `[[CONFIRMAR: nº de inscritos]]`, `[[CONFIRMAR: nº de pessoas que já entraram]]` | LEM-HOJE-3, RMV-05 |
| Condição VIP para alunas, hashtag, título do vídeo no YouTube, formato do formulário, horário de abertura do carrinho | `[[PENDENTE: condição VIP para alunas]]`, `[[CONFIRMAR: hashtag aprovada]]`, `[[CONFIRMAR: título do vídeo aprovado]]`, `[[CONFIRMAR: formato aceito pela ferramenta do formulário]]`, `[[CONFIRMAR: horário de abertura do carrinho]]` | artes |
| Frase final do VID-10, contador por arte do VID-04 | `[[CONFIRMAR: texto aprovado pela Dra.]]`, `[[CONFIRMAR: contador atualizado por arte]]` | roteiros |
| Depoimento autorizado, foto da Dra., links | `[[DEPOIMENTO REAL]]`, `[[FOTO DRA]]`, `[[LINK: ...]]` | todos |

**Placeholders fora do conjunto literal da seção 2 do guia, mantidos por consistência com o resto do repositório** (já usados em `03_paginas`, `05_whatsapp_api`, `06_emails`, `08_live_e_pitch`): `[[PREÇO PRÓXIMO LOTE ALUNAS]]` e `[[PREÇO PRÓXIMO LOTE NÃO-ALUNAS]]`, `[[R$ DIFERENÇA ENTRE LOTES]]`, `[[CÁLCULO: soma menos preço do lote]]`, `[[PENDENTE: soma dos preços avulsos]]`, `[[PENDENTE: ordem de entrada]]`, `[[PENDENTE: condição VIP para alunas]]` e `[[PENDENTE: identidade visual]]` (pedido expresso desta revisão). Se o guia for atualizado, trocar por busca.

## Decisões que o revisor tomou e que a equipe pode reverter

1. **Nome de produto com "Elite" e "Cura" nas listas dos 11 produtos** (VIT-19, tabela da conta, VID-09, CAR-VIT cards 5 e 6): são nomes oficiais do briefing ("Workshop Terapeuta de Elite", "Cura da Criança Interior", "Cura da Escassez Financeira"). Mantidos por exatidão, e por isso as checagens 2 e 4 retornam essas linhas (explicadas abaixo). Nenhuma outra ocorrência de "Elite" ou "cura".
2. **Placeholders de tabela de preço "um por arte"**: peças "Ambos" viram duas artes, uma com `[[PREÇO LOTE ALUNAS]]` (S1) e outra com `[[PREÇO LOTE NÃO-ALUNAS]]` (S2/S3). Nenhuma arte leva os dois placeholders.
3. **Peças em 03/11 para S1**: excluídas dos anúncios até a decisão 33.
4. **Texto neutro de gênero em todo anúncio** (antes VIT-03 e VIT-16 estavam no feminino em tráfego morno).

## Contagens finais

| Família | Existe | Cabeçalho diz | Confere |
|---|---|---|---|
| LEM (criativos de lembrete) | 24 (8 momentos × 3) | 24 | sim |
| LEG-LEM | 10 | 10 | sim |
| ESC (4 famílias × 6) | 24 | 24 | sim |
| ESC-BON | 2 | 2 | sim |
| VIT | 24 | 24 | sim |
| LEG-VIT | 5 | 5 | sim |
| RMV | 12 | 12 | sim |
| LEG-RMV | 4 | 4 | sim |
| VID | 10 (7 pré-live, 3 pós-live) | 10 (corrigido de 6 e 4) | sim |
| Cards de carrossel | 30 (3 × 10) | 30 | sim |
| Artes em `artes_de_api_ingresso_capas.md` | 25 artes + 1 mensagem de API modelo | 25 + 1 (corrigido de 26 artes) | sim |
| IDs duplicados | 0 | | |

### Duração real da fala dos roteiros (2,5 palavras por segundo; números contados como falados)

| Trecho | Segundos | Limite | Palavras |
|---|---|---|---|
| VID-01 gancho / 3 a 10 / 10 a 17 / 17 a 24 / CTA | 3 / 7 / 7 / 7 / 6 | 7 / 17 / 17 / 17 / 15 | 5 / 17 / 16 / 17 / 15 |
| VID-02 gancho / 3 a 11 / 11 a 23 / 23 a 33 / CTA | 3 / 8 / 12 / 10 / 7 | 7 / 20 / 30 / 25 / 17 | 6 / 19 / 30 / 21 / 15 |
| VID-03 | sem fala | n/a | texto na tela, cerca de 26 palavras em 20 s |
| VID-04 voz off / CTA | 21 / 6 | 52 / 15 | 20 / 14 |
| VID-05 gancho / cinco padrões (6 s cada) / CTA | 3 / 6 / 12 | 7 / 15 / 30 | 7 / 8, 9, 15, 8, 14 / 27 |
| VID-06 gancho / desenvolvimento / CTA | 3 / 16 / 6 | 7 / 40 / 15 | 5 / 39 / 15 |
| VID-07 gancho / desenvolvimento / CTA | 3 / 8 / 4 | 7 / 20 / 10 | 7 / 16 / 9 |
| VID-08 voz off / CTA | 6 / 6 | 15 / 15 | 15 / 13 |
| VID-09 gancho / lista / fechamento / CTA | 3 / 24 / 7 / 7 | 7 / 60 / 17 / 17 | 7 / 46 / 16 / 12 (placeholder contado como 4) |
| VID-10 gancho / desenvolvimento / CTA | 3,2 / 20 / 7 | 8 (3,2 s, exceção declarada, frase-guia inteira) / 50 / 17 | 8 / 43 / 16 (placeholder contado como 4) |

Cards de carrossel: 30 cards conferidos por script; máximo de 35 palavras (título, sub, texto e rodapé, com cada placeholder contado como 3 palavras). 0 cards acima do limite.

## Checagens duras (grep) rodadas nos 6 arquivos, depois de todas as edições

| # | Checagem | Resultado |
|---|---|---|
| 1 | Travessão (U+2014) e meia-risca (U+2013) | 0 ocorrências |
| 2 | `Keila`, harmonização, injetáveis, FEP, Zoom, congresso, "Dr. João", Pithon | 0 ocorrências |
| 2b | `Elite` | 4 linhas, todas o nome do produto "Workshop Terapeuta de Elite" (VIT-19, tabela da conta, VID-09, CAR-VIT card 5). Exceção explicada acima |
| 3 | Valores em R$ ou "reais" (`R\$ ?[0-9]`, "mil reais") | 0 ocorrências. (`[[R$ DIFERENÇA ENTRE LOTES]]` é placeholder e não tem número) |
| 4 | `porta fecha`, `nunca mais vai ter`, `última chance`, `vai ganhar`, `vai manifestar`, `garantido que`, `mais barato`, `vagas acabando`, `últimas vagas`, `cupons`, `vaga(s)`, `mensalidade`, `renova` | 0 ocorrências |
| 4b | `cura` como palavra inteira | 5 linhas, todas nomes de produto ("Cura da Criança Interior", "Cura da Escassez Financeira"). Nenhuma promessa. Exceção explicada acima |
| 4c | `autossabotagem acaba`, `vai quitar` | 0 ocorrências |
| 5 | WhatsApp e API (`ART-VIP-02`): "para" e não "pra", linha em branco entre linhas, `*negrito*`, link em linha própria, SAIR, 9 linhas, termina em CTA com link | conforme; `\bpra\b` nos 6 arquivos: 0 ocorrências |
| 6 | `TODO`, `lorem`, `XXX` (maiúsculas) | 0 ocorrências. Placeholders: só os do guia mais os derivados listados acima |
| 7 | IDs únicos e contagens | 0 duplicados; contagens conferem (tabela acima) |
| 8 | Caminhos citados existem | conferido por script: 0 caminhos inexistentes; IDs de legenda citados (LEG-CAP, LEG-AQC, LEG-RMK) existem |
| 9 | `@`, URL, telefone | 0 ocorrências |
| 10 | Frases intocáveis usadas aparecem literais | "Eu prefiro que você não compre do que compre e não viva." literal em LEM-D1-3, LEG-LEM-08, LEG-VIT-05 e RMV-11 (6 ocorrências, todas conferidas por contagem exata). Nenhuma outra frase intocável foi parafraseada |
| 11 | Cor, fonte ou logo definitivos (`amarel`, `verde`, `vermelh`, `cinza`, `preto`, `escuro`, `bold`) | 0 ocorrências. "branc" retorna 2 linhas de "linha em branco" (regra de formatação de WhatsApp), sem relação com cor |
| 12 | Preço antes de 03/11, 20h | 0 valores; todos os preços aparecem como placeholder e só em peça marcada como pós-live |

## Pontos de atenção para quem integra

- `05_whatsapp_api/vagas_abertas_e_virada_de_lote.md` e outras peças fora desta área ainda usam "vagas abertas". Este lote usa "acesso aberto". Os dois podem conviver, mas a revisão da área de WhatsApp pode querer alinhar com a regra de "sem limite de vagas".
- Os horários de uso das artes de API (09h, 15h, 19h, 20h, 20h15, 20h45) seguem `05_whatsapp_api/dia_da_live_03_11.md`; se esse cronograma mudar, as artes ART-API-03 a 06 mudam junto.
- A decisão 33 de `12_decisoes_e_pendencias.md` (aula de terça e feriado de 02/11) deve ser fechada antes de 27/10, para a nota de S1 em 03/11 sair do ar.
