"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CALENDLY_URL } from '@/lib/site';
import PrismaFeatures from '@/components/sections/PrismaFeatures';
import StoryNarrative from '@/components/sections/StoryNarrative';
import ProductionEvolved from '@/components/sections/ProductionEvolved';
import { EarthContactCTA } from '@/components/sections/EarthContactCTA';
import { LazySections } from '@/components/sections/LazySections';
import Footer from '@/components/sections/Footer';

// --- CUSTOM BUTTON COMPONENT ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const CustomButton: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={cn(
        "bg-white text-black px-10 py-5 rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#E0AAFF] transition-all duration-300 button-glow cursor-pointer font-inter",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

// --- HERO SECTION ---
interface HeroProps {
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ isMuted, setIsMuted }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full h-screen h-[100dvh] overflow-hidden flex flex-col justify-between select-none">
      {/* Background Video */}
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4"
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* CENTER CONTENT */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center -mt-[120px] px-6">
        <h1 className="font-instrument text-white text-[38px] md:text-7xl lg:text-[110px] leading-[0.95] tracking-tight text-center text-glow max-w-5xl">
          Intelligent software.<br className="hidden sm:inline" /> Radiant presence.
        </h1>
        <p className="font-inter text-white/70 text-sm md:text-base text-center mt-6 md:mt-7 max-w-xl leading-relaxed">
          Expert SaaS products, custom AI builds, and holistic business automations, delivered with precision and intention.
        </p>
        <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="mt-8 md:mt-9">
          <CustomButton>Begin your project →</CustomButton>
        </Link>
      </div>

      {/* SOUND INDICATOR (Desktop Only) */}
      <div className="hidden md:flex items-center gap-4 absolute bottom-8 left-8 z-20 pointer-events-auto">
        <button
          onClick={toggleMute}
          className="w-10 h-10 rounded-full border border-white/20 hover:border-white/50 flex items-center justify-center transition-colors cursor-pointer group bg-black/10 backdrop-blur-sm"
          aria-label={isMuted ? "Unmute background video" : "Mute background video"}
        >
          {isMuted ? (
            <span className="w-2.5 h-[1.5px] bg-white group-hover:scale-x-125 transition-transform" />
          ) : (
            <div className="flex gap-[2px] items-center h-[8px]">
              <span className="w-[1.5px] h-[6px] bg-white animate-[pulse_0.8s_infinite]" />
              <span className="w-[1.5px] h-[8px] bg-white animate-[pulse_0.6s_infinite]" />
              <span className="w-[1.5px] h-[5px] bg-white animate-[pulse_0.7s_infinite]" />
            </div>
          )}
        </button>
        <div className="flex flex-col text-left leading-none">
          <span className="text-white/60 text-[10px] uppercase tracking-widest font-inter">Experience</span>
          <span className="text-white/40 text-[10px] uppercase tracking-widest font-inter mt-1">with sound</span>
        </div>
      </div>
    </section>
  );
};

