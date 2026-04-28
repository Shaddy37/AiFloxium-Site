"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { ProjectCard } from "@/components/ui/project-card";
import { ClaudeSkillCard } from "@/components/ui/claude-skill-card";
import { WorkflowsCarousel } from "@/components/ui/workflows-carousel";
import { SkillDetailModal } from "@/components/ui/skill-detail-modal";
import { projects, categories } from "@/lib/projects-data";
import { claudeSkills } from "@/lib/claude-skills-data";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllWorkflows, setShowAllWorkflows] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        activeCategory === "all" || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const allWorkflows = projects.filter((p) => !p.featured);

  return (
    <main className="relative bg-brand-bg min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative overflow-hidden bg-hero-gradient py-20 rounded-[3rem]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum-glow opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-heading font-black text-white tracking-tighter mb-4 uppercase leading-[0.8]">
            PROJECT <span className="text-brush text-4xl md:text-7xl lg:text-9xl ml-4">SHOWCASE.</span>
          </h1>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto">
            Building intelligent systems that work 24/7 so businesses don&apos;t have to
          </p>
        </motion.div>

        {/* Search & Filter - Hidden for Skills showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-plum" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-plum/5 border border-brand-plum/20 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-brand-orange/40 focus:bg-brand-plum/10 transition-all"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all",
                    activeCategory === category.id
                      ? "bg-brand-orange text-white shadow-[0_0_20px_rgba(255,107,0,0.3)]"
                      : "bg-brand-plum/10 text-zinc-400 hover:text-white hover:bg-brand-plum/20 border border-brand-plum/20"
                  )}
                >
                  {category.name}
                  <span className="ml-2 opacity-60">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CLAUDE CODE SKILLS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-brand-plum/30" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
              Claude Code Skills
            </h2>
            <span className="w-12 h-[1px] bg-brand-plum/30" />
          </div>

          <p className="text-zinc-400 mb-8 max-w-3xl font-medium leading-relaxed">
            Specialized AI skills built with Claude that automate content creation, lead generation, and business workflows.
            Each skill is a ready-to-use solution that can be deployed immediately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {claudeSkills.map((skill, index) => (
              <ClaudeSkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* N8N AUTOMATIONS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-brand-plum/30" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
                n8n Workflow Automations
              </h2>
              <span className="w-12 h-[1px] bg-brand-plum/30" />
            </div>
            <div className="text-xs text-brand-plum font-black uppercase tracking-widest">
              {featuredProjects.length} Featured • {allWorkflows.length} Total
            </div>
          </div>

          <p className="text-zinc-400 mb-8 max-w-3xl">
            Custom n8n workflows that connect your tools, automate repetitive tasks, and integrate AI into your business processes.
            From invoice processing to AI agents, these automations save teams 10-50+ hours weekly.
          </p>

          {/* Featured Workflows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          {allWorkflows.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllWorkflows(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-plum/10 border border-brand-plum/30 text-white font-bold uppercase tracking-widest text-sm hover:bg-brand-plum/20 hover:border-brand-plum/50 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]"
              >
                View All {allWorkflows.length} Workflows
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </motion.button>
            </motion.div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 rounded-[3rem] bg-brand-plum/5 border border-brand-plum/10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-brand-plum/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-heading font-black text-white tracking-tight uppercase leading-tight">
              READY TO BUILD <br /> <span className="text-brush text-2xl md:text-4xl mt-2">SOMETHING LIKE THIS?</span>
            </h3>
            <p className="text-zinc-400 max-w-md font-medium leading-relaxed">
              Let&apos;s combine Claude Code skills with n8n workflows to automate your business.
              From concept to deployment in days.
            </p>
            <Link
              href="/#initiate"
              className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-orange/90 transition-all shadow-[0_0_30px_rgba(255,107,0,0.3)]"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Workflows Carousel Modal */}
      <WorkflowsCarousel
        workflows={allWorkflows}
        isOpen={showAllWorkflows}
        onClose={() => setShowAllWorkflows(false)}
      />

      {/* Skill Detail Modal */}
      <SkillDetailModal />

      <Footer />
    </main>
  );
}
