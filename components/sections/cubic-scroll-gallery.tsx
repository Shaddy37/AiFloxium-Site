"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "@/app/webflow-cube.css";
import { ErrorBoundary } from "@/components/ui/error-boundary";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ────────────────────────────────────────────────────────────────
// SLIDES
// ────────────────────────────────────────────────────────────────
const slides = [
  { id: "1", bg: "/images/2.avif", cube: "/images/2.avif", label: "SHADAB SHAMS" },
  { id: "2", bg: "/images/1.avif", cube: "/images/1.avif", label: "WORKFLOW AUTO" },
  { id: "3", bg: "/images/3.avif", cube: "/images/3.avif", label: "VOICE AI AGENTS" },
  { id: "4", bg: "/images/4.avif", cube: "/images/4.avif", label: "BESPOKE PORTALS" },
  { id: "5", bg: "/images/5.avif", cube: "/images/5.avif", label: "AUTONOMOUS OS" },
  { id: "6", bg: "/images/6.avif", cube: "/images/6.avif", label: "VIBE CODING" },
];

// ────────────────────────────────────────────────────────────────
// CUBE FACE TRANSFORMS
// Exact Webflow calc() strings — container-type:size resolves 100cqw.
// All 6 faces always show the SAME image, swapped dynamically.
// ────────────────────────────────────────────────────────────────
const FACE_TRANSFORMS: React.CSSProperties[] = [
  { transformOrigin: "0% 0%",   transform: "translateX(0%) translateY(0%) translateZ(calc(0.5 * 100cqw)) rotateX(0deg) rotateY(0deg) rotateZ(0deg)" },
  { transformOrigin: "100% 0%", transform: "translateX(-100%) translateY(0%) translateZ(calc(0.5 * 100cqw)) rotateX(0deg) rotateY(-90deg) rotateZ(0deg)" },
  { transformOrigin: "50% 50%", transform: "translateX(0%) translateY(0%) translateZ(calc(-0.5 * 100cqw)) rotateX(0deg) rotateY(180deg) rotateZ(0deg)" },
  { transformOrigin: "50% 50%", transform: "translateX(0%) translateY(50%) translateZ(0px) rotateX(-90deg) rotateY(0deg) rotateZ(180deg)" },
  { transformOrigin: "50% 50%", transform: "translateX(50%) translateY(0%) translateZ(0px) rotateX(0deg) rotateY(90deg) rotateZ(90deg)" },
  { transformOrigin: "0% 100%", transform: "translateX(0%) translateY(-100%) translateZ(calc(0.5 * 100cqw)) rotateX(90deg) rotateY(0deg) rotateZ(0deg)" },
];

// ────────────────────────────────────────────────────────────────
// RESPONSIVE WRAPPER POSITIONS
// Desktop: cube sweeps left / right for cinematic depth.
// Mobile (≤767px): cube stays near center, only mild Y movement.
// This prevents the cube from flying off the narrow viewport.
// ────────────────────────────────────────────────────────────────
function getTransitions(isMobile: boolean) {
  if (isMobile) {
    return [
      { from: 0, to: 1, cube: { rotationX: 0,   rotationY: 180 }, wrapper: { x: "0%",   y: "-8%" } },
      { from: 1, to: 2, cube: { rotationX: -90,  rotationY: 180 }, wrapper: { x: "0%",   y: "-16%" } },
      { from: 2, to: 3, cube: { rotationX: -90,  rotationY: 270 }, wrapper: { x: "0%",   y: "-24%" } },
      { from: 3, to: 4, cube: { rotationX: -90,  rotationY: 360 }, wrapper: { x: "0%",   y: "-16%" } },
      { from: 4, to: 5, cube: { rotationX: 0,   rotationY: 450 }, wrapper: { x: "0%",   y: "-8%"  } },
    ];
  }
  return [
    { from: 0, to: 1, cube: { rotationX: 0,   rotationY: 180 }, wrapper: { x: "17.5%", y: "0%"  } },
    { from: 1, to: 2, cube: { rotationX: -90,  rotationY: 180 }, wrapper: { x: "35%",   y: "0%"  } },
    { from: 2, to: 3, cube: { rotationX: -90,  rotationY: 270 }, wrapper: { x: "17.5%", y: "30%" } },
    { from: 3, to: 4, cube: { rotationX: -90,  rotationY: 360 }, wrapper: { x: "-17.5%",y: "0%"  } },
    { from: 4, to: 5, cube: { rotationX: 0,   rotationY: 450 }, wrapper: { x: "-35%",  y: "0%"  } },
  ];
}

