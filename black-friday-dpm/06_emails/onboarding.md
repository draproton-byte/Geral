# E-mails de onboarding da captação (3 e-mails x 3 segmentos)

| Campo | Conteúdo |
|---|---|
| Peça | Onboarding de inscrição na live de revelação (OB-01, OB-02, OB-03, cada um em 3 versões de segmento) |
| Canal | E-mail (ferramenta de automação, gatilho: entrada na lista de inscritos da página de captura) |
| Público | S1 Alunas do Clube Secreto (upgrade) · S2 Quem fez Desafio, Imersão ou Aulão e não entrou no Clube (continuação) · S3 Não-alunas, base fria e tráfego |
| Momento | De 13/10 a 03/11, a partir do cadastro. Ordem de envio: OB-02 imediato, OB-01 duas horas depois se não entrou no grupo, OB-03 vinte e quatro horas depois se não entrou no grupo nem fez o diagnóstico |
| Objetivo | Confirmar a inscrição, levar a pessoa ao grupo de WhatsApp (canal de aviso da live) e ao diagnóstico dos 5 padrões, e deixar a data 03/11 às 20h marcada |
| Consciência | S1: 4 (comparação). S2: 4 a 5. S3: 2 a 3 (dor e solução), por isso o diagnóstico vem antes da oferta |
| Trabalho contratado | "Eu quero uma decisão que eu só precise tomar uma vez." Aqui o trabalho é só um: não perder o dia em que a decisão aparece |
| Modelo no Desafio | "E-mails de onboarding Desafio" (01 bem-vinda para entrar no grupo, 02 inscrição confirmada, 03 venda do ingresso). Mantida a ordem, o tom de "estou feliz que você está aqui" e o par de botões grupo + teste. O Teste de Bloqueios virou o diagnóstico dos 5 padrões |

**Regras que valem para os 9 e-mails.** Nenhum preço. A condição é "revelada ao vivo". Sem contagem de dias dentro do texto (data fixa). Variáveis: `{{nome}}`, `{{link_grupo}}`, `{{link_diagnostico}}`. Links são placeholders `[[LINK: ...]]` até a equipe fechar.

**Ordem de leitura do segmento.** O sistema de envio deve escolher a versão pela tag do contato: S1 se tem tag de aluna ativa do Clube, S2 se tem tag de compra de Desafio, Imersão ou Aulão e não tem tag de aluna, S3 para todo o resto. Se a mesma pessoa cai em S1 e S2, vale S1.

---

## OB-01. Bem-vinda: entre no grupo (a pessoa se cadastrou e não entrou no grupo)

Dispara duas horas depois do cadastro, só para quem não clicou em "entrar no grupo".

### OB-01 / S1 Alunas do Clube

**Assunto:** {{nome}}, você é do Clube. Ainda falta um passo para o dia 03/11
**Linha de preview:** Entre no grupo para receber o link da live de revelação

Oi, {{nome}}. Tudo bem?

Que bom ter você aqui. Vi que você garantiu o seu lugar na live de 03/11, mas ainda não entrou no grupo.

Como você já está dentro do Clube Secreto, vou ser direta: a live de revelação tem uma condição pensada para quem já anda comigo. Ela só é contada ao vivo, e o aviso e o link chegam pelo grupo.

Entre no grupo agora para não ficar de fora na hora.

**Botão:** ENTRAR NO GRUPO DA LIVE
`{{link_grupo}}` = [[LINK: grupo WhatsApp alunas]]

Marque na agenda: 03/11, às 20h, no YouTube.

O que você já fez dentro do Clube não some e não começa do zero. É exatamente isso que eu vou mostrar na live.

Um abraço,
Dra. Próton

### OB-01 / S2 Quem fez Desafio, Imersão ou Aulão

**Assunto:** {{nome}}, você já viveu o método. Falta entrar no grupo
**Linha de preview:** O link da live de 03/11 chega por lá

