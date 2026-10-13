/* =====================================================================
   script.js — NÃO PRECISA EDITAR AQUI.
   Lê o arquivo config.js e coloca os links/foto na página.
   ===================================================================== */
(function () {
  "use strict";

  // Monta os links a partir do config.js
  var links = {
    whatsapp:
      "https://wa.me/" + CONFIG.whatsappNumero +
      "?text=" + encodeURIComponent(CONFIG.whatsappMensagem),
    behance: CONFIG.behance,
    instagram: "https://www.instagram.com/" + CONFIG.instagramUsuario + "/",
    portfolio: CONFIG.portfolio,
    email:
      "mailto:" + CONFIG.email +
      "?subject=" + encodeURIComponent(CONFIG.emailAssunto),
  };

  // Aplica cada link nos elementos que têm data-link="nome"
  document.querySelectorAll("[data-link]").forEach(function (a) {
    var href = links[a.getAttribute("data-link")];
    if (!href) return;
    a.setAttribute("href", href);
    // e-mail abre no app de e-mail; o resto abre em nova aba
    if (href.indexOf("mailto:") !== 0) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  });

  // @usuario do Instagram (card + rodapé)
  document.querySelectorAll("[data-instagram-handle]").forEach(function (el) {
    el.textContent = "@" + CONFIG.instagramUsuario;
  });

  // Foto: se o arquivo não existir, continua aparecendo "SUA FOTO AQUI"
  var img = document.getElementById("foto");
  if (img && CONFIG.foto) {
    img.alt = CONFIG.fotoAlt || "";
    img.addEventListener("error", function () { img.remove(); });
    img.src = CONFIG.foto;
  }
})();
