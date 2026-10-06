# Recuperação de grupo, carrinho abandonado e eventos de pagamento (API)

| Campo | Conteúdo |
|---|---|
| **Peça** | (1) Recuperação de grupo: 3 mensagens de API + e-mail, para dois públicos (reservou e não entrou; comprou e não entrou). (2) Carrinho abandonado: 3 disparos. (3) Pix e boleto: emitido, expirado, vencido. (4) Compra recusada. (5) Compra aprovada e acompanhamento. (6) Reembolso |
| **Canal** | WhatsApp API oficial (template com botão, disparo automático por evento da Hotmart via ListBoss/DataCrazy). E-mail apenas na recuperação de grupo |
| **Público** | N (não-alunas, inclui Desafio/Imersão/Aulão sem Clube) e A (alunas do Clube). Consciência 5 (já decidiram: viram a condição ou entraram no checkout) |
| **Momento** | Recuperação pré-live: 13/10 a 03/11. Todo o resto: de 03/11 (abertura do carrinho) até o fechamento |
| **Objetivo** | Não perder quem já tomou uma decisão: entrar no grupo, concluir o pagamento, pagar de novo ou começar a trilha de entrada |
| **Trabalho contratado** | "Eu quero uma decisão que eu só precise tomar uma vez." Aqui ela já tomou. A mensagem tira o atrito e o arrependimento (que nasce no silêncio depois da compra) |
| **Momento de vida** | Aperto real (cartão sem limite, Pix, parcelamento); funcional e exausta (mensagem curta, passo único); quer entrar de vez e teme não aplicar (trilha) |
| **Modelo no Desafio** | `desafio_dra_proton_copy_recuperacao_de_grupo_desafio_nr_0926.md`, `desafio_api_carrinho_abandonado.md`, `desafio_api_compra_aprovada.md`, `desafio_api_compra_recusada.md`; e `clubesecreto_pix_emitido.md`, `clubesecreto_pix_expirado.md`, `clubesecreto_boleto_emitido.md`, `clubesecreto_boleto_vencido.md`, `clubesecreto_carrinho_abandonado_clube_secreto.md`, `clubesecreto_compra_aprovada_clube_secreto.md`, `clubesecreto_compra_recusada_clube_secreto.md`, `clubesecreto_reembolso.md` |

**Regras de forma:** "para" e não "pra"; uma linha em branco entre as linhas; negrito com asterisco; link em linha própria e separado do CTA; rodapé "Digite SAIR se não quiser mais receber mensagens"; nenhuma contagem de dias no texto (data fixa ou variável). Preços só por `[[PREÇO LOTE ...]]` e só depois da live.

**Variáveis de ferramenta:** `{{nome}}`, `{{link_grupo}}`, `{{link_checkout}}` (um por lote e segmento), `{{codigo_pix}}`, `{{link_boleto}}`, `{{lote_atual}}`, `{{data_virada}}`, `{{link_onboarding}}`. As duas últimas são novas e precisam existir na ferramenta, senão trocar por `[[PENDENTE: data do lote]]` escrito à mão.

---

## 1. Recuperação de grupo

No Desafio, a recuperação atingia quem **comprou** e não estava em grupo (fila de 1.462 pessoas em 26/09). Na Black existem dois públicos parecidos e a regra de ouro é a mesma: sem o grupo, não há link da live nem acesso guiado.

### 1.1 Recuperação pré-live: reservou a vaga e não entrou em nenhum grupo

**Público:** `Reservou a vaga na live` sem tag de grupo. Rodar em lote nos dias 20/10, 27/10 e 31/10 (mensagem 1), na manhã de 03/11 (mensagem 2) e às 19h de 03/11 (mensagem 3). Cada pessoa recebe no máximo uma mensagem por dia e só a mensagem seguinte se continuar fora do grupo.

#### API-BF-R01 | Mensagem 1: lote de recuperação (20/10, 27/10, 31/10)

