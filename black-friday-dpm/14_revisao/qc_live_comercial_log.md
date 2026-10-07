# QC independente: área live_comercial (08_live_e_pitch e 09_comercial_datacrazy)

Revisor: QC independente. Data: 07/10/2026. Método: leitura integral da rubrica, de `00_ESTRATEGIA_COPY_SENIOR.md`, `01_PESQUISAS_INSIGHTS.md`, `02_GUIA_DE_COPY.md`, `16_MAPA_DE_LINKS.md` e dos dois logs anteriores da área (`comercial_log.md`, `live_listboss_posvenda_log.md`), depois leitura linha por linha das 11 peças e edição no lugar. IDs e estrutura mantidos. Decisões já tomadas na revisão anterior não foram desfeitas.

## 1. O que foi lido

| Arquivo | Linhas lidas (antes) | Linhas (depois) |
|---|---|---|
| 08_live_e_pitch/roteiro_live_de_revelacao.md | 461 | 474 |
| 08_live_e_pitch/pitch_e_ancoragem.md | 278 | 294 |
| 08_live_e_pitch/bonus_15_minutos_e_escassez.md | 188 | 209 |
| 08_live_e_pitch/slides_da_live.md | 346 | 364 |
| 09_comercial_datacrazy/aberturas_por_segmento.md | 473 | 509 |
| 09_comercial_datacrazy/copies_por_evento_pipeline.md | 788 | 828 |
| 09_comercial_datacrazy/lista_de_ataque_templates.md | 287 | 297 |
| 09_comercial_datacrazy/narrativa_da_dra_na_black.md | 277 | 287 |
| 09_comercial_datacrazy/playbook_do_dia_da_live.md | 319 | 330 |
| 09_comercial_datacrazy/quebra_de_objecoes.md | 595 | 627 |
| 09_comercial_datacrazy/regua_do_silencio_black.md | 333 | 354 |
| **Total** | **4.345** | **4.573** |

Peças pontuadas: 154 (pasta 08: 18 blocos do roteiro com a sala aberta, 9 partes do pitch com o corte de 90 s, 5 do bônus, 50 slides com os 4 de reserva; pasta 09: 14 aberturas, 17 eventos de pipeline, 16 trilhas, 13 objeções, 7 toques de régua, 4 do playbook e 1 guia de narrativa). Mensagens em bloco de código na pasta 09: 137 (27 em aberturas, 51 em eventos, 42 em objeções, 14 em régua, 3 em playbook).

Conferência contra fontes feita nesta rodada, direto nos CSV: `aulao.csv` com 7.323 linhas; "não sei exatamente o que está me impedindo" na pergunta de paz 39,6% (2.903), logo "4 em cada 10" e "40%" conferem; "primeira vez" 1.827 mais "menos de 1 mês" 1.411 = 3.238 (44,2%); renda até R$ 3.000 = 2.459 + 2.302 = 4.761; "não tenho o dinheiro disponível agora" 67,6%; "já comprei outros" 11,4%; "medo de não colocar em prática" 7,9%. O 51,9%, o 19,2% e o 10,9% vêm do dossiê do Desafio (sem CSV) e seguem atribuídos a ele. O "a maioria respondeu nada" (investimento nos últimos seis meses) está no manual da Aula 03 (`scratchpad/atual`).

Não consegui ler: planilha original da lista de ataque do Desafio, PDF de leads não convertidos (janelas de Pix de 48 h e boleto de 4 a 5 dias seguem como "conferir"), artes em imagem, manuais da Imersão.

## 2. Verificações-chave pedidas

