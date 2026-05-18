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
            "group relative overflow-hidden p-6 h-full min-h-[320px]",
            "glass-card border border-brand-plum/20 cursor-pointer",
            "hover:border-brand-plum/40 transition-all duration-500"
          )}
        >
          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(circle_at_50%_0%,var(--brand-plum)_0%,transparent_70%)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-md bg-brand-plum/10 text-brand-plum inline-block mb-3 border border-brand-plum/20">
                {skill.category}
              </span>
              <h3 className="text-lg font-bold text-brand-orange group-hover:text-brand-orange transition-colors font-heading tracking-tight">
                {skill.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-white text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
              {skill.description}
            </p>

            {/* Results Preview */}
            <div className="space-y-2 mb-4 pb-4 border-b border-brand-plum/10">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white">Key Results</p>
              <ul className="space-y-1">
                <li className="text-sm text-white flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-1">{skill.results.metric1}</span>
                </li>
                {skill.results.metric2 && (
                  <li className="text-sm text-white flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange mt-0.5 flex-shrink-0" />
                    <span className="line-clamp-1">{skill.results.metric2}</span>
                  </li>
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">Built with</p>
              <div className="flex flex-wrap gap-1">
                {skill.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-brand-plum/10 text-white border border-brand-plum/20"
                  >
                    {tech}
                  </span>
                ))}
                {skill.techStack.length > 3 && (
                  <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white">
                    +{skill.techStack.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-xs font-bold text-brand-plum group-hover:text-brand-orange transition-colors uppercase tracking-widest">
              View Case Study
              <ArrowRight className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
