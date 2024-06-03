import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import Results from "../components/Results";

export default function ResultPage({ mdxSource }) {
  console.log("mdxSource in ResultPage:", mdxSource); // Debugging linje
  return <Results content={mdxSource} />;
}

export async function getStaticPaths() {
  const results = [
    "ENFJ",
    "ENFP",
    "ENTJ",
    "ENTP",
    "ESFJ",
    "ESFP",
    "ESTJ",
    "ESTP",
    "INFJ",
    "INFP",
    "INTJ",
    "INTP",
    "ISFJ",
    "ISFP",
    "ISTJ",
    "ISTP",
  ];

  const paths = results.map((result) => ({
    params: { results: result },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { results } = params;
  const filePath = path.join(
    process.cwd(),
    "src",
    "personalityTypes",
    `${results}.md`
  );
  const source = fs.readFileSync(filePath, "utf8");
  const mdxSource = await serialize(source);

  console.log("mdxSource in getStaticProps:", mdxSource); // Debugging linje

  return {
    props: {
      mdxSource,
    },
  };
}
