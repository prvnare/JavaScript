'use strict';
console.log('RockPaperScissoors');

const computerChoice = document.getElementById('computer');
const userChoice = document.getElementById('user');
const result = document.getElementById('result');
const choices = document.querySelectorAll('button');
let userChoosen, computerChoosen;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoosen = e.target.id;
    userChoice.innerHTML = userChoosen;
    computerChoice.innerHTML = generateComputerChoice();
    result.innerHTML = getResult();
}));

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * choices.length) + 1;
    console.log(randomNumber);
    if (randomNumber === 1) {
        computerChoosen = 'paper';
    } else if (randomNumber === 2) {
        computerChoosen = 'scissors';
    } else {
        computerChoosen = 'rock';
    }
    return computerChoosen;
}

const getResult = () => {
    let result;
    console.log(computerChoosen);
    console.log(userChoosen);
    if (computerChoosen === userChoosen) {
        result = 'Its Draw!';
    } else if (computerChoosen === 'rock' && userChoosen == 'paper') {
        result = 'You Win!';
    } else if (computerChoosen === 'paper' && userChoosen == 'rock') {
        result = 'You lost!';
    } else if (computerChoosen === 'rock' && userChoosen == 'scissors') {
        result = 'You lost!';
    } else if (computerChoosen === 'scissors' && userChoosen == 'rock') {
        result = 'You Win!';
    } else if (computerChoosen === 'paper' && userChoosen == 'scissors') {
        result = 'You Win!';
    } else if (computerChoosen === 'scissors' && userChoosen == 'paper') {
        result = 'You lost!';
    }
    console.log(result);
    return result;
}
//
  //  Rock wins against scissors.

//    Scissors win against paper.

//    Paper wins against rock.
