# API de convite indireto e aquecimento: sequência de 5 mensagens em 3 versões

| Campo | Conteúdo |
|---|---|
| **Peça** | Sequência de 5 mensagens de API (abordagem com botão sim/não, entrega de valor, depoimento, convite para a live, pós-clique) mais a resposta ao "não". 3 versões: A (alunas do Clube), D (demais alunos), N (não-alunas) = 15 mensagens + 3 respostas ao "não" |
| **Canal** | WhatsApp API oficial. A mensagem 1 é template de marketing com 2 botões e **precisa de aprovação da Meta** (ver seção "Aprovação de template"). As mensagens 2 a 5 são enviadas dentro da janela de 24 horas aberta pelo clique em "SIM" e não são templates |
| **Público** | Lista 2026 e leads antigos que **ainda não reservaram a vaga na live**. A: alunas do Clube que não reservaram. D: compradores de Desafio/Imersão/Aulão sem Clube. N: base fria e leads antigos |
| **Momento** | Onda 1: 13/10, 09h. Onda 2: 20/10, 09h, só para quem não clicou na onda 1. Onda 3: 28/10, 09h, só para quem não clicou nas anteriores |
| **Objetivo** | Aquecer com uma informação útil (Termostato Invisível e o ciclo de recomeçar) e converter a atenção em **reserva da vaga na live de 03/11**. Não vende nada: a reserva é gratuita |
| **Consciência** | A: 4. D: 4 a 5. N: 1 a 3 (dor e solução) |
| **Trabalho contratado** | "Eu quero uma decisão que eu só precise tomar uma vez": a mensagem 2 dá nome ao que a faz recomeçar, e a 4 oferece o lugar onde essa decisão se toma |
| **Momento de vida** | N: funcional e exausta, dinheiro que não fica. D: viveu o evento e sentiu a rotina voltar. A: está no processo e às vezes volta ao automático |
| **Modelo no Desafio** | mensagens de API de convite indireto do Desafio: Mensagem 1 abordagem, 2 entrega de valor, 3 depoimento, 4 convite/CTA, mensagem pós-clique |

**O que mudou em relação ao Desafio.** No Desafio, a mensagem 4 vendia um ingresso pago, com lote e garantia. Na Black, nada é vendido: o CTA é reservar a vaga na live, e a mensagem 4 não cita preço nem lote. A entrega de valor deixa de explicar "crenças da infância" e passa a explicar o **Termostato Invisível** e o **ciclo de recomeçar**, que é a ideia da campanha. A mensagem 3 do Desafio narrava um depoimento no texto; aqui o print entra como `[[DEPOIMENTO REAL]]` e o texto não inventa o que a aluna disse.

**Regras de forma:** sempre "para", nunca a forma reduzida; uma linha em branco entre as linhas; negrito com `*asterisco*`; botões em maiúsculas e neutros quanto ao gênero (a base fria tem homens); link em linha própria e separado do CTA; até 12 linhas; rodapé "Digite SAIR se não quiser mais receber mensagens" em todas as mensagens de API. Variáveis: `{{nome}}`, `{{link_reserva}}`. Nenhum template começa nem termina com variável (regra de aprovação da Meta).

**Cadência dentro da janela:** mensagem 2 logo após o clique em "SIM"; mensagem 3 de 1 a 2 minutos depois; mensagem 4 de 2 a 3 minutos depois da 3; mensagem 5 só quando clicar em "RESERVAR".

---

## Versão N: não-alunas (base fria e leads antigos)

### API-BF-04.1-N: Abordagem (template com botões)

```text
Por que a gente recomeça tanto, {{nome}}?

Separei uma informação rápida e gratuita sobre isso. Quase ninguém explica assim.

Posso te mandar?

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ SIM, MANDA 💜 ]` · `[ AGORA NÃO ]`

### API-BF-04.2-N: Entrega de valor (após clicar em SIM)

```text
Você já sentiu que existe um *termostato* dentro de você?

Funciona como o termostato de casa: você esquenta o ambiente, e ele esfria de volta para a temperatura de sempre.

Com o dinheiro é assim. Entra um valor a mais e, pouco tempo depois, aparece uma conta, um imprevisto, uma despesa. *51,9%* das pessoas que responderam à nossa pesquisa de presença disseram que isso acontece na própria vida.

Com a vontade de mudar é igual. Você começa, anima, e algo puxa de volta para o que é conhecido. Aí você recomeça. E o ciclo reinicia.

Não é preguiça. Não é falta de sorte. É um padrão que dá para enxergar e trabalhar. Eu chamo de *Termostato Invisível*.

Guarda essa informação. 💜

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.3-N: Depoimento (1 a 2 minutos depois)

```text
[[DEPOIMENTO REAL: print autorizado de aluna sobre o Termostato Invisível ou sobre parar de recomeçar]]

O que você leu acima é um relato de uma aluna. Cada pessoa vive isso do seu jeito, e eu não prometo o mesmo resultado para todo mundo.

