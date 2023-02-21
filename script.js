//when rock is selected. input into playerSelection
//when paper selected, input into playerSelection
//when scissors selected, input scissors into playerSelection

const computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('button');

let result = document.querySelector('#result');


buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

let playerScore = 0
let computerScore = 0

/* computer function */
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)];
};

/* round function and win or loss */
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++
        result += 'Easy dub '+playerSelection+' beats '+computerSelection
    } else if (playerSelection === computerSelection){
        result += "It's a draw, you both chose "+playerSelection
    } else {
        computerScore++
        result += computerSelection+' beats '+playerSelection+' bro really lost to a computer';
        
    }
    
}


/* loop for the game */
/*function game() {
    for (let i = 0;playerScore < 5 && computerScore < 5; i++ ) {
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)

    }
}*/


//game();

/* game over message */
if (playerScore == 5) {
    result += 'You got to 5 first Big dubs';
} else if (computerScore == 5) {
    result += 'Computer got to 5 first Holy L';
}
