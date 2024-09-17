let TARGET_SCORE = 5;
let playerScore = 0;
let computerScore = 0;

const bodyPrimaryText = document.querySelector(".bodyPrimaryText");
const bodySecondaryText = document.querySelector(".bodySecondaryText")
const playerScoreNode = document.querySelector(".player_score");
const computerScoreNode = document.querySelector(".computer_score");
const choices = document.querySelector(".choices");
choices.addEventListener("click", (e) => {handleClick(e.target.className)});

bodyPrimaryText.textContent = "Rock, Paper, Scissors. Let's play!"
bodySecondaryText.textContent = `First to ${TARGET_SCORE} is the winner`

function getComputerChoice() {
    random_num = Math.random()
    if (random_num < 0.33) {
        return "rock";
    } else if (random_num < 0.66) {
        return "paper"
    } else {
        return "scissors";
    }
}

function determineRound(player_choice, computer_choice) {
    if (player_choice == computer_choice) {
        return "draw";
    }

    if (player_choice == "rock") {
        if (computer_choice == "scissors") {
            bodySecondaryText.textContent = `Rock beats Scissors`
            return "player";
        } else if (computer_choice == "paper") {
            bodySecondaryText.textContent = `Paper beats Rock`
            return "computer";
        }
    } else if (player_choice == "paper") {
        if (computer_choice == "rock") {
            bodySecondaryText.textContent = `Paper beats Rock`
            return "player";
        } else if (computer_choice == "scissors") {
            bodySecondaryText.textContent = `Paper beats Scissors`
            return "computer";
        }
    } else if (player_choice == "scissors") {
        if (computer_choice == "paper") {
            bodySecondaryText.textContent = `Scissors beats Paper`
            return "player";
        } else if (computer_choice == "rock") {
            bodySecondaryText.textContent = `Rock beats Scissors`
            return "computer";
        }
    } else {
        return "draw";
    }
}

function updateScore(roundResult) {
    if (roundResult == "player") {
        playerScore++;
        bodyPrimaryText.textContent = `You win!`
    } else if (roundResult == "computer") {
        computerScore++;
        bodyPrimaryText.textContent = `You lose!`
    } else {
        bodyPrimaryText.textContent = `It's a draw..`
    }
    playerScoreNode.textContent = `Player Score: ${playerScore}`
    computerScoreNode.textContent = `Computer Score: ${computerScore}`
}

function isGameOver() {
    return (playerScore == TARGET_SCORE || computerScore == TARGET_SCORE);
}

function endGame() {
    if (playerScore == TARGET_SCORE) {
        bodyPrimaryText.textContent = "Game over! You win."
    } else if (computerScore == TARGET_SCORE) {
        bodyPrimaryText.textContent = "Game over! I win.";
    }
    bodySecondaryText.textContent = "Lets play again!"
    playerScore = 0;
    computerScore = 0;
}

function handleClick(playerChoice) {
    let roundResult = determineRound(playerChoice, getComputerChoice());
    updateScore(roundResult);
    if (isGameOver()) {
        endGame();
    }
}