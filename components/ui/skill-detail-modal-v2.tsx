"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { claudeSkills } from "@/lib/claude-skills-data";

export function SkillDetailModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const skillSlug = searchParams.get("skill");

  const skill = claudeSkills.find((s) => s.slug === skillSlug);

  const handleClose = () => {
    router.push("/projects");
  };

  const handleBack = () => {
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
            <div className="min-h-screen py-8 px-4 sm:py-12">
              <div className="max-w-5xl mx-auto">
                {/* Header with Back Button */}
                <div className="flex items-center justify-between mb-12">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleBack}
                    className="flex items-center gap-2 px-4 py-2 rounded-md bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-wider">Back</span>
                  </motion.button>

                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6 text-zinc-400 hover:text-white" />
                  </button>
                </div>

                {/* Main Content Card */}
                <div className="bg-zinc-950 border border-white/10 shadow-2xl">
                  <div className="p-6 sm:p-8 md:p-12 space-y-12">
                    {/* Hero Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-6"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-zinc-800 text-zinc-300">
                            {skill.category}
                          </span>
                          {skill.industry && (
                            <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-400">
                              {skill.industry}
                            </span>
                          )}
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                          {skill.title}
                        </h1>
                      </div>

                      <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl">
                        {skill.description}
                      </p>

                      {skill.timeline && (
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-zinc-500 font-medium">Implementation Timeline:</span>
                          <span className="text-zinc-300 font-bold">{skill.timeline}</span>
                        </div>
                      )}
                    </motion.div>

                    {/* Divider */}
                    <div className="h-px bg-white/10" />

                    {/* Challenge Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-md bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-400 text-xs font-bold">
                            ⚠
                          </span>
                          The Challenge
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                          What Our Clients Face
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="glass-card border border-white/10 p-6">
                          <p className="text-base text-zinc-300 leading-relaxed">
                            {skill.challenge}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="h-px bg-white/10" />

                    {/* Solution Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-md bg-green-500/20 border border-green-500/30 flex items-center justify-center text-green-400 text-xs font-bold">
                            ✓
                          </span>
                          Our Solution
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                          How It Works
                        </p>
                      </div>

                      <div className="glass-card border border-white/10 p-6 mb-6">
                        <p className="text-base text-zinc-300 leading-relaxed">
                          {skill.solution}
                        </p>
                      </div>

                      {/* Key Features */}
                      {skill.features && skill.features.length > 0 && (
                        <div>
                          <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 mb-4">
                            Key Features
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {skill.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-3 p-4 rounded-md bg-white/5 border border-white/10">
                                <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-white font-bold">✓</span>
                                </div>
                                <span className="text-sm text-zinc-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>

                    {/* Divider */}
                    <div className="h-px bg-white/10" />

                    {/* Results Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-6"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                          <span className="w-8 h-8 rounded-md bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-xs font-bold">
                            📊
                          </span>
                          Proven Results
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                          Impact & Outcomes
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="glass-card border border-white/10 p-6 text-center">
                          <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                            Result 1
                          </p>
                          <p className="text-2xl sm:text-3xl font-bold text-white">
                            {skill.results.metric1}
                          </p>
                        </div>
                        {skill.results.metric2 && (
                          <div className="glass-card border border-white/10 p-6 text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                              Result 2
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-white">
                              {skill.results.metric2}
                            </p>
                          </div>
                        )}
                        {skill.results.metric3 && (
                          <div className="glass-card border border-white/10 p-6 text-center">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-3">
                              Result 3
                            </p>
                            <p className="text-2xl sm:text-3xl font-bold text-white">
                              {skill.results.metric3}
                            </p>
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Client Testimonial */}
                    {skill.clientTestimonial && (
                      <>
                        {/* Divider */}
                        <div className="h-px bg-white/10" />

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="space-y-6"
                        >
                          <div>
                            <h2 className="text-2xl font-bold text-white mb-2">Client Testimonial</h2>
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                              What Our Clients Say
                            </p>
                          </div>

                          <div className="glass-card border border-white/10 p-6 sm:p-8">
                            <div className="space-y-4">
                              <p className="text-lg text-zinc-300 italic leading-relaxed">
                                "{skill.clientTestimonial.quote}"
                              </p>
                              <div className="pt-4 border-t border-white/10">
                                <p className="font-bold text-white">
                                  {skill.clientTestimonial.author}
                                </p>
                                <p className="text-sm text-zinc-500 font-medium">
                                  {skill.clientTestimonial.role}
                                </p>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      </>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-white/10" />

                    {/* Tech Stack */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="space-y-4"
                    >
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">
                          Built With
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-zinc-400 hover:bg-white/10 hover:text-zinc-300 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Divider */}
                    <div className="h-px bg-white/10" />

                    {/* CTA - Replaced with Contact Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                    >
                      <div>
                        <p className="text-sm text-zinc-400 mb-2">
                          Interested in this skill for your business?
                        </p>
                        <p className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                          Let's discuss your needs
                        </p>
                      </div>
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/#initiate"
                        onClick={handleClose}
                        className="inline-flex items-center gap-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-4 font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-zinc-200 transition-colors flex-shrink-0"
                      >
                        Start a Project
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
