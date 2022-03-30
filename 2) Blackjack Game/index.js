// 1. Create two variables, firstCard and secondCard. 
// Set their values to a random number between 2-11
let firstCard = 10
let secondCard = 11
// 2. Create a variable, sum, and set it to the sum of the two cards
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
    if(sum<=20){
    message = "Do you want to draw a new card?"
}
else if(sum===21){
    message = "Congratulations! You got a blackjack."
    hasBlackJack = true
}
else{
    message= "Sorry. You're out of the game."
    isAlive = false
}
console.log(message)
}