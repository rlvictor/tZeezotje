const swiper1 = new Swiper(".swiper:first-of-type", {
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      pagination: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});

const swiper2 = new Swiper(".swiper:nth-of-type(2)", {
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: "auto",
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      pagination: false,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
});

$(document).ready(function () {
  $(".promo__button").on("click", function () {
    $(".overlay, .modal").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay, .modal, .feed-form").fadeOut("slow");
  });

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
    menuList = document.querySelectorAll(".mini__menu-list"),
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
