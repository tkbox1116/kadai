import VenoBox from "venobox";
export default function () {
  /* ==============================
    venobox
  ============================== */
  new VenoBox({
    selector: ".js-modal",
    infinigall: true,
    numeratio: true,
    maxWidth: "600px",
    overlayColor: "rgba(255,255,255,0.85)",
    titlePosition: "bottom",
  });
}
