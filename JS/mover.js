//MOVER ====== ININCIO
const personagem = document.getElementById('personagem');
let posicaoHorizontal = 100;
let posicaoVertical = 100;

function updatePersonagemPosition() {
  personagem.style.left = posicaoHorizontal + 'px';
  personagem.style.top = posicaoVertical + 'px';
}

document.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowUp':
      posicaoVertical -= 50;
      break;
    case 'ArrowDown':
      posicaoVertical += 50;
      break;
    case 'ArrowLeft':
      posicaoHorizontal -= 50;
      break;
    case 'ArrowRight':
      posicaoHorizontal += 50;
      break;
  }
  updatePersonagemPosition();
});

//MOVER ====== FIM
