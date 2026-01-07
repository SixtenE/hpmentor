/**
 * Quiz-related TypeScript types
 * Centralized type definitions for quiz functionality
 */

/** Represents a single answer option in a quiz question */
export interface AnswerOption {
  id: string;
  label: string;
}

/** Represents a complete quiz question with all its data */
export interface QuizQuestion {
  id: string;
  text: string;
  options: AnswerOption[];
  correctAnswer: string;
  category?: string;
}

/** Quiz session state */
export interface QuizState {
  currentQuestion: number;
  totalQuestions: number;
  answers: Record<string, string>;
  timeRemaining: number;
  isComplete: boolean;
}

/** Quiz navigation direction */
export type QuizNavigationDirection = "next" | "previous" | "skip";

