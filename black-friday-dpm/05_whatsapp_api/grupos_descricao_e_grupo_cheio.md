> BANCO DE RESERVA para os textos de descrição e de boas-vindas (seções 2 e 3). Os textos canônicos são `13_modelo_dr_joao/wpp_descricao_do_grupo.md` (desc-geral) e `13_modelo_dr_joao/wpp_grupo_cheio.md` (gc-alunas e gc-viveu). Este arquivo continua sendo a fonte do nome e da capa de cada estado do grupo (seção 1) e das versões alternativas para teste.

# Grupos de WhatsApp: nome, capa, descrição, boas-vindas e grupo cheio

| Campo | Conteúdo |
|---|---|
| **Peça** | Configuração dos grupos de WhatsApp da Black Próton Vitalícia: nome e capa por estado, descrição do grupo (campo com limite de caracteres), mensagem de boas-vindas (que cumpre também o papel de "grupo cheio") |
| **Canal** | Grupos de WhatsApp (rodízio SendFlow). 3 grupos-tipo: geral, alunas do Clube, quem fez Desafio/Imersão |
| **Público** | Geral: leads de captação e base fria (consciência 1 a 3). Alunas do Clube: consciência 4. Desafio/Imersão/Aulão sem Clube: consciência 4 a 5 |
| **Momento** | Do primeiro dia de captação (13/10) ao fechamento do carrinho. O nome e a capa mudam por estado (tabela 1) |
| **Objetivo** | Fazer a pessoa entender em 5 segundos que o grupo é o canal oficial da live de 03/11, reservar o lugar (diagnóstico + lembrete) e ficar no grupo até a live |
| **Trabalho contratado** | "Eu quero uma decisão que eu só precise tomar uma vez." O grupo é o lugar onde ela acompanha o caminho até essa decisão, sem se perder |
| **Modelo no Desafio** | descrição de grupo do Desafio, mensagem de grupo cheio do Desafio, documento de captação e automação do Desafio (campos: nome dos grupos, foto de capa, descrição, mensagem de boas-vindas/grupo cheio) |

**O que mudou em relação ao Desafio.** O Desafio tinha 5 noites e um ingresso de valor baixo, então a descrição listava as noites. A Black tem uma live única e uma oferta revelada nela. A descrição, portanto, lista (1) a data e o formato da live, (2) o que a pessoa recebe no grupo até lá e (3) o diagnóstico dos 5 padrões como porta de entrada. Nenhum preço aparece antes da live.

**Links:** cada texto das seções 2 e 3 tem um ID próprio (desc-geral, desc-alunas, desc-viveu, bv-geral, bv-alunas, bv-viveu, bv-curta) e traz tokens no formato `destino | canal | ID`, com o canal `wpp`. Nas descrições, que são campo de configuração, há mais de um token; o principal é sempre o lembrete da live (ver "Links desta peça").

---

## 1. Nome e capa do grupo por estado

Regras: o nome cabe no topo do celular (curto). A capa tem no máximo duas linhas de texto, fonte grande e contraste alto (40% do público tem mais de 50 anos). Foto da Dra.: `[[FOTO DRA]]`. A troca de nome e capa é manual e entra no cronograma (`cronograma_de_disparos.md`) como janela própria, com início e fim, e nunca no mesmo minuto de um disparo. Quando o rodízio usar vários grupos, acrescentar o número no fim do nome (ex.: "... 07"). Limites do WhatsApp: nome do grupo até 100 caracteres `[[CONFIRMAR: limite atual do nome]]`; os nomes abaixo têm menos de 45 caracteres, para caber no topo do celular, mesmo com o número do rodízio. Nenhuma cor, fonte ou logo das capas é definitiva (a identidade visual ainda não existe).

### 1.1 Grupo geral (captação)

