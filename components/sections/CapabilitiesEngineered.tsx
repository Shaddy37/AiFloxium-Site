"use client";

import { useRef, useEffect, useState } from "react";

/**
 * CapabilitiesEngineered
 *
 * Sticky-scroll section: "we can [verb]." where a new verb appears at the
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
  { label: "automate.",    sublabel: "End-to-end n8n pipelines running 24/7." },
  { label: "orchestrate.", sublabel: "Multi-agent Claude workflows at scale." },
  { label: "build.",       sublabel: "Internal tools & micro-SaaS via Claude Code." },
  { label: "deploy.",      sublabel: "Production-ready systems shipped fast." },
  { label: "integrate.",   sublabel: "APIs, webhooks & third-party ecosystems." },
  { label: "optimize.",    sublabel: "Continuous auditing & performance tuning." },
  { label: "ship.",        sublabel: "From spec to live — on time, every time." },
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
      {/* Inject keyframe CSS once */}
      <style>{`
        .cap-word {
          font-family: var(--font-heading, 'Geist', sans-serif);
          font-weight: 900;
          letter-spacing: -0.04em;
          /* Fixed gradient: white band at viewport 50vh */
          background: linear-gradient(
            180deg,
            rgba(63, 63, 70, 0.35) 0 calc(50vh - 0.6lh),
            #ffffff              calc(50vh - 0.65lh) calc(50vh + 0.65lh),
            rgba(63, 63, 70, 0.35) calc(50vh + 0.6lh)
          );
          background-attachment: fixed;
          color: transparent;
          background-clip: text;
          -webkit-background-clip: text;
          transition: opacity 0.3s ease;
          line-height: 1.2;
          display: block;
          font-size: clamp(3rem, 8vw, 6rem);
          /* non-active words are dimmer */
          opacity: 0.3;
        }
        .cap-word.active {
          opacity: 1;
        }
      `}</style>

      <section
        id="capabilities"
        ref={sectionRef}
        className="relative bg-background"
        style={{ height: `${COUNT * 100}vh` }}
      >
        {/* Section badge pin — only visible at the top via absolute */}
        <div className="absolute top-8 w-full flex justify-center z-30 pointer-events-none">
          <div className="flex items-center gap-3 border border-white/10 bg-zinc-950/80 backdrop-blur-sm px-5 py-2 rounded-full">
            <div className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
            <span className="text-zinc-400 tracking-[0.2em] font-medium text-xs uppercase">
              Capabilities Engineered
            </span>
          </div>
        </div>

        {/* Sticky panel — locks to viewport for entire scroll length */}
        <div
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px 45px),
                linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px 45px)
              `,
              backgroundSize: "45px 45px",
              backgroundPosition: "16px 14px",
              maskImage: "linear-gradient(-20deg, transparent 50%, white)",
            }}
          />

          {/* Main content: heading label + headline + sublabel stacked vertically */}
          <div className="relative z-10 flex flex-col items-center gap-8 px-8 w-full max-w-5xl">

            {/* Section heading */}
            <div className="flex items-center gap-4">
              <span className="w-8 h-[1px] bg-zinc-700" />
              <p className="text-zinc-500 tracking-[0.2em] font-medium text-xs uppercase">
                What we do
              </p>
              <span className="w-8 h-[1px] bg-zinc-700" />
            </div>

            {/* Headline row: "we can [verb]" */}
            <h2 
              className="flex flex-col md:flex-row items-center md:items-baseline gap-3 md:gap-5 text-center md:text-left font-heading font-black tracking-tighter m-0"
              style={{ fontSize: "clamp(3rem, 8vw, 6rem)", lineHeight: 1.2 }}
            >
              {/* Static prefix */}
              <span className="text-zinc-500 whitespace-nowrap">
                we&nbsp;can
              </span>

              {/* Animated verb */}
              <div className="relative" style={{ minWidth: "min(60vw, 640px)" }}>
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
                        color: "#ffffff",
                        display: "block",
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
            <div className="relative w-full flex items-center justify-center" style={{ height: "2rem" }}>
              {words.map((w, i) => (
                <p
                  key={i}
                  className="absolute whitespace-nowrap text-center transition-all duration-500 ease-in-out text-zinc-500 font-medium tracking-widest uppercase text-sm"
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
                  background: i === activeIndex ? "white" : "rgba(82,82,91,0.5)",
                }}
              />
            ))}
          </div>

          {/* Scroll cue (only at top) */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10 transition-opacity duration-500"
            style={{ opacity: activeIndex === 0 ? 0.6 : 0 }}
          >
            <span className="font-mono text-zinc-600 text-xs uppercase tracking-widest rotate-90 origin-center mb-6">
              scroll
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-zinc-700" />
          </div>
        </div>
      </section>

    </>
  );
}
