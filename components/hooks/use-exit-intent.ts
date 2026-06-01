"use client";

import { useEffect, useRef } from "react";

interface UseExitIntentOptions {
  readonly enabled: boolean;
  readonly minScrollDistancePct?: number;
  readonly mobileBackButton?: boolean;
}

const EXIT_SENSITIVITY_PX = 30;
const MOBILE_BACK_BUTTON_DELAY_MS = 1500;

export function useExitIntent(
  options: UseExitIntentOptions,
  onExit: () => void
): void {
  const { enabled, minScrollDistancePct = 0, mobileBackButton = true } = options;
  const firedRef = useRef(false);
  const onExitRef = useRef(onExit);

  useEffect(() => {
    onExitRef.current = onExit;
  });

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (firedRef.current) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMobile) {
      const onMouseLeave = (e: MouseEvent) => {
        if (firedRef.current) return;
        if (e.clientY > EXIT_SENSITIVITY_PX) return;

        if (minScrollDistancePct > 0) {
          const doc = document.documentElement;
          const scrollable = doc.scrollHeight - window.innerHeight;
          if (scrollable > 0) {
            const pct = (window.scrollY / scrollable) * 100;
            if (pct < minScrollDistancePct) return;
          }
        }

        firedRef.current = true;
        onExitRef.current();
      };

      document.documentElement.addEventListener("mouseleave", onMouseLeave);
      return () => {
        document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      };
    }

    if (mobileBackButton && window.history.length > 1) {
      let armedAt: number | null = null;

      const arm = () => {
        armedAt = Date.now();
      };

      const onPopState = () => {
        if (firedRef.current) return;
        if (armedAt && Date.now() - armedAt < MOBILE_BACK_BUTTON_DELAY_MS) {
          if (minScrollDistancePct > 0) {
            const doc = document.documentElement;
            const scrollable = doc.scrollHeight - window.innerHeight;
            if (scrollable > 0) {
              const pct = (window.scrollY / scrollable) * 100;
              if (pct < minScrollDistancePct) return;
            }
          }
          firedRef.current = true;
          armedAt = null;
          onExitRef.current();
        }
      };

      window.addEventListener("touchstart", arm, { passive: true });
      window.addEventListener("popstate", onPopState);

      return () => {
        window.removeEventListener("touchstart", arm);
        window.removeEventListener("popstate", onPopState);
      };
    }

    return undefined;
  }, [enabled, minScrollDistancePct, mobileBackButton]);
}
