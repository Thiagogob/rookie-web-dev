const choices = ["Pedra", "Papel", "Tesoura"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

const playButton = document.getElementById("playButton");
let playerScore = 0;
let computerScore = 0;

let roundsPlayed = 0;

let numberOfRounds;

while (true) {
    numberOfRounds = parseInt(prompt("Quantidade de rodadas: "), 10);


    if (!isNaN(numberOfRounds) && numberOfRounds > 0) {
        break; 
    } else {
        alert("Por favor, insira um número válido maior que 0.");
    }
}



function playGame(playerChoice) {
    roundsPlayed++;

    if (roundsPlayed > numberOfRounds) {
        alert("O número máximo de rodadas foi atingido.");

        return;
    }
    const computerChoice = choices[Math.floor(Math.random() * 3)];



    let result = "";



    switch (playerChoice) {
        case "Pedra":


            result = (computerChoice === "Tesoura") ? playerScore++ : computerScore++;

            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;

            console.log("Jogador: " + playerScore);
            console.log("Computador: " + computerScore);

            break;

        case "Papel":


            result = (computerChoice === "Pedra") ? playerScore++ : computerScore++;

            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            console.log("Jogador: " + playerScore);
            console.log("Computador: " + computerScore);
            break;

        case "Tesoura":

            result = (computerChoice === "Papel") ? playerScore++ : computerScore++;

            console.log("Jogador: " + playerScore);
            console.log("Computador: " + computerScore);

            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            break;
    }


    playerDisplay.textContent = `JOGADOR: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTADOR: ${computerChoice}`;



    if (numberOfRounds === roundsPlayed) {

        if (computerScore > playerScore) {
            resultDisplay.textContent = "VOCÊ PERDEU!";
            resultDisplay.classList.add("redText");
        }
        else if (computerScore < playerScore) {
            resultDisplay.textContent = "VOCÊ GANHOU!";
            resultDisplay.classList.add("greenText");
        }
        else {
            resultDisplay.classList.remove("greenText", "redText");
            resultDisplay.textContent = "EMPATE!";
        }

    }



}

