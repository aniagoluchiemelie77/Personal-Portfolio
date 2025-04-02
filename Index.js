'use strict';
let imgbox = document.getElementById('imagebox');
let img = document.getElementById('img');
const imagesArray = ["images/DSC_0290 (1) (1).jpg", "images/IMG_20220929_084524.jpg"];
const tabs = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll('.tabcontent');

let numImages = imagesArray.length;
let i = 0; 
AOS.init();
