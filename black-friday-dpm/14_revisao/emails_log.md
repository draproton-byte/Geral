# Log de revisão: e-mails (`06_emails/`)

Revisão feita linha a linha, editando no lugar, contra `RUBRICA.md`, `00_ESTRATEGIA_COPY_SENIOR.md`, `01_PESQUISAS_INSIGHTS.md` e `02_GUIA_DE_COPY.md`. Números recalculados contra `aulao.csv` (7.323 respostas): 40,4% "não sei o que me impede de ganhar", 26,9% "parar de me sabotar", 67,6% "não tenho o dinheiro disponível agora". Fatos do Clube e do Desafio conferidos em `scratchpad/atual/`: 21 dias por ciclo, 12 ciclos, reprogramação de 20 minutos, aula ao vivo toda terça, suporte no WhatsApp, "quando você sobe, a casa sobe junto" (manual da Aula 02), "eu valho mais que uma pizza" (Aula 02), "1 x 0" (Aula 03), Plano da Nova Realidade, "continuar não é obrigatório" (e-mail de lembrete do Desafio), Pix 48 horas e boleto 4 a 5 dias (Manual do Comercial).

## 1. Arquivos revisados e contagens finais

| Arquivo | Linhas lidas | IDs | Versões (segmento) |
|---|---|---|---|
| `captacao_serie.md` | 668 | EM-BF-01 a 22 (22) | 22 |
| `segmentados_09h.md` | 323 | SA-01 a 06, SD-01 a 06 (12) | 12 |
| `lembretes_da_live.md` | 328 | LV-28, LV-29, LV-30, LV-31, LV-01, LV-02, LV-03-01 a 06 (12) | 13 (LV-03-06 em 2) |
| `carrinho_e_lotes.md` | 373 | CL-01/02, VL-01 a 03, ES-01, UH-01 a 03, FE-01/02 (11) | 22 (Alunas e Não-alunas) |
| `eventos_de_pagamento.md` | 426 | EP-AB 2, PX 4, BL 4, RC 2, AP 1, RB 2 (15) | 16 (EP-AP-01 em 2) |
| `onboarding.md` | 232 | OB-01, 02, 03 (3) | 9 (3 segmentos) |
| `pos_compra_e_trilha.md` | 235 | PC-D0, D1, D2, D3, D7, D14, D21 (7) | 7 |
| **Total** | **2.585** | **82 IDs** | **101 e-mails (versões)** |

IDs únicos e sequenciais por família (verificado por script, 0 duplicados). A contagem do cabeçalho de `eventos_de_pagamento.md` dizia 18 e foi corrigida para 15 e-mails (16 versões).

## 2. Defeitos achados e o que foi feito

### Bloqueantes

