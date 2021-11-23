const startSecondScreenAnimations = (e) => {
    let currentScrollTop = document.documentElement.scrollTop;
    if (currentScrollTop > document.documentElement.clientHeight - 100) {
        const list = document.querySelectorAll('.about-me-content p');
        console.log(list);
        for (let i = 0; i < list.length; i++) {
            list[i].style.animation = `show-from-left-animation 3s ease-out forwards ${i * 3}s`;
        }
    }
}