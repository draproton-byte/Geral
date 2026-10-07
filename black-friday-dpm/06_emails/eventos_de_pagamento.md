# E-mails de eventos de pagamento (Hotmart/ListBoss): abandono, Pix, boleto, recusada, aprovada e reembolso

| Campo | Conteúdo |
|---|---|
| Peça | 15 e-mails transacionais e de recuperação (16 versões): EP-AB-01/02 (carrinho abandonado), EP-PX-01/02 (Pix emitido), EP-PX-03/04 (Pix expirado), EP-BL-01/02 (boleto emitido), EP-BL-03/04 (boleto vencido), EP-RC-01/02 (compra recusada), EP-AP-01 (compra aprovada, versões Alunas e Não-alunas), EP-RB-01/02 (reembolso) |
| Canal | E-mail, disparado por evento do checkout via ListBoss (gatilho: entrada no evento, tag do evento) |
| Público | Todos os segmentos. A versão do segmento só muda em EP-AP-01 e nos blocos marcados |
| Momento | A partir de 03/11, depois da abertura do carrinho (21h28), até o fechamento (`[[PENDENTE: fechamento]]`) e durante a garantia para os de reembolso |
| Objetivo | Recuperar a venda sem pressão, com a decisão já tomada, e reduzir o arrependimento depois da compra |
| Consciência | 5 (decidiu e parou no último passo) |
| Trabalho contratado | "Eu quero uma decisão que eu só precise tomar uma vez." Cada e-mail lembra que a decisão já foi tomada e que o que travou é um detalhe de pagamento |
| Modelo no Desafio | Eventos do Clube Secreto em versão e-mail (carrinho abandonado, Pix emitido e expirado, boleto emitido e vencido, recusada, aprovada, reembolso) e e-mails do Desafio (carrinho abandonado, compra recusada, compra aprovada). Mantida a estrutura "o que aconteceu, por que é normal, o que fazer em 1 minuto" |

**Prazos de pagamento (dados do Manual do Comercial).** O Pix vence em **48 horas** e o boleto em **4 a 5 dias**. A copy não promete prazo diferente desses: onde fala de validade do Pix, diz 48 horas; onde fala de boleto, diz 4 a 5 dias e usa `{{data_vencimento}}` para a data exata. O acesso é liberado quando o pagamento é confirmado, e nenhum texto afirma "na hora" para boleto.

**Variáveis.** `{{nome}}`, `{{codigo_pix}}`, `{{codigo_barras}}`, `{{link_boleto}}`, `{{data_vencimento}}`, `{{valor}}` (vem do checkout, nunca digitado no texto). `{{codigo_pix}}`, `{{codigo_barras}}` e `{{link_boleto}}` são dados do pedido, gerados pela Hotmart para cada pessoa: não são links do mapa. Garantia: `[[PENDENTE: garantia]]`. Parcelas: `[[CONFIRMAR: número de parcelas]]`.

**Links.** Todo link do mapa aparece como token em linha própria, no formato `[[LINK: <destino> | email | <ID>]]`. Nos e-mails de recuperação, o token do botão é o do checkout. Como estes e-mails são disparados por evento, durante todo o carrinho aberto, o token escrito é o do **segmento S3 no Lote Especial** (`checkout S3-ESP`, o primeiro lote da janela). A ferramenta troca `S3` por `S1` ou `S2` pela lista do contato e `ESP` por `1L` ou `UL` pelo lote vigente na hora do envio (o lote muda em `[[PENDENTE: data do lote]]`; `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`). O ID do e-mail fica o mesmo. Compra aprovada leva à página `onboarding`; suporte usa `suporte WhatsApp`.

**O que mudou em relação ao Clube Secreto.** O Clube usava o valor e a garantia do Clube escritos no texto. Nesta campanha, o valor vem do checkout (muda a cada lote) e a garantia é placeholder. Sempre que o Desafio dizia o valor do lote, aqui o texto fala "lote vigente".

**Gatilhos de parada.** Cada sequência para quando a compra é aprovada.

**Um botão por e-mail.** O código do Pix, o código de barras e os links de suporte são texto visível, não botão.

**Legibilidade e acessibilidade (vale para todos os e-mails deste arquivo).** Texto simples, fonte de pelo menos 16 px, entrelinha 1,5, contraste alto (40% da base tem mais de 50 anos). Código de Pix e de barras em linha própria, em fonte grande e selecionável (nunca em imagem). Botão de texto, nunca imagem, com o endereço do link escrito por extenso abaixo. Imagem ou logo, se houver, com texto alternativo descritivo. Nada depende de cor ou de emoji. Sem emoji no assunto. Assunto até 50 caracteres.

