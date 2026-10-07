# QC independente: 03_paginas (14 arquivos)

Revisor de QC (não escrevi nem revisei estas peças antes). Fontes lidas por inteiro: `RUBRICA.md`, `00_ESTRATEGIA_COPY_SENIOR.md`, `01_PESQUISAS_INSIGHTS.md`, `02_GUIA_DE_COPY.md`, `16_MAPA_DE_LINKS.md` e o log anterior `paginas_log.md` (decisões dele mantidas). Números conferidos contra `aulao.csv` (40,4% e 39,6% "não sei", 21,5% procrastino, 67,6% sem dinheiro, 44,2% há menos de 1 mês: todos batem). Edição no lugar, IDs e estrutura preservados.

## 1. O que li

Li por inteiro, linha por linha, os 14 arquivos: 4.244 linhas antes das edições e 4.550 depois (as 306 linhas novas são sobretudo as 14 tabelas "Links desta peça" e as linhas "Leva para"). Não houve arquivo que eu não conseguisse ler. Não li imagens nem artes (não existem nesta pasta). Peças avaliadas: 20 (captura A, B, C, D; diagnóstico em duas peças, perguntas com pontuação e devolutivas; lista de espera em três, página, e-mail e WhatsApp; obrigado em três, página, fala do vídeo e pesquisa; vendas; onboarding; cupom das alunas; tela da live; banner do checkout; verificação de números em duas, página e mensagem fixada; VSL). As 20 passaram de 9 em todos os critérios depois das edições, exceto os itens listados na seção 5, que dependem de decisão da equipe.

## 2. Notas antes e depois (só o que mudou)

Critérios: (a) primeira linha, (b) voz, (c) consciência, (d) identidade, (e) objeção pelo mecanismo, (f) CTA e link, (g) compliance, (h) formato, (i) ritmo, (j) integridade.

