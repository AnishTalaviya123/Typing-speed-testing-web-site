var timeLeft = 60;
var elem = document.getElementById('timer')
var timeId;
var input = document.querySelector('.text-input');
var a = 0;
var tryAgainBtn = document.querySelector('.myBtn')

input.addEventListener('keypress', function newFun() {
    if (a < 1) {
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

tryAgainBtn.addEventListener('click',function toBtn(){
    if (timeLeft < 61) {
        clearInterval(timeId);
        elem.innerHTML = "Time:60s";
        input.value = "";
    }   
})