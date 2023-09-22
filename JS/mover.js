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
      posicaoVertical -= 10;
      break;
    case 'ArrowDown':
      posicaoVertical += 10;
      break;
    case 'ArrowLeft':
      posicaoHorizontal -= 10;
      break;
    case 'ArrowRight':
      posicaoHorizontal += 10;
      break;
  }
  updatePersonagemPosition();
});

//MOVER ====== FIM