1. **51,9% mal atribuído (EM-BF-02).** O texto dizia "nas minhas pesquisas, mais da metade das pessoas que me acompanham". Reescrito para "Na pesquisa de presença do Desafio, 51,9% das pessoas que responderam disseram...", conforme rubrica. Nenhuma peça chama o número de "Aulão".
2. **Exclusão 07h x 09h desatualizada.** A tabela de `captacao_serie.md` listava só as datas da série SA. Entre as edições, a série canônica das alunas (`13_modelo_dr_joao/email_alunas_captacao.md`, 8 e-mails às 09h: 15/10, 20/10, 23/10, 27/10, 29/10, 31/10, 02/11, 03/11) passou a valer e a SA virou banco de reserva (banner no topo de `segmentados_09h.md`). Refeita a tabela em `captacao_serie.md` com as 11 datas e 14 envios (8 de S1 pelo canônico e 6 de S2 pela SD). Conferido: SD-01 a SD-06 batem com EM-BF-04, 08, 11, 15, 18, 20 nas mesmas datas; os 8 e-mails do canônico batem com EM-BF-03, 08, 11, 15, 17, 19, 21, 22. SA-05 (29/10) colide com o canônico e foi marcado para mudar de data se a SA for usada.
3. **Mesmo assunto no mesmo dia.** (a) 03/11: EM-BF-22 (07h, "Hoje é o dia") e LV-03-01 (09h, "É hoje") diziam a mesma coisa ao mesmo inscrito: EM-BF-22 passa a ir só a quem não tem a tag "inscrito na live". Mesma regra em 02/11 (EM-BF-21 x LV-02). (b) Em 30/10 e 01/11, S2 recebia SD e LV no mesmo dia: S2 deixa de receber LV-30 e LV-01. (c) Regra escrita nos três arquivos (`captacao_serie.md`, `segmentados_09h.md`, `lembretes_da_live.md`).
4. **Promessa de lançamento futuro e de "não existirá outra".** ES-01 dizia "se um dia houver outra" e EP-RB-02 dizia "existirá outra oferta... Eu estarei por aqui". Reescritos sem prometer nem negar: "o que vier depois é outra oferta, com outro preço, e eu não prometo nada além desta condição". EP-RB-02 perdeu a frase.
5. **Prazos de pagamento (item f).** EP-PX-01 dizia "expira em pouco tempo", EP-PX-02 "se o código expirou" 1 hora depois da emissão, EP-BL-01 não dizia o prazo do boleto. Agora: Pix "vale por 48 horas" (EP-PX-01, 02, 03, RC-01, BL-03) e boleto "vale por 4 a 5 dias, até {{data_vencimento}}" (EP-BL-01, BL-03). Removido "acesso liberado na hora" (EP-PX-01, BL-01, BL-02, BL-03, UH-03), por não estar nas fontes: vira "assim que o pagamento for confirmado". Preview de EP-BL-01 não promete mais "garantir o lote".
6. **Replay.** LV-03-05 dizia "o que eu vou falar nos próximos minutos só é dito uma vez" (nega replay). Reescrito. Nenhuma peça afirma nem nega replay (0 ocorrências de "sem replay" fora de `[[PENDENTE: replay]]`).
7. **Palavra "vaga" e escassez falsa.** Botão "RESERVAR MINHA VAGA NA LIVE" (série inteira), "Sua vaga está garantida" (LV-28) e "é só garantir o lugar" (EM-BF-12) sugeriam limite de lugares na live. Trocados por "QUERO ASSISTIR À LIVE" e "inscrição confirmada". 0 ocorrências de "vaga".
8. **"Renovar" e "mensalidade" em texto público.** EM-BF-19 ("vai ter que renovar") e OB-02 S1 ("deixa de depender de renovar"). Removidos. 0 ocorrências.
9. **Fatos inventados sobre a Dra. e o Clube.** EM-BF-13: "precisei chegar muito perto de perder a vida" e "física quântica" (não estão no guia): removidos; credenciais ficaram com `[[CONFIRMAR: credenciais conforme o material do Comercial]]`. EM-BF-08: "a que mais pessoas me escrevem sobre" (sem fonte): removido. SA-04 "eu sempre digo" e SD-03 "mapa dos seus padrões" (sem fonte): removidos. SA-01 "reprogramação no meio do dia": retirado "no meio do dia". EM-BF-10: citações das pesquisas deixaram de ser atribuídas a alunos.
10. **Preço fora do lugar.** `eventos_de_pagamento.md` trazia "12x de R$199,31" e valor do Clube no cabeçalho: removido. R$ restam só em "Notas ao implementador" de `carrinho_e_lotes.md` e nas duas notas marcadas "NOTA PARA QUEM MONTA, REMOVER ANTES DO ENVIO" de LV-03-06.

### Altos

