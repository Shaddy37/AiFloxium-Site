"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  value: string;
  description: string;
  icon?: "target" | "zap" | "clock";
}

interface ImpactStatsProps {
  stats: StatItem[];
  className?: string;
}

const iconMap = {
  target: Target,
  zap: Zap,
  clock: Clock,
};

export const ImpactStats = ({ stats, className }: ImpactStatsProps) => {
  return (
    <div className={cn("my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {stats.map((stat, i) => {
        const Icon = stat.icon ? iconMap[stat.icon] : Zap;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-[2rem] bg-gray-50 border border-gray-200 relative overflow-hidden group hover:border-brand-plum/20 transition-all"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon className="w-24 h-24 text-brand-plum" />
            </div>
            
            <Icon className="w-5 h-5 text-brand-plum mb-6" />
            
            <div className="text-5xl font-black text-black tracking-tighter mb-2 group-hover:translate-x-1 transition-transform duration-500">
              {stat.value}
            </div>
            
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-plum mb-4 font-black">
              {stat.label}
            </div>
            
            <p className="text-black text-sm leading-relaxed font-bold">
              {stat.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};
