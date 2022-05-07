var firstAnswerBool = false;
var next = false;
var lineIdx = 1;
var typingIdx = 0;
var typingTxt = $("#a" + lineIdx).text();
typingTxt = typingTxt.split("");
var messageToClient = ""

var tyInt = setInterval(firstTyping, 100);
var characterName = "";

function firstTyping() {
    if (lineIdx >= 2) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;

        clearInterval(tyInt);
        setTimeout(function () {
            createNameAnswer();
        }, 1000);
    }
}

var nameAnswerBool = false;
function createNameAnswer() {
    if (nameAnswerBool === false) {
        const name = document.querySelector("#name");
        name.style.display = "inline-block";
        nameAnswerBool = true;
    }
}

var nameResult = "";
const nameAnswer = document.querySelector("#name");
nameAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        nameResult = nameAnswer.value;
        characterName = $("#a" + lineIdx).text();
        nameAnswer.remove();
        const character = document.querySelector(".question_pixelart");
        character.classList.add("face-right");
        const detail = document.createElement("li");
        detail.innerText = nameResult + "? 좋아. 난 편하게  " + $("#a" + lineIdx).text() + "라고 불러줘." + "n오늘 어떻게 왔어?"; 
        typingTxt = detail.innerText;
        typingIdx = 0;
        $(".typing").html('');
        var tysecond = setInterval(secondTyping, 100);
    }
})

const typingBox = document.querySelector(".typing");
function secondTyping() {
    if (lineIdx >= 3) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        typingBox.innerHTML += typingTxt[typingIdx] === "n" ? "<br/>" : typingTxt[typingIdx];
        typingIdx++;
    } else {
        lineIdx++;
        typingIdx = 0;

        setTimeout(function () {
            createTrafficAnswer();
        }, 1000);
    }
}

var trafficAnswerBool = false;
function createTrafficAnswer() {
    if (trafficAnswerBool === false) {
        const traffic = document.querySelector("#traffic");
        traffic.style.display = "inline-block";
        trafficAnswerBool = true;
    }
}

const trafficAnswer = document.querySelector("#traffic");
trafficAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        trafficAnswer.remove();
        const detail2 = document.createElement("li");
        detail2.innerText = "와줘서 정말 고마워. " + nameResult + "! 넌 멘탈이 강한 편이야?"; 
        typingTxt = detail2.innerText;
        typingIdx = 0;
        $(".typing").html('');
        tythird = setInterval(thirdTyping, 100);
    }
})




function thirdTyping() {
    if (lineIdx >= 4) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = "아무래도 평온한 상태를 언제나 유지한다는건 n" + "어려운 일인 것 같아....n" + "어떤게 가장 널 힘들게 만드는 것 같아?";
        typingIdx = 0;
    
        setTimeout(function () {
            $(".typing").html('');
            createThirdAnswer();
        }, 1000);
    }
}

var thirdAnswerBool = false;
function createThirdAnswer() {
    if (thirdAnswerBool === false) {
        const first = document.createElement("p");
        const second = document.createElement("p");
        const third = document.createElement("p");
        first.setAttribute("class", "answer1");
        second.setAttribute("class", "answer1");
        third.setAttribute("class", "answer1");
        first.textContent = "그래도 대체로 강한 편인거 같아";
        second.textContent = "사실 좀 유리멘탈인 것 같아...";
        third.textContent = "상황에 따라 되게 달라지는 것 같아";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        controls.appendChild(third);
        
        first.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);    
            message = "누구보다 강인한 멘탈을 가진 "+ nameResult +"아! ";
            tyfour = setInterval(fourTyping, 100);
        })
        second.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);    
            message = "스스로 약한 멘탈을 갖고 있다고 말했지만, 그 속에 강인함을 감추고 있는 " + nameResult + "아!";
            tyfour = setInterval(fourTyping, 100);
        })
        third.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);    
            message = "누구보다 상황을 유연하게 맞이하려고 하는 " + nameResult + "아!";
            tyfour = setInterval(fourTyping, 100);
        })
        thirdAnswerBool = true;
    }
}


function fourTyping() {
    if (lineIdx >= 5) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        typingBox.innerHTML += typingTxt[typingIdx] === "n" ? "<br/>" : typingTxt[typingIdx];
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = "그렇지... 그러면서도 복합적인 이유가 있는 것 같아.n" + "최근에도 힘들거나 우울했던 일들이 있었어? " 
        typingIdx = 0;

        setTimeout(function () {
            $(".typing").html('');
            createFourAnswer();
        }, 1000);
    }
}

var fourAnswerBool = false;
function createFourAnswer() {
    if (fourAnswerBool === false) {
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

        first.addEventListener("click", function () {    
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            first.textContent += "사람 때문에 울고 웃기도 하고,";
            tyfive = setInterval(fiveTyping, 100);
        })
        second.addEventListener("click", function () {    
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            first.textContent += "상황이 마음만큼 따라주지 않을때가 많고,";
            tyfive = setInterval(fiveTyping, 100);
        })
        third.addEventListener("click", function () {    
            controls.removeChild(first);
            controls.removeChild(second);
            controls.removeChild(third);
            first.textContent += "사람도 상황도 내맘같지 않을때가 많고,";
            tyfive = setInterval(fiveTyping, 100);
        })
        fourAnswerBool = true;
    }
}


function fiveTyping() {
    if (lineIdx >= 6) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        typingBox.innerHTML += typingTxt[typingIdx] === "n" ? "<br/>" : typingTxt[typingIdx];
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = "그랬구나... 난 요즘 사람들이 무심코n" + "한 말로 괜히 상처를 받기도 하는 것 같아.n" + "혹시 너도 상처가 됐던 말이 있어?n";
        typingIdx = 0;

        setTimeout(function () {
            $(".typing").html('');
            createFiveAnswer();
        }, 1000);
    }
}

