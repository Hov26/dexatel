// init lazy loading
const observer = lozad();
observer.observe();

$(document).ready(function() {

    $(function() {
        $("#datepicker").datepicker();
    });

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