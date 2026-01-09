const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');
const linkTraditions = document.querySelector('.menu-btn-close1');
const linkChefs = document.querySelector('.menu-btn-close2');
const linkFormats = document.querySelector('.menu-btn-close3');
const linkContacts = document.querySelector('.menu-btn-close4');
const logoBtnClose = document.querySelector('.logo-btn');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);
linkTraditions.addEventListener('click', toggleMenu);
linkChefs.addEventListener('click', toggleMenu);
linkFormats.addEventListener('click', toggleMenu);
linkContacts.addEventListener('click', toggleMenu);
logoBtnClose.addEventListener('click', toggleMenu);