**Gênero.** Antes da compra, texto neutro. EP-AP-01 e EP-RB aceitam o feminino.

---

## CARRINHO ABANDONADO (2 toques)

### EP-AB-01. Até 1 hora depois

**Assunto:** Você parou no último passo, {{nome}}
**Preview:** O resumo do que você escolheu está aqui

{{nome}},

Você chegou até o checkout da Black Próton Vitalícia e parou no último passo.

Tudo bem. Uma decisão dessas mexe com a gente. Para você não perder o fio, o resumo do que você escolheu:

✔ Acesso vitalício ao Clube Secreto
✔ Os 11 produtos do catálogo atual
✔ Pagamento único, com o parcelamento visível no checkout
✔ Garantia: [[PENDENTE: garantia]]

O lote em que você está vale até [[PENDENTE: data do lote]].

**Botão:** FINALIZAR MINHA ENTRADA
[[LINK: checkout S3-ESP | email | ep-ab-01]]

Se alguma dúvida travou, me responda ou chame o suporte:
[[LINK: suporte WhatsApp | email | ep-ab-01]]

Dra. Próton

### EP-AB-02. 24 horas depois (se não comprou)

**Assunto:** O que normalmente trava, {{nome}}
**Preview:** Se foi dúvida, vale uma conversa rápida

{{nome}},

Ontem você chegou no checkout e não finalizou. Eu não vou te pressionar. Quero só te perguntar uma coisa: foi o valor, ou foi a dúvida se você vai dar conta?

Porque as duas têm resposta, e são respostas diferentes.

Se foi o valor: o checkout mostra as formas de pagamento, incluindo parcelado. E tem uma conta que vale fazer: quanto custa mais um ano no mesmo lugar?

Se foi a dúvida se vai dar conta: é o medo que muita gente tem, e é por isso que a oferta tem trilha de entrada e primeiro passo em 48 horas. [[CONFIRMAR: trilha]]

Em qualquer um dos dois casos, me responda este e-mail.

**Botão:** VOLTAR PARA O CHECKOUT
[[LINK: checkout S3-ESP | email | ep-ab-02]]

Lembre: o lote vigente vale até [[PENDENTE: data do lote]].

Dra. Próton

---

## PIX EMITIDO (2 toques)

### EP-PX-01. Imediato

**Assunto:** {{nome}}, seu Pix da Vitalícia está pronto
**Preview:** Assim que o pagamento for confirmado, o acesso é liberado

{{nome}},

Seu Pix da Black Próton Vitalícia está pronto.

Copie o código e cole no app do seu banco, em "Pix Copia e Cola":

{{codigo_pix}}

Este código vale por 48 horas. Assim que o pagamento for confirmado, o seu acesso é liberado.

Depois da confirmação, o seu primeiro passo já está esperando por você.

**Botão:** VER MEU PIX
[[LINK: checkout S3-ESP | email | ep-px-01]]

Dra. Próton

### EP-PX-02. 30 minutos a 1 hora depois (se não pago)

**Assunto:** Seu Pix ainda está esperando, {{nome}}
**Preview:** Leva menos de um minuto

{{nome}},

Falta só um passo: o Pix que você gerou ainda não foi pago.

É só copiar e colar no app do banco:

{{codigo_pix}}

O código vale por 48 horas. Se ele expirar, você gera outro pelo link.

**Botão:** VER MEU PIX
[[LINK: checkout S3-ESP | email | ep-px-02]]

Se a decisão ainda está de pé, é só concluir.

Dra. Próton

---

## PIX EXPIRADO (2 toques)

### EP-PX-03. No vencimento do Pix (48 horas depois da emissão)

**Assunto:** Seu código Pix expirou, {{nome}}
**Preview:** Gere um novo em 1 minuto

{{nome}},

O código Pix que você gerou para a Black Próton Vitalícia expirou, depois das 48 horas de validade.

Mas é só gerar outro, leva um minuto.

**Botão:** GERAR NOVO PIX
[[LINK: checkout S3-ESP | email | ep-px-03]]

Se preferir, você também pode pagar no cartão, em até [[CONFIRMAR: número de parcelas]].

Seu lote continua válido até [[PENDENTE: data do lote]]. Depois dessa data, o valor muda.

Dra. Próton

### EP-PX-04. 24 horas depois

**Assunto:** Seu Pix expirou. A decisão ainda vale?
**Preview:** Se a decisão ainda vale, leva um minuto

{{nome}},

Faz um dia que o seu Pix expirou. Isso acontece com muita gente, geralmente porque o dia apertou.

