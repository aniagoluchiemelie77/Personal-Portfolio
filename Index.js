'use strict';
let imgbox = document.getElementById('imagebox');
let img = document.getElementById('img');
const imagesArray = ["images/DSC_0290 (1) (1).jpg", "images/IMG_20220929_084524.jpg"];

let numImages = imagesArray.length;
let i = 0; 

setInterval( function() {
  let src = imagesArray[i];
  img.src = src;
  i++;
  if (i == numImages) {
    i = 0;
  }

}, 6000); // Change every 6 seconds
