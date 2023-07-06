const options = ["rock", "paper", "scissors"];

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
    console.log(
      playerSelection +
        " is not a playable option, please choose rock, paper or scissors."
    );
    return;
  }
  //Check if player and computer input match first to remove it as a case
  if (playerSelection === computerSelection) return "It's a draw!";
  //Check through all cases and return relvent reponse (draw cases already taken care of)
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "paper") return "You lose, Paper beats Rock!";
      return "You win, Rock beats Scissors!";
    case "paper":
      if (computerSelection === "scissors")
        return "You lose, Scissors beats Paper!";
      return "You win, Paper beats Rock!";
    case "scissors":
      if (computerSelection === "rock") return "You lose, Rock beats Scissors!";
      return "You win, Scissors beats Paper!";
  }
}

console.log(playRound("scissors", getComputerSelection()));
