var timeLeft = 60;
var elem = document.getElementById('timer')
var timeId;
var input = document.querySelector('.text-input');
var a = 0;
var tryAgainBtn = document.querySelector('.myBtn');

var typingText = document.querySelector('.defultPara');
var myParagraph = typingText.textContent.split("");
// console.log(myParagraph);
typingText.textContent = "";

// to split the input value


// to get input value 
input.addEventListener('keypress', function newFun() {
    var inputChar = input.value;
    console.log(inputChar);
    if (a < 1) {
        timeId = setInterval(myFun, 1000);
    }
    a = 1;
})

// input.addEventListener('keypress', tryFun)
// function tryFun() {
    
    // var inputChar = input.value;
    // console.log(inputChar);
// }

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

// to stop the timer
tryAgainBtn.addEventListener('click', function toBtn() {
    clearInterval(timeId);
    elem.innerHTML = "Time:60s";
    input.value = "";
})

// split paragraphs
myParagraph.forEach((myParagraph) => {
    typingText.innerHTML += '<span class="separateText">' + myParagraph + '</span>';
})

// var inputChar = input.value;
//     console.log(inputChar);