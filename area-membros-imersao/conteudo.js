/*
 * Conteúdo da Imersão — edite este arquivo para personalizar a área de membros.
 *
 * video: URL de embed (YouTube: https://www.youtube.com/embed/ID,
 *        Vimeo: https://player.vimeo.com/video/ID) ou vazio para aula só em texto.
 * materiais: lista de { nome, url } exibidos abaixo da aula.
 */
window.IMERSAO = {
  titulo: "Imersão",
  subtitulo: "Área de Membros",
  // Códigos de acesso aceitos na tela de entrada (verificação apenas no navegador).
  codigosAcesso: ["IMERSAO2026"],
  suporte: { texto: "Falar com o suporte", url: "mailto:suporte@exemplo.com" },

  modulos: [
    {
      id: "boas-vindas",
      titulo: "Módulo 0 — Boas-vindas",
      descricao: "Comece por aqui: como aproveitar ao máximo a imersão.",
      aulas: [
        {
          id: "apresentacao",
          titulo: "Apresentação da Imersão",
          duracao: "08:00",
          video: "",
          texto: "Seja bem-vindo(a)! Nesta aula você conhece a estrutura da imersão, o cronograma e como usar esta área de membros.",
          materiais: [{ nome: "Cronograma da Imersão (PDF)", url: "#" }]
        },
        {
          id: "combinados",
          titulo: "Combinados e comunidade",
          duracao: "05:30",
          video: "",
          texto: "Regras da comunidade, canais de comunicação e como tirar dúvidas.",
          materiais: []
        }
      ]
    },
    {
      id: "dia-1",
      titulo: "Dia 1 — Fundamentos",
      descricao: "A base que sustenta todo o método.",
      aulas: [
        { id: "d1-a1", titulo: "Aula 1 — Mentalidade", duracao: "32:10", video: "", texto: "Conteúdo da aula 1.", materiais: [{ nome: "Workbook Dia 1", url: "#" }] },
        { id: "d1-a2", titulo: "Aula 2 — Diagnóstico", duracao: "27:45", video: "", texto: "Conteúdo da aula 2.", materiais: [] },
        { id: "d1-a3", titulo: "Aula 3 — Exercício prático", duracao: "18:20", video: "", texto: "Conteúdo da aula 3.", materiais: [] }
      ]
    },
    {
      id: "dia-2",
      titulo: "Dia 2 — Aplicação",
      descricao: "Colocando o método em prática.",
      aulas: [
        { id: "d2-a1", titulo: "Aula 1 — Estratégia", duracao: "35:00", video: "", texto: "Conteúdo da aula 1.", materiais: [{ nome: "Workbook Dia 2", url: "#" }] },
        { id: "d2-a2", titulo: "Aula 2 — Estudo de caso", duracao: "29:15", video: "", texto: "Conteúdo da aula 2.", materiais: [] }
      ]
    },
    {
      id: "dia-3",
      titulo: "Dia 3 — Próximos passos",
      descricao: "Plano de ação e encerramento.",
      aulas: [
        { id: "d3-a1", titulo: "Aula 1 — Plano de ação", duracao: "24:40", video: "", texto: "Conteúdo da aula 1.", materiais: [{ nome: "Modelo de plano de ação", url: "#" }] },
        { id: "d3-a2", titulo: "Encerramento", duracao: "15:00", video: "", texto: "Mensagem final e próximos passos.", materiais: [] }
      ]
    }
  ]
};