| Estado | Quando troca | Nome do grupo | Texto da capa (linha 1 / linha 2 / rodapé pequeno) |
|---|---|---|---|
| **Captação** | 13/10, janela de 09h15 a 09h25, antes da primeira mensagem do grupo (cp-00a, 09h30) | Black Próton Vitalícia: Grupo Oficial | `A ÚLTIMA VEZ QUE VOCÊ VAI PRECISAR RECOMEÇAR` / `Live de revelação: 03/11, 20h` / `Reserve seu lugar no link da descrição` |
| **Dia da live, antes de começar** | 03/11, janela de 05h45 a 05h55, antes do CP-BF-64 | Black Próton Vitalícia: É HOJE, 20h | `É HOJE ÀS 20H` / `Live de revelação da Black Próton Vitalícia` / `Ative o lembrete` |
| **Ao vivo** | 03/11, janela de 19h30 a 19h45 (15 min, duas pessoas), antes do CP-BF-72. Não há troca às 19h59 nem às 20h | 🔴 AO VIVO HOJE, 20H: Black Próton Vitalícia | `AO VIVO HOJE ÀS 20H` / `Entre pelo link do grupo` / `[[FOTO DRA]]` |
| **Carrinho aberto** | 03/11, janela de 21h35 a 21h50 (15 min), depois de o CP-BF-76 sair com o link do checkout aberto (previsto 21h28). Condição de uso do Lote Especial `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]` | 🔓 Carrinho Aberto: Black Próton Vitalícia | `CARRINHO ABERTO` / `Black Próton Vitalícia` / `Condição do Lote Especial no link do grupo` |
| **Virada de lote** | Na virada de cada lote (`[[PENDENTE: data do lote]]`), janela de 15 min depois do disparo de virada | 🔓 Carrinho Aberto: Primeiro Lote (ou Último Lote) | `VIROU O LOTE` / `Primeiro Lote (ou Último Lote)` / `Veja a condição atual` |
| **Último dia** | Manhã do último dia (`[[PENDENTE: fechamento]]`), 15 min antes do disparo das 11h30 | 🔥 Inscrições: Último dia | `ÚLTIMO DIA` / `Black Próton Vitalícia` / `Esta condição não se repete` |
| **Últimas horas** | Início do bloco de últimas horas | 🔥 Inscrições: Últimas horas | `ÚLTIMAS HORAS` / `Black Próton Vitalícia` / `Esta condição não se repete` |
| **Encerrado** | Após o fechamento | Black Próton Vitalícia: Encerrado | `ENCERRADO` / `Obrigada por estar comigo` / `O que vier depois é outra oferta, com outro preço` |

### 1.2 Grupo de alunas do Clube

| Estado | Nome do grupo | Texto da capa |
|---|---|---|
| Captação | Clube Secreto: Condição para Alunas | `VOCÊ JÁ ESTÁ DENTRO` / `Falta ficar para sempre` / `Live de revelação: 03/11, 20h` |
| Dia da live | Clube Secreto: É HOJE, 20h | `É HOJE ÀS 20H` / `Sua condição de aluna é revelada ao vivo` |
| Ao vivo | 🔴 AO VIVO HOJE, 20H: Condição para Alunas | `AO VIVO HOJE ÀS 20H` / `Entre pelo link do grupo` |
| Carrinho aberto | 🔓 Carrinho Aberto: Condição para Alunas | `CARRINHO ABERTO` / `Sua condição de aluna está no link do grupo` |
| Virada / último dia / últimas horas / encerrado | Igual ao grupo geral, mantendo "Condição para Alunas" no nome | Igual ao geral, com `Condição para Alunas` na linha 2 |

### 1.3 Grupo de quem fez Desafio ou Imersão (e Aulão, sem Clube)

| Estado | Nome do grupo | Texto da capa |
|---|---|---|
| Captação | Black Próton Vitalícia: Quem Viveu o Método | `VOCÊ JÁ VIVEU O MÉTODO` / `Agora é continuar` / `Live de revelação: 03/11, 20h` |
| Dia da live | Black Próton Vitalícia: É HOJE, 20h | `É HOJE ÀS 20H` / `Quem viveu o método vê a condição ao vivo` |
| Ao vivo | 🔴 AO VIVO HOJE, 20H: Black Próton Vitalícia | `AO VIVO HOJE ÀS 20H` / `Entre pelo link do grupo` |
| Carrinho aberto | 🔓 Carrinho Aberto: Black Próton Vitalícia | `CARRINHO ABERTO` / `Condição no link do grupo` |
| Virada / último dia / últimas horas / encerrado | Igual ao grupo geral | Igual ao geral |

