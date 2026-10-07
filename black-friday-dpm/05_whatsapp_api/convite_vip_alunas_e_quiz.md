> BANCO DE RESERVA (parte A, Golden Ticket das alunas). O arquivo canônico da captação por API para alunas do Clube é `13_modelo_dr_joao/api_alunas_captacao.md`.
> Se algum Golden Ticket for reaproveitado, não disparar em dia que tenha mensagem do canônico (15/10, 21/10, 23/10, 27/10, 29/10, 31/10, 02/11, 03/11).

# Golden Ticket da Black (convite VIP para alunas do Clube) e disparo para quem fez o diagnóstico

| Campo | Conteúdo |
|---|---|
| **Peça** | Parte A: Golden Ticket da Black, 3 mensagens de API (templates a aprovar) + 1 variante + 1 aviso em grupo, sem preço e com a condição como placeholder. Parte B: disparo de API para quem fez o diagnóstico dos 5 padrões, em duas versões (pré-live e pós-live), com a mensagem 2 em 5 variantes (uma por perfil) |
| **Canal** | WhatsApp API oficial (templates com imagem de cabeçalho, texto e botões, **a aprovar na Meta**) e grupo de alunas |
| **Público** | A: alunas ativas do Clube Secreto (consciência 4). B: quem fez o diagnóstico e ainda não reservou a vaga (pré-live) ou ainda não comprou (pós-live) (consciência 3 a 4) |
| **Momento** | A: 22/10 (convite), 29/10 (reforço), 02/11 (última chamada). B: pré-live de 14/10 a 02/11; pós-live a partir de 04/11, nos dias de lote |
| **Objetivo** | A: fazer a aluna sentir que a Black foi pensada primeiro para ela e levá-la à live. B: transformar o resultado do diagnóstico em reserva de vaga (pré) ou em entrada (pós) |
| **Trabalho contratado** | A: "ficar" (a aluna que já provou que sabe continuar). B: "dar nome ao padrão" e decidir uma vez |
| **Momento de vida** | A: no meio do processo, às vezes volta ao automático. B: não sabia o que a travava (29% a 40% da base) e agora sabe |
| **Modelo no Desafio** | Golden Ticket do Desafio (A) e disparo de API para quem fez o quiz do Desafio (B). Complemento: disparo "Primeiros 50" do Desafio (ver nota 6) |

**O que mudou em relação ao Desafio.**
- O Golden Ticket do Desafio dava um ingresso pago, com preço de entrada, para 100 pessoas que já tinham passado por workshop ou imersão. Na Black **não aparece preço** antes da live, e a aluna do Clube já tem uma condição de preço própria (a diferença fica só nas notas ao implementador de `vagas_abertas_e_virada_de_lote.md`). O Golden Ticket vira um convite VIP cuja condição é `[[CONFIRMAR: condição do Golden Ticket]]`.
- O disparo do quiz do Desafio oferecia o "Lote 0 com 50% OFF" e dizia "99% das vagas já foram". Nenhuma das duas coisas é possível aqui: não há preço pré-live nem lote esgotando antes da revelação. A urgência pré-live é a data da live. A pós-live usa a escassez de lote real.
- O resultado do diagnóstico (os 5 perfis) personaliza a mensagem 2. No Desafio a mensagem 2 era única.

**Regras de forma:** sempre "para", nunca a forma reduzida; uma linha em branco entre as linhas; negrito com asterisco; link em linha própria e separado do CTA; até 12 linhas; máximo de 3 botões; rodapé "Digite SAIR se não quiser mais receber mensagens"; nenhum template começa nem termina com variável; nenhum preço, desconto ou número de unidades nos templates pré-live.

---

# PARTE A: Golden Ticket da Black

Disparar com a imagem `[[CONFIRMAR: arte do Golden Ticket Black Próton Vitalícia]]` (cabeçalho do template). Texto da imagem sugerido para o criativo: `GOLDEN TICKET` / `Black Próton Vitalícia` / `Convite exclusivo para alunas do Clube Secreto`. Sem preço na arte e sem cor definida como definitiva (a identidade visual ainda não existe).

