"use client";

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CALENDLY_URL } from '@/lib/site';

export const EarthContactCTA = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate sending
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-24 select-none">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260602_150901_c45b90ec-18d7-42ff-90e2-b95d7109e330.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
      />

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />
      
      {/* Smooth fade from the section above (LazySections/white background) into this dark video */}
      <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-white via-white/50 to-transparent z-10 pointer-events-none" />
      
      {/* Smooth fade into the footer (which is dark) */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#0a0608] to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left: Copy */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="mb-4 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 block font-inter">
            Start the dialogue
          </span>
          <h2 className="font-instrument text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
            Let&apos;s build <br/><span className="text-[#E0AAFF] italic">your next system.</span>
          </h2>
          <p className="font-inter text-white/80 text-base md:text-lg max-w-md leading-relaxed mb-10">
            Whether you need a custom internal tool, a mini-SaaS, or an enterprise n8n workflow—I design solutions that respect your time and nature.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-8 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-all duration-300 button-glow font-inter"
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="mailto:hello@aifloxium.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 text-white border border-white/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider hover:bg-white/20 transition-all duration-300 font-inter backdrop-blur-md"
            >
              <Mail className="h-4 w-4" />
              Email Me directly
            </a>
          </div>
        </div>

        {/* Right: Glass Form */}
        <div className="w-full lg:w-1/2 max-w-lg">
          <div className="rounded-[2rem] bg-black/20 backdrop-blur-2xl border border-white/10 p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Subtle glow inside the card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B2CBF]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            
            <h3 className="font-inter text-white text-xl font-medium mb-8">Send a brief</h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-500">
                <CheckCircle2 className="h-16 w-16 text-[#E0AAFF] mb-4" />
                <h4 className="font-instrument text-2xl text-white mb-2">Received.</h4>
                <p className="font-inter text-white/70 text-sm">I&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 font-inter ml-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-inter placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 font-inter ml-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-inter placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 font-inter ml-1">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm font-inter placeholder:text-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                    placeholder="What are we building?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 w-full bg-white text-black rounded-xl py-4 font-semibold text-xs tracking-wider uppercase hover:bg-[#E0AAFF] transition-all duration-300 font-inter disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Sending..." : "Submit Brief"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
