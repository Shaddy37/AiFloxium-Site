"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { APEPUBLISH_URL } from "@/lib/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

gsap.registerPlugin(ScrollTrigger);

const BLIND_COUNT = 30;

const projects = [
  {
    titleLine1: "APE",
    titleLine2: "PUBLISH",
    role: "LIVE SAAS PLATFORM",
    desc: "An end-to-end AI platform that transforms your long-form content into viral, platform-native social assets. Designed, built, and shipped as a living proof of concept.",
    img: "/images/1.avif",
    url: APEPUBLISH_URL
  },
  {
    titleLine1: "STACK",
    titleLine2: "4U",
    role: "INTERNAL AUTOMATION",
    desc: "A masterclass in operational efficiency. We engineered a comprehensive automation stack that eliminates hundreds of manual hours, letting teams focus purely on growth.",
    img: "/images/2.avif",
    url: "#"
  },
  {
    titleLine1: "INVOICE",
    titleLine2: "PIPELINE",
    role: "AI WORKFLOW",
    desc: "Intelligent document processing at scale. This pipeline leverages advanced OCR and AI to seamlessly extract, categorize, and sync invoice data with accounting systems in seconds.",
    img: "/images/3.avif",
    url: "#"
  }
];

export default function FeaturedProduct() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  useGSAP(() => {
    if (prefersReduced || !containerRef.current) return;

    // Refresh ScrollTrigger to account for any lazy loaded images or Next.js layout shifts
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    const master = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        start: "top top",
        end: "+=300%", // 3 screens of scrolling distance to complete the timeline
        scrub: 1.5,
      }
    });

    // We animate from i=1 because i=0 is the base layer and its text is already visible
    projects.forEach((_, i) => {
      if (i === 0) return;

      const startTime = master.duration() + 0.2; // slight pause between transitions
      
      // Text out for previous
      master.add(
        gsap.to(`.txt-${i - 1}`, {
          autoAlpha: 0,
          filter: "blur(10px)",
          y: -40,
          duration: 1.2,
          ease: "power2.inOut",
        }),
        startTime
      );

      // Blinds open for current
      const blindsTl = gsap.timeline();
      for (let b = 0; b < BLIND_COUNT; b++) {
        blindsTl.to(`.blind-${i}-${b}`, {
          attr: {
            y: (index, target) => parseFloat(target.getAttribute("data-target-y") || "0"),
            height: (index, target) => parseFloat(target.getAttribute("data-target-h") || "0"),
          },
          duration: 1.5,
          ease: "power3.inOut"
        }, b * 0.02);
      }
      
      master.add(blindsTl, startTime);

      // Text in for current
      master.add(
        gsap.to(`.txt-${i}`, {
          autoAlpha: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1.5,
          ease: "power2.out",
        }),
        startTime + 0.2
      );
    });

    // Progress bar update
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "+=300%",
      onUpdate: (self) => {
        const progress = self.progress;
        const totalSteps = projects.length;
        projects.forEach((_, i) => {
          let p = (progress - i / totalSteps) * totalSteps;
          p = Math.max(0, Math.min(1, p));
          gsap.set(`.fill-${i}`, { scaleX: p });
        });
      }
    });

  }, { scope: containerRef, dependencies: [prefersReduced] });

  return (
    <section ref={containerRef} className="stage relative w-full h-screen bg-[#0a0608] border-y border-white/5 font-sans overflow-hidden">
      <div className="layers absolute inset-0 w-full h-full overflow-hidden">
        
        {/* Background Base layer */}
        <div className="absolute inset-0 w-full h-full bg-[#0a0608]">
          <div className="absolute inset-0 bg-radial-glow opacity-30 mix-blend-screen" />
          <div className="grainy-overlay" />
        </div>

        {/* SVG Layers */}
        {projects.map((p, i) => (
          <div key={i} className="layer absolute inset-0 w-full h-full">
            {i === 0 ? (
              // First layer is fully visible from start
              <div className="w-full h-full relative">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                 <img src={p.img} alt={p.titleLine1} className="w-full h-full object-cover filter brightness-[0.35] scale-105" />
              </div>
            ) : (
              // Subsequent layers use SVG mask blinds
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <mask id={`mask-${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                    <rect x="0" y="0" width="100" height="100" fill="black" />
                    <g id={`blinds-${i}`}>
                      {Array.from({ length: BLIND_COUNT }).map((_, b) => {
                        const h = 100 / BLIND_COUNT;
                        const centerY = 100 - (b * h + h / 2);
                        return (
                          <g key={b}>
                            <rect
                              className={`blind-${i}-${b}`}
                              x="0"
                              y={centerY}
                              width="100"
                              height="0"
                              fill="white"
                              shapeRendering="crispEdges"
                              data-target-y={centerY - h / 2}
                              data-target-h={h / 2 + 0.15}
                            />
                            <rect
                              className={`blind-${i}-${b}`}
                              x="0"
                              y={centerY}
                              width="100"
                              height="0"
                              fill="white"
                              shapeRendering="crispEdges"
                              data-target-y={centerY}
                              data-target-h={h / 2 + 0.15}
                            />
                          </g>
                        );
                      })}
                    </g>
                  </mask>
                </defs>
                <image 
                  href={p.img} 
                  x="0" 
                  y="0" 
                  width="100" 
                  height="100" 
                  preserveAspectRatio="xMidYMid slice" 
                  mask={`url(#mask-${i})`} 
                  style={{ filter: "brightness(0.35)" }} 
                />
              </svg>
            )}
          </div>
        ))}

        {/* Premium Mobile-Responsive Texts */}
        <div className="texts absolute inset-0 pointer-events-none w-full z-10">
          <div className="relative w-full h-full flex flex-col justify-center px-[5vw] sm:px-[6vw] lg:px-[10vw]">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`txt-${i} absolute left-[5vw] sm:left-[6vw] lg:left-[10vw] flex flex-col justify-center h-full max-w-[90vw] md:max-w-4xl ${i === 0 ? "" : "translate-y-[40px]"}`}
                style={{ 
                  opacity: i === 0 ? 1 : 0, 
                  visibility: i === 0 ? "visible" : "hidden",
                  filter: i === 0 ? "blur(0px)" : "blur(10px)"
                }}
              >
                <div className="pointer-events-auto">
                  <h2 className="text-[#E0AAFF] text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-[0.3em] font-inter mb-4 md:mb-6">
                    {p.role}
                  </h2>
                  <h1 className="text-white text-[clamp(3.5rem,10vw,12rem)] tracking-[-0.02em] leading-[0.85] font-instrument drop-shadow-2xl mb-6 md:mb-10">
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#E0AAFF] transition-colors inline-block hover:scale-[1.02] transform duration-500 ease-out origin-left">
                      {p.titleLine1}<br />
                      {p.titleLine2}
                    </a>
                  </h1>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl font-inter font-light leading-[1.8] max-w-[85%] sm:max-w-lg md:max-w-xl">
                    {p.desc}
                  </p>
                  
                  <div className="mt-8 md:mt-12">
                    <a 
                      href={p.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group inline-flex items-center gap-4 text-[10px] md:text-xs tracking-[0.2em] uppercase font-semibold text-white/80 hover:text-[#E0AAFF] transition-colors"
                    >
                      <span className="w-8 md:w-12 h-[1px] bg-[#E0AAFF] group-hover:w-16 md:group-hover:w-20 transition-all duration-500 ease-out"></span>
                      Explore Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar absolute bottom-0 left-0 w-full p-[5vw] md:p-[3vw] flex gap-2 md:gap-4 z-20 pointer-events-none">
          {projects.map((_, i) => (
            <div key={i} className="segment flex-1 h-[2px] bg-white/20 relative overflow-hidden rounded-full">
              <div className={`fill-${i} absolute top-0 left-0 w-full h-full bg-[#E0AAFF] origin-left scale-x-0`} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
