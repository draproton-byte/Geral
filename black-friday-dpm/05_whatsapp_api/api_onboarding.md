# API de onboarding: bem-vinda, não confirmou, "aconteceu alguma coisa?"

| Campo | Conteúdo |
|---|---|
| **Peça** | 3 mensagens de API oficial (template aprovado, com botão) para 3 segmentos: 9 mensagens finais |
| **Canal** | WhatsApp API oficial (disparo automático por gatilho, via DataCrazy/ListBoss e SendFlow) |
| **Público** | A = alunas atuais do Clube (estágio 4). D = demais alunos: quem fez Desafio, Imersão ou Aulão e não entrou no Clube (estágio 4 a 5). N = não-alunas: lista de captação e base fria (estágio 1 a 3) |
| **Momento** | Gatilho, a partir de 13/10: 01 ao entrar na lista (cadastro na página de captura); 02 quando passam algumas horas sem entrar no grupo; 03 quando saem do grupo |
| **Objetivo** | 01: levar a pessoa para dentro do grupo e do diagnóstico. 02: recuperar quem não entrou no grupo (sem o grupo ela não recebe o link da live). 03: recuperar quem saiu, sem culpa e sem pressão |
| **Trabalho contratado** | "Eu quero uma decisão que eu só precise tomar uma vez." O onboarding não vende: coloca a pessoa no canal onde a decisão acontece |
| **Momento de vida** | A: já está no processo, quer saber o que muda. D: viveu o método, sentiu o automático voltar. N: reconhece o padrão e não sabe nomear |
| **Modelo no Desafio** | `desafio_api_onboarding_desafio.md`: "01. API ONBOARDING Bem vinda", "02. Não confirmada", "03. Aconteceu alguma coisa?" |

**Atenção ao gatilho (decisão a validar).** Na planilha `planilha_disparos__Setembro26.md`, as três mensagens do Desafio têm gatilhos que não casam com o texto: "Bem-vinda" aparece como "NÃO CLICOU LINK", "Não confirmada" como "AO ENTRAR NA LISTA" e "Aconteceu alguma coisa?" como "SAIU DO GRUPO". O texto das mensagens indica o contrário nas duas primeiras (bem-vinda = ao entrar na lista; não confirmada = sem ação). Adotei o que o texto pede: 01 ao entrar na lista, 02 para quem não clicou no link do grupo, 03 para quem saiu. Conferir como o Desafio foi configurado de fato.

**O que a Black muda no onboarding.** O Desafio tinha ingresso pago, então "não confirmada" cobrava o pagamento e citava a virada de lote. Na Black a captação é gratuita e nenhum preço aparece antes da live. "Não confirmou" passa a significar: **reservou a vaga, mas ainda não entrou no grupo** (o link da live só chega lá). A urgência vem do canal oficial e da condição revelada ao vivo, nunca de lote.

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

**Regras de forma:** "para" e não "pra"; uma linha em branco entre as linhas; rodapé "Digite SAIR se não quiser mais receber mensagens"; botões escritos em maiúsculas; link nunca na mesma linha do CTA.

---

## 2. API-BF-01: Bem-vinda (ao entrar na lista)

### API-BF-01-N (não-alunas)

**Corpo**

```text
Parabéns, {{nome}}! 🎉

✅ A sua vaga na live *Black Próton Vitalícia*, com a Dra. Próton, está reservada.

Você chegou até aqui porque já recomeçou mais de uma vez. Dessa vez, a gente começa por entender o padrão.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição completa é revelada só na live.

Para garantir a sua experiência, siga 2 passos:

1️⃣ Entre no grupo oficial. O link da live e os avisos chegam por lá. Toque em "Entrar no grupo".

2️⃣ Faça o diagnóstico dos 5 padrões e descubra o que te faz recomeçar. Toque em "Fazer o diagnóstico".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ FAZER O DIAGNÓSTICO ]` → `{{link_diagnostico}}`

**Rodapé:** Você está recebendo esta mensagem porque reservou sua vaga na live Black Próton Vitalícia.

### API-BF-01-A (alunas do Clube)

**Corpo**

```text
Parabéns, {{nome}}! 🎉

✅ A sua vaga na live *Black Próton Vitalícia*, com a Dra. Próton, está reservada.

Você já está dentro do Clube Secreto, e o que você já fez conta. Na live, eu revelo a condição própria para alunas ficarem para sempre.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição é revelada só na live.

Para não perder nada, siga 2 passos:

1️⃣ Entre no grupo das alunas. O link da live e os avisos chegam por lá. Toque em "Entrar no grupo".

2️⃣ Ative o lembrete da live. Toque em "Ativar lembrete".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ ATIVAR LEMBRETE ]` → `{{link_lembrete}}`

**Rodapé:** Você está recebendo esta mensagem porque é aluna do Clube Secreto e reservou sua vaga na live Black Próton Vitalícia.

### API-BF-01-D (Desafio, Imersão, Aulão sem Clube)

**Corpo**