| Verificação | Resultado |
|---|---|
| Tempos do roteiro somam 116 min | 4+6+3+9+7+6+7+9+10+5+3+6+5+8+5+15+8 = 116. Relógio 20h00 a 21h56 confere bloco a bloco |
| Falas cabem a 2,3 a 2,7 palavras por segundo | Contei por script as palavras entre aspas de FALA, FRASE, AÇÃO, CHAT e REAÇÃO em cada bloco. O pior bloco usa 0,56 palavra por segundo do tempo total, e todos cabem com folga em 2,7. Seis linhas da tabela do Mapa estavam desatualizadas (blocos 2, 5, 14, 15, 16 e 17; o bloco 5 não contava as cinco frases dos padrões) e foram corrigidas; soma de 2.557 para 2.645 palavras (16,3 a 19,2 min). Pitch: 8 partes somam 720 s e 1.100 palavras, conferem |
| Oferta 20h51, preço 21h09, link e carrinho aberto 21h28 | Confere no roteiro, bônus, slides e playbook. Grupo (CP-BF-76) às 21h28; API (API-BF-17 e -A) às 21h30 e 21h32, como na grade de `05_whatsapp_api/dia_da_live_03_11.md` |
| Modo escuta do comercial 20h a 22h | Confere em playbook, copies (regra 12), aberturas (A12 só em 04/11), régua e narrativa |
| Objeções com no máximo duas respostas e um encerramento | 13 objeções (a a m), todas com resposta 1, resposta 2 e encerramento (a e i têm ramos, nunca mais de duas respostas e um encerramento por caminho) |
| Primeira abertura nunca oferece e nunca tem link | A1 a A12, toque 2 e Extra sem link. Corrigidas duas violações que a revisão anterior deixou: E1 toque 1 (oferecia o diagnóstico com link) e U1 toque 1 (insinuava "condição só sua") |
| Acolhimento de dívida e luto sem link e sem oferta | Corrigida a letra j (resposta 2 ainda oferecia o diagnóstico) e a matriz da lista de ataque. Acolhimento do playbook com uma pergunta só |
| Mensagens do comercial com link | Todas no token `[[LINK: <destino> \| comercial \| comercial-ID-VENDEDOR]]` (seção 4) |
| LGPD e dados pessoais | Nenhum dado pessoal, telefone, e-mail, URL ou login. Saída única mantida |

## 3. Notas antes e depois (só o que mudou)

Critérios: (a) primeira linha, (b) especificidade e voz, (c) estágio, (d) identidade, (e) objeção pelo mecanismo, (f) CTA e link, (g) compliance, (h) formato, (i) ritmo e repetição, (j) integridade.

### Pasta 08

| Peça | Critério | Antes | Depois | Correção |
|---|---|---|---|---|
| Roteiro, bloco 0 (19h55) | (j), (f) | 6 | 9 | O roteiro criava uma mensagem de grupo às 19h55 que a grade não tem (grupo às 19h50 CP-BF-72, API às 19h55). Virou referência à grade, sem mensagem duplicada. Link de teste no token canônico |
| Roteiro, bloco 8 | (g), (d) | 8 | 9 | "porque é fraca" (gênero e culpa) para "por fraqueza" |
| Roteiro, bloco 9 | (g) | 8 | 9 | Nota do produto "Cura" reescrita para "nome oficial, sem promessa de resultado" |
| Roteiro, bloco 14 | (b), (d) | 8 | 9 | "aplicar sozinha" para "aplicar por conta própria" (sala mista) |
| Roteiro, bloco 15 | (f), (j) | 5 | 9 | Dois links genéricos para S1-ESP e S3-ESP (canal yt-live), nota de S2 com `[[CONFIRMAR]]`; carrinho aberto com horários reais de grupo e API |
| Roteiro, blocos 16 e 17 | (j), (f) | 6 | 9 | "link aberto até a data do lote" confundia lote com fechamento: agora `[[PENDENTE: fechamento]]` para o link e `[[PENDENTE: data do lote]]` para o valor. Mensagem das 22h passou a apontar o CP-BF-77 |
| Roteiro, Mapa e notas | (j), (g) | 7 | 9 | Seis linhas de palavras e tempos recalculadas; `[[CONFIRMAR: comparação com mensalidade]]` trocado por cobrança recorrente (mensalidade não aparece em texto) ; "sobre cura" para "sobre resultado"; "a autossabotagem acaba" na cola trocado por "não promete o fim" |
| Pitch, parte 2 | (j) | 8 | 9 | "Os Três Áudios" para o nome oficial "Os 3 Áudios de Reprogramação" |
| Pitch, parte 7 (conversa 2) | (b) | 8 | 9 | "aplicar sozinho" para "por conta própria" |
| Pitch, parte 8 | (f) | 5 | 9 | Link do chat sem token: S1-ESP e S3-ESP, canal yt-live |
| Pitch, corte de 90 s | (f), (j) | 4 | 9 | Pedia "o link está na descrição" sem destino: "Link de destino" com `página de vendas` (canal wpp); texto "logo abaixo" |
| Bônus, contagens 1 a 4 | (f), (j) | 4 | 9 | Quatro links genéricos para tokens (checkout por grupo S1, S2 e S3; suporte); "Escolha o seu segmento" (impossível com um link) trocado; "link aberto até a data do lote" corrigido para fechamento |
| Bônus, modo C e fonte | (g) | 8 | 9 | "vagas" no modo C e "fim de vagas" trocados por "unidades do bônus" |
| Slides 42, 43, 45, R3 e R4 | (f), (j) | 5 | 9 | Botões do slide 42 com "Link de destino" S1-ESP e S3-ESP; suporte e reembolso com token e canal yt-live; slide 45 com fechamento |

