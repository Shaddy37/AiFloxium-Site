"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Brand icon URLs for high-end integrations (using SVGL or similar standard paths)
const ICONS = [
  "https://svgl.app/library/gatsby.svg",
  "https://svgl.app/library/github-light.svg",
  "https://svgl.app/library/google-icon.svg",
  "https://svgl.app/library/sketch.svg",
  "https://svgl.app/library/slack-icon.svg",
  "https://svgl.app/library/spotify.svg",
];

interface SemiCircleOrbitProps {
  radius: number;
  centerX: number;
  centerY: number;
  count: number;
  iconSize: number;
}

function SemiCircleOrbit({ radius, centerX, centerY, count, iconSize }: SemiCircleOrbitProps) {
  return (
    <>
      {/* Semi-circle glow background */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-[800px] h-[800px] rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]
            blur-3xl 
            -mt-40 
            pointer-events-none
          "
          style={{ zIndex: 0 }}
        />
      </div>

      {/* Orbit icons */}
      {Array.from({ length: count }).map((_, index) => {
        const angle = (index / (count - 1)) * 180;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        const icon = ICONS[index % ICONS.length];

        // Tooltip positioning — above or below based on angle
        const tooltipAbove = angle > 90;

        return (
          <div
            key={index}
            className="absolute flex flex-col items-center group transition-all duration-700"
            style={{
              left: `${centerX + x - iconSize / 2}px`,
              top: `${centerY - y - iconSize / 2}px`,
              zIndex: 5,
            }}
          >
            <div className="relative w-full h-full hover:scale-125 transition-transform duration-500 cursor-pointer" style={{ minWidth: iconSize, minHeight: iconSize }}>
              <Image
                src={icon}
                alt={`integration-${index}`}
                fill
                unoptimized
                className="object-contain filter grayscale invert brightness-200 group-hover:grayscale-0 group-hover:invert-0 group-hover:brightness-100 transition-all duration-300"
              />
            </div>

            {/* Cinematic Tooltip */}
            <div
              className={`absolute ${
                tooltipAbove ? "bottom-[calc(100%+8px)]" : "top-[calc(100%+8px)]"
              } hidden group-hover:block w-32 rounded-lg bg-zinc-900 border border-white/10 px-3 py-1.5 text-[10px] font-mono font-bold tracking-widest uppercase text-white shadow-2xl text-center backdrop-blur-md`}
            >
              PROTOCOL_{index + 1}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-zinc-900 border-white/10 ${
                  tooltipAbove ? "top-full -mt-1 border-t-0 border-l-0" : "bottom-full -mb-1 border-b-0 border-r-0"
                }`}
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function MultiOrbitSemiCircle() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const baseWidth = Math.min(size.width * 0.9, 800);
  const centerX = baseWidth / 2;
  const centerY = baseWidth * 0.5;

  const iconSize =
    size.width < 480
      ? Math.max(20, baseWidth * 0.04)
      : size.width < 768
      ? Math.max(28, baseWidth * 0.05)
      : Math.max(36, baseWidth * 0.06);

  return (
    <section className="py-24 relative w-full overflow-hidden bg-background border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_50%)]" />
      
      <div className="relative flex flex-col items-center text-center z-10 container mx-auto px-6">
        <span className="text-zinc-500 font-mono text-sm tracking-[0.3em] uppercase mb-6 block">INFRASTRUCTURE // SYNC</span>
        <h2 className="mb-8 text-5xl md:text-7xl font-heading font-black text-white tracking-tighter leading-none">
          UNIVERSAL <br /> <span className="text-zinc-600">SYNERGY.</span>
        </h2>
        <p className="mb-20 max-w-xl text-zinc-400 font-medium leading-relaxed md:text-lg">
          Our agents bridge the gap across your entire tech stack, deploying custom protocols directly into your core workflow.
        </p>

        <div
          className="relative mt-20 md:mt-12"
          style={{ width: baseWidth, height: baseWidth * 0.6 }}
        >
          <SemiCircleOrbit radius={baseWidth * 0.22} centerX={centerX} centerY={centerY} count={6} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.36} centerX={centerX} centerY={centerY} count={8} iconSize={iconSize} />
          <SemiCircleOrbit radius={baseWidth * 0.5} centerX={centerX} centerY={centerY} count={10} iconSize={iconSize} />
        </div>
      </div>
    </section>
  );
}
