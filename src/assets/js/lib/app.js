export default function () {
  /* ==============================
    Drawer
  ============================== */

  const buttonHamburger = document.querySelector(".js-drawer");
  const body = document.querySelector("body");

  buttonHamburger.addEventListener("click", function () {
    body.classList.toggle("is-drawerActive");

    if (this.getAttribute("aria-expanded") == "false") {
      this.setAttribute("aria-expanded", true);
    } else {
      this.setAttribute("aria-expanded", false);
    }
  });

  /* ==============================
    タブ切り替え
  ============================== */
  //.js-tab__button > *を取得
  const tabButtons = document.querySelectorAll(".js-tab__button > *");
  tabButtons.forEach((tabBtn) => {
    tabBtn.addEventListener("click", function (event) {
      event.preventDefault();

      const thisElm = this;
      const thisTabWrap = thisElm.closest(".js-tab");
      const thisTabButtons = [...thisTabWrap.querySelectorAll(".js-tab__button > *")];
      const thisTabContents = [...thisTabWrap.querySelectorAll(".js-tab__content > *")];
      const currentClass = "is-tab";

      // クリックしたボタンが何番目か取得する
      const thisElmIndex = thisTabButtons.indexOf(thisElm);

      thisTabButtons.forEach((thisTabBtn) => {
        //.js-tab__button > * から is-tab を削除
        thisTabBtn.classList.remove(currentClass);
        //クリックした.js-tab__button > * に is-tab を追加
        thisElm.classList.add(currentClass);
      });

      thisTabContents.forEach((thisTabContent) => {
        //.js-tab__content > * から is-tab を削除
        thisTabContent.classList.remove(currentClass);
        // クリックした.js-tab__button > * と同じindex番号の.js-tab__contentに is-tabを追加
        thisTabContents[thisElmIndex].classList.add(currentClass);
      });
    });
  });

  /* ==============================
    ページトップ
  ============================== */
  const scrollTopBtn = document.querySelector(".js-scrollTop");
  scrollTopBtn.addEventListener("click", function () {
    window.scroll({ top: 0, behavior: "smooth" });
  });

  /* ==============================
    ページ内リンク
  ============================== */
  const smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
  smoothScrollTriggers.forEach((smoothScrollTrigger) => {
    smoothScrollTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger.getAttribute("href");
      let targetElement = document.getElementById(href.replace("#", ""));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 0;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: "smooth",
      });
    });
  });

  /* ==============================
    swiper
  ============================== */
  // var topSwiper = new Swiper(".swiper-top", {
  //   centeredSlides: true, //1枚目のスライド中央配置
  //   slidesPerView: "auto", //必須
  //   spaceBetween: 20, //余白
  //   initialSlide: 1, //最初に何枚目のスライドを表示させるか
  //   loop: false,

  //   navigation: {
  //     nextEl: ".nextTop", //ボタン表示
  //     prevEl: ".prevTop", //ボタン表示
  //   },

  //   pagination: {
  //     el: ".pageTop", //ページネーション表示
  //     type: "bullets", //ページネーション ドット
  //     clickable: true,
  //   },

  //   breakpoints: {
  //     // 1024px以上の場合
  //     1024: {
  //       centeredSlides: false, //1枚目のスライド中央配置
  //     },
  //   },
  // });
}

// // ----------------------------------------
// // DOM生成後
// window.addEventListener("DOMContentLoaded", function () {

// });

// // ----------------------------------------
// // ページの全データを読み込み後
// window.addEventListener("load", function () {});

// // ----------------------------------------
// // スクロール後
// window.addEventListener("scroll", function () {});

console.log("テスト");
