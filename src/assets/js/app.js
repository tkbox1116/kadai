/* ==============================
    Drawer
  ============================== */
const drawer = function () {
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
};

/* ==============================
    タブ切り替え
  ============================== */
const tabChange = function () {
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
};

/* ==============================
    ページトップ
  ============================== */
const pageTop = function () {
  const scrollTopBtn = document.querySelector(".js-scrollTop");
  scrollTopBtn.addEventListener("click", function () {
    window.scroll({ top: 0, behavior: "smooth" });
  });
};

/* ==============================
    ページ内リンク
  ============================== */
const pageLink = function () {
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
};

// $(function () {
//   const smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
//   smoothScrollTriggers.forEach((smoothScrollTrigger) => {
//     smoothScrollTrigger.addEventListener("click", (event) => {
//       // aタグの無効化
//       event.preventDefault();
//       //クリックしたliのhref取得
//       let href = smoothScrollTrigger.getAttribute("href");

//       let targetElement = document.getElementById(href.replace("#", ""));

//       // ブラウザからの高さを取得(ドキュメントの左上からターゲットまでの位置を取得)
//       const rect = targetElement.getBoundingClientRect().top;

//       // 現在のスクロール量を取得(ドキュメントの左上からのスクロール量を取得)
//       const offset = window.pageYOffset;

//       // 固定ヘッダー分の高さ
//       const gap = 60;

//       const target = rect + offset - gap;
//       //  window.scrollToで特定の組み合わせの座標までスクロール
//       window.scrollTo({
//         top: target,
//         behavior: "smooth",
//       });
//     });
//   });

//   /* ==============================
//     アコーディオン
//   ============================== */
//   $(".js-accordion dt").click(function () {
//     $(this).next().slideToggle();
//     $(this).toggleClass("is-active");
//   });
// });

// GSAP;
const fades = gsap.utils.toArray(".fade_in");

fades.forEach((fade_in, i) => {
  const anim = gsap.fromTo(fade_in, { autoAlpha: 0, y: 90 }, { duration: 1, autoAlpha: 1, y: 0 });
  ScrollTrigger.create({
    trigger: fade_in, // 発火の基準
    animation: anim,
    start: "100px 90%", // ビューポートの設定
    // markers: true, // 検証用のマーカーを表示
    toggleActions: "play none complete none", // アクション下スクロールで1回だけ
    ease: "power1.easeIn0ut", // イージング
  });
});

/* ==============================
    swiper
  ============================== */
var topSwiper = new Swiper(".swiper-top", {
  centeredSlides: true, //1枚目のスライド中央配置
  slidesPerView: "auto", //必須
  spaceBetween: 20, //余白
  initialSlide: 1, //最初に何枚目のスライドを表示させるか
  loop: false,

  navigation: {
    nextEl: ".nextTop", //ボタン表示
    prevEl: ".prevTop", //ボタン表示
  },

  pagination: {
    el: ".pageTop", //ページネーション表示
    type: "bullets", //ページネーション ドット
    clickable: true,
  },

  breakpoints: {
    // 1024px以上の場合
    1024: {
      centeredSlides: false, //1枚目のスライド中央配置
    },
  },
});

/* ==============================
    venobox
  ============================== */
new VenoBox({
  selector: ".my-video-links",
});

// ----------------------------------------
// DOM生成後
window.addEventListener("DOMContentLoaded", function () {
  drawer();
  tabChange();
  pageTop();
  pageLink();
});

// ----------------------------------------
// ページの全データを読み込み後
window.addEventListener("load", function () {});

// ----------------------------------------
// スクロール後
window.addEventListener("scroll", function () {});

console.log("テスト");
