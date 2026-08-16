"use client";

import { useEffect } from "react";

export function AccessibilityFinish() {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      const details = document.querySelector<HTMLDetailsElement>(
        ".site-header-nav-mobile details[open]",
      );
      if (!details) return;

      details.removeAttribute("open");
      details.querySelector<HTMLElement>("summary")?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return null;
}
