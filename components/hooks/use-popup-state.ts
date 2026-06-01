"use client";

import { useCallback, useSyncExternalStore } from "react";

import {
  INITIAL_POPUP_STATE,
  POPUP_STORAGE_KEY,
  SESSION_KEY,
  type PopupId,
  type PopupStorageState,
} from "@/lib/popup-config";

const SESSION_IMPRESSION_KEY = "aifloxium_popup_impression";

function readSnapshot(): PopupStorageState {
  if (typeof window === "undefined") return INITIAL_POPUP_STATE;
  try {
    const raw = window.localStorage.getItem(POPUP_STORAGE_KEY);
    if (!raw) return INITIAL_POPUP_STATE;
    const parsed = JSON.parse(raw) as Partial<PopupStorageState>;
    return {
      dismissed: parsed.dismissed ?? {},
      submitted: parsed.submitted ?? {},
      sessionImpression: parsed.sessionImpression ?? null,
    };
  } catch {
    return INITIAL_POPUP_STATE;
  }
}

function writeSnapshot(state: PopupStorageState): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(POPUP_STORAGE_KEY, JSON.stringify(state));
  } catch {
  }
}

let cachedClient: PopupStorageState | null = null;

function getClientSnapshot(): PopupStorageState {
  if (cachedClient) return cachedClient;
  cachedClient = readSnapshot();
  if (typeof window !== "undefined") {
    try {
      let id = window.sessionStorage.getItem(SESSION_KEY);
      if (!id) {
        id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
        window.sessionStorage.setItem(SESSION_KEY, id);
      }
    } catch {
    }
  }
  return cachedClient;
}

function getServerSnapshot(): PopupStorageState {
  return INITIAL_POPUP_STATE;
}

const subscribers = new Set<() => void>();

function subscribe(notify: () => void): () => void {
  subscribers.add(notify);
  return () => {
    subscribers.delete(notify);
  };
}

function invalidate(): void {
  cachedClient = null;
  subscribers.forEach((fn) => fn());
}

function getSessionImpression(): PopupId | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.sessionStorage.getItem(SESSION_IMPRESSION_KEY);
    return raw ? (raw as PopupId) : null;
  } catch {
    return null;
  }
}

function setSessionImpression(id: PopupId | null): void {
  if (typeof window === "undefined") return;
  try {
    if (id) {
      window.sessionStorage.setItem(SESSION_IMPRESSION_KEY, id);
    } else {
      window.sessionStorage.removeItem(SESSION_IMPRESSION_KEY);
    }
  } catch {
  }
}

export interface PopupStateActions {
  readonly markDismissed: (id: PopupId) => void;
  readonly markSubmitted: (id: PopupId) => void;
  readonly markImpression: (id: PopupId) => void;
  readonly hasImpressionThisSession: () => boolean;
  readonly getDismissedAt: (id: PopupId) => number | undefined;
  readonly getSubmittedAt: (id: PopupId) => number | undefined;
  readonly reset: () => void;
}

export function usePopupState(): {
  state: PopupStorageState;
  actions: PopupStateActions;
} {
  const state = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  );

  const markDismissed = useCallback((id: PopupId) => {
    const current = getClientSnapshot();
    writeSnapshot({
      ...current,
      dismissed: { ...current.dismissed, [id]: Date.now() },
    });
    invalidate();
  }, []);

  const markSubmitted = useCallback((id: PopupId) => {
    const current = getClientSnapshot();
    writeSnapshot({
      ...current,
      submitted: { ...current.submitted, [id]: Date.now() },
    });
    invalidate();
  }, []);

  const markImpression = useCallback((id: PopupId) => {
    setSessionImpression(id);
  }, []);

  const hasImpressionThisSession = useCallback(() => {
    return getSessionImpression() !== null;
  }, []);

  const getDismissedAt = useCallback(
    (id: PopupId) => state.dismissed[id],
    [state.dismissed]
  );

  const getSubmittedAt = useCallback(
    (id: PopupId) => state.submitted[id],
    [state.submitted]
  );

  const reset = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        window.localStorage.removeItem(POPUP_STORAGE_KEY);
        window.sessionStorage.removeItem(SESSION_IMPRESSION_KEY);
      } catch {
      }
    }
    invalidate();
  }, []);

  return {
    state,
    actions: {
      markDismissed,
      markSubmitted,
      markImpression,
      hasImpressionThisSession,
      getDismissedAt,
      getSubmittedAt,
      reset,
    },
  };
}
