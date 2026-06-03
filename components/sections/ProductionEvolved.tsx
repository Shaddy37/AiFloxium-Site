"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Cpu, PhoneCall, LayoutDashboard, ArrowRight } from "lucide-react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

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

    // If video is already loaded/ready when coming into view, play it
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

export default function ProductionEvolved() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });
  const prefersReduced = useReducedMotion();

  const cards = [
    {
      title: "Agentic OS & Infrastructure",
      body: "Custom agentic operating systems deployed to private VPS servers. Run self-healing multi-agent workflows with zero transaction fees.",
      icon: Cpu,
      tags: ["Agentic OS", "Private VPS", "Multi-Agent Systems", "Self-Healing Logs"]
    },
    {
      title: "Conversational Voice AI",
      body: "Qualify inbound leads and book appointments automatically. Run sub-500ms voice agents integrated directly with your CRM.",
      icon: PhoneCall,
      tags: ["Vapi & Retell", "Sub-500ms Latency", "CRM Sync", "Auto-Booking"]
    },
    {
      title: "Bespoke Portals & Reasoning",
      body: "Bespoke internal dashboards, customer portals, and databases. We apply AI reasoning layers to eliminate pipeline bottlenecks.",
      icon: LayoutDashboard,
      tags: ["Next.js", "Supabase", "Applied AI Reasoning", "Code Ownership"]
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black overflow-hidden py-32 px-6 sm:px-8 md:px-16 lg:px-20 flex flex-col justify-center"
    >
      {/* Background Video */}
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Dark video overlay with brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#130716]/80 via-[#0a030d]/75 to-black z-[1] pointer-events-none" />

      {/* Violet radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-brand-plum/20 blur-[130px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col flex-1 justify-between">
        
        {/* Header */}
        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
          transition={prefersReduced ? { duration: 0.01 } : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20 max-w-4xl"
        >
          <span className="block text-sm font-sans tracking-[0.2em] uppercase text-brand-orange mb-4">
            {"// Capabilities"}
          </span>
          <h2 className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-0.035em] mb-6">
            Systems we<br />engineer.
          </h2>
          <p className="text-lg md:text-xl text-zinc-200 font-sans font-light leading-relaxed max-w-2xl">
            We architect and deploy custom agentic infrastructure that automates operations, secures data, and eliminates administrative bottlenecks.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={i}
                initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
                transition={
                  prefersReduced
                    ? { duration: 0.01 }
                    : {
                        delay: 0.2 + i * 0.15,
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1]
                      }
                }
                className="bg-[#120716] border border-brand-plum/20 hover:border-brand-orange/45 rounded-[1.25rem] p-6 min-h-[380px] flex flex-col justify-between transition-colors duration-500 group relative z-10"
              >
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-4">
                  {/* Left Square Icon */}
                  <div className="w-11 h-11 rounded-[0.75rem] flex items-center justify-center bg-brand-plum/10 border border-brand-plum/30 shrink-0 group-hover:scale-110 transition-transform">
                    <IconComponent className="h-5 w-5 text-brand-orange" strokeWidth={1.5} />
                  </div>

                  {/* Right Tags */}
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-[75%]">
                    {card.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex}
                        className="bg-white/[0.04] border border-white/5 rounded-full px-3 py-1 text-[11px] text-white font-sans whitespace-nowrap group-hover:border-brand-plum/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Content */}
                <div className="mt-8 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-heading font-black text-white text-2xl sm:text-3xl tracking-[-0.5px] leading-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-zinc-200 font-sans font-light leading-snug max-w-[32ch] mb-6">
                      {card.body}
                    </p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-brand-orange hover:text-brand-orange/80 transition-colors text-xs font-bold tracking-wider uppercase mt-auto"
                  >
                    See how it works
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

