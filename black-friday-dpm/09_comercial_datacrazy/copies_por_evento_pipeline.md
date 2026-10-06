# Copies por evento do pipeline: Black Próton Vitalícia (WhatsApp, Data Crazy)

**Peça:** uma copy (dois toques) para cada etapa dos dois pipelines da Black no Data Crazy: Pipeline 1 (Vitalícia, quem ainda não é do Clube, incluindo a turma Desafio, Imersão e Aulão) e Pipeline 2 (upgrade de aluna do Clube)
**Canal:** WhatsApp via CRM (Data Crazy), mensagens disparadas a partir da interação da pessoa, nunca em bloco
**Público:** quem gerou evento de pagamento ou de interesse (lista de interesse, carrinho abandonado, Pix ou boleto aberto, compra recusada, compra expirada, compra aprovada, reembolso) e as alunas do Clube em upgrade
**Momento:** a lista de interesse roda de 13/10 a 03/11. Todos os eventos de checkout rodam a partir de 03/11, depois da live (o checkout só existe depois da revelação)
**Objetivo:** devolver o pagamento a quem já decidiu, tirar obstáculo de quem travou, confirmar a compra com calor (para reduzir reembolso) e ouvir antes de reter
**Estágio de consciência:** 4 e 5 (a pessoa já viu a oferta ou já pagou parte dela)
**Trabalho contratado:** "Eu quero uma decisão que eu só precise tomar uma vez." Cada mensagem ou devolve a decisão tomada ou tira o que está no caminho
**Modelo no Desafio:** `11_comercial_copies_por_evento_pipeline.md` (E1 a E8 do Pipeline 1 do Clube e D1 a D7 do Pipeline 2, turma Desafio)

> **O que muda da Black para o Clube do Desafio.** (1) Não existe checkout antes de 03/11: o carrinho abandonado, o Pix e o boleto só nascem depois da live. (2) O valor muda por lote e por segmento: o link é sempre o do lote e do segmento da pessoa. (3) O pipeline de "turma Desafio" vira variante de texto dentro do Pipeline 1, e entra um pipeline novo: o upgrade de aluna. (4) O dado medido de janela: Pix vence em 48 horas e boleto em 4 a 5 dias (Manual do Comercial do Desafio). (5) O Clube do Desafio vendia "entrada de R$ 500"; na Black o parcelamento é `[[PENDENTE: parcelamento máximo]]` e a entrada só existe se `[[CONFIRMAR: entrada mais parcelas]]`.

---

## As regras que valem para todas

1. **Mensagem curta**, quebrada em linhas, **uma linha em branco entre cada linha**. Nada de parágrafo de e-mail.
2. **"Para", nunca "pra".** Negrito com um asterisco de cada lado (`*assim*`).
3. **Link em linha própria, separado do CTA.** Um link só por mensagem.
4. **Resposta dela interrompe a régua e cai para humano.** Quem pede para parar sai na hora, sem terceira mensagem.
5. **Dois toques por evento e para.** Depois do toque 2, registrar e encerrar. Nada de terceiro toque.
6. **Sempre o link do lote e do segmento dela** (`{{link}}`): é ele que credita a venda. `[[LINK: checkout por lote e segmento]]`.
7. **Nunca prometa ganho financeiro, cura ou fim da autossabotagem.** Nunca cite valor antes da live. Nunca diga "últimas vagas" nem "acabando". Escassez só por lote real: "esta condição não se repete".
8. **Rodapé de saída (R):** toda mensagem disparada por automação, sem humano, termina com a linha *Digite SAIR se não quiser mais receber mensagens.* Mensagem escrita por humano em conversa aberta não leva o rodapé.
9. **Gênero.** As mensagens estão no feminino (79% da base). Para os 21% de homens, o time troca antes de enviar quando o nome indicar. `[[CONFIRMAR: campo de gênero no CRM]]`.
10. **Janela de horário.** Maior abertura: 7h a 8h, 16h a 17h e 19h a 22h. Exceção: o prazo do Pix ou do boleto manda mais que o horário.
11. **Sem emoji obrigatório.** Se usar, no máximo um por mensagem, no fim, e nunca em mensagem de reembolso ou de compra recusada.