```text
Parabéns, {{nome}}! 🎉

✅ A sua vaga na live *Black Próton Vitalícia*, com a Dra. Próton, está reservada.

Você já viveu o método comigo ao vivo. Na live, eu mostro como não deixar o processo travar de novo.

📅 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição completa é revelada só na live.

Para garantir a sua experiência, siga 2 passos:

1️⃣ Entre no grupo de quem viveu o método. O link da live e os avisos chegam por lá. Toque em "Entrar no grupo".

2️⃣ Refaça o diagnóstico dos 5 padrões. Ele mostra onde você está hoje. Toque em "Fazer o diagnóstico".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ FAZER O DIAGNÓSTICO ]` → `{{link_diagnostico}}`

**Rodapé:** Você está recebendo esta mensagem porque reservou sua vaga na live Black Próton Vitalícia.

---

## 3. API-BF-02: Não confirmou (reservou e não entrou no grupo)

Gatilho: algumas horas depois do cadastro, sem clique em "Entrar no grupo". Reenvio uma única vez, no dia seguinte, por `[[CONFIRMAR: custo da API e janela de reenvio]]`. Se a pessoa clicou em qualquer botão, não reenviar.

### API-BF-02-N

**Corpo**

```text
⚠️ {{nome}}, a sua vaga na live ainda não está confirmada.

Você reservou, mas ainda não entrou no grupo oficial da *Black Próton Vitalícia*.

O link da live de *03/11, às 20h*, chega só no grupo. Quem fica fora dele não recebe o link da transmissão.

A condição é revelada ao vivo, e o grupo é o canal oficial para isso.

👇 Entre agora, leva 10 segundos. Toque em "Entrar no grupo".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ PARAR MENSAGENS ]`

### API-BF-02-A

**Corpo**

```text
⚠️ {{nome}}, a sua vaga na live ainda não está confirmada.

Você reservou, mas ainda não entrou no grupo das alunas do Clube Secreto.

A condição própria para alunas é revelada ao vivo, em *03/11, às 20h*, e o link da live chega só no grupo.

Quem fica fora dele não recebe o link da transmissão.

👇 Entre agora, leva 10 segundos. Toque em "Entrar no grupo".

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ ENTRAR NO GRUPO ]` → `{{link_grupo}}` · `[ PARAR MENSAGENS ]`

### API-BF-02-D

**Corpo**

```text
⚠️ {{nome}}, a sua vaga na live ainda não está confirmada.

Você reservou, mas ainda não entrou no grupo de quem viveu o método comigo.

O link da live de *03/11, às 20h*, chega só no grupo. Quem fica fora dele não recebe o link da transmissão.

Você já sabe como é a prática ao vivo. Essa também é ao vivo.

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

Eu não quero que você perca a live de *03/11, às 20h*. O padrão que te faz recomeçar é o mesmo que costuma te tirar das coisas na hora H.

👇 Toque para voltar ao grupo.

Digite SAIR se não quiser mais receber mensagens
```

**Botões:** `[ VOLTAR PARA O GRUPO ]` → `{{link_grupo}}` · `[ FALAR COM O SUPORTE ]` → `[[LINK: suporte WhatsApp]]`

**Rodapé:** Você está recebendo esta mensagem porque reservou sua vaga na live Black Próton Vitalícia.

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

**Rodapé:** Você está recebendo esta mensagem porque é aluna do Clube Secreto e reservou sua vaga na live.

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

**Rodapé:** Você está recebendo esta mensagem porque reservou sua vaga na live Black Próton Vitalícia.

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
1. `[[LINK: ...]]`: três links de rodízio (geral, alunas, Desafio/Imersão), diagnóstico e lembrete da live. O botão "Entrar no grupo" precisa de UTM de origem `api`.
2. Segmentar na entrada: tag de aluna ativa do Clube (A), tag de comprador de Desafio/Imersão/Aulão sem Clube (D) e restante (N). Tamanho do segmento A: `[[PENDENTE: contagem de alunas do Clube]]`.
3. `[[LINK: suporte WhatsApp]]`: usar o número oficial de suporte. Não usar telefone pessoal.
4. Aprovação de template: o botão "Parar mensagens" e o rodapé de SAIR já seguem o padrão aprovado do Desafio. A frase "Você está recebendo esta mensagem porque..." precisa casar com o motivo real de cada segmento.
5. Confirmar `{{link_diagnostico}}`: a página de obrigado/pesquisa da Black ainda não existe (`03_paginas`).

**Testes A/B sugeridos**
1. API-BF-01: com os dois botões (grupo e diagnóstico) contra só o botão do grupo. Medir taxa de entrada no grupo em 24 horas.
2. API-BF-03: com a oferta de silenciar contra sem ela. Medir taxa de retorno ao grupo.

**Dependências**
- `grupos_descricao_e_grupo_cheio.md` (texto que a pessoa encontra ao clicar).
- Meta pode reprovar templates com "⚠️" e urgência. Se reprovar, trocar por "Aviso" e testar.
