<!DOCTYPE html>
<html>
<body>

<p id="demo">Come play a game...</p>

<p id="result"></p>

<button onclick="rockpaperscissor()">Play!</button>

<script>
function rockpaperscissor() {
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 

var compare = function (choice1,choice2) {
    if (choice1 === choice2){
    return "The result is a tie!";
    }
    else if (choice1 === "rock"){
        if (choice2 === "scissors"){
            return "rock wins";
        }
        else {
            return "paper wins";
        }
    }
    else if (choice1 === "paper"){
        if (choice2 === "rock"){
            return "paper wins";
        }
        else {
            return "scissors  wins";
        }
    }
    else if (choice1 === "scissors"){
        if (choice2 === "paper"){
            return "scissors wins";
        }
        else {
            return "rock  wins";
        }
    }
    else {
    	return "Not a valid answer.";
    }
};
     
document.getElementById("result").innerHTML ="Computer: " + computerChoice;

document.getElementById("result").innerHTML ="You: " + userChoice;

document.getElementById("result").innerHTML = compare(userChoice,computerChoice);
}
</script>

</body>
</html>
