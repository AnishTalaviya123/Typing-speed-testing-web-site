var timeLeft = 30;
var elem = document.getElementById('timer')
// var timeId = setInterval(myFun, 1000);

// const log = document.getElementById('log');
var input = document.querySelector('.text-input');
// input.addEventListener('keypress', myFun);

input.addEventListener('keypress', function myFun() {
    if (timeLeft == -1) {
        alert("Time is over!");
    }
    if (timeLeft == -1) {
        clearInterval(timeId);
    } else {
        elem.innerHTML = "Time:" + timeLeft + "s";
        timeLeft--;
    }
});