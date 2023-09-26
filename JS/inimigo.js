//INIMIGO ====== INICIO
const inimigo = document.getElementById('inimigo');
const inimigo1 = document.getElementById('inimigo1');
let inimigoPositionX = 0; // Inimigo começa na extremidade direita

function moverInimigo() {
  inimigo.style.left = inimigoPositionX + 'px';
  inimigo1.style.top = inimigoPositionX + 'px';
  inimigoPositionX += 2; // Movimento para a esquerda
  
  if (inimigoPositionX > window.innerHeight) {
    inimigoPositionX = 0; // Reposicionar o inimigo quando ele sair da tela
    inimigo.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // Posição horizontal aleatória
    inimigo1.style.right = `${Math.random() * (window.innerHeight - 50)}px`; // Posição vertical aleatória
  }
}

setInterval(moverInimigo, 10);
//INIMIGO ====== FIM