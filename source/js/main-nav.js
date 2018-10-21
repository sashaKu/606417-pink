var navPageHeader = document.querySelector('.page-header');
var navPageFill = navPageHeader.querySelector('.page-header__box');
var navMainNav = document.querySelector('.main-nav');
var navList = navMainNav.querySelector('.main-nav__list');
var navClose = navMainNav.querySelector('.main-nav__close');
var navOpen = navMainNav.querySelector('.main-nav__open');

navOpen.addEventListener('click', function() {
    navOpen.classList.toggle('main-nav__toggle--active');
    navClose.classList.toggle('main-nav__toggle--active');
    navList.classList.toggle('main-nav__list--closed');
    navPageHeader.classList.toggle('page-header__menu--closed');
    navPageFill.classList.toggle('page-header__box-fill');
});

navClose.addEventListener('click', function() {
    navOpen.classList.toggle('main-nav__toggle--active');
    navClose.classList.toggle('main-nav__toggle--active');
    navList.classList.toggle('main-nav__list--closed');
    navPageHeader.classList.toggle('page-header__menu--closed');
    navPageFill.classList.toggle('page-header__box-fill');
});
