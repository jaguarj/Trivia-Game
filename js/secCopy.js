window.onload = function() {
console.log("We're all good here!");
}

// createGame();
document.getElementById("newPlayer").addEventListener('click', newPlayer);// Function starts game.
$('#resetButton').click(function() {
	location.reload();
});
///////////////////////////////////////////////////////////////////
function newPlayer(){
	console.log('was clicked');
	var promptAnswer = prompt("Hello, would you like to play Trivia Game?").toLowerCase(console.log("hello?"));
	  if (promptAnswer == "yes") {
		alert("Nice, let's do it!");
		newGame();
	} else {
	alert("See you next time!")
	return;
	}
};


var questions = [// Array of nested objects.
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
		// Clasic Punk Music
	[

	// questions[1][0]

	{question: "The hit song, Boys Don't Cry, was written by what band? ",
	answer: "The Cure",
	value: 1000},

	// questions[1][1]

	{question: "The Undertones are best known for what song?.",
	answer: "Teenage Kicks",
	value: 2000},

	// questions[1][2]

	{question: "Kola Kola, Clampdown and Spanish Bombs are songs written by this British band?",
	answer: "The Clash",
	value: 3000},

	// questions[1][3]

	{question: "The lead singer of the Buzzcocks, Howard Devoto, also fronted what other band?.",
	answer: "Magazine",
	value: 4000},
	],

	// Witty quotes
	[
	// questions[2][0]

	{question: " Give a man a match, and he'll be warm for a minute, but set him on fire, and he'll be warm for the rest of his _____. ",
	answer: "life",
	value: 1000},

	// questions[2][1]

	{question: "When people talk to God, it's called prayer. When God talks back, it's called ________.",
	answer: "schizophrenia",
	value: 2000},

	// question[2][2]

	{question: "Don't sweat the petty things, and don't _____ the sweaty things! ",
	answer: "pet",
	value: 3000},

	// question[2][3]

	{question: "Everyone must believe in something. I believe I'll have another _____. ",
	answer: "drink",
	value: 4000},
	],

	//Nerdy Stuff

	[
	// question[3][0]

	{question: "How many bits was the Nintendo 64?",
	answer: "64",
	value: 1000},

	// questions[3][1]

	{question: "True or false? Is Samus from Metroid a woman?",
	answer: "true",
	value: 2000},

	// question[3][2]

	{question: "What fraternity do the nerds join in the first Revenge of the Nerds film?",
	answer: "Lambda Lambda Lambda",
	value: 3000},

	// question[3][3]

	{question: "A hobbit is also know as a what?",
	answer: "halfling",
	value: 4000},
	]

];

var playerScore = 0; // Player score var.
var newGame = function() {//Created 'for loop' to dynamically create all question divs.
	for (var i = 0; i < 4;  i++) {
		var colId = `#col${i}`; //Creating the column ID when looping.
		var colDiv = $(colId); // Used swtich statment to calling the ID.
		switch(i) {
			case 0:
				colDiv.html('Ipsum');//This is just naming the columns of [i];
				break;
			case 1:
				colDiv.html('Classic Punk Rock');
				break;
			case 2:
				colDiv.html('Witty Quotes');
				break;
			case 3:
				colDiv.html('Nerdy Stuff');
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
			// setTimeout(function(){ alert("Hello"); }, 3000);
	}
};

function clickedQuestion(){
	console.log('question was clicked');//Test functionality.
	var userName = prompt($(this).attr('question'));
	var points = parseInt($(this).attr('value'));//ParseInt string to points.

		if (userName ===($(this).attr('answer').toLowerCase())) {
			console.log('If statement...');
			playerScore += points;//Append player's score to score var.
		} else {
			playerScore -= points;
		}
		$('#playerScore').html(playerScore);
}

