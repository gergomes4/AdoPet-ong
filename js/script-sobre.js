// === script-sobre.js ===
// Aplica o mesmo tema salvo no localStorage automaticamente

document.addEventListener("DOMContentLoaded", () => {

  const body = document.body;

  // Verifica tema salvo no navegador
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    body.classList.add("modo-escuro");
  }

  // === Animação suave nas imagens ===
  const imagens = document.querySelectorAll("header img");
  imagens.forEach(img => {
    img.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    img.addEventListener("mouseenter", () => {
      img.style.transform = "scale(1.05)";
      img.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    });
    img.addEventListener("mouseleave", () => {
      img.style.transform = "scale(1)";
      img.style.boxShadow = "none";
    });
  });

  // === Efeito suave nos botões ===
  const botoes = document.querySelectorAll("header button");
  botoes.forEach(btn => {
    btn.style.transition = "background-color 0.3s ease, transform 0.3s ease";
    btn.addEventListener("mouseenter", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "scale(1)";
    });
  });

});