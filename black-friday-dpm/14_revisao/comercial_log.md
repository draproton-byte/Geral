# Log de revisão: área Comercial (09_comercial_datacrazy)

Revisor: comercial. Data da revisão: 07/10/2026. Método: leitura integral da rubrica, de 00_ESTRATEGIA_COPY_SENIOR.md, 01_PESQUISAS_INSIGHTS.md e 02_GUIA_DE_COPY.md (versões do momento da revisão, incluindo as edições feitas por outros revisores), depois leitura linha por linha dos 7 arquivos e edição no lugar. IDs e estrutura mantidos.

## 1. Arquivos revisados

| Arquivo | Linhas lidas (antes) | Linhas (depois) | Mensagens em bloco de código (depois) |
|---|---|---|---|
| aberturas_por_segmento.md | 461 | 473 | 25 (12 aberturas A1 a A12 nas duas versões, toque 2, extra, exemplos) |
| copies_por_evento_pipeline.md | 754 | 788 | 49 (E1 a E8 e U1 a U9, variantes e ramos) |
| lista_de_ataque_templates.md | 283 | 287 | 0 (estrutura: 6 abas, 25 colunas, 16 trilhas, 13 objeções) |
| narrativa_da_dra_na_black.md | 264 | 277 | 0 (guia de voz) |
| playbook_do_dia_da_live.md | 294 | 319 | 3 (confirmação de saída, escalonamento, acolhimento) |
| quebra_de_objecoes.md | 585 | 595 | 41 (13 objeções, 2 respostas e 1 encerramento cada) |
| regua_do_silencio_black.md | 303 | 333 | 13 (5 toques, variações por segmento, régua pré-live) |
| **Total** | **2.944** | **3.072** | **131 blocos** |

Referências cruzadas lidas para conferir: 05_whatsapp_api/dia_da_live_03_11.md, 05_whatsapp_api/cronograma_de_disparos.md, 05_whatsapp_api/recuperacao_e_carrinho.md, 06_emails/eventos_de_pagamento.md, 08_live_e_pitch/roteiro_live_de_revelacao.md (versão com relógio 20h51, 21h09, 21h28), 08_live_e_pitch/bonus_15_minutos_e_escassez.md, 12_decisoes_e_pendencias.md, e as fontes em scratchpad/atual e desafio (aulas, manual e dossiê do Comercial).

## 2. Defeitos achados e o que foi feito

### Bloqueantes

