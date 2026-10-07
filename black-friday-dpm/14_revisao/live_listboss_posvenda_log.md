# Log de revisão: live, ListBoss/URA/SMS e pós-venda

Revisor: live, pitch e operação de mensagens. Data da revisão: 07/10/2026. Rubrica: `14_revisao/RUBRICA.md`. Fontes lidas por inteiro antes de editar: rubrica, `00_ESTRATEGIA_COPY_SENIOR.md`, `01_PESQUISAS_INSIGHTS.md`, `02_GUIA_DE_COPY.md`. Cruzamentos feitos: `09_comercial_datacrazy/playbook_do_dia_da_live.md` e `quebra_de_objecoes.md`, `05_whatsapp_api/cronograma_de_disparos.md` e `dia_da_live_03_11.md`, `06_emails/lembretes_da_live.md`, `eventos_de_pagamento.md`, `pos_compra_e_trilha.md`, e o CSV do Aulão (40% de "não sei exatamente o que está me impedindo" confere: 2.957 de 7.323 = 40,4% e 39,6%).

## 1. Arquivos revisados (8 arquivos, 2.476 linhas, todas lidas)

O pedido falava em 9 arquivos; as três pastas têm 8 (2 em `07_listboss_ura_sms`, 4 em `08_live_e_pitch`, 2 em `10_pos_compra`). Nenhum arquivo foi deixado de fora.

| Arquivo | Linhas |
|---|---|
| `07_listboss_ura_sms/listboss_api_e_email.md` | 628 |
| `07_listboss_ura_sms/ura_e_sms.md` | 132 |
| `08_live_e_pitch/roteiro_live_de_revelacao.md` | 461 |
| `08_live_e_pitch/pitch_e_ancoragem.md` | 278 |
| `08_live_e_pitch/bonus_15_minutos_e_escassez.md` | 188 |
| `08_live_e_pitch/slides_da_live.md` | 346 |
| `10_pos_compra/certificado_manual_nps.md` | 283 |
| `10_pos_compra/descricao_youtube_e_capas.md` | 160 |

Mensagens lidas e conferidas: 27 mensagens de API, 27 assuntos de e-mail, 4 roteiros de URA, 8 SMS, 17 blocos de live mais o bloco 0, 8 partes de pitch, 46 slides mais 4 de reserva, 4 contagens de bônus, 1 certificado, 1 manual (capa e 9 páginas), 2 formulários NPS, 2 e-mails de NPS, 1 e-mail de certificado, 1 título com 3 alternativas, 2 descrições, 3 capas, 4 fixados de chat.

## 2. Defeitos achados e o que foi feito

### Bloqueantes (12)

