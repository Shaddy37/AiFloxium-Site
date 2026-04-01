"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotXSping = useSpring(useMotionValue(-100), { damping: 40, stiffness: 400 });
  const dotYSping = useSpring(useMotionValue(-100), { damping: 40, stiffness: 400 });

  const lastPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

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

    const updateCursor = () => {
      cursorX.set(lastPos.current.x - 16);
      cursorY.set(lastPos.current.y - 16);
      rafId.current = null;
    };

    const onMouseMove = (e: MouseEvent) => {
      lastPos.current = { x: e.clientX, y: e.clientY };
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateCursor);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') || 
        target.classList.contains('cursor-crosshair');
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, [cursorX, cursorY, isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? "rgba(255, 93, 34, 0.2)" : "rgba(255, 93, 34, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{
          x: dotXSping,
          y: dotYSping,
        }}
      />
    </>
  );
}