```text
*A sua vaga na live está reservada, mas você ainda está fora do grupo.*

Eu conferi a lista agora e o seu número não aparece lá dentro.

A *Black Próton Vitalícia* acontece *terça, 03/11, às 20h*, e é no grupo oficial que chegam o link da live e todos os avisos importantes.

Fora do grupo, você não recebe o link da transmissão.

Não dá para avisar uma por uma por aqui. O grupo é o canal da live.

👇 Entra agora, leva 10 segundos.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ JÁ ENTREI NO GRUPO ]` · `[ PARAR MENSAGENS ]`

#### API-BF-R02 | Mensagem 2: manhã de 03/11

```text
*É hoje, às 20h, e você ainda está fora do grupo.*

A sua vaga na live da *Black Próton Vitalícia* está reservada, só falta o grupo.

O link da transmissão e o aviso de quando a condição for revelada saem no grupo oficial. Quem não estiver lá dentro não recebe.

👇 Entra agora, antes de esquecer.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ JÁ ENTREI NO GRUPO ]` · `[ PARAR MENSAGENS ]`

#### API-BF-R03 | Mensagem 3: 19h de 03/11

```text
*Falta 1 hora e você ainda não entrou no grupo.*

A live da *Black Próton Vitalícia* começa às 20h, e o link sai só no grupo oficial.

Você reservou a vaga. Falta um toque para usar ela.

👇 Entra agora:

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ PARAR MENSAGENS ]`

#### EMAIL-BF-R01 | Versão e-mail da recuperação pré-live (mesmo público, canal sem custo de template)

Referência para a área `06_emails`. Disparar nos mesmos dias.

**Assunto:** A sua vaga na live está reservada, mas você está fora do grupo

**Preheader:** O link da live sai só lá dentro

**Corpo**

```text
A sua vaga na live da Black Próton Vitalícia está reservada. Só que eu conferi a lista do grupo oficial e o seu número não está lá.

A live é terça, 03/11, às 20h, ao vivo no YouTube. É no grupo que chegam o link da transmissão e os avisos importantes.

Fora do grupo, você não recebe o link da live.

Entrar leva 10 segundos:

[BOTÃO] ENTRAR NO GRUPO DA LIVE
(destino: {{link_grupo}})

Se você já entrou, pode ignorar este e-mail.

Te espero lá dentro,
Dra. Próton
```

### 1.2 Recuperação pós-compra: comprou a Vitalícia e não entrou no grupo dos vitalícios

**Público:** `Compra aprovada` sem tag de grupo ou de acesso à área de membros. Rodar 2 horas depois da compra (mensagem 1), no dia seguinte às 09h (mensagem 2) e a cada 48 horas por mais duas vezes (mensagem 3). Parar quando entrar.

#### API-BF-R04 | Mensagem 1

```text
*{{nome}}, a sua entrada está garantida, mas você ainda não entrou no grupo.*

Eu conferi a lista agora e o seu número não aparece lá dentro.

O grupo é onde chegam a trilha de entrada, os avisos das aulas e o suporte.

👇 Entra agora, leva 10 segundos.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ JÁ ENTREI NO GRUPO ]` · `[ PARAR MENSAGENS ]`

#### API-BF-R05 | Mensagem 2

```text
*{{nome}}, você pagou e ainda não começou.*

Isso é normal nos primeiros dias, e é exatamente aí que o "depois" costuma aparecer.

O primeiro passo da trilha é um só. O grupo é onde ele chega.

👇 Entra agora e começa:

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ JÁ ENTREI NO GRUPO ]` · `[ PARAR MENSAGENS ]`

#### API-BF-R06 | Mensagem 3

```text
*{{nome}}, posso te ajudar com alguma coisa?*

Percebi que você ainda não entrou no grupo da Vitalícia. Se foi um problema com o link ou com o celular, me conta.

O seu acesso é vitalício, não tem pressa. Mas começar cedo ajuda a não deixar o automático voltar.

👇 Toque para entrar, ou fale com o suporte.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]` · `[ PARAR MENSAGENS ]`

#### EMAIL-BF-R02 | Versão e-mail da recuperação pós-compra

Referência para a área `06_emails`.

**Assunto:** A sua entrada está garantida, mas você está fora do grupo

**Preheader:** É lá que chega o primeiro passo da trilha

**Corpo**