| # | Defeito | Onde | Correção |
|---|---|---|---|
| B1 | A abertura oferecia: A8 ("o diagnóstico está liberado para você, te mando?"), A12 ("quer que eu te resuma?") e a variante de silêncio. A regra do comercial é que a abertura nunca oferece | aberturas A8, A12; lista T13, T14 | A8 e A12 viraram só pergunta (A8: "o que você mais começa e não termina?" e "quantas vezes você já recomeçou?"; A12 versão A e B). Diagnóstico e resumo passam a ser entrega depois da resposta. T13 e T14 alinhadas |
| B2 | Abertura com duas perguntas (A3 "né?" mais pergunta, A6 pós-live, A9, A11, E2 e U2 com "posso te perguntar uma coisa só?") | aberturas, copies | Uma pergunta só em todas. A1 e U1 passaram a terminar na pergunta |
| B3 | Objeção a tinha, na prática, quatro mensagens por ramo (pergunta que separa, resposta 1, resposta 2, encerramento) | quebra_de_objecoes.md, letra a | Reestruturada: Resposta 1 é a pergunta que separa; Resposta 2 e Encerramento mudam pela natureza (aperto real ou prioridade). Duas respostas e um encerramento em todas as 13 objeções. Regra de cabeçalho: se ela responde ao encerramento, a conversa passa a ser humana com a coordenação, não abre novo roteiro |
| B4 | Insistência depois do toque 2: abertura com toque 3 de saída honrosa; E5 toque 2 com "última vez que eu falo disso, prometo" mais frase de culpa ("quem abandona no meio do deserto não chega", atribuída à Dra. sem ser frase intocável); E4 variante com "seria uma pena travar aqui"; E5 variante Desafio com "parar agora é exatamente o que ela pediu para ninguém fazer"; toque 5 da régua citando link e fechamento | aberturas §8, copies E4 e E5, régua | Abertura: um único toque 2 com a saída honrosa dentro, depois tag e para. Régua: regra de pressão no topo (toques 3 a 5 não repetem pergunta, não ofertam, não mandam link, não usam escassez); toque 5 sem link e sem fechamento; régua de 5 toques só para quem deu sinal (quem nunca deu sinal tem 2 toques). Régua pré-live caiu de 3 para 2 toques (o lembrete das 19h é do pipeline E1). Culpa removida nas variantes; E5 toque 2 com saída honrosa |
| B5 | Link para quem está em silêncio: E2 toque 2 "não respondeu" mandava o link direto, contradizendo T04, A11 e a regra "nunca mande link a quem está em silêncio" da própria régua | copies E2 e U2, lista T04, régua | Sem link: "me responde link que eu te mando" mais saída honrosa. Exceção documentada: código de Pix e boleto que a própria pessoa gerou |
| B6 | Playbook do dia 03/11 desencontrado da grade e do roteiro: pedia link do lote entre 21h15 e 21h28 (o link só abre às 21h28); dizia "nada de oferta" até 21h09, mas o roteiro revela a oferta às 20h51; lembrete de 16h a 17h e de 19h tratados como o mesmo toque; não dizia quem dispara o carrinho aberto; carrinho abandonado (30 min) cairia dentro do modo escuta | playbook §2, §9; copies E2, regra 12 | Tabela hora a hora refeita: modo escuta 20h a 22h do comercial; 20h51 oferta sem preço; 21h09 preço, respostas sem link; 21h28 link abre e carrinho aberto manual (CP-BF-76, API-BF-17) pelo time de disparo, não pelo comercial; grupos e API seguem a grade (CP-BF-73 a 75, API-BF-14 a 16); leva de E2 retida sai às 22h; Pix gerado depois das 22h tem toque 1 às 7h; se a live atrasar o link e o carrinho aberto acompanham o link. Cola do dia corrigida |
| B7 | A12 previa mensagem "no próprio dia, 20h30", dentro do modo escuta | aberturas A12 | Removida. A12 só sai na manhã de 04/11 |
| B8 | Dívida: letra j oferecia o diagnóstico e dizia "entra quando fizer sentido" (venda); tabela de escuta mandava para "ciclo de dinheiro do Clube". Luto e dor aguda sem regra de pausa | quebra j, aberturas §6, playbook 8.1, narrativa §6 | Letra j é só acolhimento: sem link, lote, parcelamento ou escassez, CRM registra só a letra. Dor aguda, luto, doença, crise e dívida desesperada: acolhe, pausa régua e automações, registra só "acolhimento", escala nível 2, sem oferta nas mensagens seguintes. Regra repetida em copies (13), aberturas, narrativa e playbook |
| B9 | Garantia afirmada antes de decidida: "Tem garantia" (letra m), "Você tem esse direito" (A10, E7), "é um direito seu" (U7), "se não for para você, você pede" (letra i) | quebra m e i, aberturas A10, copies E7 e U7 | Texto condicionado a [[PENDENTE: garantia]] e [[CONFIRMAR: a Vitalícia mantém os 7 dias do Clube]]. Reembolso: "já está sendo encaminhado"; fora do prazo escala |
| B10 | LGPD e opt-out sem tratamento explícito; `{{resposta_dela}}` puxava resposta aberta da ficha para dentro da mensagem | todos | Novo playbook §6.1 (base, minimização, palavras de saída, mensagem única de confirmação, nada depois, direitos do titular, proibição de planilha pessoal) e narrativa §8. `{{resposta_dela}}` virou `{{area_da_ficha}}` (só múltipla escolha). Lista de ataque: status "acolhimento" e "pediu para parar", linha congelada, só id e data. Nota LGPD em copies. Rodapé SAIR adicionado em todas as mensagens automáticas que não tinham (E1 já tinha; E2, E6, E8, U1, U2, U5, U6) |

### Altos