11. **Cadência (decisão 53 de `12_decisoes_e_pendencias.md`).** Lembretes diários às 12h divergiam da cadência canônica (07h, 09h para segmentos). LV-28 a LV-02 foram para 09h (tag "inscrito na live" como segmento); CL-02 foi para 05/11 às 07h; UH-02 para 07h. UH-03 e FE-01 seguem relativos ao fechamento. LV-03-05 foi para 21h09 (início do bloco do valor no roteiro) e LV-03-06 para 22h00 (a live termina às 21h56); LV-03-02 corrigido de "hora e meia" para "duas horas".
12. **Mais de um botão por e-mail.** OB-01, 02 e 03 de S2 e S3 tinham botão do grupo e botão do diagnóstico; EP-BL-01 tinha dois botões; EP-PX-02, EP-BL-02 e PC-D14 não tinham botão claro. Agora um botão por e-mail (diagnóstico fica na série das 07h). Sem botão por desenho: EP-RB-01, EP-RB-02 e FE-02 (e-mails de acolhimento).
13. **Aula de terça (item d).** 03/11 é terça, dia da aula do Clube, e nada avisava S1. Incluído `[[CONFIRMAR: a aula de terça de 03/11 ...]]` em OB-02 (S1), SA-06 e no cabeçalho de `lembretes_da_live.md`; o e-mail 08 do canônico já tem a pendência.
14. **Finados (02/11).** EM-BF-21 e LV-02 reescritos em tom sóbrio ("Hoje é Finados, um dia de recolhimento para muita gente. Por isso, escrevo curto"), sem emoji, sem exclamação e sem urgência.
15. **Pós-compra e reembolso (item g).** EP-RB-01 tinha "se simplesmente não era para você", que soa como culpa, e tentativa de retenção ("um ajuste pequeno resolve"): reescrito ("a decisão é sua, e eu respeito... não é para mudar o seu pedido"). EP-AB-01: tirado "quando já houve compra que não entregou o que prometeu". PC-D1, PC-D2 e EP-AP-01: "é ele que quebra o padrão" virou "ajuda a quebrar", sem promessa. PC-D3: "culpa por não ter começado" removido. Nenhuma peça promete resultado financeiro.
16. **Condição do preço de lote e escassez.** VL-03: "o próximo valor só é maior se você deixar para depois" removido. UH-01: "ela costuma sair mais cara" removido. VL-02: "não tem prorrogação e não tem exceção" virou `[[CONFIRMAR: sem prorrogação...]]`. FE-01: "Última chamada" fora de assunto e botão. `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` incluído na primeira ocorrência de `carrinho_e_lotes.md` e de `lembretes_da_live.md`.
17. **Placeholders fora do conjunto do guia.** `[[PENDENTE: ordem de entrada]]`, `[[PENDENTE: número de parcelas]]`, `[[PENDENTE: regra...]]`, `[[PENDENTE: produto de entrada N]]`, `[[PENDENTE: prazo Pix]]`, `[[PENDENTE: contagem de alunas]]` etc. viraram `[[CONFIRMAR: ...]]`. `[[LOTE ATUAL]]`, `[[PRÓXIMO LOTE]]` e `[[PREÇO PRÓXIMO LOTE ...]]` viraram `[[CONFIRMAR: nome do lote atual]]`, `[[CONFIRMAR: nome do próximo lote]]` e `[[PREÇO LOTE ...]]` com "(valor do próximo lote)". Os `[[PENDENTE: ...]]` que restam são só os seis do guia.
18. **Repetição (item h).** Reescritas de abertura para nenhum par da mesma série abrir igual: EM-BF-05, 06, 08, 09, 15, 18, 19, 21 e 22 (a série tinha seis aberturas em citação entre aspas); EM-BF-20 (lista de "coisas" como EM-BF-12); SA-05 e SD-05 (duas aberturas "Um evento..."); LV-03-01 a 06 (seis aberturas "{{nome}}, ..."); OB-01 e OB-03 de S1 (quase idênticos); PC-D7 e PC-D14 ("Uma semana." / "Duas semanas dentro."); UH-02 e VL-02 ("Hoje é o último dia"); EP-PX, BL e AB (cinco aberturas "Seu X da Black Próton Vitalícia..."). Assuntos B de SA e SD que repetiam assuntos da série das 07h foram trocados.
19. **Frases "Dra." sem fonte ou em excesso.** EM-BF-05 e EM-BF-13 repetiam a mesma frase da infância: EM-BF-05 virou versão curta, EM-BF-13 abre por outro ângulo.
20. **Dados das pesquisas.** EM-BF-14: "3 em cada 10 pessoas na minha lista" misturava ficha e lista, e omitia o Aulão. Agora: "na ficha de interesse do Clube, 3 em cada 10... No Aulão, quase 7 em cada 10". EM-BF-07: "quatro em cada dez não sabem" ancorado em "Na pesquisa do Aulão". EM-BF-03: "27%" mantido, com a fonte.

### Médios

