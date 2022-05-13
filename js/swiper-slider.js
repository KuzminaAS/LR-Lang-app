if (document.querySelector('.swiper')) {
    new Swiper('.swiper', {
        observer: true,
        observerParents: true,
        slidesPerView: 1,
        spaceBetween: 32,
        watchOverflow: true,
        speed: 800,
        preloadImages: false,
        navigation: {
            nextEl: '.slider__arrows .slider-arrow_right',
            prevEl: '.slider__arrows .slider-arrow_left'
        }
    });
}