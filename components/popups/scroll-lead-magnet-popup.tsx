"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ExternalLink, Mail, ShieldCheck, Sparkles } from "lucide-react";

import { PopupShell } from "@/components/popups/ui/popup-shell";
import { usePopupControls } from "@/components/providers/popup-provider";
import { getPopupDefinition } from "@/lib/popup-config";
import { submitLeadMagnet } from "@/lib/integrations/email";
import { trackPopupEvent } from "@/lib/analytics-popup";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "success" | "error";

const POPUP_ID = "scroll-lead-magnet" as const;

function getPagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export function ScrollLeadMagnetPopup() {
  const { isOpen, closePopup, markSubmitted } = usePopupControls();
  const open = isOpen(POPUP_ID);
  const copy = getPopupDefinition(POPUP_ID).copy;
  const reducedMotion = useReducedMotion();

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const redirectUrl = getPopupDefinition(POPUP_ID).redirectUrl;

  useEffect(() => {
    if (status === "success" && redirectUrl) {
      const timer = setTimeout(() => {
        window.open(redirectUrl, "_blank", "noopener,noreferrer");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [status, redirectUrl]);

  const validateEmail = (val: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());

  const handleClose = (
    method: "close_button" | "outside_click" | "escape_key" | "decline_link"
  ) => {
    closePopup(POPUP_ID, method);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    trackPopupEvent("popup_submit", {
      popup_id: POPUP_ID,
      page_path: getPagePath(),
      form_fields: 1,
    });

    const result = await submitLeadMagnet({
      email: email.trim(),
      source: "scroll-lead-magnet-popup",
      pagePath: getPagePath(),
      referrer: typeof document !== "undefined" ? document.referrer : undefined,
    });

    if (result.success) {
      setStatus("success");
      markSubmitted(POPUP_ID);
    } else {
      setStatus("error");
      setErrorMessage(result.error ?? "Something went wrong. Try again?");
      trackPopupEvent("popup_submit_error", {
        popup_id: POPUP_ID,
        page_path: getPagePath(),
        error_message: result.error,
      });
    }
  };

  return (
    <PopupShell
      open={open}
      onClose={() => handleClose("close_button")}
      closeOnOutsideClick
      closeOnEscape
      dismissMethod="close_button"
      ariaLabel={copy.headline}
      size="md"
      position="bottom"
    >
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-0">
        <div className="relative hidden md:flex items-center justify-center bg-gradient-to-br from-brand-plum/30 via-brand-bg to-brand-orange/20 p-6 border-b md:border-b-0 md:border-r border-white/5">
          <div className="absolute inset-0 bg-brand-plum-glow opacity-60" />
          <motion.div
            initial={reducedMotion ? false : { rotate: -4, scale: 0.92 }}
            animate={reducedMotion ? false : { rotate: -2, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative aspect-[3/4] w-[140px] rounded-md border border-white/10 bg-gradient-to-b from-zinc-100 to-zinc-300 p-3 shadow-2xl shadow-black/50"
          >
            <div className="flex items-center gap-1.5 text-[7px] font-mono uppercase tracking-widest text-zinc-500">
              <Sparkles className="h-2.5 w-2.5" />
              <span>AIFLOXIUM</span>
            </div>
            <div className="mt-2 space-y-1">
              <div className="h-1 w-3/4 rounded-full bg-zinc-700" />
              <div className="h-1 w-1/2 rounded-full bg-zinc-400" />
            </div>
            <div className="mt-3 space-y-0.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="h-0.5 w-full rounded-full bg-zinc-400/60"
                  style={{ width: `${65 + (i % 3) * 12}%` }}
                />
              ))}
            </div>
            <div className="absolute bottom-2 left-3 right-3 h-px bg-zinc-400" />
            <div className="absolute bottom-1 left-3 right-3 text-[6px] font-mono uppercase tracking-widest text-zinc-500">
              30-Point Audit
            </div>
          </motion.div>
        </div>

        <div className="relative p-6 sm:p-8">
          <div className="space-y-2 mb-5">
            <div className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.25em] text-brand-orange font-black">
              <span className="h-px w-5 bg-brand-orange/60" />
              {copy.eyebrow}
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-white leading-tight">
              {copy.headline}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {copy.subhead}
            </p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Unlocked
                </span>
              </div>
              <div className="space-y-1.5">
                <p className="text-base font-bold text-white">
                  {copy.successHeadline}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {copy.successBody}
                </p>
              </div>
              {redirectUrl && (
                <a
                  href={redirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-brand-orange/80 transition-colors"
                >
                  Open audit now
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                <input
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  className={cn(
                    "w-full h-12 pl-10 pr-4 rounded-xl bg-black/40 border text-sm font-medium text-white placeholder:text-zinc-500 transition-all focus:outline-none focus:ring-2",
                    status === "error"
                      ? "border-rose-500/50 focus:border-rose-500 focus:ring-rose-500/20"
                      : "border-white/10 focus:border-brand-orange/60 focus:ring-brand-orange/20"
                  )}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group w-full h-12 rounded-xl bg-brand-orange text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 disabled:opacity-60"
              >
                <span>
                  {status === "loading" ? "Sending..." : copy.ctaLabel}
                </span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>

              {status === "error" && errorMessage && (
                <p className="text-rose-400 text-xs font-bold uppercase tracking-wider">
                  {errorMessage}
                </p>
              )}

              <div className="flex items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                  <ShieldCheck className="h-3 w-3 text-zinc-400" />
                  <span>{copy.microcopy}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleClose("decline_link")}
                  className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider hover:text-zinc-300 transition-colors"
                >
                  {copy.declineLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </PopupShell>
  );
}
