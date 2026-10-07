> VERSÃO SUPERADA. Os textos, horários e IDs válidos de URA e SMS estão em `15_automacao/doc_ura_sms_black.md`; este arquivo fica só como histórico e não deve ser usado para disparo.
> Onde os dois divergem (IDs, número de SMS e de URA, SMS flash às 20h50, S3 só com aceite de telefone), vale o doc novo; o que segue abaixo foi apenas harmonizado nos fatos comuns (link, contagem, caixa alta, horário do flash).

# URA e SMS da live de revelação (4 roteiros de URA e 8 SMS)

| Campo | Conteúdo |
|---|---|
| Peça | 4 roteiros de URA (áudio falado pela Dra., até 30 segundos) e 8 SMS (até 160 caracteres, sem link quebrado, com opt-out) |
| Canal | URA (ligação com áudio gravado) e SMS (convencional e flash) |
| Público | Inscritos na live com telefone válido, os 3 segmentos (S3 só com aceite de contato por telefone, regra do doc novo). Não há texto diferente por segmento, porque o SMS é curto e nenhum cita preço |
| Momento | 02/11 (segunda, Finados: tom sóbrio, sem caixa alta nem exclamação) e 03/11 (antecipação, ao vivo, atrasados e flash), nos horários da tabela abaixo |
| Objetivo | Fazer a pessoa abrir a live na hora, em um canal que não depende de internet no momento do aviso |
| Consciência | 4 a 5 |
| Trabalho contratado | "Eu quero uma decisão que eu só precise tomar uma vez." Não perder o dia em que ela acontece |
| Modelo no Desafio | o arquivo de URA e SMS do Desafio (URA de véspera às 17h, SMS "FALTA 1 HORA" às 19h, URA "estou ao vivo" às 20h, SMS "ESTOU AO VIVO") e a aba "Disparos URASMS" da planilha de disparos (antecipação, ao vivo, atrasados, SMS flash, custo unitário de 0,08 por URA e 0,07 por SMS, flash 0,13, em reais) |

**Estrutura mantida do Desafio:** SMS teste antes do disparo, um bloco por dia, URA com nome de áudio, SMS "FALTA 1 HORA" e "ESTOU AO VIVO". **Troca:** o Desafio tinha 5 dias de disparo, a Black tem 1 dia de live e a véspera, então tudo se concentra em 02/11 e 03/11.

**Regras de forma aplicadas.**
- SMS escritos **sem acento e sem cedilha**, para ficarem na codificação padrão (GSM-7) com limite de 160 caracteres. Com acento (Unicode) o limite cai para 70. Se a operadora aceitar acento sem reduzir o limite, trocar.
- Link: em cada SMS o link é o token [[LINK: live YouTube | sms | sms-nn]] (NN é o número do SMS), que vira o link curto da live com 28 caracteres (padrão `draproton.com.br/bf-sms-NN-s` do doc novo). O limite abaixo conta o link com 28 caracteres.
- Opt-out em todos os SMS: "Sair: responda SAIR". No SMS flash, que em geral não aceita resposta, `[[CONFIRMAR: opt-out no SMS flash junto à operadora]]`. Em URA, o opt-out é dito no final (`[[CONFIRMAR: tecla de opt-out da operadora]]`).
- Duração da URA: a conta é palavras divididas por 2,7 (ritmo rápido) e por 2,3 (ritmo lento). O teto é 30 segundos no ritmo lento, ou seja, até 69 palavras.
- A URA diz "procure Dra. Próton no YouTube" porque nem todo número da lista tem o link no WhatsApp. `[[CONFIRMAR: nome do canal do YouTube para falar na URA]]`
- Nenhum preço, nenhuma promessa de resultado, nenhuma contagem de dias no texto. A URA não leva link: a pessoa procura "Dra. Próton" no YouTube. Sem MAIÚSCULAS em mais de duas palavras seguidas (filtro de operadora).

---

## Cronograma de disparos

Enviar um SMS teste antes de cada disparo para os números da equipe `[[CONFIRMAR: números de teste]]`.

| Data | Hora | Formato | Peça |
|---|---|---|---|
| 02/11 (segunda) | 13h | URA | URA-01a antecipação (véspera) |
| 02/11 (segunda) | 19h | SMS convencional | SMS-01 antecipação |
| 03/11 (terça) | 14h30 | URA | URA-01b antecipação (hoje) |
| 03/11 (terça) | 17h | SMS convencional | SMS-02 antecipação |
| 03/11 (terça) | 19h55 | SMS convencional | SMS-03 ao vivo |
| 03/11 (terça) | 20h | URA | URA-02 ao vivo |
| 03/11 (terça) | 20h | SMS flash | SMS-07 flash |
| 03/11 (terça) | 20h05 | SMS convencional | SMS-04 ao vivo |
| 03/11 (terça) | 20h20 | URA | URA-03 atrasados |
| 03/11 (terça) | 20h20 | SMS convencional | SMS-05 atrasados |
| 03/11 (terça) | 20h40 | SMS convencional | SMS-06 atrasados |
| 03/11 (terça) | 20h50 (na deixa da revelação da oferta, que começa às 20h51) | URA | URA-04 flash |
| 03/11 (terça) | 20h50 (na deixa da revelação da oferta, que começa às 20h51) | SMS flash | SMS-08 flash |

