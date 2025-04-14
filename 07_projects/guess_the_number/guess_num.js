// console.log(parseInt(Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random number is: ", randomNum);


const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numOfGuess = 1;
let playGame = true;

if(playGame) {
    submit.addEventListener('click', (event) => {
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {

    if(isNaN(guess)) {
        alert("Please enter a valid number");
    }
    else if( guess <1 ||  guess > 10) {
        alert("Please enter a number between 1 to 10");
    }
    else {
        prevGuess.push(guess);
        if(numOfGuess >= 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random was ${randomNum}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    console.log(guess)
    if(guess === randomNum) {
        displayMessage(`Congratulations!!. ${guess}`);
        endGame();
    }
    else if(guess < randomNum) {
        displayMessage(`Number is too low`);
    }
    else if(guess > randomNum) {
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (event) => {
        randomNum = Math.floor(Math.random() * 10) + 1;
        console.log("New random number is: ", randomNum);
        prevGuess.length = 0;
        numOfGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numOfGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}