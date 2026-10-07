# Fluxo de ManyChat: palavra-chave que entrega o diagnóstico e o ingresso da live

| Campo | Conteúdo |
|---|---|
| **Peça** | Fluxo automatizado de direct do Instagram (@dra.proton) acionado por comentário ou por resposta ao story com palavra-chave. Entrega (1) o diagnóstico dos 5 padrões e (2) o ingresso personalizado da live de 03/11. Inclui resposta pública ao comentário, 4 ramos, mensagens de acompanhamento e a versão pós-live |
| **Canal** | Instagram Direct via ManyChat, com integração ao formulário de reserva, ao grupo de WhatsApp e à Hotmart |
| **Público** | Frio e morno que chega por reels, estáticos e stories (consciência 1 a 3). Quem já reservou o lugar volta pelo mesmo fluxo para emitir o ingresso |
| **Momento** | De 13/10 a 03/11, 20h (pré-live). De 20h até a abertura do link do checkout (previsto 21h28), o gatilho devolve o link da live (MC-BF-D01). A partir da abertura do link, o mesmo gatilho muda para a versão de carrinho aberto (seção 6) |
| **Objetivo** | Transformar um comentário em: reserva do lugar na live, diagnóstico feito, entrada no grupo e ingresso compartilhado nos stories |
| **Trabalho contratado** | "Dar nome ao padrão" para decidir uma vez. O diagnóstico é a porta de entrada; o ingresso é a prova de presença e a isca de compartilhamento |
| **Momento de vida** | 79% mulheres, 60% com 45 anos ou mais: mensagens curtas, uma ação por mensagem, botões grandes |
| **Modelo no Desafio** | fluxo de ingresso do Desafio no ManyChat (palavra-chave INGRESSO, ramo A "ainda não comprou", ramo B "já comprou", presente atrás do story, notas de montagem e disparo por API). Também documento de captação e automação do Desafio (lista de passos de integração) |

**O que mudou em relação ao Desafio.**
- O Desafio vendia um ingresso pago. Aqui o ingresso da live é **gratuito**: o Ramo A leva à página de reserva, não ao checkout, e nenhum preço aparece.
- No Desafio o "presente" era o Quiz da Frequência da Vida, entregue só depois do story. Na Black o **diagnóstico** é a entrega principal e vem antes do pedido de story, porque 29% a 40% da base não sabe o que a trava e é pelo diagnóstico que ela entra no funil. O presente de compartilhamento passa a ser `[[CONFIRMAR: presente de compartilhamento]]`.
- O Desafio usava o contador do lote (preço do 1º lote e valor de subida) no Ramo A. Aqui não existe lote antes da live. A urgência é a data da live.
- Acrescentei um terceiro caminho (palavra-chave DIAGNÓSTICO) que entrega o diagnóstico primeiro, e uma pergunta de auto-classificação em 5 botões (porque o ManyChat não lê o resultado do diagnóstico sem integração).

**Regras de forma:** sempre "para", nunca a forma reduzida. Uma ação por mensagem. No Instagram, no máximo 3 botões por mensagem; respostas rápidas (quick replies) aceitam mais opções, como as 5 do resultado do diagnóstico. O texto de cada mensagem fica abaixo de 640 caracteres `[[CONFIRMAR: limites da plataforma]]`. As regras de formato de WhatsApp (linha em branco entre linhas, rodapé SAIR) não se aplicam ao direct do Instagram. Links com UTM `manychat` (seção 1).

---

## 1. Configuração

