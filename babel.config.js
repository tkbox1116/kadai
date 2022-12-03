module.exports = (api) => {
  api.cache(true);
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage", // 必要な polyfill のみを import させる
          corejs: 3, // バージョンを指定
        },
      ],
    ],
  };
};
