// Variable Declaration
let firstCard = 6
let secondCard = 15
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""


function startGame(){
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    console.log(message)
}