1. **Garantia afirmada sem placeholder.** Roteiro (bloco 13), pitch (parte 6) e slide 39 diziam "eu devolvo, sem formulário difícil" e o roteiro citava os 7 dias do Clube em voz. Agora cada fala é `[[PENDENTE: garantia]]` e a frase de tom só entra se a garantia for confirmada; os 7 dias do Clube ficaram só nas Notas ao implementador.
2. **Replay afirmado e negado.** Roteiro, bloco 3, trazia duas falas ("não fica gravada" ou "replay até o fechamento"); URA-04 e SMS-06 diziam "só é dito uma vez"; a descrição do YouTube dizia "você não pode perder esta transmissão" e "revelada só ao vivo". Todas viraram `[[PENDENTE: replay]]` ou foram reescritas sem afirmar nem negar.
3. **Escassez falsa ou pressão.** Removidos: "é a primeira e a última vez" (roteiro e pitch), a negação "não vou te dizer última chance da vida" (citava a frase proibida), "é o menor valor que existe/vai existir" (agora "o menor valor desta oferta"), "Eu não vou te mandar mensagem te cobrando" (falso, há régua e lembretes de lote), "sua condição de aluna está reservada" e "seu lote está reservado" (não existe reserva), "se você já decidiu, não espera", "mentoria individual que tem vaga contada" (sem fonte), "cada ano no mesmo lugar cobra mais caro" (sem fonte). Substituídos por "Esta condição não se repete..." e "decida pelo que você precisa agora, não por medo de perder" (mesma linha da objeção k).
4. **Bônus de 15 minutos sem travas.** Criei quatro travas no arquivo do bônus: o bônus não é parte da oferta; nunca é reaberto, prorrogado nem repetido em outra peça; o cronômetro tem relógio real do checkout; a janela nunca é a única chance de comprar (a Dra. diz, nas contagens 1 e 4, que a oferta e o valor do lote são os mesmos depois). O modo C (bônus por quantidade) ganhou `[[CONFIRMAR: bônus por quantidade, com estoque real...]]`; o texto "vagas reais" ganhou CONFIRMAR; o "valor de bônus em reais" só com preço real comprovado.
5. **Sincronia do carrinho aberto.** O link abre no minuto 01:28, 21h28, igual ao playbook do comercial. Incluí no roteiro o "relógio de referência" e uma linha TIME que manda disparar o "carrinho aberto" (grupo e API) e fixar o link no mesmo instante, nunca no preço (21h09). O arquivo do bônus, a linha do tempo do ListBoss (seção 3.2) e os fixados do YouTube foram alinhados. O fixado que continha os links de checkout saía "quando a Dra. disser o valor" (21h09), antes do link abrir; agora o preço tem fixado próprio sem link (21h09) e o fixado com links sai às 21h28. Contingência de atraso reescrita: o disparo acompanha a abertura real do link.
6. **Prática de 6 minutos sem segurança.** O bloco 6 mandava "olhos fechados" para uma plateia que pode estar dirigindo. Agora: aviso fixado no chat desde o bloco 0, aviso em voz e no slide 2, respiração no máximo 2 minutos com "se estiver em segurança", orçamento de tempo, sem hipnose, sem contagem regressiva, sem aprofundamento, sem indução. A nota que permitia "hipnose de até 12 minutos antes do bloco 9" foi trocada por "hipnose só em evento próprio". Retirada também a fala "essa noite fica guardada na sua mente", que soava como sugestão hipnótica.
7. **Certificado sem CONFIRMAR e sem nota do jurídico.** Decreto ("5.154/4", número incompleto), carga horária, critério de emissão e cidade ficaram como `[[CONFIRMAR]]`; incluída a nota para o jurídico com três pontos (número incompleto, se a base legal cabe a uma live de uma noite, carga horária e critério reais); o certificado e o e-mail de entrega não são emitidos enquanto os três estiverem em aberto. Não inventei decreto nem horas.
8. **Termo do Dr. João.** "FEP" aparecia duas vezes em `listboss_api_e_email.md`; trocado por "alunos do produto principal".
9. **Lista dos 12 ciclos inventada.** O bloco 8 listava "dinheiro, cobrança, casamento, solidão..." sem fonte nos materiais do Clube. Removida; ficou "em cada ciclo você trabalha um tema" com `[[CONFIRMAR: nomes e ordem dos 12 ciclos...]]`. Slide 20 e pitch ajustados.
10. **Pitch com tempos que não fechavam.** Onze slides de 20 s (220 s) dentro de uma parte de 210 s; a parte 7 com cerca de 232 palavras em 90 s (acima de 2,7 palavras por segundo); o cabeçalho dizia "1.700 palavras" quando o texto tem cerca de 1.100; a versão completa dizia "29 a 42 min". Refiz as janelas (soma 720 s), a tabela de tempos, os 12 s por slide no corrido, e corrigi para 42 min.
11. **URA-01 acima de 30 s.** 70 palavras dão 30,4 s a 2,3 palavras por segundo. Agora 67 palavras, 25 a 29 s; as outras três também têm faixa calculada.
12. **YouTube com preço e dado errado.** A descrição pós-live trazia `[[PREÇO LOTE ...]]`; removida (a descrição não tem preço, para não ficar velha a cada virada de lote). O 51,9% estava atribuído ao "Aulão" no roteiro; agora "pesquisa de presença (dossiê do Desafio)" no roteiro, slide 7 e fala.

### Altos (20)

