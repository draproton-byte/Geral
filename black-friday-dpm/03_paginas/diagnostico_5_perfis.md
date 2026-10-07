# Diagnóstico dos 5 perfis

**Peça:** Diagnóstico dos 5 perfis (perguntas, pontuação e devolutiva de cada perfil)
**Canal:** Página de obrigado (passo 3), com atalho na captura A e no onboarding; resultado também enviado por e-mail e WhatsApp
**Público:** Todos os cadastrados da captura (A, B, C, D e VSL)
**Momento:** Fase 1 e 2, a partir de 13/10 até 03/11 (e novamente no onboarding)
**Objetivo:** A pessoa se reconhece em um dos 5 padrões (ou descobre que ainda não sabe), chega na live sabendo o que ouvir e o que perguntar, e fornece dados de qualificação
**Consciência:** 2 a 3 (dor nomeada, começa a procurar solução)
**Trabalho contratado:** "Eu quero entender o que me faz recomeçar"
**Modelo no Desafio:** Teste de Bloqueios do Desafio (planilha "Diagnóstico de Bloqueios DNR 0926": 5 resultados com percentual por perfil, 4.032 respostas) e Quiz A Nova Realidade (3.226 respostas). Mesma lógica: perguntas rápidas, resultado em 5 perfis, percentual de cada um

> **Este diagnóstico não é avaliação clínica.** Ele identifica padrões de comportamento a partir das respostas. Não faz diagnóstico psicológico ou médico, não indica tratamento e não promete resultado. As definições dos 5 perfis são provisórias (ver Parte 6). Aviso na tela de abertura, na tela de resultado e no rodapé (microcopy no final do arquivo).

---

## Parte 1: Estrutura do fluxo

O diagnóstico faz parte de um fluxo de 3 partes na página de obrigado (detalhado em `obrigado_e_pesquisa.md`):

| Parte | O que é | Perguntas |
|---|---|---|
| A. Sobre você | Perguntas de qualificação (inclui "qual dos 5 perfis você se reconhece") | `obrigado_e_pesquisa.md`, Q1 a Q5 |
| **B. Seu padrão (este arquivo)** | **7 perguntas pontuadas e o resultado** | **D1 a D7** |
| C. Prepare a live | Perguntas finais, incluindo a aberta "sentar uma hora com a Dra." | `obrigado_e_pesquisa.md`, Q6 a Q10 |

Tempo estimado do diagnóstico (parte B): 2 a 3 minutos. `[[CONFIRMAR: tempo real depois do teste com usuários]]`

---

## Parte 2: Telas

### Tela de abertura do diagnóstico

**Título**
`Qual padrão faz você recomeçar?`

**Texto**
`Sete perguntas. Não existe resposta certa. Responda o que vem primeiro, sem pensar muito.`

`No final, você vê qual dos 5 padrões domina e qual vem em segundo.`

**Aviso (corpo pequeno)**
`Este diagnóstico identifica padrões de comportamento. Não é avaliação clínica, não faz diagnóstico psicológico ou médico e não substitui acompanhamento profissional.`

**Consentimento (antes do botão)**
`Ao começar, você concorda que o Instituto Dra. Próton guarde as suas respostas para montar o seu resultado, preparar a live e personalizar as mensagens, o atendimento e a sua trilha de entrada. Elas não são vendidas nem divulgadas. Seus direitos, inclusive o de pedir a exclusão das respostas, estão na Política de Privacidade.` [[LINK: privacidade | pagina | diag-p2]]

**Botão**
`COMEÇAR O DIAGNÓSTICO`
Leva para: a pergunta D1, na mesma página.

### Elementos de cada pergunta

- Indicador: `Pergunta {{n}} de 7`
- Barra de progresso
- Opções em botões grandes (altura mínima 56 px, uma por linha)
- Botão `Voltar` discreto
- Avança sozinho ao tocar (sem botão "Próxima"), exceto D7, que termina com o botão `VER MEU RESULTADO` (leva para a tela de resultado, na mesma página)

