import React from "react";
import * as provider from "@mdx-js/react";
import * as runtime from "react/jsx-runtime";
import type { MDXComponents } from "mdx/types";
import { evaluate } from "@mdx-js/mdx";

interface MarkdownProps {
  markdown: string;
  components?: MDXComponents;
}

export const Markdown: React.FC<MarkdownProps> = ({ markdown, ...props }) => {
  const Content = React.lazy(async () =>
    evaluate(markdown, {
      ...provider,
      // @ts-expect-error
      Fragment: runtime.Fragment,
      // @ts-expect-error
      jsx: runtime.jsx,
      // @ts-expect-error
      jsxs: runtime.jsxs
    })
  );

  return (
    <React.Suspense>
      <Content {...props} />
    </React.Suspense>
  );
};
