//This stuff just makes the demo's UI work. ---------------
var characterElement= document.querySelector(".Character");


var spritesheets_base = [
    "image/test_base.png",
    "image/test_base.png"
];

var spritesheets_accessory = [
	"",
	"image/test_accessory1.png"
];

var spritesheets_hair = [
	"image/test_hair1_1.png",
	"image/test_hair1_2.png",
	"image/test_hair1_3.png",
	"image/test_hair1_4.png",
	"image/test_hair1_5.png"
];

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

 var spritesheets_shoes = [
	"image/test_shoes1_1.png",
	"image/test_shoes1_2.png",
	"image/test_shoes1_3.png",
	"image/test_shoes1_4.png"
 ];

let activeIndex_base=0;
let activeIndex_hair=0;
let activeIndex_accessory=0;
let activeIndex_cloth = 0;
let activeIndex_bottom = 0;
let activeIndex_shoes = 0;
let spritesheetElements = "";
let navigationElements = "";

spritesheets_base.forEach((spritesheet, index) => {
    spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage walk Character_sprite-sheet_base index-${index}" />`
});

spritesheets_hair.forEach((spritesheet, index) => {
	spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage walk Character_sprite-sheet_hair index-${index}" />`
	// navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive_hair(${index})' />`
});

spritesheets_accessory.forEach((spritesheet, index) => {
	spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage walk Character_sprite-sheet_accessory index-${index}" />`
	// navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive_accessory(${index})' />`
});

spritesheets_cloth.forEach((spritesheet, index) => {
	spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage walk Character_sprite-sheet_cloth index-${index}" />`
	// navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive_cloth(${index})' />`
});

spritesheets_bottom.forEach((spritesheet, index) => {
	spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage walk Character_sprite-sheet_bottom index-${index}" />`
	// navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive_bottom(${index})' />`
});

spritesheets_shoes.forEach((spritesheet, index) => {
	spritesheetElements += `<img src="${spritesheet}" class="PixelArtImage walk Character_sprite-sheet_shoes index-${index}" />`
	// navigationElements += `<button class="NavigationBubble index-${index}" onclick='setActive_shoes(${index})' />`
});

characterElement.insertAdjacentHTML( 'beforeend', spritesheetElements );


document.querySelector(".Navigation").insertAdjacentHTML( 'beforeend', navigationElements );


// 커스터마이징 버튼
function setActive_base(index) {
	activeIndex_base = index;
    
	document.querySelectorAll(`.active_base`).forEach(node => {
		node.classList.remove("active_base")
	})
	document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active_base")
	})

}

function setActive_accessory(index) {
	activeIndex_accessory = index;
    
	document.querySelectorAll(`.active_accessory`).forEach(node => {
		node.classList.remove("active_accessory")
	})
	document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active_accessory")
	})

}
function setActive_hair(index) {
	activeIndex_hair = index;
    
	document.querySelectorAll(`.active_hair`).forEach(node => {
		node.classList.remove("active_hair")
	})
	document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active_hair")
	})

}

function setActive_cloth(index) {
	activeIndex_cloth = index;

	document.querySelectorAll(`.active_cloth`).forEach(node => {
        node.classList.remove("active_cloth")
	})
	document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active_cloth")
	})

}


function setActive_bottom(index) {
    activeIndex_bottom = index;
	document.querySelectorAll(`.active_bottom`).forEach(node => {
		node.classList.remove("active_bottom")
	})
    document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active_bottom")
	})

}

function setActive_shoes(index) {
    activeIndex_shoes = index;
	document.querySelectorAll(`.active_shoes`).forEach(node => {
		node.classList.remove("active_shoes")
	})
    document.querySelectorAll(`.index-${index}`).forEach(node => {
		node.classList.add("active_shoes")
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

//악세사리 바꾸기
function setPreviousActive_accessory() {
	activeIndex_accessory= activeIndex_accessory > 0 ? activeIndex_accessory - 1 : spritesheets_accessory.length - 1;
	setActive_accessory(activeIndex_accessory)
}

function setNextActive_accessory() {
	activeIndex_accessory = activeIndex_accessory < spritesheets_accessory.length - 1 ? activeIndex_accessory + 1 : 0;
	setActive_accessory(activeIndex_accessory)

}

//머리 바꾸기
function setPreviousActive_hair() {
	activeIndex_hair= activeIndex_hair > 0 ? activeIndex_hair - 1 : spritesheets_hair.length - 1;
	setActive_hair(activeIndex_hair)
}

function setNextActive_hair() {
	activeIndex_hair = activeIndex_hair < spritesheets_hair.length - 1 ? activeIndex_hair + 1 : 0;
	setActive_hair(activeIndex_hair)

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

//신발 바꾸기
function setPreviousActive_shoes() {
	activeIndex_shoes = activeIndex_shoes > 0 ? activeIndex_shoes - 1 : spritesheets_shoes.length - 1;
	setActive_shoes(activeIndex_shoes)
}

function setNextActive_shoes() {
	activeIndex_shoes = activeIndex_shoes < spritesheets_shoes.length - 1 ? activeIndex_shoes + 1 : 0;
	setActive_shoes(activeIndex_shoes)
}


//악세사리 재실행
function accessory_re() {
	var element = document.querySelector(".Character_sprite-sheet_accessory.active_accessory.walk"); 
	element.classList.remove("walk"); 
	void element.offsetWidth;
	element.classList.add("walk");
  }

//머리 재실행
function hair_re() {
	var element = document.querySelector(".Character_sprite-sheet_hair.active_hair.walk"); 
	element.classList.remove("walk"); 
	void element.offsetWidth;
	element.classList.add("walk");
  }


//옷 재실행
function cloth_re() {
	var element = document.querySelector(".Character_sprite-sheet_cloth.active_cloth.walk"); 
	element.classList.remove("walk"); 
	void element.offsetWidth;
	element.classList.add("walk");
  }


//바지 재실행
function bottom_re() {
	var element = document.querySelector(".Character_sprite-sheet_bottom.active_bottom.walk"); 
	element.classList.remove("walk"); 
	void element.offsetWidth;
	element.classList.add("walk");
  }

//신발 재실행
function shoes_re() {
	var element = document.querySelector(".Character_sprite-sheet_shoes.active_shoes.walk"); 
	element.classList.remove("walk"); 
	void element.offsetWidth;
	element.classList.add("walk");
  }



//기본 세팅
setActive_base(activeIndex_base);
setActive_accessory(activeIndex_accessory);
setActive_hair(activeIndex_hair);
setActive_cloth(activeIndex_cloth);
setActive_shoes(activeIndex_shoes);
setActive_bottom(activeIndex_bottom);



