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
    var mainImage = document.querySelector("#bg img");
    var quoteParagraph = document.querySelector("#bg p");

    function Home() {
        this.init();
    }
    Home.prototype.init = function () {
        this.waitForMainImageLoad();
        this.animate();
    };
    Home.prototype.waitForMainImageLoad = function () {
        var img = new Image();
        img.src = "https://www.halfdomephoto.com/img/mobile-bg.jpg";
        img.onload = function () {
            mainImage.setAttribute("src", "https://www.halfdomephoto.com/img/mobile-bg.jpg");
            mainImage.classList.add("loaded");
        };
    };
    Home.prototype.animate = function () {
        console.log('now');
        console.log(quoteParagraph);
        quoteParagraph.addEventListener("webkitAnimationEnd", this.callFunction, false);
        quoteParagraph.addEventListener("animationend", this.callFunction, false);
        quoteParagraph.addEventListener("oanimationend", this.callFunction, false);
    };
    Home.prototype.callFunction = function () {
        console.log('this');
        mainImage.classList.add("animate");
    };

    return Home;
}();
var home = new Home();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmVlNmMxY2Y4MTUzMjcxOWM3OWYiLCJ3ZWJwYWNrOi8vLy4vd3d3L2Nzcy9zdHlsZS5zY3NzPzJhYmUiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJIb21lIiwibWFpbkltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVvdGVQYXJhZ3JhcGgiLCJpbml0IiwicHJvdG90eXBlIiwid2FpdEZvck1haW5JbWFnZUxvYWQiLCJhbmltYXRlIiwiaW1nIiwiSW1hZ2UiLCJzcmMiLCJvbmxvYWQiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbGxGdW5jdGlvbiIsImhvbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ2hFQSx5Qzs7Ozs7Ozs7O0FDQUE7QUFDQSxtQkFBQUEsQ0FBUSxDQUFSOztBQUVBLElBQUlDLE9BQVEsWUFBWTtBQUNwQixRQUFNQyxZQUFZQyxTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBQWxCO0FBQ0EsUUFBTUMsaUJBQWlCRixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQXZCOztBQUVBLGFBQVNILElBQVQsR0FBZ0I7QUFDWixhQUFLSyxJQUFMO0FBQ0g7QUFDREwsU0FBS00sU0FBTCxDQUFlRCxJQUFmLEdBQXNCLFlBQVk7QUFDOUIsYUFBS0Usb0JBQUw7QUFDQSxhQUFLQyxPQUFMO0FBQ0gsS0FIRDtBQUlBUixTQUFLTSxTQUFMLENBQWVDLG9CQUFmLEdBQXNDLFlBQVk7QUFDOUMsWUFBSUUsTUFBTSxJQUFJQyxLQUFKLEVBQVY7QUFDQUQsWUFBSUUsR0FBSixHQUFVLGlEQUFWO0FBQ0FGLFlBQUlHLE1BQUosR0FBYSxZQUFXO0FBQ3BCWCxzQkFBVVksWUFBVixDQUF1QixLQUF2QixFQUE4QixpREFBOUI7QUFDQVosc0JBQVVhLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0gsU0FIRDtBQUlILEtBUEQ7QUFRQWYsU0FBS00sU0FBTCxDQUFlRSxPQUFmLEdBQXlCLFlBQVk7QUFDakNRLGdCQUFRQyxHQUFSLENBQVksS0FBWjtBQUNBRCxnQkFBUUMsR0FBUixDQUFZYixjQUFaO0FBQ0FBLHVCQUFlYyxnQkFBZixDQUFnQyxvQkFBaEMsRUFBc0QsS0FBS0MsWUFBM0QsRUFBeUUsS0FBekU7QUFDQWYsdUJBQWVjLGdCQUFmLENBQWdDLGNBQWhDLEVBQWdELEtBQUtDLFlBQXJELEVBQW1FLEtBQW5FO0FBQ0FmLHVCQUFlYyxnQkFBZixDQUFnQyxlQUFoQyxFQUFpRCxLQUFLQyxZQUF0RCxFQUFvRSxLQUFwRTtBQUNILEtBTkQ7QUFPQW5CLFNBQUtNLFNBQUwsQ0FBZWEsWUFBZixHQUE4QixZQUFZO0FBQ3RDSCxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQWhCLGtCQUFVYSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixTQUF4QjtBQUNILEtBSEQ7O0FBS0EsV0FBT2YsSUFBUDtBQUNILENBaENVLEVBQVg7QUFpQ0EsSUFBSW9CLE9BQU8sSUFBSXBCLElBQUosRUFBWCxDIiwiZmlsZSI6Ii4vd3d3L2pzL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGlkZW50aXR5IGZ1bmN0aW9uIGZvciBjYWxsaW5nIGhhcm1vbnkgaW1wb3J0cyB3aXRoIHRoZSBjb3JyZWN0IGNvbnRleHRcbiBcdF9fd2VicGFja19yZXF1aXJlX18uaSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfTtcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi93d3cvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYmVlNmMxY2Y4MTUzMjcxOWM3OWYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd3d3L2Nzcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHBhZ2UgbG9hZCBpbnRyb1xucmVxdWlyZSgnLi4vY3NzL3N0eWxlLnNjc3MnKTtcblxudmFyIEhvbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1haW5JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmcgaW1nXCIpO1xuICAgIGNvbnN0IHF1b3RlUGFyYWdyYXBoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZyBwXCIpO1xuXG4gICAgZnVuY3Rpb24gSG9tZSgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuICAgIEhvbWUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMud2FpdEZvck1haW5JbWFnZUxvYWQoKTtcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XG4gICAgfTtcbiAgICBIb21lLnByb3RvdHlwZS53YWl0Rm9yTWFpbkltYWdlTG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gXCJodHRwczovL3d3dy5oYWxmZG9tZXBob3RvLmNvbS9pbWcvbW9iaWxlLWJnLmpwZ1wiO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7IFxuICAgICAgICAgICAgbWFpbkltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImh0dHBzOi8vd3d3LmhhbGZkb21lcGhvdG8uY29tL2ltZy9tb2JpbGUtYmcuanBnXCIpO1xuICAgICAgICAgICAgbWFpbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEhvbWUucHJvdG90eXBlLmFuaW1hdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdub3cnKTtcbiAgICAgICAgY29uc29sZS5sb2cocXVvdGVQYXJhZ3JhcGgpO1xuICAgICAgICBxdW90ZVBhcmFncmFwaC5hZGRFdmVudExpc3RlbmVyKFwid2Via2l0QW5pbWF0aW9uRW5kXCIsIHRoaXMuY2FsbEZ1bmN0aW9uLCBmYWxzZSk7XG4gICAgICAgIHF1b3RlUGFyYWdyYXBoLmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgdGhpcy5jYWxsRnVuY3Rpb24sIGZhbHNlKTtcbiAgICAgICAgcXVvdGVQYXJhZ3JhcGguYWRkRXZlbnRMaXN0ZW5lcihcIm9hbmltYXRpb25lbmRcIiwgdGhpcy5jYWxsRnVuY3Rpb24sIGZhbHNlKTtcbiAgICB9O1xuICAgIEhvbWUucHJvdG90eXBlLmNhbGxGdW5jdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMnKTtcbiAgICAgICAgbWFpbkltYWdlLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlXCIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gSG9tZTtcbn0pKCk7XG5sZXQgaG9tZSA9IG5ldyBIb21lKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vd3d3L2pzL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==