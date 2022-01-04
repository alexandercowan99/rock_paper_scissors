function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function computerPlay(){
    const choices = ["Rock", "Paper", "Scissors"];
    const num = randomIntFromInterval(0,2);
    return choices[num];

}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    let computerChoice = computerSelection.toLowerCase();
    if (playerChoice === computerChoice){
        return "Draw!";
    } else if (playerChoice === "rock" && computerChoice == "scissors"){
        return "Player Wins!";
    } else if (playerChoice === "rock" && computerChoice == "paper"){
        return "Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice == "scissors"){
        return "Computer Wins!";
    } else if (playerChoice === "paper" && computerChoice == "rock"){
        return "Player Wins!";
    } else if (playerChoice === "scissors" && computerChoice == "rock"){
        return "Computer Wins!";
    } else if (playerChoice === "scissors" && computerChoice == "paper"){
        alert("Player Wins!");
    } else {
        return "Incorrect Input.";
    }
}



function game(){
    let i = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (i < 5){
        let playerSelection = prompt("Rock, paper or scissors?");
        let computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result === "Draw!"){
            console.log("Draw!")
            i = i + 1;
        } else if (result == "Player Wins!"){
            console.log("Player Wins!")
            playerScore = playerScore + 1;
            i = i + 1;
        } else if (result == "Computer Wins!"){
            console.log("Computer Wins!")
            computerScore = computerScore + 1;
            i = i + 1;
        } else{
            i = i + 1;
        }
    }
    let msg = "Your score is: " + playerScore + ", the computers score is: " + computerScore + ".";
    return msg;       

}