// script-adocao.js

// ====== Aplicar tema conforme o localStorage ======
document.addEventListener("DOMContentLoaded", function () {
    const tema = localStorage.getItem("tema");
    if (tema === "escuro") {
        document.body.classList.add("modo-escuro");
    }

    // ====== Mensagem estilizada ao clicar em "Adotar" ======
    const botoes = document.querySelectorAll("button[type='submit']");
    botoes.forEach(botao => {
        botao.addEventListener("click", function (event) {
            event.preventDefault();

            // Cria a mensagem
            const msg = document.createElement("div");
            msg.classList.add("msg-confirmacao");
            msg.innerHTML = `
                🐾 <strong>Obrigado por se interessar pela adoção!</strong><br>
                Nossa equipe entrará em contato com você pelo WhatsApp em breve. 💬
            `;

            // Remove qualquer mensagem antiga
            const antiga = document.querySelector(".msg-confirmacao");
            if (antiga) antiga.remove();

            // Adiciona a nova mensagem
            document.body.appendChild(msg);

            // Faz a mensagem desaparecer depois de alguns segundos
            setTimeout(() => {
                msg.style.opacity = "0";
                setTimeout(() => msg.remove(), 600);
            }, 5000);
        });
    });
});