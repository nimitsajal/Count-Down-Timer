const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const descriptionElement = document.getElementById("description");

var finalDate = new Date();
var askForDate = false;

function setDescription(){
    var inputDescription = prompt("Please enter the Event", "Default - New Years Eve");
    if(inputDescription != null && inputDescription != "Default - New Years Eve"){
        const description = inputDescription;
        descriptionElement.innerHTML = description;
        askForDate = true;
    }
    else{
        const description = "New Years Eve";
        descriptionElement.innerHTML = description;
    }
}

function getDate(){
    const newYear = new Date().getFullYear();
    const defaultDate = `1 Jan ${newYear+1}`;
    if(askForDate){
        var askedDate = prompt("Enter Date & Time", "Format - [date](number) [month](text) [year](number) [time](24hr)(optional)");
        if(askedDate != null && askedDate != "Format - [date] [month] [year] [time](optional)"){
            finalDate = askedDate;
        }
        else{
            finalDate = defaultDate;
        }
    }
    else{
        finalDate = defaultDate;
    }
}

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
    // console.log("getting date");
    const newDate = new Date(finalDate);
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

setDescription();
getDate();
countDownTimer();

setInterval(countDownTimer, 1000);