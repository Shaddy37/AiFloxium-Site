"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const steps = [
  { step: "01 // INGESTION", tech: "Webhook Listener", desc: "Incoming lead signal from website or database." },
  { step: "02 // ENRICHMENT", tech: "Clearbit + Apollo API", desc: "Retrieving deep firmographic data and revenue metrics." },
  { step: "03 // COGNITION", tech: "Claude 3.5 Sonnet", desc: "Reasoning over site data to find the exact 'pain point'." },
  { step: "04 // DISPATCH", tech: "Resend / Smartreach", desc: "Sending a hyper-personalized outreach sequence." },
];

export function BlogArchitecture() {
  return (
    <section className="glass-card p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-zinc-800/10 blur-[100px] -z-10 group-hover:bg-zinc-800/20 transition-all duration-700" />
      <div className="flex items-center gap-4 mb-8">
         <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
            <Cpu className="w-6 h-6" />
         </div>
         <h3 className="text-xl font-bold text-white tracking-widest uppercase italic">SIGNAL ARCHITECTURE</h3>
      </div>
      
      <div className="flex flex-col gap-6 py-8 relative">
         {/* Animated vertical line */}
         <motion.div 
           initial={{ height: 0 }}
           whileInView={{ height: "100%" }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute left-[23px] top-12 w-[2px] bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden md:block" 
         />

         {steps.map((item, i) => (
           <motion.div 
             key={i} 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true, amount: 0.3 }}
             className="flex gap-6 items-start relative z-10"
           >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0 font-mono text-white text-xs bg-zinc-950 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                 {item.step.split(' ')[0]}
              </div>
              <div className="pt-2">
                 <div className="flex items-center gap-3 mb-1">
                    <span className="text-white font-bold tracking-tight uppercase">{item.tech}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                    <span className="text-xs font-mono text-zinc-500 uppercase">{item.step.split('// ')[1]}</span>
                 </div>
                 <p className="text-sm text-zinc-400">{item.desc}</p>
              </div>
           </motion.div>
         ))}
      </div>
    </section>
  );
}
