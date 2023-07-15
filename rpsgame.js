const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
let roundWinner = "";
let previousWinner = "";

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;

  updateGameText("Make your choice!", `${previousWinner} won the last game.`);
  gameOver.classList.remove("gameOver");
}

function playRound(playerSelection) {
  // Get the random computer selection & assign to variable
  let computerSelection = options[Math.floor(Math.random() * options.length)];

  // Check through all cases and add point to relevent winner, no points for a draw
  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundWinner = "player";
  } else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerScore++;
    roundWinner = "computer";
  } else roundWinner = "tie";
  roundWinnerOutcome(playerSelection, computerSelection);
  if (playerScore === 5 || computerScore === 5) handleGameEnd();
}

function roundWinnerOutcome(playerSelection, computerSelection) {
  playerSelection = formatText(playerSelection);
  computerSelection = formatText(computerSelection);
  let textToDisplay = "";
  let subText = "Press your choice!";

  switch (roundWinner) {
    case "player":
      textToDisplay = "You win!";
      subText = `${playerSelection} beats ${computerSelection}`;
      break;
    case "computer":
      textToDisplay = "You lose!";
      subText = `${computerSelection} beats ${playerSelection}`;
      break;
    case "tie":
      textToDisplay = "It's a tie!";
      subText = `You both chose ${playerSelection}`;
      break;
  }

  updateGameText(textToDisplay, subText);
}

function updateGameText(textToDisplay, subText) {
  roundResult.textContent = textToDisplay;
  subDisplay.textContent = subText;
  scoreDisplay.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function handleGameEnd() {
  if (playerScore === 5) {
    previousWinner = "You";
    gameResult.textContent = `You won!`;
  } else {
    previousWinner = "Computer";
    gameResult.textContent = "You lost!";
  }
  gameOver.classList.add("gameOver");
}

function formatText(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Get references to objects in the DOM given their class
const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector(".reset");
const roundResult = document.querySelector(".roundResult");
const subDisplay = document.querySelector(".subText");
const gameOver = document.querySelector(".overlay");
const scoreDisplay = document.querySelector(".scoreDisplay");
const gameResult = document.querySelector(".gameResult");

rockButton.addEventListener("click", () => playRound("rock"));
paperButton.addEventListener("click", () => playRound("paper"));
scissorsButton.addEventListener("click", () => playRound("scissors"));
resetButton.addEventListener("click", () => resetGame());