| Peça | Critério | Antes | Depois | Correção |
|---|---|---|---|---|
| Captura A | f | 6 | 9 | Botões sem destino e `[[LINK]]` genéricos ("página da live", "captura_C alunas", "lista_de_espera", "Política de Privacidade"). Todos viraram token canônico com ID de bloco e linha "Leva para" |
| Captura A | j | 8 | 9 | Estado 4 da tarja (live em andamento, com link) contradizia "fora do ar depois das 20h". Agora: tarja com link até o fim da live (21h56), depois vira lista de espera. "Vaga inventada" trocada por "lugares" |
| Captura B | g | 8 | 9 | Headline B3 "a última vez que você entra" soa como porta que se fecha (rubrica 2.4). Reescrita: "a primeira vez que você entra sem ter de sair de novo"; nota 2 ajustada |
| Captura B | f | 6 | 9 | Tokens genéricos, FAQ e botões sem destino. Link do diagnóstico no bloco 05 apontava para antes do cadastro: trocado por "Leva para: formulário do bloco 01" |
| Captura C | f | 6 | 9 | Tokens genéricos, suporte e página das alunas sem canal e ID; botão leva para obrigado e diagnóstico (versão aluna) |
| Captura D | c | 7 | 9 | Bloco 04 ("eu perguntei... a maioria respondeu nada") aparecia para todas as origens, mas a fonte é a Aula 03 do Desafio. Agora só na origem DESAFIO. Headlines D3 e D4 marcadas "só origem DESAFIO". "Saiu de cada noite" virou "de cada aula" (Imersão e Aulão não têm noites) |
| Captura D | b | 8 | 9 | "Você não fez sozinha" em página de base mista: "sozinha(o)" |
| Captura D | f | 6 | 9 | Tokens e "Leva para" em todos os botões |
| Diagnóstico (pontuação) | j | 7 | 9 | Tetos T 11, A 16, C 14, R 15, G 18 conferidos recalculando a tabela: batem. Defeitos achados: desempate "usar D3" sem dizer como (agora: vence quem tem mais pontos brutos na D3, depois na D2); regra 5 não dizia se a soma de 6 era por perfil ou total (agora: soma dos 5 perfis, juntos); cabeçalho da devolutiva 6 dizia só "não sei", mas a regra 5 também a dispara por pontuação baixa (alinhado) |
| Diagnóstico (pontuação) | g | 8 | 9 | Consentimento dizia "montar o resultado e preparar a live", mas o perfil vira `{{perfil}}` em mensagens, comercial e trilha (nota 5). Finalidade ampliada e direito de exclusão remetido à política |
| Diagnóstico (pontuação) | f | 5 | 9 | Botões de resultado sem destino por segmento (grupo geral, alunas, viveu o método), calendário, refazer. Compartilhamento sem link |
| Diagnóstico (devolutivas) | c | 8 | 9 | Perfil 5 citava "nas aulas do Desafio" para toda a base: "nas aulas" |
| Diagnóstico (devolutivas) | g | 8 | 9 | Perfil 2 afirmava "que é onde a autossabotagem age": "que costuma ser onde esse padrão age" |
| Diagnóstico (devolutivas) | b | 8 | 9 | Perfil 3, item 2: "decisão para você não se cobrar de novo" confuso. Reescrito |
| Diagnóstico (textos de apoio) | j | 8 | 9 | A página de obrigado (variante D) promete "você já fez um teste parecido", mas o diagnóstico não tinha essa tela. Incluída em Parte 8 |
| Lista de espera (página) | g | 8 | 9 | "Não garante preço nem vaga" (termo a evitar): "lugar". Consentimento sem como sair: acrescentado |
| Lista de espera (página) | j | 8 | 9 | "Momento: depois das 20h" e "Estado A: live em andamento" conflitam com a captura que só vira lista no fim da live. Alinhado a 21h56 |
| Lista de espera (página) | f | 5 | 9 | Tokens genéricos ("grupo de avisos", "página do degrau", "pagina_de_vendas") trocados; degrau e rodapé com ID |
| Lista de espera (e-mail) | g | 8 | 9 | Sem instrução de saída. Incluída linha de descadastro |
| Lista de espera (e-mail e WhatsApp) | f | 5 | 9 | Botão do e-mail e `{{link}}` do WhatsApp sem token. Viraram `diagnóstico` com canal `email` e `api` |
| Obrigado (página) | j | 7 | 9 | Citação no topo ("quem não entra não recebe o link") desmentia o próprio texto do passo 1 e os lembretes por e-mail (o log anterior corrigiu o corpo, não a citação). Reescrita |
| Obrigado (página) | g | 8 | 9 | "Resultado só é usado para preparar a live" não cobria mensagens e trilha. Ampliado |
| Obrigado (página) | f | 5 | 9 | Terceiro botão "Me lembrar no WhatsApp" sem destino possível (o número já recebe os avisos pelo cadastro): removido, com explicação. Grupo agora por segmento (geral, alunas, viveu o método) |
| Obrigado (pesquisa) | g | 8 | 9 | Aviso da parte A ampliado para finalidade real. "Honestamente" (palavra-tell, rubrica 4.10) em nota trocada |
| Obrigado (pesquisa) | f | 5 | 9 | Botões de transição com destino ("Leva para") |
| Vendas | f | 5 | 9 | Quatro botões de compra com `[[LINK: checkout por lote e segmento]]` ou nenhum. Agora checkout S1/S3 do lote, com regra de troca ESP, 1L, UL e o S2 (quem viveu o método) descrita; tabela de links por estado |
| Vendas | j | 7 | 9 | Não refletia os horários da live (preço 21h09, carrinho 21h28). Momento, tela de espera, tabela de estados e o botão ("o carrinho abre em instantes") ajustados. S2 acrescentado à regra de versão. "Vagas" em notas trocado por "lugares" |
| Vendas | c | 8 | 9 | Bloco 08 dizia "Eu sei o que a maioria responde: nada" para quem nunca fez o Desafio: "Quando eu fiz essa pergunta no Desafio, a maioria respondeu: nada" |
| Vendas | i | 8 | 9 | "Eu prefiro que você não compre do que compre e não viva" aparecia duas vezes na página (blocos 07 e 10). No bloco 10 virou "Eu quero você praticando, não só comprando" |
| Vendas | j | 8 | 9 | Título honorário escrito de outro jeito que nas capturas e no guia. Padronizado |
| Onboarding | f | 5 | 9 | Tokens genéricos ("grupo, por segmento", "primeira aula", "suporte", "formulário de depoimento") trocados; todos os botões com "Leva para" |
| Onboarding | j | 8 | 9 | Momento "depois de 20h" virou 21h28 (carrinho aberto) |
| Cupom das alunas | f | 5 | 9 | 14 tokens trocados, checkout S1 com troca de lote, botões sem destino com "Leva para" |
| Cupom das alunas | j | 7 | 9 | "Valor depois de 20h" virou 21h09; botão de compra só liga às 21h28 |
| Cupom das alunas | g | 8 | 9 | Microcopy sem como sair dos avisos: acrescentado |
| Tela da live | j | 6 | 9 | Nota ainda dizia que o nome do arquivo guardava termo antigo (o arquivo já se chama `tela_countdown_live.md`): removida. `[[CONFIRMAR: momento da abertura do carrinho]]` resolvido: 21h28; tabela de estados e FAQ ("A condição só é revelada no meio da live", impreciso: oferta 20h51, valor 21h09) corrigidos sem prometer o minuto em público |
| Tela da live | f | 5 | 9 | Tokens genéricos e botão "Me avisar no WhatsApp" sem destino (trocado por entrar no grupo da live) |
| Banner do checkout | f | 6 | 9 | Seis versões sem identificar o checkout onde entram; cada uma ganhou `checkout S1/S3-ESP, 1L, UL`. Suporte com token |
| Banner do checkout | j | 8 | 9 | "Momento: depois das 20h" virou 21h28 |
| Verificação de números | f | 5 | 9 | Botões e `{{link_verificacao}}` em três canais (e-mail, grupo, compra aprovada) viraram tokens com canal `email`, `wpp`, `api` |
| VSL | f | 3 | 9 | Zero tokens; o botão leva agora a obrigado e diagnóstico, com ID |

