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

function getPlayerChoice() {
    return prompt("Rock, paper, or scissors?");
}

function determineOutcome(player_choice, computer_choice) {
    if (player_choice === computer_choice) {
        console.log("Draw! We picked the same thing");
        return "draw";
    }

    if (player_choice === "rock") {
        if (computer_choice == "scissors") {
            console.log("You win! Rock beats Scissors");
            return "win";
        } else if (computer_choice === "paper") {
            console.log("You lose! Paper beats Rock");
            return "lose";
        }
    } else if (player_choice === "paper") {
        if (computer_choice === "rock") {
            console.log("You win! Paper beats Rock");
            return "win";
        } else if (computer_choice === "scissors") {
            console.log("You lose! Scissors beats Paper");
            return "lose";
        }
    } else if (player_choice === "scissors") {
        if (computer_choice === "paper") {
            console.log("You win! Scissors beats Paper");
            return "win";
        } else if (computer_choice === "rock") {
            console.log("You lose! Rock beats Scissors");
            return "lose";
        }
    } else {
        console.log("You didn't pick right! Pick Rock, Paper, or Scissors");
        return "draw";
    }
}

function playRound() {
    let player_choice = getPlayerChoice().toLowerCase();
    let computer_choice = getComputerChoice();
    console.log("I pick " + computer_choice);
    return determineOutcome(player_choice, computer_choice);
}

function determineRound(outcome) {
    if (outcome === "win") {
        player_score++;
    } else if (outcome === "lose") {
        computer_score++;
    }
}

function determineWinner(player_score, computer_score) {
    if (player_score > computer_score) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
    console.log("I scored " + computer_score + " points. You scored " + player_score + " points");
}

let player_score = 0;
let computer_score = 0;
console.log("Let's play a game of rock, paper, scissors!");
// Play 5 rounds.
for (x = 0; x < 5; x++) {
    let outcome = playRound();
    if (outcome == "draw") {
        x--;
    } else {
        determineRound(outcome);
    }
}
determineWinner(player_score, computer_score);