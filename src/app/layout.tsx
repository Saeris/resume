import React from "react";
import type { Metadata } from "next/types";
import { Providers } from "./providers";
import "../theme/fonts.css";
import "../theme/reset.css";
import "../theme/theme.css";

/* eslint-disable @typescript-eslint/quotes */
export const metadata: Metadata = {
  title: "Drake Costa - Full-Stack TypeScript Engineer",
  description: "Resume",
  creator: "Drake Costa",
  authors: [{ name: "Drake Costa", url: "https://saeris.gg" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "Drake Costa - Full-Stack TypeScript Engineer",
    description: "Resume",
    url: "https://resume.saeris.gg",
    siteName: "Worbik",
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
    title: "Drake Costa - Full-Stack TypeScript Engineer",
    description: "Resume",
    creator: "@saeris",
    images: ["/share-card.webp"]
  },
  icons: {
    shortcut: "/favicon.ico"
  }
};
/* eslint-enable @typescript-eslint/quotes */

const Root: React.FC<{ readonly children: React.ReactNode }> = ({
  children
}) => (
  <html lang="en">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default Root;
