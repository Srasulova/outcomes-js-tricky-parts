function guessingGame() {
  // Generate a random number between 0 and 99
  const secretNumber = Math.floor(Math.random() * 100);
  let numberOfGuesses = 0;
  let gameEnded = false;

  return function (guess) {
    // Check if the game has ended
    if (gameEnded) {
      return "The game is over, you already won!";
    }

    numberOfGuesses++;

    if (guess < secretNumber) {
      return `${guess} is too low!`;
    } else if (guess > secretNumber) {
      return `${guess} is too high!`;
    } else {
      // The guess is correct
      gameEnded = true;
      return `You win! You found ${secretNumber} in ${numberOfGuesses} guesses.`;
    }
  };
}

// Example usage:
let game = guessingGame();
console.log(game(50)); // e.g., "50 is too low!"
console.log(game(90)); // e.g., "90 is too high!"
console.log(game(70)); // e.g., "You win! You found 70 in 3 guesses."
console.log(game(70)); // "The game is over, you already won!"

module.exports = { guessingGame };
