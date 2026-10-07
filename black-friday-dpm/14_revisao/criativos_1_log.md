# Log de revisão: criativos 1

Revisor: copy de tráfego pago e criativos. Rubrica aplicada: `14_revisao/RUBRICA.md`. Fontes lidas por inteiro antes: rubrica, `00_ESTRATEGIA_COPY_SENIOR.md`, `01_PESQUISAS_INSIGHTS.md`, `02_GUIA_DE_COPY.md`. Números recalculados contra `aulao.csv` (7.323 respostas) e contra a planilha do diagnóstico do Desafio (4.032 respostas) e o dossiê de audiência.

## Arquivos revisados (editados no lugar, IDs e estrutura mantidos)

1. `04_criativos/captacao_estaticos.md` (385 linhas)
2. `04_criativos/legendas_captacao.md` (184 linhas)
3. `04_criativos/remarketing_captacao.md` (326 linhas)
4. `04_criativos/antecipacao_e_aquecimento.md` (258 linhas)

Lido por inteiro, linha a linha: 1.153 linhas depois da edição (as versões originais tinham 383, 164, 307 e 241 linhas). Peças revisadas: 42 anúncios CAP + 24 anúncios RMK + 15 criativos AQC + 22 legendas (10 LEG-CAP, 6 LEG-RMK, 6 LEG-AQC) = 103 peças, mais o calendário de 15 dias.

## Defeitos achados e o que foi feito

### Bloqueantes

1. **Antes e depois (política Meta).** CAP-COBR-01 pedia imagem dividida ao meio, "sorrindo de um lado, rosto cansado do outro". Trocada por uma foto única de pessoa de costas, sem rosto. CAP-IDEN-03 (duas silhuetas, uma com seta circular e outra de pé) virou seta circular e linha reta, sem pessoas. RMK-VOLT-03 (duas silhuetas ligadas por seta, "eu de hoje e de amanhã") virou calendário. AQC-PERF-03 (espelho com "rosto cansado") virou espelho sem rosto.
2. **Atributos pessoais afirmados (política Meta).** Reescritas as headlines e apoios que diziam o que a pessoa é, sente ou vive: CAP-TERM-03, TERM-04, AUTO-03, COBR-01 a 05, TRAU-02, TRAU-03, TRAU-04, CULP-01, CULP-03, NSEI-02, NSEI-03, NEUT-03, NEUT-04; RMK-IMPL-01, JA-03, JA-06, DUV-02; AQC-PERF-01 a 05 (os "sinais" deixaram de ser "você sempre volta ao mesmo patamar, você tem medo de ter mais" e passaram a "sinais comuns", sem afirmar nada sobre quem lê). Padrões adotados: primeira pessoa da audiência ("Eu sei o que fazer. E não faço."), pergunta sobre o fenômeno ("Por que o dinheiro some quando entra um extra?"), infinitivo ("Dar conta de tudo. Menos de descansar sem culpa."), ou terceira pessoa geral ("Quem trava não trava por acaso.").
3. **Rastreio revelado no remarketing (política Meta, privacidade).** RMK-VOLT-01 a 04 diziam "você chegou", "você fechou essa aba", "você abriu essa página", "você quase se inscreveu". Reescritos para falar do assunto, não da pessoa que voltou.
4. **Fato inventado da Dra.** RMK-IMPL-04: "Já pensou em desistir de novo? Eu também pensei. A diferença foi decidir uma última vez." Não está em nenhuma fonte e flerta com ideação de desistência. Trocado por "Desistir de novo ou decidir uma vez?", sem biografia inventada.
5. **Afirmação sem fonte em legenda.** LEG-AQC-05: "a maioria dessas pessoas começou exatamente onde você está: sem saber o que travava". Trocada pelo dado real (40% de mais de 7 mil responderam "não sei exatamente o que está me impedindo"). AQC-TERM-01 dizia "um termostato não mede o clima" (tecnicamente falso); reescrita.
6. **Honestidade do 51,9%.** Em todo o pacote o número vinha como "das pessoas que responderam as pesquisas" ou "nas minhas pesquisas", com `[[CONFIRMAR: origem do 51,9%]]` pendurado. Ajustado para a redação da rubrica: "das pessoas que responderam à pesquisa de presença do Desafio" (CAP-TERM-02, LEG-CAP-02, bloco 1 do aquecimento, LEG-AQC-02, notas). Nunca chamado de "Aulão". O `[[CONFIRMAR]]` foi removido porque a rubrica já fixou a atribuição. O dossiê traz 51,9% de uma enquete de presença; não há n, então o texto diz "das pessoas que responderam", nunca "das pessoas" em geral.
7. **Replay afirmado.** RMK-DATA-01 dizia "a revelação acontece uma única vez". Reescrito sem afirmar nem negar (`[[PENDENTE: replay]]` na nota).
8. **CTA incoerente com a página.** Quase 20 anúncios traziam "Fazer o diagnóstico" / "Faça o diagnóstico" como se ele estivesse antes do clique, mas a captura A pede cadastro e o diagnóstico abre na página de obrigado. Trocados os CTAs por "Descobrir meu padrão" (texto do botão da captura A), "Reservar meu lugar", "Concluir meu cadastro" e "Saiba mais", e os apoios passaram a dizer "cadastre-se e faça o diagnóstico" ou "depois do cadastro". O `[[CONFIRMAR: diagnóstico disponível na captura ou obrigado]]` foi resolvido pela leitura de `03_paginas/captura_A_diagnostico_primeiro.md` e `obrigado_e_pesquisa.md` e removido.

