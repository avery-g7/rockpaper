/*
YES make function that chooses 3 options for computer randomly
YES make prompt ask to input choice
make rock > scissors > paper > rock
make a function that displays a win or lose message
make function that plays rps for a round
make a loop that goes until one gets to 5 Ws*/

/* input choice prompt */
let system = prompt('Rock, Paper, Scissors').toLowerCase;

let playerScore = 0
let computerScore = 0

let rock = parseInt(0);
let paper = parseInt(1);
let scissors = parseInt(2);

/* computer function */
function getComputerChoice() {
    let choice = ('rock', 'paper', 'scissors');
    return Math.floor(Math.random()*choice.length);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == rock && computerSelection == scissors ||
    playerSelection == paper && computerSelection == rock ||
    playerSelection == scissors && computerSelection == paper){
        return ('Easy dub'+playerSelection+'beats'+computerSelection)
    } else if (playerSelection == computerSelection){
        return ("It's a draw, you both chose"+playerSelection)
    } else {
        return (computerSelection+'beats'+playerSelection+'bro really lost to a computer')
    }
    
}

const playerSelection = system;
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));