// ======= Modo Claro / Escuro =======
const botaoTema = document.getElementById("toggle-tema");
const body = document.body;

if (localStorage.getItem("tema") === "escuro") {
  body.classList.add("modo-escuro");
  if (botaoTema) botaoTema.textContent = "☀️ Modo Claro";
}

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    body.classList.toggle("modo-escuro");
    if (body.classList.contains("modo-escuro")) {
      localStorage.setItem("tema", "escuro");
      botaoTema.textContent = "☀️ Modo Claro";
    } else {
      localStorage.setItem("tema", "claro");
      botaoTema.textContent = "🌙 Modo Escuro";
    }
  });
}

// ======= Validação do Formulário =======
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valido = true;
  let mensagens = [];

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const cpf = document.getElementById("cpf");
  const telefone = document.getElementById("telefone");
  const cep = document.getElementById("cep");
  const nascimento = document.getElementById("nascimento");
  const aceito = form.querySelector('input[name="aceito"]');

  // Validações básicas
  if (nome.value.trim().length < 5) {
    valido = false;
    mensagens.push("⚠️ Nome precisa ter pelo menos 5 caracteres.");
  }

  if (!email.value.includes("@")) {
    valido = false;
    mensagens.push("⚠️ E-mail inválido.");
  }

  const cpfPattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfPattern.test(cpf.value)) {
    valido = false;
    mensagens.push("⚠️ CPF no formato 000.000.000-00.");
  }

  const telPattern = /^\(\d{2}\)\s?\d{4,5}-\d{4}$/;
  if (!telPattern.test(telefone.value)) {
    valido = false;
    mensagens.push("⚠️ Telefone no formato (00) 00000-0000.");
  }

  const cepPattern = /^\d{5}-\d{3}$/;
  if (!cepPattern.test(cep.value)) {
    valido = false;
    mensagens.push("⚠️ CEP no formato 00000-000.");
  }

  if (!aceito.checked) {
    valido = false;
    mensagens.push("⚠️ Você precisa confirmar as informações.");
  }

  // Valida idade >= 18 anos
  if (nascimento.value) {
    const hoje = new Date();
    const dataNasc = new Date(nascimento.value);
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
      idade--;
    }
    if (idade < 18) {
      valido = false;
      mensagens.push("⚠️ É necessário ter 18 anos ou mais para se cadastrar.");
    }
  }

  if (!valido) {
    alert(mensagens.join("\n"));
    return;
  }

  // Cadastro válido: limpa formulário e mostra mensagem de sucesso
  form.reset();

  // Remove mensagem antiga se existir
  let msgExistente = document.getElementById("mensagem-sucesso");
  if (msgExistente) msgExistente.remove();

  const divMsg = document.createElement("div");
  divMsg.id = "mensagem-sucesso";
  divMsg.style.backgroundColor = "#f7941d";
  divMsg.style.color = "#fff";
  divMsg.style.padding = "15px";
  divMsg.style.marginTop = "15px";
  divMsg.style.borderRadius = "10px";
  divMsg.style.textAlign = "center";
  divMsg.style.fontWeight = "bold";
  divMsg.textContent = "✅ Cadastro finalizado! Entraremos em contato via WhatsApp em breve.";

  form.parentNode.insertBefore(divMsg, form.nextSibling);

  // Scroll suave até a mensagem
  divMsg.scrollIntoView({ behavior: "smooth" });
});

// ======= Máscaras automáticas =======
document.getElementById("cpf").addEventListener("input", function (e) {
  let v = e.target.value.replace(/\D/g, "");
  e.target.value = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4").substr(0, 14);
});

document.getElementById("telefone").addEventListener("input", function (e) {
  let v = e.target.value.replace(/\D/g, "");
  if (v.length <= 10) {
    e.target.value = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3").substr(0, 14);
  } else {
    e.target.value = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3").substr(0, 15);
  }
});

document.getElementById("cep").addEventListener("input", function (e) {
  let v = e.target.value.replace(/\D/g, "");
  e.target.value = v.replace(/(\d{5})(\d{0,3})/, "$1-$2").substr(0, 9);
});