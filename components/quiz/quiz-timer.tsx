"use client";

import { Badge } from "@/components/ui/badge";
import { useQuizTimer } from "@/hooks";

interface QuizTimerProps {
  /** Initial time in seconds */
  initialTime: number;
  /** Callback when timer reaches zero */
  onTimeUp?: () => void;
}

/**
 * Quiz timer component with countdown functionality
 * Client Component - requires useEffect for timer logic
 */
export function QuizTimer({ initialTime, onTimeUp }: QuizTimerProps) {
  const { formattedTime } = useQuizTimer({
    initialTime,
    autoStart: true,
    onTimeUp,
  });

  return (
    <div className="mb-5">
      <Badge 
        className="text-primary rounded-sm border-2 border-b-4 bg-[#E5C84C] font-mono font-bold"
        aria-live="polite"
        aria-label={`Time remaining: ${formattedTime}`}
      >
        {formattedTime}
      </Badge>
    </div>
  );
}

