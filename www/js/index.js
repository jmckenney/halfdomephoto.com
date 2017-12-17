// page load intro
require('../css/style.scss');
require('../css/progress.scss');
require('../css/scrollArrow.scss');
require('../css/table.scss');
require('../css/menu.scss');

var Home = (function () {
    const mainLargePhoto= document.getElementById("mainLargePhoto");
    const livingRoomPhoto = document.getElementById("livingRoomPhoto");
    const quoteParagraph = document.getElementById("quote");
    const progressContainer = document.getElementById("progressContainer")
    const arrowContainer = document.querySelector(".arrow-container");
    const nav = document.getElementById("nav");
    const menu = document.getElementById("menu");

    function Home() {
        this.init();
    }

    Home.prototype.init = function () {
        this.waitForMainImageLoad();
        this.setAnimateListeners();
    };

    Home.prototype.waitForMainImageLoad = function () {
        let img = new Image();
        img.src = "https://www.halfdomephoto.com/img/mobile-bg.jpg";
        img.onload = function() { 
            mainLargePhoto.setAttribute("src", "https://www.halfdomephoto.com/img/mobile-bg.jpg");
            mainLargePhoto.classList.add("loaded");
            progressContainer.style.display = "none";
        }
    };

    Home.prototype.setAnimateListeners = function () {

        quoteParagraph.addEventListener("webkitAnimationEnd", this.quoteAnimationFinalize, false);
        quoteParagraph.addEventListener("animationend", this.quoteAnimationFinalize, false);
        quoteParagraph.addEventListener("oanimationend", this.quoteAnimationFinalize, false);

        mainLargePhoto.addEventListener("webkitAnimationEnd", this.mainImageAnimationFinalize, false);
        mainLargePhoto.addEventListener("animationend", this.mainImageAnimationFinalize, false);
        mainLargePhoto.addEventListener("oanimationend", this.mainImageAnimationFinalize, false);

        nav.addEventListener("click", this.toggleMenu, false);
        menu.querySelectorAll("li").forEach((el) =>
            {el.addEventListener("click", this.toggleMenu, false)});
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
    }

    return Home;
})();
let home = new Home();