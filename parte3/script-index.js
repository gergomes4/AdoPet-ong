// ===== Alternância de Modo Claro / Escuro =====

// Seleciona o botão
const btnTema = document.getElementById("toggle-tema");

// Verifica se há preferência salva no localStorage
const temaSalvo = localStorage.getItem("tema");

// Aplica o tema salvo, se existir
if (temaSalvo === "escuro") {
  document.body.classList.add("modo-escuro");
  btnTema.textContent = "☀️ Modo Claro";
}

// Escuta o clique no botão
btnTema.addEventListener("click", () => {
  document.body.classList.toggle("modo-escuro");

  if (document.body.classList.contains("modo-escuro")) {
    btnTema.textContent = "☀️ Modo Claro";
    localStorage.setItem("tema", "escuro");
  } else {
    btnTema.textContent = "🌙 Modo Escuro";
    localStorage.setItem("tema", "claro");
  }
});