Oi, {{nome}}. Tudo bem?

Que bom que você veio. Vi que você garantiu o seu lugar na live de 03/11, mas ainda não entrou no grupo.

Você já esteve comigo ao vivo. Já sabe como é: a prática acontece na hora, e quem está lá sente. Dessa vez eu vou abrir uma condição que eu nunca fiz, e ela só é revelada ao vivo.

O aviso e o link da transmissão chegam pelo grupo. Entre agora para não perder.

**Botão:** ENTRAR NO GRUPO DA LIVE
`{{link_grupo}}` = [[LINK: grupo WhatsApp]]

Anote: 03/11, às 20h, no YouTube.

Antes disso, tem uma coisa de dois minutos que eu quero que você faça: o diagnóstico dos 5 padrões. Ele mostra qual deles mais te segura, e você chega na live já sabendo o que olhar.

**Botão secundário:** FAZER MEU DIAGNÓSTICO
`{{link_diagnostico}}` = [[LINK: diagnóstico dos 5 padrões]]

Um abraço,
Dra. Próton

### OB-01 / S3 Não-alunas

**Assunto:** {{nome}}, você já se prometeu que dessa vez seria diferente?
**Linha de preview:** Entre no grupo para não perder a live do dia 03/11

Oi, {{nome}}. Tudo bem?

Estou feliz que você se inscreveu. Mas vi que você ainda não entrou no grupo.

Eu te faço uma pergunta: quantas vezes você já recomeçou? Começou, parou, voltou. Se isso é familiar, a live de 03/11 é para você.

Nela eu vou mostrar, ao vivo, o que eu construí para desarmar esse padrão. A condição completa só é revelada na transmissão, e o aviso e o link chegam pelo grupo.

**Botão:** ENTRAR NO GRUPO AGORA
`{{link_grupo}}` = [[LINK: grupo WhatsApp]]

Dia 03/11, às 20h, no YouTube.

Antes disso, faça o diagnóstico dos 5 padrões. Leva poucos minutos e mostra qual deles mais te trava. Muita gente descobre que o que estava procurando era o nome do padrão.

**Botão secundário:** FAZER MEU DIAGNÓSTICO
`{{link_diagnostico}}` = [[LINK: diagnóstico dos 5 padrões]]

Um abraço,
Dra. Próton

---

## OB-02. Inscrição confirmada (dispara na hora do cadastro)

### OB-02 / S1 Alunas do Clube

**Assunto:** Inscrição confirmada, {{nome}}
**Linha de preview:** Dia 03/11, 20h. A live é para quem já está dentro do Clube

Oi, {{nome}}. Parabéns por ter vindo.

Sua inscrição na live de revelação da Black Próton Vitalícia está confirmada.

Anote:
Data: 03/11
Hora: 20h
Onde: ao vivo, no YouTube
Quem: eu, Dra. Próton, abrindo a condição completa

Você já está no Clube. Então a conversa da live é diferente para você: é sobre o que muda quando você deixa de depender de renovar, de recomeçar e de achar que perdeu o mês. Existe uma condição para alunas, e eu só conto ao vivo.

Para receber o aviso e o link na hora, entre no grupo.

**Botão:** ENTRAR NO GRUPO DA LIVE
`{{link_grupo}}` = [[LINK: grupo WhatsApp alunas]]

Se você saiu do grupo, volte pelo mesmo botão.

Um abraço,
Dra. Próton

### OB-02 / S2 Quem fez Desafio, Imersão ou Aulão

**Assunto:** Inscrição confirmada, {{nome}}
**Linha de preview:** Dia 03/11, 20h. Você já viveu o método, agora veja o que vem depois

Oi, {{nome}}. Parabéns por ter vindo.

Sua inscrição na live de revelação da Black Próton Vitalícia está confirmada.

Anote:
Data: 03/11
Hora: 20h
Onde: ao vivo, no YouTube
Quem: eu, Dra. Próton, abrindo a condição completa