**Variáveis.** `{{nome}}` primeiro nome. `{{link}}` checkout do lote e do segmento. `{{codigo_pix}}` copia e cola. `{{link_boleto}}` boleto. `{{link_live}}` live no YouTube. `{{link_diagnostico}}` diagnóstico dos cinco padrões. `{{link_onboarding}}` onboarding da Vitalícia. `{{lote}}` lote vigente. `{{data_lote}}` data de virada do lote vigente. `{{motivo}}` motivo registrado de recusa ou reembolso.

**Os links fixos da operação (todos ainda a criar).**

| O que é | Placeholder |
|---|---|
| Checkout por lote e segmento | `[[LINK: checkout por lote e segmento]]` |
| Live de revelação no YouTube | `[[LINK: live 03/11]]` |
| Diagnóstico dos cinco padrões | `[[LINK: diagnóstico dos 5 padrões]]` |
| Onboarding da Vitalícia (trilha de entrada) | `[[LINK: onboarding Vitalícia]]` |
| Suporte no WhatsApp | `[[LINK: suporte WhatsApp]]` |
| Formulário de motivo de reembolso | `[[LINK: formulário de motivo]]` |

---

# PIPELINE 1 | BLACK VITALÍCIA (QUEM AINDA NÃO É DO CLUBE)

## E1. LISTA DE INTERESSE (inscrita na live, 13/10 a 03/11)

São as pessoas que reservaram vaga na live pela página de captura. Regra: **relacionamento antes de oferta**. Estas mensagens entregam material e convidam, não vendem, e não citam valor. O comercial só entra em conversa com a ficha quente, com quem fez o Desafio e com quem respondeu.

### Toque 1. Dia da inscrição (automático, até 24 horas depois)

```
Oi, {{nome}}! Sua vaga na live de 03/11, às 20h, está confirmada.

Antes dela, a Dra. liberou um diagnóstico só para quem deu esse passo: ele mostra qual dos cinco padrões mais te prende hoje.

{{link_diagnostico}}

Qual dos cinco você acha que é o seu?

Digite SAIR se não quiser mais receber mensagens.
```

A pergunta no final é o que transforma aviso em conversa. Sem ela, a pessoa lê e não responde, e você perde a chance de abordar depois.

**Variante para quem fez o Desafio (turma Desafio):**

```
Oi, {{nome}}! Você fez o Desafio inteiro, e a Dra. abre uma coisa nova no dia 03/11, às 20h.

Sua vaga na live está confirmada.

Me conta: o que você ainda não terminou desde aquela semana?

Digite SAIR se não quiser mais receber mensagens.
```

### Se ela responder que vai

```
Então combinado. Deixa papel e caneta do lado, que a Dra. pede.
```

### Toque 2. 03/11, às 19h (dia da live)

```
{{nome}}, hoje é a live.

Começa às 20h, ao vivo no YouTube.

{{link_live}}

Pega papel e caneta. Te vejo lá?

Digite SAIR se não quiser mais receber mensagens.
```

Se ela não respondeu e não apareceu na live, vai para a abertura A12 (inscrita que não apareceu) em `aberturas_por_segmento.md`.

---

## E2. CARRINHO ABANDONADO (a partir de 03/11)

Ela chegou no checkout e não finalizou. **Não venda de novo, remova o obstáculo.** Aqui a objeção está viva e não resolvida: o primeiro contato vai sem link, só com uma pergunta de duas respostas.

### Toque 1. 30 minutos depois, sem link (automático)

```
{{nome}}, vi que você chegou no checkout da Vitalícia e não concluiu.

Posso te perguntar uma coisa só?

Foi o pagamento, ou foi a dúvida de "será que eu vou dar conta"?

Digite SAIR se não quiser mais receber mensagens.
```

**Variante turma Desafio:**

```
{{nome}}, você atravessou as cinco noites e parou no checkout.

Posso te perguntar uma coisa só?

Foi o pagamento, ou foi a dúvida de "será que eu vou dar conta"?

Digite SAIR se não quiser mais receber mensagens.
```

### Toque 2. No dia seguinte (automático, ramificado pela resposta)

