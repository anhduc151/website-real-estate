//===========Start To initialize Swiper in credit to Vladimir Kharlampidi  ================//

const swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Optional parameters
    items: 3,
    loop: true,
    'spaceBetween' : 20,
    'centeredSlides': true,
    breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 20,
        },  
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
      }
  });
//===========End To initialize Swiper in JS================//