| # | Defeito | Correção |
|---|---|---|
| A1 | Segmentos fora da rubrica: aberturas falavam em "doze segmentos"; Aulão tratado como estágio e lote próprios; sem regra de qual lote paga cada um | S1, S2, S3 em todos os arquivos (tabela em aberturas §2, narrativa §4 e §7.1, copies regra 6 e cabeçalho, lista coluna `s_black` e coluna S nas trilhas, régua §4, playbook §3). S1 lote de aluna; S2 e S3 lote de não-aluna; S2 paga como não-aluna até decisão contrária, com [[CONFIRMAR: condição de quem viveu Desafio, Imersão ou Aulão]]. Precedência S1, S2, S3 para quem tem várias tags |
| A2 | 51,9% atribuído ao "Aulão" (aberturas banco de perguntas, narrativa 7.2) | Reescrito: "51,9% das pessoas que responderam à pesquisa de presença (dossiê do Desafio)" |
| A3 | 19,2% de endividadas atribuído ao "dossiê do Aulão" | Corrigido para quiz do dossiê do Desafio (fonte: dossiê, quiz 3.226 respostas) |
| A4 | Letra l: "cartão parcelado é a forma mais escolhida (ficha)" e "só 10% confortável na faixa de R$ 298 a R$ 500"; o arquivo da ficha não tem coluna de pagamento e o 10% de 01 é "acima de R$ 1.000" | Corrigido para "só 10% declara conforto acima de R$ 1.000 (7% + 3%)" e forma de pagamento como [[CONFIRMAR]] (briefing) |
| A5 | Frase "tentação de parar, já fiz a hipnose" atribuída à Aula 3 (narrativa, letra f) e à Aula 2 (letra d, para "autossabotagem") | Fonte confere em manual da Aula 02 (tentação de parar e escassez, obediência). A conta de seis meses e do um vezes zero permanece na Aula 3. Textos corrigidos; "a Dra. chama de autossabotagem" removido de E2 (não está nas fontes) |
| A6 | Preços em texto do comercial: R$ 35 do ingresso (narrativa), R$ 500 de entrada do Desafio (copies), "R$ 2.997" (narrativa 7.4), "o preço de uma pizza é R$ 97" (invenção), R$ 7 por noite | Removidos. Escada do briefing fica só na nota marcada "remover antes de distribuir" (narrativa). Faixas de pesquisa e renda mantidas (exceção da rubrica) |
| A7 | Textos de proibição reproduziam literalmente as frases proibidas e "mensalidade" e "cura" (violam a checagem dura 4 mesmo como aviso) | Reescritos por descrição ("nunca diga que a oferta acaba para sempre..."). [[CONFIRMAR: comparação com mensalidade]] virou [[CONFIRMAR: comparação de valor com cobrança recorrente]]. "Sem renovar" removido do mecanismo. "Cura da Criança Interior" e "Cura da Escassez Financeira" deixaram de ser citados no texto: remete à lista de produtos da estratégia |
| A8 | "Sua vaga confirma na hora", "sua vaga continua aqui", "vaga de pé" (compra) sugerem escassez de vagas; não há limite de vagas | "entrada" no lugar de "vaga" nas peças de pagamento. "Vaga na live" virou "reserva na live" |
| A9 | Pix 48 h e boleto 4 a 5 dias: coerentes entre E3, U3, playbook §4 e lista, mas o exemplo 4.3 estava errado (toque 2 "13h a 14h" para vencimento às 21h30 de 05/11) | Corrigido para 11h30 a 13h30. Fontes marcadas (Manual do Comercial do Desafio, a conferir no PDF). 05_whatsapp_api e 06_emails não contradizem (boleto 3 dias úteis de compensação igual) |
| A10 | Régua toque 3 "certificado de presença" para quem possa não ter assistido | Marcado "só para quem ficou ao vivo" |
| A11 | E2 e U2 toque 2 descritos como "automático, ramificado pela resposta" (contradiz "resposta dela interrompe a régua e cai para humano") | Ramos com resposta são humanos sem rodapé; só o ramo "não respondeu" é automático |
| A12 | Caminhos de arquivo do Desafio em "Modelo no Desafio" (ex.: 13_comercial_como_abrir_a_conversa.md) não existem no repositório; roteiro_live_de_revelacao.md citado sem pasta | Modelos citados por título do material. Caminhos completos para 08_live_e_pitch e 05_whatsapp_api |

