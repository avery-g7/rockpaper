//when rock is selected. input into playerSelection
//when paper selected, input into playerSelection
//when scissors selected, input scissors into playerSelection

const buttons = document.querySelectorAll('button');

let result = document.querySelector('#result');
let playerScore = 0
let computerScore = 0

function disableButton() {
    buttons.forEach(elem => {
        elem.disabled = true;
    });
};

/* computer function */
function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors']
    return choice[Math.floor(Math.random() * choice.length)];
};

/* round function and win or loss */
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let result = '';

    if (playerSelection == 'rock' && computerSelection == 'scissors' ||
    playerSelection == 'paper' && computerSelection == 'rock' ||
    playerSelection == 'scissors' && computerSelection == 'paper'){
        
        playerScore += 1
        result = ('Easy dub '+playerSelection+' beats '+computerSelection
        + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)
        
        if (playerScore == 5) {
            result += '<br><br>You got to 5 first Big dubs';
            disableButton();
        }

    } else if (playerSelection === computerSelection){
        result = ('It\'s a draw, you both chose '+playerSelection
            + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)

    } else {
        computerScore += 1
        result = (computerSelection+' beats '+playerSelection+' bro really lost to a computer'
        + '<br><br>Player Score: ' + playerScore + '<br>Computer Score: ' + computerScore)
        if (computerScore == 5) {
            result += '<br><br>Computer got to 5 first Holy L';
            disableButton();
        }
    }
    document.getElementById('result').innerHTML = result;
    return
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.textContent);
    })
})

/* loop for the game */
/*function game() {
    for (let i = 0;playerScore < 5 && computerScore < 5; i++ ) {
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)

    }
}*/


//game();
