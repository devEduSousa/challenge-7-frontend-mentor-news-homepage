let container = document.querySelector('.container');
let menuOpener = document.querySelector('.menu-opener');
let menuClosed = document.querySelector('.close-icon');
let mobileNav = document.querySelector('.mobile-nav');


menuOpener.addEventListener('click', () => {
    container.style.opacity = '.3';
    mobileNav.classList.add('show');
});

menuClosed.addEventListener('click', () => {
    container.style.opacity = '1';
    mobileNav.classList.remove('show');
});