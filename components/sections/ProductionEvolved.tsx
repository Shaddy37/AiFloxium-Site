"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Link from "next/link";
import { Cpu, PhoneCall, LayoutDashboard, ArrowRight } from "lucide-react";

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FadingVideo = ({ src, className, style }: FadingVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "300px",
        threshold: 0,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isInView) {
      const video = videoRef.current;
      if (video) video.pause();
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    const FADE_MS = 500;
    const FADE_OUT_LEAD = 0.55;

    const fadeTo = (targetOpacity: number, duration: number = FADE_MS) => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }

      const initialOpacity = parseFloat(video.style.opacity || "0");
      const startTime = performance.now();

      const animate = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentOpacity = initialOpacity + (targetOpacity - initialOpacity) * progress;
        video.style.opacity = currentOpacity.toString();

        if (progress < 1) {
          rafIdRef.current = requestAnimationFrame(animate);
        } else {
          rafIdRef.current = null;
        }
      };

      rafIdRef.current = requestAnimationFrame(animate);
    };

    const handleLoadedData = () => {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeTo(1);
    };

    const handleTimeUpdate = () => {
      const duration = video.duration;
      const currentTime = video.currentTime;
      if (
        duration &&
        !fadingOutRef.current &&
        duration - currentTime <= FADE_OUT_LEAD &&
        duration - currentTime > 0
      ) {
        fadingOutRef.current = true;
        fadeTo(0);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      setTimeout(() => {
        if (!video) return;
        video.currentTime = 0;
        video.play().catch(() => {});
        fadingOutRef.current = false;
        fadeTo(1);
      }, 100);
    };

    if (video.readyState >= 2) {
      video.style.opacity = "0";
      video.play().catch(() => {});
      fadeTo(1);
    } else {
      video.load();
    }

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
      video.pause();
    };
  }, [src, isInView]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="none"
      className={`${className} bg-zinc-950`}
      style={{ ...style, opacity: 0 }}
      src={src}
    />
  );
};

interface StackCardProps {
  card: any;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const StackCard = ({ card, index, totalCards, progress }: StackCardProps) => {
  const IconComponent = card.icon;
  
  // Each card becomes active at a specific scroll progress
  // Card 0: 0 to 0.33, Card 1: 0.33 to 0.66, Card 2: 0.66 to 1
  const start = index / totalCards;
  const end = (index + 1) / totalCards;

  // The card comes from the bottom (100vh) up to 0, then stays there, then scales down.
  const y = useTransform(
    progress,
    [start - 0.1, start],
    ["100vh", "0vh"]
  );

  // Once it reaches its slot, it shrinks backward slightly as the NEXT card comes up
  const scale = useTransform(
    progress,
    [start, end],
    [1, 0.9 - (totalCards - index) * 0.02]
  );
  
  const opacity = useTransform(
    progress,
    [start, end],
    [1, 0.5]
  );

  return (
    <motion.div
      style={{
        y: index === 0 ? "0vh" : y, // The first card is already visible
        scale,
        opacity: index === totalCards - 1 ? 1 : opacity, // Last card doesn't fade out
        transformOrigin: "top center",
        zIndex: index + 10,
        position: index === 0 ? "relative" : "absolute",
        top: 0,
        left: 0,
        width: "100%",
      }}
      className="bg-black/40 backdrop-blur-3xl text-white/40 border border-white/10 hover:border-[#7B2CBF]/50 hover:bg-[#7B2CBF]/10 rounded-[2rem] p-8 md:p-12 min-h-[380px] flex flex-col justify-between transition-[border-color,background-color] duration-300 group shadow-2xl"
    >
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#7B2CBF]/10 border border-[#7B2CBF]/30 text-[#E0AAFF] shrink-0 group-hover:scale-[1.05] transition-[transform,background-color] duration-300 ease-[var(--ease-out)]">
          <IconComponent className="h-6 w-6" strokeWidth={1.5} />
        </div>

        <div className="flex flex-wrap md:justify-end gap-2 max-w-[80%] md:max-w-[60%]">
          {card.tags.map((tag: string, tIndex: number) => (
            <span 
              key={tIndex}
              className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-[11px] text-white/80 font-inter font-light group-hover:border-[#7B2CBF]/40 transition-colors duration-300 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 flex flex-col justify-between flex-1 gap-6">
        <div>
          <h3 className="font-inter font-semibold text-white text-3xl md:text-4xl tracking-wide leading-tight mb-4">
            {card.title}
          </h3>
          <p className="text-base md:text-lg text-white/70 font-inter font-light leading-relaxed max-w-3xl">
            {card.body}
          </p>
        </div>
        
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-[#E0AAFF] hover:text-white transition-colors duration-200 text-sm font-semibold tracking-wider uppercase mt-auto font-inter w-fit"
        >
          See how it works
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default function ProductionEvolved() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards = [
    {
      title: "Agentic OS & Infrastructure",
      body: "Custom agentic operating systems deployed to private VPS servers. Run self-healing multi-agent workflows with zero transaction fees. No bloat. Just ruthless scaling efficiency.",
      icon: Cpu,
      tags: ["Agentic OS", "Private VPS", "Multi-Agent Systems", "Self-Healing Logs"]
    },
    {
      title: "Conversational Voice AI",
      body: "Qualify inbound leads and book appointments automatically. Run sub-500ms voice agents integrated directly with your CRM. It sounds real, acts smart, and closes fast.",
      icon: PhoneCall,
      tags: ["Vapi & Retell", "Sub-500ms Latency", "CRM Sync", "Auto-Booking"]
    },
    {
      title: "Bespoke Portals & Reasoning",
      body: "Bespoke internal dashboards, customer portals, and databases. I apply AI reasoning layers to eliminate pipeline bottlenecks, fully coded with modern Next.js stacks.",
      icon: LayoutDashboard,
      tags: ["Next.js", "Supabase", "Applied AI Reasoning", "Code Ownership"]
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh] bg-[#0a0608] text-white border-b border-white/5"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6 sm:px-8 md:px-16 lg:px-20 py-24">
        {/* Background Video */}
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0608]/90 via-[#0a0608]/80 to-[#0a0608] z-[1] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-[#7B2CBF]/15 blur-[130px] pointer-events-none z-[1]" />

        <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
          
          {/* Header (Left side on desktop, top on mobile) */}
          <div className="lg:w-5/12 flex flex-col justify-center h-full">
            <span className="block text-xs font-inter tracking-[0.2em] uppercase text-[#E0AAFF] font-semibold mb-6">
              // Capabilities
            </span>
            <h2 className="font-instrument text-white text-[clamp(2.5rem,7vw,6rem)] leading-[0.95] tracking-[-0.04em] mb-8 text-balance">
              Systems I <br />
              <span className="font-instrument text-[#E0AAFF] italic">engineer.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-inter font-light leading-relaxed">
              I architect and deploy custom agentic infrastructure that automates operations, secures data, and eliminates administrative bottlenecks.
            </p>
          </div>

          {/* Stacking Cards (Right side on desktop, bottom on mobile) */}
          <div className="lg:w-7/12 relative w-full h-[450px] md:h-[400px]">
            {cards.map((card, i) => (
              <StackCard 
                key={i} 
                card={card} 
                index={i} 
                totalCards={cards.length} 
                progress={scrollYProgress} 
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
