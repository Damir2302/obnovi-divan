$(document).ready(function() {

    // BANNER SLIDER
    let bannerSlider;

    bannerSliderRun();

    function bannerSliderRun() {
        bannerSlider = new Swiper(".banner__slider .swiper", {
            slidesPerView: 1,

            navigation: {
                nextEl: '.banner__nav-next',
                prevEl: '.banner__nav-prev',
            },

            pagination: {
                el: ".banner-pagination",
                clickable: true,
            }
        })
    }


    // POPULAR SECTION
    $('.popular__slider').each(function(index) {
        var $this = $(this);
        $this.addClass('popular__slider-' + index);

        var popularSlider = new Swiper(`.popular__slider-${index} .swiper`, {
            slidesPerView: "auto",
            spaceBetween: 8,
            freeMode: true,

            navigation: {
                nextEl: `.popular__slider-${index} .slider-nav-next`,
                prevEl: `.popular__slider-${index} .slider-nav-prev`,
            },

            breakpoints: {
                744: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    freeMode: false
                },

                1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    freeMode: false
                },

                1260: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                    freeMode: false
                }
            }
        })

    })

    // USEFUL SECTION
    var usefulSlider = new Swiper(`.useful .swiper`, {
        slidesPerView: "auto",
        spaceBetween: 8,
        freeMode: true,

        navigation: {
            nextEl: '.useful .slider-nav-next',
            prevEl: '.useful .slider-nav-prev',
        },

        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 16,
                freeMode: false
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                freeMode: false
            },

            1260: {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: false
            }
        }
    })

    // PROPOSAL SECTION
    var proposalSlider = new Swiper(`.proposal .swiper`, {
        slidesPerView: "auto",
        spaceBetween: 8,
        freeMode: true,

        navigation: {
            nextEl: `.proposal .slider-nav-next`,
            prevEl: `.proposal .slider-nav-prev`,
        },

        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 16,
                freeMode: false
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                freeMode: false
            },

            1260: {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: false
            }
        }
    })

    // GALLERY SLIDER
    var gallerySlider = new Swiper(`.gallery .swiper`, {
        slidesPerView: 1.2,
        spaceBetween: 8,
        freeMode: true,

        navigation: {
            nextEl: `.gallery .slider-nav-next`,
            prevEl: `.gallery .slider-nav-prev`,
        },

        breakpoints: {
            744: {
                slidesPerView: 3,
                spaceBetween: 16,
                freeMode: false
            },

            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
                freeMode: false
            },

            1260: {
                slidesPerView: 3,
                spaceBetween: 30,
                freeMode: false
            }
        }
    })

    // FOOTER TAB
    let footerTabSlider;
    let footerTabSliderInit;

    footerTabSliderRun();

    $(window).on("resize", function () {
        footerTabSliderRun();
    });

    function footerTabSliderRun() {
        if (!footerTabSliderInit && $(window).width() < 744) {
            footerTabSliderInit = true;
            footerTabSlider = new Swiper(".footer__tabs .swiper", {
                slidesPerView: "auto",
                freeMode: true,
            })
        } else {
            if (typeof footerTabSlider !== "undefined") {
                footerTabSliderInit = false;
                footerTabSlider.destroy();
            }
        }
    }

})