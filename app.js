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
var mistakes = 0;
var textIndex = 0;
var paraIndex = 0;

//! This function will run when user type something 
input.addEventListener('keypress', function newFun() {
    if (a < 1) {
        timeId = setInterval(myFun, 1000);
    }
    a = 1;
})

var lastCharOfInput = null;
//! To match the input value and paragraph value  
input.addEventListener('input', tryFun)
function tryFun() {
    
    //! To  print user values 
    var inputChar = input.value.split("")[textIndex];
    var typedChar = myParagraph[textIndex]
    if (inputChar == null) {
        console.log("Debug " + textIndex + " " + lastCharOfInput + " " + myParagraph[textIndex - 1]);
        if(textIndex > 0 && lastCharOfInput != myParagraph[textIndex - 1]){
            mistakes--;
        }
        textIndex = Math.max(textIndex - 1, 0);
    }else{
        if(inputChar != typedChar){
            mistakes++;
        }
        textIndex++;
    }
    if(input.value.length > 0){
        lastCharOfInput = input.value.split("")[input.value.length - 1];
    }
    console.log(mistakes);
    // //!  to print paragraphs values

    // if (inputChar == null) {
    //     textIndex--;
    //     paraIndex--;

    // } else {
    //     if (inputChar == typedChar) {
    //         console.log("Match found!");

    //     } else {
    //         console.log("Try again");
    //     }
    //     textIndex++;
    //     paraIndex++;
    // }

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
