import type { PopupId } from "@/lib/popup-config";

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params: Record<string, unknown>
    ) => void;
  }
}

export type PopupEventName =
  | "popup_view"
  | "popup_dismiss"
  | "popup_submit"
  | "popup_submit_success"
  | "popup_submit_error"
  | "calendly_open";

export interface PopupEventParams {
  readonly popup_id: PopupId;
  readonly page_path: string;
  readonly dismiss_method?: "close_button" | "outside_click" | "escape_key" | "decline_link";
  readonly time_visible_ms?: number;
  readonly form_fields?: number;
  readonly source_popup_id?: PopupId;
  readonly error_message?: string;
}

export function trackPopupEvent(
  eventName: PopupEventName,
  params: PopupEventParams
): void {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", eventName, {
        ...params,
        send_page_view: false,
      });
    } catch {
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.info(`[popup-analytics] ${eventName}`, params);
  }
}
