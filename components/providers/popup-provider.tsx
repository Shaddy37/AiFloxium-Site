"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import {
  AUTO_POPUP_IDS,
  EXCLUDED_PATH_PATTERNS,
  POPUP_DEFINITIONS,
  cooldownRemainingMs,
  isPopupEligibleForPath,
  type PopupId,
} from "@/lib/popup-config";
import { usePopupState } from "@/components/hooks/use-popup-state";
import { useScrollTrigger } from "@/components/hooks/use-scroll-trigger";
import { useExitIntent } from "@/components/hooks/use-exit-intent";
import { trackPopupEvent } from "@/lib/analytics-popup";

interface PopupProviderValue {
  readonly openPopup: (id: PopupId) => void;
  readonly closePopup: (id: PopupId, method: "close_button" | "outside_click" | "escape_key" | "decline_link") => void;
  readonly markSubmitted: (id: PopupId) => void;
  readonly isOpen: (id: PopupId) => boolean;
  readonly isEligible: (id: PopupId) => boolean;
  readonly autoPopupsSuppressed: boolean;
}

const PopupContext = createContext<PopupProviderValue | null>(null);

interface PopupProviderProps {
  readonly children: React.ReactNode;
}

function getPagePath(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname;
}

export function PopupProvider({ children }: PopupProviderProps) {
  const pathname = usePathname();
  const { state, actions } = usePopupState();
  const [activePopup, setActivePopup] = useState<PopupId | null>(null);
  const [autoPopupsSuppressed, setAutoPopupsSuppressed] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const openedAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const id = window.setTimeout(() => setHydrated(true), 0);
    return () => window.clearTimeout(id);
  }, []);

  const pathEligible = useMemo(() => {
    if (!pathname) return false;
    return !EXCLUDED_PATH_PATTERNS.some((pattern) => pattern.test(pathname));
  }, [pathname]);

  const anySubmitted = useMemo(() => {
    return AUTO_POPUP_IDS.some((id) => {
      const def = POPUP_DEFINITIONS[id];
      if (!def.permanentSuppressAfterSubmit) return false;
      return Boolean(state.submitted[id]);
    });
  }, [state.submitted]);

  const isEligible = useCallback(
    (id: PopupId): boolean => {
      if (!hydrated) return false;
      if (!pathEligible) return false;
      if (!isPopupEligibleForPath(POPUP_DEFINITIONS[id], pathname)) return false;

      const def = POPUP_DEFINITIONS[id];

      if (def.permanentSuppressAfterSubmit && state.submitted[id]) {
        return false;
      }

      const dismissedAt = state.dismissed[id];
      const remaining = cooldownRemainingMs(dismissedAt, def.cooldownDays);
      if (remaining > 0) return false;

      return true;
    },
    [hydrated, pathEligible, pathname, state.dismissed, state.submitted]
  );

  const showAutoPopup = useCallback(
    (id: PopupId) => {
      if (!isEligible(id)) return;
      if (actions.hasImpressionThisSession()) return;
      if (activePopup) return;
      if (autoPopupsSuppressed) return;
      if (anySubmitted) return;

      openedAtRef.current = Date.now();
      setActivePopup(id);
      actions.markImpression(id);
      trackPopupEvent("popup_view", {
        popup_id: id,
        page_path: getPagePath(),
      });
    },
    [isEligible, actions, activePopup, autoPopupsSuppressed, anySubmitted]
  );

  const handleScrollCross = useCallback(() => {
    const def = POPUP_DEFINITIONS["scroll-lead-magnet"];
    const minTime = def.triggerConfig.minTimeOnPageMs ?? 0;
    if (minTime <= 0) {
      showAutoPopup("scroll-lead-magnet");
      return;
    }
    window.setTimeout(() => {
      showAutoPopup("scroll-lead-magnet");
    }, minTime);
  }, [showAutoPopup]);

  const handleExitIntent = useCallback(() => {
    showAutoPopup("exit-intent-call");
  }, [showAutoPopup]);

  const autoTriggersActive =
    hydrated && !anySubmitted && !autoPopupsSuppressed && pathEligible;

  useScrollTrigger(
    autoTriggersActive
      ? (POPUP_DEFINITIONS["scroll-lead-magnet"].triggerConfig.scrollDepthPct ?? 50)
      : 999,
    handleScrollCross
  );

  useExitIntent(
    {
      enabled: autoTriggersActive,
      minScrollDistancePct:
        POPUP_DEFINITIONS["exit-intent-call"].triggerConfig.minScrollDistancePct ?? 0,
      mobileBackButton: true,
    },
    handleExitIntent
  );

  const openPopup = useCallback(
    (id: PopupId) => {
      if (activePopup) return;
      openedAtRef.current = Date.now();
      setActivePopup(id);
      setAutoPopupsSuppressed(true);
      actions.markImpression(id);
      trackPopupEvent("popup_view", {
        popup_id: id,
        page_path: getPagePath(),
      });
    },
    [activePopup, actions]
  );

  const closePopup = useCallback<PopupProviderValue["closePopup"]>(
    (id, method) => {
      const timeVisibleMs = openedAtRef.current
        ? Date.now() - openedAtRef.current
        : 0;
      trackPopupEvent("popup_dismiss", {
        popup_id: id,
        page_path: getPagePath(),
        dismiss_method: method,
        time_visible_ms: timeVisibleMs,
      });
      openedAtRef.current = null;
      setActivePopup((current) => (current === id ? null : current));
      if (AUTO_POPUP_IDS.includes(id)) {
        actions.markDismissed(id);
      }
    },
    [actions]
  );

  const markSubmitted = useCallback(
    (id: PopupId) => {
      trackPopupEvent("popup_submit_success", {
        popup_id: id,
        page_path: getPagePath(),
      });
      actions.markSubmitted(id);
      openedAtRef.current = null;
      setActivePopup((current) => (current === id ? null : current));
      if (AUTO_POPUP_IDS.includes(id)) {
        setAutoPopupsSuppressed(true);
      }
    },
    [actions]
  );

  const isOpen = useCallback(
    (id: PopupId) => activePopup === id,
    [activePopup]
  );

  const value = useMemo<PopupProviderValue>(
    () => ({
      openPopup,
      closePopup,
      markSubmitted,
      isOpen,
      isEligible,
      autoPopupsSuppressed,
    }),
    [openPopup, closePopup, markSubmitted, isOpen, isEligible, autoPopupsSuppressed]
  );

  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}

export function usePopupControls(): PopupProviderValue {
  const ctx = useContext(PopupContext);
  if (!ctx) {
    throw new Error("usePopupControls must be used inside <PopupProvider>");
  }
  return ctx;
}

export function useOptionalPopupControls(): PopupProviderValue | null {
  return useContext(PopupContext);
}
