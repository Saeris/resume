import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Global, theme, extractCSSVars } from "../theme";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={extractCSSVars(theme)}>
    <Global />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