### Médios

| # | Defeito | Correção |
|---|---|---|
| M1 | "Banco de Templates ensina o que disparar" (arquivo inexistente no repositório) | Aponta para copies_por_evento_pipeline.md |
| M2 | Primeira ocorrência de "Lote Especial" sem a marcação exigida pela rubrica | Marcação [[CONFIRMAR: Lote Especial só para quem está ao vivo]] na primeira ocorrência em narrativa, playbook e lista |
| M3 | Placeholders fora do conjunto do guia ([[CALCULAR]], [[AUTORIZAR]], [[PENDENTE: soma dos avulsos]], contagem, número oficial etc.) | Convertidos: CALCULAR para CONFIRMAR, AUTORIZAR para "autorização por escrito", soma dos avulsos para [[PENDENTE: preço avulso]], contagem para [[PENDENTE: contagem de alunas]], plano atual para [[PENDENTE: regra de migração]], operacionais para [[CONFIRMAR: ...]] |
| M4 | Mensagens sem fecho em pergunta ou CTA claro (letras c, d, e, g, h, i, j, k, l, m; E3b, E5, E6, E7, U3, U5) | Pergunta ou CTA no fim, mantendo o limite de 12 linhas. Exceções conscientes: confirmação de reembolso, confirmação de saída e mensagens que terminam no código de Pix ou no link (o CTA vem na linha anterior) |
| M5 | Modo escuta não afetava os toques automáticos de E2 e E3 | Regra 12 em copies e linha no mapa de eventos |
| M6 | Intocável "Eu prefiro que você não compre..." usada em E2 (ramo "pagamento"), sem a pessoa ter dito que está em aperto | Removida de E2; mantida só em letra a (aperto real) e b (valor maior do que cabe) |
| M7 | Frase "A Dra. prefere devolver do que ter alguém aqui sem querer estar" (atribuição inventada) | Trocada por "Ninguém precisa ficar onde não quer estar." |
| M8 | Tabela de ordem do playbook e IDs da lista de ataque desencontrados (T13 em 04/11) | Nota explícita na lista; IDs preservados |
| M9 | Letra f dizia que a virada de lote só é argumento no "vou pensar", mas a, g e k também citam | Reescrito: só depois de 03/11 e só com data real |
| M10 | Letra b: "cada ano no mesmo lugar cobra mais caro" (claim sem fonte) | Removido; cálculo por ciclo como [[CONFIRMAR: valor do lote vigente dividido por 12 ciclos]] |

### Baixos

- "Tá aqui" para "Está aqui" (público 45+).
- "44% conhecem a Dra. há menos de um mês" detalhado: 25% primeira vez mais 19% menos de um mês, conferido no CSV (1.827 mais 1.411 de 7.323).
- A1 pré-live e variantes: "Quero levar a sua história para a Dra." antes da pergunta.
- "Cinco dores" trocado por "cinco padrões" (glossário) em A5.
- Régua toque 4: "duas perguntas" (dizia duas, pedia uma) trocado por pedido de opinião de uma frase.
- 10,9% rotulado como quiz do dossiê do Desafio.

## 3. Números conferidos contra 01 e os CSV

Recalculado com agregados (sem expor dado pessoal) em alunos.csv (893) e aulao.csv (7.323):

