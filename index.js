const buttonMenu = document.querySelector('.header__menu');
const menu = document.querySelector('.lateral-menu')

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle("lateral-menu--active")
})