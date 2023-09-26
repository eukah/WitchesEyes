//COLISÃO ===== INICIO
function checkCollision() {
    const personagemRect = personagem.getBoundingClientRect();
    const inimigoRect = inimigo.getBoundingClientRect();
    const inimigo1Rect = inimigo.getBoundingClientRect();
  
    if (
      personagemRect.left < inimigoRect.right &&
      personagemRect.right > inimigoRect.left &&
      personagemRect.top < inimigoRect.bottom &&
      personagemRect.bottom > inimigoRect.top
    ) {
      personagem.remove();
    }
  }
//COLISAO ===== FIM
//COLISAO NO INIMIGO ===== INICIO
  function checkTiroInimigo(){
    const tiro = document.getElementById('tiro'); // Mova esta linha para dentro da função
    if (!tiro) return; // Se o tiro não existir, retorne e não faça nada

    const tiroRect = tiro.getBoundingClientRect();
    const inimigoRect = inimigo.getBoundingClientRect();

    if (
        tiroRect.left < inimigoRect.right &&
        tiroRect.right > inimigoRect.left &&
        tiroRect.top < inimigoRect.bottom &&
        tiroRect.bottom > inimigoRect.top
    ) {
        inimigo.remove();
    }
}
//COLISAO NO INIMIGO ===== FIM
function checarColisoes(){
	checkCollision();//Colisao entre inimigo e personagem
	checkTiroInimigo();
}

setInterval(checarColisoes,50);