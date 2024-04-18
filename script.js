'use strict';

//Generate the secretNumber;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(scores) {
  document.querySelector('.score').textContent = scores;
}

function displaySecretNumber(secretNumbers) {
  document.querySelector('.number').textContent = secretNumbers;
}

function displayHighScore(highScores) {
  document.querySelector('.highscore').textContent = highScores;
}

function changeSecretNumberBgStyle(colorHex) {
  document.querySelector('body').style.backgroundColor = colorHex;
}

function changeSecretNumberWidth(widthStyle) {
  document.querySelector('.number').style.width = widthStyle;
}

//Check buttons function;
document.querySelector('.check').addEventListener('click', function () {
  //Retrive the guessed number;
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('🚫 No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displaySecretNumber(secretNumber);
    score++;
    displayScore(score);
    changeSecretNumberBgStyle('#60b347');
    changeSecretNumberWidth('30rem');

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }

    //When guess is to high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '⬆️ Guess is to High!' : '⬇️ Guess is to Low!'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('😭 You Lost the Game');
      displayScore(0);
    }
  }
});

//Reset button functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayHighScore('');
  displayMessage('Start guessing...');
  displayScore(score);
  displaySecretNumber('?');

  changeSecretNumberBgStyle('#222');
  changeSecretNumberWidth('15rem');
});
