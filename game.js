function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase for case-insensitive comparison
    playerSelection = playerSelection.toLowerCase();
  
    // Define the possible choices
    const choices = ['rock', 'paper', 'scissors'];
  
    // Check if the player's selection is valid
    if (!choices.includes(playerSelection)) {
      return "Invalid choice. Please choose 'rock', 'paper', or 'scissors'.";
    }
  
    // Determine the winner
    if (playerSelection === computerSelection) {
      return `It's a tie! ${playerSelection} and ${computerSelection} both chose the same.`;
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <=5; round++) {
        const playerSelection = prompt("enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
    
        console.log(`Round ${round}: ${result}`);
    
        if (result.includes("You Win")) {
            playerScore++;
        } else if (result.includes("You Lose")) {
            computerScore++;
        }
    }
    
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if  (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!")
    }
}

//  call the game function to play a 5 round game
game();