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

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ (() => {

eval("document.getElementById('coaching-session-client-feedback-survey').addEventListener('submit', function(event) {\r\n    event.preventDefault(); // Prevent the form from submitting normally\r\n\r\n\r\n    const formData = new FormData(event.target);\r\n    const data = {};\r\n    for (let [key, value] of formData.entries()) {\r\n      data[key] = value;\r\n    }\r\n\r\n    console.log(data);\r\n\r\n\r\n    document.getElementById('message').textContent = 'Feedback submitted successfully!';\r\n\r\n    event.target.reset();\r\n  });\r\n\n\n//# sourceURL=webpack://11a/./src/form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/form.js"]();
/******/ 	
/******/ })()
;