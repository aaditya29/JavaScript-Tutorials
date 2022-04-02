//Create a function rollDice that returns random number between 1 and 6
function rollDice(){
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log(rollDice())