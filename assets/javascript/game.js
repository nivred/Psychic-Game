$(document).ready(function() {
	$('#main-content').fadeIn(1000);
	$('#masthead').fadeIn(4000);
});

var letters = "abcdefghijklmnopqrstuvwxyz";			//available letters to choose from
var randomizer = Math.floor(Math.random()*letters.length); //pick one random letter within alphabet
var randomLetter = letters[randomizer];				//assign that letter location to random letter variable
var wins = 0;										//set wins to zero
var losses = 0;										//set losses to zero
var turns = 10;										//allow ten turns
var lettersUsed = "";								//placeholder for used letters

document.onkeydown = function(event) {				//when key pressed perform the following function
	var userGuess = event.key.toLowerCase();		//set any key pressed to lowercase and assign value to variable

	if(lettersUsed.indexOf(userGuess) > -1){		//if key pressed is duplicate
		alert("You Already Tried The Letter: " + 	//alert user of duplicate entry
		userGuess);
	}

	if(letters.indexOf(userGuess) == -1) {			//if key pressed not a valid choice from alphabet
		alert(userGuess + " Is Not A Letter");		//alert user of none valid entry
	}
	
	if(lettersUsed.indexOf(userGuess) == -1 		//if key pressed has not all ready been used
		&& (letters.indexOf(userGuess)) >= 0) {		//AND key pressed is a valid choice from alphabet
		

		lettersUsed += userGuess;					//add key pressed to the value of letters used

		if(userGuess == randomLetter) {				//if key pressed matches random generated letter
			alert("You Win, Go Again?");			//alert that user has won
			wins++;									//increment wins
		}else {
			turns--;								//else decriment number of turns
		}
	}

	if(turns == 0) {								//if turns equal zero
		alert("You Lose, Try Again?");				//alert that user has lost
		losses++;									//increment losses
		turns = 10;									//reset turns back to 10
		lettersUsed = "";
	}

	document.getElementById("scoreBoard").innerHTML = 	//locate element by the ID scoreBoard inside HTML 
	"<p>Wins: " + wins + "</p><p>Losses: " +		//place the following tags, contents, and variables
	losses + "</p><p>Guesses Left: " + turns +		//within HTML document
	"</p><p>Your Guesses So Far:<br><p id=guesses>" 
	+ lettersUsed + "</p>"	
}