## API-BF-05.1 | Convite | 22/10, 09:00 | Alunas ativas do Clube

```text
🪙 *{{nome}}, você recebeu um Golden Ticket*

Uma condição exclusiva acabou de ser liberada para as alunas do Clube Secreto na *Black Próton Vitalícia*.

Com o seu Golden Ticket: [[CONFIRMAR: condição do Golden Ticket, sem preço]]

📆 Live de revelação: *terça, 03/11, às 20h*, ao vivo no YouTube

🔒 Exclusivo para quem já é aluna do Clube. O que você já fez conta, e ninguém volta ao zero.

Toque no botão para ativar o seu. Ativar não é comprar.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ATIVAR MEU GOLDEN TICKET ]` → `[[LINK: ativação do Golden Ticket]]` · `[ PARAR MENSAGENS ]`

## API-BF-05.1V | Variante curta ("Dra. Próton aqui")

Modelo: a segunda versão do arquivo do Desafio, de template mais curto.

```text
Dra. Próton aqui, e separei algo só para você que é do Clube.

🪙 Você recebeu um Golden Ticket.

Uma condição exclusiva acabou de ser liberada para as alunas do Clube Secreto na *Black Próton Vitalícia*.

A live é *terça, 03/11, às 20h*. A condição só é revelada ao vivo.

Toque no botão abaixo para confirmar os detalhes. 👇

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ CONFIRMAR OS DETALHES ]` → `[[LINK: ativação do Golden Ticket]]` · `[ PARAR MENSAGENS ]`

## API-BF-05.2 | Reforço | 29/10, 09:00 | Quem não ativou

```text
O seu Golden Ticket da *Black Próton Vitalícia* ainda não foi ativado, {{nome}}. 🪙

Ele é exclusivo para alunas do Clube e vale para a live de *terça, 03/11, às 20h*.

Se você já quer ficar para sempre, ativa agora. Se ainda está pensando, ativa mesmo assim: ativar não é comprar.

Toque no botão para ativar.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ATIVAR MEU GOLDEN TICKET ]` → `[[LINK: ativação do Golden Ticket]]` · `[ PARAR MENSAGENS ]`

## API-BF-05.3 | Último aviso | 02/11, 09:00 | Quem ativou e quem não ativou

Dois textos, um por grupo. 02/11 é Finados: tom sóbrio, sem exclamação e sem emoji festivo. Os textos usam data fixa (03/11) e não "amanhã", porque o envio pode escorregar de dia.

**Quem ativou:**

```text
O seu Golden Ticket está ativo, {{nome}}.

Na *terça, 03/11, às 20h*, eu abro ao vivo a *Black Próton Vitalícia*, com a condição para alunas.

Toque no botão para ativar o lembrete da live.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ATIVAR LEMBRETE ]` → `[[LINK: live no YouTube, 03/11]]` · `[ PARAR MENSAGENS ]`

**Quem não ativou:**

```text
O seu Golden Ticket da *Black Próton Vitalícia* ainda está à sua espera, {{nome}}.

A live é *terça, 03/11, às 20h*. Ativar leva 10 segundos e não é compra.

Toque no botão para ativar.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ATIVAR MEU GOLDEN TICKET ]` → `[[LINK: ativação do Golden Ticket]]` · `[ PARAR MENSAGENS ]`

## CP-BF-GT01 | 22/10, 11:30 | Aviso no grupo de alunas

Sai só no grupo de alunas e **substitui o CP-BF-28 nesse grupo** (o grupo geral e o do Desafio/Imersão recebem o CP-BF-28). Mantém os dois disparos do dia.

```text
🪙 *GOLDEN TICKET PARA ALUNAS DO CLUBE*

Se você é aluna do Clube Secreto, acabou de chegar no seu WhatsApp um convite especial.

É o Golden Ticket da *Black Próton Vitalícia*, exclusivo para quem já está dentro.

A live é *terça, 03/11, às 20h*, ao vivo no YouTube.

Olha a sua caixa de mensagens e ativa o seu. Ativar não custa nada.

Reage com 🪙 se você recebeu.
```

---

# PARTE B: Disparo para quem fez o diagnóstico

