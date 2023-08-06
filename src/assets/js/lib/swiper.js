import Swiper from "swiper/bundle"; // 全ての機能が入っている
("use strict");

const styleSwiper = new Swiper(".styleSwiper", {
  direction: "vertical",
  mousewheel: true,
  releaseOnEdges: true,

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  freeMode: {
    enabled: true,
    // sticky: true,
    minimumVelocity: 0.02,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// const mySwiper = new Swiper(".mySwiper", {
//   centeredSlides: false, //1枚目のスライド中央配置
//   slidesPerView: 1.2, //必須
//   spaceBetween: 20, //余白
//   initialSlide: 0, //最初に何枚目のスライドを表示させるか
//   loop: false,
//   grabCursor: true,

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

// const reviewSwiper = new Swiper(".reviewSwiper", {
//   centeredSlides: false, //1枚目のスライド中央配置
//   slidesPerView: 1.4, //必須
//   spaceBetween: 20, //余白
//   initialSlide: 0, //最初に何枚目のスライドを表示させるか
//   loop: false,
//   grabCursor: true,
// });

// export { mySwiper, reviewSwiper };
export { styleSwiper };