Mas o que ela descreve é o padrão de que eu estou falando: o ciclo que se repete até alguém dar nome a ele.

Reconheceu alguma parte?

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.4-N: Convite e CTA

```text
{{nome}}, o que te mandei agora é só um pedacinho.

Dia *03/11, às 20h*, eu faço ao vivo, no YouTube, a live de revelação da *Black Próton Vitalícia*: a conta do Termostato Invisível ao vivo, o que eu construí para você parar de recomeçar e a oferta que o Clube Secreto nunca fez antes.

Reservar a vaga é de graça. O preço e as condições só são revelados na live.

"Eu prefiro que você não compre do que compre e não viva."

Posso reservar a sua vaga?

Digite SAIR se não quiser mais receber mensagens
```

**Botão:** `[ RESERVAR MINHA VAGA 💜 ]`

### API-BF-04.5-N: Pós-clique (direciona para a página de reserva)

```text
Perfeito, {{nome}}! Sua vaga está a um passo. 🔴

Assim que você confirmar, recebe aqui o link do grupo e o diagnóstico dos 5 padrões. Nos vemos dia 03/11, às 20h.

Preenche seu nome e WhatsApp, leva 1 minuto:

{{link_reserva}}

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.N-N: Resposta ao "AGORA NÃO"

```text
Tudo bem, {{nome}}. Obrigada por avisar. 💜

Se um dia você quiser entender por que a gente recomeça tanto, a reserva da live fica aqui:

{{link_reserva}}

Digite SAIR se não quiser mais receber mensagens
```

---

## Versão D: demais alunos (Desafio, Imersão, Aulão sem Clube)

### API-BF-04.1-D: Abordagem

```text
O que acontece depois que o evento termina e a rotina volta, {{nome}}?

Separei uma informação rápida e gratuita que só quem viveu uma imersão ou um desafio comigo vai entender.

Posso te mandar?

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ SIM, MANDA 💜 ]` · `[ AGORA NÃO ]`

### API-BF-04.2-D: Entrega de valor

```text
Você viveu a prática comigo ao vivo e saiu com algo na mão.

E depois? A rotina voltou, e o *automático* voltou junto.

Isso tem nome: *Termostato Invisível*. É como o termostato de casa: você esquenta o ambiente por uma noite, e ele esfria de volta para a temperatura de sempre.

Quem para na empolgação do evento costuma recomeçar no próximo. E o ciclo reinicia.

Eu sempre digo: *"Não trave o processo."*

O que você viveu não se perde. Mas precisa de continuidade. Guarda essa informação. 💜

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.3-D: Depoimento

```text
[[DEPOIMENTO REAL: print autorizado de aluna que fez Desafio ou Imersão e continuou o processo]]

Esse é o relato de uma aluna que passou pelo mesmo ponto que você. Cada pessoa vive isso do seu jeito, e eu não prometo o mesmo resultado para todo mundo.

O que ela mostra é o que acontece quando o processo não termina com o evento.

Faz sentido para você?

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.4-D: Convite e CTA

```text
{{nome}}, o que te mandei agora é só um pedacinho.

Dia *03/11, às 20h*, eu faço ao vivo, no YouTube, a live de revelação da *Black Próton Vitalícia*: o que eu construí para você não precisar recomeçar a cada evento, e a oferta que o Clube Secreto nunca fez antes.

Reservar a vaga é de graça. O preço e as condições só são revelados na live.

"Eu prefiro que você não compre do que compre e não viva."

Posso reservar a sua vaga?

Digite SAIR se não quiser mais receber mensagens
```

**Botão:** `[ RESERVAR MINHA VAGA 💜 ]`

### API-BF-04.5-D: Pós-clique

```text
Perfeito, {{nome}}! Sua vaga está a um passo. 🔴

Assim que você confirmar, recebe aqui o link do grupo de quem viveu o método e o diagnóstico dos 5 padrões. Nos vemos dia 03/11, às 20h.

Preenche seu nome e WhatsApp, leva 1 minuto:

{{link_reserva}}

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.N-D: Resposta ao "AGORA NÃO"

```text
Tudo bem, {{nome}}. Obrigada por avisar. 💜

Se um dia você quiser continuar de onde parou, a reserva da live fica aqui:

{{link_reserva}}

Digite SAIR se não quiser mais receber mensagens
```

---

## Versão A: alunas do Clube

### API-BF-04.1-A: Abordagem

```text
Por que, mesmo dentro do Clube, a gente às vezes volta ao automático, {{nome}}?

Separei uma informação rápida e gratuita só para as alunas do Clube Secreto.

Posso te mandar?

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ SIM, MANDA 💜 ]` · `[ AGORA NÃO ]`

### API-BF-04.2-A: Entrega de valor

