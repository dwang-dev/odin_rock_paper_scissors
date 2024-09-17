let TARGET_SCORE = 5;
let playerScore = 0;
let computerScore = 0;

const chatBox = document.querySelector(".chatBox");
const choices = document.querySelector(".choices");
choices.addEventListener("click", (e) => {handleClick(e.target.className)});

chatBox.textContent = "Rock, Paper, Scissors. Let's play!"

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
            return "player";
        } else if (computer_choice == "paper") {
            return "computer";
        }
    } else if (player_choice == "paper") {
        if (computer_choice == "rock") {
            return "player";
        } else if (computer_choice == "scissors") {
            return "computer";
        }
    } else if (player_choice == "scissors") {
        if (computer_choice == "paper") {
            return "player";
        } else if (computer_choice == "rock") {
            return "computer";
        }
    } else {
        return "draw";
    }
}

function updateScore(roundResult) {
    if (roundResult == "player") {
        playerScore++;
    } else if (roundResult == "computer") {
        computerScore++;
    }
    chatBox.textContent = `You have ${playerScore} points. I have ${computerScore} points. First to ${TARGET_SCORE}!`;
}

function isGameOver() {
    return (playerScore == TARGET_SCORE || computerScore == TARGET_SCORE);
}

function endGame() {
    if (playerScore == TARGET_SCORE) {
        chatBox.textContent = "Game over. You win! I scored " +
        computerScore + " points. You scored " + playerScore + " points";
    } else if (computerScore == TARGET_SCORE) {
        chatBox.textContent = "Game over. You lose! I scored " +
        computerScore + " points. You scored " + playerScore + " points";
    }
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