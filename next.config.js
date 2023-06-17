// @ts-check

/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    styledComponents: true
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en"
  },
  productionBrowserSourceMaps: true
};
