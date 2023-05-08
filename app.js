const options = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll("button");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const rockComputer = document.querySelector("#rock-computer");
const paperComputer = document.querySelector("#paper-computer");
const scissorsComputer = document.querySelector("#scissors-computer");

const getResult = () => {
  const result = Math.floor(Math.random() * 3);
  return options[result];
};

const showResult = (player, computer) => {
  if (player === computer) {
    alert(`It's a tie!`);
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    alert(`You win! ${player} beats ${computer}.`);
  } else {
    alert(`You lose! ${computer} beats ${player}.`);
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerSelection = button.id;
    const computerSelection = getResult();
    
    rockComputer.classList.add("hidden");
    paperComputer.classList.add("hidden");
    scissorsComputer.classList.add("hidden");
    
    if (computerSelection === "rock") {
      rockComputer.classList.remove("hidden");
    } else if (computerSelection === "paper") {
      paperComputer.classList.remove("hidden");
    } else {
      scissorsComputer.classList.remove("hidden");
    }
    
    showResult(playerSelection, computerSelection);
  });
});