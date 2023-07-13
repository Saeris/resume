module.exports = {
  plugins: [
    "postcss-import",
    "postcss-nested",
    ["postcss-custom-media", { preserve: true }],
    "postcss-flexbugs-fixes",
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
