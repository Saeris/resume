/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ["@saeris/eslint-config"],
  rules: {
    "import/no-named-as-default": `off`,
    "import/no-cycle": `off`,
    "import/no-unused-modules": `off`,
    "import/no-deprecated": `off`,
    "multiline-ternary": `off`
  },
  ignorePatterns: [`*.js`]
};
