interface QuizQuestionProps {
  /** The question text to display */
  question: string;
}

/**
 * Quiz question display component
 * Server Component - pure rendering, no client-side state
 */
export function QuizQuestion({ question }: QuizQuestionProps) {
  return (
    <div className="mb-8">
      <p className="text-xl font-semibold leading-relaxed text-white">
        {question}
      </p>
    </div>
  );
}