### Tela de carregamento do resultado (2 segundos)

`Lendo as suas respostas...`
`Montando o seu padrão...`

---

## Parte 3: As 7 perguntas e a pontuação

Cada resposta soma pontos nos perfis (o máximo possível em cada perfil é T 11, A 16, C 14, R 15, G 18): **T** Termostato Invisível, **A** Autossabotagem, **C** Cobrança Que Você Só Faz Com Você, **R** Traumas Que Ainda Decidem (raízes), **G** Culpa de Querer Mais. "Não sei dizer" nunca pontua.

Origem das perguntas: adaptadas do Quiz A Nova Realidade (P5, P6), do Teste de Bloqueios do Desafio (P3, P4) e de frases validadas na audiência (01_PESQUISAS_INSIGHTS.md, seções 1.2 e 2).

### D1. Quando entra um dinheiro a mais na sua vida, o que costuma acontecer?

| Opção | T | A | C | R | G |
|---|---|---|---|---|---|
| Aparece uma conta ou um problema para resolver | 3 | | | | |
| Eu gasto sem perceber e depois me arrependo | 2 | 1 | | | |
| Fico com medo de gastar e mesmo assim ele desaparece | 2 | | | 1 | |
| Acabo usando o dinheiro para ajudar outras pessoas | | | | | 3 |
| Consigo guardar ou investir, mas quero aprender a crescer mais | | | | | |

### D2. Qual destas frases vem primeiro à sua cabeça?

| Opção | T | A | C | R | G |
|---|---|---|---|---|---|
| "Minha vida melhora um pouco e depois volta a dar errado." | 2 | | | 1 | |
| "Eu sei o que fazer e não faço." | | 3 | | | |
| "Estou funcional, mas exausta(o) por dentro." | | | 3 | | |
| "Sinto que a cada passo que dou, retrocedo." | | | | 3 | |
| "Eu cuido de todo mundo, mas ninguém cuida de mim." | | | | | 3 |
| Nenhuma delas | | | | | |

### D3. Quando você está perto de conseguir algo importante, o que mais acontece?

| Opção | T | A | C | R | G |
|---|---|---|---|---|---|
| Eu adio ou arrumo outra coisa para fazer | | 3 | | | |
| Aparece um imprevisto e eu volto ao ponto de antes | 3 | | | | |
| Eu me cobro tanto que não consigo comemorar | | | 3 | | |
| Lembro de frases ou situações antigas que me puxam de volta | | | | 3 | |
| Sinto um peso, como se eu não devesse ter isso | | | | | 3 |
| Não sei dizer | | | | | |

### D4. O que mais impede você de ter paz no dia a dia?

| Opção | T | A | C | R | G |
|---|---|---|---|---|---|
| Autossabotagem | | 3 | | | |
| Traumas ou feridas do passado que ainda não resolvi | | | | 3 | |
| Cobrança excessiva comigo mesma(o) | | | 3 | | |
| Ansiedade constante | | | 1 | 1 | |
| Baixa autoestima | | | | 1 | 1 |
| Não sei exatamente o que está me impedindo | | | | | |

### D5. Qual problema emocional você mais gostaria de resolver?

| Opção | T | A | C | R | G |
|---|---|---|---|---|---|
| Parar de me sabotar | | 3 | | | |
| Confiar mais em mim mesma(o) | | 1 | | | 1 |
| Parar de sentir ansiedade | | | 2 | | |
| Recuperar minha autoestima | | | | | 2 |
| Ter mais paz no dia a dia | | | 1 | | |
| Resolver uma dor ou trauma do passado | | | | 3 | |

### D6. Quando você descansa ou faz algo só para você, o que sente?

