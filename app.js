var timeLeft = 60;
var elem = document.getElementById('timer')
var timeId;
var input = document.querySelector('.text-input');

var a = 0;
input.addEventListener('keypress', function newFun() {
    if (a < 1) {
        console.log("Time is alert!");
        timeId = setInterval(myFun, 1000);
    }
    a = 1;
})

function myFun() {
    if (timeLeft == -1) {
        alert("Time is over!");
    }
    if (timeLeft == -1) {
        clearInterval(timeId);
    } else {
        elem.innerHTML = "Time:" + timeLeft + "s";
        timeLeft--;
    }
}