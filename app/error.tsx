"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Error boundary component for the app
 * Catches runtime errors and provides recovery options
 * Must be a Client Component to use error boundary functionality
 */
export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to error reporting service in production
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="mb-6 rounded-full bg-[#E07B7B]/20 p-4">
          <AlertCircle className="size-12 text-[#E07B7B]" />
        </div>

        <h2 className="mb-2 text-2xl font-bold text-white">
          Något gick fel
        </h2>

        <p className="mb-6 text-white/70">
          Ett oväntat fel uppstod. Försök igen eller kontakta support om
          problemet kvarstår.
        </p>

        {process.env.NODE_ENV === "development" && (
          <pre className="mb-6 max-w-full overflow-auto rounded-lg bg-black/20 p-4 text-left text-sm text-white/60">
            {error.message}
          </pre>
        )}

        <Button
          onClick={reset}
          className="rounded-xl bg-[#7A6FB8] px-6 py-3 font-semibold text-white hover:bg-[#7A6FB8]/80"
        >
          <RefreshCw className="mr-2 size-4" />
          Försök igen
        </Button>
      </div>
    </div>
  );
}