Eu só queria te dizer: se a decisão ainda está de pé, é só gerar outro. Se mudou, me conta, que eu quero entender.

**Botão:** GERAR NOVO PAGAMENTO
[[LINK: checkout S3-ESP | email | ep-px-04]]

Dra. Próton

---

## BOLETO EMITIDO (2 toques)

### EP-BL-01. Imediato

**Assunto:** {{nome}}, seu boleto da Vitalícia está aqui
**Preview:** O boleto vence em {{data_vencimento}}

{{nome}},

Seu boleto da Black Próton Vitalícia foi gerado. Ele vale por 4 a 5 dias, até {{data_vencimento}}.

Se preferir, copie o código de barras:
{{codigo_barras}}

Importante: o boleto leva até 3 dias úteis para compensar depois do pagamento, e o acesso só é liberado depois disso. [[CONFIRMAR: prazo de compensação]]

[[CONFIRMAR: regra de lote para boleto, ou seja, qual valor vale se o lote virar antes da compensação]]

Quer começar antes? Se você pagar via Pix, o acesso é liberado assim que o pagamento for confirmado. Para trocar a forma de pagamento, volte ao checkout:
[[LINK: checkout S3-ESP | email | ep-bl-01]]

**Botão:** VISUALIZAR MEU BOLETO
{{link_boleto}}

Dra. Próton

### EP-BL-02. 1 dia antes do vencimento

**Assunto:** Seu boleto vence amanhã, {{nome}}
**Preview:** Não deixe para o último momento

{{nome}},

Amanhã, {{data_vencimento}}, vence o boleto que você gerou para a Black Próton Vitalícia.

Se ainda não pagou, o código está aqui:
{{codigo_barras}}

Se perceber que não vai dar tempo, gere um Pix pelo checkout: o acesso é liberado assim que o pagamento for confirmado.

**Botão:** VISUALIZAR MEU BOLETO
{{link_boleto}}

Para trocar a forma de pagamento:
[[LINK: checkout S3-ESP | email | ep-bl-02]]

Dra. Próton

---

## BOLETO VENCIDO (2 toques)

### EP-BL-03. Um dia depois do vencimento

**Assunto:** {{nome}}, seu boleto venceu (dá para resolver)
**Preview:** Gere um novo pagamento em 1 minuto

{{nome}},

O boleto passou do vencimento, e tudo bem: dá para resolver em um minuto. Você escolhe como pagar:

- Pix: o acesso é liberado quando o pagamento é confirmado (o código vale 48 horas)
- Cartão: em até [[CONFIRMAR: número de parcelas]]
- Boleto: um novo, com nova data (4 a 5 dias de validade)

**Botão:** GERAR NOVO PAGAMENTO
[[LINK: checkout S3-ESP | email | ep-bl-03]]

O lote vigente vale até [[PENDENTE: data do lote]].

Dra. Próton

### EP-BL-04. Três dias depois

**Assunto:** Ainda faz sentido para você, {{nome}}?
**Preview:** Se sim, este é o momento de resolver

{{nome}},

Faz alguns dias que o seu boleto venceu, e eu não quero que você perca por um detalhe.

Eu sei como é: o boleto vira "depois eu vejo", e o "depois" vira outro recomeço.

Se a decisão ainda está de pé, gere um novo pagamento por aqui.

**Botão:** GERAR NOVO PAGAMENTO
[[LINK: checkout S3-ESP | email | ep-bl-04]]

Se não está, tudo bem. Me responda e eu ajudo no que for preciso.

Dra. Próton

---

## COMPRA RECUSADA (2 toques)

### EP-RC-01. Imediato

**Assunto:** {{nome}}, seu pagamento não foi aprovado
**Preview:** É rápido de resolver. Tente de novo em 1 minuto

{{nome}},

Você decidiu entrar na Black Próton Vitalícia, mas o pagamento não foi aprovado.

Isso acontece bastante e quase sempre é:
- limite do cartão
- bloqueio automático de segurança do banco
- dado digitado errado

Não tem a ver com você. É só tentar de novo.

Você pode usar outro cartão, dividir em dois cartões [[CONFIRMAR: divisão em dois cartões no checkout]] ou pagar via Pix (o código vale 48 horas).

**Botão:** TENTAR NOVAMENTE
[[LINK: checkout S3-ESP | email | ep-rc-01]]

Se não conseguir, me responda este e-mail e a equipe ajuda.

Dra. Próton

### EP-RC-02. 24 horas depois

**Assunto:** Quase, {{nome}}. Falta destravar o pagamento
**Preview:** O lote vigente vale até [[PENDENTE: data do lote]]