---

## ROTEIROS DE URA (áudio, Dra. Próton, até 30 segundos)

**Direção de voz.** Voz próxima, tom de quem avisa alguém de confiança, sem tom de propaganda. Ritmo médio. Pausa curta depois de cada ponto. Gravar em formato .ogg. Referência de duração: 2,3 a 2,7 palavras por segundo, então 69 palavras ocupam de 26 a 30 segundos. Nenhum roteiro abaixo passa de 69 palavras.

### URA-01. Antecipação (URA-01a em 02/11 às 13h e URA-01b em 03/11 às 14h30)

Arquivos de áudio (.ogg): "URA 01a antecipacao vespera" e "URA 01b antecipacao hoje"

> Oi, aqui é a Dra. Próton. Passando para te lembrar: terça-feira, às 20 horas, eu faço a live de revelação da Black Próton Vitalícia, ao vivo, no YouTube. Você já se prometeu que dessa vez ia ser diferente. Nessa noite eu abro, de uma vez, o que construí para você parar de recomeçar. Procure Dra. Próton no YouTube. Te espero. Para não receber mais ligações, digite 9.

Nota: no dia 03/11 (URA-01b) trocar "terça-feira" por "hoje". São duas gravações.

Contagem: 67 palavras. Duração estimada: 25 a 29 segundos.

### URA-02. Ao vivo (03/11 às 20h)

Arquivo de áudio (.ogg): "URA 02 estou ao vivo"

> Dra. Próton aqui. Estou ao vivo agora. A live de revelação já começou, e você ainda pode entrar. Procure Dra. Próton no YouTube. A condição completa é revelada ao vivo. Entre agora, eu te espero lá. Para não receber mais ligações, digite 9.

Contagem: 43 palavras. Duração estimada: 16 a 19 segundos.

### URA-03. Atrasados (03/11 às 20h20)

Arquivo de áudio (.ogg): "URA 03 atrasados"

> Oi, é a Dra. Próton. Eu comecei a live e ainda não vi você por lá. Ainda dá tempo. O que eu já mostrei vai fazer sentido, e a parte mais importante ainda está por vir. Procure Dra. Próton no YouTube e entre agora. Eu te espero. Para não receber mais ligações, digite 9.

Contagem: 54 palavras. Duração estimada: 20 a 23 segundos.

### URA-04. Flash (03/11, no momento da revelação)

Arquivo de áudio (.ogg): "URA 04 flash revelacao"

> Dra. Próton. Eu estou revelando a condição agora, ao vivo. Se você parou de assistir, volte. Procure Dra. Próton no YouTube. Para não receber mais ligações, digite 9.

Contagem: 28 palavras. Duração estimada: 10 a 12 segundos.

---

## SMS (até 160 caracteres)

Contagem inclui espaços, o link (28 caracteres depois de trocar o token pelo link curto) e o opt-out. O texto de cada SMS está no bloco abaixo da tabela, porque o token do link contém barras verticais.

| ID | Quando | Formato | Caracteres (conferidos por script) |
|---|---|---|---|
| SMS-01 | Antecipação, 02/11 às 19h | Convencional | 148 |
| SMS-02 | Antecipação, 03/11 às 17h | Convencional | 135 |
| SMS-03 | Ao vivo, 03/11 às 19h55 | Convencional | 122 |
| SMS-04 | Ao vivo, 03/11 às 20h05 | Convencional | 120 |
| SMS-05 | Atrasados, 03/11 às 20h20 | Convencional | 144 |
| SMS-06 | Atrasados, 03/11 às 20h40 | Convencional | 131 |
| SMS-07 | Flash, 03/11 às 20h | Flash | 127 |
| SMS-08 | Flash, 03/11 às 20h50 (na deixa da revelação, que começa às 20h51) | Flash | 119 |

**SMS-01**

```
Dra Proton: amanha, as 20h, live de revelacao da Black Proton Vitalicia, ao vivo. Seu link da live: [[LINK: live YouTube | sms | sms-01]] Sair: responda SAIR
```

**SMS-02**

```
Dra Proton: HOJE as 20h eu revelo a Black Proton Vitalicia, ao vivo. Seu link da live: [[LINK: live YouTube | sms | sms-02]] Sair: responda SAIR
```

**SMS-03**

```
Dra Proton: FALTAM 5 MIN! A live de revelacao comeca as 20h. Entre agora: [[LINK: live YouTube | sms | sms-03]] Sair: responda SAIR
```

**SMS-04**

```
Dra Proton: estou ao vivo! A live de revelacao ja comecou. Entre agora: [[LINK: live YouTube | sms | sms-04]] Sair: responda SAIR
```

**SMS-05**

```
Dra Proton: voce ainda nao entrou. A live esta no ar e a condicao so e revelada ao vivo. Entre: [[LINK: live YouTube | sms | sms-05]] Sair: responda SAIR
```

