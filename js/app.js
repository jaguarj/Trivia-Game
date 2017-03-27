window.onload = function() {

console.log("We're all good here!");
}

// console.log("This is working!");
// function acknowledgeUser () {
//     var promptAnswer = prompt("Hello, would you like to play Trivia Game, please input 'Yes' or 'No'. ");
//     	promptAnswer = promptAnswer.toUpperCase();
//     	if (promptAnswer === 'YES') {
//     	   userName();
//       } else if (promptAnswer === 'NO') {
//     	   alert('See you next time!');//Done.
//       } else {
//     }
// };

// var userName = function(x){//Done.
// 	var promptUserName = prompt("What is your name?");
// 	promptUserName = promptUserName.toUpperCase();
// 	 if (promptUserName !== '') {
// 	 	alert('Hello, ' + promptUserName + '!');
//     	startGame();
// 	 } else {
// 	    alert('Thanks for stopping by!');
// 	}
// };



// createGame();
document.getElementById("newPlayer").addEventListener('click', newPlayer);

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
//Good here.
// document.getElementById("newPlayer").addEventListener('click', newPlayer);

var newGame = function() {



	var correctAnswers = 0;
	var questions = [
	  //ipsum array
	  [
	  		// questions[0][0]
		  {question: "Keytar cornhole vinyl live-edge blog.",//Done.
		  answer: "Hipster",
		  value: 1000},

		  {question: "Sausage bacon short ribs venison turducken.",//Done.
		   answer: "Bacon",
		   value: 2000},



	  ]
	  {value: "Ipsum"},
	  {value: "Music"},
	  {value: "Name the Movie"},
	  {value: "Food"},


	  // {question: "Keytar cornhole vinyl live-edge blog.",//Done.
	  // answer: "Hipster",
	  // value: 1000},

	  {question: "He won a Grammy for 'Best Pop Vocal Album' in 2015.",
	   answer: "Sam Smith",
	   value: 1000},

	  {question: " 'To infinity and beyond...' ",
	   answer: "Toy Story",
	   value: 1000},

	  {question: "To be embarrased is to have this 'on one\'s face'.",
	   answer: "Egg",
	   value: 1000},

	  {question: "What is the largest country in South America?",
	   answer: "Brazil",
	   value: 1000},
////////////////////////////////////////////////////////////////////////////////

	  // {question: "Sausage bacon short ribs venison turducken.",//Done.
	  //  answer: "Bacon",
	  //  value: 2000},

	  {question: "In 2015, this artist performed during the Superbowl half time show.",
	   answer: "Katy Perry",
	   value: 2000},

	  {question: "Tom Cruise said 'show me the money' in this 1996 film.",
	   answer: "Jerry Maguire",
	   value: 2000},

	  {question: "Hot out of the oven is one of these stuffed pizza turnovers of Naples.",
	   answer: "Calzone",
	   value: 2000},

	  {question: "Ottawa is this country's capital.",
	   answer: "Canada",
	   value: 2000},
////////////////////////////////////////////////////////////////////////////////
	  {question: "Chuck Norris ordered a Big Mac at Burger King, and got one.",//Done.
	   answer: "Chuck Norris",
	   value: 3000},

	  {question: "This artist's real name is Stacy Ferguson.",
	   answer: "Fergie",
	   value: 3000},

	  {question: " 'Mama always said life was like a box of chocolates. You never know what you're gonna get.' ",
	   answer: "Forrest Gump",
	   value: 3000},

	  {question: "This is believed to be the only food that never spoils.",
	   answer: "Honey",
	   value: 3000},

	  {question: "What country has more volcanoes than any other?",
	   answer: "Indonesia",
	   value: 3000},
////////////////////////////////////////////////////////////////////////////////
	  {question: "Shed everywhere shed everywhere stretching attack your ankles.",//Done.
	   answer: "Cat",
	   value: 4000},

	  {question: "Rihanna and Kanye West recorded the song 'FourFiveSeconds' with this legendary English songwriter.",
	   answer: "Paul McCartney",
	   value: 4000},

	  {question: " 'This is Sparta!' ",
	   answer: 300,
	   value: 4000},

	  {question: "Some recipes for this sweet treat call for beets instead of food coloring.",
	   answer: "Red Velvet Cake",
	   value: 4000},

	  {question: "What is Europe's most mountainous country?",
	   answer: "Switzerland",
	   value: 4000},
////////////////////////////////////////////////////////////////////////////////

	]//End of array of objects.

//For loop loops through the arrary of objects and creates divs.
	for (var i = 0; i < questions.length; i++) {
	  var div = document.createElement("div");
	  div.className += "newDiv";
	  // var colI = $(`#col${i}`);
	  console.log(`#col${i}`);
	  // div.appendChild(colI);

//div.textContent to inject questions.
	  div.textContent = questions[i].value;//Here is where the topics are.
	  div.setAttribute("question", questions[i].question)
	  div.setAttribute("answer", questions[i].answer)
	  div.setAttribute("value", questions[i].value)
	  div.addEventListener("click", function(){
////////////////////////////////////////////////////////////////////
	    var input = prompt(this.getAttribute("question"));
	    var answer = this.getAttribute("answer");
	    var points = this.getAttribute("value");

	    if (input == answer){
	      correctAnswers +=parseInt(points);
	      alert("Good job! You have " + correctAnswers + " points.");
	      //
	    }

	    else {
	      correctAnswers -=parseInt(points)
	      alert("Sorry, that's wrong. You have " + correctAnswers + " points now.");
	    }

	  })

	  div.addEventListener("mouseover", changeBackgroundToBlue);
	    function changeBackgroundToBlue (){
	      this.style.backgroundColor = "yellow";
	  }
	  div.addEventListener("mouseout", changeBackgroundToTeal);
	    function changeBackgroundToTeal (){
	      this.style.backgroundColor = "#108f8b";
	  }
	  document.body.appendChild(div);
	}
}// newGame function ending bracket.

//End bracket of window.onload.




