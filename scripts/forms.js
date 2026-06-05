// Elementos do DOM
const form = document.getElementById("cta-form");
const inputEmail = document.getElementById("cta-input");

// Função que envia o formulário
function enviar(evento) {
    evento.preventDefault();

    const email = inputEmail.value.trim();

    if (!email) {
        return;
    }

    alert(`E-mail ${email} cadastrado com sucesso! Aguarde nossas atualizações.`);
    inputEmail.value = "";
}

// Eventos
form.addEventListener("submit", enviar);
