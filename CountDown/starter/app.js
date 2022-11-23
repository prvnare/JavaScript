'use strict'

const newYear = '1 Jan 2023';
const newYearDay = new Date(newYear);

const daysContainer = document.querySelector('#days');
const hoursContainer = document.querySelector('#hours');
const minutesContainer = document.querySelector('#minutes');
const secondsContainer = document.querySelector('#seconds');

const getDate = () => new Date();

const countDownDays = () => {
    const days = Math.floor((((newYearDay - getDate()) / 1000) / 3600) / 24);
    return days;
}

const countDownHours = () => {
    return 24 - getDate().getHours();
}

const countDownMinutes = () => {
    return 60 - getDate().getMinutes();
};

const countDownSeconds = () => {
    return 60 - getDate().getSeconds();
};

//setInterval(countDown, 1000);
const countDown = () => {
    daysContainer.textContent = formatTime(countDownDays());
    hoursContainer.textContent = formatTime(countDownHours());
    minutesContainer.textContent = formatTime(countDownMinutes());
    secondsContainer.textContent = formatTime(countDownSeconds());
    // console.log('test');
};

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);