"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, ShieldCheck, Mail, CheckCircle2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface LeadMagnetCTAProps {
  magnetId: string;
  title: string;
  description: string;
  buttonText?: string;
  downloadUrl: string;
  fileName?: string;
  successButtonText?: string;
  socialProof?: string;
  className?: string;
}

export const LeadMagnetCTA = ({
  magnetId,
  title,
  description,
  buttonText = "Download Free Resource",
  downloadUrl,
  fileName = "Resource File",
  successButtonText,
  socialProof = "Downloaded by 450+ ops leaders",
  className,
}: LeadMagnetCTAProps) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (val: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  };

  const isExternal = downloadUrl.startsWith("http") && 
    !downloadUrl.endsWith(".zip") && 
    !downloadUrl.endsWith(".json") && 
    !downloadUrl.endsWith(".pdf");
  const defaultSuccessText = isExternal ? `Access ${fileName}` : `Download ${fileName}`;
  const buttonLabel = successButtonText || defaultSuccessText;
  const isGithub = downloadUrl.includes("github.com");
  const descriptionVerb = isExternal ? "link for" : "download for";
  const subText = isGithub 
    ? "This will redirect you directly to the official GitHub repository." 
    : "Check your email if you ever lose this link.";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/tool-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tag: "lead-magnet",
          tool: magnetId,
          email: email.trim(),
        }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMessage(data.error || "Failed to submit. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("An unexpected error occurred. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div className={cn("my-12 relative group", className)}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 p-6 md:p-8 rounded-[2rem] bg-zinc-50 border border-brand-plum/10 text-black overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1"
      >
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-plum/5 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-brand-plum/10 transition-colors duration-500" />

        <div className="relative z-10">
          {status !== "success" ? (
            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-brand-plum/30" />
                  <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-brand-plum font-black">Free Resource</span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-black tracking-tight uppercase text-black leading-tight">
                  {title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed font-medium">
                  {description}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                      type="email"
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full h-12 pl-11 pr-4 rounded-xl bg-white border border-zinc-200 text-sm font-medium text-black focus:outline-none focus:border-brand-plum/50 focus:ring-2 focus:ring-brand-plum/10 transition-all placeholder:text-zinc-400"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="h-12 px-6 rounded-xl bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-plum transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-brand-plum/10 disabled:opacity-50"
                  >
                    <span>{status === "loading" ? "Securing..." : buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Validation message */}
                {status === "error" && (
                  <p className="text-rose-600 text-xs font-bold font-mono tracking-wide uppercase">
                    {errorMessage}
                  </p>
                )}
              </form>

              {/* Footer seals */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-zinc-200/50">
                <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Instant Access • No spam</span>
                </div>
                <div className="text-[10px] font-mono text-brand-plum/60 font-black uppercase tracking-wider">
                  {socialProof}
                </div>
              </div>
            </div>
          ) : (
            /* Success State */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 flex flex-col items-center gap-5"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-heading font-black uppercase text-black">
                  Link Granted Successfully!
                </h3>
                <p className="text-zinc-600 text-sm max-w-md mx-auto font-medium">
                  Thank you. Your {descriptionVerb} <span className="font-bold text-brand-plum">{fileName}</span> is ready below.
                </p>
              </div>

              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-all shadow-md shadow-emerald-600/20 active:scale-95"
              >
                {isExternal ? <ExternalLink className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                <span>{buttonLabel}</span>
              </a>

              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                {subText}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