Peças sem alteração de nota (já em 9 ou mais): fala do vídeo do obrigado; mensagem fixada do grupo (só o link foi tokenizado).

## 3. Tokens de link (formato `[[LINK: destino | canal | ID]]`)

Total no corpo das páginas: **144** (mais 138 repetidos na tabela "Links desta peça" de cada arquivo, escritos com `\|`). Os 14 arquivos têm a tabela ao final. Por canal: `pagina` 136, `wpp` 3, `email` 3, `api` 2. Fora do padrão: 0 (a única ocorrência literal "[[LINK: destino | canal | ID da peça]]" é a explicação do formato na captura A).

Por destino: privacidade 18; diagnóstico 13; live YouTube 12; suporte WhatsApp 12; grupo geral 9; termos 9; calendário 7; checkout S1-ESP 7; obrigado e diagnóstico 6; lista de espera 6; página das alunas 6; página de vendas 6; verificação de números 5; checkout S3-ESP 5; grupo alunas 3; captura C 3; área de membros 3; grupo viveu o método 2; degrau de entrada 2; captura A 1; captura D 1; grupo vitalícia 1; tutorial de acesso 1; reembolso 1; depoimento 1; checkout S1-1L 1; S1-UL 1; S3-1L 1; S3-UL 1.

Por arquivo (corpo): banner 7; captura A 8; B 8; C 8; D 6; diagnóstico 9; lista 12; obrigado 16; onboarding 14; cupom 13; vendas 15; tela da live 18; verificação 9; VSL 1.

Regras aplicadas: botão de formulário leva para `obrigado e diagnóstico`; botões repetidos de uma captura levam ao formulário do bloco 01 (âncora, sem token novo); checkout por lote e segmento com troca ESP, 1L, UL (S2 usa o banner e o preço de não-aluna); nenhum link na primeira abertura de comercial, em acolhimento ou em URA (essas peças não estão nesta área). Todo botão tem "Leva para" ou token na mesma linha.

## 4. Pendências de decisão (já marcadas no texto)

Mantidas do log anterior: degrau de entrada; replay; garantia e bônus; Lote Especial só ao vivo; regra de migração (tempo restante, quem já tem algum dos 11, acesso encerrado); preço avulso e parcelamento; catálogo ("tudo o que a Dra. criou"); comparação com mensalidade; ordem de entrada e primeiro passo do ciclo 1; definições dos 5 perfis; descrições oficiais dos produtos; mídia (foto, depoimentos, vídeo); jurídico (reconhecimento de aluna por e-mail, CDC, guarda de consultas); CVV 188; Q10.

