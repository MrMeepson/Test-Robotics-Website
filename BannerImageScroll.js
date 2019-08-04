//I was too lazy to give the buttons IDs so I just used the class with an index of 0. I do what I want.
var backButton = document.getElementsByClassName('banner-back-button')[0];
var forwardButton = document.getElementsByClassName('banner-forward-button')[0];
var bannerContainer = document.getElementsByClassName('image-banner-images')[0];

var images = document.getElementsByClassName('image-banner-image-wrapper');

var pxSizes = [750, 1000, 1250, 1500];

backButton.onclick = function() {scrollBackward()};
forwardButton.onclick = function() {scrollForward()};
window.onresize = function() {calibrateDisplay()};
window.onload = function() {calibrateDisplay()};

function scrollBackward () {
    bannerContainer.prepend(images[images.length - 1]);
    images = document.getElementsByClassName('image-banner-image-wrapper');
    calibrateDisplay();
}

function scrollForward () {
    bannerContainer.appendChild(images[0]);
    images = document.getElementsByClassName('image-banner-image-wrapper');
    calibrateDisplay();
}

function calibrateDisplay () {
    //Imitialize variables
    var pageWidth = window.innerWidth;
    var numberOfImagesToDisplay = 3;
    
    for (var i = 0; i < pxSizes.length; i++) {
        if (pageWidth <+ pxSizes[i]) {
            numberOfImagesToDisplay = i + 1;
            var buttonSize = (240 / numberOfImagesToDisplay) + "px";
            backButton.style.height = buttonSize;
            backButton.style.width = buttonSize;
            forwardButton.style.height = buttonSize;
            forwardButton.style.width = buttonSize;
            break;
        }
        else {
            numberOfImagesToDisplay = pxSizes.length;
        }
    }
    
    if (numberOfImagesToDisplay > images.length) {
        numberOfImagesToDisplay = images.length;
    }
    
    for (var j = 0; j < images.length; j++) {
        if (j < numberOfImagesToDisplay) {
            images[j].style.display = "flex";
            images[j].style.width = (100 / numberOfImagesToDisplay) + "%";
        }
        else {
            images[j].style.display = "none";
        }
    }
}