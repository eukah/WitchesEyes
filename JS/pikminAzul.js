//INIMIGO ====== INICIO
const pikminAzul = document.getElementById('pikminAzul');
let inimigoPositionVertical = 500; // Inimigo começa na extremidade direita
let inimigoPositionHorizontal = 500;

function moverInimigo() {
  pikminAzul.style.top = inimigoPositionVertical + 'px';
  pikminAzul.style.left = inimigoPositionHorizontal + 'px'; //Top se refere a vertical
  inimigoPositionVertical += 2; // Movimento para a esquerda
  
  if (inimigoPositionVertical > window.innerHeight) { //Define que quando o inimigo sair da tela, algo acontece
    inimigoPositionVertical = 0; // Reposicionar o inimigo quando ele sair da tela
    pikminAzul.style.left = `${Math.random() * (window.innerHeight - 50)}px`; // Posição vertical aleatória
  }
}

setInterval(moverInimigo, 10);