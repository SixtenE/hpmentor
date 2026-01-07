import { Button } from "@/components/ui/button";
import { ChevronLeft, HelpCircle } from "lucide-react";

interface QuizHeaderProps {
  /** Title displayed in the header */
  title: string;
  /** Callback when back button is clicked */
  onBack?: () => void;
  /** Callback when help button is clicked */
  onHelp?: () => void;
}

/**
 * Quiz header component with navigation and help buttons
 * Server Component - no client-side interactivity needed for rendering
 * Event handlers are passed from parent Client Component when needed
 */
export function QuizHeader({ title, onBack, onHelp }: QuizHeaderProps) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <Button
        variant="ghost"
        size="icon"
        onClick={onBack}
        className="size-11 rounded-xl border-2 border-[#9D93D5]/50 bg-[#7A6FB8]/50 text-white hover:bg-[#7A6FB8]/70"
        aria-label="Go back"
      >
        <ChevronLeft className="size-6" />
      </Button>

      <h1 className="font-mono text-3xl font-bold tracking-wider text-white">
        {title}
      </h1>

      <Button
        variant="ghost"
        size="icon"
        onClick={onHelp}
        className="size-11 rounded-xl border-2 border-[#9D93D5]/50 bg-[#7A6FB8]/50 text-white hover:bg-[#7A6FB8]/70"
        aria-label="Get help"
      >
        <HelpCircle className="size-5" />
      </Button>
    </header>
  );
}

