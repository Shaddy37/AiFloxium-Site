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
    <main className="relative bg-white min-h-screen">
      <Navbar />
      <div className="pt-32 pb-20 px-6 container mx-auto">
        <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest relative z-10">
          <Link href="/" className="transition-colors hover:text-brand-orange">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-zinc-300" />
          <span className="text-zinc-800 font-black">Projects</span>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 relative overflow-hidden rounded-b-[3rem] bg-hero-gradient px-4 py-20 text-left md:px-6"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-plum-glow opacity-60 blur-[150px] rounded-full pointer-events-none -z-10" />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-heading font-black text-white tracking-[-0.035em] mb-8 leading-[0.95]">
            Shipped <span className="text-brush text-3xl md:text-6xl lg:text-8xl ml-4 text-brand-orange">work</span>.
          </h1>
          <p className="max-w-2xl text-xl font-medium text-white md:text-2xl">
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
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-plum" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-zinc-200 rounded-full py-3 pl-12 pr-4 text-zinc-900 placeholder:text-zinc-500 focus:outline-none focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/20 transition-all shadow-sm"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all',
                    activeCategory === category.id
                      ? 'bg-brand-orange text-white shadow-md'
                      : 'bg-zinc-100 text-zinc-600 hover:text-brand-plum hover:bg-zinc-200 border border-transparent'
                  )}
                >
                  {category.name}
                  <span className="ml-2 opacity-60">({category.count})</span>
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
            <span className="w-12 h-[1px] bg-brand-plum/30" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
              Proof Assets
            </h2>
            <span className="w-12 h-[1px] bg-brand-plum/30" />
          </div>

          <p className="text-zinc-600 mb-8 max-w-3xl font-medium leading-relaxed">
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
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <span className="w-12 h-[1px] bg-brand-plum/30" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-orange">
                Featured Projects
              </h2>
              <span className="w-12 h-[1px] bg-brand-plum/30" />
            </div>
            <div className="text-xs text-brand-plum font-black uppercase tracking-widest">
              {featuredProjects.length} Featured • {allWorkflows.length} Total
            </div>
          </div>

          <p className="text-zinc-600 mb-8 max-w-3xl">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAllWorkflows(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-zinc-200 text-brand-plum font-bold uppercase tracking-widest text-sm hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-sm"
              >
                View All {allWorkflows.length} Projects
                <ArrowRight className="w-4 h-4 text-brand-orange" />
              </motion.button>
            </motion.div>
          ) : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 rounded-[3rem] bg-zinc-50 border border-zinc-200 relative overflow-hidden group w-full max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <h3 className="text-3xl md:text-5xl font-heading font-black text-brand-plum tracking-[-0.035em] leading-[0.95] relative z-10">
              Ready to build <br />{' '}
              <span className="text-brand-orange text-2xl md:text-4xl mt-2">something useful?</span>
            </h3>
            <p className="text-zinc-600 max-w-md font-medium leading-relaxed relative z-10">
              If you need a workflow, internal tool, or product-minded technical build,
              let&apos;s talk through the fastest credible path.
            </p>
            <Link
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-orange/90 transition-all shadow-[0_0_30px_rgba(255,107,0,0.3)]"
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