**Teste A/B sugerido para a capa de captação:** (A) frase-guia "A última vez que você vai precisar recomeçar" contra (B) pergunta "Quantas vezes você já recomeçou?". Medir saída do grupo nas primeiras 48 horas.

---

## 2. Descrição do grupo

A descrição é o texto que a pessoa lê ao entrar. Limite do campo de descrição do WhatsApp: 2.048 caracteres `[[CONFIRMAR: limite atual]]`. As três descrições abaixo têm menos de 1.000 caracteres cada (medidos com as quebras de linha e com os placeholders no lugar dos links), com folga para trocar os placeholders por endereços reais. Também respeitam a regra de linhas: no máximo 12 linhas com texto, uma linha em branco entre elas e link sempre em linha própria.

### 2.1 Descrição: grupo geral (ID: desc-geral)

```text
[ ENTRE NO GRUPO! 👇 ]

Bem-vinda(o) à *Black Próton Vitalícia*, com a Dra. Próton.

Este é o canal oficial da live em que eu revelo, de uma vez só, tudo o que construí para você parar de recomeçar.

🚨 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição completa é revelada só na live.

✨ Até lá, aqui você recebe o diagnóstico dos 5 padrões (Termostato Invisível, Autossabotagem, Cobrança Que Você Só Faz Com Você, Traumas Que Ainda Decidem e Culpa de Querer Mais), o que entra na Vitalícia, as respostas para as dúvidas mais comuns e os avisos importantes. Ative as notificações.

🧠 Diagnóstico dos 5 padrões:

[[LINK: diagnóstico | wpp | desc-geral]]

🔔 Lembrete da live:

[[LINK: live YouTube | wpp | desc-geral]]

❌ Não fazemos sorteios. Vendemos só pelos canais oficiais e *não abriremos vendas antes de 03/11*.

📲 Para falar com a equipe, confie só nos administradores do grupo e no número oficial:

[[LINK: suporte WhatsApp | wpp | desc-geral]]
```

O "check-in obrigatório" da versão anterior saiu: a reserva do lugar é gratuita e não depende de diagnóstico, então dizer que o diagnóstico "confirma o lugar" seria enganoso. O bônus de check-in só volta se existir de verdade `[[PENDENTE: bônus]]`.

### 2.2 Descrição: grupo de alunas do Clube (ID: desc-alunas)

```text
[ ENTRE NO GRUPO! 👇 ]

Bem-vinda ao grupo das alunas do Clube Secreto na *Black Próton Vitalícia*.

Você já está dentro. A pergunta da live é: quer ficar para sempre, sem prazo e sem recomeçar?

🚨 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição para alunas é revelada só na live e é diferente da de quem ainda não é do Clube.

✨ Aqui você recebe: o que muda para quem já é aluna, o que acontece com o seu acesso atual [[CONFIRMAR: regra de migração]], o convite exclusivo para alunas [[CONFIRMAR: condição do Golden Ticket]] e os avisos importantes. Ative as notificações.

🔔 Lembrete da live:

[[LINK: live YouTube | wpp | desc-alunas]]

❌ Não fazemos sorteios. Vendemos só pelos canais oficiais e *não abriremos vendas antes de 03/11*.

📲 Para falar com a equipe, confie só nos administradores do grupo e no número oficial:

[[LINK: suporte WhatsApp | wpp | desc-alunas]]
```

### 2.3 Descrição: grupo de quem fez Desafio, Imersão ou Aulão (ID: desc-viveu)