```text
A sua entrada na Black Próton Vitalícia está confirmada. Só que eu conferi a lista do grupo e o seu número não está lá.

É no grupo que chegam a trilha de entrada, os avisos das aulas e o suporte.

Entrar leva 10 segundos:

[BOTÃO] ENTRAR NO GRUPO
(destino: {{link_grupo}})

O seu acesso é vitalício e não tem pressa. Mas começar cedo ajuda a não deixar o automático voltar.

Se você já entrou, pode ignorar este e-mail.

Dra. Próton
```

---

## 2. Carrinho abandonado (chegou ao checkout e não finalizou)

Gatilho: evento `abandono de carrinho` da Hotmart. Disparo 1 até 1 hora depois; disparo 2 cerca de 24 horas depois; disparo 3 apenas nas últimas horas do lote vigente, se ainda não comprou.

Escassez só por lote real. O lote e o preço aparecem pelos placeholders `[[PREÇO LOTE ...]]`, que a automação substitui pelo lote vigente (`{{lote_atual}}`).

### API-BF-C01 | Disparo 1 (até 1 hora) | N

```text
{{nome}}, vi que você chegou até o checkout da *Black Próton Vitalícia* e parou no último passo. 👀

Eu sei o que passa na cabeça nessa hora: "e se for mais um que eu compro e não aplico?"

Por isso a Vitalícia vem com uma *trilha de entrada*: um passo de cada vez, sem prazo para dar conta.

🏷️ *{{lote_atual}}:* [[PREÇO LOTE NÃO-ALUNAS]] [[CONFIRMAR: parcelamento]]

Garantia: [[PENDENTE: garantia]]

Toque no botão para voltar ao checkout.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR AO CHECKOUT ]` → `{{link_checkout}}` · `[ PARAR MENSAGENS ]`

### API-BF-C01-A | Disparo 1 | A

```text
{{nome}}, vi que você chegou até o checkout da *Black Próton Vitalícia* e parou no último passo. 👀

Você já está no Clube. O que você já fez conta, e ninguém volta ao zero.

🏷️ *{{lote_atual}} para alunas:* [[PREÇO LOTE ALUNAS]] [[CONFIRMAR: parcelamento]]

O que acontece com o seu acesso atual: [[PENDENTE: regra de migração]]

Toque no botão para voltar ao checkout.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR AO CHECKOUT ]` → `{{link_checkout}}` · `[ PARAR MENSAGENS ]`

### API-BF-C02 | Disparo 2 (cerca de 24 horas) | N

```text
{{nome}}, posso ser sincera com você? 🙏

Quem para no checkout costuma parar por um de três motivos: o dinheiro, o medo de não aplicar, ou porque já se decepcionou antes.

Os três são legítimos. E eu respondi cada um na live:

o dinheiro, com as formas de pagamento; o medo, com a trilha de entrada; a decepção, com acompanhamento.

A sua condição do *{{lote_atual}}* vale até {{data_virada}}.

Toque no botão para voltar ao checkout.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR AO CHECKOUT ]` → `{{link_checkout}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]`

### API-BF-C02-A | Disparo 2 | A

```text
{{nome}}, posso ser sincera com você? 🙏

Mesmo quem já é do Clube hesita. Às vezes é o dinheiro, às vezes é o medo de não dar conta.

Você já mostrou que fica. A Vitalícia tira o prazo e deixa o processo seguir no seu ritmo.

A sua condição do *{{lote_atual}}* vale até {{data_virada}}.

Toque no botão para voltar ao checkout.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR AO CHECKOUT ]` → `{{link_checkout}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]`

### API-BF-C03 | Disparo 3 (últimas horas do lote) | N e A

Enviar só para quem abriu o checkout, não comprou e continua dentro do lote.

```text
{{nome}}, faltam poucas horas para o *{{lote_atual}}* da *Black Próton Vitalícia* acabar. ⏰

Às {{data_virada}}, o valor sobe.

Esta condição não se repete. O que vier depois é outra oferta, com outro preço.

Toque no botão para entrar antes de virar.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR AO CHECKOUT ]` → `{{link_checkout}}` · `[ PARAR MENSAGENS ]`