**SMS-06**

```
Dra Proton: ainda da tempo. A condicao esta sendo revelada ao vivo. Entre na live: [[LINK: live YouTube | sms | sms-06]] Sair: responda SAIR
```

**SMS-07**

```
Estou ao vivo! Dra Proton revela hoje a Black Proton Vitalicia. Toque e entre: [[LINK: live YouTube | sms | sms-07]] Sair: responda SAIR
```

**SMS-08**

```
A revelacao comecou. Dra Proton esta ao vivo agora. Volte para a live: [[LINK: live YouTube | sms | sms-08]] Sair: responda SAIR
```

**Opt-out e link.** O texto "Sair: responda SAIR" cumpre o opt-out por resposta. A contagem de caracteres da tabela foi conferida por script (token do link contado como 28 caracteres, só ASCII, máximo 160): todos os 8 SMS passam, o maior tem 148 caracteres. Testar o link curto em aparelho real antes do disparo (link quebrado em SMS custa o disparo inteiro). Todos os SMS apontam para o mesmo destino (`live YouTube`), com um link curto por ID e a UTM no encurtador: `utm_source=sms`, `utm_content=sms-NN`.

---

## Custo previsto (modelo da planilha de disparos)

Valores unitários da planilha do Desafio, a conferir com o contrato atual.

| Item | Unitário (em reais) | Contatos | Total |
|---|---|---|---|
| URA antecipação 02/11 | 0,08 | `[[CONFIRMAR: contatos]]` | contatos x 0,08 |
| URA antecipação 03/11 | 0,08 | `[[CONFIRMAR: contatos]]` | contatos x 0,08 |
| URA ao vivo | 0,08 | `[[CONFIRMAR: contatos]]` | contatos x 0,08 |
| URA atrasados | 0,08 | só quem não clicou | contatos x 0,08 |
| URA flash | 0,08 | `[[CONFIRMAR: contatos]]` | contatos x 0,08 |
| SMS convencional (6) | 0,07 | `[[CONFIRMAR: contatos]]` | contatos x 0,07 x 6 |
| SMS flash (2) | 0,13 | `[[CONFIRMAR: contatos]]` | contatos x 0,13 x 2 |

---

## Notas ao implementador

1. **Verba e público.** O Desafio disparou para 11 a 12 mil contatos de URA e 16 mil de SMS. Para a Black, a lista depende de `[[CONFIRMAR: meta de leads]]`. Calibrar os 6 SMS convencionais para o número real.
2. **Atrasados** só para quem não clicou no link da live. Se a ferramenta não separa quem clicou, trocar SMS-05 e SMS-06 por um único disparo para todos.
3. **URA-04 e SMS-08** (flash da revelação) são disparados manualmente por quem acompanha a live, na deixa do minuto 00:51 do roteiro (20h51, início do bloco 9, "A revelação da oferta"), nunca depois das 21h, nunca no preço (21h09) e nunca no carrinho aberto (21h28). Combinar o sinal com a equipe de live (`08_live_e_pitch`). O e-mail LV-03-05 sai às 20h51 em `06_emails/lembretes_da_live.md`.
4. **Gravação da URA.** As duas variantes de URA-01 (véspera e hoje) precisam de duas gravações. Combinar com a Dra. e entregar os arquivos .ogg com os nomes acima.
5. **Teste A/B sugerido.** SMS-02: "HOJE as 20h eu revelo" contra "HOJE as 20h voce decide uma vez". Mede clique no link.
5b. **Replay.** Nenhum SMS nem URA afirma ou nega replay (`[[PENDENTE: replay]]`). Por isso não existe a frase "só é dito uma vez" nestas peças.
6. **Compliance.** Nenhum disparo cita valor, bônus ou garantia. A revelação do valor é só ao vivo. O SMS é só um aviso; qualquer oferta é feita na live.
7. **Onde o Desafio tinha peça e a Black não.** Não há URA nem SMS diário de 5 dias, porque há uma só live. Também não há disparos pós-live de URA nesta rodada; se a equipe quiser URA de último dia do carrinho, usar o molde de URA-03 com a data de `[[PENDENTE: fechamento]]`.

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| SMS-01 | [[LINK: live YouTube | sms | sms-01]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| SMS-02 | [[LINK: live YouTube | sms | sms-02]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| SMS-03 | [[LINK: live YouTube | sms | sms-03]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| SMS-04 | [[LINK: live YouTube | sms | sms-04]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| SMS-05 | [[LINK: live YouTube | sms | sms-05]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| SMS-06 | [[LINK: live YouTube | sms | sms-06]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| SMS-07 | [[LINK: live YouTube | sms | sms-07]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| SMS-08 | [[LINK: live YouTube | sms | sms-08]] | Abre a transmissão da live de 03/11 pelo link curto do SMS | Equipe de YouTube (live); Tráfego (encurtador `bfp-sms`) |
| URA-01 a URA-04 | nenhum | A URA não leva link: a pessoa procura "Dra. Próton" no YouTube. A tecla de resposta só existe no doc novo | n/a |