**Origem da base:** quem respondeu o "Teste de Bloqueios" ou o diagnóstico dos 5 padrões no Desafio, no Aulão ou na captação da Black, com o resultado (perfil) salvo no campo `{{perfil}}`. O `{{perfil}}` assume um dos 5 valores: Termostato Invisível, Autossabotagem, Cobrança Que Você Só Faz Com Você, Traumas Que Ainda Decidem, Culpa de Querer Mais.

## B1. Versão pré-live (14/10 a 02/11)

**Público:** fez o diagnóstico e não reservou a vaga na live. Excluir alunas ativas do Clube (que recebem a parte A).

### API-BF-06.1 | Mensagem 1: abordagem

```text
O resultado do seu diagnóstico dos 5 padrões está pronto, {{nome}}. 💜

Toque no botão para ver qual padrão faz você recomeçar.

Se ainda não reservou a sua vaga na live de *terça, 03/11, às 20h*, a reserva é gratuita e fica na página do resultado.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VER MEU RESULTADO ]` → `[[LINK: página de resultado do diagnóstico]]` · `[ PARAR MENSAGENS ]`

### API-BF-06.2 | Mensagem 2: após o clique (5 variantes, uma por perfil)

Enviar a variante que casa com `{{perfil}}`. Todas terminam com a pergunta do Desafio ("Quanto está custando continuar mais um ano no mesmo lugar?") e com o link de reserva. São mensagens de sessão (janela de 24 horas aberta pelo clique em VER MEU RESULTADO), não templates.

#### API-BF-06.2-TI | Termostato Invisível

```text
O seu diagnóstico mostrou uma coisa: *não é falta de vontade.* 🙌

O seu padrão é o *Termostato Invisível*: quando o dinheiro cresce, algo puxa de volta. Entra um valor a mais e aparece uma conta.

Isso é um padrão que dá para enxergar, e é isso que eu mostro ao vivo, com a conta na mão.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube

🔓 A condição da *Black Próton Vitalícia* é revelada só na live

Reserve a sua vaga, é gratuita 👇

[[LINK: página de reserva da live]]

_Me diz: quanto está custando continuar mais um ano no mesmo lugar?_

Digite SAIR se não quiser mais receber mensagens
```

#### API-BF-06.2-AS | Autossabotagem

```text
O seu diagnóstico mostrou uma coisa: *não é falta de vontade.* 🙌

O seu padrão é a *Autossabotagem*: você sabe o que precisa fazer e trava na hora de aplicar. O "depois" sempre foi o esconderijo dela.

Isso é um padrão que dá para enxergar, e é isso que eu mostro ao vivo.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube

🔓 A condição da *Black Próton Vitalícia* é revelada só na live

Reserve a sua vaga, é gratuita 👇

[[LINK: página de reserva da live]]

_Me diz: quanto está custando continuar mais um ano no mesmo lugar?_

Digite SAIR se não quiser mais receber mensagens
```

#### API-BF-06.2-CB | Cobrança Que Você Só Faz Com Você

```text
O seu diagnóstico mostrou uma coisa: *não é falta de vontade.* 🙌

O seu padrão é a *Cobrança Que Você Só Faz Com Você*: você faz muito, aguenta muito, e termina o dia achando que podia ter feito mais.

Isso é um padrão que dá para enxergar, e é isso que eu mostro ao vivo.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube

🔓 A condição da *Black Próton Vitalícia* é revelada só na live

Reserve a sua vaga, é gratuita 👇

[[LINK: página de reserva da live]]

_Me diz: quanto está custando continuar mais um ano no mesmo lugar?_

Digite SAIR se não quiser mais receber mensagens
```

#### API-BF-06.2-TR | Traumas Que Ainda Decidem

```text
O seu diagnóstico mostrou uma coisa: *não é falta de vontade.* 🙌

O seu padrão são os *Traumas Que Ainda Decidem*: a cada passo que você dá, algo antigo puxa de volta, e parece que você retrocede.

Isso é um padrão que dá para enxergar, e é isso que eu mostro ao vivo.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube

🔓 A condição da *Black Próton Vitalícia* é revelada só na live

Reserve a sua vaga, é gratuita 👇

[[LINK: página de reserva da live]]

_Me diz: quanto está custando continuar mais um ano no mesmo lugar?_

Digite SAIR se não quiser mais receber mensagens
```