```text
[ ENTRE NO GRUPO! 👇 ]

Bem-vinda(o) de volta. Você já viveu o método comigo ao vivo, e este grupo é para você continuar.

Na *Black Próton Vitalícia* eu abro, de uma vez só, o Clube Secreto e tudo o que construí, com acesso vitalício, para você não precisar recomeçar a cada evento.

🚨 *Terça, 03/11, às 20h*, ao vivo no YouTube. A condição completa é revelada só na live.

✨ Aqui você recebe: o que entra na Vitalícia e por onde começar sem se perder, as respostas para "já comprei e não tive resultado" e "tenho medo de não aplicar", e os avisos importantes. Ative as notificações.

🧠 Refaça o diagnóstico dos 5 padrões:

[[LINK: diagnóstico | wpp | desc-viveu]]

🔔 Lembrete da live:

[[LINK: live YouTube | wpp | desc-viveu]]

❌ Não fazemos sorteios. Vendemos só pelos canais oficiais e *não abriremos vendas antes de 03/11*.

📲 Para falar com a equipe, confie só nos administradores do grupo e no número oficial:

[[LINK: suporte WhatsApp | wpp | desc-viveu]]
```

---

## 3. Mensagem de boas-vindas (grupo cheio)

No Desafio, a "mensagem de grupo cheio" é a primeira mensagem fixada em cada grupo novo do rodízio. Ela segue o mesmo papel aqui: é enviada assim que o grupo abre e quando o rodízio lota e abre o grupo seguinte. O texto é o mesmo em todos os números do rodízio.

**Limites.** Cada grupo de WhatsApp comporta até 1.024 participantes `[[CONFIRMAR: limite atual de participantes]]`. Ao lotar, o SendFlow entrega o link do próximo grupo do rodízio e a mensagem abaixo é colada de novo. A mensagem tem menos de 1.000 caracteres (limite de uma mensagem comum: 4.096) e no máximo 12 linhas com texto. Fixar a mensagem no topo do grupo.

### 3.1 Grupo geral (ID: bv-geral)

```text
👋 *Você entrou no grupo oficial da Black Próton Vitalícia.*

Dra. Próton aqui, dando as boas-vindas.

📆 *Terça, 03/11, às 20h*, ao vivo no YouTube: eu abro a oferta que o Clube Secreto nunca fez antes, com acesso vitalício, de uma vez só, ao Clube e a tudo o que construí.

O preço e as condições só são revelados na live.

Até lá, aqui você recebe o que entra na Vitalícia e as respostas para as dúvidas mais comuns. O diagnóstico dos 5 padrões está no link da descrição do grupo.

Para não perder a live, salve 03/11, às 20h, na agenda e ative o lembrete 👇

[[LINK: live YouTube | wpp | bv-geral]]

Quem está ao vivo vê a condição primeiro. [[CONFIRMAR: Lote Especial só para quem está ao vivo]]

Reage com 🔔 se o lembrete já está ativado.
```

### 3.2 Grupo de alunas do Clube (ID: bv-alunas)

```text
👋 *Bem-vinda ao grupo das alunas do Clube Secreto.*

Dra. Próton aqui. Este é o grupo da *Black Próton Vitalícia* para quem já está dentro.

Você já está dentro. No dia *03/11, terça, às 20h*, ao vivo no YouTube, eu abro a chance de ficar para sempre: acesso vitalício ao Clube e a tudo o que construí, sem prazo e sem recomeçar.

O que você já fez no Clube conta. Ninguém volta ao zero.

Existe uma condição própria para alunas. Ela só é revelada na live.

Até lá, aqui você recebe o que muda para quem já é aluna, o que acontece com o seu acesso atual [[CONFIRMAR: regra de migração]] e o convite exclusivo para alunas [[CONFIRMAR: condição do Golden Ticket]].

Salve 03/11, às 20h, na agenda e ative o lembrete da live 👇

[[LINK: live YouTube | wpp | bv-alunas]]

Terça é dia de aula do Clube. [[CONFIRMAR: o que acontece com a aula do Clube de 03/11]]

Reage com 💜 se você é do Clube e vai estar ao vivo.
```

### 3.3 Grupo de quem fez Desafio, Imersão ou Aulão (ID: bv-viveu)

