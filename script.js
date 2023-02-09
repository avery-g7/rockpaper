/*
YES make function that chooses 3 options for computer randomly
YES make prompt ask to input choice
make rock > scissors > paper > rock
make a function that displays a win or lose message
make function that plays rps for a round
make a loop that goes until one gets to 5 Ws*/

/* input choice prompt */
let system = prompt('Rock, Paper, Scissors');

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


function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore += 1
        return ('Easy dub '+playerSelection+' beats '+computerSelection)
    } else if (playerSelection === computerSelection){
        return ("It's a draw, you both chose "+playerSelection)
    } else {
        computerScore += 1
        return (computerSelection+' beats '+playerSelection+' bro really lost to a computer')
        
    }
    
}

const playerSelection = system;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));