
//create a function that randomly generates rock, paper or scissors.
//create a user input that allows the user to input either rock, paper or scissors.
//create a set of rules that determines what beats what in the game.
//create an output that returns the results of the game, depending on the user input.
    
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection){
        return "Tie";
    } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    } else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!";
    } else if(result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    }
}
function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, Paper or Scissors?")
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase()
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let computerScore = 0;
    let humanScore = 0;
    console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------------");
        if(checkWinner(playerSelection, computerSelection) == "Player") {
            humanScore++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore++;
        }
        console.log(`Your score is ${humanScore}`);
        console.log(`Computer score is ${computerScore}`);
        console.log("--------------");

        
    }
    console.log("Game over");
    if(humanScore > computerScore) {
        console.log("You Win!");
    } else if (humanScore < computerScore) {
        console.log("Computer Wins! :(")
    }
}



game()





