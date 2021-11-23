let lastScrollTop = 0;
const scrollElegantly = (e) => {
    console.log(e.target);
    if (e.target === document.querySelector('.screen-down')) {
        console.log('run')
    }
    let currentScrollTop = document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop){
        if (currentScrollTop < document.documentElement.clientHeight) {
            window.scrollTo({
                top: document.documentElement.clientHeight, behavior: 'smooth'
            });
        }
    } else {
        if (currentScrollTop < document.documentElement.clientHeight) {
            window.scrollTo({
                top: 0, behavior: 'smooth'
            });
        }
    }
    lastScrollTop = currentScrollTop;
}