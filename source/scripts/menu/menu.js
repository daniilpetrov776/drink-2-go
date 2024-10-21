export const burgerButton = document.querySelector('.header-menu__header-menu-button--burger');
const menuIcon = burgerButton.querySelector('.header-menu-icon--burger').children[0];
const headerNav = document.querySelector('.header__header-nav');

const checkViewportAndShowNav = () => {
  if (window.innerWidth <= 767) {
    setTimeout(() => {
      if (headerNav) {
        headerNav.classList.remove('--hidden');
      }
    }, 1000);
  }
};
checkViewportAndShowNav();

const burgerButtonClickHandler = () => {
  if (headerNav.classList.contains('header-nav--hidden')) {
    headerNav.classList.remove('header-nav--hidden');
    headerNav.classList.add('header-nav--visible');
    menuIcon.href.baseVal = './icons/stack.svg#menu-closed-icon';
  } else {
    headerNav.classList.remove('header-nav--visible');
    headerNav.classList.add('header-nav--hidden');
    menuIcon.href.baseVal = './icons/stack.svg#burger-icon';
  }
};

burgerButton.addEventListener('click', burgerButtonClickHandler);
