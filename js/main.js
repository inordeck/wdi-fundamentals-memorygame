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
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else {
			alert("Sorry, try again."); 
		}
	};

var flipCard = function (cardId) {
	console.log( "Player flipped " + cards[cardId].rank + ".");
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	checkForMatch();
	};

flipCard(0);
flipCard(2);

//	var cardOne = cards[0];
//	cardsInPlay.push(cardOne);
//	console.log("Player flipped queen");
//	var cardTwo = cards[3];
//	cardsInPlay.push(cardTwo);
//	console.log("Player flipped king");
