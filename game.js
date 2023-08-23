const playerSelection = prompt('Enter your choice :')
// random selection for the computer
function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random()*3)]
}

const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
   // to make the selection case-insensitive
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    switch (playerSelection) {
        case 'rock':
            if (computerSelection === 'paper') {
                console.log('You lose! Paper beats rock');
            } else if (computerSelection === 'scissors') {
                console.log('You win! Rock beats Scissors');
            } else {
                console.log('It is a tie!');
            }
            break;
        case 'paper':
            if (computerSelection === 'rock') {
                console.log('You win! Paper beats rock');
            } else if (computerSelection === 'scissors') {
                console.log('You lose! Scissors beats Paper');
            } else {
                console.log('It is a tie!');
            }
            break;
        case 'scissors':
            if (computerSelection === 'paper') {
                console.log('You win! Scissors beats Paper');
            } else if (computerSelection === 'rock') {
                console.log('You lose! Rock beats Scissors');
            } else {
                console.log('It is a tie!');
            }
            break;
        default:
            throw new Error('Invalid Player Input!')
    }
}
   
// console.log(playRound(playerSelection, computerSelection)); 

// play the game several times and show winner
function game(times){
    for (let i = 0; i < times; i++){
        const results = [];
        results.push(playRound(playerSelection,computerSelection))
    }
    return Math.max(results)
}
game(5)
