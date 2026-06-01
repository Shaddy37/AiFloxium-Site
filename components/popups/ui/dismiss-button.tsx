"use client";

import { X } from "lucide-react";

import { cn } from "@/lib/utils";

interface DismissButtonProps {
  readonly onDismiss: () => void;
  readonly label?: string;
  readonly className?: string;
}

export function DismissButton({
  onDismiss,
  label = "Close",
  className,
}: DismissButtonProps) {
  return (
    <button
      type="button"
      onClick={onDismiss}
      aria-label={label}
      className={cn(
        "absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur-md transition-all hover:border-white/30 hover:bg-black/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60",
        className
      )}
    >
      <X className="h-4 w-4" />
    </button>
  );
}
