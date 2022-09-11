"use strict";

var swiper = new Swiper(".artist-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: -50,
    depth: 200,
    modifier: 6,
    slideShadows: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    992: {
      slidesPerView: 2
    }
  }
});
$(document).ready(function () {
  $('.navbar__input__icon').click(function (e) {
    e.preventDefault();
    $('.navbar__input').toggleClass('show');
  });
});
//# sourceMappingURL=all.js.map
