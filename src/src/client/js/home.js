var typingBool = false;
var buttonBool = false;
var typingIdx = 0;
var liIndex = 0;
var liLength = $(".color-controls>ul>li").length;

var typingTxt = $(".color-controls>ul>li").eq(liIndex).text();
typingTxt = typingTxt.split("");

if (typingBool == false) {
    typingBool = true;
    var tyInt = setInterval(typing, 100);
}

function typing() {
    if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
    } else {
        if (liIndex >= liLength - 1) {
            createButton();
            return;
        } else {
            liIndex++;
        }

        typingIdx = 0;
        typingBool = false;
        typingTxt = $(".color-controls>ul>li").eq(liIndex).text();

        clearInterval(tyInt);
        setTimeout(function () {
            $(".typing").html('');
            tyInt = setInterval(typing, 100);
        }, 1000);
    }
}

function createButton() {
    if (buttonBool === false) {
        var typing = document.querySelector(".typing");
        typing.style.display = "none";
        var startButton = document.querySelector('#start');
        startButton.style.display = "inline-block";        
        buttonBool = true;
    }
}

var startDiv = document.querySelector('#start');
startDiv.addEventListener("click", function () {
	window.location.href = 'http://34.64.199.183:8080/custom';
})

