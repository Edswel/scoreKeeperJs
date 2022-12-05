const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#play-to');

let p1Score = 0;
let p2Score = 0;
let winningScore = 7;
let isGameOver = false;

p1Button.addEventListener('click', () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', () => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

// Change event for winning score
winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value);
});

// Reset functionality
resetButton.addEventListener('click', () => {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
});