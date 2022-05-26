let randomNumber = Math.ceil(Math.random() * 100);
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
function checkGuess() {
    let inputNumber = parseInt(userInput.value)
    if (randomNumber === inputNumber) {
        gameResult.textContent = "Congratulations! You got it right."
        gameResult.style.backgroundColor = "green"
    }
    else if (randomNumber > inputNumber) {
        gameResult.textContent = "Too Low! Try Again."
        gameResult.style.backgroundColor = "#1e217c"
    }
    else if (randomNumber < inputNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else {
        gameResult.textContent = "Please Provide Valid Input";
        gameResult.style.backgroundColor = "red";
    }
    
}