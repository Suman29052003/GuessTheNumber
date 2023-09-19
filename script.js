// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements from the HTML
const guessField = document.getElementById('guessField');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const numGuesses = document.getElementById('numGuesses');
const attemptsSpan = document.getElementById('attempts');

let attempts = 0;
let isGameOver = false;

submitBtn.addEventListener('click', checkGuess);

function checkGuess() {
    if (isGameOver) {
        message.textContent = 'Game over! You can restart by refreshing the page.';
        return;
    }

    const userGuess = parseInt(guessField.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        isGameOver = true;
    } else {
        const hint = userGuess < randomNumber ? 'too low' : 'too high';
        message.textContent = `Wrong guess! Try again. Your guess is ${hint}.`;
    }

    attemptsSpan.textContent = attempts;
    guessField.value = '';
    guessField.focus();
}
