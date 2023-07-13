"use client";

import React from "react";
import * as provider from "@mdx-js/react";
import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";
import { evaluate } from "@mdx-js/mdx";
import { Link } from "./Link";

interface MarkdownProps {
  markdown: string;
  components?: MDXComponents;
}

export const Markdown: React.FC<MarkdownProps> = ({ markdown, ...props }) => {
  const Content = React.lazy(async () =>
    // @ts-expect-error
    evaluate(markdown, {
      ...runtime,
      ...provider,
      development: false
    })
  );

  return (
    <React.Suspense>
      <Content {...props} components={{ a: Link }} />
    </React.Suspense>
  );
};
