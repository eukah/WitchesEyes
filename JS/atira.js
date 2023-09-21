//ATIRAR ====== INICIO
document.addEventListener('mousedown', function(evento){

    switch(evento.which){
    
        case 1:
            console.log("botão esquerdo");
            atirar();
            break;
    
        case 3:
            console.log("botão direito");
            break;
    
        default:
            console.log("mouse estranho");  
    
      }
    }, false);
function atirar() {
    const tiro = document.createElement('div');
    tiro.classList.add('tiro');
    tiro.id = 'tiro'; 
    document.body.appendChild(tiro);
  
    const personagemRect = personagem.getBoundingClientRect();
    tiro.style.left = (personagemRect.left + personagemRect.width / 2) + 'px';
    tiro.style.top = (personagemRect.top + personagemRect.height / 2) + 'px';
  
    const tiroInterval = setInterval(() => {
      const tiroRect = tiro.getBoundingClientRect();
      if (tiroRect.right < window.innerWidth) {
        tiro.style.left = (parseInt(tiro.style.left) || 0) + 5 + 'px';
      } else {
        clearInterval(tiroInterval);
        document.body.removeChild(tiro);
      }
    }, 10);
  }
//ATIRAR ====== FIM