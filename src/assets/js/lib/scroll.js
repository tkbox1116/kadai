import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function () {
  gsap.config({
    nullTargetWarn: false,
  });

  /*
  fadeIn
-----------------------------------------------------*/
  gsap.registerEffect({
    name: "scrollAnim",
    // デフォルトの設定
    defaults: {
      duration: 1,
      y: 20,
      start: "top 60%",
    },

    effect: (targets, config) => {
      return gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: config.y,
          filter: "blur(3px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: config.duration,
          ease: "Power2.easeOut",

          scrollTrigger: {
            trigger: targets,
            start: config.start,
            // markers: true,
          },
        },
      );
    },
  });

  const fadesTop01 = document.querySelectorAll(".js-fade");
  fadesTop01.forEach((fadeTop01) => {
    gsap.effects.scrollAnim(fadeTop01, { start: "top 85%" });
  });

  ScrollTrigger.create({
    trigger: ".style-container__inner",
    start: "top 30%",
    end: "bottom 70%",
    toggleClass: { targets: ".style-container__buttonWrap", className: "is-show" },
    // markers: true,
  });

  ScrollTrigger.create({
    trigger: "#item01",
    start: "top center",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no01", className: "is-active" },
  });

  ScrollTrigger.create({
    trigger: "#item02",
    start: "top center",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no02", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item03",
    start: "top center",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no03", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item04",
    start: "top center",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no04", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item05",
    start: "top 56%",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no05", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item06",
    start: "top 56%",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no06", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item07",
    start: "top 56%",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no07", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item08",
    start: "top 60%",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no08", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item09",
    start: "top 60%",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no09", className: "is-active" },
  });
  ScrollTrigger.create({
    trigger: "#item010",
    start: "top 60%",
    end: "bottom center",
    toggleClass: { targets: ".style-container__button.-no010", className: "is-active" },
  });
}
