const daysEl = document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl =document.getElementById('seconds');
const currentYear = new Date();
const halloween = '14 February' + ' ' + currentYear.getFullYear();

function countDown() {
    const halloweenDate = new Date(halloween);
    const currentDate = new Date();
    const days = parseInt(Math.abs(halloweenDate - currentDate) / (1000 * 60 * 60 * 24));
    const hours = parseInt(Math.abs(halloweenDate - currentDate) / (1000 * 60 * 60) % 24);
    const minutes = parseInt(Math.abs(halloweenDate.getTime() - currentDate.getTime()) / (1000 * 60) % 60);
    const seconds = parseInt(Math.abs(halloweenDate.getTime() - currentDate.getTime()) / (1000) % 60); 

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

//initialize countdown
countDown();
setInterval(countDown, 1000);