13. IDs repetidos: `API-01` a `API-09` apareciam 3 vezes. Passaram a `API-S1-01` a `API-S3-09` (27 únicos); referências da cadência ajustadas.
14. Placeholders fora do conjunto do guia (`[[PENDENTE: soma dos avulsos]]`, `ordem de entrada`, `parcelamento máximo`, `valor da parcela`, `contatos`, `produto 1/2/3`, `posição na trilha`, `descrição`, `[[PENDENTE]]` solto ×13, `[[CALCULAR]]`, `data de emissão`, `quantidade`, `meta de leads`, `decisão da equipe de conteúdo`, `termo de autorização`, `canal e horário de atendimento`, `números de teste`, `período mínimo`). Todos viraram `[[CONFIRMAR: ...]]` ou o placeholder canônico.
15. Roteiro: objeções "respondidas em voz". As quatro conversas já estavam; as 8 perguntas previstas do bloco 16 só apontavam para outro arquivo. Escrevi a resposta falada de cada uma (objeções h, c/h, l, e, k, g, j, acesso), na voz da Dra., com `[[CONFIRMAR]]` onde faltam fatos.
16. Pitch tinha 3 conversas sérias e o roteiro 4. Incluí a conversa 4 no pitch.
17. Conversa 3 ("não tenho dinheiro agora") culpava a pessoa ("não é prioridade... escute o que você escreveu") e usava "eu valho mais que uma pizza" ao lado do preço. Reescrita sem culpa, e a pizza saiu do pitch.
18. Âncora de R$ 120 mil: ficou como `[[CONFIRMAR: âncora de R$ 120 mil da mentoria individual ainda vale]]`, fala condicional sem dizer o valor em voz, nunca como justificativa de preço (roteiro bloco 10, pitch parte 3 e notas).
19. Ancoragem: regra de preço avulso real ("valor de referência" quando nunca vendido avulso) levada também ao roteiro e ao slide 34; tabela de 12 preços em duas telas de 6.
20. Slides: limite de 3 linhas de corpo e 12 palavras por linha, tamanhos mínimos, contraste, nada que dependa de cor. Corrigidos os slides 2, 5, 7 (20 palavras numa linha), 8 (5 nomes em 2 linhas), 14, 16, 18, 34, 37 (quatro preços numa linha) e 39 (frase de garantia sem placeholder). Ordem 1 a 46 idêntica à do roteiro; títulos de TELA do roteiro alinhados aos slides (7, 18, 19, 22).
21. Gênero na live (plateia mista com tráfego frio): "pronta", "preguiçosa", "fraca", "sozinha", "inteira", "bem-vinda" neutralizados ou duplicados; "ALUNA/NOVA" virou "CLUBE/AINDA NÃO". Slide 18 "Sozinha, o freio ganha" virou "Sem apoio, o freio ganha".
22. Generalizações sem fonte suavizadas: "todo curso que você comprou", "a maioria das pessoas que eu atendo" (agora 4 em cada 10, com a fonte), "ajustado quando você era criança", "o que muda no seu cérebro".
23. Frase de produto "Você nunca mais precisa decidir qual curso comprar" sugeria que não haverá novos produtos; agora "Você decide uma vez se vale a pena entrar".
24. Exemplos de doença e dívida no chat do Termostato ("uma doença na família", "uma dívida") trocados por "um imprevisto".
25. "Quase perdi a vida" e a lista de estudos vieram do manual do Desafio; marcados `[[CONFIRMAR]]` no bloco 7.
26. API: mensagens sem final em pergunta ou CTA (API-03, 04, 05, 06, 07) reordenadas; "ontem" no toque 2 retirado (contagem relativa de dia); "A sua decisão já foi tomada. Não deixe um detalhe te impedir." retirada (pressão); S3-01 "Você decidiu parar de recomeçar" (presunção) virou "chegou ao último passo".
27. Assuntos de e-mail "Sua condição de aluna está reservada" e "Seu lote está reservado" corrigidos (não há reserva).
28. Linha do tempo do ListBoss: SMS antecipação às 19h (o arquivo de SMS marca 17h), "carrinho aberto" no fim da live (agora 21h28), gatilhos de checkout "a partir da primeira venda" (agora a partir de 21h28), "Momento" do cabeçalho dizia "20h (abertura do carrinho)".
29. SMS: opt-out "Sair: SAIR" ambíguo virou "Sair: responda SAIR"; SMS-01 sem caixa alta e sem exclamação (02/11 é Finados, tom sóbrio); link rotulado "Seu link da live"; contagens reconferidas por script.
30. URA: duas gravações da URA-01 (a e b) e tabela corrigida ("mesmo áudio" contradizia a nota); todas dizem "procure Dra. Próton no YouTube" porque nem todo número da lista tem o link no WhatsApp.
31. YouTube: primeiras 150 caracteres sem a palavra "live" (agora têm "live", "Dra. Próton" e o gancho em 137 caracteres); título dado como 66 caracteres, tem 69; capítulos eram oito `[[00:00]]` iguais (agora 13 tempos derivados do roteiro com a transmissão iniciando às 19h45); hashtags idênticas nas duas versões; sufixo "suporte WhatsApp" unificado.
32. NPS: títulos e perguntas com viés ("O que quase te fez ficar de fora?", "O que faltou para entrar de vez?", "quanto a live ajudou a enxergar seu padrão", "nos dias difíceis", "o que mudou") reescritos de forma neutra, com opção "nada pesou/prefiro não dizer", escalas com as pontas nomeadas, ordem aleatória, consentimento de contato como `[[CONFIRMAR]]`; e-mail NP-01 dizia "não é uma pesquisa de satisfação" (é) e "eu leio todas" (sem confirmação).

