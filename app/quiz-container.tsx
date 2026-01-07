"use client";

import { useState, useCallback } from "react";
import type { AnswerOption } from "@/types";
import {
  QuizHeader,
  QuizProgress,
  QuizTimer,
  QuizQuestion,
  QuizFooter,
  AnswerOptionsGrid,
} from "@/components/quiz";

interface QuizContainerProps {
  title: string;
  currentQuestion: number;
  totalQuestions: number;
  initialTime: number;
  question: string;
  options: AnswerOption[];
}

/**
 * Quiz container - Client Component
 *
 * This is the main interactive wrapper that:
 * - Manages quiz state (selected answer, navigation)
 * - Handles user interactions
 * - Coordinates between child components
 *
 * Kept as thin as possible - actual UI rendering is delegated to
 * specialized components that can be Server Components where possible
 */
export function QuizContainer({
  title,
  currentQuestion,
  totalQuestions,
  initialTime,
  question,
  options,
}: QuizContainerProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();

  // Navigation handlers
  const handleBack = useCallback(() => {
    // Navigate back to quiz selection or previous page
    console.log("Navigate back");
  }, []);

  const handleHelp = useCallback(() => {
    // Show help modal or tooltip
    console.log("Show help");
  }, []);

  const handlePrevious = useCallback(() => {
    // Navigate to previous question
    console.log("Previous question");
  }, []);

  const handleSkip = useCallback(() => {
    // Skip current question
    console.log("Skip question");
  }, []);

  const handleHint = useCallback(() => {
    // Show hint for current question
    console.log("Show hint");
  }, []);

  const handleTimeUp = useCallback(() => {
    // Handle time expiration
    console.log("Time is up!");
  }, []);

  const handleAnswerSelect = useCallback((id: string) => {
    setSelectedAnswer(id);
  }, []);

  return (
    <div className="flex w-full flex-col sm:w-2xl">
      <QuizHeader title={title} onBack={handleBack} onHelp={handleHelp} />

      <QuizProgress
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      />

      <QuizTimer initialTime={initialTime} onTimeUp={handleTimeUp} />

      <QuizQuestion question={question} />

      <AnswerOptionsGrid
        options={options}
        selectedId={selectedAnswer}
        onSelect={handleAnswerSelect}
      />

      <QuizFooter
        onPrevious={handlePrevious}
        onSkip={handleSkip}
        onHint={handleHint}
        previousDisabled={currentQuestion === 1}
      />
    </div>
  );
}
