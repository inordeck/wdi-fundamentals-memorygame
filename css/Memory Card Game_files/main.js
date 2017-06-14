console.log("Up and running!");
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var cardOne = [0];
cardsInPlay.push(cardOne);
console.log("Player flipped queen");
var cardTwo = [1];
cardsInPlay.push(cardTwo);
console.log("Player flipped queen");

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else if (cardsInPlay[0] !== cardsInPlay[1]) {
		alert("Sorry, try again."); 
	}	