### Médios (12)

33. Custos de URA/SMS com "R$"; passaram a "0,08, 0,07, 0,13 (em reais)".
34. Superlativo "uma das maiores comunidades" (manual e descrição do YouTube) com `[[CONFIRMAR: superlativo]]`; "70 mil alunos no Brasil e em mais de 44 países" para "mais de 70 mil alunos em 44 países"; dúvida "1,4 ou 1,5 milhão" removida (o guia fecha 1,4).
35. "Precisou curar sozinha" (manual) virou "atravessar sozinha"; "Cura" ficou só nos nomes oficiais dos produtos; notas "nunca prometer cura" viraram "sem promessa de resultado".
36. Manual: "A autossabotagem vai acabar? O que eu prometo..." virou "o que eu ofereço"; "Quanto custa mais um ano no mesmo lugar?" e "mas cresça" retirados (venda e pressão em peça de pós-compra); tripla de adjetivos reduzida; "Comece pelo pouco..." reescrito para não imitar a frase intocável; capa mais 9 páginas (antes "9 páginas" com capa).
37. "Comigo do outro lado" (sugeria acompanhamento pessoal da Dra.) virou "com o suporte do outro lado" com `[[CONFIRMAR: o que o suporte inclui]]`.
38. Roteiro: "comparar com mensalidade" e "porta" em notas reescritos sem citar as formulações proibidas; atraso de 5 a 10 minutos e de mais de 10 minutos agora têm planos separados e coerentes com o Mapa.
39. Mapa do roteiro ganhou hora de parede, palavras de fala, segundos de fala a 2,7 e 2,3 palavras por segundo e a sobra para chat e silêncio; soma 116 min, fala literal total de 16 a 19 min.
40. Lote Especial: o `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` foi incluído na primeira ocorrência em cada arquivo que o menciona (roteiro, pitch, slides, bônus).
41. Mensagens de grupo do bônus levavam rodapé SAIR (próprio de API); retirado, com observação para o caso de saírem por API; todas terminam em CTA.
42. Certificado: alerta (a) deixou de afirmar o ano do decreto.
43. Fixados do YouTube passaram de 3 para 4 (incluí o do preço, sem link), com contagens atualizadas no cabeçalho e nas notas.
44. Perguntas sobre sofrimento e dívida seguem o protocolo; "pergunta sobre cura ou dinheiro garantido" virou "tratamento ou resultado financeiro garantido".

### Baixos (5)

45. Nomes de arquivos de áudio sem extensão em backticks (não são caminhos do repositório); "eu consegui ler" no ListBoss virou "limite da fonte".
46. Referências a arquivos do Desafio que não estão no repositório (`desafio_*.md`, arte `.png`, links úteis) trocadas por descrição.
47. Escolha de palavras repetidas ("Chegou o momento" na contagem 1 do bônus e no bloco 9).
48. `[[...]]` e `[[CONFIRMAR]]` soltos em texto explicativo reescritos.
49. "Atualizar a cada virada de lote, ver carrinho_e_lotes" removido da descrição (não há preço lá).

## 3. O que ainda depende de decisão (já marcado no texto)

