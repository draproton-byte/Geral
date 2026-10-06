# E-mails de eventos de pagamento (Hotmart/ListBoss): abandono, Pix, boleto, recusada, aprovada e reembolso

| Campo | Conteúdo |
|---|---|
| Peça | 18 e-mails transacionais e de recuperação: EP-AB-01/02 (carrinho abandonado), EP-PX-01/02 (Pix emitido), EP-PX-03/04 (Pix expirado), EP-BL-01/02 (boleto emitido), EP-BL-03/04 (boleto vencido), EP-RC-01/02 (compra recusada), EP-AP-01 (compra aprovada, versões Alunas e Não-alunas), EP-RB-01/02 (reembolso) |
| Canal | E-mail, disparado por evento do checkout via ListBoss (gatilho: entrada no evento, tag do evento) |
| Público | Todos os segmentos. A versão do segmento só muda em EP-AP-01 e nos blocos marcados |
| Momento | A partir de 03/11, depois da abertura do carrinho, até o fechamento (`[[PENDENTE: fechamento]]`) e durante a garantia para os de reembolso |
| Objetivo | Recuperar a venda sem pressão, com a decisão já tomada, e reduzir o arrependimento depois da compra |
| Consciência | 5 (decidiu e parou no último passo) |
| Trabalho contratado | "Eu quero uma decisão que eu só precise tomar uma vez." Cada e-mail lembra que a decisão já foi tomada e que o que travou é um detalhe de pagamento |
| Modelo no Desafio | Eventos do Clube Secreto em versão e-mail (carrinho abandonado, Pix emitido e expirado, boleto emitido e vencido, recusada, aprovada, reembolso) e e-mails do Desafio (carrinho abandonado, compra recusada, compra aprovada). Mantida a estrutura "o que aconteceu, por que é normal, o que fazer em 1 minuto" |

**Variáveis.** `{{nome}}`, `{{link_checkout}}`, `{{codigo_pix}}`, `{{link_boleto}}`, `{{codigo_barras}}`, `{{data_vencimento}}`, `{{link_area_membros}}`, `{{link_suporte}}`, `{{valor}}` (vem do checkout, nunca digitado no texto). Garantia: `[[PENDENTE: garantia]]`. Parcelas: `[[PENDENTE: número de parcelas]]`.

**O que mudou em relação ao Clube Secreto.** O Clube vendia "12x de R$199,31" e "7 dias de garantia incondicional". Nesta campanha, o valor vem do checkout (muda a cada lote) e a garantia é placeholder. Sempre que o Desafio dizia "lote de R$ 35", aqui o texto fala "lote vigente".

**Gatilhos de parada.** Cada sequência para quando a compra é aprovada.

---

## CARRINHO ABANDONADO (2 toques)

### EP-AB-01. Até 1 hora depois

**Assunto:** Você parou no último passo, {{nome}}
**Preview:** O seu lote ainda está aberto

{{nome}},

Você chegou até o checkout da Black Próton Vitalícia e parou no último passo.

Tudo bem. Uma decisão dessas mexe com a gente, ainda mais quando já houve compra que não entregou o que prometeu.

Para você não perder o fio, o resumo do que você escolheu:

✔ Acesso vitalício ao Clube Secreto
✔ Os 11 produtos do catálogo atual
✔ Pagamento único, com o parcelamento visível no checkout
✔ Garantia: [[PENDENTE: garantia]]

O lote em que você está vale até [[PENDENTE: data do lote]].

**Botão:** FINALIZAR MINHA ENTRADA
{{link_checkout}}

Se alguma dúvida travou, me responda ou chame o suporte: {{link_suporte}}

Dra. Próton

### EP-AB-02. 24 horas depois (se não comprou)

**Assunto:** O que normalmente trava, {{nome}}
**Preview:** Se foi dúvida, vale uma conversa rápida

{{nome}},

Ontem você chegou no checkout e não finalizou. Eu não vou te pressionar. Quero só te perguntar uma coisa: foi o valor, ou foi a dúvida se você vai dar conta?

Porque as duas têm resposta, e são respostas diferentes.

Se foi o valor: o checkout mostra as formas de pagamento, incluindo parcelado. E tem uma conta que vale fazer: quanto custa mais um ano no mesmo lugar?

