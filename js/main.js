document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".Swiper", {
      slidesPerView: 8,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 8,
        },
      },
    });
  });
  

  
document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".swipers", {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 7,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 8,
        },
      },
    });
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    new Swiper(".Swiperc", {
      slidesPerView: 8,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop: true,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
      },
    });
  });