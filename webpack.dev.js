// 開発用
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

// 第一引数に共通パーツ、第二引数に開発用を
module.exports = merge(common, {
  mode: "development", //ビルドモードの変更, 開発用development
  devtool: "source-map", //開発用
  watch: true, //監視モードを有効化　開発用
});
