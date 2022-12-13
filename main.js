
// start game
function startGame() {
    // shuffleDeck();
     dealCards();
     playerScore = calculateFirstPlayerScore();
     dealerScore = calculateFirstDealerScore();
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

// Create deck of cards
const values = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'J', 'Q', 'K', 'A'];
const suits = ["♠", "♣", "♥", "♦"];
let deck = [];

//Create cards
for (let i = 0; i < values.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    let card = { Value: values[i], Suit: suits[j] };
    deck.push(card);
  }
}
//console.log(deck) 

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

let playerCard1 = playerCards[0];
let playerCard2 = playerCards[1];
let dealerCard1 = dealerCards[0];
let dealerCard2 = dealerCards[1];

let i=0 
let j=0 
let card = {Value: values[i], Suit: suits[j]}

//console.log(playerCards)
//console.log(dealerCards)

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
function calculateFirstPlayerScore() {
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
//console.log(playerCard1)
//console.log(playerCard2)
calculateFirstPlayerScore()
console.log(calculateFirstPlayerScore())

let playerScore = calculateFirstPlayerScore

// calculate dealer's score
function calculateFirstDealerScore() {
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

console.log(dealerCards)
calculateFirstDealerScore()
console.log(calculateFirstDealerScore())

let dealerScore = calculateFirstDealerScore
console.log(dealerScore())

// check for blackjack
function checkForBlackjack() {
    if (playerScore === 21){
        console.log("Player BlackJack!!!");
        return true;
    }
        else if (dealerScore === 21){
            console.log("Dealer BlackJack!!!")
            return true;
        } else {
        return false;
    }   
}

checkForBlackjack();


document.querySelector("#player-card1").innerHTML = `<h4> ${playerCards[0].Value} ${playerCards[0].Suit}</h4>`;
document.querySelector("#player-card2").innerHTML = `<h4> ${playerCards[1].Value} ${playerCards[1].Suit}</h4>`
document.querySelector("#player-score").innerHTML = `<h4>Score: ${playerScore()}</h4>`;

document.querySelector("#dealer-card1").innerHTML = `<h4> ${dealerCards[0].Value}  ${dealerCards[0].Suit}</h4>`;
document.querySelector("#dealer-card2").innerHTML = `<h4> ${dealerCards[1].Value} ${dealerCards[1].Suit}</h4>`;
document.querySelector("#dealer-score").innerHTML = `<h4>Score: ${dealerScore()}</h4>`;


let hitButtonCounter = 0 
function hitButtonPressed(){
    hitButtonCounter++; 
}

h = hitButtonCounter 
let h2 = hitButtonCounter++

// end game
function endGame() {
    playerCards = [];
    dealerCards = [];
    playerScore = 0;
    dealerScore = 0;
    deck = [];
    startGame();
}

//hit
function hit(){
    playerCards.push(shuffleDeck.pop());
    
    document.querySelector("#player-card3").innerHTML = `<h4> ${playerCards[2].Value} ${playerCards[2].Suit} </h4>`;
    document.querySelector("#player-score").innerHTML = `<h4>Score: ${playerScore}</h4>`;
    checkForBlackjack();
    console.log(`Player's score is ${playerScore}`);
    if (playerScore > 21) {
        dealerScore = calculateFirstDealerScore();
        alert(`You Bust! Dealer Wins!`);
        endGame();
    }
    else if (playerScore === 21) {
        alert(`You Have BlackJack! You Win!`);
        endGame();
    }
}


hitButtonPressed();

//stand
function stand(){
    let dealerScore = calculateFirstDealerScore();
    console.log(`Dealer's cards: `);
    console.log(dealerCards);
    console.log(`Dealer's score is ${dealerScore}`);
    
     while (dealerScore < 17) {
        dealerCards.push(shuffleDeck.pop());
        dealerScore = calculateFirstDealerScore();
        console.log(`Dealer's cards: `);
        console.log(dealerCards);
        console.log(`Dealer's score is ${dealerScore}`);
    }
    
    if (dealerScore > 21) {
        console.log("Dealer busts! You win!");
    } else if (dealerScore > playerScore) {
        console.log("Dealer wins!");
    } else if (dealerScore < playerScore) {
        console.log("You win!");
    } else if (dealerScore === playerScore) {
        console.log("Push!");
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




// stand button pressed
function standButtonPressed() {
        dealerScore = calculateFirstDealerScore();
        if (dealerScore <= 21 && dealerScore >= playerScore) {
            alert(`Dealer Wins!`);
            endGame();
        }
        else {
            alert(`You Win!`);
            endGame();
        }
}

document.getElementById('stand-button').addEventListener('click', standButtonPressed);


startGame()