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

    /*go up arrow*/
    $(window).scroll(function () {
        var scrollDiv = $('#Go_Top');
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") {/*показывать при прокрутке вниз показывать медленно #Go_Top*/
            $(this).fadeIn("slow")
        };
        if ($(window).scrollTop() <= "250") {/*при прокрутке ввверх медленно скрывать #Go_Top*/
            $(scrollDiv).fadeOut("slow");
        }
        else {
            $(scrollDiv).fadeIn("slow")
        };
    });
    $('#Go_Top').click(function () {/*функция плавной прокрутки вверх при клике на стрелку "вверх"*/
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    /*close go up arrow*/
});
