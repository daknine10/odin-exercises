function getComputerChoice() {
    let choice = Math.floor(Math.random()*3); 
    switch(choice) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors'
            break;
    }
    return choice;
}

function getHumanChoice() {
    let humanSelection = prompt('Rock, Paper, or Scissors?');
    humanSelection = humanSelection.toLowerCase();
    return humanSelection;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanSelection, computerSelection) {
        if (humanSelection == computerSelection) { 
            console.log("Tie!");
        }
        switch(humanSelection) {
            case 'rock':
                if (computerSelection == 'paper') {
                    console.log("You lose! Paper beats rock!");
                    computerScore++;
                }
                if (computerSelection == 'scissors') {
                    console.log("You win! Rock beats scissors!");
                    humanScore++;
                }
            break;
            case 'paper':
                if (computerSelection == 'scissors') {
                    console.log("You lose! Scissors beat paper!");
                    computerScore++;
                }
                if (computerSelection == 'rock') {
                    console.log("You win! Paper beats rock!");
                    humanScore++;
                }
            break;
            case 'scissors':
                if (computerSelection == 'rock') {
                    console.log("You lose! Rock beats scissors!");
                    computerScore++;
                }
                if (computerSelection == 'paper') {
                    console.log("You win! Scissors beat paper!");
                    humanScore++;
                }
        }
        console.log("Computer: " + computerScore + " You: " + humanScore);
    }
        if (computerScore > humanScore) { 
            console.log("You lose!");
        }
        else if (computerScore < humanScore) {
            console.log("You won!");
        }
        else {
            console.log("Tie!");
        }
}

playGame();