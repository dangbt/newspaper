module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-import",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009"
        },
        stage: 3,
        features: {
          "custom-properties": false
        }
      }
    ]
  ]
};
