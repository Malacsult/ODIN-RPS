function getComputerChoice() {
    let a = Math.random()*3;
    a = Math.floor(a);
    if (a === 0) {
        choice = "ROCK";
    } else if (a === 1) {
        choice = "PAPER";
    } else if (a === 2) {
        choice = "SCISSORS";
    } else {
        console.error("getComputerChoice error")
    }
return choice
}

function mainGame(playerSelection) {
    computerSelection = getComputerChoice();

    //Announcements
    console.log(playerSelection + " Player selection");
    console.log(computerSelection + " Computer selection");

    //Tie detection
    if (computerSelection === playerSelection) {
        result = "Draw!";
    }

    //If player chose rock 
    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            result = "Computer Wins!";
        }
        if (computerSelection === "SCISSORS") {
            result = "Player Wins!";
        }
    }

    //If player chose paper
    if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            result = "Computer Wins!";
        }
        if (computerSelection === "ROCK") {
            result = "Player Wins!";
        }
    }

    //If player chose scissors
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            result = "Computer Wins!";
        }
        if (computerSelection === "PAPER") {
            result = "Player Wins!";
        }
    }
    console.log(result);
}