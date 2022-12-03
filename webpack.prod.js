// 本番用
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// 第一引数に共通パーツ、第二引数に開発用を
module.exports = merge(common, {
  mode: "production", //ビルドモードの変更, 本番用はproductionモード
});