21. **Abertura genérica.** "Oi, {{nome}}. Tudo bem?" e "Parabéns por ter vindo" (OB-01 e OB-02, nove e-mails) trocados por primeira linha específica.
22. **Superlativo.** "uma condição que eu nunca fiz" (SA-01, OB-01 S2, OB-02 S3) virou "a oferta que o Clube Secreto nunca fez antes". "A melhor parte" (título de LV-03-05) trocado.
23. **Assunto acima de 50 caracteres.** Todos até 50 (verificado por script, com `{{nome}}` contado como 5 letras e placeholder como 12), exceto EM-BF-17 B ("Eu prefiro que você não compre do que compre e não viva", 55): é frase intocável e o assunto A (31) é a versão curta. Assuntos com placeholder de lote devem ser conferidos no envio.
24. **Spam e caixa alta (item b).** Assuntos de LV-03-01 ("🚨 É HOJE...") e LV-03-03 ("🔴 ESTOU AO VIVO...") reescritos sem emoji nem caixa alta; EP-AP-01 sem 🎉 no assunto; 0 emoji em assunto, 0 "!" em assunto. "Última chamada" fora de FE-01 e EP-BL-04. Permanecem, por serem frase da audiência pedida pelo guia, os assuntos com "dinheiro" e "compre" (EM-BF-02, 09, 14, 17, SA-01): recomendo teste de entregabilidade antes de agendar.
25. **Emoji e acessibilidade (item a).** Removidos 🚨 📌 🔗 ⚠️ 💡 💜 🔴 ✅ ☐ e → como bullet. Permanece só "✔" como marcador em listas (apoio, sem sentido próprio). Incluído em cada arquivo o padrão de legibilidade (fonte mínima 16 px, entrelinha 1,5, contraste, botão de texto, link por extenso abaixo do botão, texto alternativo descritivo, nada dependente de cor ou emoji). Os e-mails são só texto; onde o modelo da ferramenta puser logo ou foto, vale o texto alternativo descrito.
26. **Gênero.** Série das 07h, lembretes e carrinho (versão Não-alunas) passaram para texto neutro ("exausta", "preguiçosa", "sozinha", "avisada" removidos); feminino mantido em S1, S2, pós-compra, compra aprovada e na versão Alunas.
27. **Contagem e rótulos.** Cabeçalho de `eventos_de_pagamento.md` (18 para 15); "Vagas abertas" do Desafio citado como "abertura do Clube"; "FEP" removido do cabeçalho de `segmentados_09h.md`; frase "Aula 02" confirmada no manual e `[[CONFIRMAR]]` correspondente retirado de EM-BF-18.
28. **Pós-conversão.** LV-03-06 (as duas versões) passou a dizer o que acontece depois de entrar ("acesso e primeiro passo por e-mail").

### Baixos

29. Datas com dia da semana nas tabelas e títulos (13/10 ter ... 03/11 ter), conferidas com a tabela canônica. "(dia seguinte)", "(quarta)" e similares acrescentados onde faltavam.
30. Notas ao implementador atualizadas (origem de cada número, regra de exclusão, testes A/B, dependências).

## 3. O que ainda depende de decisão (com `[[CONFIRMAR]]` já no texto)

1. Aula de terça de 03/11 (substituída, remarcada ou mantida): OB-02 S1, SA-06, `lembretes_da_live.md`, e-mail 08 do canônico.
2. Lote Especial só para quem está ao vivo (carrinho e lembretes) e, se for verdade, o "lote atual" de 04/11 em diante já é o Primeiro Lote.
3. Garantia, replay, bônus, fechamento, datas de lote, número de parcelas, ordem da trilha, regra de transição para aluna com acesso ativo, quais produtos a aluna já tem, credenciais da Dra., prazo do estorno por Pix, compensação do boleto.
4. S2 (Desafio, Imersão, Aulão) paga como não-aluna? Hoje sim, com `[[CONFIRMAR]]`.
5. O checkout honra o lote e o carrinho para Pix ou boleto gerado antes do fechamento e pago depois (afeta UH-03, FE-01, EP-PX, EP-BL).
6. Horários dos e-mails do dia 03/11 (09h, 19h, 20h, 20h25, 21h09, 22h00), amarrados ao roteiro de `08_live_e_pitch/`.
7. Se a decisão 53 de `12_decisoes_e_pendencias.md` for fechada de outra forma, ajustar o horário dos lembretes (hoje 09h).
8. Dois conjuntos de onboarding existem (`06_emails/onboarding.md` e `13_modelo_dr_joao/email_onboarding.md`): a equipe decide qual vale por segmento. O arquivo de 13 manda usar o de 06 para alunas.

## 4. Fora da minha área, para o responsável