---

## 3. Pix e boleto

Preço alto aumenta o uso de Pix e boleto. A mensagem não repete o preço (a pessoa já o viu no checkout) e sempre devolve o link para gerar um novo pagamento.

### API-BF-P01 | Pix emitido (disparo 1, imediato)

```text
{{nome}}, o seu Pix da *Black Próton Vitalícia* foi gerado! ⚡

Copie o código abaixo e cole no app do seu banco, na opção *Pix Copia e Cola*:

{{codigo_pix}}

✅ Assim que o pagamento cair, o seu acesso é liberado na hora.

⚠️ Esse código expira rápido, então não deixa para depois.
```

### API-BF-P02 | Pix emitido (disparo 2, de 30 minutos a 1 hora, se não pago)

```text
{{nome}}, o seu Pix da *Black Próton Vitalícia* ainda não foi pago. ⏳

É só copiar e colar no app do banco, leva menos de 1 minuto.

Se o código expirou, o link abaixo gera um novo:

{{link_checkout}}

O seu primeiro passo da trilha pode começar ainda hoje. 💜
```

### API-BF-P03 | Pix expirado (disparo 1)

```text
{{nome}}, o código Pix da *Black Próton Vitalícia* expirou. 😕

Mas é só gerar um novo, leva 1 minuto:

{{link_checkout}}

A sua condição do *{{lote_atual}}* vale até {{data_virada}}. Se preferir, dá para pagar no cartão [[CONFIRMAR: parcelamento]].
```

### API-BF-P04 | Pix expirado (disparo 2, 24 horas depois)

```text
{{nome}}, ontem você estava a um passo de entrar na *Black Próton Vitalícia*.

Você não chegou até ali por acaso. Algo dentro de você sabe que precisa de uma decisão que não precise refazer toda semana.

👇 Gere o seu novo Pix aqui:

{{link_checkout}}

Garantia: [[PENDENTE: garantia]]
```

### API-BF-P05 | Boleto emitido (disparo 1)

```text
{{nome}}, o seu boleto da *Black Próton Vitalícia* foi gerado! 🧾

👉 Pague por aqui:

{{link_boleto}}

⚠️ Importante: o boleto leva até 3 dias úteis para compensar. O seu acesso só é liberado depois disso.

💡 Quer começar HOJE? Pague via Pix e o acesso chega na hora:

{{link_checkout}}
```

### API-BF-P06 | Boleto emitido (disparo 2, na véspera do vencimento)

```text
{{nome}}, o seu boleto da *Black Próton Vitalícia* vence em breve. ⏳

Se você já pagou, pode ignorar. Se ainda não, o link está aqui:

{{link_boleto}}

Lembrete: o valor do lote pode subir antes de o boleto compensar. A virada do *{{lote_atual}}* é em {{data_virada}}. Se quiser garantir o lote atual, pague via Pix.
```

**Atenção:** o texto sobre o lote vigente precisa casar com a regra real de preço do boleto `[[CONFIRMAR: preço do boleto vale o lote da emissão ou da compensação?]]`. Até confirmar, remover a última frase.

### API-BF-P07 | Boleto vencido (disparo 1)

```text
{{nome}}, o seu boleto da *Black Próton Vitalícia* venceu. 😕

Mas fica tranquila, é rápido de resolver.

👉 Gere um novo pagamento aqui (Pix, cartão ou boleto):

{{link_checkout}}

💡 Pelo Pix o acesso é liberado na hora.
```

### API-BF-P08 | Boleto vencido (disparo 2, 24 horas depois)

```text
{{nome}}, posso ser sincera?

Quando um boleto vence, quase nunca é esquecimento. Muitas vezes é aquela voz dizendo "deixa para depois", "agora não é o momento".

O padrão que você quer mudar é o mesmo que sabota a mudança.

Você chegou até aqui por um motivo. Não deixa ele se perder.

👇 O link para entrar:

{{link_checkout}}
```

---

## 4. Compra recusada

### API-BF-X01 | Disparo 1 (imediato)

