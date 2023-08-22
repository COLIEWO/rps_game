const choices = ['Rock', 'Paper', 'Scissors']

const playerSelection = prompt('Enter your choice :')

function getComputerChoice(){
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
   
console.log(playRound(playerSelection, computerSelection));  

// function playRound(playerSelection, computerSelection) {
//     switch (playerSelection.toLowerCase()) {
//         case 'rock':
//             if (computerSelection.toLowerCase() === 'paper') {
//                 console.log('You lose! Paper beats rock');
//             } else if (computerSelection.toLowerCase() === 'scissors') {
//                 console.log('You win! Rock beats Scissors');
//             } else {
//                 console.log('It is a tie!');
//             }
//             break;
//         case 'paper':
//             if (computerSelection.toLowerCase() === 'rock') {
//                 console.log('You win! Paper beats rock');
//             } else if (computerSelection.toLowerCase() === 'scissors') {
//                 console.log('You lose! Scissors beats Paper');
//             } else {
//                 console.log('It is a tie!');
//             }
//             break;
//         case 'scissors':
//             if (computerSelection.toLowerCase() === 'paper') {
//                 console.log('You win! Scissors beats Paper');
//             } else if (computerSelection.toLowerCase() === 'rock') {
//                 console.log('You lose! Rock beats Scissors');
//             } else {
//                 console.log('It is a tie!');
//             }
//             break;
//         case !['rock', 'paper', 'scissors']:
//             throw new Error('Invalid player input');
//     }
// }
  
  
