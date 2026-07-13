"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ClaudeSkill } from "@/lib/claude-skills-data";
import { cn } from "@/lib/utils";

interface ClaudeSkillCardProps {
  skill: ClaudeSkill;
  index?: number;
}

export function ClaudeSkillCard({ skill, index = 0 }: ClaudeSkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
    >
      <Link href={`/projects?skill=${skill.slug}`}>
        <motion.div
          whileHover={{ y: -2 }}
          className={cn(
            "group relative overflow-hidden p-6 h-full min-h-[320px] rounded-3xl",
            "border border-white/5 bg-white/[0.01] cursor-pointer transition-all duration-300 hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 liquid-glass"
          )}
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,rgba(123,44,191,0.08)_0%,transparent_70%)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="mb-4">
              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-md bg-[#7B2CBF]/10 text-[#E0AAFF] inline-block mb-3 border border-[#7B2CBF]/20 font-inter">
                {skill.category}
              </span>
              <h3 className="text-lg font-semibold text-white group-hover:text-[#E0AAFF] transition-colors font-inter tracking-wide">
                {skill.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white/60 text-sm leading-relaxed mb-4 flex-grow line-clamp-3 font-inter font-light">
              {skill.description}
            </p>

            {/* Results Preview */}
            <div className="space-y-2 mb-4 pb-4 border-b border-white/10">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-white/40 font-inter">Key Results</p>
              <ul className="space-y-1">
                <li className="text-xs text-white/70 flex items-start gap-2 font-inter font-light">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E0AAFF] mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{skill.results.metric1}</span>
                </li>
                {skill.results.metric2 && (
                  <li className="text-xs text-white/70 flex items-start gap-2 font-inter font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E0AAFF] mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{skill.results.metric2}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-4 font-inter">
              <p className="text-[9px] font-semibold uppercase tracking-wider text-white/40 mb-2">Built with</p>
              <div className="flex flex-wrap gap-1">
                {skill.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-wider bg-white/[0.02] text-white/50 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
                {skill.techStack.length > 3 && (
                  <span className="px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white/40">
                    +{skill.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-[10px] font-semibold text-[#E0AAFF] group-hover:text-white transition-colors uppercase tracking-widest font-inter">
              View Case Study
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
