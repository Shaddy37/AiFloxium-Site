'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, ChevronRight } from 'lucide-react';
import Link from 'next/link';

import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/sections/Footer';
import { ClaudeSkillCard } from '@/components/ui/claude-skill-card';
import { ProjectCard } from '@/components/ui/project-card';
import { SkillDetailModal } from '@/components/ui/skill-detail-modal';
import { WorkflowsCarousel } from '@/components/ui/workflows-carousel';
import RuixenBentoCards from '@/components/ui/ruixen-bento-cards';
import { claudeSkills } from '@/lib/claude-skills-data';
import { categories, projects } from '@/lib/projects-data';
import { CALENDLY_URL } from '@/lib/site';
import { cn } from '@/lib/utils';

export default function ProjectsPageClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAllWorkflows, setShowAllWorkflows] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const query = searchQuery.toLowerCase();
      const matchesSearch =
        searchQuery === '' ||
        project.title.toLowerCase().includes(query) ||
        project.problem.toLowerCase().includes(query) ||
        project.solution.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [activeCategory, searchQuery]);

  const featuredProjects = filteredProjects.filter((project) => project.featured);
  const allWorkflows = filteredProjects.filter((project) => !project.featured);

  return (
    <main className="relative bg-[#0a0608] text-white min-h-screen selection:bg-[#7B2CBF] selection:text-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6 container mx-auto">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-white/55 uppercase tracking-widest relative z-10 font-inter">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3 w-3 text-white/30" />
          <span className="text-white font-bold font-inter">Projects</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative overflow-hidden rounded-b-[2.5rem] bg-white/[0.01] border border-white/5 px-4 py-20 text-left md:px-6 liquid-glass"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7B2CBF]/10 opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-instrument text-white tracking-tight mb-8 leading-[1.05]">
            Shipped <span className="font-instrument text-[#E0AAFF] italic">work.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl font-inter font-light text-white/70 leading-relaxed">
            Practical AI systems for startups and growing businesses: automation,
            internal software, product builds, and workflows that save real time.
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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-[#E0AAFF]" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.01] border border-white/10 rounded-full py-2.5 pl-12 pr-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#7B2CBF]/40 focus:ring-2 focus:ring-[#7B2CBF]/10 transition-all shadow-sm font-inter text-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 font-inter cursor-pointer border border-transparent',
                    activeCategory === category.id
                      ? 'bg-white text-black button-glow shadow-md'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                  )}
                >
                  {category.name}
                  <span className="ml-2 opacity-50 font-light">({category.count})</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-[1px] bg-white/10" />
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E0AAFF] font-inter">
              Proof Assets
            </h2>
            <span className="w-12 h-[1px] bg-white/10" />
          </div>

          <p className="text-white/60 mb-8 max-w-3xl font-inter font-light leading-relaxed">
            Reusable skills and system patterns that support the delivery work on this
            portfolio. These are part of how I build faster without lowering the bar.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {claudeSkills.map((skill, index) => (
              <ClaudeSkillCard key={skill.id} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-white/10" />
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#E0AAFF] font-inter">
                Featured Projects
              </h2>
              <span className="w-12 h-[1px] bg-white/10" />
            </div>
            <div className="text-[10px] text-white/40 font-semibold uppercase tracking-widest font-inter">
              {featuredProjects.length} Featured • {allWorkflows.length} Total
            </div>
          </div>

          <p className="text-white/60 mb-8 max-w-3xl font-inter font-light">
            A mix of automation systems, AI workflows, and product work that show how I
            approach real business problems.
          </p>

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

          {allWorkflows.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowAllWorkflows(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold uppercase tracking-wider text-xs hover:bg-[#E0AAFF] button-glow transition-all duration-300 cursor-pointer font-inter shadow-sm"
              >
                View All {allWorkflows.length} Projects
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ) : null}
        </motion.div>

        {/* Bottlenecks Section */}
        <div className="mb-24 mt-12 rounded-[2rem] overflow-hidden">
          <RuixenBentoCards />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center animate-fade-in"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 relative overflow-hidden group w-full max-w-4xl mx-auto liquid-glass">
            <div className="absolute inset-0 bg-[#7B2CBF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-instrument text-white tracking-tight leading-[1.05] relative z-10">
              Ready to build <br />{' '}
              <span className="font-instrument text-[#E0AAFF] italic">something useful?</span>
            </h3>
            <p className="text-white/60 max-w-md font-inter font-light leading-relaxed relative z-10">
              If you need a workflow, internal tool, or product-minded technical build,
              let&apos;s talk through the fastest credible path.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-[#E0AAFF] button-glow transition-all duration-300 font-inter"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      <WorkflowsCarousel
        workflows={allWorkflows}
        isOpen={showAllWorkflows}
        onClose={() => setShowAllWorkflows(false)}
      />

      <SkillDetailModal />
      <Footer />
    </main>
  );
}
