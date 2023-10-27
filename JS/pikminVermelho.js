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

function moverInimigoEmDirecaoAoPersonagem() {
  const personagemRect = personagem.getBoundingClientRect(); //Instancia o Rect do personagem
  const pikminVermelhoRect = pikminVermelho.getBoundingClientRect(); //E aqui do Pikmin

  const direcaoX = personagemRect.left - pikminVermelhoRect.left; 
  const direcaoY = personagemRect.top - pikminVermelhoRect.top;
  const comprimento = Math.sqrt(direcaoX * direcaoX + direcaoY * direcaoY); //Formula que faz com que o inimigo se aproxime cada vez mais da posição do personagem

  const velocidade = 2; //Velocidade na qual essa formula é executada  
  
  pikminVermelho.style.top = (pikminVermelhoRect.top + (direcaoY / comprimento) * velocidade) + 'px';
  pikminVermelho.style.left = (pikminVermelhoRect.left + (direcaoX / comprimento) * velocidade) + 'px'; //Aqui é ela funcionando na pratica, onde ele calcula a posição do personagem, aplica
}                                                                                               // e soma a velocidade.

setInterval(moverInimigoHorizontal, 10);
setInterval(moverInimigoEmDirecaoAoPersonagem, 1); // Chame a função para mover o inimigo em direção ao personagem




























