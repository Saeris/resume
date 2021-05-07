require(`@saeris/eslint-config/patch`);

module.exports = {
  extends: [require.resolve("@saeris/eslint-config")],
  ignorePatterns: ["*.js", "build/*"]
};
