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
   // grabCursor: true,
   simulateTouch: false,
   // loop: true,
   // slideToClickedSlide: true,
   // slidesPerView: 4,
   breakpoints: {
      0: {
         slidesPerView: 2,
      },
      576: {
         slidesPerView: 4,
      },
   },
});
/* slider-price-all end */