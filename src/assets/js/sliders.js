$(document).ready(function() {

    // GALLERY SLIDER
    var gallerySlider = new Swiper(`.works .swiper`, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freeMode: true,
        simulateTouch: false,
        centeredSlides: true,
        loop: true,

        navigation: {
            nextEl: `.works .slider-arrow--right`,
            prevEl: `.works .slider-arrow--left`,
        },

        breakpoints: {
            1024: {
                spaceBetween: 100,
            },

            1440: {
                spaceBetween: 150,
            }
        }
    })


})