| Opção | T | A | C | R | G |
|---|---|---|---|---|---|
| Que estou perdendo tempo | | | 3 | | |
| Culpa, porque outras pessoas precisam de mim | | | | | 3 |
| Que vou me arrepender de ter parado | | 1 | 1 | | |
| Eu quase não faço isso | | | 1 | | 1 |
| Sinto normal e leve | | | | | |

### D7. Pensando em ter mais do que a sua família já teve, o que você sente?

| Opção | T | A | C | R | G |
|---|---|---|---|---|---|
| Culpa, como se eu estivesse deixando alguém para trás | | | | | 3 |
| Medo, como se prosperar fosse perigoso | 1 | | | 2 | |
| Que o dinheiro vem e logo volta ao mesmo nível | 3 | | | | |
| Que eu mereço, mas não sei por onde começar | | 2 | | | |
| Orgulho e tranquilidade | | | | | |

**Origem de D7:** a ideia de que "prosperar é perigoso" ou "você não pode ter mais do que a sua família teve" vem da Noite 4 do Desafio ("Instale uma mente de riqueza").

---

## Parte 4: Regras de cálculo e de resultado

1. **Soma:** some os pontos de cada perfil nas 7 respostas.
2. **Normalização e percentual:** como os perfis não têm o mesmo máximo (T 11, A 16, C 14, R 15, G 18), divida os pontos de cada perfil pelo seu máximo antes de comparar. Sem isso, o Termostato Invisível nunca alcança a Culpa de Querer Mais, e ele é o perfil mais frequente no Desafio. Percentual: valor normalizado do perfil dividido pela soma dos 5 valores normalizados, arredondado para número inteiro. Mostrar barras para os 5.
3. **Perfil principal:** o de maior valor normalizado. **Perfil secundário:** o segundo.
4. **Empate no primeiro lugar:** entre os perfis empatados, vence o que tiver mais pontos brutos na D3. Se continuar empatado, vale o que tiver mais pontos brutos na D2. Se continuar, mostrar os dois como "dois padrões com o mesmo peso" e usar a devolutiva do primeiro na ordem: Termostato, Autossabotagem, Cobrança, Traumas, Culpa.
5. **Sem pontuação (todas as respostas "não sei", "nenhuma" ou sem pontos) ou pontuação muito baixa (soma dos pontos brutos dos 5 perfis, juntos, menor que 6):** mostrar a devolutiva **6: "O padrão que ainda não tem nome"**. Esse caso é esperado: 29% a 40% da base responde "não sei exatamente o que está me impedindo". `[[CONFIRMAR: limite de 6 pontos, a calibrar no teste com 30 a 50 pessoas]]`
6. **Guardar na base:** perfil principal, secundário, percentuais, respostas, data, UTM e o perfil que a pessoa disse reconhecer (Q1 da pesquisa), para comparar percepção e resultado.
7. **Em nenhuma tela escrever:** "você sofre de", "você tem" seguido de condição, "diagnóstico de", "transtorno", "doença" ou qualquer promessa de resolver o padrão. Usar: "seu padrão é", "o padrão que mais aparece", "isto parece com".

---

## Parte 5: Tela de resultado (estrutura comum)

De cima para baixo:

1. **Título do resultado**
`Seu padrão mais forte: {{nome do perfil}} ({{percentual}}%)`
2. **Barras dos 5 perfis**, com o principal destacado e o secundário em segundo (cada barra traz o nome e o percentual em texto, para não depender de cor)
3. **Texto do perfil** (as devolutivas abaixo)
4. **O que fazer na live** (3 itens, no formato de lista)
5. **Passos finais** (grupo, salvar a data, voltar para a página de obrigado)
6. **Aviso (rodapé)**

**Linha fixa, abaixo do título (microcopy)**
`Este resultado identifica um padrão de comportamento. Não é avaliação clínica e não substitui acompanhamento profissional.`

**Linha de perfil secundário**
`Seu segundo padrão: {{nome}} ({{percentual}}%). Muita gente se reconhece em mais de um. O que muda é qual deles decide primeiro.`

