"use client";
import React, { useState } from "react";
import Question from "./Question";
import Results from "./Results";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import questions from "./questions";

const scoring = [
  { A: "E", B: "I" }, // 1
  { A: "S", B: "N" }, // 2
  { A: "S", B: "N" }, // 3
  { A: "T", B: "F" }, // 4
  { A: "T", B: "F" }, // 5
  { A: "J", B: "P" }, // 6
  { A: "J", B: "P" }, // 7
  { A: "E", B: "I" }, // 8
  { A: "S", B: "N" }, // 9
  { A: "S", B: "N" }, // 10
  { A: "T", B: "F" }, // 11
  { A: "T", B: "F" }, // 12
  { A: "J", B: "P" }, // 13
  { A: "J", B: "P" }, // 14
  { A: "E", B: "I" }, // 15
  { A: "S", B: "N" }, // 16
  { A: "S", B: "N" }, // 17
  { A: "T", B: "F" }, // 18
  { A: "T", B: "F" }, // 19
  { A: "J", B: "P" }, // 20
  { A: "J", B: "P" }, // 21
  { A: "E", B: "I" }, // 22
  { A: "S", B: "N" }, // 23
  { A: "S", B: "N" }, // 24
  { A: "T", B: "F" }, // 25
  { A: "T", B: "F" }, // 26
  { A: "J", B: "P" }, // 27
  { A: "J", B: "P" }, // 28
  { A: "E", B: "I" }, // 29
  { A: "S", B: "N" }, // 30
  { A: "S", B: "N" }, // 31
  { A: "T", B: "F" }, // 32
  { A: "T", B: "F" }, // 33
  { A: "J", B: "P" }, // 34
  { A: "J", B: "P" }, // 35
  { A: "E", B: "I" }, // 36
  { A: "S", B: "N" }, // 37
  { A: "S", B: "N" }, // 38
  { A: "T", B: "F" }, // 39
  { A: "T", B: "F" }, // 40
  { A: "J", B: "P" }, // 41
  { A: "J", B: "P" }, // 42
  { A: "E", B: "I" }, // 43
  { A: "S", B: "N" }, // 44
  { A: "S", B: "N" }, // 45
  { A: "T", B: "F" }, // 46
  { A: "T", B: "F" }, // 47
  { A: "J", B: "P" }, // 48
  { A: "J", B: "P" }, // 49
  { A: "E", B: "I" }, // 50
  { A: "S", B: "N" }, // 51
  { A: "S", B: "N" }, // 52
  { A: "T", B: "F" }, // 53
  { A: "T", B: "F" }, // 54
  { A: "J", B: "P" }, // 55
  { A: "J", B: "P" }, // 56
  { A: "E", B: "I" }, // 57
  { A: "S", B: "N" }, // 58
  { A: "S", B: "N" }, // 59
  { A: "T", B: "F" }, // 60
  { A: "T", B: "F" }, // 61
  { A: "J", B: "P" }, // 62
  { A: "J", B: "P" }, // 63
  { A: "E", B: "I" }, // 64
  { A: "S", B: "N" }, // 65
  { A: "S", B: "N" }, // 66
  { A: "T", B: "F" }, // 67
  { A: "T", B: "F" }, // 68
  { A: "J", B: "P" }, // 69
  { A: "J", B: "P" }, // 70
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
    <div className="container mx-auto">
      {showResults ? (
        <Results results={results} />
      ) : (
        <div className="p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow rounded-lg p-6"
            >
              <Question
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                handleAnswer={handleAnswer}
              />
              <div className="flex justify-between mt-4">
                {currentQuestion > 0 && (
                  <Button onClick={handlePrev} variant="outline">
                    Tilbake
                  </Button>
                )}
                <Button
                  onClick={() => handleAnswer(answers[currentQuestion])}
                  variant="primary"
                >
                  {currentQuestion < questions.length - 1
                    ? "Neste"
                    : "Send inn"}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Test;
