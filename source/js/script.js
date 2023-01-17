const button = document.querySelector(".header__button");
const toggle = document.querySelector(".navigation__toggle");
const nav__list = document.querySelector(".navigation__list");

//console.dir('button');

const menu_open = function() {
    nav__list.classList.toggle('navigation__list-closed');
    nav__list.classList.toggle('navigation__list-opened');
};

const menu_close = function() {
    nav__list.classList.toggle('navigation__list-closed');
    nav__list.classList.toggle('navigation__list-opened');
};

button.addEventListener('click', menu_open);
toggle.addEventListener('click', menu_close);