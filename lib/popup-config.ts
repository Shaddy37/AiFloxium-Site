export type PopupId =
  | "scroll-lead-magnet"
  | "exit-intent-call"
  | "calendly-modal";

export type PopupTriggerType = "scroll" | "exit-intent" | "click";

export type PopupChannel = "auto" | "manual";

export interface PopupTriggerConfig {
  readonly scrollDepthPct?: number;
  readonly minTimeOnPageMs?: number;
  readonly minScrollDistancePct?: number;
}

export interface PopupCopy {
  readonly eyebrow: string;
  readonly headline: string;
  readonly subhead: string;
  readonly ctaLabel: string;
  readonly declineLabel: string;
  readonly microcopy: string;
  readonly successHeadline: string;
  readonly successBody: string;
}

export interface PopupDefinition {
  readonly id: PopupId;
  readonly type: "form" | "redirect" | "modal";
  readonly trigger: PopupTriggerType;
  readonly triggerConfig: PopupTriggerConfig;
  readonly cooldownDays: number;
  readonly permanentSuppressAfterSubmit: boolean;
  readonly excludePathPatterns: readonly RegExp[];
  readonly copy: PopupCopy;
  readonly redirectUrl?: string;
}

const DAY_MS = 24 * 60 * 60 * 1000;

export const EXCLUDED_PATH_PATTERNS: readonly RegExp[] = [
  /^\/contact(\/|$)/,
  /^\/book(\/|$)/,
  /^\/book-call(\/|$)/,
  /^\/tools\/[^/]+\/embed(\/|$)/,
  /^\/api(\/|$)/,
];

const SCROLL_LEAD_MAGNET: PopupDefinition = {
  id: "scroll-lead-magnet",
  type: "form",
  trigger: "scroll",
  triggerConfig: {
    scrollDepthPct: 50,
    minTimeOnPageMs: 30_000,
  },
  cooldownDays: 30,
  permanentSuppressAfterSubmit: true,
  excludePathPatterns: [],
  redirectUrl:
    "https://shadabautomate.notion.site/The-AI-Automation-Audit-Interactive-Experience-3a404b8c385046e291ff33bc56eb334c",
  copy: {
    eyebrow: "Free AI Automation Audit",
    headline: "See exactly where your ops are leaking time and money.",
    subhead:
      "30 checkpoints across leads, voice, docs, and infrastructure. Built from 50+ production deployments.",
    ctaLabel: "Unlock the audit",
    declineLabel: "No thanks, I'll figure it out myself",
    microcopy: "No spam. Unsubscribe anytime. Used by 800+ founders.",
    successHeadline: "Opening your audit...",
    successBody: "Redirecting you to the full interactive experience.",
  },
};

const EXIT_INTENT_CALL: PopupDefinition = {
  id: "exit-intent-call",
  type: "redirect",
  trigger: "exit-intent",
  triggerConfig: {
    minScrollDistancePct: 25,
  },
  cooldownDays: 14,
  permanentSuppressAfterSubmit: false,
  excludePathPatterns: [],
  copy: {
    eyebrow: "Last thought before you go",
    headline: "One 30-minute audit. Zero commitment.",
    subhead:
      "We'll map your top 3 automation wins, line up the ROI math, and you keep the notes whether we work together or not.",
    ctaLabel: "Book my 30-min audit",
    declineLabel: "Maybe later",
    microcopy: "Direct call with Shadab. No SDRs, no pitch decks.",
    successHeadline: "Opening your calendar...",
    successBody: "Booking takes about 30 seconds.",
  },
};

const CALENDLY_MODAL: PopupDefinition = {
  id: "calendly-modal",
  type: "modal",
  trigger: "click",
  triggerConfig: {},
  cooldownDays: 0,
  permanentSuppressAfterSubmit: false,
  excludePathPatterns: [],
  copy: {
    eyebrow: "Free 30-Min Process Audit",
    headline: "Walk us through your messiest workflow.",
    subhead:
      "We'll show you what an automated version looks like — live, in the call.",
    ctaLabel: "Confirm booking",
    declineLabel: "Close",
    microcopy: "Direct call with Shadab. No SDRs, no pitch decks.",
    successHeadline: "Booking confirmed.",
    successBody: "Check your email for the calendar invite.",
  },
};

export const POPUP_DEFINITIONS: Readonly<Record<PopupId, PopupDefinition>> = {
  "scroll-lead-magnet": SCROLL_LEAD_MAGNET,
  "exit-intent-call": EXIT_INTENT_CALL,
  "calendly-modal": CALENDLY_MODAL,
};

export const AUTO_POPUP_IDS: readonly PopupId[] = [
  "scroll-lead-magnet",
  "exit-intent-call",
];

export function getPopupDefinition(id: PopupId): PopupDefinition {
  return POPUP_DEFINITIONS[id];
}

export function isPathExcluded(pathname: string): boolean {
  return EXCLUDED_PATH_PATTERNS.some((pattern) => pattern.test(pathname));
}

export function isPopupEligibleForPath(
  popup: PopupDefinition,
  pathname: string
): boolean {
  if (popup.excludePathPatterns.length === 0) return true;
  return !popup.excludePathPatterns.some((pattern) => pattern.test(pathname));
}

export function cooldownRemainingMs(
  dismissedAt: number | undefined,
  cooldownDays: number
): number {
  if (!dismissedAt || cooldownDays <= 0) return 0;
  const elapsed = Date.now() - dismissedAt;
  const cooldownMs = cooldownDays * DAY_MS;
  return Math.max(0, cooldownMs - elapsed);
}

export const POPUP_STORAGE_KEY = "aifloxium_popup_state_v1";

export interface PopupStorageState {
  readonly dismissed: Readonly<Partial<Record<PopupId, number>>>;
  readonly submitted: Readonly<Partial<Record<PopupId, number>>>;
  readonly sessionImpression: PopupId | null;
}

export const INITIAL_POPUP_STATE: PopupStorageState = {
  dismissed: {},
  submitted: {},
  sessionImpression: null,
};

export const SESSION_KEY = "aifloxium_popup_session_v1";