**Se ela respondeu "o pagamento / o valor":**

```
Entendi, {{nome}}. Tem o parcelamento em até [[PENDENTE: parcelamento máximo]] vezes, e você só entra se couber.

[[CONFIRMAR: entrada mais parcelas, se existir]]

Eu prefiro que você não compre do que compre e não viva.

Quer ver qual forma cabe melhor?
```

**Se ela respondeu "a dúvida de dar conta":**

```
Esse é o medo que a Dra. chama de autossabotagem.

Por isso você não começa pelos onze produtos. Você começa pela trilha, com o primeiro passo em 48 horas, e não existe prazo para terminar.

Quer que eu te mostre por onde você começaria?
```

**Se ela não respondeu (link direto, sem pressão):**

```
{{nome}}, te mando o link direto, caso tenha sido só o dia corrido.

{{link}}

Se travar em alguma coisa, me fala por aqui.

Digite SAIR se não quiser mais receber mensagens.
```

Se não responder ao toque 2, pare e registre.

---

## E3. AGUARDANDO PAGAMENTO

Pix ou boleto gerado e não pago. **Aqui a pessoa já decidiu: só devolva o código.** Não repita benefícios. Quem gerou o código e não pagou não precisa de argumento, precisa do código de volta antes do prazo.

**Janelas medidas:** Pix vence em 48 horas exatas. Boleto vence em 4 a 5 dias. Cuidado com a virada de lote: o pedido gerado no lote anterior vale até o vencimento? `[[CONFIRMAR: o valor do lote é travado na hora da geração do Pix ou do boleto]]`. Enquanto não houver resposta, o texto abaixo não promete preço.

### E3a. Pix

**Toque 1. 2 a 3 horas depois da geração (automático):**

```
{{nome}}, seu Pix da Vitalícia ficou aberto e ainda não caiu.

Acontece muito, o dia engole.

Tá aqui o mesmo código, é só pagar que sua vaga confirma na hora:

{{codigo_pix}}

Digite SAIR se não quiser mais receber mensagens.
```

**Toque 2. 8 a 10 horas antes do vencimento (automático; o prazo manda mais que o horário ideal):**

```
{{nome}}, esse código vence hoje. Depois eu preciso gerar outro.

{{codigo_pix}}

Se mudou de ideia, tudo bem. Me avisa que eu não te mando mais nada sobre isso.

Digite SAIR se não quiser mais receber mensagens.
```

**Variante turma Desafio (toque 2):**

```
{{nome}}, esse código vence hoje.

Você não travou o processo nas cinco noites. Não trava agora.

{{codigo_pix}}

Digite SAIR se não quiser mais receber mensagens.
```

### E3b. Boleto

**Toque 1. Manhã do dia seguinte à geração (automático):**

```
{{nome}}, seu boleto da Vitalícia está aberto.

Tá aqui, é só pagar até o vencimento:

{{link_boleto}}

O pagamento pode levar até 3 dias úteis para compensar, então não deixa para o último dia. [[CONFIRMAR: prazo de compensação]]

Digite SAIR se não quiser mais receber mensagens.
```

**Toque 2. Manhã do dia do vencimento (automático):**

```
{{nome}}, seu boleto vence hoje.

{{link_boleto}}

Se travou em alguma coisa, me fala por aqui que eu te ajudo.

Se mudou de ideia, tudo bem. Me avisa que eu paro de te escrever sobre isso.

Digite SAIR se não quiser mais receber mensagens.
```

---

## E4. COMPRA RECUSADA

**A maior conversão de toda a base**, porque a pessoa quis pagar e o banco barrou. Muitas nem sabem. É o primeiro segmento a abordar na noite da live. Se possível, **atendimento humano** em vez de automático.

### Toque 1. Até 10 minutos depois da recusa

```
{{nome}}, o seu pagamento da Vitalícia não foi aprovado pelo banco.

Não foi nada do seu lado. Acontece muito quando o cartão tem limite por compra, ou quando a operadora bloqueia por segurança.

Sua vaga continua aqui. O Pix cai na hora:

{{link}}

Quer que eu te ajude a escolher o caminho?
```