**Botões da tela de resultado**
1. `ENTRAR NO GRUPO DA LIVE` [[LINK: grupo geral | pagina | diag-p5]]
   `[[SE: ALUNA]]` [[LINK: grupo alunas | pagina | diag-p5]] `[[FIM SE]]` `[[SE: DESAFIO / IMERSAO / AULAO]]` [[LINK: grupo viveu o método | pagina | diag-p5]] `[[FIM SE]]`
   Leva para: o grupo de WhatsApp da live do segmento da pessoa.
2. `SALVAR A DATA: 03/11, 20H` [[LINK: calendário | pagina | diag-p5]]
   Leva para: o arquivo de calendário da live.
3. `VER COMO FUNCIONA A LIVE` [[LINK: obrigado e diagnóstico | pagina | diag-p5]]
   Leva para: o topo da página de obrigado e diagnóstico.

---

## Parte 6: As devolutivas (cinco perfis e o caso sem pontuação)

Estrutura de cada uma: **Nome** · **Espelho em 3 frases** · **O que isso custa** · **O que fazer na live**.

Regras: sem diagnóstico clínico, sem prometer resultado, sem prometer ganho. "Custa" fala em custo de viver o padrão (tempo, energia, decisões), não em dinheiro perdido com número. As definições dos 5 perfis devem ser conferidas com a definição oficial da Imersão `[[CONFIRMAR: alinhar com a Imersão]]`.

---

### Perfil 1: O Termostato Invisível

**Frase da audiência**
`"Quando entra um dinheiro a mais, aparece uma conta."`

**Espelho em 3 frases**
`Parece que existe um limite que você não escolheu. O dinheiro sobe um pouco e algo faz voltar ao nível de antes: uma conta, um imprevisto, um gasto que você nem viu passar. Não é falta de esforço, é um padrão que regula até onde você chega.`

**O que isso custa**
`Custa a sensação de remar sem sair do lugar. Você trabalha, entrega, e o avanço não segura. Com o tempo, o cansaço vira desânimo e a pergunta "por que eu?", que só aumenta a impressão de que o problema é você.`

**O que fazer na live**
1. `Escute com uma pergunta na mão: "em que momento o meu dinheiro costuma voltar ao nível de antes?" Anote o que aparecer.`
2. `Quando a Dra. mostrar o que entra na Vitalícia, marque o que responde ao seu padrão: dinheiro e crenças sobre dinheiro.`
3. `Leve uma dúvida para o comercial ou para o chat: "por onde eu começo, sendo Termostato?" A trilha de entrada tem a resposta.`

**Dado de apoio (uso interno):** 51,9% das pessoas que responderam à pesquisa de presença (dossiê do Desafio) disseram que, quando entra dinheiro a mais, aparece uma conta ou um problema. Não citar o número na devolutiva.

---

### Perfil 2: A Autossabotagem

**Frase da audiência**
`"Eu sei o que fazer e não faço."`

**Espelho em 3 frases**
`Informação e vontade não faltam, e você chega perto. Na hora de agir, adia, arruma outra coisa para fazer ou recomeça do zero. Isso não é falta de caráter: é um padrão que age no momento exato em que você ia agir.`

**O que isso custa**
`Custa tempo e confiança em você. Cada começo que não termina deixa uma marca: a promessa que você fez a si mesma e não cumpriu. Com o tempo, você passa a acreditar que não consegue, e isso torna o próximo começo mais difícil.`

**O que fazer na live**
1. `Escute com esta pergunta: "em que ponto eu costumo parar?" Anote o ponto, não a desculpa.`
2. `Preste atenção no que a Dra. disser sobre tirar o prazo: sem prazo, some a pressão de "preciso usar logo", que costuma ser onde esse padrão age.`
3. `Marque o que da oferta ajuda a continuar sem depender de força de vontade. Pergunte, no chat, como é o primeiro passo de 48 horas.`

---

