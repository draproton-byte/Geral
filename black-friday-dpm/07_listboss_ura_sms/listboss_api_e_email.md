# ListBoss: copys de API (WhatsApp) e e-mail por segmento, com cadência por canal

| Campo | Conteúdo |
|---|---|
| Peça | Mensagens de evento de checkout (ListBoss) em WhatsApp API e em e-mail, para 3 segmentos: 27 mensagens de API (9 eventos x 3 segmentos) e a tabela de assuntos de e-mail por segmento (9 eventos x 3), com blocos de segmento para o corpo já escrito em `06_emails/eventos_de_pagamento.md` |
| Canal | WhatsApp API oficial (via ListBoss/ManyChat) e e-mail |
| Público | S1 Alunas do Clube Secreto · S2 Quem fez Desafio, Imersão ou Aulão e não entrou no Clube · S3 Não-alunas |
| Momento | A partir de 03/11 às 21h28 (abertura do link, minuto 01:28 da live, o mesmo horário do cronograma do comercial), durante o carrinho aberto e o período de reembolso |
| Objetivo | Recuperar o pagamento que travou, confirmar a compra e acolher o pedido de reembolso, no canal que a pessoa mais abre, com a oferta e o checkout certos para o segmento |
| Consciência | 5 |
| Trabalho contratado | "Eu quero uma decisão que eu só precise tomar uma vez." Quem chegou ao checkout costuma estar a um detalhe de pagamento da decisão; as mensagens ajudam com o detalhe, sem pressão |
| Modelo no Desafio | Estrutura "LISTBOSS BFV/26 por segmento" (alunos do produto principal, demais alunos, não-alunos), citada na planilha de links da BFV/26 e em `projetoBF_links_uteis_black_friday__COPY.md` (itens "Listboss API" e "Listboss E-MAIL"). Textos modelados nos arquivos "API compra aprovada", "API compra recusada", "API carrinho abandonado" e nos e-mails correspondentes do Desafio e do Clube Secreto |

**Limite da fonte.** A pasta de ListBoss da BFV/26 (os textos por segmento) não estava no conjunto de arquivos acessíveis, só os nomes e a estrutura (3 segmentos com lista, tag, checkout e ListBoss próprios, dita na estratégia). A estrutura aqui segue isso e os textos foram escritos a partir do Desafio. Conferir com a equipe se algum evento de BFV/26 existe e não está nesta lista.

**Correspondência de segmentos.**

| BFV/26 (modelo) | Black Próton Vitalícia | Lista e tag | Checkout |
|---|---|---|---|
| Alunos do produto principal | S1 Alunas do Clube | `11/26 - BLACK VITALICIA - ALUNAS` | Preço de aluna (escada 1.997/2.997/3.997, só em nota) |
| Demais alunos | S2 Desafio, Imersão ou Aulão sem Clube | `11/26 - BLACK VITALICIA - DESAFIO IMERSAO AULAO` | Preço de não-aluna, com código de oferta próprio para medir (`[[CONFIRMAR: decisão da Dra.]]`) |
| Não-alunos | S3 Não-alunas | `11/26 - BLACK VITALICIA - NAO ALUNAS` | Preço de não-aluna (escada 2.997/3.997/4.997, só em nota) |

**Regras de formato (guia, seção 1).** "Para" (nunca "pra"), uma linha em branco entre todas as linhas, negrito com asterisco, link em linha própria e separado do CTA, rodapé "Digite SAIR se não quiser mais receber mensagens", no máximo 12 linhas de texto por mensagem, terminando em pergunta, reação ou CTA claro (a linha do rodapé vem depois). Sem contagem de dias dentro do texto. IDs: API-S1-01 a API-S1-09, API-S2-01 a API-S2-09 e API-S3-01 a API-S3-09 (o S é o segmento; os números são os eventos). Variáveis: `{{nome}}`, `{{codigo_pix}}`, `{{link_boleto}}`, `{{data_vencimento}}`, `{{link_area_membros}}`, `{{link_suporte}}`.

