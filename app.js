var timeLeft = 30;
var elem = document.getElementById('timer')
var timeId = setInterval(myFun, 1000);

function myFun() {
    if (timeLeft == -1){
        alert("Time is over!");
    }
    if (timeLeft == -1) {
        clearInterval(timeId);
    } else {
        elem.innerHTML = "Time:" + timeLeft + "s";
        timeLeft--;
    }
}

