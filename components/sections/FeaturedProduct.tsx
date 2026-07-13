"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { APEPUBLISH_URL } from "@/lib/site";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const highlights = [
  "Built as a live SaaS product, not just a concept",
  "Clear positioning around AI content repurposing",
  "Proof that I can design, build, ship, and market software"
];

export default function FeaturedProduct() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6 bg-[#0a0608] border-y border-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8"
          transition={prefersReduced ? { duration: 0.01 } : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Left panel */}
          <div className="border border-white/5 bg-[#0a0608] text-white/[0.01] rounded-[2.5rem] p-10 md:p-12 liquid-glass">
            <span className="text-[#E0AAFF] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-6 block font-inter">
              Featured product
            </span>
            <h2 className="text-4xl md:text-6xl font-instrument text-white tracking-tight leading-[1.05] mb-6">
              ApePublish <br />
              <span className="font-instrument text-[#E0AAFF] italic">shipped.</span>
            </h2>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl mb-8 font-inter font-light">
              ApePublish is a live SaaS product I recently built. It turns long-form
              content into ready-to-publish social content, which gives this portfolio
              real product proof, not just service claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={APEPUBLISH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs transition-all duration-300 hover:bg-[#E0AAFF] button-glow font-inter"
              >
                Visit ApePublish
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 border border-white/20 bg-transparent text-white px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs transition-colors duration-200 hover:bg-[#0a0608] text-white/5 font-inter"
              >
                See more proof
              </Link>
            </div>
          </div>

          {/* Right panel */}
          <div className="border border-white/5 bg-[#0a0608] text-white/[0.01] rounded-[2.5rem] p-10 md:p-12 liquid-glass">
            <span className="text-white/50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] mb-6 block font-inter">
              Why it matters here
            </span>
            <div className="space-y-5 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4.5 h-4.5 text-[#E0AAFF] shrink-0 mt-1" />
                  <p className="text-white/70 leading-relaxed font-inter font-light text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
            <div className="border border-white/10 bg-[#0a0608] text-white/[0.01] rounded-2xl p-6 liquid-glass">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E0AAFF] mb-3 block font-inter">
                My role
              </span>
              <p className="text-white/60 leading-relaxed font-inter font-light text-sm">
                Positioning, landing page strategy, product UI, application build,
                metadata, and launch execution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
