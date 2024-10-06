// top slide loop text
// const swiperText = new Swiper('.js-swiperText', {
//     centeredSlides: true,
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     loop: true,
//     speed: 5000,
//     cssEase: 'linear',
//     pauseOnFocus: false,
//     allowTouchMove: false,
//     autoplay: {
//         delay: 0,
//         disableOnInteraction: false,
//         reverseDirection: true,
//     },
// });

// top slide loop images
const swiperImages = new Swiper('.js-swiperImages', {
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    loopedSlides: 2,
    speed: 5000,
    cssEase: 'linear',
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

// top slide News
const swiperNews = new Swiper('.js-swiperNews', {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: -25,
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
      // ページネーション
    pagination: {
        el: ".js-swiperNews__pagination",
        clickable: true,
        type: "fraction",
    },
    // 前後の矢印
    navigation: {
        nextEl: ".js-swiperNews__next",
        prevEl: ".js-swiperNews__prev",
    },
});