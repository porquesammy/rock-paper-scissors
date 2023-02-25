"use strict";

// computer choice rock = 1, paper = 2, scissors = 3

let computerChoice = Math.floor(Math.random() * 3) + 1;
// console.log(computerChoice);

//convert computers choice into rock, paper, scissors 
switch (computerChoice) {
    case 1:
        computerChoice = 'rock';
        break;
    case 2:
        computerChoice = 'paper';
        break;
    case 3:
        computerChoice = 'scissors';
        break;
    default:
        console.warn("Something went horribly wrong!!!")
}
// console.log(computerChoice);


//player choice prompted, converted to lowercase, and checked

let playerChoice

function checkChoice() {
    playerChoice = prompt('Please Choose: Rock, Paper, or Scissors');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        checkChoice();
    }
}
checkChoice();

// compare player choice vs computers choice and declare the results
console.log('You chose' + ' ', playerChoice);
console.log('Computer chose' + ' ', computerChoice);

switch (true) {

    case (playerChoice === 'rock'):
        if (computerChoice === 'rock') {
            console.log('You tie!');
        } else if (computerChoice === 'paper') {
            console.log('You lose!');
        } else {
            console.log('You Win!');
        }
        break;

    case (playerChoice === 'paper'):
        if (computerChoice === 'paper') {
            console.log('You tie!');
        } else if (computerChoice === 'scissors') {
            console.log('You lose!');
        } else {
            console.log('You Win!');
        }
        break;

    case (playerChoice === 'scissors'):
        if (computerChoice === 'scissors') {
            console.log('You tie!');
        } else if (computerChoice === 'rock') {
            console.log('You lose!');
        } else {
            console.log('You Win!');
        }
        break;
    default:
        console.warn('something went wrong with my switch statement')
}


