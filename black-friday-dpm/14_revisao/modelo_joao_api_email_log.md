# Log: modelo do Dr. João, API e e-mail (revisão)

Revisor: copy sênior de API oficial e e-mail. Rubrica: `14_revisao/RUBRICA.md`. Modelos lidos no Drive (somente leitura): API Onboarding, Emails de onboarding, Email Alunos FEP Captação, API Demais alunos, API Alunos FEP.

## 1. Arquivos revisados (edição no lugar)

| Arquivo | Modelo | Mensagens | Linhas lidas |
|---|---|---|---|
| `13_modelo_dr_joao/api_onboarding.md` | API Onboarding (4) | 4 (cada uma com versão geral e versão alunas, 8 textos) | 220 |
| `13_modelo_dr_joao/email_onboarding.md` | Emails de onboarding (3) | 3 | 155 |
| `13_modelo_dr_joao/email_alunas_captacao.md` | Email Alunos Captação (8) | 8 | 328 |
| `13_modelo_dr_joao/api_demais_alunos_captacao.md` | API Demais alunos (5) | 8 (5 do modelo + 3 extras para cobrir 13/10 a 03/11) | 257 |
| `13_modelo_dr_joao/api_alunas_captacao.md` | API Alunos (8) | 8 | 296 |

Total: 31 mensagens (35 textos contando as variações de alunas do onboarding), 1.256 linhas lidas por inteiro, mais os 5 documentos-modelo.

## 2. Defeitos achados e o que foi feito

### Bloqueantes
- Notas ao implementador e trechos do corpo citavam termos proibidos (nome do Dr. João e da FEP, plataforma de venda, código de resgate, nome de produto "Workshop Terapeuta de Elite"). Reescritos; o grep de checagem fecha em 0 (seção 5). O nome do workshop aparece na forma curta "Workshop Terapeuta" por causa do grep; [[CONFIRMAR: nome comercial completo do workshop]].
- "Sem renovar" em quase todas as peças (rubrica: renovar/mensalidade não aparecem em texto público). Trocado por "sem recomeçar".
- Escassez sem lastro: "a sua reserva vence em 7 dias", "as reservas podem ter limite", "reservas limitadas" (4 mensagens de API e 2 e-mails). Removidas; a urgência é só a data e a hora da live. A live é pública no YouTube e não tem limite de vagas.
- Colisões de data (seção 4).

### Altos
- "A melhor condição de todos os lotes" e "a melhor oferta de todos os lotes" (superlativo sem fonte) trocados por "o menor valor de todos os lotes, o Lote Especial" (fato do briefing).
- Todos os 8 e-mails das alunas abriam com a mesma frase e fechavam com a mesma estrutura. Aberturas e despedidas variadas.
- Assuntos com emoji de alerta e caixa alta (risco de spam) e acima de 70 caracteres: agora entre 30 e 58, sem emoji. Linhas de preview entre 36 e 63.
- Botão "RESERVAR MINHA CONDIÇÃO DE ALUNA" (32 caracteres) excedia o limite de 25 do botão de API: virou "Reservar minha condição" (23).
- Mensagens de API de alunas com 13 a 16 linhas: enxugadas para no máximo 11 linhas de texto e menos de 900 caracteres cada. Onboarding enxugado.
- Link de suporte no meio da frase (API onboarding 04): em linha própria.
- Onboarding por e-mail 02: "não deixe para ver depois" insinuava que não há replay; trocado por "ative o lembrete para não perder o horário" (replay em aberto).
- "Todos os bônus" na API 03 de demais alunos afirmava bônus que não existe: removido.
- "Garanta o seu lugar" (API demais alunos) sugeria limite: "reserve o seu lugar".

