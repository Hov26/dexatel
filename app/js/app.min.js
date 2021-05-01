$(document).ready(function() {

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
})