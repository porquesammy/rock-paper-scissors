'use strict';

let computerSelection;
let playerSelection;
let result;
let playerScore = 0;
let computerScore = 0;
let totalGamesWon = 0;
let totalGamesLost = 0;

const playerScoreOne = document.querySelector('.playerScoreOne-btn');
const playerScoreTwo = document.querySelector('.playerScoreTwo-btn');
const playerScoreThree = document.querySelector('.playerScoreThree-btn');

const cpuScoreOne = document.querySelector('.cpuScoreOne-btn');
const cpuScoreTwo = document.querySelector('.cpuScoreTwo-btn');
const cpuScoreThree = document.querySelector('.cpuScoreThree-btn');

const playerText = document.querySelector('.player-choice');
const computerText = document.querySelector('.robot-choice');
const choose = document.querySelector('.choose');

const readyText = document.querySelector('.ready');

document.getElementById('rock').onclick = function () {
  playerSelection = 'rock';
  game();
};

document.getElementById('paper').onclick = function () {
  playerSelection = 'paper';
  game();
};

document.getElementById('scissors').onclick = function () {
  playerSelection = 'scissors';
  game();
};


// playerText.classList.add('playerText');
// computerText.classList.add('computerText');
// const feedback = document.querySelector('.feedback');
// playerText.innerText = `You chose ${playerSelection}`;
// feedback.appendChild(playerText);

function reset() {
  playerScore = 0;
  computerScore = 0;
  clearAllLights();
  choose.removeAttribute('id');
  choose.innerText = 'Choose one!';
  playerText.style.display = 'none';
  computerText.style.display = 'none';
  choose.removeAttribute('class', 'new-game');
  readyText.style.display = 'block';
}

function clearAllLights() {
  const lights = document.querySelectorAll('.score');
  const lightsArr = Array.from(lights);

  lightsArr.forEach((e) => {
    if (e.classList.contains('win')) {
      e.classList.remove('win');
    } else {
      return;
    }
  });
}

function getComputerChoice() {
  computerSelection = Math.floor(Math.random() * 3) + 1;
  switch (computerSelection) {
    case 1:
      computerSelection = 'rock';
      break;
    case 2:
      computerSelection = 'paper';
      break;
    case 3:
      computerSelection = 'scissors';
      break;
    default:
      console.warn('Something went horribly wrong!!!');
  }
}

function checkResult() {
  switch (playerSelection) {
    case 'rock':
      if (computerSelection === 'rock') {
        result = 'tie';
      } else if (computerSelection === 'paper') {
        result = 'lose';
      } else {
        result = 'win';
      }
      break;

    case 'paper':
      if (computerSelection === 'paper') {
        result = 'tie';
      } else if (computerSelection === 'scissors') {
        result = 'lose';
      } else {
        result = 'win';
      }
      break;

    case 'scissors':
      if (computerSelection === 'scissors') {
        result = 'tie';
      } else if (computerSelection === 'rock') {
        result = 'lose';
      } else {
        result = 'win';
      }
      break;
    default:
      console.warn('something went wrong');
  }
}

function game() {
    readyText.style.display = 'none';
  if (playerScore < 3 && computerScore < 3) {
    getComputerChoice();
    checkResult();

    if (result === 'win') {
      ++playerScore;
      console.log(playerScore);
    } else if (result === 'lose') {
      ++computerScore;
      console.log(computerScore);
    } else {
      result = 'tie';
    }
  }

  //scoreboard lights
  switch (playerScore) {
    case 0:
      break;
    case 1:
      playerScoreOne.classList.add('win');
      break;
    case 2:
      playerScoreTwo.classList.add('win');
      break;
    case 3:
      playerScoreThree.classList.add('win');
      ++totalGamesWon;
      console.log('you win');
      playerScore = undefined;
      computerScore = undefined;
      choose.innerText = 'New Game?';
      choose.setAttribute('id', 'reset');
      choose.setAttribute('class', 'new-game');
      break;
  }

  switch (computerScore) {
    case 0:
      break;
    case 1:
      cpuScoreOne.classList.add('win');
      break;
    case 2:
      cpuScoreTwo.classList.add('win');
      break;
    case 3:
      cpuScoreThree.classList.add('win');
      ++totalGamesLost;
      console.log('you lose');
      playerScore = undefined;
      computerScore = undefined;
      choose.innerText = 'New Game?';
      choose.setAttribute('id', 'reset');
      choose.setAttribute('class', 'new-game');
      break;
  }
  if (choose.hasAttribute('id', 'reset')) {
    document.getElementById('reset').onclick = function () {
      reset();
    };
  }
}
