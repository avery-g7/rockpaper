/*
YES make function that chooses 3 options for computer randomly
YES make prompt ask to input choice
YES make rock > scissors > paper > rock
YES make a function that displays a win or lose message
YES make function that plays rps for a round
YES make a loop that goes until one gets to 5 Ws*/


let playerScore = 0
let computerScore = 0

function random(number) {
    return Math.floor(Math.random() * number + 1);
}
/* computer function */
function getComputerChoice() {
    let choice = random(3);
    let compChoice = '';

    switch(choice) {
        case 1:
            compChoice = 'rock'
            break;
        case 2:
            compChoice = 'paper'
            break;
        case 3:
            compChoice = 'scissors'
            break;
    }
    return compChoice;
}

/* round function and win or loss */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++
        return ('Easy dub '+playerSelection+' beats '+computerSelection)
    } else if (playerSelection === computerSelection){
        return ("It's a draw, you both chose "+playerSelection)
    } else {
        computerScore++
        return (computerSelection+' beats '+playerSelection+' bro really lost to a computer')
        
    }
    
}


/* loop for the game */
function game() {
    for (let i = 0;playerScore < 5 && computerScore < 5; i++ ) {
        let playerSelection = prompt('Rock, Paper, Scissors').toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)

    }
}


game();

/* game over message */
if (playerScore == 5) {
    console.log('You got to 5 first Big dubs');
} else if (computerScore == 5) {
    console.log('Computer got to 5 first Holy L');
}
