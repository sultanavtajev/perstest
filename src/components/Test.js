"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Question from "./Question";
import Results from "./Results";
import questions from "./questions";

const scoring = [
  { A: "E", B: "I" },
  { A: "S", B: "N" },
  { A: "S", B: "N" },
  { A: "T", B: "F" },
  { A: "T", B: "F" },
  { A: "J", B: "P" },
  { A: "J", B: "P" },
  { A: "E", B: "I" },
  { A: "S", B: "N" },
  { A: "S", B: "N" },
  { A: "T", B: "F" },
  { A: "T", B: "F" },
  { A: "J", B: "P" },
  { A: "J", B: "P" },
  { A: "E", B: "I" },
  { A: "S", B: "N" },
  { A: "S", B: "N" },
  { A: "T", B: "F" },
  { A: "T", B: "F" },
  { A: "J", B: "P" },
  { A: "J", B: "P" },
  { A: "E", B: "I" },
  { A: "S", B: "N" },
  { A: "S", B: "N" },
  { A: "T", B: "F" },
  { A: "T", B: "F" },
  { A: "J", B: "P" },
  { A: "J", B: "P" },
  { A: "E", B: "I" },
  { A: "S", B: "N" },
  { A: "S", B: "N" },
  { A: "T", B: "F" },
  { A: "T", B: "F" },
  { A: "J", B: "P" },
  { A: "J", B: "P" },
  { A: "E", B: "I" },
  { A: "S", B: "N" },
  { A: "S", B: "N" },
  { A: "T", B: "F" },
  { A: "T", B: "F" },
  { A: "J", B: "P" },
  { A: "J", B: "P" },
  { A: "E", B: "I" },
  { A: "S", B: "N" },
  { A: "S", B: "N" },
  { A: "T", B: "F" },
  { A: "T", B: "F" },
  { A: "J", B: "P" },
  { A: "J", B: "P" },
];

const Test = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState("");

  const handleAnswer = (value) => {
    console.log("Answered:", value); // Debugging linje
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      console.log("Final answers:", newAnswers); // Debugging linje
      calculateResults(newAnswers);
      setShowResults(true);
    }
  };

  const calculateResults = (answers) => {
    const totals = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    // Summene fra kolonne 2 og 3
    const column2Questions = [2, 9, 16, 23, 30, 37, 44, 51, 58, 65];
    const column3Questions = [3, 10, 17, 24, 31, 38, 45, 52, 59, 66];

    const column2Totals = column2Questions.reduce(
      (acc, index) => {
        if (answers[index - 1] === "A") acc.A += 1;
        if (answers[index - 1] === "B") acc.B += 1;
        return acc;
      },
      { A: 0, B: 0 }
    );

    const column3Totals = column3Questions.reduce(
      (acc, index) => {
        if (answers[index - 1] === "A") acc.A += 1;
        if (answers[index - 1] === "B") acc.B += 1;
        return acc;
      },
      { A: 0, B: 0 }
    );

    totals.S = column2Totals.A + column3Totals.A;
    totals.N = column2Totals.B + column3Totals.B;

    // Summene fra kolonne 4 og 5
    const column4Questions = [4, 11, 18, 25, 32, 39, 46, 53, 60, 67];
    const column5Questions = [5, 12, 19, 26, 33, 40, 47, 54, 61, 68];

    const column4Totals = column4Questions.reduce(
      (acc, index) => {
        if (answers[index - 1] === "A") acc.A += 1;
        if (answers[index - 1] === "B") acc.B += 1;
        return acc;
      },
      { A: 0, B: 0 }
    );

    const column5Totals = column5Questions.reduce(
      (acc, index) => {
        if (answers[index - 1] === "A") acc.A += 1;
        if (answers[index - 1] === "B") acc.B += 1;
        return acc;
      },
      { A: 0, B: 0 }
    );

    totals.T = column4Totals.A + column5Totals.A;
    totals.F = column4Totals.B + column5Totals.B;

    // Summene fra kolonne 6 og 7
    const column6Questions = [6, 13, 20, 27, 34, 41, 48, 55, 62, 69];
    const column7Questions = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70];

    const column6Totals = column6Questions.reduce(
      (acc, index) => {
        if (answers[index - 1] === "A") acc.A += 1;
        if (answers[index - 1] === "B") acc.B += 1;
        return acc;
      },
      { A: 0, B: 0 }
    );

    const column7Totals = column7Questions.reduce(
      (acc, index) => {
        if (answers[index - 1] === "A") acc.A += 1;
        if (answers[index - 1] === "B") acc.B += 1;
        return acc;
      },
      { A: 0, B: 0 }
    );

    totals.J = column6Totals.A + column7Totals.A;
    totals.P = column6Totals.B + column7Totals.B;

    // Iterer over svarene og oppdater totals basert på scoring
    answers.forEach((answer, index) => {
      if (!answer) return;
      const column = scoring[index];
      if (column) {
        totals[column.A] += answer === "A" ? 1 : 0;
        totals[column.B] += answer === "B" ? 1 : 0;
      }
    });

    console.log("Totals:", totals); // Debugging linje

    const result = `${totals.E >= totals.I ? "E" : "I"}${
      totals.S >= totals.N ? "S" : "N"
    }${totals.T >= totals.F ? "T" : "F"}${totals.J >= totals.P ? "J" : "P"}`;
    console.log("Result:", result); // Debugging linje
    setResults(result);
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screenpx-4 md:px-6 pt-8">
      {showResults ? (
        <Results results={results} />
      ) : (
        <div className="p-4 w-full max-w-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white"
            >
              <Question
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                handleAnswer={handleAnswer}
              />
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-4 w-full">
            {currentQuestion > 0 && (
              <Button onClick={handlePrev} variant="primary">
                Tilbake
              </Button>
            )}
            <Button
              onClick={() => handleAnswer(answers[currentQuestion])}
              variant="primary"
            >
              {currentQuestion < questions.length - 1 ? "Neste" : "Send inn"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
