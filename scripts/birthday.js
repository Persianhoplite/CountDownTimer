const daysEl = document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl =document.getElementById('seconds');
const birthY = document.getElementById('birthY').value;
const birthD = document.getElementById('birthD').value;
const birthM = document.getElementById('monthType').value;
const today = new Date();
let nextYear;
if (today.getMonth() + 1 > birthM || (today.getMonth() + 1 == birthM && today.getDate() + 1 > birthD)) {
    nextYear = new Date().getFullYear() + 1;
}
else {
    nextYear = new Date().getFullYear();
}
const birth = birthD + ' ' + birthM + ' ' + nextYear;

function countDown() {
    const birthDate = new Date(birth);
    const currentDate = new Date();
    const days = parseInt(Math.abs(birthDate - currentDate) / (1000 * 60 * 60 * 24));
    const hours = parseInt(Math.abs(birthDate - currentDate) / (1000 * 60 * 60) % 24);
    const minutes = parseInt(Math.abs(birthDate.getTime() - currentDate.getTime()) / (1000 * 60) % 60);
    const seconds = parseInt(Math.abs(birthDate.getTime() - currentDate.getTime()) / (1000) % 60); 

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
}

//initialize countdown
countDown();
setInterval(countDown, 1000);