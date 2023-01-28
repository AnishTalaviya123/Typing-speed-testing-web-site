var timeLeft = 60;
var elem = document.getElementById('timer')
var timeId;
var input = document.querySelector('.text-input');
var a = 0;
var tryAgainBtn = document.querySelector('.myBtn');

//! to split the paragraphs value
var typingText = document.querySelector('.defultPara');
var myParagraph = typingText.textContent.split("");
// console.log(myParagraph);
typingText.textContent = "";

var inputChar;
var typedChar;

var textIndex = 0;
var paraIndex = 0;

//! This function will run when user type something 
input.addEventListener('keypress', function newFun() {
    if (a < 1) {
        timeId = setInterval(myFun, 1000);
    }
    a = 1;
})

//! To match the input value and paragraph value  
input.addEventListener('input', tryFun)
function tryFun() {
    //! To  print user values 
    inputChar = input.value.split("")[textIndex];
    console.log("user value: "+inputChar);
    textIndex++;

    //!  to print paragraphs values
    typedChar = myParagraph[paraIndex]
    console.log("paragraph value: "+typedChar)
    paraIndex++;
    
    if (inputChar == typedChar) {
        console.log("Match found!");

    } else {
        console.log("Try again");
    }
}


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