| Número no texto | Resultado do CSV | Status |
|---|---|---|
| Ficha: 151 quente, 394 morna, 348 fria | 151, 394, 348 | confere |
| Quente: 141 acima de R$ 500 e 80 acima de R$ 1.000 | 61 + 57 + 23 = 141; 57 + 23 = 80 | confere |
| Quente: medo de não implementar 27, já comprei 24, medo de não funcionar 20 | 27, 24, 20 | confere |
| Morna: sem dinheiro 72, outro 62, já comprei 61; conforto R$ 98 a 297 = 155, R$ 298 a 500 = 78 | 72, 62, 61; 155, 78 | confere |
| Fria: sem dinheiro 181, já comprei 44; conforto até R$ 97 = 184 | 181, 44, 184 | confere |
| Objeção ficha: 30%, 14%, 12%, 7%, 2%; Aulão: 68%, 11%, 8%, 3%, 2% | 29,6; 14,4; 11,8; 7,4; 2,1 e 67,6; 11,4; 7,9; 2,9; 1,7 | confere |
| Ficha, marido ou esposa | 0,8% (a tabela dizia n/a) | corrigido para 1% |
| Conforto da ficha: 27, 26, 10, 13, 7, 3; 53% até R$ 297; 10% acima de R$ 1.000 | 27,1; 26,0; 10,3; 12,8; 6,9; 2,9; 53,1; 9,8 | confere |
| Aulão: renda até R$ 3.000 = 4.761 (65%); acima de R$ 5.000 = 1.108 (15%) | 4.761; 1.108 | confere |
| Aulão: 44% da renda acima de R$ 5.000 diz "sem dinheiro agora" | 490 de 1.108 = 44,2% | confere |
| 44% novos (primeira vez ou menos de um mês) | 44,2% | confere |
| 34% "o dinheiro não dá para pagar tudo"; 32% "quase nunca sobra" | 33,8% e 31,9% | confere |
| Procrastino: 22% Aulão, 20% ficha; "parar de me sabotar": 27% Aulão, 19% ficha | 21,5; 19,7; 26,9; 19,5 | confere (19,5 arredonda para 20; 01 usa 19) |
| 51,9% Termostato; 19,2% endividadas; 10,9% culpa de querer mais; 79,2% e 20,8% | Só no dossiê do Desafio (não há CSV); 51,9 e 10,9 e 19,2 e 79,2 conferem com o dossiê | confere com fonte, atribuição corrigida |
| 2.220 pagantes do Desafio | O dossiê traz 2.220 unidades vendidas | trocado para "compras" |

## 4. Itens que ainda dependem de decisão (todos já marcados no texto)

1. [[PENDENTE: garantia]] (letras i, m, A10, E5, E7), [[CONFIRMAR: a Vitalícia mantém os 7 dias do Clube]].
2. [[PENDENTE: replay]] (régua, A12). Nenhuma peça afirma nem nega.
3. [[CONFIRMAR: condição de quem viveu Desafio, Imersão ou Aulão]]: S2 paga como não-aluna até decisão contrária. Define o link de S2.
4. [[PENDENTE: regra de migração]]: o que acontece com o período já pago da aluna (U2, U6 a U9, letra h, T06).
5. [[CONFIRMAR: o valor do lote é travado na hora da geração do Pix ou do boleto]] (E3, E5, U3, U5, playbook 4.2) e prazo de compensação do boleto.
6. [[PENDENTE: parcelamento máximo]], [[CONFIRMAR: entrada mais parcelas]], [[CONFIRMAR: forma de pagamento mais escolhida]] (o CSV da ficha não tem a coluna).
7. [[PENDENTE: data do lote]], [[PENDENTE: fechamento]], [[PENDENTE: bônus]] (cronômetro de 15 minutos só se houver), [[PENDENTE: preço avulso]] (letra b).
8. [[PENDENTE: ordem de entrada]] (trilha, letras e e A4), [[PENDENTE: contagem de alunas]], [[PENDENTE: degrau de entrada / lista de espera]].
9. [[CONFIRMAR: base legal e texto de aceite da página de captura, com o jurídico]] e [[CONFIRMAR: canal do encarregado de dados]].
10. [[CONFIRMAR: manual da live]] (existe?), [[CONFIRMAR: haverá certificado da live]], [[DEPOIMENTO REAL]] autorizados por escrito, [[CONFIRMAR: protocolo de crise aprovado pela Dra.]], [[CONFIRMAR: número oficial do comercial]], quantos números, limite por número por dia, campo de gênero no CRM.
11. [[CONFIRMAR: Lote Especial só para quem está ao vivo]] (narrativa, playbook, lista).
12. Planilha original da lista de ataque do Desafio não foi lida: comparar colunas antes de montar. PDF de leads não convertidos não estava disponível: conferir Pix 48 h e boleto 4 a 5 dias.
13. Decisão de estratégia a validar: a régua de 5 toques passou a valer só para quem deu sinal (leu e clicou, respondeu antes, confirmou presença, fez o diagnóstico ou assistiu); quem nunca deu sinal tem dois toques e a tag de sem retorno. Foi a forma de conciliar "régua de 5 toques" com "nenhuma mensagem insiste depois do toque 2".

