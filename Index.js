'use strict';
let imgbox = document.getElementById('imagebox');
let img = document.getElementById('img');
const imagesArray = ["images/DSC_0290 (1) (1).jpg", "images/IMG_20220929_084524.jpg"];
const tabs = document.querySelectorAll('.tablinks');
const tabContent = document.querySelectorAll('.tabcontent');

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

//Script for tabs
tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    tab.classList.add('active');
    const line = document.querySelector('.line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";
    tabContent.forEach((content) =>{
      content.classList.remove('active');
    })
    tabContent[index].classList.add('active');
  })
})