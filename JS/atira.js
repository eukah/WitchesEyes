document.addEventListener('mousedown', function(evento) {

  switch(evento.which) {

      case 1:
          console.log("botão esquerdo");
          atirar(evento.clientX, evento.clientY);
          break;

      case 3:
          console.log("botão direito");
          break;

      default:
          console.log("mouse estranho");

  }
}, false);

function atirar(mouseX, mouseY) {
  const tiro = document.createElement('div');
  tiro.classList.add('tiro');
  tiro.id = 'tiro';
  document.body.appendChild(tiro); //Cria o tiro no HTML

  const personagemRect = personagem.getBoundingClientRect();
  const personagemX = personagemRect.left + personagemRect.width / 2; //Define a posiçãoh horizontal do tiro em relação ao personagem 
  const personagemY = personagemRect.top + personagemRect.height / 2; //Define a posição vertical do tiro em relação ao personagem

  const direcaoX = mouseX - personagemX;
  const direcaoY = mouseY - personagemY; //Aqui pe definido onde vai estar localizado a posição do cursor em relação ao personagem
  const comprimento = Math.sqrt(direcaoX * direcaoX + direcaoY * direcaoY); //Aqui vai ser feito a formula, ja usada para o pikmin, para calcular a distancia do tiro ao cursor

  tiro.style.left = personagemX + 'px';
  tiro.style.top = personagemY + 'px'; //Executa o que foi feito acima em 'px'

  const velocidade = 10; // Ajuste a velocidade do tiro conforme necessário
  const tiroInterval = setInterval(() => {
      const tiroRect = tiro.getBoundingClientRect();
      if (tiroRect.right < window.innerWidth) {                                                              // Enquanto o tiro estiver dentro da tela, 
          tiro.style.left = (parseInt(tiro.style.left) || 0) + (direcaoX / comprimento) * velocidade + 'px'; // Calcula sua velocidade e posição que seguirá.
          tiro.style.top = (parseInt(tiro.style.top) || 0) + (direcaoY / comprimento) * velocidade + 'px';
      } else {
          clearInterval(tiroInterval);  // Quando o tiro sair da tela, remove ele.
          document.body.removeChild(tiro);
      }
  }, 10);
}

