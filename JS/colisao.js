//COLISÃO ===== INICIO
function checkCollision() {
    const personagemRect = personagem.getBoundingClientRect();
    const pikminVermelhoRect = pikminVermelho.getBoundingClientRect();
    const pikminAzulRect = pikminAzul.getBoundingClientRect();
  
    if (
      personagemRect.left < pikminVermelhoRect.right &&
      personagemRect.right > pikminVermelhoRect.left &&
      personagemRect.top < pikminVermelhoRect.bottom &&
      personagemRect.bottom > pikminVermelhoRect.top
    ) {
      personagem.remove();
    }

    if (
      personagemRect.left < pikminAzulRect.right &&
      personagemRect.right > pikminAzulRect.left &&
      personagemRect.top < pikminAzulRect.bottom &&
      personagemRect.bottom > pikminAzulRect.top
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
    const pikminVermelhoRect = pikminVermelho.getBoundingClientRect();
    const pikminAzulRect = pikminAzul.getBoundingClientRect();

    if (
        tiroRect.left < pikminVermelhoRect.right &&
        tiroRect.right > pikminVermelhoRect.left &&
        tiroRect.top < pikminVermelhoRect.bottom &&
        tiroRect.bottom > pikminVermelhoRect.top
    ) {
      pikminVermelho.remove();
    }

    if (
      tiroRect.left < pikminAzulRect.right &&
      tiroRect.right > pikminAzulRect.left &&
      tiroRect.top < pikminAzulRect.bottom &&
      tiroRect.bottom > pikminAzulRect.top
  ) {
    pikminAzul.remove();
  }
}
//COLISAO NO INIMIGO ===== FIM
function checarColisoes(){
	checkCollision();//Colisao entre inimigo e personagem
	checkTiroInimigo();
}

setInterval(checarColisoes,1);