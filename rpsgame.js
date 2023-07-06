function getComputerSelection() {
  //Define list of options, then select random option from list, then return selection
  const options = ["rock", "paper", "scissors"];
  const selection = options[Math.floor(Math.random() * options.length)];
  return selection;
}

console.log(getComputerSelection());
