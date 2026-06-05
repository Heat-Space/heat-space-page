import { perguntas } from "../utils/quiz-questions.js";

let indicePerguntaAtual = 0;
let respostas = [];

// Elementos do DOM
const telaQuiz = document.getElementById("tela-quiz");
const telaResultado = document.getElementById("tela-resultado");

const enunciadoEl = document.getElementById("enunciado");
const opcoesEl = document.getElementById("opcoes");

const btnProxima = document.getElementById("btn-proxima");
const progressoLabel = document.getElementById("progresso-label");
const progressoPercent = document.getElementById("progresso-percent");
const progressoFill = document.getElementById("progresso-fill");

// Função que renderiza a pergunta atual
function renderizarPergunta() {
    const pergunta = perguntas[indicePerguntaAtual];
    const numero = indicePerguntaAtual + 1;
    const percentual = Math.round((numero / perguntas.length) * 100);

    progressoLabel.textContent = `Pergunta ${numero} de ${perguntas.length}`;
    progressoPercent.textContent = `${percentual}%`;
    progressoFill.style.width = `${percentual}%`;

    enunciadoEl.textContent = pergunta.enunciado;
    opcoesEl.innerHTML = "";
    btnProxima.disabled = true;
    btnProxima.textContent = indicePerguntaAtual === perguntas.length - 1 ? "Finalizar Quiz" : "Próxima Pergunta";

    const letras = ["A", "B", "C", "D"];

    pergunta.opcoes.forEach(function (texto, i) {
        const li = document.createElement("li");
        li.className = "opcao";

        li.innerHTML = `
      <span class="opcao-letra">${letras[i]}</span>
      <span class="opcao-texto">${texto}</span>
    `;

        li.addEventListener("click", function () {
            selecionarOpcao(i, li);
        });

        opcoesEl.appendChild(li);
    });
}

// Função que registra a opção selecionada
function selecionarOpcao(indice, elementoLi) {
    const anterior = opcoesEl.querySelector(".opcao-selecionada");
    if (anterior) anterior.classList.remove("opcao-selecionada");

    elementoLi.classList.add("opcao-selecionada");
    respostas[indicePerguntaAtual] = indice;
    btnProxima.disabled = false;
}

// Função que avança para a próxima pergunta ou exibe o resultado
function avancar() {
    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntas.length) {
        renderizarPergunta();
    } else {
        exibirResultado();
    }
}

// Função que calcula e exibe o resultado final
function exibirResultado() {
    const acertos = respostas.filter(function (resposta, i) {
        return resposta === perguntas[i].correta;
    }).length;

    const erros = perguntas.length - acertos;
    const aproveitamento = Math.round((acertos / perguntas.length) * 100);

    telaQuiz.hidden = true;
    telaResultado.hidden = false;

    document.getElementById("resultado-acertos-1").textContent = acertos;
    document.getElementById("resultado-acertos-2").textContent = acertos;
    document.getElementById("resultado-erros").textContent = erros;
    document.getElementById("resultado-aproveitamento").textContent = `${aproveitamento}%`;

    const msgEl = document.getElementById("resultado-msg");
    if (aproveitamento >= 80) {
        msgEl.textContent = "Excelente! Você tem um ótimo conhecimento sobre o Heat Space e a cadeia de frio de vacinas.";
    } else if (aproveitamento >= 50) {
        msgEl.textContent = "Bom resultado! Continue explorando o tema para aprender mais sobre o Heat Space.";
    } else {
        msgEl.textContent = "Continue estudando! Volte à página principal para entender melhor o projeto Heat Space.";
    }
}

// Função que reinicia o quiz
function reiniciar() {
    indicePerguntaAtual = 0;
    respostas = [];
    telaResultado.hidden = true;
    telaQuiz.hidden = false;
    renderizarPergunta();
}

// Eventos
btnProxima.addEventListener("click", avancar);
document.getElementById("btn-reiniciar").addEventListener("click", reiniciar);

// Inicializa
renderizarPergunta();