| Item | Valor |
|---|---|
| Palavra-chave principal | **VITALÍCIA** (aceitar também VITALICIA, vitalícia, vitalicia, "quero a vitalícia") |
| Palavra-chave do diagnóstico | **DIAGNÓSTICO** (aceitar também DIAGNOSTICO, "meu diagnóstico") |
| Palavras-chave opcionais (teste por criativo de dor) | TERMOSTATO, SABOTAGEM, COBRANÇA, TRAUMA, CULPA (todas caem no caminho DIAGNÓSTICO e gravam a tag do perfil) |
| Formato | Direct do Instagram, `@dra.proton`, acionado por comentário em post e reel, e por resposta a story |
| Página de reserva (captura) | Token captura A, canal manychat e ID da mensagem (A05 e L01). O UTM `utm_source=manychat` e o ID da mensagem vêm do próprio token (fórmula de `16_MAPA_DE_LINKS.md`, seção 3) |
| Diagnóstico dos 5 padrões | Token diagnóstico, canal manychat (B07 e C01) |
| Live no YouTube | Token live YouTube, canal manychat (D01) |
| Grupo de WhatsApp | Um token por segmento: grupo geral, grupo alunas (tag `bf_aluna`) e grupo viveu o método (tag `bf_aluno_desafio`). A peça B11 traz o token de grupo geral e o fluxo troca o destino pela tag |
| Ingresso personalizado | `[[CONFIRMAR: template da arte do ingresso, com {{nome}}]]` (serviço de imagem dinâmica) |
| Presente de compartilhamento | `[[CONFIRMAR: presente de compartilhamento]]` |
| Objetivo principal | Reserva do lugar e diagnóstico feito. Objetivo secundário: ingresso postado nos stories com marcação em @dra.proton |
| Tags | `bf_reservou`, `bf_diagnostico`, `bf_ingresso`, `bf_story`, `bf_grupo`, `bf_perfil_termostato`, `bf_perfil_autossabotagem`, `bf_perfil_cobranca`, `bf_perfil_traumas`, `bf_perfil_culpa`, `bf_aluna`, `bf_aluno_desafio` |

### 1.1 Resposta pública ao comentário

Alternar entre as variantes (evita repetição e bloqueio por spam). Todas respondem em público e abrem o direct.

| ID | Texto |
|---|---|
| MC-BF-00a | Te mandei no direct! 💜 |
| MC-BF-00b | Olha o seu direct! 👀 |
| MC-BF-00c | Acabei de te enviar tudo por mensagem. 💌 |
| MC-BF-00d | Enviado! Confere o seu direct. 🔴 |

Para comentários que não têm a palavra-chave mas pedem o link ("link", "como entro", "quero"), disparar a mesma resposta e o fluxo.

---

## 2. Abertura (todos)

**MC-BF-01** (mensagem 1)

```text
{{nome}}, o seu ingresso gratuito da live *Black Próton Vitalícia*, com a Dra. Próton, está pronto para sair: terça, 03/11, às 20h, ao vivo no YouTube.

E você ainda recebe o diagnóstico dos 5 padrões que fazem a gente recomeçar. Posso te enviar?
```

Botão: `[ Sim! ]`

**MC-BF-02** (mensagem 2)

```text
Você já reservou o seu lugar na live?
```

Botões rápidos: `[ Sim, já reservei! ]` · `[ Ainda não ]`

---

## 3. Ramo A: quem AINDA NÃO reservou o lugar

**MC-BF-A03**

```text
Então vamos reservar agora, antes que você esqueça. Toque em Continuar 👇
```

Botão rápido: `[ Continuar ]`

**MC-BF-A04**

```text
A live é terça, 03/11, às 20h, ao vivo.

Eu abro a conta do Termostato Invisível e mostro o que construí para você parar de recomeçar. A condição completa só é revelada ao vivo.

Reservar o lugar é de graça.
```

**MC-BF-A05**

```text
👇 Reserve o seu lugar aqui:

[[LINK: captura A | manychat | mc-bf-a05]]
```

**MC-BF-A06**

```text
Assim que confirmar, volta aqui e escreve VITALÍCIA de novo. Eu emito o seu ingresso na hora.
```

**MC-BF-A07 (reconciliação, quando a pessoa volta e a tag `bf_reservou` ainda não chegou)**

```text
Ainda não veio a confirmação da sua reserva aqui. 🤍 Isso pode levar alguns minutos. Tenta de novo em instantes.
```

---

## 4. Ramo B: quem JÁ reservou o lugar

**MC-BF-B03** (confirmação do nome)

```text
Vou gerar o seu ingresso com este nome: 👉 {{nome}}

Está certo assim?
```

Botões: `[ ✅ Pode gerar ]` · `[ ✏️ Quero escrever outro ]`

**MC-BF-B03b** (só para quem tocou em "Quero escrever outro"; volta para a B03)

