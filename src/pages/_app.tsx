import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Global, theme, extractCSSVars } from "../theme";

const meta = {
  title: `Drake Costa - Full-Stack JavaScript Engineer`,
  description: `Resume`,
  locale: `en_US`,
  url: `https://saeris.io`,
  twitter: `@saeris`,
  favicon: `/favicon.ico`,
  image: `/share-card.png`,
  manifest: `/manifest.json`,
  color: `#127cbb`
};

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <link rel="shortcut icon" href={meta.favicon} />
      <link rel="manifest" href={meta.manifest} />
      <meta name="theme-color" content={meta.color} />
      <meta name="description" content={meta.description} />
      <meta name="image" content={meta.image} />
      {/* OpenGraph */}
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:locale" content={meta.locale} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:image:alt" content={meta.description} />
      {/* Twitter */}
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:creator" content={meta.twitter} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={meta.image} />
      <meta name="twitter:image:alt" content={meta.title} />
      {/* iOS */}
      <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/logo192.png" />
      <meta name="apple-mobile-web-app-status-bar" content={meta.color} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="white-translucent" />
      <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider theme={extractCSSVars(theme)}>
      <Global />
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

export default App;
