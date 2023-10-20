//INIMIGO ====== INICIO
const pikminAzul = document.getElementById('pikminAzul');
let inimigoPositionVertical = 0; // Inimigo começa na extremidade direita

function moverInimigo() {
  pikminAzul.style.top = inimigoPositionVertical + 'px';
  inimigoPositionVertical += 2; // Mexe na velocidade
  
  if (inimigoPositionVertical > window.innerHeight) { //Define que quando o inimigo sair da tela, algo acontece
    inimigoPositionVertical = 0; // Reposicionar o inimigo quando ele sair da tela para o spawn definido anteriormente
    pikminAzul.style.right = `${Math.random() * (window.innerHeight - 50)}px`; // Posição vertical aleatória
  }
}

setInterval(moverInimigo, 10);