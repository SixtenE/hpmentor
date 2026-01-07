interface QuizProgressProps {
  /** Current question number (1-indexed) */
  currentQuestion: number;
  /** Total number of questions */
  totalQuestions: number;
  /** Label text (e.g., "Fråga" for Swedish) */
  label?: string;
}

/**
 * Quiz progress indicator showing current position
 * Pure Server Component - no client-side state needed
 */
export function QuizProgress({
  currentQuestion,
  totalQuestions,
  label = "Fråga",
}: QuizProgressProps) {
  // Format question number with leading zero
  const formattedNumber = String(currentQuestion).padStart(2, "0");

  return (
    <div className="mb-4">
      <p className="mb-2 text-sm font-medium text-white/80">
        {formattedNumber} {label}
      </p>
      <div className="flex gap-1.5" role="progressbar" aria-valuenow={currentQuestion} aria-valuemin={1} aria-valuemax={totalQuestions}>
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
              i < currentQuestion ? "bg-white/90" : "bg-[#7A6FB8]/60"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