var fiveAnswerBool = false;
function createFiveAnswer() {
    if (fiveAnswerBool === false) {
        const first = document.createElement("p");
        const second = document.createElement("p");
        first.setAttribute("class", "answer3");
        second.setAttribute("class", "answer3");
        first.textContent = "음... 있었어 아직도 생생하게 기억나";
        second.textContent = "힘들었던건 금방 털어버리는 편이라, 잘 생각은 안나";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        
        var answerDivs = document.querySelectorAll('.answer3');
        answerDivs.forEach( (answerDiv) => {
            answerDiv.addEventListener("click", function () {
                controls.removeChild(first);
                controls.removeChild(second);    
                tysix = setInterval(sixTyping, 100);
            })
        })
        thirdAnswerBool = true;
    }
}


function sixTyping() {
    if (lineIdx >= 7) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        typingBox.innerHTML += typingTxt[typingIdx] === "n" ? "<br/>" : typingTxt[typingIdx];
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = nameResult + "아 너는 힘든 일이나 무거운 감정들이 n찾아올때 주변에 이야기를 잘 하는 편이야?";
        typingIdx = 0;

        setTimeout(function () {
            createWorryAnswer();
        }, 1000);
    }
}

var worryAnswerBool = false;
function createWorryAnswer() {
    if (worryAnswerBool === false) {
        const worry = document.querySelector("#worry");
        worry.style.display = "inline-block";
        worryAnswerBool = true;
    }
}

const worryAnswer = document.querySelector("#worry");
worryAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        worryAnswer.remove();
        $(".typing").html('');
        tyseven = setInterval(sevenTyping, 100);
    }
})


function sevenTyping() {
    if (lineIdx >= 8) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        typingBox.innerHTML += typingTxt[typingIdx] === "n" ? "<br/>" : typingTxt[typingIdx];
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        setTimeout(function () {
            $(".typing").html('');
            createSevenAnswer();
        }, 1000);
    }
}

var sevenAnswerBool = false;
function createSevenAnswer() {
    if (sevenAnswerBool === false) {
        const first = document.createElement("p");
        const second = document.createElement("p");
        first.setAttribute("class", "answer4");
        second.setAttribute("class", "answer4");
        first.textContent = "아니. 스스로 해결하는 편이 더 낫다고 생각해";
        second.textContent = "응. 이야기를 하다보면 마음의 짐이 좀 덜어지는 것";
        const controls = document.querySelector(".color-controls");
        controls.appendChild(first);
        controls.appendChild(second);
        
        first.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            const detail4 = document.createElement("li");
            detail4.innerHtml = "스스로 해결하려는 강인함을 가진 아이구나. n그래도 오늘은 한번 작은 고민거리라도 알려줘볼래? n나누는 것만으로도 큰 위로가 될때가 있으니까."; 
            message += "스스로 뭐든 잘 해결하려는 너지만, 가끔은 주변에 이야기도 하고 짐을 좀 나눠졌으면 좋겠다!";
            typingTxt = detail4.innerHtml;
            typingIdx = 0;
            tyeight = setInterval(eightTyping, 100);
        })
        second.addEventListener("click", function () {
            controls.removeChild(first);
            controls.removeChild(second);
            const detail4 = document.createElement("li");
            detail4.innerHtml = "맞아. 가끔은 누군가에게 털어놓는 것 n만으로도 많은 위로가 되기도 하지. n최근에 답답한 일이나 고민이 있었으면 n오늘 조금 털어두고가."; 
            message += "가끔 마음이 어려운 순간이 오더라도 지금처럼, 주변에 이야기도 나누면서 마음의 짐도 나눴으면 좋겠다!";
            typingTxt = detail4.innerHtml;
            typingIdx = 0;
            tyeight = setInterval(eightTyping, 100);
        })
        sevenAnswerBool = true;
    }
}

function eightTyping() {
    if (lineIdx >= 9) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        typingBox.innerHTML += typingTxt[typingIdx] === "n" ? "<br/>" : typingTxt[typingIdx];
        typingIdx++;
    } else {
        lineIdx++;
        typingTxt = $("#a" + lineIdx).text();
        typingIdx = 0;

        setTimeout(function () {
            createLastAnswer();
        }, 1000);
    }
}

var lastAnswerBool = false;
function createLastAnswer() {
    if (lastAnswerBool === false) {
        const last = document.querySelector("#last");
        last.style.display = "inline-block";
        lastAnswerBool = true;
    }
}

const lastAnswer = document.querySelector("#last");
var lastMessage = ""
lastAnswer.addEventListener('keypress', function (key) {
    if (key.key == 'Enter') {
        lastMessage = lastAnswer.value;
        lastAnswer.remove();
        sendMessage();
        const detail3 = document.createElement("li");
        detail3.innerHtml = "좋아! " + nameResult + "아. 짧게 이야기나눌 수  있어서 좋았어."; 
        typingTxt = detail3.innerHtml;
        typingIdx = 0;
        $(".typing").html('');
        tyseven = setInterval(nineTyping, 100);
    }
})

function sendMessage() {
    $.ajax({
        type: "POST",
        url: "/question",
        data: {
            "lastMessage" : lastMessage
        },
        dataType:"JSON",
    })
}

function nineTyping() {
    if (lineIdx >= 10) {
        return;
    }
    if (typingIdx < typingTxt.length) {
        typingBox.innerHTML += typingTxt[typingIdx] === "n" ? "<br/>" : typingTxt[typingIdx];
        typingIdx++;
    } else {
        lineIdx++;

        setTimeout(function () {
            $(".typing").html('');
        }, 1000);
    }
}


