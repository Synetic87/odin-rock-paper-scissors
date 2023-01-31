console.log('Let the battle begin')

//Festlegen der gegenstände in einem Array

const weapons = ["Rock" , "Paper", "Scissors"];

//Der Computer wählt seinen Gegenstand - getComputerChoice
//Der Spieler wählt seinen Gegenstand
//Die Eingabe wird case-insensitive gemacht, erste Buchstabe immer groß.






//Beider Ergebisse werden verglichen und ein Sieger bestimmt.
//Schere besiegt Papier
//Stein beisegt Schere
//Papier besiegt Stein
//wenn der Spieler Stein hat, und der PC Papier, gewinnt der PC.

function playRound(playerSelectionClean, computerSelection){
    getComputerChoice = Math.floor(Math.random() * weapons.length);
    computerSelection = weapons[getComputerChoice];
    
    playerSelection = prompt("Wähle deinen Gegenstand. Rock, Paper, Scissors?");
    playerSelectionClean = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    let playerWon = 'You won! ' + playerSelectionClean + ' beats ' + computerSelection + '!';
    let playerLose = 'You lose! ' + computerSelection + ' beats ' + playerSelectionClean + '!';
    if (playerSelectionClean == 'Rock' && computerSelection == 'Scissors') {
        console.log(playerWon);
    }
    if (playerSelectionClean == 'Paper' && computerSelection == 'Rock') {
        console.log(playerWon);
    } 
    if (playerSelectionClean == 'Scissors' && computerSelection == 'Paper') {
        console.log(playerWon);
    } 
    else if (playerSelectionClean === computerSelection){
        console.log("It's a tie!")
    }
    else {
        console.log(playerLose)
    }
}

function game() {
    for (let i = 0; i < 5; i++){
    playRound(playerSelectionClean, computerSelection);
    }
}

game()