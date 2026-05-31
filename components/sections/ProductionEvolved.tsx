"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Workflow, PhoneCall, LayoutDashboard, ArrowRight } from "lucide-react";

interface FadingVideoProps {
  src: string;
  className?: string;
  style?: React.CSSProperties;
}

const FadingVideo = ({ src, className, style }: FadingVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const fadingOutRef = useRef<boolean>(false);

  useEffect(() => {
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
    };
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      preload="auto"
      className={className}
      style={{ ...style, opacity: 0 }}
      src={src}
    />
  );
};

export default function ProductionEvolved() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isContainerInView = useInView(containerRef, { once: true, margin: "-100px" });

  const cards = [
    {
      title: "Autonomous Workflows",
      body: "We build secure, self-hosted n8n pipelines running on your own VPS. Process millions of tasks with zero scaling fees, zero data leaks, and absolute reliability.",
      icon: Workflow,
      tags: ["n8n.io", "Self-Hosted VPS", "API Integration", "Slack Alerts"]
    },
    {
      title: "Conversational Voice AI",
      body: "Qualify inbound leads and book appointments automatically with under 500ms response speed voice agents that match your brand tone and integrate with your CRM.",
      icon: PhoneCall,
      tags: ["Vapi & Retell", "Sub-500ms Latency", "CRM Sync", "Auto-Booking"]
    },
    {
      title: "Bespoke Web Portals",
      body: "Custom internal tools, dashboards, and databases built with Next.js and Supabase. Ditch messy spreadsheets and scale operations with a tailored codebase.",
      icon: LayoutDashboard,
      tags: ["Next.js", "Supabase", "Tailored DBs", "Code Ownership"]
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
      {/* Dark video overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col flex-1 justify-between">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-20 max-w-4xl"
        >
          <span className="block text-sm font-sans tracking-[0.2em] uppercase text-white/80 mb-4">
            {"// Capabilities"}
          </span>
          <h2 className="font-heading font-black text-white text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-3px] uppercase mb-6">
            SYSTEMS WE<br />ENGINEER.
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-sans font-light leading-relaxed max-w-2xl">
            We architect and deploy custom operational infrastructure that automates your work, secures your client data, and removes administrative bottlenecks.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={isContainerInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.2 + i * 0.15,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="liquid-glass rounded-[1.25rem] p-6 min-h-[380px] flex flex-col justify-between hover:shadow-[0_12px_40px_rgba(255,255,255,0.05)] transition-all duration-500"
              >
                {/* Card Top Row */}
                <div className="flex items-start justify-between gap-4">
                  {/* Left Square Icon */}
                  <div className="w-11 h-11 rounded-[0.75rem] flex items-center justify-center liquid-glass border border-white/10 shrink-0">
                    <IconComponent className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Right Tags */}
                  <div className="flex flex-wrap justify-end gap-1.5 max-w-[75%]">
                    {card.tags.map((tag, tIndex) => (
                      <span 
                        key={tIndex}
                        className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-sans whitespace-nowrap"
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
                    <p className="text-sm text-white/80 font-sans font-light leading-snug max-w-[32ch] mb-6">
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