#### API-BF-06.2-CQ | Culpa de Querer Mais

```text
O seu diagnóstico mostrou uma coisa: *não é falta de vontade.* 🙌

O seu padrão é a *Culpa de Querer Mais*: você cuida de todo mundo e, quando é a sua vez, a culpa aparece e você adia.

Isso é um padrão que dá para enxergar, e é isso que eu mostro ao vivo.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube

🔓 A condição da *Black Próton Vitalícia* é revelada só na live

Reserve a sua vaga, é gratuita 👇

[[LINK: página de reserva da live]]

_Me diz: quanto está custando continuar mais um ano no mesmo lugar?_

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-06.3 | Mensagem 3 (opcional): clicou e não reservou, de 6 a 12 horas depois

```text
{{nome}}, a live é *terça, 03/11, às 20h*.

Você fez o diagnóstico porque quer entender o que te faz recomeçar. É justamente por isso que a live é *ao vivo*.

Você não precisa aplicar por conta própria depois: eu mostro, e a gente pratica junto, na hora.

👉 Reserve a sua vaga:

[[LINK: página de reserva da live]]

Eu costumo dizer: _"Eu prefiro que você não compre do que compre e não viva."_ Reserve para ver. Decida depois, com calma.

Digite SAIR se não quiser mais receber mensagens
```

## B2. Versão pós-live (a partir de 04/11)

**Público:** fez o diagnóstico e não comprou. Excluir alunas (usam o fluxo de alunas). O preço por lote entra por placeholder. A versão se repete a cada virada de lote, trocando `{{lote_atual}}`.

### API-BF-06.P1 | Mensagem 1: abordagem pós-live

```text
A condição da *Black Próton Vitalícia* foi revelada ao vivo e está aberta, {{nome}}. 💜

Você fez o diagnóstico dos 5 padrões, então separei a sua condição de agora.

Toque no botão para ver o seu resultado e a condição do lote atual.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VER MINHA CONDIÇÃO ]` → `[[LINK: página de resultado do diagnóstico]]` · `[ PARAR MENSAGENS ]`

### API-BF-06.P2 | Mensagem 2: após o clique

```text
O seu diagnóstico mostrou o padrão *{{perfil}}*. E mostrou uma coisa: *não é falta de vontade.* 🙌

É exatamente isso que a *Black Próton Vitalícia* trabalha, de uma vez, com acesso vitalício:

*Clube Secreto + 11 produtos, pagamento único.*

🏷️ *{{lote_atual}}:* [[PREÇO LOTE NÃO-ALUNAS]] [[CONFIRMAR: parcelamento]]

⏳ Vale até {{data_virada}}.

Garantia: [[PENDENTE: garantia]]

Garanta a sua vaga 👇

{{link_checkout}}

_Me diz: quanto está custando continuar mais um ano no mesmo lugar?_

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-06.P3 | Mensagem 3 (opcional): clicou e não comprou, de 6 a 12 horas depois

```text
{{nome}}, passando rapidinho porque o *{{lote_atual}}* da Vitalícia vale até {{data_virada}}.

Você fez o diagnóstico porque queria entender o que te faz recomeçar. Esse é o ponto: a Vitalícia é para você não precisar aplicar por conta própria depois.

Existe uma trilha de entrada, um passo de cada vez. [[CONFIRMAR: ordem de entrada da trilha]]

👉 Se for a sua hora:

{{link_checkout}}

Eu costumo dizer: _"Eu prefiro que você não compre do que compre e não viva."_ Se for para entrar, entra para viver.

Digite SAIR se não quiser mais receber mensagens
```

---

## Notas ao implementador

