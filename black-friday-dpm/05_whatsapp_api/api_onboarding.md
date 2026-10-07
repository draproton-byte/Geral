# API de onboarding: bem-vinda, não confirmou, "aconteceu alguma coisa?"

| Campo | Conteúdo |
|---|---|
| **Peça** | 3 mensagens de API oficial (templates com botão, **todos a aprovar na Meta**) para 3 segmentos: 9 mensagens finais |
| **Canal** | WhatsApp API oficial (disparo automático por gatilho, via DataCrazy/ListBoss e SendFlow) |
| **Público** | A = alunas atuais do Clube (estágio 4). D = demais alunos: quem fez Desafio, Imersão ou Aulão e não entrou no Clube (estágio 4 a 5). N = não-alunas: lista de captação e base fria (estágio 1 a 3) |
| **Momento** | Gatilho, a partir de 13/10: 01 ao entrar na lista (cadastro na página de captura); 02 quando passam algumas horas sem entrar no grupo; 03 quando saem do grupo |
| **Objetivo** | 01: levar a pessoa para dentro do grupo e do diagnóstico. 02: recuperar quem não entrou no grupo (sem o grupo ela não recebe o link da live). 03: recuperar quem saiu, sem culpa e sem pressão |
| **Trabalho contratado** | "Eu quero uma decisão que eu só precise tomar uma vez." O onboarding não vende: coloca a pessoa no canal onde a decisão acontece |
| **Momento de vida** | A: já está no processo, quer saber o que muda. D: viveu o método, sentiu o automático voltar. N: reconhece o padrão e não sabe nomear |
| **Modelo no Desafio** | API de onboarding do Desafio: "01. API ONBOARDING Bem vinda", "02. Não confirmada", "03. Aconteceu alguma coisa?" |

**Atenção ao gatilho (decisão a validar).** Na planilha de disparos de setembro do Desafio, as três mensagens têm gatilhos que não casam com o texto: "Bem-vinda" aparece como "NÃO CLICOU LINK", "Não confirmada" como "AO ENTRAR NA LISTA" e "Aconteceu alguma coisa?" como "SAIU DO GRUPO". O texto indica o contrário nas duas primeiras. Adotei o que o texto pede: 01 ao entrar na lista, 02 para quem reservou e não entrou no grupo, 03 para quem saiu. `[[CONFIRMAR: como o gatilho foi configurado de fato no Desafio]]`.

**O que a Black muda no onboarding.** O Desafio tinha ingresso pago, então "não confirmada" cobrava o pagamento e citava a virada de lote. Na Black a captação é gratuita, não há limite de vagas na live e nenhum preço aparece antes da live. "Não confirmou" passa a significar uma coisa só: **reservou a vaga e ainda não entrou no grupo**. A reserva já está feita, então nenhum texto diz que a vaga "não está confirmada" ou que pode ser perdida. O argumento é o grupo como canal oficial (o link da live e os avisos saem primeiro lá, e o link também chega por API e e-mail), nunca lote ou escassez.

---

## 1. O que muda de verdade entre os segmentos

O esqueleto das três mensagens é o mesmo nos três segmentos. Só quatro blocos mudam.

| Bloco | A (alunas do Clube) | D (Desafio, Imersão, Aulão sem Clube) | N (não-alunas) |
|---|---|---|---|
| Frase de reconhecimento | "Você já está dentro do Clube. O que você já fez conta." | "Você já viveu o método comigo ao vivo." | "Você chegou até aqui porque já recomeçou mais de uma vez." |
| O que a live é para ela | Revelar a condição própria de aluna para ficar para sempre | Revelar como não deixar o processo travar de novo | Revelar o que construí para parar de recomeçar |
| Qual grupo | Grupo das alunas do Clube | Grupo de quem viveu o método | Grupo oficial |
| Segundo passo | Ativar o lembrete da live | Refazer o diagnóstico dos 5 padrões | Fazer o diagnóstico dos 5 padrões |

Tudo o mais (data, horário, "a condição é revelada ao vivo", rodapé, botão de saída) é igual.

**Variáveis:** `{{nome}}`, `{{link_grupo}}` (um link de rodízio por segmento), `{{link_diagnostico}}`, `{{link_lembrete}}`.

**Regras de forma:** sempre "para", nunca a forma reduzida; uma linha em branco entre as linhas; até 12 linhas; rodapé "Digite SAIR se não quiser mais receber mensagens" (componente de rodapé do template, 48 caracteres); botões escritos em maiúsculas (no máximo 3 por template); link nunca na mesma linha do CTA; nenhum template começa nem termina com variável.

---

## 2. API-BF-01: Bem-vinda (ao entrar na lista)

### API-BF-01-N (não-alunas)

**Corpo**

