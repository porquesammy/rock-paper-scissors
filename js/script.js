"use strict";

let computerSelection;
let result;

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
            console.warn("Something went horribly wrong!!!");
    }
}

let playerSelection

function getPlayerChoice() {
    playerSelection = prompt('Please Choose: Rock, Paper, or Scissors');
    playerSelection = playerSelection.toLowerCase().trim();
    if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
        return playerSelection;
    } else {
        getPlayerChoice();
    }
}

function checkResult() {
    switch (playerSelection) {

        case ('rock'):
            if (computerSelection === 'rock') {
                result = 'tie';
            } else if (computerSelection === 'paper') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;

        case ('paper'):
            if (computerSelection === 'paper') {
                result = 'tie';
            } else if (computerSelection === 'scissors') {
                result = 'lose';
            } else {
                result = 'win';
            }
            break;

        case ('scissors'):
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

//css console styling 
function consoleStyling(msg) {
    let color;
    if (result === 'tie') {
        color = 'yellow';
    } else if (result === 'lose' || result === 'lost') {
        color = 'red';
    } else { color = 'green' };

    return console.log('%c' + msg, 'color:' + color + '; font-weight: 900; padding: .5rem; border: 3px solid ' + color + ';');
}

//game structure calling functions and updating score
function startGame() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
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
        consoleStyling(`You ${result}!`);
        console.log(`Current Score: 
        You: ${playerScore} Computer: ${computerScore} 
        `);
    }
    if (result === 'lose') {
        result = 'lost'
    } else {
        result = 'WON';
    }
    consoleStyling(`GAME OVER! You ${result}!`);
}

console.log('Type "startGame()" to begin');
