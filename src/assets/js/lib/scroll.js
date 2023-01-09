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
      y: 30,
      start: "top 60%",
    },

    effect: (targets, config) => {
      return gsap.fromTo(
        targets,
        {
          opacity: 0,
          y: config.y,
          // filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          // filter: "blur(0px)",
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

  const fadesTop01 = document.querySelectorAll(".js-fadeTop01");
  fadesTop01.forEach((fadeTop01) => {
    gsap.effects.scrollAnim(fadeTop01, { start: "top 85%" });
  });

  const fadesTop02 = document.querySelectorAll(".js-fadeTop02");
  fadesTop02.forEach((fadeTop02) => {
    gsap.effects.scrollAnim(fadeTop02, { start: "top 115%" });
  });
}
