// @ts-check
import withPWA from "next-pwa";

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV !== "production"
})({
  reactStrictMode: true,
  i18n: {
    locales: [`en`],
    defaultLocale: `en`
  },
  productionBrowserSourceMaps: process.env.VERCEL_ENV !== `production`,
  swcMinify: true
});
