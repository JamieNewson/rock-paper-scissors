const options = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerSelection() {
  //Define list of options, then select random option from list, then return selection
  const selection = options[Math.floor(Math.random() * options.length)];
  return selection;
}

function playRound(playerSelection, computerSelection) {
  //Convert player input to be case-insensitive
  playerSelection = playerSelection.toLowerCase();
  //Check if player input matches a valid response - 'rock','paper', or 'scissors'
  if (!options.includes(playerSelection)) {
    roundsPlayed--;
    return console.log(
      playerSelection +
        " is not a playable option, please choose rock, paper or scissors."
    );
  }
  //Check if player and computer input match first to remove it as a case
  if (playerSelection === computerSelection) return "Draw";
  //Check through all cases and return relvent reponse (draw cases already taken care of)
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") {
        computerScore++;
        return "Computer wins";
      }
      break;
    case "paper":
      if (computerSelection === "scissors") {
        computerScore++;
        return "Computer wins";
      }
      break;
    case "scissors":
      if (computerSelection === "rock") {
        computerScore++;
        return "Computer wins";
      }
      break;
  }
  playerScore++;
  return "Player wins";
}

function getWinCase() {
  if (playerScore === computerScore) return "It's a draw.";
  else if (playerScore >= computerScore) return "Player wins!";
  else return "Computer wins!";
}

function game() {
  for (roundsPlayed = 0; roundsPlayed < 5; roundsPlayed++) {
    let playerInput = prompt("Enter your selection: ");
    playRound(playerInput, getComputerSelection());
  }
  console.log(`${getWinCase()} ${playerScore} - ${computerScore}`);
}

game();
