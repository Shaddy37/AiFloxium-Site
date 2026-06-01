"use client";

import { useEffect, useRef } from "react";

export function useScrollTrigger(
  thresholdPct: number,
  onCross: () => void
): void {
  const firedRef = useRef(false);
  const onCrossRef = useRef(onCross);

  useEffect(() => {
    onCrossRef.current = onCross;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (firedRef.current) return;

    const evaluate = () => {
      if (firedRef.current) return;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) {
        firedRef.current = true;
        onCrossRef.current();
        return;
      }
      const pct = (window.scrollY / scrollable) * 100;
      if (pct >= thresholdPct) {
        firedRef.current = true;
        onCrossRef.current();
      }
    };

    evaluate();
    window.addEventListener("scroll", evaluate, { passive: true });
    window.addEventListener("resize", evaluate, { passive: true });

    return () => {
      window.removeEventListener("scroll", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, [thresholdPct]);
}