// --- QUOTE / PHILOSOPHY SECTION WITH PARALLAX ---
const QuoteSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Refs for tracking target and current positions
  const targetsRef = useRef({
    rainbowY: 120,
    cloudX: -200,
    cloudY: 0
  });

  const currentRef = useRef({
    rainbowY: 120,
    cloudX: -200,
    cloudY: 0
  });

  const [positions, setPositions] = useState({
    rainbowY: 120,
    cloudX: -200,
    cloudY: 0
  });

  useEffect(() => {
    let rId: number;

    const updateParallax = () => {
      if (!sectionRef.current) {
        rId = requestAnimationFrame(updateParallax);
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when top is at bottom of viewport, 1 when bottom is at top
      const scrollProgress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height)));

      // Rainbow Y target: +120px to -160px
      targetsRef.current.rainbowY = 120 + scrollProgress * (-160 - 120);

      // Cloud X target: slides in from -200px when progress is between 0.12 and 0.92
      const inView = scrollProgress >= 0.12 && scrollProgress <= 0.92;
      targetsRef.current.cloudX = inView ? 0 : -200;

      // Cloud Y target: progress * -50
      targetsRef.current.cloudY = scrollProgress * -50;

      // Interpolate (Lerp)
      currentRef.current.rainbowY += (targetsRef.current.rainbowY - currentRef.current.rainbowY) * 0.06;
      currentRef.current.cloudX += (targetsRef.current.cloudX - currentRef.current.cloudX) * 0.04;
      currentRef.current.cloudY += (targetsRef.current.cloudY - currentRef.current.cloudY) * 0.04;

      setPositions({
        rainbowY: currentRef.current.rainbowY,
        cloudX: currentRef.current.cloudX,
        cloudY: currentRef.current.cloudY
      });

      rId = requestAnimationFrame(updateParallax);
    };

    rId = requestAnimationFrame(updateParallax);

    return () => {
      cancelAnimationFrame(rId);
    };
  }, []);

  // Opacity tied directly to X distance
  const cloudOpacity = 1 - Math.abs(positions.cloudX) / 200;

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundImage: 'linear-gradient(to bottom, #09040F 0%, #1A0D30 30%, #351658 60%, #7B2CBF 100%)'
      }}
      className="relative w-full h-screen h-[100dvh] overflow-hidden flex items-center justify-center px-6"
    >
      {/* 1. Rainbow image */}
      <div 
        style={{ 
          transform: `translate3d(0, ${positions.rainbowY}px, 0)`,
          willChange: 'transform'
        }}
        className="absolute inset-x-0 top-0 z-30 pointer-events-none select-none h-[400px] w-full"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png"
          alt="Ambient lighting rainbow gradient overlay"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* 2. Left cloud */}
      <div 
        style={{ 
          transform: `translate3d(${positions.cloudX}px, ${positions.cloudY}px, 0)`,
          opacity: cloudOpacity,
          marginLeft: '-50%',
          willChange: 'transform, opacity'
        }}
        className="hidden sm:block absolute left-0 bottom-[10%] z-10 pointer-events-none select-none w-[500px] md:w-[650px] transition-[opacity] duration-100"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt="Parallax light cloud left"
          className="w-full object-contain"
        />
      </div>

      {/* 3. Right cloud */}
      <div 
        style={{ 
          transform: `translate3d(${-positions.cloudX}px, ${positions.cloudY}px, 0)`,
          opacity: cloudOpacity,
          marginRight: '-75%',
          willChange: 'transform, opacity'
        }}
        className="hidden sm:block absolute right-0 bottom-[15%] z-10 pointer-events-none select-none w-[500px] md:w-[650px] scale-x-[-1] transition-[opacity] duration-100"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt="Parallax light cloud right"
          className="w-full object-contain"
        />
      </div>

      {/* 4. Quote content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        <p className="font-instrument text-white text-xl sm:text-2xl md:text-4xl lg:text-[42px] leading-[1.45] md:leading-[1.5] select-none">
          “Software should honor your nature. I build systems that pursue refined outcomes, considered integrations, and lasting performance. I spend time learning what matters to your business before deciding what serves you best. No bloat, no excess—just tools that let you scale.”
        </p>
        <span className="mt-6 md:mt-8 text-white/80 text-sm md:text-base tracking-wide font-inter uppercase font-medium">
          Muhammad Shadab Shams &mdash; Founder
        </span>
      </div>
    </section>
  );
};

// --- MAIN WRAPPER COMPONENT ---
export default function SereneLandingClient() {
    const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative bg-[#0a0608] min-h-screen text-white overflow-x-hidden font-inter selection:bg-[#7B2CBF] selection:text-white">
      <Hero isMuted={isMuted} setIsMuted={setIsMuted} />
      <QuoteSection />
      <PrismaFeatures />
      <StoryNarrative />
      <ProductionEvolved />
      <LazySections />
      <EarthContactCTA />
      <Footer />
    </div>
  );
}
