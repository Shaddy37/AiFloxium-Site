"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { LazyVideo } from "@/components/ui/lazy-video";
import { motion } from "framer-motion";
import gsap from "gsap";

interface ProjectItem {
  title: string;
  description: string;
  color: string;
  src: string;
}

const projects: ProjectItem[] = [
  {
    title: "Speed-to-Lead Automation",
    description:
      "Inbound leads go cold in minutes. We build automated outreach systems that qualify, follow up, and book prospects in under 90 seconds, securing pipeline 24/7.",
    color: "#581C87",
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "AI Document Extraction",
    description:
      "Manually processing invoices and PDFs is slow and error-prone. We deploy AI-powered reasoning layers that extract metadata and update QuickBooks or your CRM automatically with zero manual entry.",
    color: "#27272a",
    src: "https://images.unsplash.com/photo-1568027762-724e068f43ba?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Social Content Syndication",
    description:
      "Writing and scheduling social content is a full-time job. We engineer autonomous agents that repurpose long-form assets for LinkedIn and X—driven by our product ApePublish.",
    color: "#FF6B00",
    src: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Custom Scaling & Integrations",
    description:
      "Stuck between disconnected databases and legacy tools? We deploy custom Agentic OS layers, sync relational databases, and act as your B2B agency's white-label AI engineering partner to scale capacity.",
    color: "#3b0764",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600",
  },
];

const scaleAnimation = {
  closed: {
    scale: 0,
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] as const },
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] as const },
    x: "-50%",
    y: "-50%",
  },
  initial: { scale: 0, x: "-50%", y: "-50%" },
};

export default function RuixenBentoCards() {
  const prefersReduced = useReducedMotion();
  const [modal, setModal] = useState({ active: false, index: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="bottlenecks"
      ref={sectionRef}
      data-theme="dark"
      className="relative min-h-screen bg-black overflow-hidden py-32 px-6 sm:px-8 md:px-16 lg:px-20 flex flex-col justify-center"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LazyVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260520_111942_8fc50f9e-4dfd-45c1-81bb-d93342a23d87.mp4"
          className="object-cover w-full h-full opacity-60"
        />
        {/* Dark brand-gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#130716]/80 via-[#0a030d]/75 to-black z-[1]" />

        {/* Violet radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-brand-plum/15 blur-[130px] pointer-events-none z-[1]" />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Narrative Header */}
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={prefersReduced ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="w-12 h-[1px] bg-brand-orange" />
            <h2 className="text-brand-orange tracking-[0.3em] font-black text-xs uppercase">
              What We Solve
            </h2>
          </motion.div>

          <motion.h3
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-heading font-black text-white tracking-[-0.035em] leading-[0.95] mb-6"
          >
            Bottlenecks
            <br />
            <span className="relative inline-block mt-2">
              <span className="text-brand-orange">we eliminate</span>.
              <motion.span
                initial={prefersReduced ? { width: "100%" } : { width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={prefersReduced ? { duration: 0.01 } : { duration: 1, delay: 0.5 }}
                className="absolute -bottom-2 left-0 h-1 bg-brand-orange/50 rounded-full"
              />
            </span>
          </motion.h3>

          <motion.p
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={prefersReduced ? { duration: 0.01 } : { delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 font-sans font-light leading-relaxed max-w-2xl"
          >
            We systematically replace human friction, slow response times, and manual bookkeeping with high-performing agentic operating systems and autonomous reasoning layers.
          </motion.p>
        </div>

        {/* Project List */}
        <div className="flex w-full flex-col items-center justify-center border-b border-white/10">
          {projects.map((project, index) => (
            <Project
              index={index}
              key={project.title}
              setModal={setModal}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        {/* GSAP Hover-Following Modal Container */}
        {!prefersReduced && (
          <Modal modal={modal} projects={projects} containerRef={sectionRef} />
        )}
      </div>
    </section>
  );
}

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  setModal: React.Dispatch<React.SetStateAction<{ active: boolean; index: number }>>;
}

function Project({ index, title, description, setModal }: ProjectProps) {
  return (
    <Link
      href="/services"
      className="group flex flex-col md:flex-row w-full cursor-pointer items-start md:items-center justify-between border-t border-white/10 py-8 md:py-12 transition-all duration-300 hover:opacity-50 relative z-10"
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
    >
      <div className="flex flex-row items-center gap-4 md:gap-8 transition-transform duration-300 group-hover:translate-x-2.5">
        <span className="text-sm font-mono text-brand-orange font-bold">0{index + 1}</span>
        <h3 className="m-0 font-heading font-black text-2xl md:text-4xl text-white group-hover:text-brand-orange transition-colors">
          {title}
        </h3>
      </div>
      
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 mt-4 md:mt-0 transition-transform duration-300 group-hover:translate-x-2.5">
        <p className="text-zinc-400 text-sm md:text-base max-w-md font-light leading-relaxed">
          {description}
        </p>
        <span className="text-brand-orange shrink-0 hidden md:inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          See details <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}

interface ModalProps {
  modal: { active: boolean; index: number };
  projects: ProjectItem[];
  containerRef: React.RefObject<HTMLDivElement | null>;
}

function Modal({ modal, projects, containerRef }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!modalContainer.current || !cursor.current || !cursorLabel.current || !containerRef.current) return;

    // Move Container relative to parent section
    const xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    
    // Move cursor relative to parent section
    const xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    
    // Move cursor label relative to parent section
    const xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      xMoveContainer(x);
      yMoveContainer(y);
      xMoveCursor(x);
      yMoveCursor(y);
      xMoveCursorLabel(x);
      yMoveCursorLabel(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [containerRef]);

  return (
    <>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute flex h-[280px] w-[350px] items-center justify-center overflow-hidden bg-zinc-950/80 rounded-2xl border border-white/10 shadow-2xl z-30"
        initial="initial"
        ref={modalContainer}
        variants={scaleAnimation}
      >
        <div
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ top: `${index * -100}%` }}
        >
          {projects.map((project) => (
            <div
              className="flex h-full w-full items-center justify-center relative overflow-hidden"
              key={project.title}
              style={{ backgroundColor: project.color }}
            >
              <Image
                alt={project.title}
                fill
                className="object-cover opacity-80"
                src={project.src}
                sizes="350px"
              />
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute z-40 flex h-16 w-16 items-center justify-center rounded-full bg-brand-orange font-bold text-xs uppercase tracking-widest text-white shadow-lg"
        initial="initial"
        ref={cursor}
        variants={scaleAnimation}
      />
      <motion.div
        animate={active ? "enter" : "closed"}
        className="pointer-events-none absolute z-40 flex h-16 w-16 items-center justify-center rounded-full bg-transparent font-bold text-xs uppercase tracking-widest text-white"
        initial="initial"
        ref={cursorLabel}
        variants={scaleAnimation}
      >
        View
      </motion.div>
    </>
  );
}
