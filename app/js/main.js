$('.toggle-btn').on('click', function () {
   var btn = $(this);
   var block = btn.closest('.toggle-block');
   block.toggleClass('open');
   if (block.hasClass('open')) {
      btn.closest('.toggle-block').find('.toggle-body').fadeIn();
   } else {
      btn.closest('.toggle-block').find('.toggle-body').fadeOut();
   }
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
      nextEl: '.slider-calc__button-next',
      prevEl: '.slider-calc__button-prev',
   },
   simulateTouch: false,
   touchRatio: 0,
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
$('.popup-close').on('click', function () {
   $('.popup').fadeOut();
})
//нажатие вне body
//popup end

//плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href').substr(1)

      document.getElementById(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}


// $(document).ready(function(){
//    $(window).on('scroll', checkScrollTop);

//   checkScrollTop();
//   function checkScrollTop(){
//       if(window.pageYOffset >= 300){
//          $('.btn-swipe').addClass('active');
//       }else{
//          $('.btn-swipe').removeClass('active');
//       }
//    }
// })
// четвертая страница
$('.stages-of-work__item').on('click',function(){
   var btn = $(this);
   var btns = btn.closest('.stages-of-work__nav').find('.stages-of-work__item');
   var count;
   var blocks = btn.closest('.stages-of-work__container').find('.stages-of-work-block');
   $(btns).each(function(){
      $(this).removeClass('active');
   })
   btn.addClass('active');

   $(btns).each(function(index){
      if($(this).hasClass('active')){
         count = index;
      }
   })

   $(blocks).each(function(index){
      if(index === count){
         $(this).addClass('active')
      }else{
         $(this).removeClass('active')
      }
   })
})
// четвертая страница