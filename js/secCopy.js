window.onload = function() {

console.log("We're all good here!");
}



// createGame();
document.getElementById("newPlayer").addEventListener('click', newPlayer);// Function starts game.

///////////////////////////////////////////////////////////////////
function newPlayer(){

	console.log('was clicked');
	var promptAnswer = prompt("Hello, would you like to play Trivia Game?").toLowerCase();

	  if (promptAnswer == "yes") {
		alert("Nice, let's do it!");
		newGame();
	} else {

	alert("See you next time!")
	return;
	}
};

var questions = [// Array of nested objects. Arrays start at '0'.
	//  Ipsum
	[
		// questions[0][0]

	{question: "Keytar cornhole vinyl live-edge blog.",//Done.
	answer: "Hipster",
	value: 1000},
	// question[0][1]

	{question: "Sausage bacon short ribs venison turducken.",//Done.
	answer: "Bacon",
	value: 2000},

	// questions[0][2]

	{question: "Chuck Norris ordered a Big Mac at Burger King, and got one.",//Done.
	answer: "Chuck Norris",
	value: 3000},

	// questions[0][3]
	{question: "Shed everywhere shed everywhere stretching attack your ankles.",//Done.
	answer: "Cat",
	value: 4000},

	],
		// Music
	[

	  	// questions[1][0]
	{question: "He won a Grammy for 'Best Pop Vocal Album' in 2015.",
	answer: "Sam Smith",
	value: 1000},

	// questions[1][1]
	{question: "In 2015, this artist performed during the Superbowl half time show.",
	answer: "Katy Perry",
	value: 2000},

	// questions[1][2]
	{question: "This artist's real name is Stacy Ferguson.",
	answer: "Fergie",
	value: 3000},

	// questions[1][3]
	{question: "Rihanna and Kanye West recorded the song 'FourFiveSeconds' with this legendary English songwriter.",
	answer: "Paul McCartney",
	value: 4000},


	],
		// Movies
	[

	// questions[2][0]
	{question: " 'To infinity and beyond...' ",
	answer: "Toy Story",
	value: 1000},

	// questions[2][1]
	{question: "Tom Cruise said 'show me the money' in this 1996 film.",
	answer: "Jerry Maguire",
	value: 2000},

	// question[2][2]
	{question: " 'Mama always said life was like a box of chocolates. You never know what you're gonna get.' ",
	answer: "Forrest Gump",
	value: 3000},

	// question[2][3]
	{question: " 'This is Sparta!' ",
	answer: 300,
	value: 4000},


	],

	//Food

	[
	// question[3][0]

	{question: "To be embarrased is to have this 'on one\'s face'.",
	answer: "Egg",
	value: 1000},

	// questions[3][1]

	{question: "Hot out of the oven is one of these stuffed pizza turnovers of Naples.",
	answer: "Calzone",
	value: 2000},

	// question[3][2]

	{question: "This is believed to be the only food that never spoils.",
	answer: "Honey",
	value: 3000},

	// question[3][3]

	{question: "Some recipes for this sweet treat call for beets instead of food coloring.",
	answer: "Red Velvet Cake",
	value: 4000},

	]

];



var playerScore = 0; // Player score var.



var newGame = function() {			//Created 'for loop' to dynamically create  all question divs.
	for ( var i = 0; i < 4;  i++) {

		var colId = `#col${i}`; //Creating the column ID when looping.

		var colDiv = $(colId); // Used swtich statment to calling the ID.
		switch(i) {
			case 0:
				colDiv.html('Ipsum');//This is just naming the columns of [i];
				break;
			case 1:
				colDiv.html('Music');
				break;
			case 2:
				colDiv.html('Movies');
				break;
			case 3:
				colDiv.html('Food');
				break;

		};

			for (var j = 0; j < questions[i].length; j++) { // Used nested 'for loop' to loop through the questions and set the attributes.
				var newQuestion = $('<div>');
				// newQuestion.html(questions[i][j].question);
				newQuestion.attr('question', questions[i][j].question)
						   .attr('answer', questions[i][j].answer)
						   .attr('value', questions[i][j].value);
				newQuestion.html(questions[i][j].value); // Input questions and assigned point value to front of questions.
				newQuestion.on('click', clickedQuestion);// Created event listener for clickedQuestions().
				colDiv.append(newQuestion);

			}

	}

};


function clickedQuestion(){
	console.log('question was clicked');//Test functionality.

	var userName = prompt($(this).attr('question'));
	var points = parseInt($(this).attr('value'));//ParseInt string to points.


		if (userName ===($(this).attr('answer'))) {
			console.log('If statement...');
			playerScore += points;//Append player's score to score var.
		} else {
			playerScore -= points;

		}
		$('#playerScore').html(playerScore);
}


// div.addEventListener("mouseover", changeBackgroundToBlue);
// 	    function changeBackgroundToBlue (){
// 	      this.style.backgroundColor = "yellow";
// 	  }

// 	  div.addEventListener("mouseout", changeBackgroundToTeal);
// 	    function changeBackgroundToTeal (){
// 	      this.style.backgroundColor = "#108f8b";
// 	  }