Se o problema for limite: `[[CONFIRMAR: parcelamento no cartão consome o limite total; parcelamento recorrente da plataforma consome só a parcela]]`. Só então responder "dá para parcelar sem travar o limite".

### Toque 2. No dia seguinte, se não respondeu

```
{{nome}}, conseguiu resolver?

Se travar de novo, me fala que eu vejo outro caminho com você.

Digite SAIR se não quiser mais receber mensagens.
```

**Variante turma Desafio (toque 1, primeira linha):** "{{nome}}, o banco não aprovou o seu pagamento. Depois de cinco noites, seria uma pena travar aqui por causa de limite."

---

## E5. COMPRA EXPIRADA

Pix ou boleto venceu sem pagamento. A vaga continua de pé, mas o lote pode ter virado.

### Toque 1. Logo depois do vencimento (automático)

```
{{nome}}, seu código da Vitalícia venceu.

Gerei um novo, porque sua vaga ainda está de pé:

{{link}}

Importante: o valor depende do lote em que o novo pedido for gerado. [[CONFIRMAR: regra de lote para pedido novo]]

[[PENDENTE: garantia]]. Você entra, olha por dentro, e decide com informação.

Digite SAIR se não quiser mais receber mensagens.
```

### Toque 2. 48 horas depois, se não respondeu (automático)

```
{{nome}}, última vez que eu falo disso, prometo.

A Dra. diz que quem começa e abandona no meio do deserto não chega.

Se quiser retomar, está aqui:

{{link}}

Digite SAIR se não quiser mais receber mensagens.
```

**Variante turma Desafio (toque 2):**

```
{{nome}}, falo isso uma vez e paro.

Você atravessou as cinco noites. Parar agora é exatamente o que ela pediu para ninguém fazer.

{{link}}

Digite SAIR se não quiser mais receber mensagens.
```

---

## E6. COMPRA APROVADA

**Esta mensagem não vende nada.** Ela reduz reembolso, porque o arrependimento nasce no silêncio depois da compra. O primeiro passo precisa vir em 48 horas, e o risco da oferta é o excesso de onze produtos de uma vez.

### Toque 1. Imediato (automático)

```
{{nome}}, deu certo. Sua entrada na Vitalícia está confirmada.

Bem-vinda. A partir de agora você não precisa mais recomeçar.

Seu acesso e a trilha de entrada estão aqui:

{{link_onboarding}}

Hoje, só um passo: abre a trilha. Não abre os onze.

Qualquer coisa, me chama direto por aqui.
```

**Variante turma Desafio:**

```
{{nome}}, você está dentro.

Você não travou o processo, e isso diz muito mais sobre você do que sobre a compra.

Seu acesso e a trilha de entrada estão aqui:

{{link_onboarding}}

Hoje, só um passo: abre a trilha. Não abre os onze.
```

### Toque 2. 48 horas depois (automático)

```
{{nome}}, conseguiu entrar na área?

Me conta o que você abriu primeiro. Quero saber o que te chamou.
```

**Variante turma Desafio (no lugar da segunda pergunta):** "Qual área você quer que mude primeiro? Pergunto porque eu quero te acompanhar nessa."

(O toque de depoimento em 21 dias e o certificado pertencem a `10_pos_compra`. Aqui não entram.)

---

## E7. PEDIDO DE REEMBOLSO

**Ouvir antes de reter.** Quem é pressionado aqui vira reclamação pública. A garantia só vale se for verdadeira: nunca dificulte.

### Toque 1. Assim que o pedido entra (humano, sem rodapé)

```
{{nome}}, vi seu pedido de reembolso e está tudo certo. Você tem esse direito e eu não vou te enrolar.

Só queria entender uma coisa, para melhorar o que está do nosso lado: o que não foi o que você esperava?
```

### Toque 2. Depois da resposta dela (humano, sem rodapé)

**Se for problema que tem solução:**

```
Entendi. Isso eu consigo resolver com você hoje, se você quiser tentar: {{solucao}}

E se mesmo assim não fizer sentido, eu mesma encaminho o seu reembolso, sem drama.
```

**Se ela reafirmar ou não pedir solução:**

