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
    <Card className="w-full mb-4">
      <CardHeader className="bg-primary text-primary-foreground p-4 rounded-t-lg">
        <CardTitle className="text-lg font-semibold">{question}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 space-y-4">
        <RadioGroup
          value={selectedOption}
          onValueChange={handleChange}
          className="grid gap-2"
        >
          {options.map((option, index) => (
            <Label
              key={index}
              htmlFor={`q${index}`}
              className="flex items-center gap-3 p-3 rounded-md cursor-pointer [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground"
            >
              <RadioGroupItem
                value={option.value}
                id={`q${index}`}
                name="question"
                className="peer sr-only"
              />
              <div className="w-5 h-5 rounded-full border flex items-center justify-center [&:has(.peer:checked)]:bg-primary [&:has(.peer:checked)]:border-primary">
                <div className="w-3 h-3 rounded-full bg-background" />
              </div>
              <span>{option.label}</span>
            </Label>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default Question;