### Altos

9. **Gênero no tráfego frio e morno.** Removidos "sozinho(a)", "sozinha(o)", "indisciplinada(o)", "você não está sozinho(a)" (CAP-AUTO-02, RMK-JA-02, JA-04, VOLT-02, LEG-RMK-04, LEG-AQC-05) e "ficar parada" (título do bloco 2 do aquecimento, notas, RMK-DIN-02): agora "ficar no mesmo lugar". Os rótulos internos "funcional e exausta", "casada" ficaram só nos campos de segmentação, que não vão para o anúncio.
10. **Comprimento das headlines.** Regra explícita criada no cabeçalho: no máximo 60 caracteres e 2 linhas (a 64 px em 1080 cabem cerca de 30 por linha). Havia headlines de 104 (CAP-TERM-06), 68 (NSEI-02, NEUT-04), 66, 63 e 62 caracteres. Todas ajustadas. Resultado medido: CAP maior headline 59, RMK 57, AQC 60. CAP-TERM-06 (frase intocável de 98 caracteres): a headline virou "Melhorar de vida não é o mesmo que mudar de vida." e a frase literal da Dra. foi para o apoio, entre aspas.
11. **Originalidade.** CAP-NEUT-02 repetia literalmente AQC-CONTA-03 ("52 segundas por ano. Quantas você recomeçou?"); agora "Segunda-feira não precisa ser mais um recomeço." CAP-TERM-04 e CAP-NEUT-03 usavam o mesmo pivô "o difícil é ficar"; TERM-04 virou "Subir o patamar é uma coisa. Firmar lá é outra." RMK-IMPL-05 ("O que trava é ficar") virou "Conhecimento sobra. Continuidade falta." CAP-TERM-01 e TERM-02 abriam quase igual ("entrou dinheiro... apareceu uma conta"); agora "Chegou um dinheiro extra. A conta chegou junto." e "51,9% disseram: ...". AQC-TERM-02 ("Sobrou um dinheiro? Apareceu um gasto.") também foi diferenciada. As 42 aberturas de CAP não repetem as três primeiras palavras. O fecho idêntico das 10 legendas ("Clique em Saiba mais e reserve a sua vaga, sem custo") foi variado.
12. **Números desalinhados com a fonte.** (a) LEG-CAP-05 e 06 diziam "o que mais tirava a paz" para 453 e 476 de 4.032 (11,2% e 11,8%): eram a 5ª e a 3ª opção; agora "apontaram ... como o que impede a paz". (b) LEG-CAP-01 listava "Autossabotagem" como resposta à pergunta de dinheiro, mas ela é da pergunta de paz; trocada pela terceira resposta real da pergunta de dinheiro (crenças e bloqueios, 9%), com os percentuais 40%, 22% e 9% conferidos no CSV. (c) LEG-CAP-03 dizia que "parar de se sabotar" era "o que mais queriam" e logo depois que a resposta número 1 era outra; agora 27% e a ordem correta (32% confiar). (d) LEG-RMK-03 dizia "mais de 1 em cada 10 ... me responderam" misturando ficha (12%) e Aulão (8%); trocado pelo diagnóstico do Desafio (617 de 4.032 = 15%). (e) CAP-TERM-04 citava "13% a 18%" para "confortável querendo mais"; a ficha dá 13%, ficou 13%. (f) CAP-CULP-05 atribuía 20% (solidão) a "culpa de querer mais"; removido. (g) LEG-RMK-04 usava a frase da pergunta P6; a mais comum (1.040) é a da P8 ("Já comprei outras coisas antes e não funcionaram"), agora literal.
13. **Caminhos de arquivo inexistentes.** Os cabeçalhos citavam `desafio_copys_criativos_...md`, `desafio_legenda_...md` e `aulao_criativos_...md`, que não existem no repositório. Passaram a descrever a fonte em texto ("Criativos de remarketing do Desafio, Ad 1 a 16"). Os demais caminhos (`lembretes_da_live_por_dia.md`, `remarketing_captacao.md`, `antecipacao_e_aquecimento.md`, `vendas_vitalicia.md`, `01_PESQUISAS_INSIGHTS.md`, `captacao_estaticos.md`, `08_live_e_pitch`, `05_whatsapp_api`, `06_emails`) foram conferidos e existem.
14. **"Vaga".** Como a live não tem limite, "reservar minha vaga" sugere escassez. Todos os CTAs e apoios passaram para "lugar" (alinhado ao botão e à microcopy da página: "Reservando seu lugar"), e a nota 5 do arquivo de estáticos define que reservar é fazer o cadastro gratuito. Nenhuma ocorrência de "últimas vagas", "vagas acabando", "vagas sumindo" (nem em nota).
15. **Contagem de dias em texto.** LEG-AQC-06 dizia "Faltam 7 dias"; agora data fixa ("Terça, 03/11").
16. **Frase intocável.** Conferidas literais: CAP-TERM-06 (no apoio), AUTO-06, COBR-06, TRAU-06, CULP-06, IDEN-02, IDEN-04; RMK-IMPL-06; LEG-CAP-09 e LEG-RMK-03. Em CAP-TERM-06 o "mil reais" é parte da frase da Dra., não preço de produto.

