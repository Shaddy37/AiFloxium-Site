"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, ShieldCheck, X } from "lucide-react";

import { PopupShell } from "@/components/popups/ui/popup-shell";
import { usePopupControls } from "@/components/providers/popup-provider";
import { getPopupDefinition } from "@/lib/popup-config";
import { trackPopupEvent } from "@/lib/analytics-popup";
import { CALENDLY_URL, SITE_HOST } from "@/lib/site";
import { cn } from "@/lib/utils";

const POPUP_ID = "calendly-modal" as const;

function getPagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

function buildEmbedUrl(): string {
  const url = new URL(CALENDLY_URL);
  url.searchParams.set("embed_domain", SITE_HOST);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("hide_event_type_details", "1");
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("primary_color", "FF6B00");
  url.searchParams.set("text_color", "fafafa");
  url.searchParams.set("background_color", "130716");
  return url.toString();
}

export function CalendlyModalPopup() {
  const { isOpen, closePopup } = usePopupControls();
  const open = isOpen(POPUP_ID);
  const copy = getPopupDefinition(POPUP_ID).copy;

  const [iframeLoaded, setIframeLoaded] = useState(false);
  const embedUrl = useMemo(() => buildEmbedUrl(), []);

  const handleClose = (
    method: "close_button" | "outside_click" | "escape_key" | "decline_link"
  ) => {
    closePopup(POPUP_ID, method);
  };

  const handleOpenExternal = () => {
    trackPopupEvent("calendly_open", {
      popup_id: POPUP_ID,
      page_path: getPagePath(),
    });
  };

  return (
    <PopupShell
      open={open}
      onClose={() => handleClose("close_button")}
      closeOnOutsideClick
      closeOnEscape
      dismissMethod="close_button"
      ariaLabel={copy.headline}
      size="full"
      position="center"
      className="max-h-[92vh] flex flex-col"
    >
      <div className="flex-shrink-0 relative px-6 sm:px-8 pt-7 pb-5 border-b border-white/5 bg-gradient-to-br from-brand-plum/15 via-brand-bg to-brand-bg">
        <div className="flex items-start gap-3 pr-10">
          <div className="hidden sm:flex h-10 w-10 flex-shrink-0 rounded-xl bg-brand-orange/10 border border-brand-orange/30 items-center justify-center">
            <Calendar className="h-4 w-4 text-brand-orange" />
          </div>
          <div className="space-y-1.5 min-w-0">
            <div className="text-[9px] font-mono uppercase tracking-[0.25em] text-brand-orange font-black">
              {copy.eyebrow}
            </div>
            <h2 className="text-lg sm:text-xl font-heading font-black tracking-tight text-white leading-tight">
              {copy.headline}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {copy.subhead}
            </p>
          </div>
        </div>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleOpenExternal}
          className="absolute right-14 top-3 hidden sm:inline-flex items-center gap-1.5 h-9 px-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-white border border-white/10 hover:border-white/20 transition-all"
        >
          <ExternalLink className="h-3 w-3" />
          <span>Open in new tab</span>
        </a>
      </div>

      <div className="relative flex-1 bg-brand-bg min-h-[420px] sm:min-h-[520px]">
        {!iframeLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-zinc-500">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="h-6 w-6 rounded-full border-2 border-white/10 border-t-brand-orange"
            />
            <p className="text-[10px] font-bold uppercase tracking-widest">
              Loading calendar...
            </p>
          </div>
        )}
        <iframe
          src={embedUrl}
          title="Schedule a 30-minute process audit"
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-300",
            iframeLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setIframeLoaded(true)}
          loading="lazy"
        />
      </div>

      <div className="flex-shrink-0 flex items-center justify-between gap-3 px-6 sm:px-8 py-3 border-t border-white/5 bg-black/30">
        <div className="flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
          <ShieldCheck className="h-3 w-3 text-zinc-400" />
          <span className="hidden sm:inline">{copy.microcopy}</span>
          <span className="sm:hidden">Direct call. No SDRs.</span>
        </div>
        <button
          type="button"
          onClick={() => handleClose("close_button")}
          className="inline-flex items-center gap-1.5 text-[10px] font-bold text-zinc-400 hover:text-white uppercase tracking-widest transition-colors"
        >
          <X className="h-3 w-3" />
          <span>{copy.declineLabel}</span>
        </button>
      </div>
    </PopupShell>
  );
}
