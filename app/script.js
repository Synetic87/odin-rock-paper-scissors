console.log('Let the battle begin')

//Festlegen der Gegenstände in einem Array

const weapons = ["Rock" , "Paper", "Scissors"];

//Der Computer wählt seinen Gegenstand - getComputerChoice
/* let getComputerChoice = Math.floor(Math.random() * weapons.length);
let computerSelection = weapons[getComputerChoice] */

//console.log(computerSelection)


//Der Spieler wählt seinen Gegenstand
//Die Eingabe wird case-insensitive gemacht, erste Buchstabe immer groß.

/* let playerSelection = prompt("Wähle deinen Gegenstand. Rock, Paper, Scissors?");
let playerSelectionClean = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase() */
/* let playerWon = 'You won! ' + playerSelectionClean + ' beats ' + computerSelection + '!';
let playerLose = 'You lose! ' + computerSelection + ' beats ' + playerSelectionClean + '!'; */
//console.log(playerSelectionClean)


//Beider Ergebisse werden verglichen und ein Sieger bestimmt.
//Schere besiegt Papier
//Stein beisegt Schere
//Papier besiegt Stein
//wenn der Spieler Stein hat, und der PC Papier, gewinnt der PC.

// Spielfunktion für Einzelrunden.

/* function playRound(playerSelectionClean, computerSelection){
    if(weapons.includes(playerSelectionClean)){
        console.log('You choose a good Weapon! Let\'s fight!')
        if (playerSelectionClean == 'Rock' && computerSelection == 'Scissors') {
            console.log(playerWon);
        }
        else if (playerSelectionClean == 'Paper' && computerSelection == 'Rock') {
            console.log(playerWon);
        } 
        else if (playerSelectionClean == 'Scissors' && computerSelection == 'Paper') {
            console.log(playerWon);
        } 
        else if (playerSelectionClean === computerSelection){
            console.log("It's a tie!")
        }
        else {
            console.log(playerLose)
        }
    } else {
        console.log(playerSelectionClean + " is not allowed as a weapon here...")
    }
} */

//playRound(playerSelectionClean, computerSelection)

//Das spiel soll jetzt 5 Runden gehen und mitzählen wer wie oft gewinnt, um am Ende den Sieger zu kühren.
// for loop mit 5 Wiederholungen. Mit der Siegernachricht, muss jewils eine Varaible erhöht werden, die dann am Ende beide verglichen werden.

let playerCount = 0;
let computerCount = 0;

function game() {
    for (let i = 0; i < 5; i++){
        let getComputerChoice = Math.floor(Math.random() * weapons.length);
        let computerSelection = weapons[getComputerChoice]
        console.log(computerSelection)
        let playerSelection = prompt("Wähle deinen Gegenstand. Rock, Paper, Scissors?");
        let playerSelectionClean = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
        let playerWon = 'You won! ' + playerSelectionClean + ' beats ' + computerSelection + '!';
        let playerLose = 'You lose! ' + computerSelection + ' beats ' + playerSelectionClean + '!';

        function playRound(playerSelectionClean, computerSelection){
            if(weapons.includes(playerSelectionClean)){
                console.log('You choose a good Weapon! Let\'s fight!')
                if (playerSelectionClean == 'Rock' && computerSelection == 'Scissors') {
                    console.log(playerWon);
                    playerCount ++;
                }
                else if (playerSelectionClean == 'Paper' && computerSelection == 'Rock') {
                    console.log(playerWon);
                    playerCount ++;
                } 
                else if (playerSelectionClean == 'Scissors' && computerSelection == 'Paper') {
                    console.log(playerWon);
                    playerCount ++;
                } 
                else if (playerSelectionClean === computerSelection){
                    console.log("It's a tie!")
                }
                else {
                    console.log(playerLose);
                    computerCount ++;
                }
            } else {
                console.log(playerSelectionClean + " is not allowed as a weapon here...")
            
            }
            console.log("Human: " + playerCount + " vs. AI: " + computerCount)
        }
        playRound(playerSelectionClean, computerSelection)
    }
    if (playerCount > computerCount){
        console.log("You won the game! The human race will survive!")
    } else {
        console.log("The AI won and will conquer the rest of the world very soon.")
    }
}

game()