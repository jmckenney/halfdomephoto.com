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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// page load intro
__webpack_require__(0);

var Home = function () {
    var mainLargePhoto = document.getElementById("mainLargePhoto");
    var livingRoomPhoto = document.getElementById("livingRoomPhoto");
    var quoteParagraph = document.getElementById("quote");

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
            mainLargePhoto.classList.add("fadeout");
        }
    };

    return Home;
}();
var home = new Home();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDk0YjE2MzRlM2QxYjhiNzgzNzQiLCJ3ZWJwYWNrOi8vLy4vd3d3L2Nzcy9zdHlsZS5zY3NzPzJhYmUiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJIb21lIiwibWFpbkxhcmdlUGhvdG8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibGl2aW5nUm9vbVBob3RvIiwicXVvdGVQYXJhZ3JhcGgiLCJpbml0IiwicHJvdG90eXBlIiwid2FpdEZvck1haW5JbWFnZUxvYWQiLCJzZXRBbmltYXRlTGlzdGVuZXJzIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicXVvdGVBbmltYXRpb25GaW5hbGl6ZSIsIm1haW5JbWFnZUFuaW1hdGlvbkZpbmFsaXplIiwiY29udGFpbnMiLCJob21lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1EQUEyQyxjQUFjOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNoRUEseUM7Ozs7Ozs7OztBQ0FBO0FBQ0EsbUJBQUFBLENBQVEsQ0FBUjs7QUFFQSxJQUFJQyxPQUFRLFlBQVk7QUFDcEIsUUFBTUMsaUJBQWdCQyxTQUFTQyxjQUFULENBQXdCLGdCQUF4QixDQUF0QjtBQUNBLFFBQU1DLGtCQUFrQkYsU0FBU0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBeEI7QUFDQSxRQUFNRSxpQkFBaUJILFNBQVNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBdkI7O0FBRUEsYUFBU0gsSUFBVCxHQUFnQjtBQUNaLGFBQUtNLElBQUw7QUFDSDs7QUFFRE4sU0FBS08sU0FBTCxDQUFlRCxJQUFmLEdBQXNCLFlBQVk7QUFDOUIsYUFBS0Usb0JBQUw7QUFDQSxhQUFLQyxtQkFBTDtBQUNILEtBSEQ7O0FBS0FULFNBQUtPLFNBQUwsQ0FBZUMsb0JBQWYsR0FBc0MsWUFBWTtBQUM5QyxZQUFJRSxNQUFNLElBQUlDLEtBQUosRUFBVjtBQUNBRCxZQUFJRSxHQUFKLEdBQVUsaURBQVY7QUFDQUYsWUFBSUcsTUFBSixHQUFhLFlBQVc7QUFDcEJaLDJCQUFlYSxZQUFmLENBQTRCLEtBQTVCLEVBQW1DLGlEQUFuQztBQUNBYiwyQkFBZWMsU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0I7QUFDSCxTQUhEO0FBSUgsS0FQRDs7QUFTQWhCLFNBQUtPLFNBQUwsQ0FBZUUsbUJBQWYsR0FBcUMsWUFBWTtBQUM3Q0osdUJBQWVZLGdCQUFmLENBQWdDLG9CQUFoQyxFQUFzRCxLQUFLQyxzQkFBM0QsRUFBbUYsS0FBbkY7QUFDQWIsdUJBQWVZLGdCQUFmLENBQWdDLGNBQWhDLEVBQWdELEtBQUtDLHNCQUFyRCxFQUE2RSxLQUE3RTtBQUNBYix1QkFBZVksZ0JBQWYsQ0FBZ0MsZUFBaEMsRUFBaUQsS0FBS0Msc0JBQXRELEVBQThFLEtBQTlFOztBQUVBakIsdUJBQWVnQixnQkFBZixDQUFnQyxvQkFBaEMsRUFBc0QsS0FBS0UsMEJBQTNELEVBQXVGLEtBQXZGO0FBQ0FsQix1QkFBZWdCLGdCQUFmLENBQWdDLGNBQWhDLEVBQWdELEtBQUtFLDBCQUFyRCxFQUFpRixLQUFqRjtBQUNBbEIsdUJBQWVnQixnQkFBZixDQUFnQyxlQUFoQyxFQUFpRCxLQUFLRSwwQkFBdEQsRUFBa0YsS0FBbEY7QUFDSCxLQVJEOztBQVVBbkIsU0FBS08sU0FBTCxDQUFlVyxzQkFBZixHQUF3QyxZQUFZO0FBQ2hEakIsdUJBQWVjLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFNBQTdCO0FBQ0FYLHVCQUFlVSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixTQUE3QjtBQUNILEtBSEQ7O0FBS0FoQixTQUFLTyxTQUFMLENBQWVZLDBCQUFmLEdBQTRDLFlBQVk7QUFDcEQsWUFBSSxDQUFDbEIsZUFBZWMsU0FBZixDQUF5QkssUUFBekIsQ0FBa0MsU0FBbEMsQ0FBTCxFQUFtRDtBQUMvQ25CLDJCQUFlYyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixTQUE3QjtBQUNIO0FBQ0osS0FKRDs7QUFNQSxXQUFPaEIsSUFBUDtBQUNILENBN0NVLEVBQVg7QUE4Q0EsSUFBSXFCLE9BQU8sSUFBSXJCLElBQUosRUFBWCxDIiwiZmlsZSI6Ii4vd3d3L2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi93d3cvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDk0YjE2MzRlM2QxYjhiNzgzNzQiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3d3L2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHBhZ2UgbG9hZCBpbnRyb1xucmVxdWlyZSgnLi4vY3NzL3N0eWxlLnNjc3MnKTtcblxudmFyIEhvbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1haW5MYXJnZVBob3RvPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5MYXJnZVBob3RvXCIpO1xuICAgIGNvbnN0IGxpdmluZ1Jvb21QaG90byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGl2aW5nUm9vbVBob3RvXCIpO1xuICAgIGNvbnN0IHF1b3RlUGFyYWdyYXBoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJxdW90ZVwiKTtcblxuICAgIGZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIEhvbWUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2FpdEZvck1haW5JbWFnZUxvYWQoKTtcbiAgICAgICAgdGhpcy5zZXRBbmltYXRlTGlzdGVuZXJzKCk7XG4gICAgfTtcblxuICAgIEhvbWUucHJvdG90eXBlLndhaXRGb3JNYWluSW1hZ2VMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBcImh0dHBzOi8vd3d3LmhhbGZkb21lcGhvdG8uY29tL2ltZy9tb2JpbGUtYmcuanBnXCI7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICBtYWluTGFyZ2VQaG90by5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJodHRwczovL3d3dy5oYWxmZG9tZXBob3RvLmNvbS9pbWcvbW9iaWxlLWJnLmpwZ1wiKTtcbiAgICAgICAgICAgIG1haW5MYXJnZVBob3RvLmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgSG9tZS5wcm90b3R5cGUuc2V0QW5pbWF0ZUxpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcXVvdGVQYXJhZ3JhcGguYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdEFuaW1hdGlvbkVuZFwiLCB0aGlzLnF1b3RlQW5pbWF0aW9uRmluYWxpemUsIGZhbHNlKTtcbiAgICAgICAgcXVvdGVQYXJhZ3JhcGguYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLnF1b3RlQW5pbWF0aW9uRmluYWxpemUsIGZhbHNlKTtcbiAgICAgICAgcXVvdGVQYXJhZ3JhcGguYWRkRXZlbnRMaXN0ZW5lcihcIm9hbmltYXRpb25lbmRcIiwgdGhpcy5xdW90ZUFuaW1hdGlvbkZpbmFsaXplLCBmYWxzZSk7XG5cbiAgICAgICAgbWFpbkxhcmdlUGhvdG8uYWRkRXZlbnRMaXN0ZW5lcihcIndlYmtpdEFuaW1hdGlvbkVuZFwiLCB0aGlzLm1haW5JbWFnZUFuaW1hdGlvbkZpbmFsaXplLCBmYWxzZSk7XG4gICAgICAgIG1haW5MYXJnZVBob3RvLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcy5tYWluSW1hZ2VBbmltYXRpb25GaW5hbGl6ZSwgZmFsc2UpO1xuICAgICAgICBtYWluTGFyZ2VQaG90by5hZGRFdmVudExpc3RlbmVyKFwib2FuaW1hdGlvbmVuZFwiLCB0aGlzLm1haW5JbWFnZUFuaW1hdGlvbkZpbmFsaXplLCBmYWxzZSk7XG4gICAgfTtcbiAgICBcbiAgICBIb21lLnByb3RvdHlwZS5xdW90ZUFuaW1hdGlvbkZpbmFsaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBtYWluTGFyZ2VQaG90by5jbGFzc0xpc3QuYWRkKFwiYW5pbWF0ZVwiKTtcbiAgICAgICAgcXVvdGVQYXJhZ3JhcGguY2xhc3NMaXN0LmFkZChcImZhZGVvdXRcIik7XG4gICAgfTtcbiAgICBcbiAgICBIb21lLnByb3RvdHlwZS5tYWluSW1hZ2VBbmltYXRpb25GaW5hbGl6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFtYWluTGFyZ2VQaG90by5jbGFzc0xpc3QuY29udGFpbnMoXCJmYWRlb3V0XCIpKSB7XG4gICAgICAgICAgICBtYWluTGFyZ2VQaG90by5jbGFzc0xpc3QuYWRkKFwiZmFkZW91dFwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gSG9tZTtcbn0pKCk7XG5sZXQgaG9tZSA9IG5ldyBIb21lKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==