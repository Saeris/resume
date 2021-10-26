// @ts-check
const { name } = require(`./package.json`);

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
module.exports = {
  displayName: name,
  testRunner: "jest-circus/runner",
  coverageDirectory: `<rootDir>/.coverage/`,
  collectCoverage: true,
  collectCoverageFrom: [
    // include
    "<rootDir>/src/**/*.{ts,tsx,js,jsx}",
    // exclude
    "!**/*.spec.ts",
    `!**/__fixtures__/**/*`,
    `!**/__mocks__/**/*`,
    `!**/__stories__/**/*`,
    `!**/__tests__/**/*`,
    `!**/node_modules/**`
  ],
  passWithNoTests: true,
  testEnvironment: `node`,
  verbose: true,
  testURL: "http://localhost:8080",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/src/tests/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "^./style$": "identity-obj-proxy",
    "^preact$": "<rootDir>/node_modules/preact/dist/preact.min.js",
    "^react$": "preact-compat",
    "^react-dom$": "preact-compat",
    "^create-react-class$": "preact-compat/lib/create-react-class",
    "^react-addons-css-transition-group$": "preact-css-transition-group"
  }
};
