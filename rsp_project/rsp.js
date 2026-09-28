function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);

    return choices[randomIndex];
}

function getHumanChoice() {
    const choice = prompt("Choose: Rock, Paper, or Scissors");

    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        }
        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You win the game!");
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    }
    else {
        console.log("The game is a tie!");
    }
}

playGame();