```
Sem problema, {{nome}}. Já encaminhei o seu reembolso.

A Dra. prefere devolver do que ter alguém aqui sem querer estar.

Se em outro momento fizer sentido, você vai ser bem-vinda de volta.
```

Se ela reafirmar, encaminhe na hora e agradeça. **Não tente uma terceira vez.** Se o pedido for fora do prazo da garantia, não negar sozinha: escalar (`playbook_do_dia_da_live.md`, seção de escalonamento). `[[PENDENTE: garantia]]`.

---

## E8. REEMBOLSADO

### Toque 1. Quando o reembolso é processado (automático)

```
{{nome}}, seu reembolso foi processado.

Fica tudo certo entre a gente.

Se um dia fizer sentido voltar, é só me chamar aqui.
```

### Toque 2. 3 dias depois (automático, uma pergunta só)

```
{{nome}}, posso te pedir uma ajuda rápida?

Me conta, em uma frase, o que faltou. Isso melhora a próxima vez, e eu agradeço de verdade.

Digite SAIR se não quiser mais receber mensagens.
```

Registre o motivo no CRM. O que melhora a próxima campanha não é quem comprou, é saber por que os outros saíram.

---

# PIPELINE 2 | BLACK VITALÍCIA, UPGRADE DE ALUNA DO CLUBE

Mesma estrutura, outra conversa. Aqui a pessoa já está dentro e já fez o trabalho. A mensagem não é "entre", é **"o que você já fez conta, falta ficar para sempre"**. Ela já conhece o produto (estágio 4, comparação) e o medo dela é perder o que já pagou ou pagar duas vezes. Por isso toda mensagem tem uma pergunta de ponte. As regras do `[[CONFIRMAR: o que acontece com o período já pago do plano atual]]` são a dependência número um deste pipeline.

## U1. ALUNA INSCRITA NA LIVE (13/10 a 03/11)

### Toque 1. Dia da inscrição (automático)

```
{{nome}}, você já está dentro do Clube e reservou sua vaga na live de 03/11, às 20h.

Eu queria te ouvir antes: o que mudou na sua vida desde que você entrou no Clube?

Quero levar para a Dra.

Digite SAIR se não quiser mais receber mensagens.
```

### Toque 2. 03/11, às 19h (automático)

```
{{nome}}, hoje é a live.

Começa às 20h, ao vivo no YouTube.

{{link_live}}

Como aluna, você tem uma condição só sua. A Dra. conta tudo ao vivo.

Pega papel e caneta. Te vejo lá?

Digite SAIR se não quiser mais receber mensagens.
```

## U2. ALUNA, CARRINHO ABANDONADO

### Toque 1. 30 minutos depois, sem link (automático)

```
{{nome}}, vi que você chegou no checkout da Vitalícia e não concluiu.

Posso te perguntar uma coisa só?

Foi o valor, ou foi a dúvida do que muda para quem já é do Clube?

Digite SAIR se não quiser mais receber mensagens.
```

### Toque 2. No dia seguinte (automático, ramificado)

**Se foi "o que muda":**

```
Boa pergunta, {{nome}}.

O que você já fez no Clube conta. Você não recomeça do zero.

A diferença é que o acesso deixa de ter prazo, e entram os onze produtos do catálogo, com uma trilha para você não se perder.

[[CONFIRMAR: o que acontece com o período já pago do plano atual]]

Quer que eu te explique o seu caso?
```

**Se foi o valor ou se não respondeu:**

```
{{nome}}, como aluna, o seu lote é o das alunas. Te mando o link direto:

{{link}}

Se o pagamento for o que trava, tem o parcelamento em até [[PENDENTE: parcelamento máximo]] vezes. Me fala qual caminho cabe melhor.

Digite SAIR se não quiser mais receber mensagens.
```

## U3. ALUNA, AGUARDANDO PAGAMENTO

### Pix

**Toque 1. 2 a 3 horas depois (automático):**

```
{{nome}}, seu Pix da Vitalícia, como aluna, ficou aberto.

É o mesmo código, vale por 48 horas:

{{codigo_pix}}

Digite SAIR se não quiser mais receber mensagens.
```

**Toque 2. 8 a 10 horas antes do vencimento (automático):**

