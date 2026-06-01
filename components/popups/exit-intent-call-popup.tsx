"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck } from "lucide-react";

import { PopupShell } from "@/components/popups/ui/popup-shell";
import { usePopupControls } from "@/components/providers/popup-provider";
import { getPopupDefinition } from "@/lib/popup-config";
import { trackPopupEvent } from "@/lib/analytics-popup";
import { CALENDLY_URL } from "@/lib/site";

const POPUP_ID = "exit-intent-call" as const;

function getPagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export function ExitIntentCallPopup() {
  const { isOpen, closePopup } = usePopupControls();
  const open = isOpen(POPUP_ID);
  const copy = getPopupDefinition(POPUP_ID).copy;

  const handleClose = (
    method: "close_button" | "outside_click" | "escape_key" | "decline_link"
  ) => {
    closePopup(POPUP_ID, method);
  };

  const handleBookCall = () => {
    trackPopupEvent("calendly_open", {
      popup_id: POPUP_ID,
      page_path: getPagePath(),
    });
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    closePopup(POPUP_ID, "close_button");
  };

  return (
    <PopupShell
      open={open}
      onClose={() => handleClose("close_button")}
      closeOnOutsideClick
      closeOnEscape
      dismissMethod="close_button"
      ariaLabel={copy.headline}
      size="sm"
      position="center"
    >
      <div className="p-6 sm:p-8 space-y-5">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="h-12 w-12 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 flex items-center justify-center"
          >
            <Calendar className="h-5 w-5 text-brand-orange" />
          </motion.div>
        </div>

        <div className="space-y-2 text-center">
          <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-brand-orange font-black">
            {copy.eyebrow}
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-white leading-tight">
            {copy.headline}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-[360px] mx-auto">
            {copy.subhead}
          </p>
        </div>

        <div className="space-y-2.5 pt-1">
          <button
            type="button"
            onClick={handleBookCall}
            className="group w-full h-12 rounded-xl bg-brand-orange text-white font-bold text-xs uppercase tracking-widest hover:bg-brand-orange/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20"
          >
            <span>{copy.ctaLabel}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            type="button"
            onClick={() => handleClose("decline_link")}
            className="w-full h-10 text-[11px] font-bold text-zinc-500 uppercase tracking-widest hover:text-zinc-300 transition-colors"
          >
            {copy.declineLabel}
          </button>
        </div>

        <div className="flex items-center justify-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wider pt-1">
          <ShieldCheck className="h-3 w-3 text-zinc-400" />
          <span>{copy.microcopy}</span>
        </div>
      </div>
    </PopupShell>
  );
}
