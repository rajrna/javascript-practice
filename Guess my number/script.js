'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number !';

// document.querySelector('.number').textContent = 69;
// document.querySelector('.score').textContent = 12;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 5;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  console.log(typeof guess);

  // when no input
  if (!guess) {
    // document.querySelector('.message').textContent =
    //   'Empty value is not tolerated🤨';
    displayMessage('Empty value is not tolerated🤨');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Correctamando 🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is different
  } else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'too high ' : 'too low';
      displayMessage(guess > secretNumber ? 'too high ' : 'too low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'Wallahi you are finished 💀';
      displayMessage('Wallahi you are finished 💀');
    }
  }

  // //when number is greater than secret number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too high ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Wallahi you are finished 💀';
  //   }

  //   //when number is lower than secret number
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Wallahi you are finished 💀';
  //   }
  // }
});

//challenge 1 : Implement the play again function

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.');

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //set the message back
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});
