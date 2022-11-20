'use strict';
//Dom manipulation
// document.querySelector('.message').textContent = 'Play the game again...!〄';
// document.querySelector('.score').textContent = 10;
// document.querySelector('.highscore').textContent = 13;

//generating a random number between 1 to 20;

const randomNumber = () => Math.round(Math.random() * 20) + 1;
const highscore = document.querySelector('.highscore');
let score = 20;
let secretNumber = randomNumber();

const decreaseScore = () => {
    score--;
    document.querySelector('.score').textContent = score;
};
const setMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const onclick = () => {
    const guess = Number(document.querySelector('.guess').value);
    if (score > 1) {
        if (!guess) {
            setMessage('⛔️ Not a Number');
        } else if (secretNumber === guess) {
            if (highscore.textContent < score) {
                highscore.textContent = score;
            }
            setMessage('Correct Value');
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = 'Green';
            document.querySelector('.number').style.width = '30rem';
        } else {
            decreaseScore();
            setMessage(guess > secretNumber ? '📈 too high' : '📉 too low');
        }
    } else {
        document.querySelector('.score').textContent = 0;
        setMessage('YOU LOST THE GAME....');
        document.querySelector('body').style.backgroundColor = 'Red';
    }
}

const reset = () => {
    console.log('resetting to initial values....');
    document.querySelector('body').style.backgroundColor = '#222';
    setMessage('Start guessing...')
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    secretNumber = randomNumber();
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
}

document.querySelector('.check').addEventListener('click', onclick);
document.querySelector('.again').addEventListener('click', reset);