```text
Escreve aqui embaixo o nome que você quer no ingresso 👇

Exemplo: Maria Silva
```

**MC-BF-B04**

```text
⏳ Aguarde, o seu ingresso já está sendo emitido...
```

**MC-BF-B05**

```text
Seu ingresso da live *Black Próton Vitalícia* ficou pronto! Aperte no botão abaixo para pegar 👇
```

Botão: `[ ✅ Pegar ingresso ]`

**MC-BF-B06** (entrega do diagnóstico)

```text
Ótimo, agora a sua presença está confirmada. E como combinamos, eu tenho o seu diagnóstico dos 5 padrões: ele mostra qual deles faz você recomeçar.

Quer receber?
```

Botão: `[ ✅ Quero! ]`

**MC-BF-B07**

```text
Aqui está o seu diagnóstico 👇

[[LINK: diagnóstico | manychat | mc-bf-b07]]

Quando terminar, volta aqui e me conta qual foi o seu resultado.
```

Botão: `[ Já fiz ]`

**MC-BF-B08** (auto-classificação do resultado; cada botão grava a tag do perfil)

```text
Qual foi o seu resultado?
```

Botões rápidos: `[ Termostato Invisível ]` · `[ Autossabotagem ]` · `[ Cobrança ]` · `[ Traumas ]` · `[ Culpa de Querer Mais ]`

**MC-BF-B08-TI**

```text
O Termostato Invisível: quando o dinheiro cresce, algo puxa de volta. Na live, eu faço essa conta ao vivo, na prática. Te vejo terça, às 20h. 💜
```

**MC-BF-B08-AS**

```text
A Autossabotagem: você sabe o que fazer e trava na hora. O "depois" é o esconderijo dela. Na live, eu mostro o que construí para tirar esse "depois" do caminho. Te vejo terça, às 20h. 💜
```

**MC-BF-B08-CB**

```text
A Cobrança Que Você Só Faz Com Você: você faz muito e se cobra por não ter feito mais. Na live, eu falo ao vivo desse cansaço. Te vejo terça, às 20h. 💜
```

**MC-BF-B08-TR**

```text
Os Traumas Que Ainda Decidem: a cada passo, algo antigo puxa de volta. Na live, eu mostro por onde isso se trabalha. Te vejo terça, às 20h. 💜
```

**MC-BF-B08-CQ**

```text
A Culpa de Querer Mais: você cuida de todo mundo e adia a sua vez. Na live, eu falo ao vivo dessa culpa. Te vejo terça, às 20h. 💜
```

**MC-BF-B09** (pedido de story, opcional, só depois da entrega do diagnóstico)

```text
Quer um presente extra? Posta o seu ingresso nos stories e me marca 👉 @dra.proton

Eu respondo todos. [[CONFIRMAR: presente de compartilhamento]]
```

Botão: `[ ✅ Já postei! ]`

**MC-BF-B10** (depois de "Já postei")

```text
Recebi! 🤍 [[CONFIRMAR: entrega do presente de compartilhamento]]
```

**MC-BF-B11** (grupo, obrigatório)

```text
Agora falta um passo: entra no grupo de WhatsApp da live, o canal oficial dos avisos 👇

[[LINK: grupo geral | manychat | mc-bf-b11]]
```

**MC-BF-B12**

```text
O grupo é o canal oficial da live: o link e os avisos saem primeiro lá. Te vejo dia 03/11, às 20h. 🤍
```

---

## 5. Ramo C: palavra-chave DIAGNÓSTICO (entrega primeiro, convida depois)

**MC-BF-C01**

```text
{{nome}}, aqui está o seu diagnóstico dos 5 padrões 👇

[[LINK: diagnóstico | manychat | mc-bf-c01]]

Ele mostra qual deles faz você recomeçar: Termostato Invisível, Autossabotagem, Cobrança Que Você Só Faz Com Você, Traumas Que Ainda Decidem ou Culpa de Querer Mais.
```

Botão: `[ Já fiz ]`

**MC-BF-C02**

```text
Qual foi o seu resultado?
```

Botões rápidos: `[ Termostato Invisível ]` · `[ Autossabotagem ]` · `[ Cobrança ]` · `[ Traumas ]` · `[ Culpa de Querer Mais ]`