```
{{nome}}, esse código vence hoje.

{{codigo_pix}}

Depois eu preciso gerar outro, e o lote pode ter virado.

Digite SAIR se não quiser mais receber mensagens.
```

### Boleto

**Toque 1. Manhã do dia seguinte (automático):**

```
{{nome}}, seu boleto da Vitalícia, como aluna, está aberto.

{{link_boleto}}

Pode levar até 3 dias úteis para compensar, então não deixa para o último dia. [[CONFIRMAR: prazo de compensação]]

Digite SAIR se não quiser mais receber mensagens.
```

**Toque 2. Manhã do dia do vencimento (automático):**

```
{{nome}}, seu boleto vence hoje.

{{link_boleto}}

Se travou em alguma coisa, me fala por aqui.

Digite SAIR se não quiser mais receber mensagens.
```

## U4. ALUNA, COMPRA RECUSADA

### Toque 1. Até 10 minutos depois (humano, se possível)

```
{{nome}}, o seu pagamento da Vitalícia não foi aprovado pelo banco.

Não foi nada do seu lado. Acontece muito com limite por compra ou bloqueio de segurança.

Sua condição de aluna continua aqui. O Pix cai na hora:

{{link}}

Quer que eu te ajude a escolher o caminho?
```

### Toque 2. No dia seguinte

```
{{nome}}, conseguiu resolver?

Se travar de novo, me fala que a gente resolve junto.

Digite SAIR se não quiser mais receber mensagens.
```

## U5. ALUNA, COMPRA EXPIRADA

### Toque 1 (automático)

```
{{nome}}, seu código da Vitalícia venceu.

Gerei um novo:

{{link}}

Importante: o valor depende do lote do novo pedido. [[CONFIRMAR: regra de lote para pedido novo]]

Digite SAIR se não quiser mais receber mensagens.
```

### Toque 2. 48 horas depois (automático)

```
{{nome}}, falo isso uma vez e paro.

Você já provou que sabe começar. A Vitalícia é para você não precisar recomeçar.

{{link}}

Digite SAIR se não quiser mais receber mensagens.
```

## U6. ALUNA, COMPRA APROVADA (UPGRADE CONFIRMADO)

### Toque 1. Imediato (automático)

```
{{nome}}, deu certo. Seu upgrade para a Vitalícia está confirmado.

O que você já fez no Clube continua com você. A partir de agora, sem prazo.

Sua trilha de entrada, com os onze produtos organizados, está aqui:

{{link_onboarding}}

Hoje, só um passo: abre a trilha. Não abre os onze.
```

### Toque 2. 48 horas depois (automático)

```
{{nome}}, conseguiu abrir a trilha?

Me conta qual produto novo você abriu primeiro. Quero saber o que te chamou.
```

## U7. ALUNA, REEMBOLSO (PEDIDO E REEMBOLSADO)

### Toque 1. Pedido (humano, sem rodapé)

```
{{nome}}, vi seu pedido e está tudo certo. É um direito seu.

Só me conta uma coisa: o que faltou, no Clube ou na Vitalícia?
```

### Toque 2. Depois da resposta ou quando for reembolsado

```
Obrigada por falar com sinceridade, {{nome}}. Já encaminhei o seu reembolso.

[[CONFIRMAR: se o reembolso da Vitalícia restaura o plano anterior do Clube]]

Se em outro momento fizer sentido, a porta do Clube continua aberta para você.
```

## U8. ALUNA QUE PAGOU NO LINK ERRADO (LOTE DE NÃO-ALUNA)

Evento operacional: o CRM identifica como aluna uma compra feita no checkout de não-aluna. É uma conversa de suporte, não de venda.

### Toque 1. Quando o pedido entra (humano)

```
{{nome}}, vi que você fez seu pedido da Vitalícia pelo link geral.

Como você já é aluna do Clube, existe uma condição só sua.

Posso te ajudar a acertar isso para você não pagar a mais?
```

### Toque 2. No mesmo dia ou no dia seguinte

```
{{nome}}, para acertar, eu preciso de uma coisa só: me confirma que o seu pedido foi feito com o e-mail do Clube.

[[CONFIRMAR: processo de ajuste (reembolso e nova compra, ou ajuste no checkout) e prazo]]

Qualquer dúvida, me fala por aqui.
```

