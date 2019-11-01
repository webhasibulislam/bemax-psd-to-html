(function ($) {
"use strict";

// owl-carousel
$('.slider-active').owlCarousel({
    loop:true,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }
})
// project-active
$('.project-active').owlCarousel({
    loop:true,
    dots: false,
    autoplay: true,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 3
        },
        1000:{
            items: 4
        }
    }
})

// Blog active
$('.blog-active').owlCarousel({
    loop:true,
    autoplay: true,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }
})

// testimonial active
$('.testimonial-active').owlCarousel({
    loop:true,
    nav: true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 1
        },
        1000:{
            items: 1
        }
    }
})
// brand-active
$('.brand-active').owlCarousel({
    loop:true,
    autoplay: true,
    nav: false,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items: 1
        },
        600:{
            items: 4
        },
        1000:{
            items: 6
        }
    }
})

$('.popup-video').magnificPopup({
    type: 'iframe'
})



})(jQuery);