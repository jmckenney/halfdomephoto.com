// page load intro
require('../css/style.scss');

let img = new Image();
img.onload = function() { 
    let mainImage = document.querySelector("#bg img");
    mainImage.setAttribute("src", "https://www.halfdomephoto.com/img/mobile-bg.jpg");
    mainImage.classList.add("loaded");
}
img.src = "https://www.halfdomephoto.com/img/mobile-bg.jpg";