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

$(document).ready(function () {
  $(".promo__button").on("click", function () {
    $(".overlay, .modal").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal, .feed-form").fadeOut("slow");
    // setTimeout(() => window.location.reload(), 1000);
  });

  // Отправка на почту
  $("form").submit(function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize(),
    }).done(function () {
      $(this).find("input").val("");
      $(".modal, .feed-form").fadeOut("slow");
      $(".modal__feed").fadeIn("slow");
      $("form").trigger("reset");
    });
    return false;
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".mini__menu"),
    hamburger = document.querySelector(".promo__header-hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("promo__header-hamburger-active");
    menu.classList.toggle("mini__menu-active");
  });

  menuList.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("promo__header-hamburger-active");
      menu.classList.toggle("mini__menu-active");
    });
  });
});