| Decisão | Marca | Quem |
|---|---|---|
| Replay: sim ou não | `[[PENDENTE: replay]]` (roteiro bloco 3, YouTube, SMS e URA não afirmam nem negam) | Dra. |
| Garantia da Vitalícia (o Clube tem 7 dias) | `[[PENDENTE: garantia]]` | Dra. e jurídico |
| Bônus e modo A, B ou C | `[[PENDENTE: bônus]]`, `[[CONFIRMAR: bônus por quantidade...]]` | Dra. |
| Datas dos lotes e fechamento | `[[PENDENTE: data do lote]]`, `[[PENDENTE: fechamento]]` | Lançamento |
| Preços avulsos dos 12 itens | `[[PENDENTE: preço avulso]]` | Dra. e produto |
| Âncora de R$ 120 mil da mentoria individual | `[[CONFIRMAR: âncora de R$ 120 mil...]]` | Dra. |
| Decreto, carga horária, critério de emissão e cidade do certificado | `[[CONFIRMAR]]` mais nota do jurídico | Jurídico |
| Lote Especial só para quem está ao vivo | `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` | Lançamento |
| Frase de uma linha por produto (7 produtos), nomes e ordem dos 12 ciclos, o que o suporte inclui, o que o Clube vitalício inclui | `[[CONFIRMAR]]` | Produto |
| Parcelamento, valor da parcela, Pix, boleto, estorno | `[[CONFIRMAR]]` | Financeiro |
| Opt-out do SMS flash e tecla de opt-out da URA, nome do canal do YouTube para a URA | `[[CONFIRMAR]]` | Operação |
| Superlativo "uma das maiores comunidades" | `[[CONFIRMAR: superlativo]]` | Dra. |
| Tempos reais dos capítulos | `[[CONFIRMAR]]` (base: roteiro mais 15 min) | Edição |

## 4. Divergências em arquivos de outras áreas (não editados aqui)

- `06_emails/lembretes_da_live.md`: LV-03-05 está às 21h15 e LV-03-06 (carrinho aberto) às 22h30. O roteiro tem a revelação da oferta às 20h51 e o link às 21h28. Alinhar (ou a LV-03-06 vai para 21h28, ou a equipe aceita um e-mail mais tardio).
- `05_whatsapp_api/cronograma_de_disparos.md` e `dia_da_live_03_11.md`: CP-BF-76 sai "quando a Dra. revelar". Precisa ser "no instante em que o link abre, 21h28"; CP-BF-75 (20h45) antecede a revelação de 20h51.
- `09_comercial_datacrazy/playbook_do_dia_da_live.md`: diz que de 20h a 21h09 há "blocos de conteúdo (sem preço)" e "nada de oferta"; o roteiro revela a oferta e o preço avulso entre 20h51 e 21h09. Os horários 21h09 (preço) e 21h28 (link) batem.
- O playbook diz que o comercial não dispara durante a live; o único disparo de venda da noite é o "carrinho aberto" manual do time de disparo, agora escrito no roteiro.
- Termo "Elite": a rubrica pede ausência, mas "Workshop Terapeuta de Elite" é um dos 11 produtos oficiais (estratégia, seção 1). Mantido só nesse nome.
- Termo "Cura": mantido apenas nos nomes oficiais "Cura da Criança Interior" e "Cura da Escassez Financeira".

## 5. Contagens finais

- ListBoss: 27 mensagens de API (9 eventos x 3 segmentos), todas com rodapé SAIR, entre 5 e 9 linhas de texto, linhas em branco corretas; 27 assuntos de e-mail.
- URA: 4 roteiros (67, 50, 54 e 28 palavras; 25 a 29 s, 19 a 22 s, 20 a 23 s, 10 a 12 s). SMS: 8, máximo de 142 caracteres, todos ASCII.
- Roteiro: 17 blocos mais a sala aberta; 116 min; fala literal de cerca de 2.557 palavras (16 a 19 min).
- Pitch: 8 partes, 720 s; cerca de 1.100 palavras de fala (6,8 a 8 min).
- Slides: 46 mais 4 de reserva; bônus: 4 contagens; certificado: 1; manual: capa e 9 páginas; NPS: 9 perguntas (A) e 5 (B); YouTube: 1 título, 3 alternativas, 2 descrições, 3 capas, 4 fixados.

## 6. Checagens duras (executadas ao final, no estado final dos arquivos)

