// Testing a different way to write the function?
function game(n) {
    function playRound(playerSelection,computerSelection){
        const playerSelection = prompt('Enter your choice :')
        function getComputerChoice(){
            const choices = ['Rock', 'Paper', 'Scissors']
            return choices[Math.floor(Math.random()*3)]
        }
        const computerSelection = getComputerChoice();
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
    const results = []
    for (let i = 0; i < n; i++) {
        playRound(playerSelection,computerSelection);
        results.push(playRound(playerSelection,computerSelection));
    }
    // ;
    // for (let i = 0; i < 5; i++){
    //     results.push(playRound(playerSelection, computerSelection))
    // }
    // console.log(results)
    return Math.max(results)
}
game(playRound,5)
