"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { useFocusTrap } from "@/components/hooks/use-focus-trap";

import { DismissButton } from "@/components/popups/ui/dismiss-button";

interface PopupShellProps {
  readonly open: boolean;
  readonly onClose: () => void;
  readonly closeOnOutsideClick?: boolean;
  readonly closeOnEscape?: boolean;
  readonly dismissMethod: "close_button" | "outside_click" | "escape_key" | "decline_link";
  readonly dismissLabel?: string;
  readonly size?: "sm" | "md" | "lg" | "full";
  readonly position?: "center" | "bottom";
  readonly ariaLabel: string;
  readonly className?: string;
  readonly overlayClassName?: string;
  readonly showDismissButton?: boolean;
  readonly children: React.ReactNode;
}

const SIZE_CLASSES: Record<NonNullable<PopupShellProps["size"]>, string> = {
  sm: "max-w-[440px]",
  md: "max-w-[520px]",
  lg: "max-w-[720px]",
  full: "max-w-[95vw] md:max-w-[860px]",
};

const POSITION_CLASSES: Record<
  NonNullable<PopupShellProps["position"]>,
  string
> = {
  center: "items-center justify-center px-4",
  bottom: "items-end justify-center px-3 pb-3 sm:items-center sm:justify-center sm:px-4 sm:pb-0 md:items-center md:justify-center",
};

export function PopupShell({
  open,
  onClose,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  dismissMethod,
  dismissLabel = "Close",
  size = "md",
  position = "center",
  ariaLabel,
  className,
  overlayClassName,
  showDismissButton = true,
  children,
}: PopupShellProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reducedMotion = useReducedMotion();

  useFocusTrap(containerRef, open);

  useEffect(() => {
    if (!open) return;
    if (typeof document === "undefined") return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open || !closeOnEscape) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeOnEscape, onClose]);

  const motionProps = reducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.12 },
      }
    : {
        initial: { opacity: 0, y: 24, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.98 },
        transition: {
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      };

  const overlayProps = reducedMotion
    ? {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.12 },
      }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.25 },
      };

  const handleOutsideClick = closeOnOutsideClick ? onClose : undefined;

  return (
    <AnimatePresence>
      {open && (
        <div
          className={cn(
            "fixed inset-0 z-[200] flex",
            POSITION_CLASSES[position]
          )}
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
        >
          <motion.div
            {...overlayProps}
            onClick={handleOutsideClick}
            className={cn(
              "absolute inset-0 bg-black/70 backdrop-blur-md",
              overlayClassName
            )}
            aria-hidden="true"
          />

          <motion.div
            ref={containerRef}
            {...motionProps}
            data-dismiss-method={dismissMethod}
            className={cn(
              "glass-card relative z-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-brand-bg/95 text-foreground shadow-2xl shadow-black/40",
              SIZE_CLASSES[size],
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {showDismissButton && (
              <DismissButton onDismiss={onClose} label={dismissLabel} />
            )}
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
