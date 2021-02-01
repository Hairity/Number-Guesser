// GAME FUNCTION: 
// - Player must guess a number between a min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if loose 
// - Let player choose to play again

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


// Assing UI min and max
minNum.textContent = min;
maxNum.textContent = max;
      
// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log

  // Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max},`, 'red');
  }

// Check if won
if(guess === winningNum){


  // // Game Over = WON
  // // Disable input
  // guessInput.disabled = true;
  // // Change border green
  // guessInput.style.borderColor = 'green';
  // // Set message
  // setMessage(`Hoorrayy! ${winningNum} is correct!`, 'green');
  gameOver(true, `${winningNum} was correct! Good Job!`, 'green')
  
} else {
  // Wrong number
  guessesLeft -= 1;

  if(guessesLeft === 0){
    // Game Over = LOST
    guessInput.disabled = true;
    // Change border red
    guessInput.style.borderColor = 'red';
    // Set message
    setMessage(`Too bad, GAME OVER. The correct number was ${winningNum}`, 'red')
   
    guessInput.style.borderColor = 'red';
  
  } else {

  // Clear input
  guessInput.value = '';

   // Game continues - answer wrong
   setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

  }

}
});

// GAME OVER GG
function gameOver(won, msg){
  let = color;
  won === true ? color = 'green' : color = 'red';

    // Game Over = LOST
    guessInput.disabled = true;
    // Change border red
    guessInput.style.borderColor = color;
    // Set message
    setMessage(msg)
}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}