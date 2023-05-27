var swiper = new Swiper(".mySwiperReview", {
      breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
         spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
    
    loop: true,
            autoplay: {
          delay: 1000,
          pauseOnMouseEnter: true,
        },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});