Você já fez parte de uma experiência ao vivo comigo. Sabe o que acontece quando a pessoa aparece de verdade. A pergunta que eu quero te fazer na live é: e depois que acaba, o que sustenta?

Para receber o aviso e o link na hora, entre no grupo.

**Botão:** ENTRAR NO GRUPO DA LIVE
`{{link_grupo}}` = [[LINK: grupo WhatsApp]]

Se ainda não fez, faça também o diagnóstico dos 5 padrões. Leva poucos minutos e te mostra qual padrão está mais forte hoje.

**Botão secundário:** FAZER MEU DIAGNÓSTICO
`{{link_diagnostico}}` = [[LINK: diagnóstico dos 5 padrões]]

Um abraço,
Dra. Próton

### OB-02 / S3 Não-alunas

**Assunto:** Inscrição confirmada. Dia 03/11, às 20h
**Linha de preview:** Abra este e-mail para não perder a hora

Oi, {{nome}}. Parabéns por ter vindo.

Sua inscrição na live de revelação da Black Próton Vitalícia está confirmada.

Anote:
Data: 03/11
Hora: 20h
Onde: ao vivo, no YouTube

Nessa noite eu vou abrir, de uma vez, tudo o que construí para ajudar você a parar de ter que recomeçar. É uma condição que eu nunca fiz. A oferta completa só é revelada na live, então é importante estar lá.

Para receber o aviso e o link na hora, entre no grupo.

**Botão:** ENTRAR NO GRUPO DA LIVE
`{{link_grupo}}` = [[LINK: grupo WhatsApp]]

Enquanto 03/11 não chega, faça o diagnóstico dos 5 padrões. Em poucos minutos você descobre qual deles mais te segura: Termostato Invisível, Autossabotagem, Cobrança Que Você Só Faz Com Você, Traumas Que Ainda Decidem ou Culpa de Querer Mais.

**Botão secundário:** FAZER MEU DIAGNÓSTICO
`{{link_diagnostico}}` = [[LINK: diagnóstico dos 5 padrões]]

Um abraço,
Dra. Próton

---

## OB-03. Aconteceu algo? (reativação, 24 horas depois)

Dispara só para quem não entrou no grupo **e** não fez o diagnóstico. No Desafio esse e-mail vendia o ingresso e dizia "vou ter que dar seu lugar para outra pessoa". Na Black não há ingresso nem limite de lugares na live (é transmissão aberta), então a mensagem de "perda de lugar" **não foi reaproveitada**: seria escassez falsa. O que ficou do modelo é a pergunta humana "aconteceu algo?" e a consequência real de ficar de fora do grupo: não receber o aviso.

### OB-03 / S1 Alunas do Clube

**Assunto:** Aconteceu algo, {{nome}}?
**Linha de preview:** Você não vai querer ouvir a condição de aluna por terceiros

Oi, {{nome}}, Dra. Próton por aqui.

Minha equipe me avisou que você se inscreveu na live de 03/11 e ainda não entrou no grupo. Aconteceu algo?

Eu pergunto porque a condição de aluna é contada uma vez, ao vivo. Se você ficar sem o aviso, vai saber por outra pessoa, e eu não quero isso para quem já está comigo.

O grupo é só isto: o aviso e o link, no seu WhatsApp, no dia 03/11.

**Botão:** ENTRAR NO GRUPO E RECEBER O AVISO
`{{link_grupo}}` = [[LINK: grupo WhatsApp alunas]]

Se prefere outro canal, responda este e-mail e a equipe resolve.

Reforçando: não fazemos sorteios nem descontos fora dos nossos canais oficiais. Tudo o que eu anunciar, anuncio ao vivo no meu canal.

Um abraço,
Dra. Próton

### OB-03 / S2 Quem fez Desafio, Imersão ou Aulão