**Pendências**
1. `[[CONFIRMAR: condição do Golden Ticket]]`: o convite VIP é só uma mensagem enquanto a condição não existir. Decisões possíveis a levar à Dra. (sugestões, não definição): (a) acesso ao checkout do Lote Especial antes da live; (b) um bônus de antecipação `[[PENDENTE: bônus]]` só para alunas; (c) mais tempo para decidir dentro do Lote Especial [[CONFIRMAR: Lote Especial só para quem está ao vivo]]. Qualquer uma precisa de regra clara de prazo e de checkout próprio.
2. Escassez de ticket: o Desafio usava "100 cupons". O template do Golden Ticket **não** traz número de tickets nem "quando acabarem". Só criar uma versão com limite se a regra existir de fato `[[CONFIRMAR: o número de tickets é real]]`, e ela exige novo template aprovado.
3. Arte do Golden Ticket: o criativo é da área `04_criativos` (modelo: a arte do Golden Ticket do Desafio). Sem preço e sem cor definitiva.
4. Segmento A: lista de alunas ativas do Clube `[[CONFIRMAR: contagem de alunas do Clube]]`. A lista deve vir do Hotmart/ListBoss, não de planilhas antigas.
5. A pergunta do diagnóstico "Resultado do Diagnóstico" tem 5 valores. A planilha de estrutura do Desafio registra 4.032 respostas, enquanto o arquivo 01 cita 1.562 no dossiê. `[[CONFIRMAR: tamanho real da base de diagnóstico com perfil]]` antes de dimensionar o custo de API.
6. O disparo "Primeiros 50" do Desafio (reprogramação intrauterina, link só no grupo exclusivo) **não é repetido**. Se existir um bônus de antecipação, a mensagem equivalente é uma API de grupo exclusivo para quem entrar nas primeiras vendas, com o placeholder `[[PENDENTE: bônus]]`. Não inventar o bônus.
7. O "Lote 0 com 50% OFF" do quiz do Desafio não tem equivalente. Se a equipe quiser uma condição própria para quem fez o diagnóstico, definir antes da live e acrescentar `[[CONFIRMAR: condição especial do diagnóstico]]`.

**Testes A/B sugeridos**
1. API-BF-06.2: variante por perfil contra variante única (a do Desafio). Medir taxa de reserva em 24 horas por perfil.
2. API-BF-05.1: 05.1 completa contra 05.1V curta. Medir taxa de ativação.
3. API-BF-06.3: com e sem a frase "Eu prefiro que você não compre do que compre e não viva."

**Aprovação de template (Meta)**

| ID | Categoria | Botões | Variáveis | Status |
|---|---|---|---|---|
| API-BF-05.1 | Marketing, cabeçalho de imagem | 2 (URL: ATIVAR MEU GOLDEN TICKET; resposta rápida: PARAR MENSAGENS) | `{{nome}}` | **PRECISA DE APROVAÇÃO**, e só depois que a condição do Golden Ticket existir. Sem preço, sem número de tickets |
| API-BF-05.1V | Marketing | 2 | nenhuma (a variante não usa nome) | **PRECISA DE APROVAÇÃO** |
| API-BF-05.2 | Marketing | 2 | `{{nome}}` | **PRECISA DE APROVAÇÃO** |
| API-BF-05.3 (ativou e não ativou) | Marketing | 2 cada | `{{nome}}` | **PRECISA DE APROVAÇÃO** (2 templates) |
| API-BF-06.1 | Marketing | 2 | `{{nome}}` | **PRECISA DE APROVAÇÃO** |
| API-BF-06.P1 | Marketing | 2 | `{{nome}}` | **PRECISA DE APROVAÇÃO**. Sem preço no corpo; o preço só aparece na 06.P2 |
| API-BF-06.2 (5 perfis), 06.3, 06.P2, 06.P3 | Mensagem de sessão (janela de 24 h) | 0 | `{{nome}}`, `{{perfil}}`, `{{lote_atual}}`, `{{data_virada}}`, `{{link_checkout}}` | Sem aprovação. 06.P2 só vai depois da revelação |

Todos os templates com rodapé SAIR, sem escassez inventada e com corpo curto (menos de 600 caracteres).

**Dependências**
- Página de reserva da live e página de resultado do diagnóstico (`03_paginas`).
- `{{perfil}}` salvo como campo personalizado no ListBoss/DataCrazy.
- Para a Parte A, uma tag "aluna ativa" separada de "aluna que cancelou".
