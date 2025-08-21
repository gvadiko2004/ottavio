const swiperSlider = new Swiper(".swiper-slider", {
  // Основные параметры
  direction: "horizontal",
  loop: true,
  centeredSlides: true,   // исправлено
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 4,

  // Навигация
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
