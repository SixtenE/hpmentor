"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { QuizContainer } from "./quiz-container";

/**
 * Quiz page - Client Component
 *
 * Uses Convex to fetch a random question from the database
 */
export default function QuizPage() {
  const question = useQuery(api.question.getRandom);

  if (question === undefined) {
    return (
      <main className="flex justify-center p-4">
        <div className="flex min-h-[700px] w-full max-w-[400px] items-center justify-center">
          <div className="size-8 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        </div>
      </main>
    );
  }

  if (question === null) {
    return (
      <main className="flex justify-center p-4">
        <div className="flex min-h-[700px] w-full max-w-[400px] items-center justify-center">
          <p className="text-white/60">No questions available</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex justify-center p-4">
      <QuizContainer
        title={question.category ?? "Quiz"}
        currentQuestion={1}
        totalQuestions={1}
        initialTime={60}
        question={question.text}
        options={question.options}
      />
    </main>
  );
}