**Observação sobre aprovação da API oficial.** Mensagens de carrinho abandonado, Pix e boleto costumam ser categoria "utilitária" ou "marketing" e precisam de template aprovado. As frases com `*negrito*` e o botão de resposta devem ser submetidos como template. Os trechos com variáveis (`{{...}}`) são os campos dinâmicos.

---

## 1. MENSAGENS DE API (WhatsApp), POR SEGMENTO

### S1 Alunas do Clube

Lista e tag: `11/26 - BLACK VITALICIA - ALUNAS`. Checkout: [[LINK: checkout alunas, lote vigente]]. Valor: [[PREÇO LOTE ALUNAS]].

**API-S1-01 Carrinho abandonado, toque 1 (até 1 hora)**

```
{{nome}}, vi que você chegou ao checkout da *Black Próton Vitalícia* e parou no último passo. 💜

Você já é do Clube, então vale a condição de aluna.

Seu lote ainda está aberto até [[PENDENTE: data do lote]].

Para finalizar, toque no link abaixo:

[[LINK: checkout alunas, lote vigente]]

Qualquer dúvida, é só responder esta mensagem.

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-02 Carrinho abandonado, toque 2 (24 horas)**

```
{{nome}}, você chegou ao checkout e não finalizou.

Posso te perguntar uma coisa? Foi o valor ou foi a dúvida se você vai dar conta?

As duas têm resposta, e eu quero te ajudar com a certa.

Se preferir voltar direto, o link está abaixo:

[[LINK: checkout alunas, lote vigente]]

Para eu te ajudar, responda aqui com *1* para valor ou *2* para dúvida.

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-03 Pix emitido**

```
{{nome}}, seu Pix da *Black Próton Vitalícia* foi gerado! ⚡

Copie o código abaixo e cole no app do seu banco, em *Pix Copia e Cola*:

{{codigo_pix}}

Assim que o pagamento cair, seu acesso é liberado.

O código vale por tempo limitado. [[CONFIRMAR: prazo de validade do Pix]]

Teve algum problema com o código? É só responder aqui.

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-04 Pix expirado**

```
{{nome}}, o código Pix da *Black Próton Vitalícia* expirou.

É só gerar outro, leva 1 minuto.

Seu lote vale até [[PENDENTE: data do lote]]. Depois dessa data, o valor sobe.

Para gerar outro Pix, toque no link abaixo:

[[LINK: checkout alunas, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-05 Boleto emitido**

```
{{nome}}, seu boleto da *Black Próton Vitalícia* foi gerado! 🧾

Ele vence em {{data_vencimento}}. Para ver o boleto, toque no link abaixo:

{{link_boleto}}

O boleto leva até 3 dias úteis para compensar, e o acesso só é liberado depois. [[CONFIRMAR: prazo]]

Se quiser começar hoje, o Pix libera na hora.

Quer trocar para Pix? É só responder aqui.

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-06 Boleto vencido**

```
{{nome}}, seu boleto da *Black Próton Vitalícia* venceu.

Acontece com muita gente e é fácil de resolver.

O lote vale até [[PENDENTE: data do lote]].

Para gerar um novo Pix, cartão ou boleto, toque no link abaixo:

[[LINK: checkout alunas, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-07 Compra recusada**

```
{{nome}}, seu pagamento da *Black Próton Vitalícia* não foi aprovado.

Quase sempre é limite, bloqueio de segurança do banco ou um dado digitado errado. Não tem a ver com você. 💜

Se quiser, me responda aqui e eu te ajudo a achar outra forma de pagar.

Ou tente de novo com outro cartão ou com Pix neste link:

[[LINK: checkout alunas, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-08 Compra aprovada**

```
{{nome}}, bem-vinda! 🎉 Sua entrada na *Black Próton Vitalícia* está confirmada.

Você já era do Clube. Agora é para sempre.

Seus 3 primeiros passos:

*1.* Entre na Área de Membros e veja o vídeo de boas-vindas.

*2.* Entre no grupo e no suporte.

*3.* Faça o primeiro passo da sua trilha nas próximas 48 horas.

Acesse aqui:

{{link_area_membros}}

Digite SAIR se não quiser mais receber mensagens
```

**API-S1-09 Pedido de reembolso**

```
{{nome}}, recebemos o seu pedido de reembolso da *Black Próton Vitalícia*.

Ele já está sendo processado e você não precisa fazer mais nada. O prazo do estorno depende da forma de pagamento. [[CONFIRMAR: prazos de estorno por forma de pagamento]] 💜

Posso te perguntar uma coisa? Se o motivo foi alguma dificuldade (acesso, tempo, não saber por onde começar), me conta aqui. Às vezes um ajuste pequeno resolve, e a decisão continua 100% sua.

Suporte: {{link_suporte}}

Digite SAIR se não quiser mais receber mensagens
```


### S2 Desafio, Imersão ou Aulão (sem Clube)

Lista e tag: `11/26 - BLACK VITALICIA - DESAFIO IMERSAO AULAO`. Checkout: [[LINK: checkout não-alunas desafio imersão aulão, lote vigente]]. Valor: [[PREÇO LOTE NÃO-ALUNAS]].

**API-S2-01 Carrinho abandonado, toque 1 (até 1 hora)**

```
{{nome}}, vi que você chegou ao checkout da *Black Próton Vitalícia* e parou no último passo. 💜

Você já viveu o método ao vivo comigo.

Seu lote ainda está aberto até [[PENDENTE: data do lote]].

Para finalizar, toque no link abaixo:

[[LINK: checkout não-alunas desafio imersão aulão, lote vigente]]

Qualquer dúvida, é só responder esta mensagem.

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-02 Carrinho abandonado, toque 2 (24 horas)**

```
{{nome}}, você chegou ao checkout e não finalizou.

Posso te perguntar uma coisa? Foi o valor ou foi a dúvida se você vai dar conta?

As duas têm resposta, e eu quero te ajudar com a certa.

Se preferir voltar direto, o link está abaixo:

[[LINK: checkout não-alunas desafio imersão aulão, lote vigente]]

Para eu te ajudar, responda aqui com *1* para valor ou *2* para dúvida.

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-03 Pix emitido**

```
{{nome}}, seu Pix da *Black Próton Vitalícia* foi gerado! ⚡

Copie o código abaixo e cole no app do seu banco, em *Pix Copia e Cola*:

{{codigo_pix}}

Assim que o pagamento cair, seu acesso é liberado.

O código vale por tempo limitado. [[CONFIRMAR: prazo de validade do Pix]]

Teve algum problema com o código? É só responder aqui.

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-04 Pix expirado**

```
{{nome}}, o código Pix da *Black Próton Vitalícia* expirou.

É só gerar outro, leva 1 minuto.

Seu lote vale até [[PENDENTE: data do lote]]. Depois dessa data, o valor sobe.

Para gerar outro Pix, toque no link abaixo:

[[LINK: checkout não-alunas desafio imersão aulão, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-05 Boleto emitido**

```
{{nome}}, seu boleto da *Black Próton Vitalícia* foi gerado! 🧾

Ele vence em {{data_vencimento}}. Para ver o boleto, toque no link abaixo:

{{link_boleto}}

O boleto leva até 3 dias úteis para compensar, e o acesso só é liberado depois. [[CONFIRMAR: prazo]]

Se quiser começar hoje, o Pix libera na hora.

Quer trocar para Pix? É só responder aqui.

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-06 Boleto vencido**

```
{{nome}}, seu boleto da *Black Próton Vitalícia* venceu.

Acontece com muita gente e é fácil de resolver.

O lote vale até [[PENDENTE: data do lote]].

Para gerar um novo Pix, cartão ou boleto, toque no link abaixo:

[[LINK: checkout não-alunas desafio imersão aulão, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-07 Compra recusada**

```
{{nome}}, seu pagamento da *Black Próton Vitalícia* não foi aprovado.

Quase sempre é limite, bloqueio de segurança do banco ou um dado digitado errado. Não tem a ver com você. 💜

Se quiser, me responda aqui e eu te ajudo a achar outra forma de pagar.

Ou tente de novo com outro cartão ou com Pix neste link:

[[LINK: checkout não-alunas desafio imersão aulão, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-08 Compra aprovada**

```
{{nome}}, bem-vinda! 🎉 Sua entrada na *Black Próton Vitalícia* está confirmada.

Você já viveu o método. Agora você fica.

Seus 3 primeiros passos:

*1.* Entre na Área de Membros e veja o vídeo de boas-vindas.

*2.* Entre no grupo e no suporte.

*3.* Faça o primeiro passo da sua trilha nas próximas 48 horas.

Acesse aqui:

{{link_area_membros}}

Digite SAIR se não quiser mais receber mensagens
```

**API-S2-09 Pedido de reembolso**

```
{{nome}}, recebemos o seu pedido de reembolso da *Black Próton Vitalícia*.

Ele já está sendo processado e você não precisa fazer mais nada. O prazo do estorno depende da forma de pagamento. [[CONFIRMAR: prazos de estorno por forma de pagamento]] 💜

Posso te perguntar uma coisa? Se o motivo foi alguma dificuldade (acesso, tempo, não saber por onde começar), me conta aqui. Às vezes um ajuste pequeno resolve, e a decisão continua 100% sua.

Suporte: {{link_suporte}}

Digite SAIR se não quiser mais receber mensagens
```


### S3 Não-alunas (base fria)

Lista e tag: `11/26 - BLACK VITALICIA - NAO ALUNAS`. Checkout: [[LINK: checkout não-alunas, lote vigente]]. Valor: [[PREÇO LOTE NÃO-ALUNAS]].

**API-S3-01 Carrinho abandonado, toque 1 (até 1 hora)**

```
{{nome}}, vi que você chegou ao checkout da *Black Próton Vitalícia* e parou no último passo. 💜

Você chegou ao último passo para parar de recomeçar.

Seu lote ainda está aberto até [[PENDENTE: data do lote]].

Para finalizar, toque no link abaixo:

[[LINK: checkout não-alunas, lote vigente]]

Qualquer dúvida, é só responder esta mensagem.

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-02 Carrinho abandonado, toque 2 (24 horas)**

```
{{nome}}, você chegou ao checkout e não finalizou.

Posso te perguntar uma coisa? Foi o valor ou foi a dúvida se você vai dar conta?

As duas têm resposta, e eu quero te ajudar com a certa.

Se preferir voltar direto, o link está abaixo:

[[LINK: checkout não-alunas, lote vigente]]

Para eu te ajudar, responda aqui com *1* para valor ou *2* para dúvida.

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-03 Pix emitido**

```
{{nome}}, seu Pix da *Black Próton Vitalícia* foi gerado! ⚡

Copie o código abaixo e cole no app do seu banco, em *Pix Copia e Cola*:

{{codigo_pix}}

Assim que o pagamento cair, seu acesso é liberado.

O código vale por tempo limitado. [[CONFIRMAR: prazo de validade do Pix]]

Teve algum problema com o código? É só responder aqui.

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-04 Pix expirado**

```
{{nome}}, o código Pix da *Black Próton Vitalícia* expirou.

É só gerar outro, leva 1 minuto.

Seu lote vale até [[PENDENTE: data do lote]]. Depois dessa data, o valor sobe.

Para gerar outro Pix, toque no link abaixo:

[[LINK: checkout não-alunas, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-05 Boleto emitido**

```
{{nome}}, seu boleto da *Black Próton Vitalícia* foi gerado! 🧾

Ele vence em {{data_vencimento}}. Para ver o boleto, toque no link abaixo:

{{link_boleto}}

O boleto leva até 3 dias úteis para compensar, e o acesso só é liberado depois. [[CONFIRMAR: prazo]]

Se quiser começar hoje, o Pix libera na hora.

Quer trocar para Pix? É só responder aqui.

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-06 Boleto vencido**

```
{{nome}}, seu boleto da *Black Próton Vitalícia* venceu.

Acontece com muita gente e é fácil de resolver.

O lote vale até [[PENDENTE: data do lote]].

Para gerar um novo Pix, cartão ou boleto, toque no link abaixo:

[[LINK: checkout não-alunas, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-07 Compra recusada**

```
{{nome}}, seu pagamento da *Black Próton Vitalícia* não foi aprovado.

Quase sempre é limite, bloqueio de segurança do banco ou um dado digitado errado. Não tem a ver com você. 💜

Se quiser, me responda aqui e eu te ajudo a achar outra forma de pagar.

Ou tente de novo com outro cartão ou com Pix neste link:

[[LINK: checkout não-alunas, lote vigente]]

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-08 Compra aprovada**

```
{{nome}}, bem-vinda! 🎉 Sua entrada na *Black Próton Vitalícia* está confirmada.

Você acabou de decidir uma coisa que só se decide uma vez.

Seus 3 primeiros passos:

*1.* Entre na Área de Membros e veja o vídeo de boas-vindas.

*2.* Entre no grupo e no suporte.

*3.* Faça o primeiro passo da sua trilha nas próximas 48 horas.

Acesse aqui:

{{link_area_membros}}

Digite SAIR se não quiser mais receber mensagens
```

**API-S3-09 Pedido de reembolso**

```
{{nome}}, recebemos o seu pedido de reembolso da *Black Próton Vitalícia*.

Ele já está sendo processado e você não precisa fazer mais nada. O prazo do estorno depende da forma de pagamento. [[CONFIRMAR: prazos de estorno por forma de pagamento]] 💜

Posso te perguntar uma coisa? Se o motivo foi alguma dificuldade (acesso, tempo, não saber por onde começar), me conta aqui. Às vezes um ajuste pequeno resolve, e a decisão continua 100% sua.

Suporte: {{link_suporte}}

Digite SAIR se não quiser mais receber mensagens
```


---

## 2. E-MAIL, POR SEGMENTO

O corpo completo de cada e-mail está em `06_emails/eventos_de_pagamento.md` (EP-AB, EP-PX, EP-BL, EP-RC, EP-AP, EP-RB). Aqui ficam o **assunto**, a **linha de preview** e o **bloco de segmento** que muda por lista. Só a compra aprovada (EP-AP-01) e os blocos abaixo têm versão própria no corpo. Todo o resto é igual.

### E-mail, S1 Alunas do Clube

| Evento | Assunto | Preview |
|---|---|---|
| Carrinho abandonado 1 | Você parou no último passo, {{nome}} | Sua condição de aluna ainda está aberta |
| Carrinho abandonado 2 | O que normalmente trava, {{nome}} | Valor ou dúvida? Eu te ajudo com a certa |
| Pix emitido | {{nome}}, seu Pix de aluna está pronto | Pague agora e seu acesso é liberado |
| Pix expirado | Seu código Pix expirou, {{nome}} | Gere um novo em 1 minuto |
| Boleto emitido | {{nome}}, seu boleto de aluna está aqui | Pague até {{data_vencimento}} |
| Boleto vencido | {{nome}}, seu boleto venceu (dá para resolver) | Gere um novo pagamento em 1 minuto |
| Compra recusada | {{nome}}, seu pagamento não foi aprovado | É rápido de resolver. O lote de aluna segue aberto |
| Compra aprovada | Agora é para sempre, {{nome}} | O que muda no seu acesso e os 3 primeiros passos |
| Reembolso | Recebemos seu pedido de reembolso, {{nome}} | Já estamos processando |

Bloco de segmento para inserir no corpo (logo após a abertura): "Como você já é do Clube Secreto, a condição que vale para você é a de aluna. O que você já fez conta e não começa do zero."

### E-mail, S2 Desafio, Imersão ou Aulão (sem Clube)

| Evento | Assunto | Preview |
|---|---|---|
| Carrinho abandonado 1 | {{nome}}, você já viveu o método. Falta o último passo | Seu lote ainda está aberto |
| Carrinho abandonado 2 | O que normalmente trava, {{nome}} | Valor ou dúvida? Eu te ajudo com a certa |
| Pix emitido | {{nome}}, seu Pix da Vitalícia está pronto | Pague agora e seu acesso é liberado |
| Pix expirado | Seu código Pix expirou, {{nome}} | Gere um novo em 1 minuto |
| Boleto emitido | {{nome}}, seu boleto da Vitalícia está aqui | Pague até {{data_vencimento}} |
| Boleto vencido | {{nome}}, seu boleto venceu (dá para resolver) | Gere um novo pagamento em 1 minuto |
| Compra recusada | {{nome}}, seu pagamento não foi aprovado | É rápido de resolver. O lote segue aberto |
| Compra aprovada | Você está dentro, {{nome}} | Seu acesso e os 3 primeiros passos estão aqui |
| Reembolso | Recebemos seu pedido de reembolso, {{nome}} | Já estamos processando |

Bloco de segmento para inserir no corpo (logo após a abertura): "Você já viveu o método ao vivo comigo. A Vitalícia é o que sustenta o que o evento começou."

### E-mail, S3 Não-alunas (base fria)

| Evento | Assunto | Preview |
|---|---|---|
| Carrinho abandonado 1 | Você parou no último passo, {{nome}} | Seu lote ainda está aberto |
| Carrinho abandonado 2 | O que normalmente trava, {{nome}} | Valor ou dúvida? Eu te ajudo com a certa |
| Pix emitido | {{nome}}, seu Pix da Vitalícia está pronto | Pague agora e seu acesso é liberado |
| Pix expirado | Seu código Pix expirou, {{nome}} | Gere um novo em 1 minuto |
| Boleto emitido | {{nome}}, seu boleto da Vitalícia está aqui | Pague até {{data_vencimento}} |
| Boleto vencido | {{nome}}, seu boleto venceu (dá para resolver) | Gere um novo pagamento em 1 minuto |
| Compra recusada | {{nome}}, seu pagamento não foi aprovado | É rápido de resolver. O lote segue aberto |
| Compra aprovada | Você está dentro, {{nome}} | Seu acesso e os 3 primeiros passos estão aqui |
| Reembolso | Recebemos seu pedido de reembolso, {{nome}} | Já estamos processando |

Bloco de segmento para inserir no corpo (logo após a abertura): "Você decidiu parar de recomeçar. O resto é só pagamento, e a gente resolve isso em um minuto."

---

## 3. CADÊNCIA POR CANAL

### 3.1 Eventos de checkout (disparo automático, de 03/11 às 21h28 até o fechamento)

Sx é o segmento: S1, S2 ou S3.

| Evento | WhatsApp API | E-mail | Observação |
|---|---|---|---|
| Carrinho abandonado | Toque 1 em até 1 hora (API-Sx-01). Toque 2 em 24 horas (API-Sx-02), só se não houve compra | Toque 1 em até 1 hora (EP-AB-01). Toque 2 em 24 horas (EP-AB-02) | Se a pessoa respondeu "1" ou "2" no WhatsApp, o comercial (`09_comercial_datacrazy`) assume e a API para |
| Pix emitido | Imediato (API-Sx-03). Segundo toque em 30 a 60 minutos pelo mesmo template com o link do checkout, se não pago | Imediato (EP-PX-01). Toque 2 em 30 a 60 minutos (EP-PX-02) | Parar quando o Pix cair |
| Pix expirado | No vencimento (API-Sx-04) | No vencimento (EP-PX-03). Toque 2 em 24 horas (EP-PX-04) | |
| Boleto emitido | Imediato (API-Sx-05) | Imediato (EP-BL-01). Toque 2 um dia antes do vencimento (EP-BL-02) | |
| Boleto vencido | No dia seguinte (API-Sx-06) | No dia seguinte (EP-BL-03). Toque 2 em 3 dias (EP-BL-04) | |
| Compra recusada | Imediato (API-Sx-07). Segundo toque em 24 horas se não houve compra | Imediato (EP-RC-01). Toque 2 em 24 horas (EP-RC-02) | |
| Compra aprovada | Imediato (API-Sx-08) | Imediato (EP-AP-01) e 2 horas depois o PC-D0 | Cancela todas as recuperações |
| Pedido de reembolso | Imediato (API-Sx-09) | Imediato (EP-RB-01), e EP-RB-02 quando concluído | Cancela a sequência de pós-compra |

### 3.2 Linha do tempo cruzada, 03/11 (quem está no ar em cada canal)

Horários do roteiro (minuto 00:00 = 20h00). O gatilho de checkout só existe a partir de 21h28, quando o link abre.

| Hora | E-mail | WhatsApp API e grupos | SMS e URA |
|---|---|---|---|
| 07h | EM-BF-22 | | |
| 09h | LV-03-01 | Broadcast "é hoje" (ver `05_whatsapp_api`) | |
| 14h30 | | | URA-01b antecipação (`ura_e_sms.md`) |
| 17h | | | SMS-02 antecipação |
| 19h | LV-03-02 | Broadcast "falta 1 hora" | |
| 19h55 | | | SMS-03 ao vivo |
| 20h | LV-03-03 | Broadcast "estamos ao vivo" | URA-02 ao vivo, SMS-07 flash |
| 20h05 | | | SMS-04 ao vivo |
| 20h20 a 20h40 | LV-03-04 (quem não clicou) | Broadcast "atrasados" | URA-03 e SMS-05 (20h20), SMS-06 (20h40) |
| 20h51 (bloco 9, revelação da oferta) | LV-03-05 (`[[CONFIRMAR: horário de LV-03-05, que está em 21h15 em lembretes_da_live.md]]`) | Broadcast "revelação" | URA-04 e SMS-08 flash |
| 21h28 (bloco 15, link aberto e início do bônus de 15 minutos) | LV-03-06 (`[[CONFIRMAR: horário de LV-03-06, que está em 22h30 em lembretes_da_live.md]]`) | Broadcast e grupo "carrinho aberto", no mesmo instante em que o link abre | |
| A partir de 21h28 | Gatilhos de checkout acima | Gatilhos de checkout acima | |

### 3.3 Cadência geral pré-live (referência, definida nas outras pastas)

| Canal | Cadência | Arquivo |
|---|---|---|
| E-mail | Diário 07h (série), 09h só S1 e S2 em 12 dias, 12h lembretes de 28/10 a 02/11 | `06_emails/` |
| Grupos de WhatsApp | 11h30 e 20h (modelo BFV/26) | `05_whatsapp_api/` |
| API oficial | Onboarding no cadastro, lembretes por data e por segmento | `05_whatsapp_api/` |
| SMS e URA | Antecipação (02/11 e 03/11), ao vivo, atrasados, flash | `07_listboss_ura_sms/ura_e_sms.md` |

---

## Notas ao implementador

1. **Eventos a criar no ListBoss (por segmento, 3 vezes):** compra aprovada, compra recusada, boleto gerado, aguardando pagamento (Pix emitido), abandono de carrinho e pedido de reembolso. O documento de automação do projeto já lista esses seis; a tag segue o padrão `MM/AA - PRODUTO - EVENTO`.
2. **Link do checkout por lote.** Quando o lote vira, o `{{link}}` das mensagens precisa apontar para o checkout do lote vigente. Isso exige atualizar os 3 segmentos a cada virada. `[[PENDENTE: data do lote]]`
3. **Pix e boleto.** O valor aparece no checkout, não no texto. Isso evita a mensagem desatualizada na virada de lote.
4. **API-Sx-02 (pergunta 1 ou 2).** Pede resposta do cliente. Se o fluxo de resposta não estiver pronto no ManyChat, enviar a versão sem pergunta (última linha apenas com o link).
5. **Escada de preço.** Só em nota: alunas 1.997/2.997/3.997 e não-alunas 2.997/3.997/4.997. O texto das mensagens usa os placeholders.
6. **Teste A/B.** API-Sx-01 com e sem a linha de segmento (`open`). Medir clique no link e conversão em 24 horas.
7. **Onde o Desafio tinha peça e a Black não.** Não há mensagem com o lote de entrada do Desafio. Não há Golden Ticket.
8. **Opt-out.** O rodapé "Digite SAIR..." está em todas as mensagens de API. Em e-mail, o descadastramento fica no rodapé da ferramenta.
9. **Quem é de dois segmentos.** Vale S1 sobre S2 e S2 sobre S3.
