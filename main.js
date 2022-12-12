// Create deck of cards
let values = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine','J', 'Q', 'K', 'A'];
let suits = ["Clubs", "Diamonds", "Hearts", "Spades"];

// create and shuffle deck
function createDeck() {
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Suit: suits[i], Value: values[j]};
                deck.push(card);
            }
        }
        shuffleDeck();
}

// Create the player's hand
let playerHand = [];
let playerScore = 0;

// Create the dealer's hand
let dealerHand = [];
let dealerScore = 0;

let deck = cardValue + suits

// Create a hit function that takes a hand as a parameter and draws a card
function hit(hand) {
    let card = deck[Math.floor(Math.random() * deck.length)];
    hand.push(card);
    return hand;
}

// deal cards to player and dealer
function dealCards() {
    playerHand.push(deck.shift());
    dealerHand.push(deck.shift());
    playerHand.push(deck.shift());
    dealerHand.push(deck.shift());
}

// Create a function to calculate the total value of a hand
function calculateHand(hand) {
    let total = 0;
    for (let i = 0; i < hand.length; i++) {
        if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K") {
            total += 10;
        } else if (hand[i] === "A") {
            if (total +11 > 21){
                total+= 11;
                } else {
                    total += 1;
                }
        } else {
            total += hand[i];
        }
    }
}

// calculate player's score
function calculatePlayerScore() {
    let score = 0;
    let hasAce = false;
        for (let i = 0; i < playerHand.length; i++) {
            let card = playerHand[i];
            score += getCardNumericValue(card);
            if (card.value === "Ace") {
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
            if (card.value === "Ace") {
                hasAce = true;
            }
        }
        if (hasAce && score + 10 <= 21) {
            return score + 10;
        }
        return score;
}

// get card numeric value
function getCardNumericValue(card) {
        switch (card.Value) {
            case "Ace":
                return 1;
            case "Two":
                return 2;
            case "Three":
                return 3;
            case "Four":
                return 4;
            case "Five":
                return 5;
            case "Six":
                return 6;
            case "Seven":
                return 7;
            case "Eight":
                return 8;
            case "Nine":
                return 9;
            default:
                return 10;
        }
}

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
