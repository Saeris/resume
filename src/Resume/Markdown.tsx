import type { ComponentType, FunctionComponent } from "preact";
import { h } from "preact";
import Markup from "preact-markup";
import snarkdown from "snarkdown";

interface MarkdownProps {
  markdown: string;
  components: Record<string, ComponentType>;
}

export const Markdown: FunctionComponent<MarkdownProps> = ({ markdown, ...props }) => (
  <Markup markup={snarkdown(markdown)} type="html" trim={false} {...props} />
);
