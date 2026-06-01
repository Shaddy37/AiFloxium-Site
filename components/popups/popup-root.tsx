"use client";

import { Suspense } from "react";

import { ScrollLeadMagnetPopup } from "@/components/popups/scroll-lead-magnet-popup";
import { ExitIntentCallPopup } from "@/components/popups/exit-intent-call-popup";
import { CalendlyModalPopup } from "@/components/popups/calendly-modal";

function PopupFallback() {
  return null;
}

export function PopupRoot() {
  return (
    <Suspense fallback={<PopupFallback />}>
      <ScrollLeadMagnetPopup />
      <ExitIntentCallPopup />
      <CalendlyModalPopup />
    </Suspense>
  );
}
