const mainNav = document.querySelector('.header');

window.onscroll = function() {
    windowScroll();
};

function windowScroll() {
mainNav.classList.toggle("bottom_line", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
};

const burger = document.querySelector('#burger');
const menu_mobile = document.querySelector('.slide-fade');
const mobile_link1 = document.querySelector('.mobile-link1');
const mobile_link2 = document.querySelector('.mobile-link2');
const mobile_link3 = document.querySelector('.mobile-link3');
const mobile_link4 = document.querySelector('.mobile-link4');



burger.addEventListener("click", () => {
    menu_mobile.classList.toggle("open_burger");
});

mobile_link1.addEventListener("click", () => {
    menu_mobile.classList.toggle("open_burger");
});
mobile_link2.addEventListener("click", () => {
    menu_mobile.classList.toggle("open_burger");
});
mobile_link3.addEventListener("click", () => {
    menu_mobile.classList.toggle("open_burger");
});
mobile_link4.addEventListener("click", () => {
    menu_mobile.classList.toggle("open_burger");
});