### Perfil 3: A Cobrança Que Você Só Faz Com Você

**Frase da audiência**
`"Estou funcional, mas exausta(o) por dentro."`

**Espelho em 3 frases**
`Você entrega, cuida e dá conta de tudo. E se cobra mais do que cobraria de qualquer outra pessoa. Descansar vem com a sensação de estar perdendo tempo, e nada que você faz parece suficiente.`

**O que isso custa**
`Custa o descanso e a leveza. Você funciona, mas por dentro se esgota. E como a cobrança é interna, não existe dia de folga: ela vai com você para a cama.`

**O que fazer na live**
1. `Escute com esta pergunta: "o que eu faria se parasse de me cobrar por um dia?" Anote a primeira resposta.`
2. `Repare como a Vitalícia trata o ritmo: sem prazo, sem o mês que você perdeu. É uma decisão que não depende de você dar conta de tudo dentro de um prazo.`
3. `Pergunte, no chat ou para o comercial, como a trilha de entrada respeita o seu ritmo.`

---

### Perfil 4: Traumas Que Ainda Decidem

**Frase da audiência**
`"Sinto que a cada passo que dou, retrocedo."`

**Espelho em 3 frases**
`Uma frase, um olhar, um medo antigo viraram regra sem você perceber. Eles não avisam. Decidem na hora em que você vai dar o passo. Por isso, quanto mais você se esforça, mais parece que volta ao mesmo lugar.`

**O que isso custa**
`Custa a sensação de viver sempre na estaca zero. Você avança, algo antigo puxa, e você recua. É um cansaço que não vem do que você faz hoje, mas do que você carrega.`

**O que fazer na live**
1. `Escute com esta pergunta: "que frase antiga eu ouço quando vou dar um passo?" Escreva, sem julgar.`
2. `Repare no que a Dra. disser sobre o que roda por baixo. O que está por baixo se trabalha, não se força.`
3. `Se uma lembrança pesada aparecer, respire e lembre que a live não é terapia. Se for forte, procure um profissional de saúde. Você não precisa lidar com isso sozinha(o).`

**Cuidado de compliance:** esta devolutiva toca em trauma. Não prometer resultado nem tratamento. A frase "a live não é terapia" é obrigatória, e o aviso de buscar um profissional de saúde mental precisa ficar visível.

---

### Perfil 5: A Culpa de Querer Mais

**Frase da audiência**
`"Eu cuido de todo mundo, mas ninguém cuida de mim."`

**Espelho em 3 frases**
`Querer mais para você vem junto com culpa. Você coloca todo mundo antes, e o que sobra para você é sempre o que sobra. Prosperar parece "deixar alguém para trás", então você se segura sem perceber.`

**O que isso custa**
`Custa o espaço de ser prioridade na sua própria vida. Você dá o que tem para os outros e fica no fim da fila. Com o tempo, vem o ressentimento e a ideia de que querer algo para si é egoísmo.`

**O que fazer na live**
1. `Escute com esta pergunta: "o que eu quero para mim que eu ainda não me deixei querer?" Escreva a primeira coisa que vier.`
2. `Lembre do que a Dra. diz nas aulas: quando você sobe, a casa sobe junto. Repare como isso aparece na live.`
3. `Se você é casada(o) ou tem família, combine antes com quem convive com você que, às 20h, esse horário é seu.`

**Origem:** "Quando você sobe, a casa sobe junto" é frase real da Aula 02 do Desafio (00_ESTRATEGIA_COPY_SENIOR.md, seção 3.3).

---

### Perfil 6 (sem pontuação): O padrão que ainda não tem nome

Aparece quando todas as respostas foram "não sei" ou sem pontuação, ou quando a soma dos pontos brutos fica abaixo de 6 (Parte 4, regra 5). Caso esperado: 29% a 40% da base não sabe nomear o que a trava.

**Título**
`Seu padrão ainda não tem nome. E isso é um começo.`

