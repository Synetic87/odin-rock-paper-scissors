console.log('Let the battle begin')

//Festlegen der gegenstände in einem Array

const weapons = ["Rock" , "Paper", "Scissors"];

//Der Computer wählt seinen Gegenstand - getComputerChoice
let getComputerChoice = Math.floor(Math.random() * weapons.length);

console.log(getComputerChoice, weapons[getComputerChoice])
let computerSelection = weapons[getComputerChoice]

console.log(computerSelection)


//Der Spieler wählt seinen Gegenstand
//Die Eingabe wird case-insensitive gemacht, erste Buchstabe immer groß.

let playerSelection = prompt("Wähle deinen Gegenstand. Rock, Paper, Scissors?");
let playerSelectionClean = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
let playerWon = 'You won! ' + playerSelectionClean + ' beats ' + computerSelection + '!';
let playerLose = 'You lose! ' + computerSelection + ' beats ' + playerSelectionClean + '!'
console.log(playerSelectionClean)


//Beider Ergebisse werden verglichen und ein Sieger bestimmt.
//Schere besiegt Papier
//Stein beisegt Schere
//Papier besiegt Stein
//wenn der Spieler Stein hat, und der PC Papier, gewinnt der PC.

function playRound(playerSelectionClean, computerSelection){
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
}

playRound(playerSelectionClean, computerSelection)