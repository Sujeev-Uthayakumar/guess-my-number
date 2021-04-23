'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.guess').value = 23;
*/
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Detected!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      score = score - 1;
      document.querySelector('.score').textContent = 0;
    }
  }

  if (guess === number && score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
    console.log(highscore);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
