"use client";

import { useState, useEffect, useCallback, useRef } from "react";

interface UseMaximizedViewOptions {
  shortcutKey?: string;
  enabled?: boolean;
  exitDuration?: number; // Duration of exit animation in ms
}

export function useMaximizedView(options: UseMaximizedViewOptions = {}) {
  const { shortcutKey = "f", enabled = true, exitDuration = 200 } = options;
  const [isMaximized, setIsMaximized] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const exitTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const performExit = useCallback(() => {
    setIsMaximized(false);
    setIsAnimatingOut(false);
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    }
  }, []);

  const toggleMaximized = useCallback(() => {
    if (isMaximized) {
      // Start exit animation
      setIsAnimatingOut(true);
      exitTimeoutRef.current = setTimeout(performExit, exitDuration);
    } else {
      setIsMaximized(true);
      setIsAnimatingOut(false);
    }
  }, [isMaximized, exitDuration, performExit]);

  const enterMaximized = useCallback(() => {
    setIsMaximized(true);
    setIsAnimatingOut(false);
    if (exitTimeoutRef.current) {
      clearTimeout(exitTimeoutRef.current);
      exitTimeoutRef.current = null;
    }
  }, []);

  const exitMaximized = useCallback(() => {
    if (isMaximized && !isAnimatingOut) {
      setIsAnimatingOut(true);
      exitTimeoutRef.current = setTimeout(performExit, exitDuration);
    }
  }, [isMaximized, isAnimatingOut, exitDuration, performExit]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key.toLowerCase() === shortcutKey.toLowerCase()) {
        event.preventDefault();
        toggleMaximized();
      }

      // Allow ESC to exit maximized mode
      if (event.key === "Escape" && isMaximized) {
        event.preventDefault();
        exitMaximized();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcutKey, enabled, isMaximized, toggleMaximized, exitMaximized]);

  // Prevent body scroll when maximized
  useEffect(() => {
    if (isMaximized) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isMaximized]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, []);

  return {
    isMaximized,
    isAnimatingOut,
    toggleMaximized,
    enterMaximized,
    exitMaximized,
  };
}
