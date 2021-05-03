// init lazy loading
const observer = lozad();
observer.observe();

$(document).ready(function() {

    const heroHeight = $('.hero').height()
    $(window).scroll(function() {
        if ($(window).scrollTop() > heroHeight) {
            $('.to-top-btn').addClass('show')
        } else {
            $('.to-top-btn').removeClass('show')
        }
    })

    $('.navbar-toggler').click(function() {
        if ($('body').hasClass('menu-opened')) {
            $('body').removeClass('menu-opened')
        } else {
            $('body').addClass('menu-opened')
        }
    })

    $('.office-slider').owlCarousel({
        dots: false,
        nav: true,
        navElement: 'div',
        items: 3,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 1500,
        smartSpeed: 500,
        responsive: {
            320: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });

    $('.reviews-slider').owlCarousel({
        dots: true,
        nav: true,
        navElement: 'div',
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000
    });
})