//INIMIGO ====== INICIO
const pikminAzul = document.getElementById('pikminAzul');
let inimigoPositionVertical = 0; // Inimigo começa na extremidade direita

function moverInimigo() {
  pikminAzul.style.top = inimigoPositionVertical + 'px';
  inimigoPositionVertical += 2; // Mexe na velocidade

  if (inimigoPositionVertical > window.innerHeight) {
    inimigoPositionVertical = 0;
    pikminAzul.style.right = `${Math.random() * (window.innerHeight - 50)}px`; //Caso ele passe da borda inferior ele, reaparece em uma posição vertical aleatoria
  }
}

function moverInimigoEmDirecaoAoPersonagem() {
  const personagemRect = personagem.getBoundingClientRect(); //Instancia o Rect do personagem
  const pikminAzulRect = pikminAzul.getBoundingClientRect(); //E aqui do Pikmin

  const direcaoX = personagemRect.left - pikminAzulRect.left; 
  const direcaoY = personagemRect.top - pikminAzulRect.top;
  const comprimento = Math.sqrt(direcaoX * direcaoX + direcaoY * direcaoY); //Formula que faz com que o inimigo se aproxime cada vez mais da posição do personagem

  const velocidade = 2; //Velocidade na qual essa formula é executada  
  
  pikminAzul.style.top = (pikminAzulRect.top + (direcaoY / comprimento) * velocidade) + 'px';
  pikminAzul.style.left = (pikminAzulRect.left + (direcaoX / comprimento) * velocidade) + 'px'; //Aqui é ela funcionando na pratica, onde ele calcula a posição do personagem, aplica
}                                                                                               // e soma a velocidade.

setInterval(moverInimigo, 10);
setInterval(moverInimigoEmDirecaoAoPersonagem, 1); // Chame a função para mover o inimigo em direção ao personagem
