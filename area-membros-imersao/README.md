# Área de Membros — Imersão

Área de membros estática (HTML, CSS e JavaScript puro, sem build) para uma imersão ou curso.

## Recursos

- Tela de acesso com nome e código de acesso
- Módulos e aulas com player de vídeo (YouTube, Vimeo ou qualquer URL de embed)
- Marcar aula como concluída, com barra de progresso geral e por módulo
- "Continuar de onde parou" no painel inicial
- Materiais para download em cada aula
- Anotações pessoais por aula, salvas automaticamente
- Layout responsivo com menu lateral no celular

## Como usar

1. Abra `index.html` no navegador, ou publique a pasta em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel).
2. Edite `conteudo.js` para definir título, códigos de acesso, módulos, aulas, vídeos e materiais.
3. Código de acesso de exemplo: `IMERSAO2026`.

## Importante sobre segurança

O código de acesso é verificado **apenas no navegador** e fica visível em `conteudo.js`. Isso serve para organizar a experiência dos alunos, mas **não protege o conteúdo**. Para proteger de verdade:

- use vídeos não listados ou privados com restrição de domínio (Vimeo, Panda Video etc.), e/ou
- coloque a área atrás de uma autenticação real (por exemplo, Netlify Identity, Cloudflare Access ou um backend próprio).

O progresso e as anotações ficam salvos no `localStorage` do navegador de cada aluno, então não são sincronizados entre dispositivos.