### Pasta 09

| Peça | Critério | Antes | Depois | Correção |
|---|---|---|---|---|
| Aberturas, toque 2 (seção 8) | (i), (a) | 7 | 9 | "posso te fazer uma pergunta mais fácil?" mais a pergunta real eram duas perguntas: uma só |
| Aberturas, A7 pós-live | (i) | 7 | 9 | Repetia A9 palavra por palavra ("Qual parte ficou mais na sua cabeça?") para a mesma pessoa em T08 e T10 |
| Aberturas, A12 A e B | (j), (b) | 7 | 9 | "live de ontem" (contagem relativa de dia) para "live de 03/11"; "muita gente anotou" (sem fonte) trocado |
| Aberturas, seção 7 | (f) | 6 | 9 | Faltava a entrega com link: dois blocos novos (diagnóstico e lote), sempre depois da resposta |
| Copies E1, toque 1 | (a), (f), (g) | 4 | 9 | Primeira mensagem oferecia o diagnóstico com link e dizia "só para quem deu esse passo". Agora só confirma a reserva e pergunta o padrão; o diagnóstico vai em resposta nova, com token |
| Copies E1, variante Desafio | (i) | 7 | 9 | Pergunta repetia A3 pós-live: nova pergunta |
| Copies E1 e U1, toque 2 (19h) | (f) | 4 | 9 | `{{link_live}}` para token live YouTube |
| Copies U1, toque 1 | (g), (i), (a) | 5 | 9 | "reservou sua vaga", repetia A1 e insinuava "condição só sua" na primeira mensagem |
| Copies E2 | (f) | 6 | 9 | Mensagem nova de entrega do link, só depois do pedido dela (token S3-ESP; S2 em variante) |
| Copies E3a e U3, toque 2 | (j) | 7 | 9 | "vence hoje" podia ser falso se o toque caísse na véspera: `{{data_vencimento}}` |
| Copies E4, U4 | (f) | 5 | 9 | `{{link}}` para tokens S3-ESP, S2-ESP e S1-ESP |
| Copies E5 | (g), (f) | 6 | 9 | "Você entra, olha por dentro" ao lado de `[[PENDENTE: garantia]]` sugeria prova grátis: removido; tokens nos dois toques e variante S2 |
| Copies E6, U6 | (f), (g) | 7 | 9 | `{{link_onboarding}}` para token; "te acompanhar" (promessa de acompanhamento) e "continua com você" (migração não decidida) reescritos |
| Copies, regras 3, 6 e 12 | (j) | 7 | 9 | Tabela de tokens no lugar das variáveis; regra de lote (ESP, 1L, UL); nenhum toque automático entre 22h e 7h |
| Objeções, letra j | (g) | 5 | 9 | A resposta 2 oferecia o diagnóstico ("quer que eu te mande?"): acolhimento puro, sem oferta |
| Objeções, letras i e m | (g) | 7 | 9 | "Entra, olha por dentro" ao lado de garantia pendente; "pedido simples, sem formulário difícil" ganhou `[[CONFIRMAR: processo de reembolso]]` |
| Objeções, letras l e m | (f) | 5 | 9 | `{{link}}` e `[[LINK: instrução de reembolso]]` para tokens; bloco novo de entrega do link para d, g e m |
| Régua, toque 1 de S1 ativa | (i) | 5 | 9 | Repetia a pergunta de A1 para quem não respondeu: pergunta nova sobre a live |
| Régua, "assistiu e não comprou" toque 1 | (i) | 4 | 9 | Repetia A9: virou resumo, como diz a tabela da própria régua |
| Régua, toques 1 (sem replay) e 4 | (i), (b) | 6 | 9 | Frase repetia A12 B ("conta que muita gente anotou"); pergunta do toque 4 repetia A9 |
| Régua, pré-live toque 2 | (j) | 6 | 9 | Dizia "reserva confirmada" a quem a régua define como "não confirmou presença" |
| Régua, entrega | (f) | 6 | 9 | Bloco novo de entrega do diagnóstico com token depois do "sim" |
| Playbook, tabela hora a hora | (j) | 5 | 9 | Grade de grupo e API desencontrada de `05_whatsapp_api` (CP-BF-73 às 20h e API-BF-14 às 20h05; CP-BF-74 às 20h15 e API-BF-15 às 20h20; CP-BF-75 às 21h e API-BF-16 às 21h05); carrinho aberto com horários reais; dois "último disparo" ambíguos esclarecidos |
| Playbook, acolhimento 8.1 | (g) | 7 | 9 | Mensagem com duas perguntas, agora uma |
| Narrativa, ponte | (f), (g) | 5 | 9 | Token genérico para o formato canônico; "nunca prometa que a autossabotagem acaba" para "o fim da autossabotagem" |
| Lista de ataque, matriz j | (g) | 6 | 9 | "Diagnóstico se ela quiser" tirado: acolhe, sem link e sem oferta |

