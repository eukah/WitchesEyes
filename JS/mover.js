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
      posicaoVertical -= 5;
      break;
    case 'ArrowDown':
      posicaoVertical += 5;
      break;
    case 'ArrowLeft':
      posicaoHorizontal -= 5;
      break;
    case 'ArrowRight':
      posicaoHorizontal += 5;
      break;
  }
  updatePersonagemPosition();
});

//MOVER ====== FIM
