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

    /*single modal toogle block*/
    $('.menu-icon').click(function(){
        $(".top-menu").slideToggle("slow",function() {
        });
        $(".become_model").slideUp("slow",function() {
        });
        return false;
    });
    $('.become-model').click(function(){
        $(".become_model").slideDown("slow",function() {
        });
        return false;
    });
    /*close single modal toogle block*/

    $('.menu-icon').click(function () {
        if($(this).hasClass('menu-icon-active')){
            $('.menu-icon').removeClass('menu-icon-active');
        }
        else {
            $('.menu-icon').addClass('menu-icon-active');
        }
    });
});