## 4. Links

Tokens de link (corpo das peças, sem contar as tabelas "Links desta peça"): **58**, todos no padrão `[[LINK: <destino> | <canal> | <ID>]]`, nenhum fora do conjunto da seção 1 e 2 do mapa (verificado por script). Antes: 27 tokens genéricos ou fora do padrão e 15 variáveis `{{link...}}`, mais cerca de 20 mensagens e slides que pediam ação sem link. Cada um dos 11 arquivos termina com a tabela "Links desta peça" (41 linhas de token no total; lista de ataque e régua dizem explicitamente por que quase não têm link).

| Tipo de token | No corpo | Canais |
|---|---|---|
| checkout S1-ESP | 11 | yt-live, wpp, comercial |
| checkout S3-ESP | 11 | yt-live, wpp, comercial |
| checkout S2-ESP | 6 | wpp, comercial |
| checkout S1-1L, S2-1L, S3-1L | 3, 4, 3 | comercial |
| suporte WhatsApp | 5 | yt-live, wpp, comercial |
| diagnóstico | 5 | comercial |
| onboarding | 4 | comercial |
| live YouTube | 3 | comercial |
| reembolso | 2 | yt-live, comercial |
| página de vendas | 1 | wpp |
| **Total** | **58** | yt-live 11, wpp 9, comercial 38 |

Regras que adotei e que a equipe precisa conhecer:

- Comercial: ID da copy é sempre o literal `comercial-ID-VENDEDOR` (atribuição por vendedor de `15_automacao/doc_captacao_automacao_black.md`).
- Lote: eventos que nascem na noite da live (E2 a E6, U1 a U6) usam `-ESP`; conversas e objeções de 04/11 em diante usam `-1L`, enquanto o Lote Especial for só da live. Regra de troca por `-ESP` ou `-UL` escrita no topo de cada arquivo.
- Segmento: S1 usa S1, quem viveu Desafio, Imersão ou Aulão usa S2, o restante usa S3. Na live (chat do YouTube) só há dois botões (alunas e não-alunas); S2 entra no botão de não-alunas, com `[[CONFIRMAR]]` se haverá terceiro botão.
- O código Pix e o link do boleto da própria pessoa (`{{codigo_pix}}`, `{{link_boleto}}`) continuam variáveis, porque vêm do evento do checkout e não são destino do mapa.
- Sem link, por regra: todas as aberturas, E1 toque 1, E2 e U2 toque 1, letra j inteira, acolhimento, saída (opt-out), URA.
- Mensagens de WhatsApp da noite da live (CP-BF-72, API-BF-13, CP-BF-76, API-BF-17, CP-BF-77) são da pasta 05; o roteiro agora só aponta para elas.

## 5. Pendências de decisão (já marcadas no texto)

