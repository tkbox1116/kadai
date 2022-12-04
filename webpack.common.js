const path = require("path");
const globule = require("globule");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMqpackerPlugin = require("css-mqpacker-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); //watchを有効にして使う

// ==========================
//  複数ページ対応
// ==========================
const templates = [];
const documents = globule.find(`./src/html/**/*.html`, {
  ignore: [`./src/html/**/_*.html`],
});

documents.forEach((document) => {
  const fileName = document.replace(`./src/html/`, "").replace(".pug", ".html");
  templates.push(
    new HtmlWebpackPlugin({
      filename: `${fileName}`,
      template: document,
      inject: false,
      minify: false,
    }),
  );
});

module.exports = {
  entry: {
    main: "./src/assets/js/main.js", //エントリーポイントの変更 オブジェクト形式にすることで複数のファイルにバンドルできる
    // main: "./src/assets/ts/main.ts", // Type script
    // sub: "./src/assets/js/lib/sub.js",
  },

  output: {
    path: path.resolve(__dirname, "public"), //出⼒先は絶対パス.resolve()でパスを補完 __dirname 現在のディレクトリ dist→publicに変更
    filename: "./assets/js/[name].bundle.js", //出力されるファイル名の変更
  },

  stats: {
    children: true,
  },

  module: {
    rules: [
      {
        // JS / TS
        test: /\.(js|ts)$/, //対象となるファイル
        enforce: "pre", //先に実行
        exclude: /node_modules/, //excludeで除外
        loader: "eslint-loader",
        options: {
          fix: true, //autofixモードの有効化
          failOnError: true, //エラー検出時にビルドを中断
        },
      },

      {
        // SCSS
        test: /\.scss$/, //対象となるファイル。正規表現を使う
        use: [
          MiniCssExtractPlugin.loader, //cssファイルを分離して作成 cssを分離
          {
            loader: "css-loader",
            options: {
              url: false, //css内のurlを取り込まない
            },
          },
          "postcss-loader", //postcss
          "sass-loader", //sass > css
        ],
      },

      {
        // pug
        test: /\.pug$/,
        use: [
          {
            loader: "html-loader",
            options: { sources: false },
          },
          {
            loader: "pug-html-loader",
            options: { pretty: true },
          },
        ],
      },

      {
        // HTML
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { sources: false },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js", ".json"],
  },

  plugins: [
    new StyleLintPlugin({
      fix: true,
      failOnError: true,
    }),

    new MiniCssExtractPlugin({
      filename: "./assets/css/common.css", //プラグインの出力ファイル
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "./src/assets/images", //コピー元ディレクトリ
          to: "assets/images", //コピー先
          noErrorOnMissing: true, //ファイルがなくてもエラーにしない
        },
        {
          from: ".htaccess",
          context: "src/",
          noErrorOnMissing: true,
        },
      ],
    }),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg|)$/i,
      pngquant: {
        // PNG
        quality: 85, //画像の圧縮率
      },
      gifsicle: {
        // GIF
        interlaced: false,
        optimizationLevel: 1,
        colors: 256,
      },
      svgo: {}, // SVG
      plugins: [
        ImageminMozjpeg({
          // JPG
          quality: 85,
          progressive: true,
        }),
      ],
    }),

    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)$/i,
          options: {
            quality: 75,
          },
        },
      ],
      detailedLogs: true,
      overrideExtension: false, // 拡張⼦の変換を⾏わない
    }),

    new BrowserSyncPlugin({
      host: "localhost",
      port: 3000,
      online: true,
      open: "external",
      server: { baseDir: ["public"] },
    }),

    // ==========================
    //  複数ページ対応
    // ==========================
    ...templates,
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new CssMqpackerPlugin({
        test: /\.css$/i,
        sort: true,
      }),
    ],
  },
};
