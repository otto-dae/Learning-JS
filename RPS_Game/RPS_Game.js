const computerChoiceImg = document.getElementById("ComputerChoice");
const resultDisplay = document.getElementById("Result");
const choices = ["Rock", "Paper", "Scissors"];
const playerWinsLabel = document.getElementById("PlayerWins");
const ComputerWinsLabel = document.getElementById("ComputerWins");
let playerWins = 0;;
let computerWins = 0;;

function StartGame(playerChoice){
    let result;


    const computerChoice = choices[Math.floor(Math.random() *3)];
    computerChoiceImg.src = "RPS_Images/" + computerChoice + ".png";
    if(playerChoice === computerChoice){
        result = "It's a tie!"
    }
    else{
        switch(playerChoice){
            case "Rock":
                result = (computerChoice === "Scissors") ? "Player Wins!" : "Computer Wins!"
                break;

            case "Paper":
            result = (computerChoice === "Rock") ? "Player Wins!" : "Computer Wins!"
            break;

            case "Scissors":
            result = (computerChoice === "Paper") ? "Player Wins!" : "Computer Wins!"
            break;
        }
    }  
    resultDisplay.textContent = result;
    if(result == "Player Wins!"){
        playerWins++;
    }
    if(result == "Computer Wins!"){
        computerWins++;
    }
    playerWinsLabel.textContent = `Player wins: ${playerWins}`;
    ComputerWinsLabel.textContent =`Computer wins: ${computerWins}`;
}