1. Replay: `[[PENDENTE: replay]]` (roteiro bloco 3, A12, régua).
2. Garantia: `[[PENDENTE: garantia]]` e `[[CONFIRMAR: a Vitalícia mantém os 7 dias do Clube]]`; processo de reembolso `[[CONFIRMAR: processo de reembolso]]`.
3. Datas: `[[PENDENTE: data do lote]]` (valor do lote) e `[[PENDENTE: fechamento]]` (link aberto). A distinção entre as duas passou a valer em todas as falas da live.
4. Bônus: `[[PENDENTE: bônus]]`, modos A, B ou C, boleto dentro da janela de 15 minutos.
5. Preços avulsos e frase por produto (blocos 9 e 10, slides 23 a 34).
6. `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`: decide se as conversas de 04/11 em diante usam `-ESP` ou `-1L`.
7. `[[CONFIRMAR: condição de quem viveu Desafio, Imersão ou Aulão]]` (S2 paga como não-aluna; define se a live ganha um terceiro botão S2-ESP).
8. `[[CONFIRMAR: lista de IDs de vendedor]]` (nova): preenche o `ID-VENDEDOR` do token.
9. Regra de migração, parcelamento máximo, entrada mais parcelas, valor do lote travado no Pix e no boleto, prazo de compensação do boleto.
10. Ordem de entrada (trilha), contagem de alunas, degrau de entrada.
11. Número oficial do comercial, quantidade de números, limite por número por dia, campo de gênero no CRM, protocolo de crise aprovado pela Dra., base legal e canal do encarregado de dados.
12. Manual da live, certificado da live, depoimentos reais autorizados, foto da Dra. aos 18 anos, âncora de R$ 120 mil, nomes e ordem dos 12 ciclos, o que o suporte inclui.

Peças que não chegam a 9 por depender dessas decisões e por isso ficam com `[[CONFIRMAR]]` ou `[[PENDENTE]]` explícito: roteiro blocos 9, 10, 12, 13 e 15 a 17; pitch partes 2, 3, 5 e 6; bônus (todas as contagens); slides 23 a 40; quebra letras b, f, h, l, m; E3, E5, U3, U5, U7 a U9.

## 6. Divergências em outras áreas (não editadas)

- `05_whatsapp_api/dia_da_live_03_11.md`: lista o último lembrete automático do comercial às 19h15 e o fim do modo escuta às 22h05; a pasta 09 usa 19h e 22h (janelas do playbook). Alinhar um dos lados. O mesmo arquivo usa "Reservaram a vaga" e capa "VAGAS ABERTAS" (a decisão da revisão final prefere "lugar" ou "reserva").
- `05_whatsapp_api/cronograma_de_disparos.md`: carrinho aberto em API às 21h30 e 21h32, contra 21h28 do grupo; as peças da pasta 08 e 09 já seguem esses horários.
- `10_pos_compra` e `07_listboss_ura_sms` não foram tocados; a revisão anterior já os cobriu. O ListBoss e a descrição do YouTube devem usar também "fechamento" (link aberto) separado de "data do lote" (valor); conferir.
- Termos "Elite" e "Cura" mantidos apenas nos nomes oficiais dos produtos.

## 7. Checagens duras (executadas no estado final, nos 11 arquivos)

| Checagem | Ocorrências |
|---|---|
| 1. travessão e meia-risca (— –), conferido por caractere Unicode | 0 |
| 2a. Keila, Zoom, FEP, congresso, harmonização, injetáveis | 0 |
| 2b. "Elite" fora de "Workshop Terapeuta de Elite" | 0 |
| 4. porta fecha, nunca mais vai, última chance, vai ganhar, vai manifestar, garantido que, últimas vagas, vagas acabando, cupons limitados, mensalidade, renovar, renovação, "autossabotagem acaba" | 0 |
| 4. "cura" ou "curar" fora dos nomes "Cura da Criança Interior" e "Cura da Escassez Financeira" | 0 |
| 5. "pra" ou "pras" (forma reduzida) | 0 |
| 5. blocos de mensagem da pasta 09 com linhas coladas ou mais de 12 linhas | 0 de 137 |
| 5. link fora de linha própria nos blocos de mensagem | 0 |
| 6. TODO, lorem, XXX, CALCULAR, AUTORIZAR | 0 |
| 6. placeholders fora do conjunto do guia (PENDENTE, CONFIRMAR, LINK, DEPOIMENTO REAL, FOTO DRA, PREÇO LOTE) | 0 |
| 3. valores em R$ fora de faixa de pesquisa, de nota ao implementador e de `[[CONFIRMAR: âncora de R$ 120 mil]]` | 0 |
| 9. URL, e-mail, telefone, wa.me | 0 |
| 8. caminhos de arquivo citados que não existem no repositório | 0 |
| 10. frases intocáveis marcadas que não batem literalmente com o guia | 0 |
| Tokens de link fora do padrão ou com destino ou canal fora do mapa | 0 de 58 (corpo) e 0 de 41 (tabelas) |
| Primeira ocorrência de "Lote Especial" com `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`, nos 10 arquivos que citam o lote (a régua não cita) | 0 faltando |
| "vaga" ou "vagas" em texto público | 0 (5 linhas restantes são regras que proíbem o uso: não há limite de vagas) |
