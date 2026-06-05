// Imagens do slideshow
const imagens = [
    "assets/images/hero-background-1.png",
    "assets/images/hero-background-2.png",
    "assets/images/hero-background-3.png",
];

let indiceAtual = 0;

// Elementos do DOM
const hero = document.getElementById("problema-hero");

// Função que troca a imagem de fundo
function trocarImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    hero.style.backgroundImage = `url("${imagens[indiceAtual]}")`;
}

// Inicializa
setInterval(trocarImagem, 4000);
