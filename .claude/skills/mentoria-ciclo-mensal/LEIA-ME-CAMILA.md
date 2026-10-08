# Instalar e usar a skill da Mentoria (passo a passo para a Camila)

## 1. Instalar a skill

**Jeito mais fácil:** abra o arquivo `mentoria-ciclo-mensal.skill` e clique em **Salvar skill**. Ela passa a valer em qualquer computador logado na sua conta Claude.

**Se o botão não aparecer:** descompacte o `.skill` (é um zip) e coloque a pasta `mentoria-ciclo-mensal` em `C:\Users\<seu usuário>\.claude\skills\`. Depois feche e abra o Claude Code.

## 2. Instalar os programas (uma vez só)

Abra o PowerShell e rode, um por vez:

```
winget install Python.Python.3.12
winget install Gyan.FFmpeg
winget install yt-dlp.yt-dlp
winget install UB-Mannheim.TesseractOCR
pip install faster-whisper reportlab pillow openpyxl
```

(ffmpeg corta o áudio, yt-dlp baixa o vídeo do livro, tesseract lê o texto das capas, faster-whisper transcreve.) Feche e abra o PowerShell depois.

## 3. Conferir o que falta

```
cd C:\Users\<seu usuário>\.claude\skills\mentoria-ciclo-mensal
python scripts\instalar.py
```

Ele lista o que ainda falta. Os scripts `baixar.py`, `transcrever.py`, `build_pdf.py` etc. vêm do PC da Keila: peça a ela para copiar a pasta `mentoria-21-dias-disparos\scripts` para dentro de `scripts\` da skill nova. Fontes, logo e fotos de blazer preto também vêm de lá.

## 4. Logins (só você faz; o Claude nunca digita senha)

- Chrome com a extensão Claude in Chrome, logado no Drive com `novaordemmental@gmail.com`.
- Sendflow logado no mesmo Chrome.

## 5. Usar todo mês

Abra o Claude Code e escreva: **"novo ciclo da mentoria de Novembro 2026"**. O Claude cria o arquivo `entrada_novembro.json` e lista o que falta (vídeo do livro e áudio que a Tami entrega até o dia 1). Preencha ou passe os dados e escreva **"rodar o ciclo"**. Se parar, escreva de novo "rodar o ciclo": ele continua de onde parou. Para ver em que passo está: **"status do ciclo"**.

Prazos: Dias 1 a 3 você + Claude produzem; dia 4 a Tami confere; dia 5 você aplica os ajustes; dias 6 e 7 a Vivi agenda.
