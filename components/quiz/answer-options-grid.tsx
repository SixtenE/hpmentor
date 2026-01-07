"use client";

import { Button } from "@/components/ui/button";
import type { AnswerOption } from "@/types";

interface AnswerOptionsGridProps {
  /** Array of answer options to display */
  options: AnswerOption[];
  /** Currently selected answer ID */
  selectedId?: string;
  /** Callback when an option is selected */
  onSelect?: (id: string) => void;
  /** Label text shown above the options */
  label?: string;
}

/**
 * Grid of answer option buttons for quiz questions
 * Client Component - handles user selection interactions
 */
export function AnswerOptionsGrid({
  options,
  selectedId,
  onSelect,
  label = "Välj ett alternativ",
}: AnswerOptionsGridProps) {
  return (
    <>
      <p className="mb-3 text-sm font-medium text-white/70">{label}</p>
      <div
        className="mb-auto grid grid-cols-2 gap-3"
        role="radiogroup"
        aria-label={label}
      >
        {options.map((option) => {
          const isSelected = selectedId === option.id;
          return (
            <Button
              key={option.id}
              onClick={() => onSelect?.(option.id)}
              role="radio"
              aria-checked={isSelected}
              className={`h-24 rounded-lg border-2 border-b-4 p-4 shadow-none transition-all duration-200 ${
                isSelected
                  ? "border-[#E5C84C] bg-[#E5C84C]/20 text-white"
                  : "bg-secondary text-primary hover:bg-secondary/90"
              }`}
            >
              {option.label}
            </Button>
          );
        })}
      </div>
    </>
  );
}

