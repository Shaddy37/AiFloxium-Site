"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Project } from "@/lib/projects-data";
import { ProjectCard } from "./project-card";
import { cn } from "@/lib/utils";

interface WorkflowsCarouselProps {
  workflows: Project[];
  isOpen: boolean;
  onClose: () => void;
}

export function WorkflowsCarousel({ workflows, isOpen, onClose }: WorkflowsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(workflows.length / itemsPerPage);

  const currentWorkflows = workflows.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Modal - Full scrollable */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="min-h-screen py-8 px-4">
              <div className="max-w-6xl mx-auto bg-zinc-950 border border-white/10 shadow-2xl">
                {/* Header */}
                <div className="border-b border-white/10 p-6 sm:p-8 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                      All n8n Workflows
                    </h2>
                    <p className="text-zinc-400 text-sm">
                      {workflows.length} automations built for businesses like yours
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 p-2 hover:bg-white/10 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-6 h-6 text-zinc-400 hover:text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  {/* Workflows Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {currentWorkflows.map((workflow, i) => (
                      <motion.div
                        key={workflow.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <ProjectCard project={workflow} />
                      </motion.div>
                    ))}
                  </div>

                  {/* Pagination */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
                    <div className="text-sm text-zinc-400 text-center sm:text-left">
                      <div>Page {currentIndex + 1} of {totalPages}</div>
                      <div className="font-medium text-zinc-300 mt-1">
                        {currentIndex * itemsPerPage + 1}-{Math.min((currentIndex + 1) * itemsPerPage, workflows.length)} of {workflows.length}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap justify-center">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={goToPrevious}
                        className={cn(
                          "p-2 transition-colors",
                          currentIndex === 0
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-white/10 text-zinc-400 hover:text-white"
                        )}
                        disabled={currentIndex === 0 && totalPages <= 1}
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      <div className="flex gap-2">
                        {Array.from({ length: totalPages }).map((_, i) => (
                          <motion.button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={cn(
                              "transition-all",
                              i === currentIndex
                                ? "w-8 h-2 bg-white"
                                : "w-2 h-2 bg-zinc-600 hover:bg-zinc-400"
                            )}
                            whileHover={{ scale: 1.1 }}
                          />
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={goToNext}
                        className={cn(
                          "p-2 transition-colors",
                          currentIndex === totalPages - 1
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:bg-white/10 text-zinc-400 hover:text-white"
                        )}
                        disabled={currentIndex === totalPages - 1 && totalPages <= 1}
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </div>
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
