export interface LeadMagnetPayload {
  readonly email: string;
  readonly source: string;
  readonly pagePath: string;
  readonly referrer?: string;
}

export interface LeadMagnetResult {
  readonly success: boolean;
  readonly demoMode?: boolean;
  readonly error?: string;
}

export async function submitLeadMagnet(
  payload: LeadMagnetPayload
): Promise<LeadMagnetResult> {
  try {
    const response = await fetch("/api/lead-magnet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
      };
      return {
        success: false,
        error: data.error ?? "Submission failed",
      };
    }

    const data = (await response.json()) as LeadMagnetResult;
    return { success: true, demoMode: data.demoMode };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Network error",
    };
  }
}