// ── Timeline durations ──
const TRANS_DUR = 1.0;
const HOLD_DUR  = 1.5;
const STEP      = TRANS_DUR + HOLD_DUR; // 2.5 per slide

// ────────────────────────────────────────────────────────────────
// TYPES
// ────────────────────────────────────────────────────────────────
interface SlideRef {
  bg:   HTMLDivElement | null;
  text: HTMLDivElement | null;
}

// ────────────────────────────────────────────────────────────────
// COMPONENT
// ────────────────────────────────────────────────────────────────
function CubicScrollGalleryInner() {
  const sectionRef  = useRef<HTMLElement>(null);
  const cubeListRef = useRef<HTMLDivElement>(null);
  const cubeWrapRef = useRef<HTMLDivElement>(null);
  const slideRefs   = useRef<SlideRef[]>(slides.map(() => ({ bg: null, text: null })));
  const faceRefs    = useRef<(HTMLDivElement | null)[]>(Array(6).fill(null));

  useEffect(() => {
    const section = sectionRef.current;
    const cube    = cubeListRef.current;
    const wrapper = cubeWrapRef.current;
    if (!section || !cube || !wrapper) return;

    const refs = slideRefs.current;

    // ── Detect mobile ─────────────────────────────────────────────
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const TRANSITIONS = getTransitions(isMobile);

    // ── Initial state ─────────────────────────────────────────────
    gsap.set(cube, { rotationX: 0, rotationY: 0 });

    // Desktop starts at left (-35%); mobile starts centered (0%)
    const initX = isMobile ? "0%" : "-35%";
    gsap.set(wrapper, { x: initX, y: "0%" });

    // All 6 cube faces start with slide[0]'s image
    faceRefs.current.forEach(face => {
      if (face) face.style.backgroundImage = `url('${slides[0].cube}')`;
    });

    // Backgrounds — only slide 0 visible
    refs.forEach(({ bg }, i) => {
      if (bg) gsap.set(bg, { autoAlpha: i === 0 ? 1 : 0 });
    });

    // Texts — slide 0 words at rest, others hidden below
    refs.forEach(({ text }, i) => {
      if (!text) return;
      const words = text.querySelectorAll<HTMLElement>(".split-word");
      gsap.set(text,  { autoAlpha: i === 0 ? 1 : 0 });
      gsap.set(words, { y: i === 0 ? "0%" : "105%" });
    });

    // ── Cube face image tracker ───────────────────────────────────
    let cubeSlideIndex = 0;

    // ── ScrollTrigger timeline ────────────────────────────────────
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end:   "bottom bottom",
        scrub: isMobile ? 1.5 : 2,   // slightly snappier on mobile
        invalidateOnRefresh: true,
        onUpdate: () => {
          const t = tl.time();
          let targetSlide = 0;
          for (let i = 0; i < TRANSITIONS.length; i++) {
            if (t >= i * STEP + TRANS_DUR * 0.9) targetSlide = i + 1;
          }
          if (targetSlide !== cubeSlideIndex) {
            cubeSlideIndex = targetSlide;
            faceRefs.current.forEach(face => {
              if (face) {
                face.style.backgroundImage = `url('${slides[targetSlide].cube}')`;
              }
            });
          }
        },
      },
    });

    // ── Build transitions ─────────────────────────────────────────
    TRANSITIONS.forEach((tr, i) => {
      const at      = i * STEP;
      const fromRef = refs[tr.from];
      const toRef   = refs[tr.to];

      // 1. Cube rotation
      tl.to(cube, { ...tr.cube, ease: "power1.inOut", duration: TRANS_DUR }, at);

      // 2. Wrapper position
      tl.to(wrapper, { ...tr.wrapper, ease: "power1.inOut", duration: TRANS_DUR }, at);

      // 3. Background crossfade (centered on transition)
      if (fromRef.bg) {
        tl.to(fromRef.bg, { autoAlpha: 0, ease: "none", duration: TRANS_DUR * 0.6 }, at + TRANS_DUR * 0.2);
      }
      if (toRef.bg) {
        tl.to(toRef.bg, { autoAlpha: 1, ease: "none", duration: TRANS_DUR * 0.6 }, at + TRANS_DUR * 0.2);
      }

      // 4. Outgoing text — words cascade DOWN
      if (fromRef.text) {
        const fromWords = fromRef.text.querySelectorAll<HTMLElement>(".split-word");
        tl.to(fromWords, {
          y: "105%",
          ease: "power2.in",
          stagger: { each: 0.05, from: "end" },
          duration: TRANS_DUR * 0.5,
        }, at);
        tl.to(fromRef.text, { autoAlpha: 0, duration: 0.01 }, at + TRANS_DUR * 0.5);
      }

      // 5. Incoming text — words rise UP after cube settles
      const textInAt = at + TRANS_DUR + 0.1;
      if (toRef.text) {
        const toWords = toRef.text.querySelectorAll<HTMLElement>(".split-word");
        tl.set(toRef.text, { autoAlpha: 1 }, textInAt);
        tl.fromTo(
          toWords,
          { y: "105%" },
          {
            y: "0%",
            ease: "power3.out",
            stagger: { each: 0.12, from: "start" },
            duration: HOLD_DUR * 0.55,
          },
          textInAt
        );
      }
    });

    // ── Scroll hint fades out after first interaction ─────────────
    const hint = section.querySelector<HTMLElement>(".scroll-hint");
    if (hint) {
      ScrollTrigger.create({
        trigger: section,
        start: "top+=5% top",
        onEnter: () => gsap.to(hint, { autoAlpha: 0, duration: 0.6 }),
        onLeaveBack: () => gsap.to(hint, { autoAlpha: 1, duration: 0.6 }),
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, []);

  // ── Word-mask renderer ────────────────────────────────────────
  const renderWords = (label: string) => {
    const words = label.split(" ");
    return words.map((word, i) => (
      <React.Fragment key={i}>
        <span className="split-word-mask">
          <span className="split-word">{word}</span>
        </span>
        {i < words.length - 1 && " "}
      </React.Fragment>
    ));
  };

  // ────────────────────────────────────────────────────────────
  // RENDER
  // ────────────────────────────────────────────────────────────
  return (
    <div className="cube-gallery-wrapper w-full">
      <section ref={sectionRef} data-animate="section" className="section">
        <div className="main-container w-layout-blockcontainer w-container">
          <div className="section_content-wrapper">

            {/* ── BACKGROUND IMAGES ── */}
            <div className="pictures_list-wrapper w-dyn-list">
              <div role="list" className="pictures_list w-dyn-items">
                {slides.map((slide, i) => (
                  <div
                    key={slide.id}
                    ref={(el) => { slideRefs.current[i].bg = el; }}
                    data-background-image={slide.id}
                    role="listitem"
                    className="pictures_list-item w-dyn-item"
                  >
                    <Image
                      src={slide.bg}
                      alt={slide.label}
                      fill
                      priority={i === 0}
                      sizes="(max-width: 767px) 100vw, 100vw"
                      className="pictures_image"
                    />
                    <div className="pictures_overlay" />

                    {/* Slide text label */}
                    <div
                      ref={(el) => { slideRefs.current[i].text = el; }}
                      data-image-text={slide.id}
                      className="pictures_text"
                    >
                      {renderWords(slide.label)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 3D CUBE ── */}
            <div
              ref={cubeWrapRef}
              data-animate="cube-list-wrapper"
              className="pictures_cube-list-wrapper w-dyn-list"
            >
              <div
                ref={cubeListRef}
                data-animate="cube-list"
                role="list"
                className="pictures_cube-list w-dyn-items"
              >
                {FACE_TRANSFORMS.map((faceStyle, i) => (
                  <div
                    key={i}
                    role="listitem"
                    className="pictures_cube-item w-dyn-item"
                    style={faceStyle}
                  >
                    <div
                      ref={(el) => { faceRefs.current[i] = el; }}
                      className="pictures_cube-face-bg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ── SCROLL HINT (mobile only, fades on first scroll) ── */}
            <div className="scroll-hint" aria-hidden="true">
              <div className="scroll-hint-line" />
              <span className="scroll-hint-label">Scroll</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default function CubicScrollGallery() {
  return (
    <ErrorBoundary>
      <CubicScrollGalleryInner />
    </ErrorBoundary>
  );
}
