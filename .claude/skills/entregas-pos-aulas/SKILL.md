---
name: entregas-pos-aulas
description: Prepara e confere as entregas pós aulas da Imersão Desbloqueie o Poder da Sua Mente (Dra. Próton). Use quando pedirem "entregas pós aulas", o que enviar ao aluno depois de cada noite, ou a mensagem/checklist de pós-aula.
---

# Entregas pós aulas

Define o que o aluno recebe depois de cada noite da Imersão e como conferir se tudo foi entregue.

## Fontes no repositório
- `imersao-dpm/pdfs/`: um PDF "Manual da Noite" por aula (Aula 01, 02, 03).
- `imersao-dpm/capas/`: capa de cada aula e dos módulos.
- `imersao-dpm/descricoes/descricoes-hotmart.html`: descrições das aulas na Hotmart.
- `imersao-dpm/planilha/planejamento-conteudo-imersao-dpm.csv`: conteúdo de redes ligado a cada noite.
- `area-membros-imersao/`: área de membros (conteúdo em `conteudo.js`).
- `imersao-dpm/src/noites.js`: texto-base das três noites.

## Passos
1. Identifique a noite (1, 2 ou 3) e leia o trecho dela em `imersao-dpm/src/noites.js`.
2. Monte a lista de entregas dessa noite:
   - PDF "Manual da Noite" correspondente, disponível na área de membros.
   - Exercício prático da noite (ex.: Noite 3, as duas listas: "Do que eu me despeço hoje" e "Tudo o que eu vou conquistar em 12 meses").
   - Mensagem de pós-aula com o resumo, o link do material e a chamada para a próxima noite.
3. Confira se cada item existe e está publicado: arquivo no repositório, aula na área de membros e descrição na Hotmart.
4. Se pedirem a mensagem, escreva-a na voz da Dra. Próton: direta, acolhedora, sem culpar o aluno, e com uma única ação clara.
5. Entregue ao usuário um checklist por noite com o status de cada item (ok, falta, a confirmar).

## Regras
- Siga também a skill `regras-keila` quando ela se aplicar.
- Não invente prazos, links ou bônus que não estejam nas fontes: marque como "a confirmar".
- Use o nome exato dos PDFs e das aulas, como estão no repositório.
