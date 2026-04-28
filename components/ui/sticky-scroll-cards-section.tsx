"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// --- Data for the feature cards (Aligned with AI Agency Niche) ---
const features = [
  {
    title: "Autonomous Agentic Workflows",
    description: "Scale your operations with custom n8n agents that handle everything from lead qualification to automated fulfillment, running 24/7 without direct supervision.",
    imageUrl: "/images/nano-banana/banana-ai.webp",
    bgColor: "bg-brand-plum/5",
    textColor: "text-zinc-400"
  },
  {
    title: "Claude Code Integration",
    description: "Architecting high-speed development environments using Claude Code. Shift your engineering from manual coding to agentic orchestration for 10x velocity.",
    imageUrl: "/images/nano-banana/banana-code.webp",
    bgColor: "bg-brand-plum/10",
    textColor: "text-zinc-400"
  },
  {
    title: "Multi-Model Intelligence",
    description: "Don't get locked into one provider. I deploy custom routers that switch between OpenAI, Claude, and DeepSeek based on task complexity and cost efficiency.",
    imageUrl: "/images/nano-banana/banana-brain.webp",
    bgColor: "bg-brand-plum/5",
    textColor: "text-zinc-400"
  },
  {
    title: "Secure Data Pipelines",
    description: "Enterprise-grade privacy at the core. I build secure, encrypted pipelines that keep your proprietary data isolated from public training sets while maximizing AI utility.",
    imageUrl: "/images/nano-banana/banana-data.webp",
    bgColor: "bg-brand-plum/10",
    textColor: "text-zinc-400"
  },
];

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};


// --- Header Component ---
const AnimatedHeader = () => {
    const [headerRef, headerInView] = useScrollAnimation();
    const [pRef, pInView] = useScrollAnimation();

    return (
        <div className="text-center max-w-4xl mx-auto mb-20 px-6">
            <h2 
                ref={headerRef}
                className={`text-5xl md:text-7xl font-black transition-all duration-1000 ease-out text-white tracking-tighter uppercase ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                CAPABILITIES. <span className="text-brush text-4xl md:text-6xl ml-4">ENGINEERED.</span>
            </h2>
            <p 
                ref={pRef}
                className={`text-xl md:text-2xl text-zinc-400 mt-6 transition-all duration-1000 ease-out delay-300 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transformStyle: 'preserve-3d' }}
            >
                I transition your business from static processes to dynamic, autonomous agentic systems.
            </p>
        </div>
    );
};

// This is the main component that orchestrates everything.
export function StickyFeatureSection() {
  return (
    <div className="bg-brand-bg font-sans relative">
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* The main section for the features */}
          <section className="py-32 md:py-48 flex flex-col items-center">
            
            <AnimatedHeader />

            {/* The container for the sticky cards */}
            <div className="w-full relative space-y-20">
              {features.map((feature, index) => (
                <div
                    key={index}
                    // The sticky class makes the card stick to the top of the container.
                    className={`${feature.bgColor} grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12 p-8 md:p-16 border border-brand-plum/20 shadow-2xl sticky backdrop-blur-md rounded-[2rem] overflow-hidden group transition-all duration-500 hover:border-brand-plum/40`}
                    // All cards will stick at the same position, creating the stacking effect.
                    style={{ top: `${150 + index * 20}px` }}
                >
                  {/* Card Content */}
                  <div className="flex flex-col justify-center relative z-10">
                     <span className="text-brand-orange font-bold text-sm mb-4 tracking-[0.3em] uppercase">{`0${index + 1} // CAPACITY`}</span>
                    <h3 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tighter uppercase font-heading group-hover:text-brand-orange transition-colors duration-500">{feature.title}</h3>
                    <p className={`${feature.textColor} text-lg md:text-xl leading-relaxed font-medium`}>{feature.description}</p>
                    
                    <div className="mt-8">
                       <div className="h-px w-20 bg-gradient-to-r from-brand-orange to-transparent opacity-40" />
                    </div>
                  </div>
                  
                  {/* Card Image */}
                  <div className="image-wrapper mt-8 md:mt-0 relative aspect-[4/3] group/img overflow-hidden border border-brand-plum/10 rounded-2xl">
                    <Image 
                        src={feature.imageUrl} 
                        alt={feature.title}
                        fill
                        unoptimized
                        className="shadow-lg object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
