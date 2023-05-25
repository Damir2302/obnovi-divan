$(document).ready(function() {

    // GALLERY SLIDER
    var gallerySlider = new Swiper(`.works .swiper`, {
        slidesPerView: 'auto',
        spaceBetween: 30,
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

    // VIDEO PORTFOLIO SLIDER
    var gallerySlider = new Swiper(`.p-videos .swiper`, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,

        navigation: {
            nextEl: `.p-videos .slider-arrow--right`,
            prevEl: `.p-videos .slider-arrow--left`,
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

    // REVIEW SLIDER
    var reviewSlider = new Swiper(`.review .swiper`, {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,

        navigation: {
            nextEl: `.review .slider-arrow--right`,
            prevEl: `.review .slider-arrow--left`,
        },

        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            1260: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    })

    // TABS SLIDER
    let tabsSlider
    let tabsSliderInit
    
    function tabsSliderRun() {
        if ($(window).width() < 744) {
            if(!tabsSliderInit) {
                tabsSliderInit = true
                tabsSlider = new Swiper(`.tabs .swiper`, {
                    slidesPerView: 'auto',
                    spaceBetween: 10,
                    freeMode: true,
                    slidesOffsetAfter: 0
                })
            }
        } else {
            if (typeof tabsSlider !== "undefined") {
                tabsSliderInit = false
                tabsSlider.destroy()
            }
        }
    }
    
    tabsSliderRun()

    $(window).on('resize', function() {
        tabsSliderRun()
    })
})