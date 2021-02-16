// jQuery(document).ready(function($) {
    (function () {
      var toggle = document.querySelector('.nav-toggle'),
          menu = document.querySelector('.nav');
      
      toggle.addEventListener('click', function(e) {
        this.classList.toggle('opened');
        menu.classList.toggle('opened');
      });
    })();
//     (function () {
//         var toggle = document.querySelector('.nav-toggle');
        
//         $('.nav-toggle').click(function(e) {
//         //   $(this).addClass('opened');
//           $('.nav').addClass('opened');
//         });

//         $('.menu_close').click(function(e) {
//             // $('.nav-toggle').removeClass('opened');
//             $('.nav').removeClass('opened');
//         });

//     })();
//     var mySwiper = new Swiper('.slider_block .swiper-container', {
//         speed: 700,
//         autoplay: {
//             delay: 7000,
//         },
//         loop: true,
//         navigation: {
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//         },
//         pagination: {
//             el: '.swiper-pagination',
//             type: 'bullets',
//           },
//     });
//     var swiper = new Swiper('.slider2 .swiper-container', {
//         slidesPerView: 3,
//         spaceBetween: 30,
//         // pagination: {
//         //   el: '.swiper-pagination',
//         //   clickable: true,
//         // },
//         navigation: {
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         },
//       });
// });