Se foi a dúvida se vai dar conta: é o medo que muita gente tem, e é por isso que a oferta tem trilha de entrada e primeiro passo em 48 horas. `[[CONFIRMAR: trilha]]`

Qualquer uma das duas, me responda este e-mail.

**Botão:** VOLTAR PARA O CHECKOUT
{{link_checkout}}

Lembre: o lote vigente vale até [[PENDENTE: data do lote]].

Dra. Próton

---

## PIX EMITIDO (2 toques)

### EP-PX-01. Imediato

**Assunto:** {{nome}}, seu Pix da Vitalícia está pronto
**Preview:** Pague agora e seu acesso é liberado na hora

{{nome}},

Seu Pix da Black Próton Vitalícia foi gerado!

Copie o código e cole no app do seu banco, em "Pix Copia e Cola":

{{codigo_pix}}

✅ Assim que o pagamento cair, seu acesso é liberado.
⚠️ O código expira em pouco tempo. Não deixe para depois.

Hoje à noite você pode estar fazendo o seu primeiro passo.

Dra. Próton

### EP-PX-02. 30 minutos a 1 hora depois (se não pago)

**Assunto:** Seu Pix ainda está esperando, {{nome}}
**Preview:** Leva menos de um minuto

{{nome}},

Seu Pix da Black Próton Vitalícia ainda não foi pago.

É só copiar e colar no app do banco:

{{codigo_pix}}

Se o código expirou, gere um novo pelo link:
{{link_checkout}}

A decisão que você tomou merece ser concluída. 💜

Dra. Próton

---

## PIX EXPIRADO (2 toques)

### EP-PX-03. No vencimento do Pix

**Assunto:** Seu código Pix expirou, {{nome}}
**Preview:** Gere um novo em 1 minuto

{{nome}},

O código Pix que você gerou para a Black Próton Vitalícia expirou.

Mas é só gerar outro, leva um minuto:

**Botão:** GERAR NOVO PIX
{{link_checkout}}

Se preferir, você também pode pagar no cartão, em até [[PENDENTE: número de parcelas]].

Seu lote continua válido até [[PENDENTE: data do lote]]. Depois dessa data, o valor sobe.

Dra. Próton

### EP-PX-04. 24 horas depois

**Assunto:** O Pix passou. A sua decisão também passou?
**Preview:** Não vamos deixar um detalhe te impedir

{{nome}},

Ontem seu Pix expirou. Isso acontece com muita gente, geralmente porque o dia apertou.

Eu só queria te dizer: se a decisão ainda está de pé, é só gerar outro. Se mudou, me conta, que eu quero entender.

**Botão:** GERAR NOVO PAGAMENTO
{{link_checkout}}

Dra. Próton

---

## BOLETO EMITIDO (2 toques)

### EP-BL-01. Imediato

**Assunto:** {{nome}}, seu boleto da Vitalícia está aqui
**Preview:** Pague até {{data_vencimento}} para garantir o seu lote

{{nome}},

Seu boleto da Black Próton Vitalícia foi gerado.

**Botão:** VISUALIZAR MEU BOLETO
{{link_boleto}}

Ou copie o código de barras:
{{codigo_barras}}

⚠️ IMPORTANTE
O boleto leva até 3 dias úteis para compensar depois do pagamento, e o acesso só é liberado depois disso. `[[CONFIRMAR: prazo de compensação]]`

[[PENDENTE: regra de lote para boleto, ou seja, qual valor vale se o lote virar antes da compensação]]

💡 Quer começar hoje? Se você pagar via Pix, o acesso é liberado na hora:
**Botão secundário:** PAGAR VIA PIX
{{link_checkout}}

Dra. Próton

### EP-BL-02. 1 dia antes do vencimento

**Assunto:** Seu boleto vence amanhã, {{nome}}
**Preview:** Não deixe para o último momento

{{nome}},

Seu boleto da Black Próton Vitalícia vence amanhã, {{data_vencimento}}.

Se ainda não pagou, o código está aqui:
{{codigo_barras}}

Se perceber que não vai dar tempo, gere um Pix e o acesso é liberado na hora:
{{link_checkout}}

Dra. Próton

---

## BOLETO VENCIDO (2 toques)

### EP-BL-03. Um dia depois do vencimento

