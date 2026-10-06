# URA e SMS da live de revelação (4 roteiros de URA e 8 SMS)

| Campo | Conteúdo |
|---|---|
| Peça | 4 roteiros de URA (áudio falado pela Dra., até 30 segundos) e 8 SMS (até 160 caracteres, sem link quebrado, com opt-out) |
| Canal | URA (ligação com áudio gravado) e SMS (convencional e flash) |
| Público | Inscritos na live com telefone válido, os 3 segmentos (não há texto diferente por segmento, porque o SMS é curto e nenhum cita preço) |
| Momento | 02/11 e 03/11 (antecipação, ao vivo, atrasados e flash), nos horários da tabela abaixo |
| Objetivo | Fazer a pessoa abrir a live na hora, em um canal que não depende de internet no momento do aviso |
| Consciência | 4 a 5 |
| Trabalho contratado | "Eu quero uma decisão que eu só precise tomar uma vez." Não perder o dia em que ela acontece |
| Modelo no Desafio | `desafio_ura_sms.md` (URA de véspera às 17h, SMS "FALTA 1 HORA" às 19h, URA "estou ao vivo" às 20h, SMS "ESTOU AO VIVO") e a aba "Disparos URASMS" da planilha de disparos (antecipação, ao vivo, atrasados, SMS flash, custo de R$ 0,08 por URA e R$ 0,07 por SMS, flash R$ 0,13) |

**Estrutura mantida do Desafio:** SMS teste antes do disparo, um bloco por dia, URA com nome de áudio, SMS "FALTA 1 HORA" e "ESTOU AO VIVO". **Troca:** o Desafio tinha 5 dias de disparo, a Black tem 1 dia de live e a véspera, então tudo se concentra em 02/11 e 03/11.

**Regras de forma aplicadas.**
- SMS escritos **sem acento e sem cedilha**, para ficarem na codificação padrão (GSM-7) com limite de 160 caracteres. Com acento (Unicode) o limite cai para 70. Se a operadora aceitar acento sem reduzir o limite, trocar.
- Link: `{link}` é o link curto da live (`[[LINK: encurtado da live]]`). O limite abaixo conta o link com 22 caracteres.
- Opt-out em todos os SMS: "Sair: SAIR". Em URA, o opt-out é dito no final (`[[CONFIRMAR: tecla de opt-out da operadora]]`).
- Nenhum preço, nenhuma promessa de resultado, nenhuma contagem de dias no texto.

---

## Cronograma de disparos

Enviar um SMS teste antes de cada disparo para os números da equipe `[[PENDENTE: números de teste]]`.

| Data | Hora | Formato | Peça |
|---|---|---|---|
| 02/11 (segunda) | 13h | URA | URA-01 antecipação |
| 02/11 (segunda) | 19h | SMS convencional | SMS-01 antecipação |
| 03/11 (terça) | 14h30 | URA | URA-01 antecipação (mesmo áudio) |
| 03/11 (terça) | 17h | SMS convencional | SMS-02 antecipação |
| 03/11 (terça) | 19h55 | SMS convencional | SMS-03 ao vivo |
| 03/11 (terça) | 20h | URA | URA-02 ao vivo |
| 03/11 (terça) | 20h | SMS flash | SMS-07 flash |
| 03/11 (terça) | 20h05 | SMS convencional | SMS-04 ao vivo |
| 03/11 (terça) | 20h20 | URA | URA-03 atrasados |
| 03/11 (terça) | 20h20 | SMS convencional | SMS-05 atrasados |
| 03/11 (terça) | 20h40 | SMS convencional | SMS-06 atrasados |
| 03/11 (terça) | na revelação | URA | URA-04 flash |
| 03/11 (terça) | na revelação | SMS flash | SMS-08 flash |

---

## ROTEIROS DE URA (áudio, Dra. Próton, até 30 segundos)

**Direção de voz.** Voz próxima, tom de quem avisa uma amiga, sem tom de propaganda. Ritmo médio. Pausa curta depois de cada ponto. Gravar arquivo `.ogg`. Referência de duração: cerca de 2,5 palavras por segundo, então até 70 palavras cabem em 28 segundos.

### URA-01. Antecipação (02/11 às 13h e 03/11 às 14h30)

Arquivo: `URA 01 antecipacao live revelacao.ogg`

> Oi, aqui é a Dra. Próton. Passando para te lembrar: terça-feira, às 20 horas, eu faço a live de revelação da Black Próton Vitalícia, ao vivo, no YouTube. Você já se prometeu muitas vezes que dessa vez ia ser diferente. Nessa noite eu abro, de uma vez, o que construí para você parar de recomeçar. O link está no seu WhatsApp. Te espero. Para não receber mais ligações, digite 9.

Nota: no dia 03/11 trocar "terça-feira" por "hoje". Gravar as duas versões: URA-01a (véspera) e URA-01b (hoje).

Contagem: 70 palavras. Duração estimada: 28 segundos.

### URA-02. Ao vivo (03/11 às 20h)

Arquivo: `URA 02 estou ao vivo.ogg`

> Dra. Próton aqui. Estou ao vivo agora. A live de revelação já começou, e você ainda pode entrar. Abra o seu WhatsApp e toque no link, ou procure Dra. Próton no YouTube. A condição completa só é revelada ao vivo. Entre agora, eu te espero lá. Para não receber mais ligações, digite 9.

Contagem: 53 palavras. Duração estimada: 21 segundos.

### URA-03. Atrasados (03/11 às 20h20)

Arquivo: `URA 03 atrasados.ogg`

