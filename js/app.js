window.onload = function() {

console.log("We're all good here!")
}
function myFunction() {
    var promptAnswer = prompt("Hello, would you like to play Trivia Game, please input 'Yes' or 'No' ");
    	promptAnswer = promptAnswer.toUpperCase();
    	if (promptAnswer === 'YES') {
    	   userName();
      } else if (promptAnswer === 'NO') {
    	   alert('Goodbye');//Done.
      } else {

    }
};

var userName = function(x){//Done.
	var promptUserName = prompt("What is your name?");
	promptUserName = promptUserName.toUpperCase();
	 if (promptUserName !== '') {
	 	alert('Hello, ' + promptUserName);
    	startGame();
	 } else {
	    alert('Thanks for stopping by!');
	}
};

function startGame(){
	alert('Game has started!'); //Start Game logic here.
}

console.log("This is working!");

 //This is the end to window.onload.//