## 5. Contagens finais

- Aberturas: 12 (A1 a A12), 25 blocos de mensagem no arquivo.
- Eventos de pipeline: E1 a E8 (Pipeline 1) e U1 a U9 (Pipeline 2) = 17 eventos, dois toques cada.
- Objeções: 13 (a a m), cada uma com no máximo 2 respostas e 1 encerramento (41 blocos de mensagem).
- Régua: 5 toques mais 2 toques pré-live e 6 textos por segmento.
- Lista de ataque: 6 abas, 25 colunas, 16 trilhas (T01 a T16), 13 códigos de objeção. Zero dado pessoal.
- Playbook: 17 níveis de prioridade pós-live, 16 regras de compliance, 7 itens de LGPD (seção 6.1), escalonamento em 4 níveis.
- Placeholders: nenhum fora do conjunto do guia (PENDENTE, CONFIRMAR, LINK, DEPOIMENTO REAL, PREÇO LOTE).

## 6. Checagens duras (grep) ao final, dentro de 09_comercial_datacrazy

| Checagem | Ocorrências |
|---|---|
| 1. travessão e meia-risca (— –) | 0 |
| 2a. nome da gestora | 0 |
| 2b. termos do Dr. João, harmonização, injetáveis, FEP, Elite, Zoom, congresso | 0 |
| 4. frases proibidas e promessas (cura, vai ganhar, vai manifestar, porta fecha, nunca mais vai ter, última chance, garantido que, últimas vagas, vagas acabando, cupons limitados, mensalidade, renovar, renovação) | 0 |
| 5a. forma reduzida de 'para' (pra, pras, pro) | 0 |
| 5b. blocos de mensagem com linhas coladas (sem linha em branco), exceto o modelo interno de escalonamento | 0 |
| 6a. placeholders fora do conjunto do guia | 0 |
| 6b. TODO, lorem, XXX, CALCULAR, AUTORIZAR | 0 |
| 3. valores em R$ fora de faixa de pesquisa e fora da nota marcada (narrativa linha 141) | 0 |
| 9. e-mail, telefone, CPF, URL, wa.me | 0 |
| 8. caminhos de arquivo citados que não existem no repositório | 0 |
| 7. IDs sequenciais e únicos: A1 a A12, E1 a E8 e U1 a U9, T01 a T16, objeções a a m (contagens 12, 17, 16, 13) | 0 falhas |

Checagem 10 (frases intocáveis literais): as 14 frases do guia, seção 4, aparecem literais em narrativa_da_dra_na_black.md seção 3 (verificação por script, 0 divergências). Usos em outras peças (letra a: "Eu prefiro que você não compre do que compre e não viva."; régua: "Eu termino tudo o que eu começo."; E3 e E5: "Não trave o processo.") copiam a frase sem paráfrase.

Checagem 5 (formato WhatsApp): "para" (0 formas reduzidas), linha em branco entre linhas (0 blocos colados), `*negrito*` com asterisco, link em linha própria, rodapé SAIR nas mensagens automáticas, no máximo 12 linhas por mensagem (conferido por script em 131 blocos).

Checagem de datas e janelas: 03/11 terça; captação 13/10 a 02/11; live 20h; modo escuta 20h a 22h; oferta revelada 20h51; preço 21h09; link e carrinho aberto 21h28; Pix 48 horas; boleto 4 a 5 dias com compensação de até 3 dias úteis (coerente com 05_whatsapp_api/recuperacao_e_carrinho.md e 06_emails/eventos_de_pagamento.md).