```text
Parabéns, {{nome}}! 🎉

✅ A sua vaga na live *Black Próton Vitalícia*, com a Dra. Próton, está reservada.

Você chegou até aqui porque já recomeçou mais de uma vez. Dessa vez, a gente começa por entender o padrão.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição completa é revelada só na live.

Para aproveitar a live, siga 2 passos:

1️⃣ Entre no grupo oficial. O link da live e os avisos chegam por lá. Toque em "Entrar no grupo".

2️⃣ Faça o diagnóstico dos 5 padrões e descubra o que te faz recomeçar. Toque em "Fazer o diagnóstico".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ FAZER O DIAGNÓSTICO ]` → `{{link_diagnostico}}`

### API-BF-01-A (alunas do Clube)

**Corpo**

```text
Parabéns, {{nome}}! 🎉

✅ A sua vaga na live *Black Próton Vitalícia*, com a Dra. Próton, está reservada.

Você já está dentro do Clube Secreto, e o que você já fez conta. Na live, eu revelo a condição própria para você, aluna, ficar para sempre.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição é revelada só na live.

Para aproveitar a live, siga 2 passos:

1️⃣ Entre no grupo das alunas. O link da live e os avisos chegam por lá. Toque em "Entrar no grupo".

2️⃣ Ative o lembrete da live. Toque em "Ativar lembrete".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ ATIVAR LEMBRETE ]` → `{{link_lembrete}}`

### API-BF-01-D (Desafio, Imersão, Aulão sem Clube)

**Corpo**

```text
Parabéns, {{nome}}! 🎉

✅ A sua vaga na live *Black Próton Vitalícia*, com a Dra. Próton, está reservada.

Você já viveu o método comigo ao vivo. Na live, eu mostro como não deixar o processo travar de novo.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição completa é revelada só na live.

Para aproveitar a live, siga 2 passos:

1️⃣ Entre no grupo de quem viveu o método. O link da live e os avisos chegam por lá. Toque em "Entrar no grupo".

2️⃣ Refaça o diagnóstico dos 5 padrões. Ele mostra onde você está hoje. Toque em "Fazer o diagnóstico".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ FAZER O DIAGNÓSTICO ]` → `{{link_diagnostico}}`

---

## 3. API-BF-02: Não confirmou (reservou e não entrou no grupo)

Gatilho: algumas horas depois do cadastro, para quem **reservou e não entrou no grupo** (tag de grupo ausente no SendFlow/DataCrazy; o clique em "Entrar no grupo" sozinho não prova a entrada). Reenvio uma única vez, no dia seguinte, `[[CONFIRMAR: custo da API e janela de reenvio]]`. Se a pessoa entrou no grupo, não reenviar.

### API-BF-02-N

**Corpo**

```text
Falta um passo, {{nome}}: a sua vaga na live já está reservada.

Você ainda não entrou no grupo oficial da *Black Próton Vitalícia*.

O link da live de *03/11, às 20h*, e os avisos saem primeiro no grupo. A condição é revelada ao vivo, e o grupo é o canal oficial para acompanhar.

👇 Entre agora, leva 10 segundos. Toque em "Entrar no grupo".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ PARAR MENSAGENS ]`

### API-BF-02-A

**Corpo**

```text
Falta um passo, {{nome}}: a sua vaga na live já está reservada.

Você ainda não entrou no grupo das alunas do Clube Secreto.

A condição própria para alunas é revelada ao vivo, em *03/11, às 20h*. O link da live e os avisos saem primeiro no grupo.

👇 Entre agora, leva 10 segundos. Toque em "Entrar no grupo".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ PARAR MENSAGENS ]`

### API-BF-02-D

**Corpo**

```text
Falta um passo, {{nome}}: a sua vaga na live já está reservada.

Você ainda não entrou no grupo de quem viveu o método comigo.

O link da live de *03/11, às 20h*, e os avisos saem primeiro no grupo. Você já sabe como é a prática ao vivo. Essa também é ao vivo.

👇 Entre agora, leva 10 segundos. Toque em "Entrar no grupo".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ PARAR MENSAGENS ]`

---

## 4. API-BF-03: Aconteceu alguma coisa? (saiu do grupo)

Gatilho: saída do grupo registrada no SendFlow/DataCrazy. Voz da Dra., sem culpa. Oferece duas saídas: voltar ou silenciar (muita gente sai por excesso de notificação, e nesse caso silenciar resolve sem perder a live).

### API-BF-03-N

**Corpo**

```text
Ei, o que houve? 💭

Dra. Próton aqui!

Percebi que você saiu do grupo da *Black Próton Vitalícia* e fiquei pensando em você. Aconteceu alguma coisa?

Se foi sem querer, ou se as notificações atrapalharam, dá para voltar e *silenciar* o grupo: você continua recebendo o link da live sem o barulho.

Eu quero você na live de *03/11, às 20h*. O padrão que faz a gente recomeçar costuma aparecer justamente na hora de chegar.

👇 Toque para voltar ao grupo.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR PARA O GRUPO ]` → `{{link_grupo}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]`

### API-BF-03-A

**Corpo**

