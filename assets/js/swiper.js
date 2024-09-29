// top slide loop text
const swiperText = new Swiper('#js-swiperText', {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    loopedSlides: 2,
    speed: 5000,
    cssEase: 'linear',
    autoplay: {
    delay: 0,
    disableOnInteraction: false,
    },
});

// top slide loop images
const swiperImages = new Swiper('#js-swiperImages', {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    loopedSlides: 2,
    speed: 5000,
    cssEase: 'linear',
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});