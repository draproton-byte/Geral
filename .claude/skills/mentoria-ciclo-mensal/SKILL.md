---
name: mentoria-ciclo-mensal
description: Roda o ciclo mensal completo da Mentoria 21 Dias da Dra. Próton (Clube Secreto) com um comando, até o pré-voo VERDE. Use sempre que a Camila ou a equipe falar em "novo ciclo", "próximo mês da mentoria", "áudios de 21 dias", "disparos do mês", "livro da leitura diária", "PDF por dia", "pré-voo", "doc de disparos", "capas da mentoria" ou "reflexões do mês", mesmo sem citar a skill. Cobre corte do áudio do livro, temas, PDFs, reflexões, capas e legendas, Drive, Doc, planilha, links curtos do Sendflow, calendário e conferências.
---

# Mentoria 21 Dias: ciclo mensal

A Camila digita um comando e o Claude roda o ciclo até o pré-voo VERDE. A Tami confere no Drive, Doc e planilha. A Vivi agenda e envia. Esta skill substitui `mentoria-21-dias-disparos` (que vira só um aviso).

## Comandos

```
python scripts/ciclo.py novo <mes> <ano>          # cria entrada_<mes>.json e as pastas do Drive
python scripts/ciclo.py rodar --entrada entrada_<mes>.json
python scripts/ciclo.py status
python scripts/instalar.py                        # confere o que falta no PC
```

`rodar` é retomável: refaz do último passo VERDE. `status` mostra passo atual e pendências. Datas: Dia 01 = dia 10, Dia 21 = dia 30 (o `novo` calcula os dias da semana).

## Entrada

`novo` preenche o que descobre e deixa `[FALTA: ...]` no resto. `rodar` não começa com `[FALTA` na entrada. Campos: `mes`, `ano`, `youtube_livro`, `audio_reprogramacao`, `nome_reprogramacao`, `livro`, `autor` (confirmar numa pergunta só), `pasta_mes_drive`, `aula_ao_vivo`, `suporte` (confirmar todo mês), `podcast_boas_vindas`, `manual_pdf`, `cta_reflexao`.

## Passos (detalhe em references/passos.md)

1. Baixar áudio do livro. 2. Cortar em 21 partes. 3. Transcrever. 4. Temas (máx. 4 palavras, contado por script). 5. Frase de destaque literal. 6. PDFs (livro A5 + 21 por dia, `paginas.json`). 7. Reflexões. 8. Capas e legendas. 9. Publicar no Drive. 10. Links curtos do Sendflow. 11. Doc de disparos. 12. Planilha (só as 43 linhas da Mentoria). 13. `.ics` e simulação do WhatsApp. 14. Pré-voo.

Cada passo só vira VERDE depois da sua validação. Um VERMELHO lista dia, lugar, valor esperado e valor encontrado.

## Regras que valem sempre

- Mensagem das 07h00 usa o modelo novo (references/modelo_mensagem.md). Capas vão como IMAGEM com o texto na legenda; nunca capa como link no texto. Medir o tamanho da legenda e acusar VERMELHO se passar do limite do WhatsApp.
- Capas e legendas 100% corretas bloqueiam o VERDE (references/capas_legendas.md, `scripts/conferir_capas.py`).
- Tudo do mês fica na conta `novaordemmental@gmail.com`. Antes de qualquer upload, conferir a conta logada no Drive; se for outra, parar e pedir troca (references/drive_publicacao.md).
- Aprovação de conteúdo é da Tami (dia 4). Onde se lê "Keila aprova", leia "Tami confere". Tudo é rascunho até lá.
- Nunca dispara mensagem (WhatsApp, Data Crazy, Evolution, e-mail, DM, teste). A Vivi agenda e envia; áudio sempre como mensagem de voz.
- Nunca digitar senha; login é da Camila. Nenhum material do grupo leva nome da equipe (Keila, Tami, Camila, Vivi): a voz é da Dra. Próton.
- Sem credenciais nos arquivos. Sem travessão nos textos. Não inventar: o que faltar fica `[FALTA: ...]` ou "a confirmar".
- Caminhos nunca fixos: use a pasta da skill e `ciclo.json`.

## Quando parar e pedir

Login/senha; link, ID, livro ou telefone não achado; mudar dono ou permissão além de leitor por link (Keila); copiar a planilha `Disparos Dra Próton.xlsx` (só com OK da Keila).

## Referências (leia quando o passo chegar)

- references/calendario_papeis.md: calendário e papéis da equipe.
- references/passos.md: ferramenta, comando, saída e validação de cada passo.
- references/capas_legendas.md: capas, legendas e as 5 conferências.
- references/drive_publicacao.md: Drive, contas, Sendflow, planilha.
- references/modelo_mensagem.md: textos das 07h00 e 09h00.
- references/armadilhas.md: armadilhas e prevenção.
- references/divergencias.md: decisões da Keila e divergências a resolver.
- references/a_confirmar.md: pendências e avisos fixos do relatório.

## Avisos fixos em todo relatório final

Direitos autorais do texto do livro nos PDFs; transcrição automática (nomes revisados, resto não conferido); cortes por tempo (oferecer corte por capítulo); livro do áudio pode diferir do livro do Doc; páginas são do PDF gerado, não do livro impresso.

## Fontes

Playbook: https://claude.ai/artifact/XAfMU3987fRoWpSdAEzfa3. Gabarito: pasta `dra-proton/mentoria-21-dias` (Outubro/2026). Doc `1N77FVKgc3qtJJhRSD3FAZu3Cvi-NHZ4H5OJ9o-wDLeM`, planilha `1zvHY36OEhgyoKyNSYUWQfuHjkAJUxOZJ` (aba `Outubro26`), pasta do mês `18jGL7YcfFseX5Eg6qDzG8rKZozZyA-py`, pasta-mãe `12a6Nwbi9OobtOZbfsN5tgNKUryqRzdem`.