```text
{{nome}}, a sua compra da *Black Próton Vitalícia* não foi aprovada. 😕

Normalmente é limite do cartão ou bloqueio automático do banco, e é rápido de resolver.

👉 Tenta de novo, com outro cartão ou via Pix:

{{link_checkout}}

💡 Dica: se o limite foi o problema, dá para dividir em 2 cartões, ou pagar com cartão + Pix no checkout [[CONFIRMAR: checkout permite dois cartões e cartão + Pix]].

A sua condição do *{{lote_atual}}* ainda vale até {{data_virada}}.
```

### API-BF-X02 | Disparo 2 (24 horas depois)

```text
{{nome}}, ontem o seu pagamento não passou.

Se foi limite ou bloqueio, o Pix costuma resolver em um minuto.

Se foi outra coisa (dúvida, medo, "será que é para mim?"), me conta pelo suporte. Às vezes um ajuste pequeno resolve, e a decisão continua 100% sua.

👇 O link para tentar de novo:

{{link_checkout}}
```

**Botões:** `[ TENTAR DE NOVO ]` → `{{link_checkout}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]`

---

## 5. Compra aprovada e acompanhamento

Gatilho: `compra aprovada`. A venda só termina quando a pessoa entra na trilha. Esta é a mensagem que mais reduz reembolso.

### API-BF-OK1 | Compra aprovada completa | N

```text
*Parabéns, {{nome}}!* 🎉

A sua entrada na *Black Próton Vitalícia* foi confirmada. Você acaba de tomar uma decisão que não precisa tomar de novo.

Comece por aqui, em 3 passos:

1️⃣ Entre no grupo dos vitalícios: {{link_grupo}}

2️⃣ Abra a página de onboarding e veja a *trilha de entrada*: {{link_onboarding}}

3️⃣ Dê o primeiro passo nas próximas 48 horas: [[PENDENTE: primeiro passo da trilha]]

Você não precisa fazer tudo de uma vez. O acesso é vitalício, e o que importa é não deixar o automático voltar.

Se precisar de ajuda, fale com o suporte: [[LINK: suporte WhatsApp]]
```

**Botões:** `[ ABRIR O ONBOARDING ]` → `{{link_onboarding}}` · `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}`

### API-BF-OK1-A | Compra aprovada completa | A

```text
*Parabéns, {{nome}}!* 🎉

A sua entrada na *Black Próton Vitalícia* foi confirmada. Você já estava no Clube. Agora você fica para sempre.

O que você já fez conta. Ninguém volta ao zero.

Comece por aqui, em 3 passos:

1️⃣ Entre no grupo dos vitalícios: {{link_grupo}}

2️⃣ Veja a trilha de entrada e o que acontece com o seu acesso atual: {{link_onboarding}} [[PENDENTE: regra de migração]]

3️⃣ Escolha o seu próximo passo nas próximas 48 horas: [[PENDENTE: primeiro passo da trilha]]

Se precisar de ajuda, fale com o suporte: [[LINK: suporte WhatsApp]]
```

**Botões:** `[ ABRIR O ONBOARDING ]` → `{{link_onboarding}}` · `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}`

### API-BF-OK2 | Variante curta (confirmação instantânea)

```text
✅ Pagamento aprovado, {{nome}}!

Você já faz parte da *Black Próton Vitalícia*. 💜

O seu acesso está no seu e-mail. Começa agora por aqui:

{{link_onboarding}}
```

### API-BF-OK3 | Acompanhamento 48 horas depois

```text
{{nome}}, passando para perguntar uma coisa: você já deu o primeiro passo da trilha?

Se sim, me conta com um "sim" por aqui.

Se ainda não, tudo bem. O primeiro passo é um só, e é nele que o automático costuma voltar.

👇 O primeiro passo está aqui:

{{link_onboarding}}
```

### API-BF-OK4 | Pedido de depoimento (21 dias depois)

Referência para `10_pos_compra`. A estratégia pede depoimento em 21 dias, que é um ciclo completo do Clube.

```text
{{nome}}, você acaba de completar o seu primeiro ciclo de 21 dias. 💜

Posso te pedir uma coisa? Se algo mudou, mesmo que pouco, me conta em um parágrafo.

O seu relato ajuda outra pessoa a decidir. Eu só publico com a sua autorização.

👇 Toque para enviar o seu relato:

[[LINK: formulário de depoimento]]
```

