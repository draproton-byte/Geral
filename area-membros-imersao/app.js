(function () {
  "use strict";

  var C = window.IMERSAO;
  var CHAVE = "imersao-membros";

  // ---------- Estado salvo no navegador ----------
  function carregar() {
    try { return JSON.parse(localStorage.getItem(CHAVE)) || {}; } catch (e) { return {}; }
  }
  function salvar() {
    try { localStorage.setItem(CHAVE, JSON.stringify(estado)); } catch (e) { /* armazenamento indisponível */ }
  }
  var estado = carregar();
  estado.concluidas = estado.concluidas || {};
  estado.anotacoes = estado.anotacoes || {};

  // ---------- Utilidades ----------
  var $ = function (s) { return document.querySelector(s); };
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function urlSegura(u) { return /^(https?:|mailto:|#|\/|\.)/i.test(u || "") ? u : "#"; }

  var todasAulas = [];
  C.modulos.forEach(function (m) {
    m.aulas.forEach(function (a) { todasAulas.push({ modulo: m, aula: a }); });
  });
  function chaveAula(m, a) { return m.id + "/" + a.id; }
  function feitasNoModulo(m) {
    return m.aulas.filter(function (a) { return estado.concluidas[chaveAula(m, a)]; }).length;
  }

  document.querySelectorAll("[data-titulo]").forEach(function (el) { el.textContent = C.titulo; });
  document.querySelectorAll("[data-subtitulo]").forEach(function (el) { el.textContent = C.subtitulo; });
  document.title = C.subtitulo + " — " + C.titulo;

  // ---------- Acesso ----------
  function iniciar() {
    if (estado.nome) {
      $("#tela-login").hidden = true;
      $("#app").hidden = false;
      $("#saudacao").textContent = "Olá, " + estado.nome.split(" ")[0];
      rotear();
    } else {
      $("#app").hidden = true;
      $("#tela-login").hidden = false;
      $("#login-nome").focus();
    }
  }

  $("#form-login").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var nome = $("#login-nome").value.trim();
    var codigo = $("#login-codigo").value.trim().toUpperCase();
    var validos = C.codigosAcesso.map(function (c) { return c.toUpperCase(); });
    if (!nome || validos.indexOf(codigo) === -1) {
      $("#login-erro").hidden = false;
      return;
    }
    $("#login-erro").hidden = true;
    estado.nome = nome;
    salvar();
    iniciar();
  });

  $("#btn-sair").addEventListener("click", function () {
    delete estado.nome;
    salvar();
    location.hash = "";
    iniciar();
  });

  $("#btn-menu").addEventListener("click", function () { $("#lateral").classList.toggle("aberta"); });

  // ---------- Navegação lateral ----------
  function renderNav(atual) {
    var total = todasAulas.length;
    var feitas = todasAulas.filter(function (x) { return estado.concluidas[chaveAula(x.modulo, x.aula)]; }).length;
    var pct = total ? Math.round((feitas / total) * 100) : 0;
    $("#progresso-pct").textContent = pct + "%";
    $("#progresso-barra").style.width = pct + "%";

    $("#nav-modulos").innerHTML = C.modulos.map(function (m) {
      var aberto = !atual || atual.modulo.id === m.id;
      return '<details class="nav-modulo"' + (aberto ? " open" : "") + ">" +
        "<summary><span>" + esc(m.titulo) + "</span><span>" + feitasNoModulo(m) + "/" + m.aulas.length + "</span></summary>" +
        m.aulas.map(function (a) {
          var k = chaveAula(m, a);
          var cls = "nav-aula" + (estado.concluidas[k] ? " feita" : "") +
            (atual && atual.aula.id === a.id && atual.modulo.id === m.id ? " ativa" : "");
          return '<a class="' + cls + '" href="#/aula/' + encodeURIComponent(m.id) + "/" + encodeURIComponent(a.id) + '">' +
            '<span class="check">' + (estado.concluidas[k] ? "✓" : "") + "</span>" +
            "<span>" + esc(a.titulo) + "</span></a>";
        }).join("") +
        "</details>";
    }).join("");
  }

  // ---------- Páginas ----------
  function proximaPendente() {
    for (var i = 0; i < todasAulas.length; i++) {
      var x = todasAulas[i];
      if (!estado.concluidas[chaveAula(x.modulo, x.aula)]) return x;
    }
    return null;
  }
  function linkAula(x) {
    return "#/aula/" + encodeURIComponent(x.modulo.id) + "/" + encodeURIComponent(x.aula.id);
  }

  function renderInicio() {
    renderNav(null);
    var prox = proximaPendente();
    var alvo = prox || todasAulas[0];
    $("#conteudo").innerHTML =
      '<section class="boas-vindas">' +
        "<h1>Olá, " + esc(estado.nome.split(" ")[0]) + "!</h1>" +
        "<p>" + (prox ? "Continue de onde parou: <strong>" + esc(prox.aula.titulo) + "</strong>."
                      : "Você concluiu todas as aulas da imersão. Parabéns!") + "</p>" +
        (alvo ? '<a class="btn" href="' + linkAula(alvo) + '">' + (prox ? "Continuar assistindo" : "Rever aulas") + "</a> " : "") +
        (C.suporte ? '<a class="btn btn-sec" href="' + esc(urlSegura(C.suporte.url)) + '">' + esc(C.suporte.texto) + "</a>" : "") +
        '<div class="cards">' +
          C.modulos.map(function (m) {
            var primeira = m.aulas[0];
            return '<a class="card" href="' + (primeira ? linkAula({ modulo: m, aula: primeira }) : "#/") + '">' +
              "<h3>" + esc(m.titulo) + "</h3><p>" + esc(m.descricao || "") + "</p>" +
              "<small>" + feitasNoModulo(m) + " de " + m.aulas.length + " aulas concluídas</small>" +
              '<div class="barra"><div style="width:' + (m.aulas.length ? Math.round(feitasNoModulo(m) / m.aulas.length * 100) : 0) + '%"></div></div>' +
            "</a>";
          }).join("") +
        "</div>" +
      "</section>";
  }

  function renderAula(mid, aid) {
    var idx = -1;
    for (var i = 0; i < todasAulas.length; i++) {
      if (todasAulas[i].modulo.id === mid && todasAulas[i].aula.id === aid) { idx = i; break; }
    }
    if (idx === -1) { location.hash = "#/"; return; }
    var x = todasAulas[idx], m = x.modulo, a = x.aula, k = chaveAula(m, a);
    var ant = todasAulas[idx - 1], prox = todasAulas[idx + 1];
    var feita = !!estado.concluidas[k];

    renderNav(x);
    $("#conteudo").innerHTML =
      '<article class="aula">' +
        '<div class="migalha">' + esc(m.titulo) + (a.duracao ? " · " + esc(a.duracao) : "") + "</div>" +
        "<h1>" + esc(a.titulo) + "</h1>" +
        '<div class="video">' +
          (a.video ? '<iframe src="' + esc(urlSegura(a.video)) + '" title="' + esc(a.titulo) + '" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>'
                   : '<div class="video-vazio">Vídeo em breve</div>') +
        "</div>" +
        '<div class="acoes">' +
          (ant ? '<a class="btn btn-sec" href="' + linkAula(ant) + '">← Anterior</a>' : "") +
          '<span class="espaco"></span>' +
          '<button id="btn-concluir" class="btn ' + (feita ? "btn-sec" : "") + '">' + (feita ? "✓ Concluída" : "Marcar como concluída") + "</button>" +
          (prox ? '<a class="btn btn-sec" href="' + linkAula(prox) + '">Próxima →</a>' : "") +
        "</div>" +
        (a.texto ? '<section class="bloco"><h2>Sobre esta aula</h2><p>' + esc(a.texto) + "</p></section>" : "") +
        (a.materiais && a.materiais.length ?
          '<section class="bloco"><h2>Materiais</h2><ul>' +
            a.materiais.map(function (mat) {
              return '<li><a href="' + esc(urlSegura(mat.url)) + '" target="_blank" rel="noopener">' + esc(mat.nome) + "</a></li>";
            }).join("") +
          "</ul></section>" : "") +
        '<section class="bloco"><h2>Minhas anotações</h2>' +
          '<textarea id="anotacao" placeholder="Escreva seus insights desta aula…"></textarea>' +
          '<div class="salvo" id="salvo">Salvo automaticamente neste navegador.</div>' +
        "</section>" +
      "</article>";

    var campo = $("#anotacao");
    campo.value = estado.anotacoes[k] || "";
    var timer;
    campo.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        estado.anotacoes[k] = campo.value;
        salvar();
        $("#salvo").textContent = "Anotação salva.";
      }, 400);
    });

    $("#btn-concluir").addEventListener("click", function () {
      if (estado.concluidas[k]) delete estado.concluidas[k];
      else estado.concluidas[k] = Date.now();
      salvar();
      if (estado.concluidas[k] && prox) location.hash = linkAula(prox);
      else renderAula(mid, aid);
    });
  }

  // ---------- Rotas ----------
  function rotear() {
    if (!estado.nome) return;
    $("#lateral").classList.remove("aberta");
    var partes = location.hash.replace(/^#\/?/, "").split("/").map(decodeURIComponent);
    if (partes[0] === "aula" && partes[1] && partes[2]) renderAula(partes[1], partes[2]);
    else renderInicio();
    window.scrollTo(0, 0);
    $("#conteudo").focus({ preventScroll: true });
  }

  window.addEventListener("hashchange", rotear);
  iniciar();
})();