```text
Ei, o que houve? 💭

Dra. Próton aqui!

Percebi que você saiu do grupo das alunas na *Black Próton Vitalícia*. Aconteceu alguma coisa?

Se foi sem querer, ou se as notificações atrapalharam, dá para voltar e *silenciar* o grupo: você continua recebendo o aviso da live sem o barulho.

A condição própria para alunas é revelada ao vivo, em *03/11, às 20h*, e eu quero você lá.

👇 Toque para voltar ao grupo.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR PARA O GRUPO ]` → `{{link_grupo}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]`

### API-BF-03-D

**Corpo**

```text
Ei, o que houve? 💭

Dra. Próton aqui!

Percebi que você saiu do grupo de quem viveu o método comigo. Aconteceu alguma coisa?

Se foi sem querer, ou se as notificações atrapalharam, dá para voltar e *silenciar* o grupo: você continua recebendo o link da live sem o barulho.

Você já sabe como é fazer a prática ao vivo. A live de *03/11, às 20h*, é para você não deixar o processo travar de novo.

👇 Toque para voltar ao grupo.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR PARA O GRUPO ]` → `{{link_grupo}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]`

---

## 5. O que acontece depois (jornada pós-conversão)

| Evento | Próxima mensagem |
|---|---|
| Entrou no grupo | Mensagem de boas-vindas do grupo (`grupos_descricao_e_grupo_cheio.md`, seção 3) |
| Fez o diagnóstico | Redirecionar para a página de resultado e, em seguida, `api_convite_indireto_e_aquecimento.md` só se NÃO reservou a vaga (quem já reservou não recebe convite) |
| Não entrou no grupo depois do reenvio | Recuperação de grupo (`recuperacao_e_carrinho.md`, seção 1) |
| Saiu do grupo e não voltou | Parar API 03 e manter só e-mail para essa pessoa até a live |

---

## Notas ao implementador

**Pendências**
1. Links (placeholders `[[LINK: grupo geral]]`, `[[LINK: diagnóstico dos 5 perfis]]` e `[[LINK: lembrete da live no YouTube]]`): três links de rodízio (geral, alunas, Desafio/Imersão), diagnóstico e lembrete da live. O botão "Entrar no grupo" precisa de UTM de origem `api`.
2. Segmentar na entrada: tag de aluna ativa do Clube (A), tag de comprador de Desafio/Imersão/Aulão sem Clube (D) e restante (N). Tamanho do segmento A: `[[CONFIRMAR: contagem de alunas do Clube]]`.
3. `[[LINK: suporte WhatsApp]]`: usar o número oficial de suporte. Não usar telefone pessoal.
4. Aprovação de template: o botão "Parar mensagens" e o rodapé de SAIR seguem o padrão do Desafio. O motivo do recebimento ("você reservou sua vaga") fica no consentimento da página de reserva e não no template, porque o rodapé da Meta aceita um só texto de até 60 caracteres e ele já é o SAIR.
5. Confirmar `{{link_diagnostico}}`: a página de obrigado/pesquisa da Black ainda não existe (`03_paginas`).

**Testes A/B sugeridos**
1. API-BF-01: com os dois botões (grupo e diagnóstico) contra só o botão do grupo. Medir taxa de entrada no grupo em 24 horas.
2. API-BF-03: com a oferta de silenciar contra sem ela. Medir taxa de retorno ao grupo.

**Aprovação de template (Meta)**

| ID | Categoria sugerida | Botões | Variáveis | Status |
|---|---|---|---|---|
| API-BF-01-N, 01-A, 01-D | Utilidade (confirmação de reserva) `[[CONFIRMAR: a Meta pode reclassificar para marketing]]` | 2 (URL: ENTRAR NO GRUPO, FAZER O DIAGNÓSTICO ou ATIVAR LEMBRETE) | `{{nome}}`; URLs dos botões: `{{link_grupo}}`, `{{link_diagnostico}}`, `{{link_lembrete}}` | **PRECISA DE APROVAÇÃO** |
| API-BF-02-N, 02-A, 02-D | Marketing | 2 (URL: ENTRAR NO GRUPO; resposta rápida: PARAR MENSAGENS) | `{{nome}}`, `{{link_grupo}}` | **PRECISA DE APROVAÇÃO** |
| API-BF-03-N, 03-A, 03-D | Marketing | 2 (URL: VOLTAR PARA O GRUPO, FALAR COM O SUPORTE) | `{{nome}}`, `{{link_grupo}}` | **PRECISA DE APROVAÇÃO** |

Todos com rodapé SAIR (componente de rodapé), sem cabeçalho, sem preço, sem lote e sem escassez. Corpo com menos de 600 caracteres.

**Dependências**
- `grupos_descricao_e_grupo_cheio.md` (texto que a pessoa encontra ao clicar).
- Os templates não usam "⚠️" nem urgência de escassez, para reduzir o risco de reprovação. Se a Meta reclassificar algum para marketing, a taxa por mensagem muda: conferir o custo antes de agendar.
