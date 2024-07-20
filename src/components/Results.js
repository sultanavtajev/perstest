"use client";
import React, { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import styles from "../app/styles/Results.module.css";

const Results = ({ results }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/getResult?result=${results}`);
        const data = await response.json();
        if (response.ok) {
          setContent(data.mdxSource);
        } else {
          console.error("Error fetching MDX content:", data.error);
        }
      } catch (error) {
        console.error("Error fetching MDX content:", error);
      }
    };

    if (results) {
      fetchContent();
    }
  }, [results]);

  console.log("Results content:", content); // Debugging linje

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {content ? (
          <MDXRemote {...content} />
        ) : (
          <p>Laster personlighetstypebeskrivelse...</p>
        )}
      </div>
    </div>
  );
};

export default Results;
