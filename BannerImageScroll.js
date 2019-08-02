//I was too lazy to give the buttons IDs so I just used the class with an index of 0. I do what I want.
var backButton = document.getElementsByClassName('banner-back-button')[0];
var forwardButton = document.getElementsByClassName('banner-forward-button')[0];
var bannerContainer = document.getElementsByClassName('image-banner-images')[0];

var images = document.getElementsByClassName('image-banner-image-wrapper');

backButton.onclick = function() {scrollBackward()};
forwardButton.onclick = function() {scrollForward()};

function scrollBackward () {
    bannerContainer.prepend(images[images.length - 1]);
    images = document.getElementsByClassName('image-banner-image-wrapper');
}

function scrollForward () {
    bannerContainer.appendChild(images[0]);
    images = document.getElementsByClassName('image-banner-image-wrapper');
}