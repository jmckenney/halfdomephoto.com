// page load intro
require('../css/style.scss');

var Home = (function () {
    const mainImage = document.querySelector("#bg img");
    const quoteParagraph = document.querySelector("#bg p");

    function Home() {
        this.init();
    }
    Home.prototype.init = function () {
        this.waitForMainImageLoad();
        this.animate();
    };
    Home.prototype.waitForMainImageLoad = function () {
        let img = new Image();
        img.src = "https://www.halfdomephoto.com/img/mobile-bg.jpg";
        img.onload = function() { 
            mainImage.setAttribute("src", "https://www.halfdomephoto.com/img/mobile-bg.jpg");
            mainImage.classList.add("loaded");
        }
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
})();
let home = new Home();