//array of possible letters
var letters = ["a","b","c","d","e","f","g","h","i","j","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

console.log(letters)

//randomly chose one of the letters
var userGuess = ""
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var usedArray = [];
var userGuessSpan = document.getElementById("userGuess")
var usedArraySpan = document.getElementById("usedArray")
var winSpan = document.getElementById("wins")
var lossSpan = document.getElementById("losses")
var guessesLeftSpan = document.getElementById("guessesLeft")
//diplay text to users screen.
usedArraySpan.textContent = "Your Guesses So Far: " + usedArray
winSpan.textContent = "Wins: " + wins
lossSpan.textContent = "Losses: " + losses
guessesLeftSpan.textContent = "Guesses Left: " + guessesLeft
//get random letter

var randomLetter = Math.floor(Math.random()* letters.length);
var computerChoice = letters[randomLetter];

console.log(computerChoice);

//add a listner for the user to press a key

document.onkeyup = function(event) {
    var userChoice = event.key;

    //make sure user selects a letter that is in the array.


   // reset the computer choice if the user loses
    //if the guess is equal to or less than 0
    if (guessesLeft === 0){
        losses++;
        lossSpan.textContent = "Losses: " + losses;
        console.log("You Lost!")
        guessesLeft = 10
        usedArray = []                
        usedArraySpan.textContent = "Your Guesses So Far: " + usedArray;
        randomLetter = Math.floor(Math.random() * letters.length);
        computerChoice = letters[randomLetter];
        console.log(computerChoice);
    }

    //if the computer guess and useerguess is the same add a point
    if (computerChoice === userChoice){
        console.log("you won!")
        wins++;
        winSpan.textContent = "Wins: " + wins;
        usedArray = [];
        usedArraySpan.textContent = "Your Guesses So Far: " + usedArray;
        randomLetter = Math.floor(Math.random() * letters.length);
        computerChoice = letters[randomLetter];
        console.log(computerChoice);
        guessesLeft = 10
        guessesLeftSpan.textContent = "Guesses Left: " + guessesLeft--;
    }
    else {
        console.log("Guess again!")
        guessesLeft--;
        guessesLeftSpan.textContent = "Guesses Left: " + guessesLeft;
        usedArray.push(userChoice);
        usedArraySpan.textContent = "Your Guesses So Far: " + usedArray;
    }



}