- `13_modelo_dr_joao/email_alunas_captacao.md` usa o botão "RESERVAR MINHA VAGA DE ALUNA", "Reserve a sua vaga" e a palavra "vaga", que a rubrica proíbe quando sugere limite. Não editei.
- `12_decisoes_e_pendencias.md` (decisão 53) cita "lembretes de e-mail às 12h": agora estão às 09h.

## 5. Exceções às checagens duras (justificadas)

- "Elite" e "Cura": aparecem só nos nomes de produto "Workshop Terapeuta de Elite", "Cura da Criança Interior" e "Cura da Escassez Financeira", que fazem parte dos 11 produtos do briefing (`00_ESTRATEGIA_COPY_SENIOR.md`, seção 1) em CL-01 e SA-05. Se a equipe decidir renomear, trocar nos dois arquivos.
- "joao": só em caminhos de arquivo `13_modelo_dr_joao/...` (3 ocorrências), citados para a exclusão 07h x 09h; nenhum nome, link ou termo do Dr. João no texto.
- R$: 3 linhas, todas em "Notas ao implementador" ou em nota marcada "REMOVER ANTES DO ENVIO".

## 6. Checagens duras, resultado final (grep em `06_emails/*.md`)

```
$ travessao/meia-risca (bytes E2 80 94 e E2 80 93) em 06_emails/*.md
  total: 0
$ grep -niE "keila|harmoniza|injet|FEP|zoom|congresso|pithon"
  total: 0
$ grep -n "Elite"  (nome de produto do catalogo, ver excecoes)
carrinho_e_lotes.md:44:✔ Workshop Terapeuta de Elite
segmentados_09h.md:143:Workshop Terapeuta de Elite
$ grep -niE "porta fecha|nunca mais vai ter|ultima chance|vai ganhar|vai manifestar|garantido que|cura|curar"  (so nomes de produto)
carrinho_e_lotes.md:49:✔ Cura da Criança Interior
carrinho_e_lotes.md:52:✔ Cura da Escassez Financeira
segmentados_09h.md:148:Cura da Criança Interior
segmentados_09h.md:151:Cura da Escassez Financeira
$ grep -niE "mensalidade|renovar|renovação"
  total: 0
$ grep -niE "vaga|vagas|cupons"
  total: 0
$ grep -nE "\bpra\b"
  total: 0
$ grep -nwE "TODO|lorem|XXX"
  total: 0
$ grep -nE "@|https?://|wa.me|telefone"
  total: 0
$ grep -niE "sem replay|havera replay|tera replay"
  total: 0
$ grep -n "R$"  (so Notas ao implementador ou NOTA PARA REMOVER)
carrinho_e_lotes.md:365:1. **Escada, só aqui.** ...
lembretes_da_live.md:280: ... NOTA PARA QUEM MONTA, REMOVER ANTES DO ENVIO ...
lembretes_da_live.md:302: ... NOTA PARA QUEM MONTA, REMOVER ANTES DO ENVIO ...
$ placeholders PENDENTE usados (todos do conjunto do guia)
      1 [[PENDENTE: bônus]]
     11 [[PENDENTE: data do lote]]
      8 [[PENDENTE: fechamento]]
     10 [[PENDENTE: garantia]]
      5 [[PENDENTE: replay]]
```

Outras verificações automáticas: 0 emoji em linha de assunto; 0 "!" em assunto; 0 travessão; IDs sem duplicata; todos os caminhos citados existem (`05_whatsapp_api`, `07_listboss_ura_sms/listboss_api_e_email.md`, `08_live_e_pitch/roteiro_live_de_revelacao.md`, `10_pos_compra/certificado_manual_nps.md`, `13_modelo_dr_joao/email_alunas_captacao.md`, `01_PESQUISAS_INSIGHTS.md`); um botão por e-mail em todos, exceto EP-RB-01, EP-RB-02 e FE-02 (sem botão por desenho). Frases intocáveis literais presentes onde usadas: "Reset. Chega de migalhas." (1), "Não é quem nós somos. É quem nós estamos." (3), "Eu prefiro que você não compre do que compre e não viva." (8), "Não trave o processo." (3), "Nunca mais eu deixo de investir em mim." (2), "Se você não investe em você, o resultado da sua vida sempre será zero." (1 em SD-02).
