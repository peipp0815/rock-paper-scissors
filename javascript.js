let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomValue = Math.random();
  if (randomValue < 0.33) {
    return "rock";
  } else if (randomValue >= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    computerChoice = capitalize(computerChoice);
    return `Draw! You both chose ${computerChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);
    computerScore += 1;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  } else {
    humanChoice = capitalize(humanChoice);
    computerChoice = capitalize(computerChoice);
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const buttons = document.querySelectorAll("button");
const roundResult = document.querySelector("#roundResult");
const runningScore = document.querySelector("#runningScore");
const winnerAnnouncement = document.querySelector("#winnerAnnouncement");

buttons.forEach((button) => {
  button.addEventListener("click", function playGame(event) {
    if (humanScore >= 5 || computerScore >= 5) {
      button.removeEventListener;
    } else {
      const humanSelection = String(button.id);
      const computerSelection = getComputerChoice();
      roundResult.textContent = playRound(humanSelection, computerSelection);
      runningScore.textContent = `Your Score: ${humanScore} Computer Score: ${computerScore}`;
      if (humanScore >= 5) {
        winnerAnnouncement.textContent = `You win the game with a score of ${humanScore} to ${computerScore}!`;
        button.removeEventListener("click", playGame);
      } else if (computerScore >= 5) {
        winnerAnnouncement.textContent = `You lose the game with a score of ${humanScore} to ${computerScore}!`;
        button.removeEventListener("click", playGame);
      }
    }
  });
});
