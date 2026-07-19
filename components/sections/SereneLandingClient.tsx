"use client";

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import PrismaFeatures from '@/components/sections/PrismaFeatures';
import StoryNarrative from '@/components/sections/StoryNarrative';
import ProductionEvolved from '@/components/sections/ProductionEvolved';
import NeuralKineticsHero from '@/components/sections/NeuralKineticsHero';
import { EarthContactCTA } from '@/components/sections/EarthContactCTA';
import { LazySections } from '@/components/sections/LazySections';
import Footer from '@/components/sections/Footer';

// --- QUOTE / PHILOSOPHY SECTION WITH PARALLAX ---
const QuoteSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rainbowRef = useRef<HTMLDivElement>(null);
  const cloudLeftRef = useRef<HTMLDivElement>(null);
  const cloudRightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const isVisibleRef = useRef(false);

  const targetRef = useRef({ rainbowY: 120, cloudX: -200, cloudY: 0 });
  const currentRef = useRef({ rainbowY: 120, cloudX: -200, cloudY: 0 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    observer.observe(section);

    const tick = () => {
      if (!isVisibleRef.current || !section) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)));

      const t = targetRef.current;
      t.rainbowY = 120 + progress * (-280);
      const inView = progress >= 0.12 && progress <= 0.92;
      t.cloudX = inView ? 0 : -200;
      t.cloudY = progress * -50;

      const c = currentRef.current;
      c.rainbowY += (t.rainbowY - c.rainbowY) * 0.06;
      c.cloudX += (t.cloudX - c.cloudX) * 0.04;
      c.cloudY += (t.cloudY - c.cloudY) * 0.04;

      const cloudOpacity = 1 - Math.abs(c.cloudX) / 200;

      if (rainbowRef.current) rainbowRef.current.style.transform = `translate3d(0,${c.rainbowY}px,0)`;
      if (cloudLeftRef.current) {
        cloudLeftRef.current.style.transform = `translate3d(${c.cloudX}px,${c.cloudY}px,0)`;
        cloudLeftRef.current.style.opacity = String(cloudOpacity);
      }
      if (cloudRightRef.current) {
        cloudRightRef.current.style.transform = `translate3d(${-c.cloudX}px,${c.cloudY}px,0)`;
        cloudRightRef.current.style.opacity = String(cloudOpacity);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen h-[100dvh] overflow-hidden flex items-center justify-center px-6 border-b border-black/5"
      aria-hidden="true"
      style={{ backgroundImage: 'linear-gradient(to bottom, var(--background) 0%, var(--muted) 100%)' }}
    >
      <div
        ref={rainbowRef}
        className="absolute inset-x-0 top-0 z-30 pointer-events-none h-[400px] w-full"
        style={{ transform: 'translate3d(0,120px,0)' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/8d520a7515d06cbfc403d0125e3d05b1a7ccd29c.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div
        ref={cloudLeftRef}
        className="hidden sm:block absolute left-0 bottom-[10%] z-10 pointer-events-none w-[500px] md:w-[650px]"
        style={{ transform: 'translate3d(-200px,0,0)', opacity: 0, marginLeft: '-50%' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full object-contain"
        />
      </div>

      <div
        ref={cloudRightRef}
        className="hidden sm:block absolute right-0 bottom-[15%] z-10 pointer-events-none w-[500px] md:w-[650px] scale-x-[-1]"
        style={{ transform: 'translate3d(200px,0,0)', opacity: 0, marginRight: '-75%' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/0d6dfd3f90b930f21726f2ed56a3320d79b7a797.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full object-contain"
        />
      </div>

      <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
        <blockquote className="font-instrument text-black text-xl sm:text-2xl md:text-4xl lg:text-[42px] leading-[1.45] md:leading-[1.5]">
          &ldquo;Software should honor your nature. I build systems that pursue refined outcomes, considered integrations, and lasting performance. I spend time learning what matters to your business before deciding what serves you best. No bloat, no excess, just tools that let you scale.&rdquo;
        </blockquote>
        <cite className="mt-6 md:mt-8 text-black/60 text-sm md:text-base tracking-wide font-inter uppercase font-medium not-italic">
          Muhammad Shadab Shams, Founder
        </cite>
      </div>
    </section>
  );
};

// --- MAIN WRAPPER COMPONENT ---
export default function SereneLandingClient() {
  return (
    <div className="relative bg-[var(--background)] min-h-screen text-black font-inter selection:bg-black/10 selection:text-black">
      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden flex justify-center z-0" aria-hidden="true">
        <div className="absolute -top-[20%] w-[120vw] h-[60vh] bg-gradient-to-b from-black/[0.02] via-black/[0.01] to-transparent blur-[120px] rounded-[100%] opacity-60" />
      </div>

      <div className="relative z-10">
        <NeuralKineticsHero />
        <QuoteSection />
        <PrismaFeatures />
        <StoryNarrative />
        <ProductionEvolved />
        <LazySections />
        <EarthContactCTA />
        <Footer />
      </div>
    </div>
  );
}
