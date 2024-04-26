"use strict";
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const header__nav = document.querySelector('.header__nav');
const closeBg = document.querySelector('.close-bg');
menuBtn.addEventListener('click', () => {
    header__nav.classList.add('active');
    closeBg.classList.add('active');
});
closeBg.addEventListener('click', () => {
    header__nav.classList.remove('active');
    closeBg.classList.remove('active');
});
closeBtn.addEventListener('click', () => {
    header__nav.classList.remove('active');
    closeBg.classList.remove('active');
});