```text
👋 *Bem-vinda(o) de volta: você já viveu o método comigo.*

Dra. Próton aqui. Este é o grupo de quem já esteve comigo ao vivo, agora na *Black Próton Vitalícia*.

Você sabe o que é sair de uma noite com algo na mão. E sabe como é difícil manter quando a rotina volta.

No dia *03/11, terça, às 20h*, eu abro ao vivo o que construí para você não precisar recomeçar a cada evento: acesso vitalício ao Clube Secreto e a tudo o que criei. O preço e as condições só são revelados na live.

Até lá, aqui você recebe o que entra e por onde começar sem se perder, e as respostas para "já comprei e não tive resultado" e "tenho medo de não aplicar".

Salve 03/11, às 20h, na agenda e ative o lembrete da live 👇

[[LINK: live YouTube | wpp | bv-viveu]]

Esta é a noite que eu peço que você não perca.

Reage com ✨ se você vai estar ao vivo.
```

### 3.4 Versão curta (grupo novo do rodízio, quem entrou depois) (ID: bv-curta)

Usar quando a pessoa entra com a mensagem fixada já longe no histórico.

```text
Bem-vinda(o) ao grupo oficial da Black Próton Vitalícia! 👋

Live de revelação: terça, 03/11, às 20h, ao vivo no YouTube.

Ative o lembrete para não perder:

[[LINK: live YouTube | wpp | bv-curta]]

Quantas vezes você já recomeçou? Me conta com um 🔁
```

---

## 4. Peças do Desafio que a Black não repete aqui

| Peça do Desafio | Decisão | Motivo |
|---|---|---|
| Lista de 5 noites com temas por noite | Substituída pela lista "o que você encontra aqui" | A Black tem uma live única, não 5 noites |
| "Teste de Bloqueios" como entrega obrigatória | Mantido como "diagnóstico dos 5 padrões" | É a porta de entrada: 29% a 40% da base não sabe o que a trava |
| "Cada noite é fechada em si mesma, mas a primeira é a que eu peço que não perca" | Trocado por "a que eu peço que você não perca é essa (a live)" | Existe um único evento |

---

## Notas ao implementador

**Pendências para esta peça**
1. `[[FOTO DRA]]` para todas as capas.
2. Links: grupo geral, grupo alunas e grupo viveu o método (rodízio SendFlow, três links por segmento), diagnóstico, live YouTube e suporte WhatsApp. Os grupos precisam de links de rodízio separados por segmento e tag própria no SendFlow/DataCrazy (a estratégia de 00 prevê lista, tag e checkout próprios para alunas e demais alunos).
3. `[[CONFIRMAR: regra de migração]]`: o que acontece com o acesso atual da aluna do Clube que compra a Vitalícia (crédito, extensão, nada). A pergunta mais provável do grupo de alunas; bloqueia o texto dessa descrição.
4. `[[CONFIRMAR: condição do Golden Ticket]]`: ver `convite_vip_alunas_e_quiz.md`.
5. `[[CONFIRMAR: Lote Especial só para quem está ao vivo]]`: a página de captura diz que o menor preço é só para quem estiver ao vivo. Se o Lote Especial ficar aberto por um período depois da live, trocar "ao vivo vê primeiro" por "ao vivo tem a primeira condição".
6. `[[PENDENTE: replay]]`: a página de captura afirma "sem replay". O guia lista replay como pendência. Até fechar, nenhuma peça deste pacote afirma ou nega replay.
7. `[[CONFIRMAR: o que acontece com a aula do Clube de 03/11]]`: 03/11 cai numa terça e a live é no horário em que o Clube costuma ter aula.
8. Confirmar se o grupo é "somente administradores enviam" (como no Desafio, em que só a Dra. fala). A descrição assume que sim.

**Testes A/B sugeridos**
1. Capa de captação: frase-guia contra pergunta (seção 1).
2. Boas-vindas: versão com a lista dos 5 padrões contra versão só com data e lembrete (a segunda é mais curta, e a maioria é 45+).

**Dependências**
- Os nomes e capas de cada estado entram como janelas do cronograma (no dia 03/11: 05h45 a 05h55, 19h30 a 19h45 e 21h35 a 21h50). Não há troca às 19h59, para não coincidir com o disparo das 20h.
- O link do diagnóstico depende da página `03_paginas` (obrigado/pesquisa).
