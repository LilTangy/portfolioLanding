"use strict"
const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body');
const choseLang = document.querySelector('.chose-language')
if(iconMenu) {
    iconMenu.addEventListener('click',() => {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        choseLang.classList.toggle('_active');
    })
}