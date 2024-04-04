const numberDisplay = document.getElementById("numberDisplay");
const playerCashDisplay = document.getElementById("playerCashDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const simpleBet = document.getElementById("simpleBet");
const evenBet = document.getElementById("evenBet");
const oddBet = document.getElementById("oddBet");
const lowBet = document.getElementById("lowBet");
const highBet = document.getElementById("highBet");
const redBet = document.getElementById("redBet");
const blackBet = document.getElementById("blackBet");
const firstDozenBet = document.getElementById("firstDozenBet");
const secondDozenBet = document.getElementById("secondDozenBet");
const thirdDozenBet = document.getElementById("thirdDozenBet");
const firstColumnBet = document.getElementById("firstColumnBet");
const secondColumnBet = document.getElementById("secondColumnBet");
const thirdColumnBet = document.getElementById("thirdColumnBet");
const redNumbers = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
const blackNumbers = [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35];
const firstColumn = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
const secondColumn = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
const thirdColumn = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];

var betNumber;
var betValue;

let playerCash = 1000;

playerCashDisplay.textContent = `Saldo: R$${playerCash}`; 

function playGame(betChoice) {
    resultDisplay.textContent = "";
    let delay = 50; // Começa com um delay menor para ser mais rápido
    const maxDelay = 1000; // O delay máximo que desejamos alcançar para simular a desaceleração
    const delayIncrement = 100; // Quanto o delay aumenta após cada número sorteado

    function rollRoullete() {
        let lastNumber = Math.floor(Math.random() * 37); // Número inicial aleatório de 0 a 36
        let numbersRolled = [lastNumber]; // Inicia a lista com o número inicial


        // Define um deslocamento aleatório, por exemplo, entre 1 e 18, para simular a força do giro
        let offset = Math.floor(Math.random() * 18) + 1;
        let rouletteNumber = (lastNumber + offset) % 37; // Garante que o número fique dentro de 0-36

        // Atualiza o último número e o registro de números sorteados
        lastNumber = rouletteNumber;
        numbersRolled.push(rouletteNumber);

        // Atualiza a exibição do número
        numberDisplay.textContent = rouletteNumber;
        console.log(numbersRolled);

        numberDisplay.classList.remove('redText', 'blackText');

        if (blackNumbers.includes(rouletteNumber)) {
            numberDisplay.classList.add('blackText');
        } else {
            numberDisplay.classList.add('redText');
        }

        // Aumenta o delay para a próxima execução, até o limite definido
        delay = delay + delayIncrement <= maxDelay ? delay + delayIncrement : maxDelay;

        // Se o delay ainda não atingiu o máximo, planeja o próximo roll
        if (delay < maxDelay) {
            setTimeout(rollRoullete, delay);
        } else {
            setTimeout(() => {

                //logica para a escolha de aposta
                switch(betChoice){

                    case "simpleBet":

                        if (numbersRolled[numbersRolled.length - 1] === betNumber) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue * 35 + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;

                        break;

                    case "evenBet":
                        if (numbersRolled[numbersRolled.length - 1] % 2 == 0) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "oddBet":
                        if (numbersRolled[numbersRolled.length - 1] % 2 != 0) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "lowBet":
                        if (numbersRolled[numbersRolled.length - 1] <= 18 && numbersRolled[numbersRolled.length - 1] != 0) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;

                        break;

                    case "highBet":
                        if (numbersRolled[numbersRolled.length - 1] > 18) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "redBet":
                        if (redNumbers.includes(numbersRolled[numbersRolled.length - 1])) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "blackBet":
                        if (blackNumbers.includes(numbersRolled[numbersRolled.length - 1])) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "firstDozenBet":
                        if (numbersRolled[numbersRolled.length - 1] <= 12 && numbersRolled[numbersRolled.length - 1] != 0) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue*2 + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "secondDozenBet":
                        if (numbersRolled[numbersRolled.length - 1] > 12 && numbersRolled[numbersRolled.length - 1] <=24) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue*2 + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "thirdDozenBet":
                        if (numbersRolled[numbersRolled.length - 1] > 24) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue*2 + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "firstColumnBet":
                        if (firstColumn.includes(numbersRolled[numbersRolled.length - 1])) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue*2 + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "secondColumnBet":
                        if (secondColumn.includes(numbersRolled[numbersRolled.length - 1])) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue*2 + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;

                    case "thirdColumnBet":
                        if (thirdColumn.includes(numbersRolled[numbersRolled.length - 1])) {
                            resultDisplay.textContent = "Você Ganhou!";
                            playerCash = betValue*2 + playerCash; 
                             
                            console.log(betNumber);
                        } else {
                            playerCash -= betValue;
                            resultDisplay.textContent = "Você Perdeu!";
                            console.log(betNumber);
                        }

                        playerCashDisplay.textContent = `Saldo: R$${playerCash}`;
                        break;
                }
            }, delay);
        }
    }

    rollRoullete(); // Inicia a sequência de sorteios
}


document.getElementById('simpleBet').addEventListener('click', function() {
    let isValid = false;
    let userBet;

    while (!isValid) {
        userBet = prompt("Digite o número que deseja apostar (entre 0 e 36):");

        if(userBet !== null && userBet.trim() !== "" && !isNaN(userBet)) {
            betNumber = parseInt(userBet, 10);

            if(betNumber >= 0 && betNumber <= 36) {
                alert("Você apostou no número: " + betNumber);
                isValid = true; // Encerra o loop
            } else {
                alert("O número deve estar entre 0 e 36. Tente novamente.");
            }
        } else {
            alert("Insira um número válido.");
        }
    }
});



document.getElementById('buttons').addEventListener('click', function(event) {
    // Verifica se o clique foi em um botão com a classe 'grid-button'
    if (event.target && event.target.matches('.grid-button')) {
        // Verifica se o saldo do jogador é igual a zero
        if (playerCash === 0) {
            alert("Seu saldo é zero. A página será recarregada.");
            location.reload(); // Recarrega a página
            return; // Encerra a execução da função
        }

        let betValueValid = false;

        while (!betValueValid) {
            betValue = prompt("Quanto deseja apostar:");

            // Verifica se o valor inserido é um número, é maior que 0 e o usuário não pressionou cancelar
            if (betValue !== null && !isNaN(betValue) && +betValue > 0) {
                betValue = +betValue; // Converte a string para número

                // Verifica se o usuário tem saldo suficiente
                if (playerCash >= betValue) {
                    // Lógica para proceder com a aposta
                    console.log("Aposta de R$" + betValue + " aceita.");
                    betValueValid = true; // Encerra o loop
                } else {
                    alert("Saldo insuficiente para essa aposta.");
                    // betValueValid permanece falso, portanto o loop continua
                }
            } else {
                alert("Por favor, insira um valor de aposta válido.");
                // Não é necessário alterar betValueValid, pois o loop irá repetir
            }
        }
    }
});





