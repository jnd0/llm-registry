"use client";

import { useState, useEffect, useCallback } from "react";

interface UseMaximizedViewOptions {
  shortcutKey?: string;
  enabled?: boolean;
}

export function useMaximizedView(options: UseMaximizedViewOptions = {}) {
  const { shortcutKey = "f", enabled = true } = options;
  const [isMaximized, setIsMaximized] = useState(false);

  const toggleMaximized = useCallback(() => {
    setIsMaximized((prev) => !prev);
  }, []);

  const enterMaximized = useCallback(() => {
    setIsMaximized(true);
  }, []);

  const exitMaximized = useCallback(() => {
    setIsMaximized(false);
  }, []);

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

  return {
    isMaximized,
    toggleMaximized,
    enterMaximized,
    exitMaximized,
  };
}
