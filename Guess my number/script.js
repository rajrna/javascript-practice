'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number !';

// document.querySelector('.number').textContent = 69;
// document.querySelector('.score').textContent = 12;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 5;

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Empty value is not tolerated🤨';
  }else if (guess ===)

});
