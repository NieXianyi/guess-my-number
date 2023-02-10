'use strict';

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Set the random number
const secretNumber = Math.trunc(Math.random() * 20) + 1; //number in [1,20]

//Add click event to Again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1; //Regenerate the number
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = String(score);
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});

//Add click event to check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (score < 1) {
    displayMessage('You Loss the Game !💥');
    return;
  }

  if (!guess) {
    displayMessage('There is no number !⛔️');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! ✅');
    document.querySelector('.number').textContent = secretNumber;

    //Update High Score
    const curHighScore = Number(document.querySelector('.score').textContent);
    if (curHighScore > highScore) {
      document.querySelector('.highscore').textContent = curHighScore;
      highScore = curHighScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High! ❌' : 'Too Low! ❌');
    score--;
    document.querySelector('.score').textContent = String(score);
  }
});
