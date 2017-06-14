var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function () {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again."); 
		}
	};

var flipCard = function (cardId) {
	console.log( "Player flipped " + cards[cardId] + ".");
	cardsInPlay.push(cards[cardId]);
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