Cada botão envia a mensagem `MC-BF-B08-xx` do perfil, grava a tag e segue para:

**MC-BF-C03**

```text
Agora que você sabe o nome do padrão, quer entender como parar de repetir ele?

No dia 03/11, às 20h, eu faço isso ao vivo, e mostro o que construí para você não precisar recomeçar. Quer reservar o seu lugar?
```

Botão: `[ Quero reservar ]` (volta para MC-BF-02)

---

## 6. Versão pós-live (a partir da abertura do link do checkout, 03/11, previsto 21h28)

O gatilho é o mesmo, mas uma condição por horário muda o fluxo. Pessoas com a tag `bf_aluna` recebem a MC-BF-V01-A e a MC-BF-V02-A (preço e checkout de alunas); as demais, a MC-BF-V01 e a MC-BF-V02 (preço e checkout de não-alunas; quem tem a tag `bf_aluno_desafio` usa o checkout S2), com match por e-mail ou telefone com a Hotmart, como na nota de integração do Desafio. Entre 20h e a abertura do link, vale a MC-BF-D01.

**MC-BF-D01** (durante a live, antes de o link do checkout abrir)

```text
{{nome}}, a live já está no ar. 🔴

Entra agora pelo link:

[[LINK: live YouTube | manychat | mc-bf-d01]]
```

**MC-BF-V01** (todos, palavra-chave VITALÍCIA depois da abertura)

```text
{{nome}}, a condição da *Black Próton Vitalícia* foi revelada ao vivo e está aberta. 🔓

*Clube Secreto + 11 produtos, acesso vitalício, pagamento único.*

🏷️ *{{lote_atual}}:* [[PREÇO LOTE NÃO-ALUNAS]] [[CONFIRMAR: parcelamento]]

⏳ Vale até {{data_virada}}.
```

**MC-BF-V01-A** (mesma mensagem, tag `bf_aluna`)

```text
{{nome}}, a condição da *Black Próton Vitalícia* para alunas do Clube foi revelada ao vivo e está aberta. 🔓

*Clube Secreto + 11 produtos, acesso vitalício, pagamento único.*

🏷️ *{{lote_atual}} para alunas:* [[PREÇO LOTE ALUNAS]] [[CONFIRMAR: parcelamento]]

⏳ Vale até {{data_virada}}.
```

**MC-BF-V02**

```text
👇 Garanta o seu lugar:

[[LINK: checkout S3-ESP | manychat | mc-bf-v02]]
```

**MC-BF-V02-A** (mesma mensagem, tag `bf_aluna`)

```text
👇 Garanta o seu lugar, aluna:

[[LINK: checkout S1-ESP | manychat | mc-bf-v02-a]]
```

**MC-BF-V03**

```text
Ficou com dúvida? Me conta por aqui, ou fala direto com o suporte:

[[LINK: suporte WhatsApp | manychat | mc-bf-v03]]
```

---

## 7. Lembretes automáticos

| Gatilho | Mensagem | Quando |
|---|---|---|
| Parou em MC-BF-A05 sem reservar | MC-BF-L01 | 6 horas depois |
| Parou em MC-BF-B06 sem tocar em "Quero!" | MC-BF-L02 | 3 horas depois |
| Parou em MC-BF-B09 (pedido de story) | MC-BF-L03 | Algumas horas depois |
| Reservou e não entrou no grupo | MC-BF-L04 | 12 horas depois |

**MC-BF-L01**

```text
{{nome}}, o seu lugar na live ainda está aqui esperando. 🤍 É só tocar para reservar:

[[LINK: captura A | manychat | mc-bf-l01]]
```

**MC-BF-L02**

```text
O seu diagnóstico ainda está aqui esperando. É só tocar em "Quero!" e eu libero na hora.
```

**MC-BF-L03**

```text
Posta o seu ingresso nos stories e me marca 👉 @dra.proton. Eu libero o presente na hora.
```

**MC-BF-L04**

```text
{{nome}}, falta o grupo para você receber os avisos da live em primeira mão. Entra aqui 👇

[[LINK: grupo geral | manychat | mc-bf-l04]]
```

---

