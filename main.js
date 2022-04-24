"use strict"
const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__body');
const choseLang = document.querySelector('.chose-language')
console.log(document.querySelector('.header').offsetHeight)
if(iconMenu) {
    iconMenu.addEventListener('click',() => {
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        choseLang.classList.toggle('_active');
    })
}

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock')
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
                choseLang.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
        }
    }
}