```text
Estar no Clube não desliga o *Termostato Invisível*.

Ele é como o termostato de casa: você esquenta o ambiente, e ele esfria de volta para a temperatura de sempre. Em cada ciclo ele pode aparecer de novo, de um jeito diferente.

Quem já passou por vários ciclos sabe: tem mês em que você anima, tem mês em que você para, tem mês em que recomeça.

O que muda, ciclo a ciclo, é como você responde. Parar não é voltar ao zero. O que você já fez conta.

Guarda essa informação. 💜

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.3-A: Depoimento

```text
[[DEPOIMENTO REAL: print autorizado de aluna do Clube sobre continuar no processo depois de parar um ciclo]]

Esse é o relato de uma aluna do Clube. Cada pessoa vive o processo no seu ritmo, e eu não prometo o mesmo resultado para todo mundo.

O que ela mostra é a diferença entre parar e desistir.

Você já passou por isso?

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.4-A: Convite e CTA

```text
{{nome}}, o que te mandei agora é só um pedacinho.

Dia *03/11, às 20h*, eu revelo ao vivo, no YouTube, a *Black Próton Vitalícia*: como ficar para sempre no Clube e em tudo o que construí, sem prazo e sem recomeçar.

Existe uma condição própria para quem já é aluna. Ela só é revelada na live.

Reservar a vaga é de graça.

"Eu prefiro que você não compre do que compre e não viva."

Posso reservar a sua vaga?

Digite SAIR se não quiser mais receber mensagens
```

**Botão:** `[ RESERVAR MINHA VAGA 💜 ]`

### API-BF-04.5-A: Pós-clique

```text
Perfeito, {{nome}}! Sua vaga está a um passo. 🔴

Assim que você confirmar, recebe aqui o link do grupo das alunas. A condição para alunas é revelada dia 03/11, às 20h.

Confirma o seu nome e WhatsApp, leva 1 minuto:

{{link_reserva}}

Digite SAIR se não quiser mais receber mensagens
```

### API-BF-04.N-A: Resposta ao "AGORA NÃO"

```text
Tudo bem, {{nome}}. Obrigada por avisar. 💜

Se mudar de ideia, a reserva da live fica aqui:

{{link_reserva}}

Digite SAIR se não quiser mais receber mensagens
```

---

## Notas ao implementador

**Pendências**
1. `[[DEPOIMENTO REAL]]`: três prints autorizados, um por versão (N: Termostato Invisível ou parar de recomeçar; D: aluna de Desafio/Imersão que continuou; A: aluna do Clube que parou e voltou). Pedir autorização por escrito. Não usar os trechos da audiência do arquivo 01 como se fossem depoimentos.
2. `{{link_reserva}}`: um link por segmento, com UTM `src=api` e `utm_content` com o ID da mensagem (ex.: `api-bf-04-4-n`).
3. Os 51,9% vêm do dossiê de audiência do Desafio, pesquisa de presença (pergunta "quando entra dinheiro a mais, aparece uma conta ou um problema"). Escrever sempre "das pessoas que responderam à nossa pesquisa de presença" e não chamar de Aulão. A mensagem 2 não é template, então o dado pode ser trocado sem nova aprovação.
4. Segmento A: não enviar a mensagem 4 para quem já reservou a vaga (excluir pela tag de reserva).

**Testes A/B sugeridos**
1. Mensagem 1: "Posso te mandar?" contra uma pergunta com a frase da audiência ("Você também sente que, quando o dinheiro cresce, alguma coisa puxa de volta?"). Medir taxa de clique em SIM.
2. Mensagem 2 N: com o dado de 51,9% contra sem o dado.
3. Mensagem 4: com a frase "Eu prefiro que você não compre do que compre e não viva." contra sem. Medir clique em RESERVAR.

**Aprovação de template (Meta)**

Só a mensagem 1 é template. As demais saem como mensagem de sessão, dentro das 24 horas após o clique em SIM.

| ID | Tipo | Categoria | Botões | Variáveis | Status |
|---|---|---|---|---|---|
| API-BF-04.1-N, 04.1-D, 04.1-A | Template com rodapé SAIR | Marketing | 2 (resposta rápida: SIM, MANDA e AGORA NÃO) | `{{nome}}` no meio do corpo | **PRECISA DE APROVAÇÃO**. Corpo curto (menos de 300 caracteres), sem preço, sem lote, sem escassez |
| API-BF-04.2 a 04.5 e 04.N (N, D, A) | Mensagem de sessão (janela de 24 h) | Não se aplica | 04.4 tem 1 botão de resposta rápida | `{{nome}}`, `{{link_reserva}}` | Sem aprovação. Não enviar fora da janela |

**Dependências**
- Página de reserva (`03_paginas`), com o formulário de nome, e-mail e WhatsApp.
- Tags de segmento no DataCrazy/ListBoss (A, D, N) e tag "reservou" para exclusão.
- Custo da API: a mensagem 1 é a única cobrada como template. O volume das ondas 2 e 3 só inclui quem não clicou antes.