**Espelho em 3 frases**
`Suas respostas não apontaram um padrão que se destaque. Isso é comum: "não sei exatamente o que está me impedindo" foi a resposta mais frequente entre as pessoas que responderam à minha pesquisa. Não é falta de autoconhecimento, é que o padrão age por baixo, sem avisar.`

**O que isso custa**
`Custa o tempo de tentar de tudo sem saber o que tentar. Quem não sabe o que trava tende a testar mais um curso, mais uma técnica, e a sentir que nada pega.`

**O que fazer na live**
1. `Escute a live com os 5 padrões na frente e marque o que te pegar de surpresa. O que incomoda costuma ser o que serve.`
2. `Anote, no fim, em qual dos 5 você se reconheceu mais. Refaça o diagnóstico depois da live.`
3. `Pergunte no chat: "como eu descubro o meu padrão?"`

**Botão extra**
`REFAZER O DIAGNÓSTICO DEPOIS DA LIVE` [[LINK: diagnóstico | pagina | diag-p6]]
Leva para: o início do diagnóstico, para refazer (liberado depois da live).

---

## Parte 7: Fechamento comum a todas as devolutivas

**Antes dos botões**

`Você acabou de dar o primeiro passo. O segundo é estar na live.`
`Dia 03/11, às 20h, ao vivo no YouTube, a Dra. Próton abre a Black Próton Vitalícia: a última vez que você vai precisar recomeçar.`
`Eu não prometo que o seu padrão acaba. O que eu te ofereço é entender melhor o que decide por você e ouvir, ao vivo, uma condição que não se repete.`

**Linha final**
`Eu prefiro que você não compre do que compre e não viva.`

---

## Parte 8: Textos de apoio

**Mensagem de erro, sem resposta**
`Escolha uma opção para continuar.`

**Se a pessoa já fez o diagnóstico**
`Você já fez o diagnóstico. Seu padrão mais forte foi {{perfil}}. Quer refazer?` Botões: `VER MEU RESULTADO` (leva para a tela de resultado) e `REFAZER` [[LINK: diagnóstico | pagina | diag-p8]] (leva para a tela de abertura do diagnóstico).

**Se a pessoa já fez o Teste de Bloqueios do Desafio (origem DESAFIO)**
`Você já fez um teste parecido no Desafio. Este é novo, gratuito e leva poucos minutos. Quer fazer?` Botões: `FAZER O DIAGNÓSTICO` (leva para a tela de abertura) e `AGORA NÃO` (leva para a tela de passos finais).

**Texto de compartilhamento (opcional, pelo WhatsApp)**
`Eu fiz o diagnóstico e meu padrão mais forte é {{perfil}}. Descubra o seu:`
[[LINK: captura A | wpp | diag-p8]]
`[[CONFIRMAR: permitir compartilhamento. Se for ativado, a mensagem não pode conter o percentual nem o texto da devolutiva]]`

**Rodapé do diagnóstico**
`O diagnóstico identifica padrões de comportamento a partir das suas respostas. Não é avaliação clínica, não faz diagnóstico psicológico ou médico e não substitui acompanhamento profissional. Se você está em sofrimento agudo, procure um profissional de saúde. No Brasil, o CVV atende 24 horas pelo 188.` [[CONFIRMAR: manter a menção ao CVV 188 (canal público)]]

---

## Notas ao implementador

