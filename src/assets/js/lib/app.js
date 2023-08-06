export default function () {
  window.addEventListener("DOMContentLoaded", () => {
    body.classList.add("is-open");
  });

  /* ==============================
    menuButton
  ============================== */
  const menuButton = document.querySelector(".js-memu-button");
  const menuOverlay = document.querySelector(".p-header__overlay");
  const body = document.querySelector("body");

  menuButton.addEventListener("click", function () {
    body.classList.toggle("is-drawerActive");

    if (this.getAttribute("aria-expanded") == "false") {
      this.setAttribute("aria-expanded", true);
    } else {
      this.setAttribute("aria-expanded", false);
    }
  });
  menuOverlay.addEventListener("click", function () {
    body.classList.remove("is-drawerActive");
    if (menuButton.getAttribute("aria-expanded") == "false") {
      menuButton.setAttribute("aria-expanded", true);
    } else {
      menuButton.setAttribute("aria-expanded", false);
    }
  });

  /* ==============================
    ページトップ
  ============================== */
  const scrollTopBtn = document.querySelector(".js-scrollTop");
  scrollTopBtn.addEventListener("click", function (e) {
    e.preventDefault();
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

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const gap = 32;
        const target = rect + offset - gap;
        window.scrollTo({
          top: target,
          behavior: "smooth",
        });
      }

      if (menuButton.getAttribute("aria-expanded") == "true") {
        menuButton.setAttribute("aria-expanded", false);
        body.classList.remove("is-drawerActive");
      }
    });
  });

  // hoverContentをhoverした時、親の子のstyleImageにイベント発火
  const hoverContents = document.querySelectorAll(".product-body__bottom");

  hoverContents.forEach((hoverContent) => {
    hoverContent.addEventListener("mouseenter", () => {
      const parentArticle = hoverContent.closest("article.style-content");
      const styleImage = parentArticle.querySelector(".style-image");

      styleImage.classList.add("is-hover");
    });

    hoverContent.addEventListener("mouseleave", () => {
      const parentArticle = hoverContent.closest("article.style-content");
      const styleImage = parentArticle.querySelector(".style-image");

      styleImage.classList.remove("is-hover");
    });
  });
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
