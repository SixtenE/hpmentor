import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

interface QuizFooterProps {
  /** Callback when previous button is clicked */
  onPrevious?: () => void;
  /** Callback when skip button is clicked */
  onSkip?: () => void;
  /** Callback when hint button is clicked */
  onHint?: () => void;
  /** Whether previous button should be disabled */
  previousDisabled?: boolean;
  /** Label for previous button */
  previousLabel?: string;
  /** Label for skip button */
  skipLabel?: string;
}

/**
 * Quiz footer with navigation controls
 * Server Component - event handlers passed from parent
 */
export function QuizFooter({
  onPrevious,
  onSkip,
  onHint,
  previousDisabled = false,
  previousLabel = "Föregående",
  skipLabel = "Hoppa över",
}: QuizFooterProps) {
  return (
    <footer className="mt-8 flex items-center justify-between gap-3">
      <Button
        variant="ghost"
        onClick={onPrevious}
        disabled={previousDisabled}
        className="h-auto flex-1 rounded-xl border-2 border-[#C96969]/50 bg-[#E07B7B] px-4 py-3 font-semibold text-white hover:bg-[#D06A6A] disabled:opacity-50"
        aria-label={previousLabel}
      >
        <ChevronLeft className="mr-1 size-4" />
        {previousLabel}
      </Button>

      <Button
        variant="ghost"
        onClick={onHint}
        className="rounded-lg border border-white/50 bg-white/90 px-4 py-2.5 shadow-sm hover:bg-white"
        aria-label="Get hint"
      >
        <Lightbulb className="size-5 text-[#5A5A5A]" />
      </Button>

      <Button
        variant="ghost"
        onClick={onSkip}
        className="h-auto flex-1 rounded-xl border-2 border-[#9D93D5]/50 bg-[#7A6FB8]/60 px-4 py-3 font-semibold text-white hover:bg-[#7A6FB8]/80"
        aria-label={skipLabel}
      >
        {skipLabel}
        <ChevronRight className="ml-1 size-4" />
      </Button>
    </footer>
  );
}

