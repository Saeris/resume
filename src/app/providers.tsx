"use client";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "next-themes";

export const Providers: React.FC<{ readonly children: React.ReactNode }> = ({
  children
}) => {
  ReactDOM.preload(`fonts/Mona-Sans.woff2`, {
    as: `font`,
    // @ts-expect-error
    type: `font/woff2`,
    crossorigin: ``
  });

  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
