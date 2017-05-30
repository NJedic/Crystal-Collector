// DECLARED VARIABLES
// ============================

// Variable that starts the game with a win count of zero
var win = 0;

// Variable that strarts the game with a loss count of zero
var loss = 0;

// Variable that starts the player's number at zero
var playerNumber = 0;

// Variable that represents the computer number: a random number is chosen between 20 and 60
var chosenNumber = Math.floor(Math.random() * 60) + 20; 

//FUNCTIONS
//============================

//Function to reset the game if you win
function resetW(){
	//+1 Win
	win++;
	//Wins are written to the DOM
	$("#wins").html(win);
	//Player's Number starts at zero again
	playerNumber = 0;
	//Zero is written to the DOM
	$("#playerNumber").html(playerNumber);
	//New number is chosen and written to the DOM
	var chosenNumber = Math.floor(Math.random() * 60) + 20; 
	$("#compNumber").html(chosenNumber);
}

//Function to reset the game if you lose
function resetL(){
	//+1 Loss
	loss++;
	//Losses are written to the DOM
	$("#losses").html(loss);
	//Player's Number starts out at zero again
	playerNumber = 0;
	//Zero is written to the DOM
	$("#playerNumber").html(playerNumber);
	//New number is chosen and written to the DOM
	var chosenNumber = Math.floor(Math.random() * 100) + 20; 
	$("#compNumber").html(chosenNumber);
}



//Setting up the win/lose parameters
function gameCheck(){
	//If the Player's Number equals the Computer's Number...
	
	if (playerNumber == chosenNumber){
		//Player is alerted they won
		alert("You win!");
		//Game resets with +1 win
		resetW();
	};

	//If the Player's Number is greater than the Computer's Number...
	if (playerNumber > chosenNumber){
		//Player is alerted they lost
		alert("You Lose! Try Again!");
		//Game resets with +1 Loss
		resetL();
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

	// for the gem button value: a random number is chosen between 1 and 11 for each button
	var buttonNumber = Math.floor(Math.random() * 11) + 1;
	var buttonNumberTwo = Math.floor(Math.random() * 11) + 1;
	var buttonNumberThree = Math.floor(Math.random() * 11) + 1;
	var buttonNumberFour = Math.floor(Math.random() * 11) + 1;

	//When the gem button is clicked, that value is then assigned and pushed to an array
	$("#button1").on("click", function(){
		$("#button1").val(buttonNumber);
			console.log(buttonNumber);
		playerNumber += buttonNumber;
		$("#playerNumber").html(playerNumber);
		gameCheck();
	})

	$("#button2").on("click", function(){
		$("#button2").val(buttonNumberTwo);
			console.log(buttonNumberTwo);
		playerNumber += buttonNumberTwo;
		$("#playerNumber").html(playerNumber);
		gameCheck();
	})

	$("#button3").on("click", function(){
		$("#button3").val(buttonNumberThree);
			console.log(buttonNumberThree);
		playerNumber += buttonNumberThree;
		$("#playerNumber").html(playerNumber);
		gameCheck();
	})

	$("#button4").on("click", function(){
		$("#button4").val(buttonNumberFour);
			console.log(buttonNumberFour);
		playerNumber += buttonNumberFour;
		$("#playerNumber").html(playerNumber);
		gameCheck();
	})


}) 