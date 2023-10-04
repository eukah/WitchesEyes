// pikminVermelho.js
const pikminVermelho = document.getElementById('pikminVermelho');
let posicaoInimigoHorizontal = 500;

function moverInimigoHorizontal() {
  pikminVermelho.style.left = posicaoInimigoHorizontal + 'px';
  posicaoInimigoHorizontal += 2;

  if (posicaoInimigoHorizontal > window.innerWidth) {
    posicaoInimigoHorizontal = 0;
    pikminVermelho.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // Posição vertical aleatória
  }
}

setInterval(moverInimigoHorizontal, 10);
