/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/js/home.js":
/*!*******************************!*\
  !*** ./src/client/js/home.js ***!
  \*******************************/
/***/ (() => {

eval("var typingBool = false;\nvar buttonBool = false;\nvar typingIdx = 0;\nvar liIndex = 0;\nvar liLength = $(\".color-controls>ul>li\").length;\nvar typingTxt = $(\".color-controls>ul>li\").eq(liIndex).text();\ntypingTxt = typingTxt.split(\"\");\n\nif (typingBool == false) {\n  typingBool = true;\n  var tyInt = setInterval(typing, 100);\n}\n\nfunction typing() {\n  if (typingIdx < typingTxt.length) {\n    $(\".typing\").append(typingTxt[typingIdx]);\n    typingIdx++;\n  } else {\n    if (liIndex >= liLength - 1) {\n      createButton();\n      return;\n    } else {\n      liIndex++;\n    }\n\n    typingIdx = 0;\n    typingBool = false;\n    typingTxt = $(\".color-controls>ul>li\").eq(liIndex).text();\n    clearInterval(tyInt);\n    setTimeout(function () {\n      $(\".typing\").html('');\n      tyInt = setInterval(typing, 100);\n    }, 1000);\n  }\n}\n\nfunction createButton() {\n  if (buttonBool === false) {\n    var typing = document.querySelector(\".typing\");\n    typing.style.display = \"none\";\n    var startButton = document.querySelector('#start');\n    startButton.style.display = \"inline-block\";\n    buttonBool = true;\n  }\n}\n\nvar startDiv = document.querySelector('#start');\nstartDiv.addEventListener(\"click\", function () {\n  window.location.href = 'http://34.64.199.183:8080/custom';\n});\n\n//# sourceURL=webpack://project/./src/client/js/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/client/js/home.js"]();
/******/ 	
/******/ })()
;