1. **Pendências:** `[[CONFIRMAR: definição oficial dos 5 perfis na Imersão]]`, `[[CONFIRMAR: tempo do diagnóstico]]`, os links do grupo da live e do arquivo de calendário, `[[CONFIRMAR: live começa com a pergunta "Quantas vezes você já recomeçou?" e a conta do Termostato, conforme 01_PESQUISAS_INSIGHTS.md, seção 3]]`.
2. **Pontuação:** a tabela é uma proposta, e a normalização da Parte 4 corrige o teto menor do Termostato (11 pontos contra 18 da Culpa). Antes de ir ao ar, rodar com 30 a 50 pessoas da base e checar se o resultado distribui entre os 5 perfis (no Desafio, a média por perfil foi: Termostato 31,6%; Autossabotagem 23,3%; Cobrança 21,7%; Culpa 14,2%; Traumas 9,1%). Se um perfil estiver abaixo de 5% de resultado principal, rebalancear pesos. Sem rebalanceamento, "Traumas" tende a ficar sub-representado, como ficou no Desafio (376 de 4.032 resultados).
3. **Perfis em dados do Desafio (resultado principal, 4.032 respostas):** Termostato Invisível 1.089; Autossabotagem 1.082; Cobrança Que Você Só Faz Com Você 1.001; Culpa de Querer Mais 484; Traumas Que Ainda Decidem 376. Usar como referência de volume por perfil no planejamento de criativos e de comercial.
4. **Percepção contra resultado:** comparar o perfil que a pessoa disse reconhecer (pesquisa Q1) com o resultado do diagnóstico. A diferença é dado de copy: onde a pessoa se enxerga contra onde o padrão aparece.
5. **Uso nas peças:** o perfil principal vira a variável `{{perfil}}` nas mensagens de WhatsApp, nos e-mails de captação, no comercial (abertura por perfil) e na trilha de entrada do onboarding.
6. **Testes A/B:** (1) 7 perguntas contra 5 (mede abandono); (2) resultado só com o perfil principal contra resultado com os 5 percentuais; (3) botão "Entrar no grupo" antes do texto do perfil contra depois.
7. **Dependências:** `obrigado_e_pesquisa.md`, `onboarding_vitalicia.md` (trilha por perfil), `captura_A_diagnostico_primeiro.md` (usa os mesmos espelhos de 2 linhas nos chips).
8. **LGPD:** o resultado é dado pessoal sensível por proximidade (fala de saúde emocional). A tela de abertura já traz o aviso de consentimento; pedir consentimento específico e não usar o resultado em anúncio individualizado sem base legal. `[[CONFIRMAR: parecer jurídico]]`.
9. **Onde o Desafio tinha uma peça e a Black precisa de outra:** o Teste de Bloqueios do Desafio era um formulário único de 8 perguntas que misturava qualificação e perfil. Na Black ele é separado em duas camadas (qualificação em `obrigado_e_pesquisa.md`; padrão neste arquivo) para o resultado aparecer antes das perguntas de renda e objeção, o que reduz abandono.

---

## Links desta peça

| ID da peça | Token | O que o link faz | Quem cria |
|---|---|---|---|
| diag-p2 | `[[LINK: privacidade \| pagina \| diag-p2]]` | Abre a política de privacidade a partir do consentimento da tela de abertura | Jurídico |
| diag-p5 | `[[LINK: grupo geral \| pagina \| diag-p5]]`, `[[LINK: grupo alunas \| pagina \| diag-p5]]` e `[[LINK: grupo viveu o método \| pagina \| diag-p5]]` | Botão 1 da tela de resultado: entra no grupo da live do segmento | Automação (rodízio SendFlow) |
| diag-p5 | `[[LINK: calendário \| pagina \| diag-p5]]` | Botão 2: baixa o arquivo de calendário da live | Automação |
| diag-p5 | `[[LINK: obrigado e diagnóstico \| pagina \| diag-p5]]` | Botão 3: volta ao topo da página de obrigado | Web designer |
| diag-p6 | `[[LINK: diagnóstico \| pagina \| diag-p6]]` | Botão extra da devolutiva 6: refazer o diagnóstico depois da live | Web designer |
| diag-p8 | `[[LINK: diagnóstico \| pagina \| diag-p8]]` | Botão REFAZER para quem já fez o diagnóstico | Web designer |
| diag-p8 | `[[LINK: captura A \| wpp \| diag-p8]]` | Texto de compartilhamento (opcional): quem recebe cai na captura A | Web designer |
