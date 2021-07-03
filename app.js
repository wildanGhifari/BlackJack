// Variable Declaration
let firstCard = 6
let secondCard = 15
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    // Get card inside array of cards.
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum

    // Set condition if sum less than 21 or exactly equal 21 or greater than 21.
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    messageEl.textContent = message
}

function newCard() {
    let card = 9
    cards.push(card)
    sum += card

    renderGame()
}