{{nome}},

Se o pagamento de ontem não passou por causa do banco, uma ligação de 2 minutos para o cartão costuma liberar. Se foi o limite, o Pix ou outro cartão resolvem.

Se for outra coisa, me conta. A equipe do suporte pode ajudar:
[[LINK: suporte WhatsApp | email | ep-rc-02]]

**Botão:** TENTAR DE NOVO
[[LINK: checkout S3-ESP | email | ep-rc-02]]

Dra. Próton

---

## COMPRA APROVADA (1 e-mail, 2 versões)

### EP-AP-01 / Não-alunas

**Assunto:** Você está dentro, {{nome}}
**Preview:** Seu acesso e os 3 primeiros passos estão aqui

{{nome}}, seja muito bem-vinda.

Você acaba de tomar uma decisão que só se toma uma vez. É a última vez que você precisa recomeçar.

**Seus dados de acesso**
Área de Membros: pelo botão abaixo
Login: o e-mail que você usou na compra
(A plataforma também enviou um e-mail de acesso. Veja a caixa de spam e promoções.)

**Seus 3 primeiros passos**
1. Acesse a Área de Membros e assista ao vídeo de boas-vindas.
2. Entre no grupo da Vitalícia e salve o suporte. Os dois links estão na página de boas-vindas, no botão abaixo.
3. Abra a sua trilha de entrada e faça o primeiro passo nas próximas 48 horas. [[CONFIRMAR: ordem de entrada]]

**Como funciona daqui para frente**
Você não precisa dar conta de tudo ao mesmo tempo. Precisa seguir a trilha, um passo de cada vez. Sem prazo, sem pressão de "perdi o mês".

Garantia: [[PENDENTE: garantia]]

Não espere a segunda-feira. Faça o primeiro passo hoje. Ele ajuda a quebrar o hábito de "começar depois".

**Botão:** ACESSAR A MINHA ÁREA DE MEMBROS
[[LINK: onboarding | email | ep-ap-01]]

Transformei dor em método. Agora é a sua vez.

Com carinho,
Dra. Próton

### EP-AP-01 / Alunas

**Assunto:** Agora é para sempre, {{nome}}
**Preview:** O que muda no seu acesso e os 3 primeiros passos

{{nome}}, bem-vinda de vez.

Você já era do Clube. Agora é para sempre, e com tudo o que eu criei na mesma conta.

**O que muda para você**
O seu acesso ao Clube Secreto passa a ser vitalício, e os 11 produtos do catálogo entram junto. [[CONFIRMAR: regra de transição para aluna com acesso ativo]]

**Seus 3 primeiros passos**
1. Entre na Área de Membros pelo botão abaixo.
2. Veja o que foi liberado e abra a sua trilha de entrada. [[CONFIRMAR: ordem de entrada]]
3. Continue exatamente do ciclo em que você está. O que você já fez conta e não começa do zero.

Garantia: [[PENDENTE: garantia]]

**Botão:** ACESSAR A MINHA ÁREA DE MEMBROS
[[LINK: onboarding | email | ep-ap-01]]

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

A decisão é sua, e eu respeito. Se você quiser me contar o motivo, eu vou ler com atenção, só para entender e melhorar. Não é para mudar o seu pedido. Se preferir não contar, tudo bem também.

Se o motivo foi um problema de acesso, o suporte resolve, e isso não altera o seu reembolso.

Suporte:
[[LINK: suporte WhatsApp | email | ep-rb-01]]

Com carinho,
Dra. Próton

### EP-RB-02. Reembolso concluído

**Assunto:** Seu reembolso foi concluído, {{nome}}
**Preview:** Prazos para o valor aparecer

{{nome}},

Seu reembolso da Black Próton Vitalícia foi concluído.

Prazos para o valor aparecer:
- Pix: até [[CONFIRMAR: prazo do estorno por Pix]] dias úteis
- Cartão: pode levar até 2 faturas, dependendo do banco

Obrigada por ter confiado em mim, mesmo que por alguns dias.

Com carinho,
Dra. Próton

---

## Notas ao implementador

