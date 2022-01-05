let computerChoice = {Value: ""};
let playerChoice;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let computerScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${computerScore}`;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!"



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const num = randomIntFromInterval(0,2);
    return choices[num];

}

function playGame(){
    if (playerScore == 5){
        output.textContent = "You Won the Game! Congrats";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    else if (computerScore == 5){
        output.textContent = "You Lost the game:/ Maybe find something else to do?"
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
}


buttons.forEach((button) =>{button.addEventListener('click', ()=>{
    playerChoice = button.id;
    playRound(playerChoice, computerPlay());
    playGame();

})
})



function playRound(playerChoice, computerChoice) {

    if (playerChoice === computerChoice){
        output.textContent = "Draw!";
    } else if (playerChoice === "rock" && computerChoice == "scissors"){
        output.textContent = "Player Wins!";
        playerScore++;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerChoice === "rock" && computerChoice == "paper"){
        output.textContent = "Computer Wins!";
        computerScore++;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerChoice === "paper" && computerChoice == "scissors"){
        output.textContent =  "Computer Wins!";
        computerScore++;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerChoice === "paper" && computerChoice == "rock"){
        output.textContent =  "Player Wins!";
        playerScore++;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerChoice === "scissors" && computerChoice == "rock"){
        output.textContent =  "Computer Wins!";
        computerScore++;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else if (playerChoice === "scissors" && computerChoice == "paper"){
        output.textContent = "Player Wins!";
        playerScore++;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    } else {

    }

}







