'use strict';
// Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEL = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//buttons 
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');

let currentScore;
let activePlayer;
let isPlay;

const init = () => {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEL.classList.add('hidden');
    currentScore = 0;
    activePlayer = 0;
    isPlay = true;
}

//functions
const changeActivePlayer = () => {
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    activePlayer = activePlayer === 0 ? 1 : 0;
}

const displayRoll = () => {
    if (isPlay) {
        const roll = Math.round(Math.random() * 5) + 1;
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${roll}.png`;
        if (roll === 1) {
            document.getElementById(`current--${activePlayer}`).textContent = 0;
            changeActivePlayer();

        } else {
            currentScore += roll;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
    }
}

const checkWinner = () => {
    if (Number(document.getElementById(`score--${activePlayer}`).textContent) >= 10) {
        isPlay = false;
        diceEL.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }
}

const hold = () => {
    if (isPlay) {
        document.getElementById(`score--${activePlayer}`).textContent = Number(document.getElementById(`score--${activePlayer}`).textContent) + currentScore;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        checkWinner();
        changeActivePlayer();
    }
}

const reset = () => {
    init();
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--player');
}
//initial values
init();
//Events
btnRoll.addEventListener('click', displayRoll);
btnHold.addEventListener('click', hold);
btnNew.addEventListener('click', reset);