## U9. ALUNA, E O PLANO ATUAL DO CLUBE APÓS O UPGRADE

Evento: upgrade aprovado e plano atual com cobrança futura. **Mensagem de cuidado, não de venda.** Só existe depois de `[[CONFIRMAR: modelo de cobrança atual do Clube (anual, mensal ou recorrente) e o que acontece com o período já pago]]`.

### Toque 1. 24 horas depois do upgrade (humano)

```
{{nome}}, uma coisa importante sobre o seu plano atual do Clube.

[[CONFIRMAR: o que acontece com a cobrança atual: cancelamento automático, crédito ou continua]]

Quero que você não seja cobrada duas vezes. Posso te explicar o seu caso?
```

### Toque 2. 72 horas depois, se não respondeu

```
{{nome}}, só para fechar o assunto do plano atual.

[[CONFIRMAR: instrução final]]

Me fala por aqui se ficou alguma dúvida.
```

---

## Mapa de eventos e janelas (resumo para a configuração do CRM)

| Evento | Pipeline | Gatilho do toque 1 | Gatilho do toque 2 |
|---|---|---|---|
| Lista de interesse | 1 e 2 | Inscrição na live (até 24h) | 03/11, 19h |
| Carrinho abandonado | 1 e 2 | 30 min depois do abandono | Dia seguinte |
| Aguardando Pix | 1 e 2 | 2 a 3h depois da geração | 8 a 10h antes dos 48h |
| Aguardando boleto | 1 e 2 | Manhã do dia seguinte | Manhã do vencimento (4 a 5 dias) |
| Compra recusada | 1 e 2 | Até 10 min depois | Dia seguinte |
| Compra expirada | 1 e 2 | Logo depois de vencer | 48h depois |
| Compra aprovada | 1 e 2 | Imediato | 48h depois |
| Pedido de reembolso | 1 e 2 | Assim que entra | Depois da resposta |
| Reembolsado | 1 | Quando processa | 3 dias depois |
| Pago no link errado | 2 | Quando entra | Mesmo dia ou dia seguinte |
| Plano atual do Clube | 2 | 24h depois do upgrade | 72h depois |

---

## Notas ao implementador

**Pendências:**
1. `[[LINK: checkout por lote e segmento]]`, `[[LINK: onboarding Vitalícia]]`, `[[LINK: diagnóstico dos 5 padrões]]`, `[[LINK: live 03/11]]`, `[[LINK: suporte WhatsApp]]`, `[[LINK: formulário de motivo]]`. Nenhum existe ainda.
2. `[[PENDENTE: parcelamento máximo]]`, `[[PENDENTE: garantia]]`, `[[PENDENTE: data do lote]]`.
3. `[[CONFIRMAR: o valor do lote é travado na hora da geração do Pix ou do boleto]]`. É a pergunta mais importante deste arquivo: define se E3 e E5 podem prometer o mesmo preço ou precisam avisar do lote.
4. `[[CONFIRMAR: o que acontece com o plano atual da aluna]]` (U2, U6, U7, U8, U9).
5. `[[CONFIRMAR: prazo de compensação do boleto]]`.
6. Gênero no CRM, para trocar o feminino quando necessário.

**Dado que faltou:** o PDF de leads não convertidos do Desafio não estava disponível nesta rodada. As janelas de Pix (48 horas) e boleto (4 a 5 dias) vêm do glossário do Manual do Comercial do Desafio. Conferir com o PDF antes de configurar os gatilhos.

**Testes A/B sugeridos:**
- E2 toque 1: pergunta de duas opções ("o pagamento ou a dúvida") versus pergunta aberta ("o que travou?").
- E3a toque 1: 2 horas versus 6 horas depois da geração do Pix.
- E6 toque 2: pergunta "o que abriu primeiro" versus "qual área você quer que mude primeiro".

**Dependências:** `narrativa_da_dra_na_black.md`, `quebra_de_objecoes.md`, `playbook_do_dia_da_live.md` (ordem de abordagem e escalonamento), `regua_do_silencio_black.md` (o que fazer quando ela não responde).
