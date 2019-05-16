// function guessNumber() is defining the rules for the game via button
function guessNumber() {
    // defined user input and will be parsed also defined random number generator
    const userInput = parseInt(document.getElementById('userInput').value) 
    const randomNumber = 50

    if (userInput < randomNumber) {
        // if user input is less than number generated alert for wrong guess will appear and correct guess will be hidden
        document.getElementById('wrongGuess').style.visibility ='visible'
        document.getElementById('correctGuess').style.visibility ='hidden'
    }
    if (userInput > randomNumber) {
        // if user input is greater than number generated alert for wrong guess will appear and correct guess will be hidden
        document.getElementById('wrongGuess').style.visibility ='visible'
        document.getElementById('correctGuess').style.visibility ='hidden'
    }
    if (userInput === randomNumber) {
        // if user input matches number generated alert for correct guess will appear and wrong guess will be hidden
        document.getElementById('correctGuess').style.visibility ='visible'
        document.getElementById('wrongGuess').style.visibility ='hidden'
    }
    // this allows for number to clear after each input
    document.getElementById('userInput').value = " "
    // define remainingGuesses equal to pulling guessRemain id from HTML and have it subtract by 1 evertime user guesses a number
    const remainingGuesses = document.getElementById('guessRemain').innerHTML
    document.getElementById('guessRemain').innerHTML = (parseInt(remainingGuesses) -1)
    //how to make remaingingGuesses not to go below 0
}


//creating a button with a restart function named restartGame() set equal to 10
function restartGame() {
    document.getElementById('guessRemain').innerHTML = 10
}

