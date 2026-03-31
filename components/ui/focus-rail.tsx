"use client";

import * as React from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type FocusRailItem = {
  id: string | number;
  title: string;
  description?: string;
  imageSrc: string;
  href?: string;
  meta?: string;
};

interface FocusRailProps {
  items: FocusRailItem[];
  initialIndex?: number;
  loop?: boolean;
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

/**
 * Optimized Physics Configuration
 * Increased stiffness for responsiveness while maintaining damping for smoothness.
 * This removes the "heavy/laggy" feeling.
 */
const BASE_SPRING = {
  stiffness: 150, // Increased from 80 for better responsiveness
  damping: 25,
  mass: 1,
};

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function FocusRail({
  items,
  initialIndex = 0,
  loop = true,
  autoPlay = false,
  interval = 5000,
  className,
}: FocusRailProps) {
  const [active, setActive] = React.useState(initialIndex);
  const [isHovering, setIsHovering] = React.useState(false);
  const lastWheelTime = React.useRef<number>(0);

  const count = items.length;
  const activeIndex = wrap(0, count, active);
  const activeItem = items[activeIndex];

  const handlePrev = React.useCallback(() => {
    if (!loop && active === 0) return;
    setActive((p) => p - 1);
  }, [loop, active]);

  const handleNext = React.useCallback(() => {
    if (!loop && active === count - 1) return;
    setActive((p) => p + 1);
  }, [loop, active, count]);

  /**
   * REFINED WHEEL LOGIC
   * Reduced lockout to 300ms for snappier sequential scrolls.
   */
  const onWheel = React.useCallback(
    (e: React.WheelEvent) => {
      const now = Date.now();
      if (now - lastWheelTime.current < 300) return; // Reduced from 600ms

      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;

      // Increased threshold to filter out micro-jitters from high-precision trackpads
      if (Math.abs(delta) > 40) {
        if (delta > 0) handleNext();
        else handlePrev();
        lastWheelTime.current = now;
      }
    },
    [handleNext, handlePrev]
  );

  React.useEffect(() => {
    if (!autoPlay || isHovering) return;
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
  }, [autoPlay, isHovering, handleNext, interval]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "ArrowRight") handleNext();
  };

   const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, { offset, velocity }: PanInfo) => {
     const swipeConfidenceThreshold = 10000;
     const swipe = Math.abs(offset.x) * velocity.x;

     if (swipe < -swipeConfidenceThreshold) handleNext();
     else if (swipe > swipeConfidenceThreshold) handlePrev();
   };

  const visibleIndices = [-2, -1, 0, 1, 2];

  return (
    <div
      className={cn(
        "group/rail relative flex h-[700px] w-full flex-col overflow-hidden bg-background text-foreground outline-none select-none",
        className
      )}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onWheel={onWheel}
    >
      {/* Dynamic Background Glow - Optimized for Performance */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={`bg-${activeItem.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            className="absolute inset-0"
          >
            <Image
              src={activeItem.imageSrc}
              alt=""
              fill
              className="object-cover blur-[60px] saturate-150 brightness-50" // Reduced blur from 120px for GPU performance
              priority
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-background/40" />
        
        {/* Geometric Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`, 
                      backgroundSize: '80px 80px' }} />
      </div>

      {/* Main Stage */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-4 md:px-8">
        <motion.div
          className="relative mx-auto flex h-[420px] w-full max-w-7xl items-center justify-center perspective-[1500px] cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={onDragEnd}
        >
          {visibleIndices.map((offset) => {
            const absIndex = active + offset;
            const index = wrap(0, count, absIndex);
            const item = items[index];

            if (!loop && (absIndex < 0 || absIndex >= count)) return null;

            const isCenter = offset === 0;
            const dist = Math.abs(offset);

            const xOffset = offset * 340;
            const zOffset = isCenter ? 0 : -dist * 200;
            const scale = isCenter ? 1 : 0.8;
            const rotateY = offset * -25;
            const opacity = isCenter ? 1 : Math.max(0.1, 1 - dist * 0.4);

            return (
              <motion.div
                key={absIndex}
                className={cn(
                  "absolute aspect-[3/4] w-[280px] md:w-[320px] rounded-3xl",
                  isCenter ? "z-20" : "z-10"
                )}
                initial={false}
                animate={{
                  x: xOffset,
                  z: zOffset,
                  scale: scale,
                  rotateY: rotateY,
                  opacity: opacity,
                }}
                 transition={{ ...BASE_SPRING }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => { if (offset !== 0) setActive((p) => p + offset); }}
              >
                {/* Optimized Container */}
                <div className={cn(
                  "relative h-full w-full rounded-3xl overflow-hidden glass-card group/card border border-white/5",
                  isCenter && "ring-1 ring-white/10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)]"
                )}>
                  <div className="relative h-full w-full transition-transform duration-700 ease-out grayscale group-hover/card:grayscale-0">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover pointer-events-none"
                      sizes="400px"
                    />
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover/card:opacity-30 transition-opacity duration-500" />
                  </div>

                  {/* High-Performance Scan Effect */}
                  {isCenter && (
                    <motion.div 
                      className="absolute inset-x-0 h-[1px] bg-white/20 z-10"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Info & Controls */}
        <div className="mx-auto mt-20 flex w-full max-w-5xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-1 flex-col items-center text-center md:items-start md:text-left h-36 justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-3"
              >
                {activeItem.meta && (
                  <div className="flex items-center gap-2">
                    <span className="h-[1px] w-4 bg-zinc-700" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-500">
                      {activeItem.meta}
                    </span>
                  </div>
                )}
                <h2 className="text-4xl font-bold font-heading tracking-tight md:text-6xl text-white">
                  {activeItem.title.split(' ').map((word, i) => (
                    <span key={i} className={i === activeItem.title.split(' ').length - 1 ? "text-gradient" : ""}>
                      {word}{' '}
                    </span>
                  ))}
                </h2>
                {activeItem.description && (
                  <p className="max-w-lg text-zinc-400 font-medium leading-relaxed text-sm md:text-base opacity-70">
                    {activeItem.description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 p-1.5 rounded-full bg-zinc-900/40 border border-white/5 backdrop-blur-xl">
              <button
                onClick={handlePrev}
                className="group p-3 text-zinc-500 transition-all hover:text-white hover:bg-white/5 rounded-full"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center font-mono text-[10px] text-zinc-600 gap-1 px-2">
                <span className="text-white font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
                <span className="opacity-30">/</span>
                <span>{String(count).padStart(2, '0')}</span>
              </div>
              <button
                onClick={handleNext}
                className="group p-3 text-zinc-500 transition-all hover:text-white hover:bg-white/5 rounded-full"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {activeItem.href && (
              <Link
                href={activeItem.href}
                className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-[1.05] active:scale-95 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]"
              >
                <span className="relative z-10 text-sm font-black uppercase tracking-wider font-heading">Initiate</span>
                <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
