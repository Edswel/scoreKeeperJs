const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: p1Display = document.querySelector('#p1Display')
}

const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: p1Display = document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#play-to');

let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add('winner');
      opponent.display.classList.add('loser');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', () => {
  updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
  updateScores(p2, p1);
});

// Change event for winning score
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
  reset();
});

// Reset functionality
resetButton.addEventListener('click', reset);
function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('winner', 'loser');
    p.button.disabled = false;
  }
}