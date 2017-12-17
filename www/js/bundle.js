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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// page load intro
__webpack_require__(3);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(4);
__webpack_require__(0);

var Home = function () {
    var mainLargePhoto = document.getElementById("mainLargePhoto");
    var livingRoomPhoto = document.getElementById("livingRoomPhoto");
    var quoteParagraph = document.getElementById("quote");
    var progressContainer = document.getElementById("progressContainer");
    var arrowContainer = document.querySelector(".arrow-container");
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu");

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
        var _this = this;

        quoteParagraph.addEventListener("webkitAnimationEnd", this.quoteAnimationFinalize, false);
        quoteParagraph.addEventListener("animationend", this.quoteAnimationFinalize, false);
        quoteParagraph.addEventListener("oanimationend", this.quoteAnimationFinalize, false);

        mainLargePhoto.addEventListener("webkitAnimationEnd", this.mainImageAnimationFinalize, false);
        mainLargePhoto.addEventListener("animationend", this.mainImageAnimationFinalize, false);
        mainLargePhoto.addEventListener("oanimationend", this.mainImageAnimationFinalize, false);

        nav.addEventListener("click", this.toggleMenu, false);
        menu.querySelectorAll("li").forEach(function (el) {
            el.addEventListener("click", _this.toggleMenu, false);
        });
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
            nav.style.opacity = .35;
        }
    };

    Home.prototype.toggleMenu = function () {
        nav.classList.toggle("open");
        menu.classList.toggle("open");
    };

    return Home;
}();
var home = new Home();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTgyOGE5MjU4MzVlYTE5MjY3NmYiLCJ3ZWJwYWNrOi8vLy4vd3d3L2Nzcy9tZW51LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vd3d3L2Nzcy9wcm9ncmVzcy5zY3NzIiwid2VicGFjazovLy8uL3d3dy9jc3Mvc2Nyb2xsQXJyb3cuc2NzcyIsIndlYnBhY2s6Ly8vLi93d3cvY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vd3d3L2Nzcy90YWJsZS5zY3NzIiwid2VicGFjazovLy8uL3d3dy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwiSG9tZSIsIm1haW5MYXJnZVBob3RvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxpdmluZ1Jvb21QaG90byIsInF1b3RlUGFyYWdyYXBoIiwicHJvZ3Jlc3NDb250YWluZXIiLCJhcnJvd0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJtZW51IiwiaW5pdCIsInByb3RvdHlwZSIsIndhaXRGb3JNYWluSW1hZ2VMb2FkIiwic2V0QW5pbWF0ZUxpc3RlbmVycyIsImltZyIsIkltYWdlIiwic3JjIiwib25sb2FkIiwic2V0QXR0cmlidXRlIiwiY2xhc3NMaXN0IiwiYWRkIiwic3R5bGUiLCJkaXNwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsInF1b3RlQW5pbWF0aW9uRmluYWxpemUiLCJtYWluSW1hZ2VBbmltYXRpb25GaW5hbGl6ZSIsInRvZ2dsZU1lbnUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsIiwiY29udGFpbnMiLCJvcGFjaXR5IiwidG9nZ2xlIiwiaG9tZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVB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LFNBRDFEO0FBRUgsS0FiRDs7QUFlQTNCLFNBQUtZLFNBQUwsQ0FBZWEsc0JBQWYsR0FBd0MsWUFBWTtBQUNoRHhCLHVCQUFlbUIsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsU0FBN0I7QUFDQWhCLHVCQUFlZSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixTQUE3QjtBQUNILEtBSEQ7O0FBS0FyQixTQUFLWSxTQUFMLENBQWVjLDBCQUFmLEdBQTRDLFlBQVk7QUFDcEQsWUFBSSxDQUFDekIsZUFBZW1CLFNBQWYsQ0FBeUJXLFFBQXpCLENBQWtDLFNBQWxDLENBQUwsRUFBbUQ7QUFDL0MzQiw0QkFBZ0JrQixLQUFoQixDQUFzQlUsT0FBdEIsR0FBZ0MsQ0FBaEM7QUFDQS9CLDJCQUFlbUIsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsU0FBN0I7QUFDQWQsMkJBQWVlLEtBQWYsQ0FBcUJVLE9BQXJCLEdBQStCLEdBQS9CO0FBQ0F2QixnQkFBSWEsS0FBSixDQUFVVSxPQUFWLEdBQW9CLEdBQXBCO0FBQ0g7QUFDSixLQVBEOztBQVNBaEMsU0FBS1ksU0FBTCxDQUFlZSxVQUFmLEdBQTRCLFlBQVk7QUFDcENsQixZQUFJVyxTQUFKLENBQWNhLE1BQWQsQ0FBcUIsTUFBckI7QUFDQXZCLGFBQUtVLFNBQUwsQ0FBZWEsTUFBZixDQUFzQixNQUF0QjtBQUNILEtBSEQ7O0FBS0EsV0FBT2pDLElBQVA7QUFDSCxDQS9EVSxFQUFYO0FBZ0VBLElBQUlrQyxPQUFPLElBQUlsQyxJQUFKLEVBQVgsQyIsImZpbGUiOiIuL3d3dy9qcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vd3d3L1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE4MjhhOTI1ODM1ZWExOTI2NzZmIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3d3dy9jc3MvbWVudS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93d3cvY3NzL3Byb2dyZXNzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3d3dy9jc3Mvc2Nyb2xsQXJyb3cuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3d3L2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi93d3cvY3NzL3RhYmxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcGFnZSBsb2FkIGludHJvXG5yZXF1aXJlKCcuLi9jc3Mvc3R5bGUuc2NzcycpO1xucmVxdWlyZSgnLi4vY3NzL3Byb2dyZXNzLnNjc3MnKTtcbnJlcXVpcmUoJy4uL2Nzcy9zY3JvbGxBcnJvdy5zY3NzJyk7XG5yZXF1aXJlKCcuLi9jc3MvdGFibGUuc2NzcycpO1xucmVxdWlyZSgnLi4vY3NzL21lbnUuc2NzcycpO1xuXG52YXIgSG9tZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWFpbkxhcmdlUGhvdG89IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkxhcmdlUGhvdG9cIik7XG4gICAgY29uc3QgbGl2aW5nUm9vbVBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXZpbmdSb29tUGhvdG9cIik7XG4gICAgY29uc3QgcXVvdGVQYXJhZ3JhcGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1b3RlXCIpO1xuICAgIGNvbnN0IHByb2dyZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9ncmVzc0NvbnRhaW5lclwiKVxuICAgIGNvbnN0IGFycm93Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvdy1jb250YWluZXJcIik7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcblxuICAgIGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIEhvbWUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2FpdEZvck1haW5JbWFnZUxvYWQoKTtcbiAgICAgICAgdGhpcy5zZXRBbmltYXRlTGlzdGVuZXJzKCk7XG4gICAgfTtcblxuICAgIEhvbWUucHJvdG90eXBlLndhaXRGb3JNYWluSW1hZ2VMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBcImh0dHBzOi8vd3d3LmhhbGZkb21lcGhvdG8uY29tL2ltZy9tb2JpbGUtYmcuanBnXCI7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBtYWluTGFyZ2VQaG90by5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJodHRwczovL3d3dy5oYWxmZG9tZXBob3RvLmNvbS9pbWcvbW9iaWxlLWJnLmpwZ1wiKTtcbiAgICAgICAgICAgIG1haW5MYXJnZVBob3RvLmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgICAgICAgICBwcm9ncmVzc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgSG9tZS5wcm90b3R5cGUuc2V0QW5pbWF0ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBxdW90ZVBhcmFncmFwaC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0QW5pbWF0aW9uRW5kXCIsIHRoaXMucXVvdGVBbmltYXRpb25GaW5hbGl6ZSwgZmFsc2UpO1xuICAgICAgICBxdW90ZVBhcmFncmFwaC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMucXVvdGVBbmltYXRpb25GaW5hbGl6ZSwgZmFsc2UpO1xuICAgICAgICBxdW90ZVBhcmFncmFwaC5hZGRFdmVudExpc3RlbmVyKFwib2FuaW1hdGlvbmVuZFwiLCB0aGlzLnF1b3RlQW5pbWF0aW9uRmluYWxpemUsIGZhbHNlKTtcblxuICAgICAgICBtYWluTGFyZ2VQaG90by5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0QW5pbWF0aW9uRW5kXCIsIHRoaXMubWFpbkltYWdlQW5pbWF0aW9uRmluYWxpemUsIGZhbHNlKTtcbiAgICAgICAgbWFpbkxhcmdlUGhvdG8uYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLm1haW5JbWFnZUFuaW1hdGlvbkZpbmFsaXplLCBmYWxzZSk7XG4gICAgICAgIG1haW5MYXJnZVBob3RvLmFkZEV2ZW50TGlzdGVuZXIoXCJvYW5pbWF0aW9uZW5kXCIsIHRoaXMubWFpbkltYWdlQW5pbWF0aW9uRmluYWxpemUsIGZhbHNlKTtcblxuICAgICAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMudG9nZ2xlTWVudSwgZmFsc2UpO1xuICAgICAgICBtZW51LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaVwiKS5mb3JFYWNoKChlbCkgPT5cbiAgICAgICAgICAgIHtlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy50b2dnbGVNZW51LCBmYWxzZSl9KTtcbiAgICB9O1xuICAgIFxuICAgIEhvbWUucHJvdG90eXBlLnF1b3RlQW5pbWF0aW9uRmluYWxpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1haW5MYXJnZVBob3RvLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlXCIpO1xuICAgICAgICBxdW90ZVBhcmFncmFwaC5jbGFzc0xpc3QuYWRkKFwiZmFkZW91dFwiKTtcbiAgICB9O1xuICAgIFxuICAgIEhvbWUucHJvdG90eXBlLm1haW5JbWFnZUFuaW1hdGlvbkZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIW1haW5MYXJnZVBob3RvLmNsYXNzTGlzdC5jb250YWlucyhcImZhZGVvdXRcIikpIHtcbiAgICAgICAgICAgIGxpdmluZ1Jvb21QaG90by5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICAgIG1haW5MYXJnZVBob3RvLmNsYXNzTGlzdC5hZGQoXCJmYWRlb3V0XCIpO1xuICAgICAgICAgICAgYXJyb3dDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDEwMDtcbiAgICAgICAgICAgIG5hdi5zdHlsZS5vcGFjaXR5ID0gLjM1O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEhvbWUucHJvdG90eXBlLnRvZ2dsZU1lbnUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSG9tZTtcbn0pKCk7XG5sZXQgaG9tZSA9IG5ldyBIb21lKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==