**Assunto:** {{nome}}, seu boleto venceu (mas dá para resolver)
**Preview:** Gere um novo pagamento em 1 minuto

{{nome}},

Seu boleto da Black Próton Vitalícia venceu.

Calma, acontece com muita gente, e é fácil resolver. Você escolhe como pagar:

→ Pix: acesso liberado na hora
→ Cartão: em até [[PENDENTE: número de parcelas]]
→ Boleto: um novo, com nova data

**Botão:** GERAR NOVO PAGAMENTO
{{link_checkout}}

O lote vigente vale até [[PENDENTE: data do lote]].

Dra. Próton

### EP-BL-04. Três dias depois

**Assunto:** Última chamada do seu boleto, {{nome}}
**Preview:** Se ainda faz sentido para você, este é o momento

{{nome}},

Seu boleto venceu há alguns dias, e eu não quero que você perca por um detalhe.

Eu sei como é: o boleto vira "depois eu vejo", e o "depois" vira outro recomeço.

Se a decisão ainda está de pé, gere um novo pagamento por aqui:
{{link_checkout}}

Se não está, tudo bem. Me responda e eu ajudo no que for preciso.

Dra. Próton

---

## COMPRA RECUSADA (2 toques)

### EP-RC-01. Imediato

**Assunto:** {{nome}}, seu pagamento não foi aprovado
**Preview:** É rápido de resolver. O seu lote está reservado

{{nome}},

Você decidiu entrar na Black Próton Vitalícia, mas o pagamento não foi aprovado.

Isso acontece bastante e quase sempre é:
- limite do cartão
- bloqueio automático de segurança do banco
- dado digitado errado

Não tem a ver com você. É só tentar de novo:

**Botão:** TENTAR NOVAMENTE
{{link_checkout}}

Você pode usar outro cartão, dividir em dois cartões `[[CONFIRMAR: divisão em dois cartões no checkout]]` ou pagar via Pix.

Sua decisão já foi tomada. Não deixe um detalhe te impedir.

Dra. Próton

### EP-RC-02. 24 horas depois

**Assunto:** Quase foi, {{nome}}. Falta só destravar o pagamento
**Preview:** Seu lote ainda vale até [[PENDENTE: data do lote]]

{{nome}},

Ontem seu pagamento não passou. Se foi o banco, uma ligação de 2 minutos para o cartão costuma liberar. Se foi o limite, o Pix ou outro cartão resolvem.

Se for outra coisa, me conta. A equipe do suporte pode ajudar: {{link_suporte}}

**Botão:** TENTAR DE NOVO
{{link_checkout}}

Dra. Próton

---

## COMPRA APROVADA (1 e-mail, 2 versões)

### EP-AP-01 / Não-alunas

**Assunto:** 🎉 Você está dentro, {{nome}}
**Preview:** Seu acesso e os 3 primeiros passos estão aqui

{{nome}}, seja muito bem-vinda.

Você acaba de tomar uma decisão que só se toma uma vez. É a última vez que você precisa recomeçar.

**Seus dados de acesso**
Área de Membros: {{link_area_membros}}
Login: o e-mail que você usou na compra
(A plataforma também te enviou um e-mail de acesso. Veja a caixa de spam e promoções.)

**Seus 3 primeiros passos**
1. Acesse a Área de Membros e assista ao vídeo de boas-vindas.
2. Entre no grupo e no suporte: {{link_suporte}}
3. Abra a sua trilha de entrada e faça o primeiro passo nas próximas 48 horas. `[[PENDENTE: ordem de entrada]]`

**Como funciona daqui para frente**
Você não precisa dar conta de tudo ao mesmo tempo. Precisa seguir a trilha, um passo de cada vez. Sem prazo, sem pressão de "perdi o mês".

Garantia: [[PENDENTE: garantia]]

Não espere a segunda-feira. Faça o primeiro passo hoje. É ele que quebra o padrão de "começar depois".

**Botão:** ACESSAR A MINHA ÁREA DE MEMBROS

Transformei dor em método. Agora é a sua vez.

Com carinho,
Dra. Próton

### EP-AP-01 / Alunas

**Assunto:** 🎉 Agora é para sempre, {{nome}}
**Preview:** O que muda no seu acesso e os 3 primeiros passos

{{nome}}, bem-vinda de vez.