1. **Eventos.** Criar no ListBoss os eventos de compra aprovada, compra recusada, boleto gerado, aguardando pagamento (Pix emitido), abandono de carrinho e pedido de reembolso para o novo produto, por segmento (ver `07_listboss_ura_sms/listboss_api_e_email.md`).
2. **Tags.** Seguir o padrão do documento de automação: `MM/AA - PRODUTO - COMPRA APROVADA` etc. Para a Black, `11/26 - BLACK VITALICIA - ...`.
3. **Garantia e reembolso.** O texto de EP-RB-01 não menciona prazo nem tenta reter. Quando a garantia estiver definida, incluir uma frase no corpo de EP-AP-01 e no checkout. Nunca prometer devolução sem regra escrita.
4. **Regra de lote no boleto.** Se o lote virar antes da compensação, o sistema precisa honrar o preço do dia do boleto ou avisar o contrário. Afirmar apenas o que o checkout garante. `[[CONFIRMAR: regra]]`
5. **Frequência.** Máximo de 2 toques por evento, sempre com parada na compra aprovada, e sem enviar e-mail de recuperação nos 30 minutos que antecedem o fechamento do carrinho (a fila de últimas horas já cobre).
6. **Teste A/B.** EP-AB-01: assunto "Você parou no último passo" contra "O resumo do que você escolheu". EP-PX-02 com e sem a frase final.
7. **Onde o Desafio tinha peça e a Black não.** O e-mail "Golden Ticket" não tem par. O e-mail "compra aprovada" do Desafio mandava para o grupo e o Teste de Bloqueios; aqui manda para a Área de Membros e a trilha, e o grupo vem no passo 2.
8. **EP-AP-01 e PC-D0.** O e-mail de compra aprovada é transacional e sai na hora. O D0 do pós-compra (`pos_compra_e_trilha.md`) sai duas horas depois, com tom de boas-vindas, para não repetir a lista de passos.
9. **Prazos conferidos.** Pix 48 horas e boleto 4 a 5 dias vêm do Manual do Comercial. Nenhuma peça deste arquivo diz outro prazo. Ao trocar a validade no checkout, trocar também EP-PX-01, EP-PX-02, EP-PX-03, EP-BL-01, EP-BL-03 e EP-RC-01.
10. **Pix e boleto perto do fechamento.** `[[CONFIRMAR: o checkout honra o lote e o carrinho para Pix ou boleto gerado antes do fechamento e pago depois]]`.

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| EP-AB-01 | [[LINK: checkout S3-ESP | email | ep-ab-01]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-AB-01 | [[LINK: suporte WhatsApp | email | ep-ab-01]] | Fala com o suporte (apoio, texto visível) | Suporte |
| EP-AB-02 | [[LINK: checkout S3-ESP | email | ep-ab-02]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-PX-01 | [[LINK: checkout S3-ESP | email | ep-px-01]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-PX-02 | [[LINK: checkout S3-ESP | email | ep-px-02]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-PX-03 | [[LINK: checkout S3-ESP | email | ep-px-03]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-PX-04 | [[LINK: checkout S3-ESP | email | ep-px-04]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-BL-01 | [[LINK: checkout S3-ESP | email | ep-bl-01]] | Volta ao checkout para trocar a forma de pagamento (apoio); o botão principal usa {{link_boleto}}, o boleto do pedido | Financeiro / Hotmart |
| EP-BL-02 | [[LINK: checkout S3-ESP | email | ep-bl-02]] | Volta ao checkout para trocar a forma de pagamento (apoio); o botão principal usa {{link_boleto}}, o boleto do pedido | Financeiro / Hotmart |
| EP-BL-03 | [[LINK: checkout S3-ESP | email | ep-bl-03]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-BL-04 | [[LINK: checkout S3-ESP | email | ep-bl-04]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-RC-01 | [[LINK: checkout S3-ESP | email | ep-rc-01]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-RC-02 | [[LINK: checkout S3-ESP | email | ep-rc-02]] | Retoma o pagamento no checkout do segmento e do lote vigente (botão principal) | Financeiro / Hotmart |
| EP-RC-02 | [[LINK: suporte WhatsApp | email | ep-rc-02]] | Fala com o suporte (apoio, texto visível) | Suporte |
| EP-RB-01 | [[LINK: suporte WhatsApp | email | ep-rb-01]] | Fala com o suporte (único link da peça, sem botão por desenho) | Suporte |
| EP-AP-01 / Não-alunas | [[LINK: onboarding | email | ep-ap-01]] | Página de boas-vindas pós-compra, com o acesso à Área de Membros, o grupo e o suporte (botão principal) | Web designer |
| EP-AP-01 / Alunas | [[LINK: onboarding | email | ep-ap-01]] | Página de boas-vindas pós-compra, com o acesso à Área de Membros (botão principal) | Web designer |
| EP-BL-01 e EP-BL-02 (botão) | `{{link_boleto}}` | Boleto do pedido, gerado pela Hotmart (variável do pedido, sem token do mapa) | Financeiro / Hotmart |
| EP-RB-02 | nenhum | E-mail de acolhimento, sem link nem botão por desenho | n/a |
