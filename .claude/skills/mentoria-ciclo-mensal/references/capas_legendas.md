# Capas e legendas (bloqueia o VERDE)

Dois cards por dia, mesmo design aprovado em Outubro (não mudar):

- Capa da mensagem (07h00), pasta "Capa das mensagens": JPG, "DIA NN" + tema. Nome: `Dia NN · <tema>.jpg`.
- Capa da reflexão (09h00), pasta "Capa das reflexões": PNG. Nome: `Dia NN · <tema>.png`.
- Legenda da reflexão, pasta "Legenda das reflexões": `Dia NN · <tema>.txt` + o Doc "Reflexões do Dia (21 dias)".

A confirmar: qual das duas capas leva a foto da Dra. (Outubro: conferir na pasta; se não der para ver, "a confirmar").

Imagem: só a logo dourada do Clube Secreto. Fotos só de blazer preto (ombros, tronco e mãos), pasta "FOTOS 2026"; a pasta "FOTOS" (blazer vinho) é vetada. Fotos alegres recortadas: IMG_9795 e IMG_9775 (`recortes/estudio/h01.png`, `h02.png`). Algo novo no design: gerar 1 amostra antes do lote.

## Conferências do `conferir_capas.py`

1. OCR de cada capa (tesseract) igual a `DIA NN` + tema de `temas.json`, sem diferença de acento. Sem tesseract, esta etapa fica "não verificada" (não VERDE).
2. Mesmo tema, letra por letra, em: nome dos 3 arquivos, título do bloco no Doc, coluna Título da planilha, `temas.json`.
3. Mesma legenda em: `.txt` do Drive, bloco cinza do Doc, `reflexoes.json`; número do dia igual ao do arquivo.
4. Link de cada capa no Doc abre o arquivo do mesmo dia (conferir pelo nome do arquivo no Drive).
5. 21 arquivos em cada pasta, nenhum sobrando, nenhum com nome de mês anterior.

Entradas do script: `--temas temas.json --reflexoes reflexoes.json --capas-msg <pasta> --capas-ref <pasta> --legendas <pasta> [--doc doc.json] [--planilha planilha.json]`. Os dois últimos são exportações (Dia, tema, legenda) feitas pelo passo 11/12. Saída: lista exata de divergências (dia, lugar, esperado, encontrado) e código de saída 1 se houver.

Legenda das 09h00: ver references/modelo_mensagem.md.
