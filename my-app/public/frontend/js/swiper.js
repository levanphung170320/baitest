var swiper =  new Swiper(".carousel", {
    loop:true,
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 35,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 35,
        },
        1300: {
            slidesPerView:1,
            spaceBetween: 35,
        },
    },
});
