// DECLARED VARIABLES
// ============================

// Variable that starts the game with a win count of zero
var win = 0;

// Variable that strarts the game with a loss count of zero
var loss = 0;

// Variable that starts the player's number at zero
var playerNumber = 0;

// Variable that represents the computer number: a random number is chosen between 20 and 60
var chosenNumber = Math.floor(Math.random() * 60) + 19; 

//Variables for the gem button value: a random number is chosen between 1 and 11 for each button
var buttonNumber = Math.floor(Math.random() * 11) + 1;
var buttonNumberTwo = Math.floor(Math.random() * 11) + 1;
var buttonNumberThree = Math.floor(Math.random() * 11) + 1;
var buttonNumberFour = Math.floor(Math.random() * 11) + 1;

//FUNCTIONS
//============================
function getNewRandomNumbers () {
	buttonNumber = Math.floor(Math.random() * 11) + 1;
	buttonNumberTwo = Math.floor(Math.random() * 11) + 1;
	buttonNumberThree = Math.floor(Math.random() * 11) + 1;
	buttonNumberFour = Math.floor(Math.random() * 11) + 1;	
}
//Function to reset the game
function reset(){
	//Player's Number starts at zero again
	playerNumber = 0;
	//Zero is written to the DOM
	$("#playerNumber").html(playerNumber);
	//New number is chosen
	var chosenNumber = Math.floor(Math.random() * 60) + 19;
	//New number is written to the DOM 
	$("#compNumber").html(chosenNumber);
	//New random numbers are assigned to crystals
	getNewRandomNumbers();
}


//Setting up the win/lose parameters
function gameCheck(){
	//If the Player's Number equals the Computer's Number...
	
	if (playerNumber === chosenNumber){
		//Player is alerted they won
		alert("Scooby-Dooby-Doo! You won!");
		//Add +1 win
		win++;
		//Wins are written to the DOM
		$("#wins").html(win);
		//Run the reset function
		reset();
	};

	//If the Player's Number is greater than the Computer's Number...
	if (playerNumber > chosenNumber){
		//Player is alerted they lost
		alert("Ruh-roh! You lost! Better luck next time!");
		//Add +1 Loss
		loss++;
		//Losses are written to the DOM
		$("#losses").html(loss);
		//Run the reset function
		reset();
	}
}


// MAIN GAME PLAY PROCESS
//=============================

//When page has fully loaded...
$(document).ready(function(){


	//the player's original number of zero is displayed on the screen
	$("#playerNumber").html(playerNumber);
 
		// console.log(chosenNumber);

	//Chosen number is pushed into the compNumber div
	$("#compNumber").html(chosenNumber);

	//When the gem button is clicked, that value is then assigned
	$("#button1").on("click", function(){
			// console.log(buttonNumber);
		//That number is then added to the displayed playerNumber...
		playerNumber += buttonNumber;
		//...and written to the DOM
		$("#playerNumber").html(playerNumber);
		//gameCheck function is run
		gameCheck();
	})

	$("#button2").on("click", function(){
			// console.log(buttonNumberTwo);
		//That number is then added to the displayed playerNumber...
		playerNumber += buttonNumberTwo;
		//...and written to the DOM
		$("#playerNumber").html(playerNumber);
		//gameCheck function is run
		gameCheck();
	})

	$("#button3").on("click", function(){
			// console.log(buttonNumberThree);
		//That number is then added to the displayed playerNumber...
		playerNumber += buttonNumberThree;
		//...and written to the DOM
		$("#playerNumber").html(playerNumber);
		//gameCheck function is run
		gameCheck();
	})

	$("#button4").on("click", function(){
			// console.log(buttonNumberFour);
		//That number is then added to the displayed playerNumber...
		playerNumber += buttonNumberFour;
		//..and written to the DOM
		$("#playerNumber").html(playerNumber);
		//gameCheck function is run
		gameCheck();
	})


}) 