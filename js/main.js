var cards = [
 {
  rank: "Queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
 },
 {
  rank: "Queen",
  suit: "diamonss",
  cardImage: "images/queen-of-diamonds.png"
 },
 {
   rank: "King",
   suit: "hearts",
   cardImage: "images/king-of-hearts.png"
 },
 {
   rank: "King",
   suit: "diamonds",
   cardImage: "images/king-of-diamonds.png"
 }
];
var cardsInPlay = [];

var checkForMatch = function () {
 this.setAttribute(cards[cardId].cardImage);
 if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
 } else {
  alert("Sorry, try again.");
 }
};

var flipCard = function () {
 var cardID = this.getAttribute("data-id");
 console.log( "Player flipped " + cards[cardId].rank + ".");
 cardsInPlay.push(cards[cardId].rank);
 console.log(cards[cardId].cardImage);
 console.log(cards[cardId].suit);
 checkForMatch();
};

var createBoard = function () {
 for (i = 0; i < cards.length; i++) {
 var cardElement = document.createElement("img");
 cardElement.setAttribute("cardElement", src = "images/back.png");
 cardElement.setAttribute("data-id", i);
 cardElement.addEventListener("click", flipCard);
 document.getElementById("game-board").appendChild(cardElement);
 }
};
createBoard();
