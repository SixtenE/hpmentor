"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseQuizTimerOptions {
  /** Initial time in seconds */
  initialTime: number;
  /** Whether to start the timer automatically */
  autoStart?: boolean;
  /** Callback when timer reaches zero */
  onTimeUp?: () => void;
}

interface UseQuizTimerReturn {
  /** Current time remaining in seconds */
  timeRemaining: number;
  /** Formatted time string (MM:SS) */
  formattedTime: string;
  /** Whether the timer is currently running */
  isRunning: boolean;
  /** Start or resume the timer */
  start: () => void;
  /** Pause the timer */
  pause: () => void;
  /** Reset the timer to initial time */
  reset: () => void;
}

/**
 * Custom hook for managing quiz timer functionality
 * Handles countdown, pause/resume, and time formatting
 */
export function useQuizTimer({
  initialTime,
  autoStart = true,
  onTimeUp,
}: UseQuizTimerOptions): UseQuizTimerReturn {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const onTimeUpRef = useRef(onTimeUp);

  // Keep callback ref updated
  onTimeUpRef.current = onTimeUp;

  const clearTimer = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const pause = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    clearTimer();
    setTimeRemaining(initialTime);
    setIsRunning(autoStart);
  }, [initialTime, autoStart, clearTimer]);

  // Format time as MM:SS
  const formattedTime = `${String(Math.floor(timeRemaining / 60)).padStart(2, "0")}:${String(timeRemaining % 60).padStart(2, "0")}`;

  useEffect(() => {
    if (isRunning && timeRemaining > 0) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearTimer();
            setIsRunning(false);
            onTimeUpRef.current?.();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return clearTimer;
  }, [isRunning, timeRemaining, clearTimer]);

  return {
    timeRemaining,
    formattedTime,
    isRunning,
    start,
    pause,
    reset,
  };
}

