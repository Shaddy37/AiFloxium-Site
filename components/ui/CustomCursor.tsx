"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [dotPosition, setDotPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    let dotX = -100;
    let dotY = -100;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-crosshair");

      setIsHovering(!!isInteractive);
    };

    const animate = () => {
      cursorX += (mouseX - 16 - cursorX) * 0.15;
      cursorY += (mouseY - 16 - cursorY) * 0.15;
      dotX += (mouseX - 4 - dotX) * 0.35;
      dotY += (mouseY - 4 - dotY) * 0.35;

      setPosition({ x: cursorX, y: cursorY });
      setDotPosition({ x: dotX, y: dotY });

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });

    const rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-[100] mix-blend-difference hidden md:block transition-transform duration-300 ${
          isHovering ? "scale-200" : "scale-100"
        }`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) ${isHovering ? "scale(2)" : "scale(1)"}`,
          backgroundColor: isHovering ? "rgba(255, 93, 34, 0.2)" : "rgba(255, 93, 34, 0)",
        }}
      />
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          transform: `translate(${dotPosition.x}px, ${dotPosition.y}px)`,
        }}
      />
    </>
  );
}