## 8. O que acontece depois (jornada)

| Evento | Próximo passo |
|---|---|
| Reservou o lugar | Entra a API de onboarding (`api_onboarding.md`) |
| Fez o diagnóstico e se auto-classificou | Tag do perfil entra no ListBoss/DataCrazy, e a API de quiz pós-live usa o perfil (`convite_vip_alunas_e_quiz.md`, API-BF-06.2) |
| Postou o ingresso | Resposta manual ou automática com o presente `[[CONFIRMAR: presente de compartilhamento]]` |
| Chegou 03/11, 20h | O fluxo devolve o link da live (MC-BF-D01) e, quando o link do checkout abrir, muda para a versão pós-live (seção 6) |

---

## O que o Desafio tinha e a Black não repete

| Peça do Desafio | Decisão | Motivo |
|---|---|---|
| MSG 5 do Ramo A com lote e checkout do ingresso pago | Trocada pela página de reserva (gratuita) | Não há preço antes da live |
| Presente = Quiz da Frequência da Vida atrás do story | Trocado: o diagnóstico é a entrega principal e não fica atrás do story | O diagnóstico é a porta de entrada; o story vira presente extra |
| MSG 11 "Teste de Bloqueios" exclusiva do Desafio | Substituída pela MC-BF-B06 e B07 | O diagnóstico está no centro do fluxo |
| Ebook de Grabovoi como presente | **Proibido** | A LP o vende como exclusivo do Clube e a Vitalícia inclui o produto "Sequências Numéricas de Grabovoi": dar de graça quebra a exclusividade |

---

## Notas ao implementador

**Pendências**
1. Links: captura A (A05 e L01), diagnóstico (B07 e C01), live YouTube (D01), grupo geral com troca por tag (B11 e L04), checkout S3-ESP e S1-ESP (V02 e V02-A) e suporte WhatsApp (V03). As variantes de grupo precisam de links de rodízio separados e de tag no ManyChat. O token de checkout mostra o primeiro lote (Lote Especial); depois das viradas o fluxo troca por 1L e UL conforme `{{lote_atual}}`.
2. `[[CONFIRMAR: template da arte do ingresso]]`: o Desafio usava um serviço de imagem dinâmica (Bannerbear, Placid ou Canva com API). A arte do ingresso é da área `04_criativos`. Sem ela, o Ramo B pula direto da B03 para a B06.
3. `[[CONFIRMAR: presente de compartilhamento]]`: pode ser o bônus de 15 minutos da live (`08_live_e_pitch`) ou um áudio. Não inventar. Se não existir, apagar MC-BF-B09, B10 e os lembretes L02 e L03 e manter só o ingresso.
4. Integração Hotmart e formulário de reserva para ManyChat: o Desafio listava "confirmar se já existe integração ou se precisa de middleware (n8n, Make ou Zapier)". O mesmo vale aqui, com o formulário da página de captura no lugar do evento de compra: a tag `bf_reservou` precisa chegar em minutos.
5. `[[CONFIRMAR: limites de caracteres e de botões do Instagram]]`.
6. Mensagens após 24 horas da última interação não podem ser enviadas pelo Instagram. Os lembretes da seção 7 respeitam a janela. Para o dia 03/11 usar WhatsApp (grupo e API), não Instagram, exceto as respostas automáticas ao comentário (MC-BF-D01 e V01).
7. Um ManyChat de WhatsApp (se for usado no lugar do Instagram) precisaria de templates aprovados na Meta. Este fluxo é só de Instagram e não tem template.

**Testes A/B sugeridos**
1. Palavra-chave VITALÍCIA contra RECOMEÇAR no mesmo criativo, para medir qual gera mais reservas.
2. Pedir o story antes da entrega do diagnóstico (como no Desafio) contra depois (como aqui). Medir taxa de story e taxa de diagnóstico feito.
3. MC-BF-01 com "ingresso" contra "lugar" no texto.

**Dependências**
- `api_onboarding.md` (o que acontece depois da reserva).
- Criativos de captação (`04_criativos`) com a palavra-chave no fim, e legendas com a mesma palavra.
- Link do grupo por segmento (`grupos_descricao_e_grupo_cheio.md`).
