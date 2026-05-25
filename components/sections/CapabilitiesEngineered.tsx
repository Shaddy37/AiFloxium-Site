"use client";

import { useRef, useEffect, useState } from "react";

/**
 * CapabilitiesEngineered
 *
 * Sticky-scroll section: "I can [verb]." where a new verb appears at the
 * viewport centre as the user scrolls through the section.
 *
 * Implementation strategy:
 *  - The section is tall (COUNT * 100vh) so the user scrolls through it.
 *  - A sticky inner panel stays locked to the viewport.
 *  - We track the scroll position of the section via IntersectionObserver +
 *    scroll events, derive which word index is "active", and render all words
 *    with a gradient clip that spotlights only the active one.
 *  - Uses CSS `background-attachment: fixed` gradient on each word so the
 *    white band is always at the viewport vertical centre (50vh).
 */

const words = [
  { label: "automate.",    sublabel: "Self-hosted n8n pipelines saving 20+ hours weekly with zero scaling fees." },
  { label: "orchestrate.", sublabel: "Voice AI agents with under 500ms latency to qualify and book leads 24/7." },
  { label: "build.",       sublabel: "Bespoke internal dashboards replacing fragile spreadsheets in under 14 days." },
  { label: "deploy.",      sublabel: "Automated OCR systems reducing invoice processing time by 85%." },
  { label: "integrate.",   sublabel: "Sync HubSpot, email, and Slack to follow up with inbound leads in under 5 minutes." },
  { label: "optimize.",    sublabel: "Deterministic validation checkpoints to eliminate manual entry errors entirely." },
  { label: "ship.",        sublabel: "White-label operational workflows to double capacity without payroll bloat." },
];

const COUNT = words.length;

export default function CapabilitiesEngineered() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const sectionH = el.offsetHeight;
      // How far the top of the section is above the viewport top (negative = scrolled past)
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / (sectionH - window.innerHeight)));
      // Map progress 0-1 to word index 0-(COUNT-1)
      const idx = Math.min(COUNT - 1, Math.floor(p * COUNT));
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section
        id="capabilities"
        ref={sectionRef}
        data-theme="light"
        className="relative bg-white border-y border-gray-100"
        style={{ height: `${COUNT * 100}vh` }}
      >
        {/* Section badge pin — only visible at the top via absolute */}
        <div className="absolute top-8 w-full flex justify-center z-30 pointer-events-none">
          <div className="flex items-center gap-3 border border-brand-plum/10 bg-brand-plum/[0.03] backdrop-blur-md px-5 py-2 rounded-full shadow-sm">
            <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse" />
            <span className="text-brand-plum/60 tracking-[0.2em] font-black text-[10px] uppercase">
              Capabilities Engineered
            </span>
          </div>
        </div>

        {/* Sticky panel — locks to viewport for entire scroll length */}
        <div
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle grid background matching RuixenBentoCards */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #581C87 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

          {/* Main content: heading label + headline + sublabel stacked vertically */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-8 w-full max-w-5xl">

            {/* Section heading */}
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-brand-plum/20" />
              <p className="text-brand-plum/40 tracking-[0.3em] font-black text-xs uppercase">
                Systems Scope
              </p>
              <span className="w-12 h-[1px] bg-brand-plum/20" />
            </div>

            {/* Headline row: "I will [verb]" */}
            <h2 
              className="flex flex-col md:flex-row items-center md:items-baseline gap-3 md:gap-5 text-center md:text-left font-heading font-black tracking-tighter m-0 uppercase"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.2 }}
            >
              {/* Static prefix */}
              <span className="text-zinc-400 whitespace-nowrap">
                I&nbsp;will
              </span>

              {/* Animated verb */}
              <div className="relative w-full" style={{ minWidth: "min(80vw, 640px)" }}>
                {words.map((w, i) => (
                  <div
                    key={i}
                    className="transition-all duration-500 ease-in-out absolute top-0 left-0 w-full"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transform: i === activeIndex
                        ? "translateY(0)"
                        : i < activeIndex
                        ? "translateY(-40px)"
                        : "translateY(40px)",
                      pointerEvents: i === activeIndex ? "auto" : "none",
                    }}
                  >
                    <span
                      className="font-heading font-black tracking-tighter whitespace-nowrap"
                      style={{
                        fontSize: "clamp(3rem, 8vw, 6rem)",
                        lineHeight: 1.2,
                        color: i === activeIndex ? "var(--brand-orange)" : "rgba(88, 28, 135, 0.05)",
                        display: "block",
                        transition: "color 0.5s ease"
                      }}
                    >
                      {w.label}
                    </span>
                  </div>
                ))}
                {/* Invisible placeholder so the div has proper height */}
                <span
                  className="invisible font-heading font-black tracking-tighter whitespace-nowrap"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.2, display: "block" }}
                  aria-hidden
                >
                  orchestrate.
                </span>
              </div>
            </h2>

            {/* Sublabel — always below the headline, never overlapping */}
            <div className="relative w-full flex items-center justify-center" style={{ height: "3rem" }}>
              {words.map((w, i) => (
                <p
                  key={i}
                  className="absolute text-center transition-all duration-500 ease-in-out text-zinc-500 font-black tracking-[0.2em] uppercase text-[10px] md:text-xs px-4 max-w-full"
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    transform: i === activeIndex ? "translateY(0)" : "translateY(6px)",
                  }}
                >
                  {w.sublabel}
                </p>
              ))}
            </div>

          </div>


          {/* Progress indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
            {words.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === activeIndex ? "24px" : "6px",
                  height: "6px",
                  background: i === activeIndex ? "var(--brand-plum)" : "var(--brand-plum)",
                  opacity: i === activeIndex ? 1 : 0.1,
                }}
              />
            ))}
          </div>

          {/* Scroll cue (only at top) */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10 transition-opacity duration-500"
            style={{ opacity: activeIndex === 0 ? 0.6 : 0 }}
          >
            <span className="font-mono text-zinc-400 text-xs uppercase tracking-widest rotate-90 origin-center mb-6">
              scroll
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-zinc-200" />
          </div>
        </div>
      </section>

    </>
  );
}
