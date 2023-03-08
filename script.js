const btnMenu = document.querySelector('.js-btn-menu');
isMenuActive = false;
btnMenu.addEventListener('click', () => {
    const menu = document.querySelector('.js-menu');
    if(!isMenuActive) {
        menu.setAttribute('style', 'transform: translateY(21%)');
        isMenuActive = true;
    }
    else {
        menu.setAttribute('style', 'transform: translateY(-120%)');
        isMenuActive = false;
    }
    
})