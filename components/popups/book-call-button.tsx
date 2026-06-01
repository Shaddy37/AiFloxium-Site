"use client";

import { Suspense } from "react";

import { usePopupControls } from "@/components/providers/popup-provider";
import { cn } from "@/lib/utils";
import { type PopupId } from "@/lib/popup-config";

interface BookCallButtonProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly variant?: "primary" | "secondary" | "ghost";
  readonly popupId?: PopupId;
  readonly externalHref?: string;
  readonly ariaLabel?: string;
}

const VARIANT_CLASSES: Record<NonNullable<BookCallButtonProps["variant"]>, string> = {
  primary:
    "rounded-full bg-brand-orange text-white hover:bg-brand-orange/90 px-6 text-xs font-bold uppercase tracking-widest transition-all shadow-lg border-none",
  secondary:
    "rounded-full bg-white/5 text-white hover:bg-white/10 border border-white/10 px-6 text-xs font-bold uppercase tracking-widest transition-all",
  ghost:
    "rounded-full text-white hover:text-brand-orange px-4 text-xs font-bold uppercase tracking-widest transition-all",
};

function BookCallButtonInner({
  children,
  className,
  variant = "primary",
  popupId = "calendly-modal",
  externalHref,
  ariaLabel,
}: BookCallButtonProps) {
  const controls = usePopupControls();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (controls.autoPopupsSuppressed && externalHref) {
      window.open(externalHref, "_blank", "noopener,noreferrer");
      return;
    }
    controls.openPopup(popupId);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      className={cn(VARIANT_CLASSES[variant], className)}
    >
      {children}
    </button>
  );
}

export function BookCallButton(props: BookCallButtonProps) {
  return (
    <Suspense fallback={null}>
      <BookCallButtonInner {...props} />
    </Suspense>
  );
}
