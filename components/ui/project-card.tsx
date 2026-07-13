"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const categoryColors: Record<string, string> = {
  business: "bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 text-[#E0AAFF]",
  seo: "bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 text-[#E0AAFF]",
  social: "bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 text-[#E0AAFF]",
  "ai-agents": "bg-[#7B2CBF]/10 border border-[#7B2CBF]/20 text-[#E0AAFF]",
};

const categoryLabels: Record<string, string> = {
  business: "Business Automation",
  seo: "SEO",
  social: "Social Media",
  "ai-agents": "AI Agents",
};

export function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/[0.01] border border-white/5 rounded-2xl p-6 cursor-pointer group hover:border-[#7B2CBF]/30 hover:bg-[#7B2CBF]/5 transition-all duration-300 liquid-glass"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span
              className={cn(
                "text-[9px] font-semibold uppercase tracking-[0.2em] px-2.5 py-1 rounded-md w-max font-inter",
                categoryColors[project.category]
              )}
            >
              {categoryLabels[project.category]}
            </span>
            <h3 className="text-xl font-semibold text-white group-hover:text-[#E0AAFF] transition-colors font-inter tracking-wide">
              {project.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[#E0AAFF] group-hover:text-white transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        <p className="text-white/60 text-sm font-inter font-light leading-relaxed line-clamp-2">
          {project.problem}
        </p>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4 pt-2"
            >
              <div className="h-[1px] bg-white/10" />

              <div>
                <h4 className="text-[10px] font-semibold uppercase tracking-wider text-[#E0AAFF] mb-2 font-inter">
                  Solution
                </h4>
                <p className="text-white/70 text-sm font-inter font-light leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded-md bg-white/[0.02] text-white/50 border border-white/5 font-inter"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 p-3 bg-white/[0.01] border border-white/5 rounded-xl liquid-glass">
                <CheckCircle2 className="w-4.5 h-4.5 text-[#E0AAFF] flex-shrink-0" />
                <span className="text-xs font-inter font-light text-white/70">
                  {project.result}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#E0AAFF] group-hover:text-white transition-colors font-inter">
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-[#E0AAFF] group-hover:text-white transition-colors pt-2 font-inter">
            <span>Tap to expand</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
