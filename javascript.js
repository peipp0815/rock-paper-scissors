let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomValue = Math.random();
  if (randomValue < 0.33) {
    return "rock";
  } else if (randomValue > 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let answer;
  while (!(answer === "rock" || answer === "paper" || answer === "scissors")) {
    answer = prompt("rock, paper or scissors?");
    answer = answer.toLowerCase();
  }
  return answer;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    computerChoice = capitalize(computerChoice);
    return console.log(`Draw! You both chose ${computerChoice}.`);
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);
    computerScore += 1;
    return console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  } else {
    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);
    humanScore += 1;
    return console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function playGame() {
  let humanSelection;
  let computerSelection;
  for (i = 0; i < 5; i++) {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore === computerScore) {
    return console.log(
      `Draw with a score of ${humanScore} to ${computerScore}!`
    );
  } else if (humanScore > computerScore) {
    return console.log(
      `You win the game with a score of ${humanScore} to ${computerScore}!`
    );
  } else {
    return console.log(
      `You lose the game with a score of ${humanScore} to ${computerScore}!`
    );
  }
}

playGame();
