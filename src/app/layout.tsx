import React from "react";
import {
  Titillium_Web as titillium,
  Orbitron as orbitron
} from "next/font/google";
import type { Metadata } from "next/types";
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

const title = "Drake Costa - Resume";
const description =
  "Full-Stack TypeScript Engineer specializing in Design Systems and Developer Experience.";

export const metadata: Metadata = {
  title,
  description,
  creator: "Drake Costa",
  authors: [{ name: "Drake Costa", url: "https://saeris.gg" }],
  manifest: "/manifest.json",
  themeColor: "#127cbb",
  openGraph: {
    title,
    description,
    url: "https://resume.saeris.gg",
    siteName: title,
    images: [
      {
        url: "/share-card.webp",
        width: 1200,
        height: 628
      }
    ],
    locale: "en-US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@saeris",
    images: ["/share-card.webp"]
  },
  icons: {
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo192.png", sizes: "192x192", type: "image/png" },
      { url: "/logo512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  appleWebApp: {
    title,
    statusBarStyle: "black-translucent"
  }
};
/* eslint-enable @typescript-eslint/quotes */

const Root = ({ children }: { children: React.ReactNode }) => (
  <html lang="en" className={[body.variable, display.variable].join(` `)}>
    <body>{children}</body>
  </html>
);

export default Root;
