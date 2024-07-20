"use client";
import React, { useState } from "react";

export default function Hom() {
  const [results, setResults] = useState(null);

  const handleResults = (result) => {
    setResults(result);
  };

  const [Test, setTest] = useState(null);
  const [Results, setResultsComponent] = useState(null);

  // Dynamisk import av komponentene når komponenten monteres
  React.useEffect(() => {
    import("../../components/Test").then((mod) => setTest(() => mod.default));
    import("../../components/Results").then((mod) =>
      setResultsComponent(() => mod.default)
    );
  }, []);

  return (
    <div>
      {results
        ? Results && <Results content={results} />
        : Test && <Test onResults={handleResults} />}
    </div>
  );
}
