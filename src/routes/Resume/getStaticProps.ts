import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { results } from "../../content";

export const getStaticProps: GetStaticProps<{ data: typeof results["data"] }> = () => ({
  props: results
});

export type ResumeProps = InferGetStaticPropsType<typeof getStaticProps>;
