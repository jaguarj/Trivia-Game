window.onload = function() {

console.log("We're all good here!")
}
function acknowledgeUser () {
    var promptAnswer = prompt("Hello, would you like to play Trivia Game, please input 'Yes' or 'No'. ");
    	promptAnswer = promptAnswer.toUpperCase();
    	if (promptAnswer === 'YES') {
    	   userName();
      } else if (promptAnswer === 'NO') {
    	   alert('See you next time!');//Done.
      } else {

    }
};

var userName = function(x){//Done.
	var promptUserName = prompt("What is your name?");
	promptUserName = promptUserName.toUpperCase();
	 if (promptUserName !== '') {
	 	alert('Hello, ' + promptUserName + '!');
    	startGame();
	 } else {
	    alert('Thanks for stopping by!');
	}
};

function startGame(){
	// making question/answer boxes
	for ( var i = 0; i < 6; i++) {
	// horizontal container for Q&A
	var container = document.createElement('div');
	container.className = 'container';
	// question embedded in container
	var question = document.createElement('div');
	question.className = 'question';
	container.appendChild(question);



	for (var j=0; j < 5; j++) {
		var answer = document.createElement('div');
		answer.className = 'answer';
		question.appendChild(answer);

		}
		// Last line of first for loop is appending
		document.getElementById('child').append(container);
	}
};

createGame();

console.log("This works with John's assistence.")




alert('Game has started!'); //Start Game logic here.

console.log("This is working!");


