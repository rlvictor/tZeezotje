const swiper1 = new Swiper(".swiper:first-of-type", {
  //   loop: true,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const swiper2 = new Swiper(".swiper:nth-of-type(2)", {
  // loop: true,
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: "auto",
  spaceBetween: 30,
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
