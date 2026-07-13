"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { CALENDLY_URL } from '@/lib/site';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={cn(
        "bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-[transform,background-color,filter] duration-200 ease-[var(--ease-out)] active:scale-[0.97] button-glow cursor-pointer font-inter focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0AAFF] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function MountainParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Cinematic Parallax Rates
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  const spaceY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const mountainsY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  
  // Clouds that move up on scroll
  const cloud1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);
  const cloud2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const orb1Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-screen h-[100dvh] overflow-hidden bg-[#030108] select-none"
    >
      {/* 1. Deep Space Background Layer */}
      <motion.div 
        style={{ y: spaceY }}
        className="absolute inset-[-10%] w-[120%] h-[120%] z-0"
      >
        <Image 
          src="/images/space_clouds_bg.png" 
          alt="Space Nebulas"
          fill
          priority
          className="object-cover opacity-60 mix-blend-screen pointer-events-none"
        />
        {/* Color overlay to ensure it matches brand */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0D30]/40 via-[#030108]/60 to-[#030108]" />
      </motion.div>

      {/* 2. Abstract Glowing Orbs (Modern Practice inspiration) */}
      <motion.div style={{ y: orb1Y }} aria-hidden="true" className="absolute top-[20%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-[#7B2CBF] rounded-full mix-blend-screen filter blur-[120px] opacity-30 z-0 animate-[pulse_8s_ease-in-out_infinite]" />
      <motion.div style={{ y: orb2Y }} aria-hidden="true" className="absolute top-[40%] right-[10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-[#E0AAFF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 z-0 animate-[pulse_10s_ease-in-out_infinite_reverse]" />

      {/* 3. Mid Mountains Layer */}
      <motion.div 
        style={{ y: mountainsY }}
        className="absolute inset-0 w-full h-full z-10"
      >
        <Image 
          src="/images/mid_mountains.png" 
          alt="Alien Mountain Silhouette"
          fill
          priority
          className="object-cover object-bottom opacity-80 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 20%, black 80%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 20%, black 80%)'
          }}
        />
      </motion.div>

      {/* 4. Base Gradient to blend into the next section smoothly */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#0a0608] via-[#0a0608]/80 to-transparent z-20 pointer-events-none" />

      {/* 2.5 Parallax Clouds Moving UP */}
      <motion.div
        style={{ y: cloud1Y }}
        className="absolute top-[15%] left-[-10%] w-[600px] z-20 pointer-events-none opacity-40 mix-blend-screen"
        aria-hidden="true"
      >
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </motion.div>
      <motion.div
        style={{ y: cloud2Y }}
        className="absolute top-[5%] right-[-5%] w-[700px] z-20 pointer-events-none opacity-30 mix-blend-screen scale-x-[-1]"
        aria-hidden="true"
      >
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Hero Text Content (Original Style) */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center -mt-[120px] px-6"
      >
        <h1 className="font-instrument text-white text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.04em] text-center text-glow max-w-5xl text-balance">
          Intelligent software.<br className="hidden sm:inline" /> Radiant presence.
        </h1>
        <p className="font-inter text-white/70 text-sm md:text-base text-center mt-6 md:mt-7 max-w-xl leading-relaxed">
          Expert SaaS products, custom AI builds, and holistic business automations, delivered with precision and intention.
        </p>
        <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-8 md:mt-9 pointer-events-auto">
          <CustomButton>Begin your project →</CustomButton>
        </Link>
      </motion.div>
    </section>
  );
}
