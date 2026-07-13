"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, ArrowRight, Cpu, PhoneCall, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { LazyVideo } from "@/components/ui/lazy-video";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const capabilities = [
  {
    title: "Agentic OS & Infrastructure",
    description: "Custom agentic operating systems deployed to private VPS servers. Run self-healing multi-agent workflows with zero transaction fees.",
    icon: Cpu,
    points: [
      "Custom private VPS deployments",
      "Autonomous multi-agent execution",
      "Dynamic tools & API integrations",
      "Self-healing logger scripts"
    ],
    videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_094631_d30ab262-45ee-4b7d-99f3-5d5848c8ef13.mp4"
  },
  {
    title: "Conversational Voice AI",
    description: "Qualify inbound leads and book appointments automatically. Run sub-500ms voice agents integrated directly with your CRM.",
    icon: PhoneCall,
    points: [
      "Sub-500ms real response speeds",
      "Full-duplex call state machines",
      "Intelligent lead scheduling",
      "Direct CRM & tag sync setups"
    ],
    videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
  },
  {
    title: "Bespoke Portals & Reasoning",
    description: "Bespoke internal dashboards, customer portals, and databases. I apply AI reasoning layers to eliminate pipeline bottlenecks.",
    icon: LayoutDashboard,
    points: [
      "Next.js & Supabase custom builds",
      "Applied database reasoning layers",
      "Document OCR & processing pipelines",
      "Full code ownership & IP rights"
    ],
    videoSrc: "" // We will just use an abstract color if no video
  }
];

export default function CapabilitiesSticky() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rightSectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(() => {
    if (!containerRef.current) return;

    rightSectionsRef.current.forEach((section, index) => {
      if (!section) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onToggle: self => {
          if (self.isActive) {
            setActiveIndex(index);
          }
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full bg-[#0a0608] text-white border-b border-white/5">
      
      {/* Background Graphic that changes based on active index */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[150px] transition-colors duration-1000 ease-in-out"
          style={{
            backgroundColor: activeIndex === 0 ? "rgba(123,44,191,0.05)" : 
                             activeIndex === 1 ? "rgba(224,170,255,0.05)" : 
                             "rgba(157,78,221,0.05)"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative flex flex-col md:flex-row items-start">
        
        {/* Left Side: Sticky Titles */}
        <div className="md:sticky md:top-0 md:h-screen w-full md:w-1/2 flex flex-col justify-center py-20 pr-10 z-20">
          <span className="text-[#E0AAFF] tracking-[0.2em] font-medium text-xs uppercase font-inter mb-12 block">
            // Capabilities
          </span>
          <div className="flex flex-col gap-6">
            {capabilities.map((cap, i) => (
              <h3 
                key={i}
                className={`text-4xl md:text-5xl lg:text-6xl font-instrument leading-tight transition-all duration-500 cursor-pointer
                  ${activeIndex === i ? "text-white opacity-100 md:translate-x-4" : "text-white/20 opacity-40 hover:text-white/60"}
                `}
                onClick={() => {
                  rightSectionsRef.current[i]?.scrollIntoView({ behavior: "smooth", block: "center" });
                }}
              >
                {cap.title}
              </h3>
            ))}
          </div>
        </div>

        {/* Right Side: Scrollable Details */}
        <div className="w-full md:w-1/2 relative z-10">
          {capabilities.map((cap, i) => {
            const IconComponent = cap.icon;
            
            return (
              <div 
                key={i} 
                ref={el => { rightSectionsRef.current[i] = el; }}
                className="md:h-screen flex flex-col justify-center py-12 md:py-20"
              >
                <div 
                  className={`transition-all duration-700 ease-out transform
                    ${activeIndex === i ? "opacity-100 translate-y-0" : "md:opacity-0 md:translate-y-16"}
                  `}
                >
                  {/* Visual / Video Box */}
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/50 mb-8 relative liquid-glass group">
                    {cap.videoSrc ? (
                      <LazyVideo
                        preload="none"
                        src={cap.videoSrc}
                        className="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#7B2CBF]/20 to-[#0a0608] opacity-60 group-hover:scale-105 transition-transform duration-700" />
                    )}
                    
                    {/* Top Icon Badge */}
                    <div className="absolute top-6 left-6 w-12 h-12 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md flex items-center justify-center text-[#E0AAFF]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Details */}
                  <p className="text-lg md:text-xl text-white/70 font-inter font-light leading-relaxed mb-8">
                    {cap.description}
                  </p>

                  {/* Checklist */}
                  <ul className="flex flex-col gap-4 mb-8">
                    {cap.points.map((point, pIndex) => (
                      <li key={pIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-[#E0AAFF] mt-0.5 shrink-0" />
                        <span className="text-white/80 font-inter font-light text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[#E0AAFF] hover:text-white transition-colors duration-200 text-sm font-semibold tracking-wider uppercase font-inter group/link"
                  >
                    See how it works
                    <ArrowRight className="h-4 w-4 transform transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
