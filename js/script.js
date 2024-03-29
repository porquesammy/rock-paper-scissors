"use strict";
// put whole game into a function to stop console changes to game state
function wholeGame() {
  let computerSelection;
  let playerSelection;
  let result;
  let playerScore = 0;
  let computerScore = 0;
  let totalGamesWon = 0;
  let totalGamesLost = 0;

  const playerScoreOne = document.querySelector(".playerScoreOne-btn");
  const playerScoreTwo = document.querySelector(".playerScoreTwo-btn");
  const playerScoreThree = document.querySelector(".playerScoreThree-btn");

  const cpuScoreOne = document.querySelector(".cpuScoreOne-btn");
  const cpuScoreTwo = document.querySelector(".cpuScoreTwo-btn");
  const cpuScoreThree = document.querySelector(".cpuScoreThree-btn");

  const playerText = document.querySelector(".player-choice");
  const computerText = document.querySelector(".robot-choice");
  const choose = document.querySelector(".choose");

  const readyText = document.querySelector(".ready");

  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");
  const scissors = document.getElementById("scissors");

  rock.onclick = function () {
    playerSelection = "rock";
    game();
  };

  paper.onclick = function () {
    playerSelection = "paper";
    game();
  };

  scissors.onclick = function () {
    playerSelection = "scissors";
    game();
  };

  function game() {
    readyText.style.display = "none";
    playerText.style.display = "block";
    computerText.style.display = "block";
    const playerTextSpan = document.querySelector(".player-choice>span");
    const computerTextSpan = document.querySelector(".robot-choice>span");

    if (playerScore < 3 && computerScore < 3) {
      getComputerChoice();
      checkResult();
      playerTextSpan.innerText = `${playerSelection}`;
      computerTextSpan.innerText = `${computerSelection}`;

      if (result === "win") {
        ++playerScore;
      } else if (result === "lose") {
        ++computerScore;
      } else {
        result = "tie";
      }
    }

    function getComputerChoice() {
      computerSelection = Math.floor(Math.random() * 3) + 1;
      switch (computerSelection) {
        case 1:
          computerSelection = "rock";
          break;
        case 2:
          computerSelection = "paper";
          break;
        case 3:
          computerSelection = "scissors";
          break;
        default:
          console.warn("Something went horribly wrong!!!");
      }
    }

    function checkResult() {
      switch (playerSelection) {
        case "rock":
          if (computerSelection === "rock") {
            result = "tie";
          } else if (computerSelection === "paper") {
            result = "lose";
          } else {
            result = "win";
          }
          break;

        case "paper":
          if (computerSelection === "paper") {
            result = "tie";
          } else if (computerSelection === "scissors") {
            result = "lose";
          } else {
            result = "win";
          }
          break;

        case "scissors":
          if (computerSelection === "scissors") {
            result = "tie";
          } else if (computerSelection === "rock") {
            result = "lose";
          } else {
            result = "win";
          }
          break;
        default:
          console.warn("something went wrong");
      }
    }

    function reset() {
      playerScore = 0;
      computerScore = 0;
      clearAllLights();
      if (document.getElementById("reset")) {
        document
          .getElementById("reset")
          .removeEventListener("click", reset, false);
      }
      choose.removeAttribute("id");
      choose.innerText = "Choose one!";
      playerText.style.display = "none";
      computerText.style.display = "none";
      choose.removeAttribute("class", "new-game");
      readyText.style.display = "block";
    }

    function clearAllLights() {
      const lights = document.querySelectorAll(".score");
      const lightsArr = Array.from(lights);

      lightsArr.forEach((e) => {
        if (e.classList.contains("win")) {
          e.classList.remove("win");
        } else {
          return;
        }
      });
    }

    //scoreboard lights
    switch (playerScore) {
      case 0:
        break;
      case 1:
        playerScoreOne.classList.add("win");
        break;
      case 2:
        playerScoreTwo.classList.add("win");
        break;
      case 3:
        playerScoreThree.classList.add("win");
        ++totalGamesWon;
        playerScore = undefined;
        computerScore = undefined;
        choose.innerText = "New Game?";
        choose.setAttribute("id", "reset");
        choose.setAttribute("class", "new-game");
        break;
    }

    switch (computerScore) {
      case 0:
        break;
      case 1:
        cpuScoreOne.classList.add("win");
        break;
      case 2:
        cpuScoreTwo.classList.add("win");
        break;
      case 3:
        cpuScoreThree.classList.add("win");
        ++totalGamesLost;
        console.log("you lose");
        playerScore = undefined;
        computerScore = undefined;
        choose.innerText = "New Game?";
        choose.setAttribute("id", "reset");
        choose.setAttribute("class", "new-game");
        break;
    }
    if (choose.hasAttribute("id", "reset")) {
      document.getElementById("reset").onclick = function () {
        reset();
      };
    };
  };
};

wholeGame();
