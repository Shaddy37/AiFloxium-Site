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
  business: "bg-zinc-800 text-zinc-300",
  seo: "bg-zinc-800 text-zinc-300",
  social: "bg-zinc-800 text-zinc-300",
  "ai-agents": "bg-zinc-800 text-zinc-300",
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
      className="glass-card border border-white/10 p-6 cursor-pointer group"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span
              className={cn(
                "text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md w-max",
                categoryColors[project.category]
              )}
            >
              {categoryLabels[project.category]}
            </span>
            <h3 className="text-xl font-bold text-white group-hover:text-zinc-300 transition-colors">
              {project.title}
            </h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-zinc-500"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>

        <p className="text-zinc-400 text-sm font-medium leading-relaxed line-clamp-2">
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
              <div className="h-[1px] bg-white/5" />

              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                  Solution
                </h4>
                <p className="text-zinc-300 text-sm font-medium leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 p-3 bg-white/5 border border-white/5">
                <CheckCircle2 className="w-4 h-4 text-zinc-400 flex-shrink-0" />
                <span className="text-sm font-medium text-zinc-300">
                  {project.result}
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                <span>View Details</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors pt-2">
            <span>Tap to expand</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
