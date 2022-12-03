// postcss専用の設定ファイル
module.exports = {
  plugins: [
    require("autoprefixer")({
      grid: "autoplace", //IE11対応
    }),

    require("css-declaration-sorter")({
      order: "smacss", //cssの並び順
    }),
  ],
};
