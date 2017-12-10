// page load intro
require('../css/style.scss');

var Home = (function () {
    const mainLargePhoto= document.getElementById("mainLargePhoto");
    const livingRoomPhoto = document.getElementById("livingRoomPhoto");
    const quoteParagraph = document.getElementById("quote");

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
        }
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
})();
let home = new Home();