---

## 6. Reembolso

Depende de `[[PENDENTE: garantia]]`. Modelo: `clubesecreto_reembolso.md`. Se a garantia não for mantida, não disparar.

### API-BF-RF1 | Pedido recebido

```text
{{nome}}, recebemos o seu pedido de reembolso da *Black Próton Vitalícia*.

Ele já está sendo processado, e você não precisa fazer mais nada. 💜

Posso te perguntar uma coisa? Se o motivo foi alguma dificuldade (acesso, tempo, não saber por onde começar), me conta pelo suporte. Às vezes um ajuste pequeno resolve, e a decisão continua 100% sua.

Suporte: [[LINK: suporte WhatsApp]]
```

### API-BF-RF2 | Reembolso concluído

```text
{{nome}}, o seu reembolso da *Black Próton Vitalícia* foi concluído. ✅

⏱️ Prazos para o valor aparecer:

Pix: até [[PENDENTE: prazo]] dias úteis.

Cartão: pode levar até 2 faturas, dependendo do banco.

Obrigada por ter confiado em mim, mesmo que por alguns dias.

Dra. Próton
```

---

## O que o Desafio tinha e a Black não repete

| Peça do Desafio | Decisão | Motivo |
|---|---|---|
| Carrinho abandonado com "sobe para R$ 97 depois" | Trocado pelo lote vigente e `{{data_virada}}` | A Black tem lotes reais com virada de preço, e a escassez só por lote |
| "Reembolso garantido depois da 1ª noite" | Trocado por `[[PENDENTE: garantia]]` | A garantia da Vitalícia ainda não foi fechada |
| Recuperação de grupo para "comprou o Desafio" | Duas versões (reservou e comprou) | A captação é gratuita; o público de recuperação existe nos dois momentos |

---

## Notas ao implementador

**Pendências**
1. `{{lote_atual}}`, `{{data_virada}}`, `{{link_checkout}}` por lote e segmento, `{{link_onboarding}}`: precisam existir no ListBoss/DataCrazy. São a causa mais provável de erro (lote errado no texto). Testar com compra de teste em cada lote.
2. `[[PENDENTE: primeiro passo da trilha]]` e `[[PENDENTE: ordem de entrada]]`: sem eles, API-BF-R05, OK1 e OK3 ficam vazias. É o ponto mais importante contra o "comprei e não implementei".
3. `[[CONFIRMAR: parcelamento]]`, formas de pagamento no checkout (dois cartões, cartão + Pix, boleto parcelado) e preço do boleto por lote.
4. `[[PENDENTE: garantia]]`: as peças C01, C02, P04, V03 (outro arquivo) e RF1/RF2 dependem.
5. `[[PENDENTE: regra de migração]]` (alunas).
6. Número de suporte: usar o oficial (`[[LINK: suporte WhatsApp]]`). Não copiei os números dos arquivos do Desafio por serem números de atendimento em uso.
7. Os e-mails equivalentes (carrinho abandonado, Pix, boleto, recusada, aprovada) ficam em `06_emails`. Os dois e-mails de recuperação aqui são só referência.

**Testes A/B sugeridos**
1. API-BF-C01: com a frase "e se for mais um que eu compro e não aplico?" contra uma versão que abre pelo lote vigente.
2. API-BF-P02: com e sem "O seu primeiro passo da trilha pode começar ainda hoje." Medir conversão do Pix.
3. API-BF-OK3: pergunta aberta ("você já deu o primeiro passo?") contra botão de resposta (SIM/AINDA NÃO). Medir taxa de primeiro passo em 48 horas.

**Dependências**
- Eventos da Hotmart no ListBoss: compra aprovada, recusada, boleto gerado, aguardando pagamento, abandono, reembolso (`projetoBF_doc_captacao_automacao.md`).
- Pipeline do comercial (Clint/DataCrazy) para quem abriu checkout mas não comprou: `09_comercial_datacrazy`.
- Página de onboarding da Vitalícia (`03_paginas`).
