"use client";

import React from "react";

interface UseScrollOptions {
  threshold?: number;
}

export function useScroll({ threshold = 50 }: UseScrollOptions = {}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [scrollDirection, setScrollDirection] = React.useState<"up" | "down">("up");
  const [scrollY, setScrollY] = React.useState(0);

  const onScroll = React.useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setScrolled(currentScrollY > threshold);
    setScrollDirection((prevDirection) => {
      const prev = prevDirection === "up" ? -1 : 1;
      if (currentScrollY < 0) return "up";
      if (currentScrollY > 0) return "down";
      return prev < 0 ? "up" : "down";
    });
  }, [threshold]);

  React.useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  React.useEffect(() => {
    onScroll();
  }, [onScroll]);

  return { scrolled, scrollDirection, scrollY };
}
