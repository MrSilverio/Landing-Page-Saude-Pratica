var swiper = new Swiper(".about-Product", {
  slidesPerView: 1.2,
  spaceBetween: 25,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    412: {
      slidesPerView: 1.4,
    },
    486: {
      slidesPerView: 1.75,
    },
    576: {
      slidesPerView: 2.2,
    },
    640: {
      slidesPerView: 2.4,
    },
    720: {
      slidesPerView: 2.6,
    },
    768: {
      slidesPerView: 3.1,
    },
    920: {
      slidesPerView: 3.4,
    },
    1080: {
      slidesPerView: 3.6,
    }
  }
});