**Assunto:** Aconteceu algo, {{nome}}?
**Linha de preview:** Você já esteve comigo ao vivo. Não fique sem o aviso

Oi, {{nome}}, Dra. Próton por aqui.

Minha equipe me avisou que você se inscreveu na live de 03/11 e ainda não entrou no grupo. Aconteceu algo?

Você já viveu uma experiência ao vivo comigo e sabe o que quero dizer quando falo de "não trave o processo". Na live eu abro uma condição que só é contada ali, na hora. O aviso chega pelo grupo.

**Botão:** ENTRAR NO GRUPO E RECEBER O AVISO
`{{link_grupo}}` = [[LINK: grupo WhatsApp]]

Se preferir, faça só o diagnóstico dos 5 padrões e a gente se vê no dia 03/11, às 20h.

**Botão secundário:** FAZER MEU DIAGNÓSTICO
`{{link_diagnostico}}` = [[LINK: diagnóstico dos 5 padrões]]

Reforçando: não fazemos sorteios nem descontos fora dos nossos canais oficiais.

Um abraço,
Dra. Próton

### OB-03 / S3 Não-alunas

**Assunto:** Aconteceu algo, {{nome}}?
**Linha de preview:** Falta só um passo para você receber o aviso da live

Oi, {{nome}}, Dra. Próton por aqui.

Minha equipe me avisou que você se inscreveu na live de 03/11 e ainda não deu o próximo passo. Aconteceu algo?

Se foi o corre do dia, tudo bem. Mas eu queria que você não deixasse isso para depois, porque o "depois" é exatamente o lugar onde o padrão de recomeçar se esconde.

O próximo passo leva menos de um minuto: entrar no grupo, onde o aviso e o link da live chegam.

**Botão:** ENTRAR NO GRUPO E RECEBER O AVISO
`{{link_grupo}}` = [[LINK: grupo WhatsApp]]

E, se quiser chegar na live já com uma pista, faça o diagnóstico dos 5 padrões.

**Botão secundário:** FAZER MEU DIAGNÓSTICO
`{{link_diagnostico}}` = [[LINK: diagnóstico dos 5 padrões]]

Reforçando: não fazemos sorteios nem descontos fora dos nossos canais oficiais. A condição é anunciada ao vivo, no dia 03/11, às 20h.

Um abraço,
Dra. Próton

---

## Notas ao implementador

1. **Trigger e exclusão.** OB-02 sai no cadastro. OB-01 só para quem não tem a tag "entrou no grupo". OB-03 só para quem não tem "entrou no grupo" e não tem "diagnóstico feito". Quem entra no grupo cancela o resto da automação.
2. **Teste A/B sugerido.** Assunto de OB-01 S3: "Você já se prometeu que dessa vez seria diferente?" contra "Falta um passo, {{nome}}". Medir abertura e entrada no grupo.
3. **Dependências.** Links do grupo por segmento (S1 pode ter grupo separado, ver `05_whatsapp_api`), link do diagnóstico e tag de "diagnóstico feito". Se S1 e S2 usarem o mesmo grupo, usar o link de S3.
4. **Afirmações a confirmar.** A frase "existe uma condição para alunas" em S1 depende de o preço de aluna ser mesmo diferenciado (briefing: sim, R$ 1.000 a menos por lote). Nenhum valor aparece. A página de captura diz "menor preço só para quem estiver ao vivo" e "sem replay": os e-mails dizem apenas "revelada ao vivo", para não prometer o que ainda está em `[[PENDENTE: replay]]`.
5. **Onde o Desafio tinha peça e a Black não.** O e-mail "venda do ingresso" não existe aqui, porque a inscrição é gratuita. A venda só começa na live. A reativação (OB-03) cumpre o papel de recuperar quem não deu o passo.
6. **Pendência.** `[[PENDENTE: contagem de alunas do Clube]]` define se S1 precisa de lista própria de grupo.