> Oi, é a Dra. Próton. Eu comecei a live e ainda não vi você por lá. Ainda dá tempo. O que eu já mostrei vai fazer sentido, e a parte mais importante ainda está por vir. Abra o link que eu mandei no seu WhatsApp e entre agora. Eu te espero. Para não receber mais ligações, digite 9.

Contagem: 58 palavras. Duração estimada: 23 segundos.

### URA-04. Flash (03/11, no momento da revelação)

Arquivo: `URA 04 flash revelacao.ogg`

> Dra. Próton. Eu estou revelando a condição agora, ao vivo. Se você parou de assistir, volte. O que eu falar nos próximos minutos só é dito uma vez. O link está no seu WhatsApp. Para não receber mais ligações, digite 9.

Contagem: 41 palavras. Duração estimada: 16 segundos.

---

## SMS (até 160 caracteres)

Contagem inclui espaços, o link (22 caracteres) e o opt-out.

| ID | Quando | Formato | Texto | Caracteres |
|---|---|---|---|---|
| SMS-01 | Antecipação, 02/11 às 19h | Convencional | Dra Proton: AMANHA, 20h, live de revelacao da Black Proton Vitalicia. Entre no grupo e receba o link: {link} Sair: SAIR | 135 |
| SMS-02 | Antecipação, 03/11 às 17h | Convencional | Dra Proton: HOJE as 20h eu revelo a Black Proton Vitalicia, ao vivo. Seu link: {link} Sair: SAIR | 112 |
| SMS-03 | Ao vivo, 03/11 às 19h55 | Convencional | Dra Proton: FALTAM 5 MIN! A live de revelacao comeca as 20h. Entre agora: {link} Sair: SAIR | 107 |
| SMS-04 | Ao vivo, 03/11 às 20h05 | Convencional | Dra Proton: ESTOU AO VIVO! A live de revelacao ja comecou. Entre agora: {link} Sair: SAIR | 105 |
| SMS-05 | Atrasados, 03/11 às 20h20 | Convencional | Dra Proton: voce ainda nao entrou. A live esta no ar e a condicao so e revelada ao vivo. Entre: {link} Sair: SAIR | 129 |
| SMS-06 | Atrasados, 03/11 às 20h40 | Convencional | Dra Proton: ainda da tempo. O que eu revelo agora so e dito uma vez. Entre na live: {link} Sair: SAIR | 117 |
| SMS-07 | Flash, 03/11 às 20h | Flash | ESTOU AO VIVO! Dra Proton revela hoje a Black Proton Vitalicia. Toque e entre: {link} Sair: SAIR | 112 |
| SMS-08 | Flash, na revelação | Flash | A REVELACAO COMECOU. Dra Proton esta ao vivo agora. Volte para a live: {link} Sair: SAIR | 104 |

**Opt-out e link.** O texto "Sair: SAIR" cumpre o opt-out por resposta. Testar o link curto em aparelho real antes do disparo (link quebrado em SMS custa o disparo inteiro). Todos os SMS usam o mesmo link da live, sem UTM no link longo (a UTM vai no encurtador): `utm_source=sms`, `utm_content=sms-NN`.

---

## Custo previsto (modelo da planilha de disparos)

Valores unitários da planilha do Desafio, a conferir com o contrato atual.

| Item | Unitário | Contatos | Total |
|---|---|---|---|
| URA antecipação 02/11 | R$ 0,08 | `[[PENDENTE: contatos]]` | contatos x 0,08 |
| URA antecipação 03/11 | R$ 0,08 | `[[PENDENTE: contatos]]` | contatos x 0,08 |
| URA ao vivo | R$ 0,08 | `[[PENDENTE: contatos]]` | contatos x 0,08 |
| URA atrasados | R$ 0,08 | só quem não clicou | contatos x 0,08 |
| URA flash | R$ 0,08 | `[[PENDENTE: contatos]]` | contatos x 0,08 |
| SMS convencional (6) | R$ 0,07 | `[[PENDENTE: contatos]]` | contatos x 0,07 x 6 |
| SMS flash (2) | R$ 0,13 | `[[PENDENTE: contatos]]` | contatos x 0,13 x 2 |

---

## Notas ao implementador

1. **Verba e público.** O Desafio disparou para 11 a 12 mil contatos de URA e 16 mil de SMS. Para a Black, a lista depende de `[[PENDENTE: meta de leads]]`. Calibrar os 6 SMS convencionais para o número real.
2. **Atrasados** só para quem não clicou no link da live. Se a ferramenta não separa quem clicou, trocar SMS-05 e SMS-06 por um único disparo para todos.
3. **URA-04 e SMS-08** (flash da revelação) devem ser disparados manualmente por quem acompanha a live, na mesma hora de LV-03-05. Combinar o sinal com a equipe de live (`08_live_e_pitch`).
4. **Gravação da URA.** As duas variantes de URA-01 (véspera e hoje) precisam de duas gravações. Combinar com a Dra. e entregar os `.ogg` com os nomes acima.
5. **Teste A/B sugerido.** SMS-02: "HOJE as 20h eu revelo" contra "HOJE as 20h voce decide uma vez". Mede clique no link.
6. **Compliance.** Nenhum disparo cita valor, bônus ou garantia. A revelação do valor é só ao vivo. O SMS é só um aviso; qualquer oferta é feita na live.
7. **Onde o Desafio tinha peça e a Black não.** Não há URA nem SMS diário de 5 dias, porque há uma só live. Também não há disparos pós-live de URA nesta rodada; se a equipe quiser URA de último dia do carrinho, usar o molde de URA-03 com a data de `[[PENDENTE: fechamento]]`.
