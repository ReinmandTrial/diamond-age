$('.toggle-btn').on('click', function () {
   var btn = $(this);
   var block = btn.closest('.toggle-block');

   btn.closest('.toggle-block').find('.toggle-body').slideToggle('slow');

   block.find('.toggle-show').slideToggle('slow');
})

$('.toggle-btn--close').on('click', function () {
   var btn = $(this);
   var block = btn.closest('.toggle-block');
   $(this).closest('.toggle-block').find('.toggle-body').slideToggle('slow');
   block.find('.toggle-show').slideToggle('slow');
})


//burger mobile
$('.burger-btn').on('click', function () {
   $(this).closest('.header__content').find('.burger-menu').toggleClass('burger-open');
})
//burger mobile end

/* slider-price-all start */
new Swiper('.slider-price-all__container', {
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
   },
   breakpoints: {
      0: {
         slidesPerView: 2,
         simulateTouch: true,
         touchRatio: 1,
      },
      576: {
         slidesPerView: 4,
         simulateTouch: false,
         touchRatio: 0,
      },
   },
});
/* slider-price-all end */

/* slidercalc start */
new Swiper('.slider-calc', {
   navigation: {
      nextEl: '',
      prevEl: '',
   },
   simulateTouch: false,
   // touchRatio: 0,
   // slidesPerView: 1,
   pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
   },
});
/* slider-calc end */

/* slider-completed start */
new Swiper('.completed__slider-container', {
   loop: true,
   slideToClickedSlide: true,
   // slidesPerView: 3,
   // spaceBetween: 30,
   navigation: {
      nextEl: '.completed-button-next',
      prevEl: '.completed-button-prev',
   },
   breakpoints: {
      0: {
         slidesPerView: 1,
      },
      576: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },
});
/* slider-completed end */

// popup
$('.btn-popup').on('click', function () {
   $('.popup').fadeIn();
})
//нажатие вне body
$(document).on('click', function (e) {
   if (!$(e.target).closest(".popup__content").length && !$(e.target).closest(".btn-popup").length) {
      $('.popup').fadeOut();
   }
   e.stopPropagation();
});
   //нажатие вне body
//popup end