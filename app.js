// Variable Declaration
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let btnStart = document.getElementById("start-game")
let btnNewCard = document.getElementById("new-card")
let btnRestart = document.getElementById("restart")

let player = {
    name : "Rick",
    chips : 145
}

playerEl.textContent = player.name + " : " + "$" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    
    if (randomNumber > 10){
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    // Hide startGame button
    btnStart.style.display = "none"
    // Show newCard button
    btnNewCard.style.display = "inline-block"

    cardsEl.textContent = "Cards: "

    // Loop to render card that inside of array cards.
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

        btnRestart.style.display = "inline-block"
    } else {
        message = "You're out of the game!"
        isAlive = false

        btnNewCard.style.backgroundColor = "#666"
        btnNewCard.style.color = "#444"
        btnRestart.style.display = "inline-block"
    }
    
    messageEl.textContent = message
}

function newCard() {
    if (hasBlackjack === false && isAlive === true) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}