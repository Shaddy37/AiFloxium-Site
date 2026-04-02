"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { claudeSkills } from "@/lib/claude-skills-data";
import { ClaudeSkillCard } from "./claude-skill-card";

export function SkillDetailModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const skillSlug = searchParams.get("skill");

  const skill = claudeSkills.find((s) => s.slug === skillSlug);
  const relatedSkills = claudeSkills.filter((s) => s.slug !== skillSlug).slice(0, 3);

  const handleClose = () => {
    router.push("/projects");
  };

  return (
    <AnimatePresence>
      {skill && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal - Full height scrollable */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-screen py-12 px-4">
              <div className="max-w-4xl mx-auto bg-zinc-950 border border-white/10 shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 p-2 hover:bg-white/10 transition-colors z-50"
                >
                  <X className="w-6 h-6 text-zinc-400 hover:text-white" />
                </button>

                {/* Content */}
                <div className="p-6 sm:p-8 md:p-12">
                  {/* Category Badge */}
                  <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-zinc-800 text-zinc-300 inline-block mb-6">
                    {skill.category}
                  </span>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    {skill.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-8">
                    {skill.description}
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-white/10 mb-8" />

                  {/* Challenge & Solution */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="glass-card border border-white/10 p-6">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Challenge</h3>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {skill.challenge}
                      </p>
                    </div>

                    <div className="glass-card border border-white/10 p-6">
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Solution</h3>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {skill.solution}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="glass-card border border-white/10 p-4 sm:p-6 text-center">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 sm:mb-3">Result 1</p>
                      <p className="text-base sm:text-lg font-bold text-white">{skill.results.metric1}</p>
                    </div>
                    {skill.results.metric2 && (
                      <div className="glass-card border border-white/10 p-4 sm:p-6 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 sm:mb-3">Result 2</p>
                        <p className="text-base sm:text-lg font-bold text-white">{skill.results.metric2}</p>
                      </div>
                    )}
                    {skill.results.metric3 && (
                      <div className="glass-card border border-white/10 p-4 sm:p-6 text-center">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-2 sm:mb-3">Result 3</p>
                        <p className="text-base sm:text-lg font-bold text-white">{skill.results.metric3}</p>
                      </div>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">Built With</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/10 mb-8" />

                  {/* CTA */}
                  <Link
                    href="/#initiate"
                    onClick={handleClose}
                    className="inline-flex items-center gap-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-zinc-200 transition-colors"
                  >
                    Get This Skill
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
