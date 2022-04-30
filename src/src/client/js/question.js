var firstAnswerBool = false;
var next = false;
var lineIdx = 1;
var typingIdx = 0;
var typingTxt = $("#a" + lineIdx).text();
typingTxt = typingTxt.split("");

var tyInt = setInterval(firstTyping, 100);

function firstTyping() {
    if (lineIdx > 2) {
        createFirstAnswer();
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        clearInterval(tyInt);
        setTimeout(function () {
            $(".typing").html('');
            tyInt = setInterval(firstTyping, 100);
        }, 1000);
    }
}

function createFirstAnswer() {
    if (firstAnswerBool === false) {
        const firstAnswer = document.querySelector("#firstAnswer");
        firstAnswer.style.display = "inline-block";
        firstAnswerBool = true;
    }
}

const firstAnswer = document.querySelector("#firstAnswer");
firstAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        firstAnswer.remove();
        const character = document.querySelector(".question_pixelart");
        character.classList.add("face-right");
        tysecond = setInterval(secondTyping, 100);
    }
})

var secondAnswerBool = false;
function secondTyping() {
    if (lineIdx >= 4) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        clearInterval(tysecond);
        setTimeout(function () {
            $(".typing").html('');
            createSecondAnswer();
        }, 1000);
    }
}

function createSecondAnswer() {
    if (secondAnswerBool === false) {
        const first = document.createElement("p");
        const second = document.createElement("p");
        const third = document.createElement("p");
        first.setAttribute("class", "answer");
        second.setAttribute("class", "answer");
        third.setAttribute("class", "answer");
        first.textContent = "그래도 대체로 강한 편인거 같아";
        second.textContent = "사실 좀 유리멘탈 인 것 같아...";
        third.textContent = "상황에 따라 되게 달라지는 것 같아";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        controls.appendChild(third);
        
        var answerDivs = document.querySelectorAll('.answer');
        answerDivs.forEach( (answerDiv) => {
            answerDiv.addEventListener("click", function () {
                controls.removeChild(first);
                controls.removeChild(second);
                controls.removeChild(third);
                tythird = setInterval(thirdTyping, 100);    
            })
        })
        secondAnswerBool = true;
    }
}

var thirdAnswerBool = false;
function thirdTyping() {
    if (lineIdx >= 5) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        clearInterval(tythird);
        setTimeout(function () {
            $(".typing").html('');
            createThirdAnswer();
        }, 1000);
    }
}

function createThirdAnswer() {
    if (thirdAnswerBool === false) {
        const first = document.createElement("p");
        const second = document.createElement("p");
        const third = document.createElement("p");
        first.setAttribute("class", "answer2");
        second.setAttribute("class", "answer2");
        third.setAttribute("class", "answer2");
        first.textContent = "항상 사람들이 날 힘들게 하는 것 같아";
        second.textContent = "어떤 상황이 날 힘들게 하는 경우가 많았어";
        third.textContent = "복합적인 이유가 있는 것 같아";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        controls.appendChild(third);
        
        var answerDivs = document.querySelectorAll('.answer2');
        answerDivs.forEach( (answerDiv) => {
            answerDiv.addEventListener("click", function () {
                controls.removeChild(first);
                controls.removeChild(second);
                controls.removeChild(third);    
                tyfour = setInterval(fourTyping, 100);    
            })
        })
        thirdAnswerBool = true;
    }
}

var fourAnswerBool = false;
function fourTyping() {
    if (lineIdx >= 6) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        clearInterval(tyfour);
        setTimeout(function () {
            $(".typing").html('');
            createFourAnswer();
        }, 1000);
    }
}

function createFourAnswer() {
    if (fourAnswerBool === false) {
        const first = document.createElement("p");
        const second = document.createElement("p");
        first.setAttribute("class", "answer3");
        second.setAttribute("class", "answer3");
        first.textContent = "음... 있었어 아직도 생생하게 기억나";
        second.textContent = "힘든 일은 금방 털어버리는 편이라, 잘 생각은 안나";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        
        var answerDivs = document.querySelectorAll('.answer3');
        answerDivs.forEach( (answerDiv) => {
            answerDiv.addEventListener("click", function () {
                controls.removeChild(first);
                controls.removeChild(second);
                tyfive = setInterval(fiveTyping, 100);    
            })
        })
        fourAnswerBool = true;
    }
}


var fiveAnswerBool = false;
function fiveTyping() {
    if (lineIdx >= 7) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        clearInterval(tyfive);
        setTimeout(function () {
            $(".typing").html('');
            createFiveAnswer();
        }, 1000);
    }
}

function createFiveAnswer() {
    if (fiveAnswerBool === false) {
        const first = document.createElement("p");
        const second = document.createElement("p");
        first.setAttribute("class", "answer4");
        second.setAttribute("class", "answer4");
        first.textContent = "음... 있었어 아직도 생생하게 기억나";
        second.textContent = "힘든 일은 금방 털어버리는 편이라, 잘 생각은 안나";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        
        first.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            tysix = setInterval(sixTyping, 100);                
        })
        second.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            typingTxt = $("#a8").text();
            tyseven = setInterval(sevenTyping, 100);    
        })
        fiveAnswerBool = true;
    }
}

function sixTyping() {
    if (lineIdx >= 7) {
        createLastAnswer();
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        clearInterval(tysix);
        setTimeout(function () {
            $(".typing").html('');
        }, 1000);
    }
}

function sevenTyping() {
    if (lineIdx >= 7) {
        createLastAnswer();
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        clearInterval(tyseven);
        setTimeout(function () {
            $(".typing").html('');
        }, 1000);
    }
}

var lastAnswerBool = false;
function createLastAnswer() {
    if (lastAnswerBool === false) {
        const lastAnswer = document.getElementById("lastAnswer");
        lastAnswer.style.display = "inline-block";
        lastAnswerBool = true;
    }
}

const lastAnswer = document.getElementById("lastAnswer");
lastAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        sendToSever();     
        lastAnswer.remove();
    }
})

function sendToSever() {
    var answer = $('input[name=answer]').val();
    $.ajax({
        type: "POST",
        url: "/question",
        data: {"answer" : answer},
        dataType:"text",
    })
}