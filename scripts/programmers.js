const daysEl = document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl =document.getElementById('seconds');
const currentYear = new Date();
const programmer = '13 September' + ' ' + currentYear.getFullYear();

function countDown() {
    const programmerDate = new Date(programmer);
    const currentDate = new Date();
    const days = parseInt(Math.abs(programmerDate - currentDate) / (1000 * 60 * 60 * 24));
    const hours = parseInt(Math.abs(programmerDate - currentDate) / (1000 * 60 * 60) % 24);
    const minutes = parseInt(Math.abs(programmerDate.getTime() - currentDate.getTime()) / (1000 * 60) % 60);
    const seconds = parseInt(Math.abs(programmerDate.getTime() - currentDate.getTime()) / (1000) % 60); 

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

//initialize countdown
countDown();
setInterval(countDown, 1000);