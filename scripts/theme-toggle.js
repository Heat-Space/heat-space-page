// Temas disponíveis
import { temas } from "../utils/themes.js";

let temaAtual = "claro"; // Tema padrão ao carregar a página

// Elementos do DOM
const toggle = document.getElementById("navbar-toggle");
const opcaoAtual = document.getElementById("opcao-atutal");
const opcaoClaro = document.getElementById("opcao-claro");
const opcaoContraste = document.getElementById("opcao-contraste");
const opcaoEscuro = document.getElementById("opcao-escuro");

// Função que aplica o tema nas variáveis CSS
function aplicarTema(nome) {
    const variaveis = temas[nome];
    const raiz = document.documentElement;

    Object.keys(variaveis).forEach(function (variavel) {
        raiz.style.setProperty(variavel, variaveis[variavel]);
    });

    temaAtual = nome;
    opcaoAtual.childNodes[1].textContent = nome.charAt(0).toUpperCase() + nome.slice(1);
}

// Função que abre ou fecha o dropdown
function alternarDropdown() {
    toggle.classList.toggle("navbar-toggle-aberto");
}

// Função que seleciona um tema e fecha o dropdown
function selecionarTema(nome) {
    aplicarTema(nome);
    toggle.classList.remove("navbar-toggle-aberto");
}

// Função que fecha o dropdown ao clicar fora
function fecharFora(evento) {
    if (!toggle.contains(evento.target)) {
        toggle.classList.remove("navbar-toggle-aberto");
    }
}

// Eventos
toggle.addEventListener("click", alternarDropdown);
opcaoClaro.addEventListener("click", function (e) { e.stopPropagation(); selecionarTema("claro"); });
opcaoContraste.addEventListener("click", function (e) { e.stopPropagation(); selecionarTema("contraste"); });
opcaoEscuro.addEventListener("click", function (e) { e.stopPropagation(); selecionarTema("escuro"); });
document.addEventListener("click", fecharFora);
