"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Question = ({ question, options, handleAnswer, defaultAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(defaultAnswer);

  useEffect(() => {
    setSelectedOption(defaultAnswer);
  }, [defaultAnswer]);

  const handleChange = (value) => {
    setSelectedOption(value);
    handleAnswer(value);
  };

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{question}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption} onValueChange={handleChange}>
          {options.map((option, index) => (
            <div key={index} className="mb-2">
              <RadioGroupItem
                value={option.value}
                id={`q${index}`}
                name="question"
              />
              <Label htmlFor={`q${index}`} className="text-lg ml-2">
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Question;