Comandos e resultados abaixo. Todas as contagens de ocorrência indesejada são 0.

### 1. Travessão e meia-risca (contagem de linhas)
```
0
```

### 2a. Keila, harmonização, injetáveis, FEP, Zoom, congresso
```
0
```

### 2b. 'Elite' (só no nome do produto oficial Workshop Terapeuta de Elite)
```
0
```

### 3. R$ fora de placeholder CONFIRMAR, de nota ao implementador e de faixa de pesquisa
```
0
```

### 4. Frases proibidas (porta fecha, nunca mais vai, última chance, vai ganhar, vai manifestar, garantido que, últimas vagas, vagas acabando, cupons limitados, mais barato que a mensalidade)
```
0
```

### 5a. 'pra' como palavra
```
0
```

### 5b. Mensagens de API sem rodapé SAIR (esperado 0)
```
0
```

### 5c. Mensagens de API com mais de 12 linhas de texto (esperado 0)
```
0 de 27
```

### 5d. Mensagens de API sem linha em branco entre linhas (esperado 0)
```
0
```

### 6a. TODO, lorem, XXX
```
0
```

### 6b. Placeholders fora do conjunto do guia (PENDENTE só com preço avulso, data do lote, garantia, bônus, fechamento, replay)
```
0
```

### 6c. Placeholders sem prefixo conhecido (CONFIRMAR, PENDENTE, LINK, PREÇO LOTE, FOTO DRA, DEPOIMENTO REAL, 00:00)
```
0
```

### 7a. Slides numerados 1 a 46, únicos e em ordem
```
True
```

### 7b. IDs de API únicos (27), URA (4) e SMS (8)
```
27 27 4 8
```

### 8. Caminhos .md citados que não existem no repositório (esperado nenhum)
```
0
```

### 9. E-mail, telefone ou URL
```
0
```

### 10. Frases intocáveis marcadas que não batem literalmente com o guia (linhas de FRASE/INTOCÁVEL)
```
0
```

### SMS. Caracteres (link contado como 22, só ASCII, máximo 160)
```
[('SMS-01', 142, 142, True), ('SMS-02', 129, 129, True), ('SMS-03', 116, 116, True), ('SMS-04', 114, 114, True), ('SMS-05', 138, 138, True), ('SMS-06', 125, 125, True), ('SMS-07', 121, 121, True), ('SMS-08', 113, 113, True)]
max 142 todos<=160 True declarado=real True ascii True
```

### URA. Palavras e duração (2,7 e 2,3 palavras por segundo; teto 30 s no ritmo lento)
```
URA-01 67 palavras 25 a 29 s
URA-02 50 palavras 19 a 22 s
URA-03 54 palavras 20 a 23 s
URA-04 28 palavras 10 a 12 s
```

### Roteiro. Soma das durações dos blocos 1 a 17 (esperado 116)
```
116 17 116 17
```

### Pitch. Soma das partes (esperado 720 s)
```
720
```

### Primeira ocorrência de 'Lote Especial' em cada arquivo traz o CONFIRMAR
```
bonus_15_minutos_e_escassez.md linha 23 CONFIRMAR presente: True
pitch_e_ancoragem.md linha 145 CONFIRMAR presente: True
roteiro_live_de_revelacao.md linha 310 CONFIRMAR presente: True
slides_da_live.md linha 230 CONFIRMAR presente: True
```

### Linhas por arquivo (todas lidas)
```
628 07_listboss_ura_sms/listboss_api_e_email.md
   132 07_listboss_ura_sms/ura_e_sms.md
   188 08_live_e_pitch/bonus_15_minutos_e_escassez.md
   278 08_live_e_pitch/pitch_e_ancoragem.md
   461 08_live_e_pitch/roteiro_live_de_revelacao.md
   346 08_live_e_pitch/slides_da_live.md
   283 10_pos_compra/certificado_manual_nps.md
   160 10_pos_compra/descricao_youtube_e_capas.md
  2476 total
```

Observação: a checagem 2b conta 'Elite' fora do nome do produto oficial; a checagem 3 exclui o placeholder da âncora de R$ 120 mil, as notas ao implementador (escada do briefing) e a faixa de pesquisa de R$ 297 e R$ 1.000, que a rubrica permite.
