// Create deck of cards
let values = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'J', 'Q', 'K', 'A'];
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
let deck = [];

console.log(deck)

//Create cards
for (let i = 0; i < values.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    let card = { Value: values[i], Suit: suits[j] };
    deck.push(card);
  }
}
console.log(deck)


let shuffleDeck = deck.sort(() => Math.random() - 0.5);
//The number -0.5 is used to sort the array randomly by giving it a random number between -0.5 and 0.5. This ensures that the array is shuffled in a completely random order.

let playerCards = [shuffleDeck.pop()];
let dealerCards = [shuffleDeck.pop()];


// deal cards to player and dealer
function dealCards() {
    playerCards.push(deck.shift());
    dealerCards.push(deck.shift());
}
dealCards();
console.log(dealerCards[0].Value)

// get card numeric value
function getCardNumericValue(card) {
    switch(card.Value) {
        case 'Two': return 2;
        case 'Three': return 3;
        case 'Four': return 4;
        case 'Five': return 5;
        case 'Six': return 6;
        case 'Seven': return 7;
        case 'Eight': return 8;
        case 'Nine': return 9;
        case 'Ten': return 10;
        case 'J': return 10;
        case 'Q': return 10;
        case 'K': return 10;
        case 'A': return 11;
    }
}
// calculate player's score
function calculatePlayerScore() {
    let score = 0;
    let hasAce = false;
        for (let i = 0; i < playerCards.length; i++) {
            let card = playerCards[i];
            score += getCardNumericValue(card);
            if (card.Value === "Ace") {
                hasAce = true;
            }
        }
        if (hasAce && score + 10 <= 21) {
            return score + 10;
        }
        return score;
}


// calculate dealer's score
function calculateDealerScore() {
    let score = 0;
    let hasAce = false;
        for (let i = 0; i < dealerCards.length; i++) {
            let card = dealerCards[i];
            score += getCardNumericValue(card);
            if (card.Value === "Ace") {
                hasAce = true;
            }
        }
        if (hasAce && score + 10 <= 21) {
            return score + 10;
        }
        return score;
}

console.log("Player's cards: ");
console.log(playerCards);
console.log(playerCards);
let playerScore = getCardNumericValue(playerCards[0]) + getCardNumericValue(playerCards[1])
console.log("Dealer's first card: ");
console.log(dealerCards[0])

//calculate the score for the player
console.log(`The player's first two cards are ${playerCards[0].Value} of ${playerCards[0].Suit} and ${playerCards[1].Value} of ${playerCards[1].Suit} and player's score is ${playerScore}`);


console.log(`The dealer's first card is a ${dealerCards[0].Value} of ${dealerCards[0].Suit} and dealer's score is ${getCardNumericValue(dealerCards[0])}`);

// Create a hit function that takes a hand as a parameter and draws a card
function hit(hand) {
    let card = deck[Math.floor(Math.random() * deck.length)];
    hand.push(card);
    return hand;
}




/*
// check for blackjack
function checkForBlackjack() {
    if (playerScore === 21 || dealerScore === 21) {
        return true;
    }
    else {
        return false;
    }
}

// compare scores
function compareScores() {
    if (playerScore > dealerScore) {
            return "You Win!";
        }
        else if (dealerScore > playerScore) {
            return "Dealer Wins!";
        }
        else {
            return "Push";
        }
}

// hit button pressed
function hitButtonPressed() {
        playerHand.push(deck.shift());
        playerScore = calculatePlayerScore();
        if (playerScore > 21) {
            dealerScore = calculateDealerScore();
            alert(`You Bust! Dealer Wins!`);
            endGame();
        }
        else if (playerScore === 21) {
            alert(`You Have BlackJack! You Win!`);
            endGame();
        }
}
      
// stand button pressed
function standButtonPressed() {
        dealerScore = calculateDealerScore();
        if (dealerScore <= 21 && dealerScore >= playerScore) {
            alert(`Dealer Wins!`);
            endGame();
        }
        else {
            alert(`You Win!`);
            endGame();
        }
}
      
// end game
function endGame() {
        playerHand = [];
        dealerHand = [];
        playerScore = 0;
        dealerScore = 0;
        deck = [];
}

// start game
function startGame() {
    createDeck();
    dealCards();
    playerScore = calculatePlayerScore();
    dealerScore = calculateDealerScore();
        if (checkForBlackjack()) {
            if (playerScore === 21) {
                alert(`You Have BlackJack! You Win!`);
                endGame();
            }
            else {
                alert(`Dealer Has BlackJack! Dealer Wins!`);
                endGame();
            }
        }
}

document.querySelector('#deal').addEventListener('click', startGame());
console.log(startGame())

*/