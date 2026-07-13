"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const sentences = [
  "Most agencies build noise. Bloated dashboards. Fragile code.",
  "Software should honor your nature.",
  "I build pure agentic operating systems.",
  "Zero manual overhead. Total clarity."
];

export default function KineticStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // buttery smooth scrub
      }
    });

    // Ambient glow animation mapped to scroll
    tl.to(glowRef.current, {
      background: "radial-gradient(circle, rgba(123,44,191,0.25) 0%, rgba(10,6,8,0) 70%)",
      scale: 1.5,
      xPercent: 50,
      yPercent: 20,
      duration: sentences.length,
    }, 0);

    sentences.forEach((_, i) => {
      const el = textRefs.current[i];
      if (!el) return;

      // Each sentence gets 1 unit of duration
      const startTime = i;

      // Fade in & scale down from slightly larger, with a blur reveal
      tl.fromTo(el, 
        { opacity: 0, scale: 1.1, y: 50, filter: "blur(15px)" },
        { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 0.4, ease: "power2.out" },
        startTime
      );

      // Hold in place
      tl.to(el, { duration: 0.2 }, startTime + 0.4);

      // Fade out and blur away
      if (i !== sentences.length - 1) {
        tl.to(el, 
          { opacity: 0, scale: 0.95, y: -50, filter: "blur(15px)", duration: 0.4, ease: "power2.in" },
          startTime + 0.6
        );
      }
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative w-full h-[400vh] bg-[#0a0608] border-b border-white/5">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Ambient Glow */}
        <div 
          ref={glowRef}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full mix-blend-screen pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(224,170,255,0.1) 0%, rgba(10,6,8,0) 60%)" }}
        />

        {/* Text Container */}
        <div className="relative w-full max-w-5xl px-6 mx-auto flex items-center justify-center">
          {sentences.map((text, i) => {
            // Emphasize specific words by wrapping them in spans
            const formattedText = text
              .replace("noise", "<span class='text-[#E0AAFF] italic'>noise</span>")
              .replace("nature", "<span class='text-[#E0AAFF] italic'>nature</span>")
              .replace("pure agentic operating systems", "<span class='text-white italic'>pure agentic operating systems</span>")
              .replace("Zero manual overhead", "<span class='text-[#E0AAFF] italic'>Zero manual overhead</span>");

            return (
              <h2 
                key={i}
                ref={el => { textRefs.current[i] = el; }}
                className="absolute w-full text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-instrument leading-[1.05] tracking-tight text-center text-white/90"
                style={{ opacity: 0 }} // hide initially to avoid FOUC
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