Você já era do Clube. Agora é para sempre, e com tudo o que eu criei na mesma conta.

**O que muda para você**
O seu acesso ao Clube Secreto passa a ser vitalício, e os 11 produtos do catálogo entram junto. `[[PENDENTE: regra de transição para aluna com acesso ativo]]`

**Seus 3 primeiros passos**
1. Entre na Área de Membros: {{link_area_membros}}
2. Veja o que foi liberado e abra a sua trilha de entrada. `[[PENDENTE: ordem de entrada]]`
3. Continue exatamente do ciclo em que você está. O que você já fez conta e não começa do zero.

Garantia: [[PENDENTE: garantia]]

**Botão:** ACESSAR A MINHA ÁREA DE MEMBROS

Obrigada por continuar.

Com carinho,
Dra. Próton

---

## REEMBOLSO (2 toques)

### EP-RB-01. Pedido recebido

**Assunto:** Recebemos seu pedido de reembolso, {{nome}}
**Preview:** Já estamos processando. Você não precisa fazer mais nada

{{nome}},

Recebemos o seu pedido de reembolso da Black Próton Vitalícia.

Ele já está sendo processado, e você não precisa fazer mais nada. Assim que for concluído, a gente avisa por aqui.

Eu queria só te fazer uma pergunta, com todo o respeito à sua decisão: se o motivo foi alguma dificuldade, como problema de acesso, falta de tempo ou não saber por onde começar, me conta. Muitas vezes um ajuste pequeno resolve, e a gente adoraria te ajudar.

Mas se simplesmente não era para você agora, tudo bem também. A decisão é 100% sua.

Suporte: {{link_suporte}}

Com carinho,
Dra. Próton

### EP-RB-02. Reembolso concluído

**Assunto:** Seu reembolso foi concluído, {{nome}}
**Preview:** Prazos para o valor aparecer

{{nome}},

Seu reembolso da Black Próton Vitalícia foi concluído. ✅

Prazos para o valor aparecer:
- Pix: até [[PENDENTE: prazo Pix]] dias úteis
- Cartão: pode levar até 2 faturas, dependendo do banco

Obrigada por ter confiado em mim, mesmo que por alguns dias.

Se um dia sentir que é a hora de voltar, existirá outra oferta, com as regras daquele momento. Eu estarei por aqui.

Com carinho,
Dra. Próton

---

## Notas ao implementador

1. **Eventos.** Criar no ListBoss os eventos de compra aprovada, compra recusada, boleto gerado, aguardando pagamento (Pix emitido), abandono de carrinho e pedido de reembolso para o novo produto, por segmento (ver `07_listboss_ura_sms/listboss_api_e_email.md`).
2. **Tags.** Seguir o padrão do documento de automação: `MM/AA - PRODUTO - COMPRA APROVADA` etc. Para a Black, `11/26 - BLACK VITALICIA - ...`.
3. **Garantia e reembolso.** O texto de EP-RB-01 não menciona prazo. Quando a garantia estiver definida, incluir uma frase no corpo de EP-AP-01 e no checkout. Nunca prometer devolução sem regra escrita.
4. **Regra de lote no boleto.** Se o lote virar antes da compensação, o sistema precisa honrar o preço do dia do boleto ou avisar o contrário. Afirmar apenas o que o checkout garante. `[[PENDENTE: regra]]`
5. **Frequência.** Máximo de 2 toques por evento (3 apenas para quem escolheu boleto), sempre com parada na compra aprovada, e sem enviar e-mail de recuperação nos 30 minutos que antecedem o fechamento do carrinho (a fila de últimas horas já cobre).
6. **Teste A/B.** EP-AB-01: assunto "Você parou no último passo" contra "O seu lote ainda está aberto". EP-PX-02 com e sem a frase final.
7. **Onde o Desafio tinha peça e a Black não.** O e-mail "Golden Ticket" não tem par. O e-mail "compra aprovada" do Desafio mandava para o grupo e o Teste de Bloqueios; aqui manda para a Área de Membros e a trilha, e o grupo vem no passo 2.
8. **EP-AP-01 e PC-D0.** O e-mail de compra aprovada é transacional e sai na hora. O D0 do pós-compra (`pos_compra_e_trilha.md`) sai duas horas depois, com tom de boas-vindas, para não repetir a lista de passos.
