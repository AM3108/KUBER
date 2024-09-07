window.addEventListener('scroll', function() {
    const banner = document.querySelector('.investment-banner');
    const scrollPosition = window.scrollY;

    if(scrollPosition > 100) {
        banner.classList.add('scrolled');
    } else {
        banner.classList.remove('scrolled');
    }
});