Novas desta revisão:
1. **Destinos sem nome na seção 1 do 16_MAPA_DE_LINKS** (usei nome descritivo e listo para inclusão): `área de membros` (Próton Flix), `tutorial de acesso`, `degrau de entrada` (só existe se o degrau for decidido), `verificação de números`. O canal `pagina` (links dentro de páginas) também não está na seção 2 do mapa, e o `checkout S2-*` aparece só nas tabelas.
2. **B3 reescrita** ("a primeira vez que você entra sem ter de sair de novo"): compliance precisa aprovar.
3. **Horários 20h51 (oferta), 21h09 (preço), 21h28 (carrinho) e 21h56 (fim)** entram nas páginas internas (vendas, cupom, tela da live, onboarding, banner). O público não recebe o minuto. Conferir com `08_live_e_pitch`.
4. **Limite de 6 pontos** do diagnóstico e normalização: seguem para teste com 30 a 50 pessoas (`[[CONFIRMAR]]` já no texto).
5. **Botão "Me lembrar no WhatsApp"** removido do obrigado e da tela da live: confirmar que o cadastro com número já dispara os lembretes.
6. **S2 (quem viveu o método)**: usa captura D, preço de não-aluna e checkout S2. A regra "paga como não-aluna" está só no mapa; manter a página de vendas com a tag S2 até decisão contrária.

## 5. Observações para outras áreas (não editei)

- `12_decisoes_e_pendencias.md`, decisão 54, ainda diz que o arquivo tem nome com termo proibido: o arquivo já se chama `tela_countdown_live.md`. Item para encerrar.
- `14_revisao/paginas_log.md` (log anterior), bloco 1.6 e pendência 12: obsoletos pelo mesmo motivo; deixei como histórico.
- `16_MAPA_DE_LINKS.md`: incluir os destinos e o canal da pendência 1 acima; seção 5 (inventário) deve contar 144 tokens nas páginas.
- Áreas de WhatsApp e e-mail do dia da live: o link da tela da live nos disparos já está no formato (`live YouTube | wpp` e `| email`, ID `live-dia`).

## 6. Checagens duras (pasta `03_paginas`, depois das edições)

```
1) travessão (U+2014) e meia-risca (U+2013):                          0
2) Keila|Pithon|Quaresma|harmoniza|injet|FEP|congresso:               0
2b) "Zoom" (sem diferenciar maiúsculas):                              0 (texto e nomes de arquivo)
2c) "Elite" fora de "Workshop Terapeuta de Elite":                     0
3) "R$" em texto público pré-live: 0 (restam só faixas de renda das perguntas Q6, faixas de
   pesquisa e notas ao implementador marcadas "nunca no texto público" ou "remover antes de publicar")
4) "porta fecha", "nunca mais vai ter", "última chance de ter acesso
   vitalício", "vai ganhar", "vai manifestar", "garantido que a
   autossabotagem acaba", "a autossabotagem acaba", "últimas vagas",
   "vagas acabando", "cupons limitados":                               0
4b) "vaga(s)" como palavra:                                           0
4c) "cura/curar" fora de "Cura da Criança Interior" e
    "Cura da Escassez Financeira":                                    0
4d) "renovar", "mensalidade" fora de [[CONFIRMAR: comparação com mensalidade]]: 0
5) "pra" fora da fala da Dra. (roteiro do vídeo), de citações da
   regra do guia e da headline antiga citada na tabela "o que mudou":  0 em disparos
6) TODO|XXX|lorem:                                                    0 (um falso positivo: "MÉTODO")
6b) tokens [[LINK]] fora do padrão `destino | canal | ID`:             0
6c) todo token do corpo aparece na tabela da peça:                    sim (checado por script)
7) "Lote Especial" com [[CONFIRMAR: Lote Especial só para quem está
   ao vivo]] na primeira ocorrência de cada arquivo que o cita:       5 de 5
8) caminhos .md citados que não existem:                              0
9) e-mail, telefone, URL, login, senha reais:                          0 (só os exemplos seunome@email.com
   e (11) 90000-0000; CNPJ do Instituto vem das fontes)
```

WhatsApp e API (rubrica 2.5): `lista_de_espera.md` (mensagem individual) e `verificacao_de_numeros.md` (mensagem fixada) seguem "para", linha em branco entre linhas, `*negrito*`, link em linha própria, rodapé SAIR (lista), até 12 linhas, termina em pergunta (lista) ou CTA (fixada). Frases intocáveis do guia conferidas: literais em todas as ocorrências.
