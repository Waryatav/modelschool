$(document).ready(function () {

    // слайдер на главной странице(смена фона)
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:10000,
        autoplayHoverPause:true
    });

});
