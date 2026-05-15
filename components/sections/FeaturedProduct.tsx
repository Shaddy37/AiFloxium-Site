"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { APEPUBLISH_URL } from "@/lib/site";

const highlights = [
  "Built as a live SaaS product, not just a concept",
  "Clear positioning around AI content repurposing",
  "Proof that I can design, build, ship, and market software"
];

export default function FeaturedProduct() {
  return (
    <section className="py-24 md:py-32 px-6 bg-brand-bg border-y border-brand-plum/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8"
        >
          <div className="border border-brand-plum/20 bg-brand-plum/5 rounded-[2rem] p-10 md:p-12">
            <p className="text-brand-orange text-xs font-black uppercase tracking-[0.3em] mb-6">
              Featured product
            </p>
            <h2 className="text-4xl md:text-6xl font-heading font-black text-white tracking-tighter leading-[0.9] mb-6">
              APEPUBLISH
              <br />
              <span className="text-brush text-3xl md:text-5xl">SHIPPED.</span>
            </h2>
            <p className="text-zinc-300 text-lg leading-relaxed max-w-2xl mb-8">
              ApePublish is a live SaaS product I recently built. It turns long-form
              content into ready-to-publish social content, which gives this portfolio
              real product proof, not just service claims.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={APEPUBLISH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-orange/90 transition-all"
              >
                Visit ApePublish
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-3 border border-brand-plum/30 bg-brand-bg/60 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-plum/10 transition-all"
              >
                See more proof
              </Link>
            </div>
          </div>

          <div className="border border-brand-plum/20 bg-brand-bg rounded-[2rem] p-10 md:p-12">
            <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-6">
              Why it matters here
            </p>
            <div className="space-y-5 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-zinc-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="border border-brand-plum/20 bg-brand-plum/5 rounded-2xl p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-3">
                My role
              </p>
              <p className="text-zinc-300 leading-relaxed">
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