### Médios

17. **Primeira linha das legendas.** Todas as legendas agora abrem com até 125 caracteres (corte do "ver mais"), com número real ou a frase da audiência (verificado por script). LEG-CAP-02, LEG-CAP-07, LEG-RMK-06 e LEG-AQC-06 estavam acima do corte e foram refeitas; LEG-AQC-01 abria com "Hoje abre uma coisa que eu venho construindo há anos" (vago e sem fonte), refeita.
18. **Frame 0 em todos.** Os 42 CAP, 24 RMK e 15 AQC têm FRAME 0 (contagem conferida). As 22 legendas ganharam a linha "Frame 0 do par" apontando a arte correspondente.
19. **Cor como sentido.** O pacote especificava "amarelo" como cor definitiva e sem alternativa. Declarada paleta de trabalho provisória (a identidade visual não existe) e regra de acessibilidade: a palavra destacada também fica maior ou em negrito. "Circulada em vermelho" (CAP-TRAU-03) virou "traço grosso".
20. **"Cura".** "Não é terapia nem promessa de cura" (várias peças) caía na checagem dura 4; trocado por "não é terapia nem tratamento". "Fim da autossabotagem" e cura aparecem só em negação nas notas, sem a palavra proibida.
21. **Termostato Invisível.** Garantida a definição de uma frase em todo anúncio em que ele é o centro (TERM-01 a 06; antes faltava em TERM-02, 03 e 06).
22. **Calendário e contagens.** Dias da semana conferidos contra a tabela canônica (13/10 terça a 27/10 terça); 15 criativos, 6 legendas, cada legenda ligada a um dia; 24 RMK + 6 LEG-RMK; 42 CAP, conforme o cabeçalho (6+6+6+6+6+4+4+4 = 42). Tabela de camadas de remarketing: R1 listava RMK-VOLT-04, que é R4; corrigida.
23. **Pontos de apoio sem fonte.** RMK-JA-03 e JA-06 afirmavam o que a live apresenta; JA-06 ganhou `[[CONFIRMAR: trilha de entrada apresentada na live]]`. RMK-DUV-03 dizia "transformou dor em método" (inferência); trocado por fato do guia ("Da periferia do interior de SP a mais de 70 mil alunos").

### Baixos

24. "Eu sei como é" mantido em RMK-IMPL-01 (voz da Dra., sem biografia). CTAs de botão: para Meta Ads foi registrado o uso do botão nativo "Saiba mais" ou "Cadastre-se", com o texto customizado só na arte e na página.
25. Legendas mantêm "pra" (voz da Dra. em texto de anúncio, permitido pelo guia, regra 4); "para" obrigatório vale para WhatsApp e API, que não são desta área. Nas notas do aquecimento ficou registrado que a reutilização em WhatsApp deve trocar por "para" e usar data fixa.

