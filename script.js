const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
 
const inputDate = "1 Jan 2022";

function addZero(val) {
    if(val < 10){
        return `0${val}`;
    }
    else{
        return `${val}`;
    }
}

function countDownTimer(){
    const currentDate = new Date();
    const newDate = new Date(inputDate);
    const difference = (newDate - currentDate);

    const seconds = addZero(Math.floor(difference/1000)%60);
    const minutes = addZero(Math.floor(difference/1000/60)%60);
    const hours = addZero(Math.floor(difference/1000/60/60)%24);
    const days = addZero(Math.floor(difference/1000/60/60/24));

    // console.log(days, hours, minutes, seconds);

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
}

countDownTimer();

setInterval(countDownTimer, 1000);