"use strict";

let computerSelection;

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
            console.warn("Something went horribly wrong!!!")
    }
}

let playerSelection

function getPlayerChoice() {
    playerSelection = prompt('Please Choose: Rock, Paper, or Scissors');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
    } else {
        getPlayerChoice();
    }
}


let result;

function checkResult() {

    switch (true) {

        case (playerSelection === 'rock'):
            if (computerSelection === 'rock') {
                result = 'tie';
            } else if (computerSelection === 'paper') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;

        case (playerSelection === 'paper'):
            if (computerSelection === 'paper') {
                result = 'tie';
            } else if (computerSelection === 'scissors') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;

        case (playerSelection === 'scissors'):
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


//game structure calling functions and updating score
function startGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        getComputerChoice();
        getPlayerChoice();
        checkResult();

        if (result === 'win') {
            ++playerScore;
        } else if (result === 'lose') {
            ++computerScore;
        }
        console.log(`You chose ${playerSelection}`);
        console.log(`The computer chose ${computerSelection}`);
        console.log(`You ${result}!`);
        console.log(`Current Score: 
        You: ${playerScore} Computer: ${computerScore} 
        `);
    }
    console.log('GAME OVER!');
}

console.log('Type "startGame()" to begin');
