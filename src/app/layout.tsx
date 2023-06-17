import React from "react";
import {
  Titillium_Web as titillium,
  Orbitron as orbitron
} from "next/font/google";
import "../theme/reset.css";
import "../theme/theme.css";

/* eslint-disable @typescript-eslint/quotes */
const body = titillium({
  weight: ["200", "300", "600"],
  variable: "--font-titillium",
  subsets: ["latin"]
});

const display = orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"]
});
/* eslint-enable @typescript-eslint/quotes */

const meta = {
  title: `Drake Costa - Full-Stack JavaScript Engineer`,
  description: `Resume`,
  locale: `en_US`,
  url: `https://saeris.io`,
  twitter: `@saeris`,
  favicon: `/favicon.ico`,
  image: `/share-card.webp`,
  manifest: `/manifest.json`,
  color: `#127cbb`
};

const Root = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={[body.variable, display.variable].join(` `)}>
    <body>{children}</body>
  </html>
);

export default Root;
