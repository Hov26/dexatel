// init lazy loading
const observer = lozad();
observer.observe();

$(document).ready(function() {

    // Show/hide go to top button
    const heroHeight = $('.hero').height()
    $(window).scroll(function() {
        if ($(window).scrollTop() > heroHeight) {
            $('.to-top-btn').addClass('show')
        } else {
            $('.to-top-btn').removeClass('show')
        }
    })

    // Scroll top top function
    $('.to-top-btn').click(function() {
        $(window).scrollTop(0);
    })

    // Open/close menu
    $('.navbar-toggler').click(function() {
        if ($('body').hasClass('menu-opened')) {
            $('body').removeClass('menu-opened')
        } else {
            $('body').addClass('menu-opened')
        }
    })

    // init office slider
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

    // init reviews slider
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