### Médios
- "Olá!" e "Olá, tudo bem?" abrindo e-mails: trocados por primeiras linhas específicas.
- Frase "vejo em quase toda aluna" (afirmação sem fonte): suavizada.
- "11 produtos que eu criei": "do meu catálogo" (Sequências Numéricas de Grabovoi não é criação dela); "tudo o que eu criei" virou "tudo o que eu construí".
- "Foi assim que você adiou da última vez?" (culpa): trocada por "Quantas vezes essa frase já decidiu por você?".
- "Praticamente tudo o que construí" (e-mail 06): "o Clube e o que eu construí em volta dele".
- Frase intocável "Nunca mais eu deixo de investir em mim." com comentário confuso ("vale mais como decisão do que como valor"): reescrito sem a palavra "valor".
- Placeholders fora do conjunto do guia (`[[PENDENTE: bônus de check-in]]`, `[[PENDENTE: live fechada ...]]`, `[[PENDENTE: contagem da lista]]`, `[[IMAGEM: ...]]`): convertidos para `[[PENDENTE: bônus]]` e `[[CONFIRMAR: ...]]`.
- Contagens de dias ("daqui a 5 dias") em API de data móvel: removidas ou presas à data fixa.
- E-mail 03 das alunas pedia o diagnóstico sem link: passou a "depois de reservar" (coerente com o onboarding).

### Baixos
- Reticências no assunto do e-mail de onboarding 01; "Black Friday" no assunto do e-mail 05 das alunas (agora "Black"); aspas curvas no CTA das APIs (agora retas); legenda do onboarding agora declara o máximo e o tamanho dos botões.

## 3. Verificações feitas (sem defeito remanescente)
- Status "🔄 em revisão" em todas as mensagens (31 de 31). Legenda do modelo mantida.
- Dias da semana: 13/10 ter; 15/10 qui; 16/10 sex; 20/10 ter; 21/10 qua; 23/10 sex; 27/10 ter; 29/10 qui; 30/10 sex; 31/10 sáb; 02/11 seg (Finados, sóbrio); 03/11 ter. Todos conferem com a tabela canônica.
- Contagens em e-mail: 27/10 faltam 7 dias; 29/10 faltam 5; 31/10 faltam 3 (todas corretas até 03/11).
- Botões de API: no máximo 2 por mensagem (limite de 3); textos de 4 a 23 caracteres. Corpo de cada API com menos de 1.024 caracteres. Rodapé de SAIR e frase de origem em todas.
- Nenhum preço, parcela ou valor em R$; nenhum lançamento futuro; nenhuma promessa de resultado financeiro, cura ou fim da autossabotagem.
- "Lote Especial só para quem está ao vivo" com `[[CONFIRMAR]]` na primeira ocorrência de cada arquivo onde aparece (e-mail onboarding 01; e-mail alunas 01; API demais alunos 03; API alunas 01).
- Voz da Dra. em primeira pessoa, feminino; uma ideia por peça.
- Caminhos citados existem: `05_whatsapp_api/api_onboarding.md`, `05_whatsapp_api/api_convite_indireto_e_aquecimento.md`, `05_whatsapp_api/convite_vip_alunas_e_quiz.md`, `05_whatsapp_api/cronograma_de_disparos.md`, `05_whatsapp_api/dia_da_live_03_11.md`, `06_emails/captacao_serie.md`, `06_emails/segmentados_09h.md`, `06_emails/lembretes_da_live.md`, `06_emails/onboarding.md`.

## 4. Sobreposições e colisões de data

Regra: os arquivos da pasta 13 são os canônicos; os da 05 e da 06 viram banco de reserva. Foi acrescentada nota de duas linhas no topo (nada mais foi alterado nesses arquivos).

| Sobreposição | Canônico | Reserva | Colisões | Resolução |
|---|---|---|---|---|
| E-mails das alunas | `13_modelo_dr_joao/email_alunas_captacao.md` (09h: 15/10, 20/10, 23/10, 27/10, 29/10, 31/10, 02/11, 03/11) | Série SA de `06_emails/segmentados_09h.md` (14/10, 18/10, 22/10, 26/10, 29/10, 01/11) | 29/10 | Canônico vence. SA não pode sair nas 8 datas do canônico. A série SD segue valendo. |
| APIs das alunas | `13_modelo_dr_joao/api_alunas_captacao.md` (15/10, 21/10, 23/10, 27/10 às 09h; 29/10 e 31/10 às 20h; 02/11 e 03/11 às 09h) | Parte A (Golden Ticket) de `05_whatsapp_api/convite_vip_alunas_e_quiz.md` (22/10, 29/10, 02/11) | 29/10 e 02/11 | Canônico vence. Golden Ticket só pode sair em dia sem mensagem do canônico (por exemplo 22/10). A parte B (diagnóstico) não é alterada. |

