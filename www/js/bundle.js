/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./www/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// page load intro
__webpack_require__(2);
__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(3);

var Home = function () {
    var mainLargePhoto = document.getElementById("mainLargePhoto");
    var livingRoomPhoto = document.getElementById("livingRoomPhoto");
    var quoteParagraph = document.getElementById("quote");
    var progressContainer = document.getElementById("progressContainer");
    var arrowContainer = document.querySelector(".arrow-container");

    function Home() {
        this.init();
    }

    Home.prototype.init = function () {
        this.waitForMainImageLoad();
        this.setAnimateListeners();
    };

    Home.prototype.waitForMainImageLoad = function () {
        var img = new Image();
        img.src = "https://www.halfdomephoto.com/img/mobile-bg.jpg";
        img.onload = function () {
            mainLargePhoto.setAttribute("src", "https://www.halfdomephoto.com/img/mobile-bg.jpg");
            mainLargePhoto.classList.add("loaded");
            progressContainer.style.display = "none";
        };
    };

    Home.prototype.setAnimateListeners = function () {
        quoteParagraph.addEventListener("webkitAnimationEnd", this.quoteAnimationFinalize, false);
        quoteParagraph.addEventListener("animationend", this.quoteAnimationFinalize, false);
        quoteParagraph.addEventListener("oanimationend", this.quoteAnimationFinalize, false);

        mainLargePhoto.addEventListener("webkitAnimationEnd", this.mainImageAnimationFinalize, false);
        mainLargePhoto.addEventListener("animationend", this.mainImageAnimationFinalize, false);
        mainLargePhoto.addEventListener("oanimationend", this.mainImageAnimationFinalize, false);
    };

    Home.prototype.quoteAnimationFinalize = function () {
        mainLargePhoto.classList.add("animate");
        quoteParagraph.classList.add("fadeout");
    };

    Home.prototype.mainImageAnimationFinalize = function () {
        if (!mainLargePhoto.classList.contains("fadeout")) {
            livingRoomPhoto.style.opacity = 1;
            mainLargePhoto.classList.add("fadeout");
            arrowContainer.style.opacity = 100;
        }
    };

    return Home;
}();
var home = new Home();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjAxYTFlNmU3YmEzMDI2ZDQzY2EiLCJ3ZWJwYWNrOi8vLy4vd3d3L2Nzcy9wcm9ncmVzcy5zY3NzIiwid2VicGFjazovLy8uL3d3dy9jc3Mvc2Nyb2xsQXJyb3cuc2NzcyIsIndlYnBhY2s6Ly8vLi93d3cvY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vd3d3L2Nzcy90YWJsZS5zY3NzIiwid2VicGFjazovLy8uL3d3dy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiSG9tZSIsIm1haW5MYXJnZVBob3RvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxpdmluZ1Jvb21QaG90byIsInF1b3RlUGFyYWdyYXBoIiwicHJvZ3Jlc3NDb250YWluZXIiLCJhcnJvd0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpbml0IiwicHJvdG90eXBlIiwid2FpdEZvck1haW5JbWFnZUxvYWQiLCJzZXRBbmltYXRlTGlzdGVuZXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwicXVvdGVBbmltYXRpb25GaW5hbGl6ZSIsIm1haW5JbWFnZUFuaW1hdGlvbkZpbmFsaXplIiwiY29udGFpbnMiLCJvcGFjaXR5IiwiaG9tZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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Q0gsQ0FsRFUsRUFBWDtBQW1EQSxJQUFJMkIsT0FBTyxJQUFJM0IsSUFBSixFQUFYLEMiLCJmaWxlIjoiLi93d3cvanMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIuL3d3dy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2MDFhMWU2ZTdiYTMwMjZkNDNjYSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93d3cvY3NzL3Byb2dyZXNzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3d3dy9jc3Mvc2Nyb2xsQXJyb3cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3d3L2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93d3cvY3NzL3RhYmxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcGFnZSBsb2FkIGludHJvXG5yZXF1aXJlKCcuLi9jc3Mvc3R5bGUuc2NzcycpO1xucmVxdWlyZSgnLi4vY3NzL3Byb2dyZXNzLnNjc3MnKTtcbnJlcXVpcmUoJy4uL2Nzcy9zY3JvbGxBcnJvdy5zY3NzJyk7XG5yZXF1aXJlKCcuLi9jc3MvdGFibGUuc2NzcycpO1xuXG52YXIgSG9tZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWFpbkxhcmdlUGhvdG89IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkxhcmdlUGhvdG9cIik7XG4gICAgY29uc3QgbGl2aW5nUm9vbVBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZpbmdSb29tUGhvdG9cIik7XG4gICAgY29uc3QgcXVvdGVQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1b3RlXCIpO1xuICAgIGNvbnN0IHByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0NvbnRhaW5lclwiKVxuICAgIGNvbnN0IGFycm93Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1jb250YWluZXJcIik7XG5cbiAgICBmdW5jdGlvbiBIb21lKCkge1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBIb21lLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLndhaXRGb3JNYWluSW1hZ2VMb2FkKCk7XG4gICAgICAgIHRoaXMuc2V0QW5pbWF0ZUxpc3RlbmVycygpO1xuICAgIH07XG5cbiAgICBIb21lLnByb3RvdHlwZS53YWl0Rm9yTWFpbkltYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gXCJodHRwczovL3d3dy5oYWxmZG9tZXBob3RvLmNvbS9pbWcvbW9iaWxlLWJnLmpwZ1wiO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgbWFpbkxhcmdlUGhvdG8uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiaHR0cHM6Ly93d3cuaGFsZmRvbWVwaG90by5jb20vaW1nL21vYmlsZS1iZy5qcGdcIik7XG4gICAgICAgICAgICBtYWluTGFyZ2VQaG90by5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuICAgICAgICAgICAgcHJvZ3Jlc3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEhvbWUucHJvdG90eXBlLnNldEFuaW1hdGVMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHF1b3RlUGFyYWdyYXBoLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5xdW90ZUFuaW1hdGlvbkZpbmFsaXplLCBmYWxzZSk7XG4gICAgICAgIHF1b3RlUGFyYWdyYXBoLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcy5xdW90ZUFuaW1hdGlvbkZpbmFsaXplLCBmYWxzZSk7XG4gICAgICAgIHF1b3RlUGFyYWdyYXBoLmFkZEV2ZW50TGlzdGVuZXIoXCJvYW5pbWF0aW9uZW5kXCIsIHRoaXMucXVvdGVBbmltYXRpb25GaW5hbGl6ZSwgZmFsc2UpO1xuXG4gICAgICAgIG1haW5MYXJnZVBob3RvLmFkZEV2ZW50TGlzdGVuZXIoXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgdGhpcy5tYWluSW1hZ2VBbmltYXRpb25GaW5hbGl6ZSwgZmFsc2UpO1xuICAgICAgICBtYWluTGFyZ2VQaG90by5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMubWFpbkltYWdlQW5pbWF0aW9uRmluYWxpemUsIGZhbHNlKTtcbiAgICAgICAgbWFpbkxhcmdlUGhvdG8uYWRkRXZlbnRMaXN0ZW5lcihcIm9hbmltYXRpb25lbmRcIiwgdGhpcy5tYWluSW1hZ2VBbmltYXRpb25GaW5hbGl6ZSwgZmFsc2UpO1xuICAgIH07XG4gICAgXG4gICAgSG9tZS5wcm90b3R5cGUucXVvdGVBbmltYXRpb25GaW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFpbkxhcmdlUGhvdG8uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVcIik7XG4gICAgICAgIHF1b3RlUGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoXCJmYWRlb3V0XCIpO1xuICAgIH07XG4gICAgXG4gICAgSG9tZS5wcm90b3R5cGUubWFpbkltYWdlQW5pbWF0aW9uRmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghbWFpbkxhcmdlUGhvdG8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZmFkZW91dFwiKSkge1xuICAgICAgICAgICAgbGl2aW5nUm9vbVBob3RvLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgICAgICAgbWFpbkxhcmdlUGhvdG8uY2xhc3NMaXN0LmFkZChcImZhZGVvdXRcIik7XG4gICAgICAgICAgICBhcnJvd0NvbnRhaW5lci5zdHlsZS5vcGFjaXR5ID0gMTAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBIb21lO1xufSkoKTtcbmxldCBob21lID0gbmV3IEhvbWUoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi93d3cvanMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9