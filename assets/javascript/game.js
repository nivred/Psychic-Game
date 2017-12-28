// fade in at game start
$(document).ready(function() {
	$('#masthead').fadeIn(1500);
	$('#instructions').hide().delay(500).fadeIn(2000);
});
// available letters to choose from
var letters = "abcdefghijklmnopqrstuvwxyz";
// generate random value
var randomizer = Math.floor(Math.random()*letters.length);
// assign letter using random value
var randomLetter = letters[randomizer];
// background image URL
var imageUrl = "assets/images/fortune.jpg";
var imageUrl2 = "assets/images/fortune2.jpg";
// set initial scoreboard variables
var wins = 0;
var losses = 0;
var turns = 10;
var lettersUsed = "";
var message
// perform the following function when a key is pressed
document.onkeydown = function(event) {
	message = "";
	// reset background image
	$('body').css('background-image','url(' + imageUrl + ')');
	// hide instructions
	$('#instructions').hide();
	// set message value to empty
	console.log(randomLetter);			
	// set any key pressed to lowercase
	var userGuess = event.key.toLowerCase();
	// alert user of duplicate entry
	if(lettersUsed.indexOf(userGuess) > -1){
		message = '"' + userGuess.toUpperCase() + '"' + " already been used";
	}
	// alert user of invalid entry
	if(letters.indexOf(userGuess) == -1) {
		message = '"' + userGuess.toUpperCase() + '"' + " is not a letter";
	}
	// if not already used AND valid entry, add to letters used
	if(lettersUsed.indexOf(userGuess) == -1
		&& (letters.indexOf(userGuess)) >= 0) {
		lettersUsed += userGuess + " ";
		// if letter guessed correctly
		if(userGuess == randomLetter) {
			// change background image, alert user, increment wins, and reset game
			$('body').fadeTo(100, 0, function() {
				$(this).css('background-image','url(' + imageUrl2 + ')');
			}).fadeTo(1000, 1);
			message = "You Win!<br>The letter was " + '"' + 
			userGuess.toUpperCase() + '".' + "<br>Select any letter<br>to play again.";			
			wins++;
			resetGame();
		} else {
			// if no match, decrement turns available
			turns--;
		}
	}
	// if turns reach zero alert user and add to losses then reset game
	if(turns == 0) {
		message = "You Lose.<br> The letter was " + 
		'"' + userGuess.toUpperCase() + '".' + "<br>Select any letter<br>to try again.";			
		losses++;
		resetGame();		
	}
	// reset Turns and Letters Used and generate new random letter
	function resetGame(){
		turns = 10;
		lettersUsed = "";
		randomizer = Math.floor(Math.random()*letters.length);
		randomLetter = letters[randomizer];
	}
	// display Wins, Losses, Guesses Left, Guessed Letters, and Alerts
	$("#scoreBoard").html("<p>Wins: " + wins + "</p><p>Losses: " + losses + 
	"</p><p>Guesses Left: " + turns + "</p><br><p>Your Guesses So Far:</p><p id=guesses>"  + 
	lettersUsed + "</p><p id=alerts>" + message + "</p>");
};