//This stuff just makes the demo's UI work. ---------------
var characterElement= document.querySelector(".Character");

var spritesheets_base = [
    "image/test_base.png",
    "image/test_base.png"
]

var spritesheets_cloth = [
   "image/test_cloth1_1.png",
   "image/test_cloth1_2.png",
   "image/test_cloth1_3.png",
   "image/test_cloth1_4.png",
   "image/test_cloth1_5.png",
   "image/test_cloth1_1.png",
   "image/test_cloth1_2.png",
   "image/test_cloth1_3.png",
   "image/test_cloth1_4.png",
   "image/test_cloth1_5.png",
];

var spritesheets_bottom = [
    "image/test_bottom1_1.png",
    "image/test_bottom1_2.png",
    "image/test_bottom1_3.png",
    "image/test_bottom1_4.png",
    "image/test_bottom1_5.png",
    "image/test_bottom1_1.png",
    "image/test_bottom1_2.png",
    "image/test_bottom1_3.png",
    "image/test_bottom1_4.png",
    "image/test_bottom1_5.png",
 ];

let activeIndex_base=0;
let activeIndex_cloth = 0;
let activeIndex_bottom = 0;
let spritesheetElements = "";
let navigationElements = "";

spritesheets_base.forEach((spritesheet, index) => {
    spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage Character_sprite-sheet_base index-${index}" />`
});

spritesheets_cloth.forEach((spritesheet, index) => {
	spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage Character_sprite-sheet_cloth index-${index}" />`
	navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive_cloth(${index})' />`
});

spritesheets_bottom.forEach((spritesheet, index) => {
	spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage Character_sprite-sheet_bottom index-${index}" />`
	navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive_bottom(${index})' />`
});

characterElement.insertAdjacentHTML( 'beforeend', spritesheetElements );


document.querySelector(".Navigation").insertAdjacentHTML( 'beforeend', navigationElements );


// 커스터마이징 버튼
function setActive_base(index) {
	activeIndex_base = index;
    
	document.querySelectorAll(`.active0`).forEach(node => {
		node.classList.remove("active0")
	})
	document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active0")
	})

}

function setActive_cloth(index) {
	activeIndex_cloth = index;

	document.querySelectorAll(`.active`).forEach(node => {
        node.classList.remove("active")
	})
	document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active")
	})

}


function setActive_bottom(index) {
    activeIndex_bottom = index;
	document.querySelectorAll(`.active1`).forEach(node => {
		node.classList.remove("active1")
	})
    document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active1")
	})

}
function setActive_bottom1(index) {
    activeIndex_bottom = index;
	document.querySelectorAll(`.active1`).forEach(node => {
		node.classList.remove("active1")
	})
    document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active1")
	})

}


//캐릭터 방향
function setDirection(direction) {
	[
		"Character--walk-down",
		"Character--walk-right",
		"Character--walk-up",
		"Character--walk-left"
	].forEach(className => {
		characterElement.classList.remove(className)
	})


	document.querySelector(".DirectionArrow--active").classList.remove("DirectionArrow--active")

	var directionClass = "Character--walk-down";
	if (direction === "DOWN") {
		document.querySelector(".DirectionArrow-down").classList.add("DirectionArrow--active")
	}

	if (direction === "LEFT") { 
		directionClass = "Character--walk-left" 
		document.querySelector(".DirectionArrow-left").classList.add("DirectionArrow--active")
	}
	if (direction === "RIGHT") { 
		directionClass = "Character--walk-right" 
		document.querySelector(".DirectionArrow-right").classList.add("DirectionArrow--active")
	}
	if (direction === "UP") { 
		directionClass = "Character--walk-up" 
		document.querySelector(".DirectionArrow-up").classList.add("DirectionArrow--active")
	}

	characterElement.classList.add(directionClass)
}
//몸통 베이스
function setPreviousActive_base() {
	activeIndex_base = activeIndex_base > 0 ? activeIndex_base - 1 : spritesheets_base.length - 1;
	setActive_base(activeIndex_base)
}

function setNextActive_base() {
	activeIndex_base = activeIndex_base < spritesheets_base.length - 1 ? activeIndex_base + 1 : 0;
	setActive_base(activeIndex_base)
   
}

//옷 바꾸기
function setPreviousActive_cloth() {
	activeIndex_cloth= activeIndex_cloth > 0 ? activeIndex_cloth - 1 : spritesheets_cloth.length - 1;
	setActive_cloth(activeIndex_cloth)
}

function setNextActive_cloth() {
	activeIndex_cloth = activeIndex_cloth < spritesheets_cloth.length - 1 ? activeIndex_cloth + 1 : 0;
	setActive_cloth(activeIndex_cloth)

}

//바지 바꾸기
function setPreviousActive_bottom() {
	activeIndex_bottom = activeIndex_bottom > 0 ? activeIndex_bottom - 1 : spritesheets_bottom.length - 1;
	setActive_bottom(activeIndex_bottom)
}

function setNextActive_bottom() {
	activeIndex_bottom = activeIndex_bottom < spritesheets_bottom.length - 1 ? activeIndex_bottom + 1 : 0;
	setActive_bottom(activeIndex_bottom)
}



function bottom_re(){
    let interval = setInterval(setActive_bottom, 1000);
    clearInterval(interval);
}


//기본 세팅
setActive_base(activeIndex_base);
setActive_cloth(activeIndex_cloth);
setActive_bottom(activeIndex_bottom);


