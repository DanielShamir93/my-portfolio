document.addEventListener('scroll', (e) => {
    let currentScrollTop = document.documentElement.scrollTop;
    if (currentScrollTop > document.documentElement.clientHeight - 100) {
        const list = document.querySelectorAll('.about-me.line');
        for (let i = 0; i < list.length; i++) {
            list[i].style.animation = `show-from-left-animation 3s ease-out forwards ${i * 3}s`;
        }
    }
});

const spaceshipContainer = document.querySelector('.spaceship-container');
const SCREEN_NUMBER = 3;
lastScrollPosition = 0;
document.addEventListener('scroll', (e) => {
    let currentScrollPosition = window.scrollY;

    if (window.scrollY > lastScrollPosition) {
        // Scroll down
        spaceshipContainer.style.setProperty('--spaceship-scale', '1');
        spaceshipContainer.style.top = '40vh';

        if (window.scrollY < document.documentElement.clientHeight * SCREEN_NUMBER) {
            // Scroll down until get to the asked screen
            window.scrollBy(0, 20)
        }
    }else {
        // Scroll up
        spaceshipContainer.style.setProperty('--spaceship-rotate', '0deg');

        if (window.scrollY > 0) {
            window.scrollBy(0, -20)
        }

        if (window.scrollY === 0) {
            spaceshipContainer.style.setProperty('--spaceship-scale', '0.3');
            spaceshipContainer.style.setProperty('--spaceship-rotate', '180deg');
            spaceshipContainer.style.top = '72vh';
        }
    }

    lastScrollPosition = currentScrollPosition;
});