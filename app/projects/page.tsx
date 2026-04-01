"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/sections/Footer";
import { ProjectCard } from "@/components/ui/project-card";
import { projects, categories } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

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
  const regularProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <main className="relative bg-background min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-6 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-black text-white tracking-tighter mb-4">
            PROJECTS
          </h1>
          <p className="text-xl text-zinc-400 font-medium max-w-2xl mx-auto">
            Building intelligent systems that work 24/7 so businesses don&apos;t have to
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-3 pl-12 pr-4 text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/20 transition-colors"
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
                      ? "bg-white text-black"
                      : "bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/5"
                  )}
                >
                  {category.name}
                  <span className="ml-2 opacity-60">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-zinc-500 text-lg">No projects found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 text-white underline underline-offset-4 hover:text-zinc-300"
            >
              Clear filters
            </button>
          </motion.div>
        ) : (
          <>
            {featuredProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-zinc-800" />
                  Featured Work
                  <span className="w-12 h-[1px] bg-zinc-800" />
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              </motion.div>
            )}

            {regularProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {featuredProjects.length > 0 && (
                  <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6 flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-zinc-800" />
                    All Projects
                    <span className="w-12 h-[1px] bg-zinc-800" />
                  </h2>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {regularProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * (index % 6) }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 rounded-[2rem] bg-zinc-900/30 border border-white/5">
            <h3 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tight">
              READY TO AUTOMATE YOUR BUSINESS?
            </h3>
            <p className="text-zinc-400 max-w-md">
              Let&apos;s build something similar to your specific needs. 
              From concept to deployment in days, not months.
            </p>
            <Link
              href="/#initiate"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors"
            >
              Let&apos;s Talk
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