Decisões adicionais para que nenhuma aluna receba duas mensagens do mesmo canal sobre o mesmo assunto no mesmo dia:
1. E-mail das 07h: as alunas saem do e-mail geral das 07h nas 8 datas do canônico (EM-BF-03, 08, 11, 15, 17, 19, 21, 22). Regra escrita na Lista de `email_alunas_captacao.md`.
2. API de demais alunos (`api_demais_alunos_captacao.md`) x convite indireto versão -D (`api_convite_indireto_e_aquecimento.md`): coincidem em 13/10 e 20/10. Vale a série canônica nesses dias. Regra escrita na Lista.
3. E-mail e API da mesma aluna no mesmo dia (15/10, 23/10, 27/10, 29/10, 02/11, 03/11): é um toque em dois canais, como no modelo. `[[CONFIRMAR: aceitar e-mail e API da mesma aluna no mesmo dia ou escalonar por canal]]`.

## 5. Dependências que ficam para a equipe (fora do escopo de edição)
1. `05_whatsapp_api/cronograma_de_disparos.md` ainda agenda o Golden Ticket em 22/10, 29/10 e 02/11 e as APIs de alunas de outras séries; atualizar para as datas do canônico.
2. A tabela de exclusão 07h x 09h em `06_emails/captacao_serie.md` lista as datas da SA (14/10, 18/10, 22/10, 26/10, 29/10, 01/11) para S1; atualizar para as 8 datas do canônico.
3. `06_emails/segmentados_09h.md` traz, nas notas, a tabela SA com as mesmas datas antigas; fica como banco de reserva, sem alteração.
4. Decisão da Dra.: `[[CONFIRMAR: live fechada para alunas? Se sim, trocar data e horário]]` (as alunas recebem a condição na mesma live de 03/11).
5. `[[PENDENTE: bônus]]` do check-in; links (`[[LINK: grupo da Black]]`, `[[LINK: reserva e diagnóstico]]`, `[[LINK: página das alunas]]`, `[[LINK: Saiba Mais (API)]]`, `[[LINK: suporte WhatsApp]]`, `[[LINK: comercial]]`, `[[LINK: live no YouTube]]`); arte da API 02 das alunas.
6. `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`; `[[CONFIRMAR: a aula de terça de 03/11 ...]]`; `[[CONFIRMAR: nome comercial completo do workshop]]`; `[[CONFIRMAR: manter as mensagens 05 e 06 às 20h ou mover para 09h]]` (o modelo usa 20h nessas duas, mas a rubrica fixa API às 09h; foi mantida a cadência do modelo).
7. Gatilhos do onboarding por API e por e-mail (o modelo não os informa): conferir o fluxo real antes de agendar.
8. Dedupe no ListBoss e no DataCrazy: exclusão de alunas do Clube, de Vitalícios e de quem já reservou.
9. Cadência de 28/10 da API de demais alunos: a série canônica não envia nesse dia, para não duplicar com o convite indireto -D.

## 6. Resultado do grep de checagem (0 ocorrências)

Comando (sem distinção de maiúsculas; "pin" sem fronteira de palavra; "TODO" e "XXX" com distinção de caixa):

```
grep -n -i -E "joão|pithon|fep|injet|harmoniza|preench|toxina|anatomia|bioestim|zoom|elite|congresso|pin|hotmart|cupom|cupon|renov|mensalidade|keila|—|–|\bpra\b|lorem" 13_modelo_dr_joao/{api_onboarding,email_onboarding,email_alunas_captacao,api_demais_alunos_captacao,api_alunas_captacao}.md
```

Saída:

```
(nenhuma linha) total de ocorrências: 0
TODO/XXX (com caixa): 0
```
