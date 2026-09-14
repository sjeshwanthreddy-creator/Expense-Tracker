// Game Variables
let targetNumber;
let attempts = 0;
let guesses = [];
let gameOver = false;

// DOM Elements
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const resetBtn = document.getElementById('resetBtn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const statusDisplay = document.getElementById('status');
const guessesList = document.getElementById('guessesList');
const winModal = document.getElementById('winModal');
const winMessage = document.getElementById('winMessage');
const playAgainBtn = document.getElementById('playAgainBtn');

// Initialize Game
function initializeGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guesses = [];
    gameOver = false;
    
    guessInput.value = '';
    guessInput.disabled = false;
    guessInput.focus();
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit Guess';
    
    feedback.textContent = '';
    feedback.classList.remove('too-high', 'too-low', 'correct', 'empty');
    feedback.classList.add('empty');
    
    attemptsDisplay.textContent = '0';
    statusDisplay.textContent = '🎮 Playing';
    statusDisplay.classList.remove('status-won');
    statusDisplay.classList.add('status-playing');
    
    guessesList.innerHTML = '<p class="no-guesses">No guesses yet</p>';
    
    winModal.classList.add('hidden');
}

// Validate Input
function validateInput(input) {
    const num = parseInt(input);
    
    // Check if input is a valid number
    if (isNaN(num)) {
        showFeedback('Please enter a valid number', 'error');
        return false;
    }
    
    // Check if number is in valid range
    if (num < 1 || num > 100) {
        showFeedback('Please enter a number between 1 and 100', 'error');
        return false;
    }
    
    // Check if already guessed
    if (guesses.includes(num)) {
        showFeedback(`You already guessed ${num}! Try a different number.`, 'error');
        return false;
    }
    
    return true;
}

// Show Feedback
function showFeedback(message, type = '') {
    feedback.textContent = message;
    feedback.classList.remove('empty', 'too-high', 'too-low', 'correct', 'error');
    
    if (type === 'error') {
        feedback.classList.add('too-high'); // Use same styling as error
    } else {
        feedback.classList.add(type);
    }
}

// Process Guess
function processGuess() {
    const guessValue = guessInput.value.trim();
    
    // Validate input
    if (!validateInput(guessValue)) {
        guessInput.value = '';
        guessInput.focus();
        return;
    }
    
    const guess = parseInt(guessValue);
    guesses.push(guess);
    attempts++;
    
    // Update attempts display
    attemptsDisplay.textContent = attempts;
    
    // Add guess to list
    addGuessToList(guess);
    
    // Check if correct
    if (guess === targetNumber) {
        winGame();
    } else if (guess > targetNumber) {
        showFeedback(`📈 Too high! Try a smaller number.`, 'too-high');
    } else {
        showFeedback(`📉 Too low! Try a larger number.`, 'too-low');
    }
    
    // Clear input
    guessInput.value = '';
    guessInput.focus();
}

// Add Guess to List
function addGuessToList(guess) {
    // Remove "No guesses yet" message on first guess
    const noGuessesMsg = guessesList.querySelector('.no-guesses');
    if (noGuessesMsg) {
        noGuessesMsg.remove();
    }
    
    const badge = document.createElement('span');
    badge.className = 'guess-badge';
    badge.textContent = guess;
    
    if (guess === targetNumber) {
        badge.classList.add('correct');
    }
    
    guessesList.appendChild(badge);
}

// Win Game
function winGame() {
    gameOver = true;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    
    showFeedback(`🎊 Correct! The number was ${targetNumber}!`, 'correct');
    statusDisplay.textContent = '✅ Won';
    statusDisplay.classList.remove('status-playing');
    statusDisplay.classList.add('status-won');
    
    // Show win modal
    winMessage.textContent = `You found it in ${attempts} attempt${attempts !== 1 ? 's' : ''}!`;
    winModal.classList.remove('hidden');
}

// Reset Game
function resetGame() {
    initializeGame();
}

// Event Listeners
submitBtn.addEventListener('click', () => {
    if (!gameOver) {
        processGuess();
    }
});

guessInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !gameOver) {
        processGuess();
    }
});

resetBtn.addEventListener('click', resetGame);

playAgainBtn.addEventListener('click', () => {
    resetGame();
});

// Prevent invalid characters in input
guessInput.addEventListener('keydown', (e) => {
    // Allow: Backspace, Delete, Tab, Escape, Enter
    if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+A, Ctrl+Z
        (e.keyCode === 65 && e.ctrlKey === true) ||
        (e.keyCode === 67 && e.ctrlKey === true) ||
        (e.keyCode === 86 && e.ctrlKey === true) ||
        (e.keyCode === 88 && e.ctrlKey === true) ||
        (e.keyCode === 90 && e.ctrlKey === true)) {
        return;
    }
    
    // Allow: numbers, minus sign
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && e.keyCode !== 189) {
        e.preventDefault();
    }
});

// Initialize the game when page loads
document.addEventListener('DOMContentLoaded', initializeGame);
