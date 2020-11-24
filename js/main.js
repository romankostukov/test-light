jQuery(document).ready(function($) {
    (function () {
        var toggle = document.querySelector('.nav-toggle');
        
        $('.nav-toggle').click(function(e) {
        //   $(this).addClass('opened');
          $('.nav').addClass('opened');
        });

        $('.menu_close').click(function(e) {
            // $('.nav-toggle').removeClass('opened');
            $('.nav').removeClass('opened');
        });

    })();
    var mySwiper = new Swiper('.swiper-container', {
        speed: 700,
        autoplay: {
            delay: 7000,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    
});