## O que ainda depende de decisão (com marcador já no arquivo)

- `[[FOTO DRA]]` (15 ocorrências) e `[[LINK: página de captura com diagnóstico]]`: bloqueiam a publicação.
- `[[CONFIRMAR: nome do instrumento aceito pela conta de anúncios; alternativa: "teste dos 5 padrões"]]` (cabeçalho de captacao_estaticos): o termo "diagnóstico" pode ser lido pela Meta como saúde; decidir se mantém.
- `[[CONFIRMAR: trilha de entrada apresentada na live]]` (RMK-IMPL-03 e JA-06) e `[[CONFIRMAR: parcelamento anunciado na live]]` (RMK-DIN-01, LEG-RMK-05).
- `[[PENDENTE: replay]]`: nenhuma peça afirma nem nega; decidir o rodapé.
- Autorização de imagem para a foto de infância (RMK-DUV-03).
- Natureza da ficha de 893 respostas (interesse ou alunas): o pacote evita citá-la em texto público; permanece nos campos internos de segmentação.
- O texto "eu vou te pedir" (AQC-CONTA-01 e LEG-AQC-03) depende de a live pedir o número; nota 2 do aquecimento.
- Fora da minha área, mas dependente destes criativos: a página `obrigado_e_pesquisa.md` diz que "a live só acontece uma vez" (linha 73), o que afirma não haver replay; deve ser revisto por quem cuida de `03_paginas`.

## Contagens finais

| Item | Valor |
|---|---|
| Anúncios CAP | 42 (TERM 6, AUTO 6, COBR 6, TRAU 6, CULP 6, NSEI 4, NEUT 4, IDEN 4), IDs únicos e sequenciais |
| Anúncios RMK | 24 (IMPL 6, JA 6, VOLT 4, DUV 3, DIN 3, DATA 2), IDs únicos e sequenciais |
| Criativos AQC | 15 (TERM 5, CONTA 5, PERF 5), IDs únicos e sequenciais |
| Legendas | 22 (LEG-CAP 10, LEG-RMK 6, LEG-AQC 6), IDs únicos e sequenciais |
| Maior headline | CAP 59, RMK 57, AQC 60 caracteres (limite 60) |
| Linhas lidas | 1.153 (versão final), mais as versões originais de 383, 164, 307 e 241 |

## Checagens duras (rodadas nos 4 arquivos, depois da última edição)

| Checagem | captacao_estaticos | legendas_captacao | remarketing_captacao | antecipacao_e_aquecimento |
|---|---|---|---|---|
| Travessão e meia-risca (U+2014, U+2013) | 0 | 0 | 0 | 0 |
| Keila, Dr. João, harmonização, injetáveis, FEP, Elite, Zoom, congresso, Grabovoi | 0 | 0 | 0 | 0 |
| R$, parcela, "Nx de", "N reais" (fora da frase intocável) | 0 | 0 | 0 | 0 (a palavra "parcelamento" aparece 4 vezes em RMK, sem valor, sob `[[CONFIRMAR]]`) |
| porta fecha, nunca mais vai ter, última chance, vai ganhar, vai manifestar, cura, curar, garantido, mensalidade, renova | 0 | 0 | 0 | 0 |
| últimas vagas, vagas acabando, vagas sumindo, cupons, uma única vez, sem replay | 0 | 0 | 0 | 0 |
| "sozinho(a)", "(a)", "(o)" como flexão de gênero | 0 | 0 | 0 | 0 |
| TODO, lorem, XXX | 0 | 0 | 0 | 0 |
| Headline acima de 60 caracteres | 0 | n/a | 0 | 0 |
| Primeira linha de legenda acima de 125 caracteres | n/a | 0 | 0 | 0 |
| IDs duplicados ou fora de sequência | 0 | 0 | 0 | 0 |
| Caminhos `.md` citados inexistentes | 0 | 0 | 0 | 0 |

Observações sobre as buscas: o padrão "(a)" aparece 2 vezes como letra de lista em "Testes A/B sugeridos: (a) ..." (captacao_estaticos e remarketing), não como flexão de gênero. A expressão "antes e depois" aparece 3 vezes, todas em regras que a proíbem (cabeçalhos de política Meta). Placeholders usados, todos do conjunto do guia: `[[FOTO DRA]]` (15), `[[CONFIRMAR: ...]]` (7), `[[PENDENTE: replay]]` (4, em notas), `[[LINK: ...]]` (1). Nenhum preço, nenhum lote, nenhuma garantia, nenhum bônus e nenhuma afirmação sobre replay.
