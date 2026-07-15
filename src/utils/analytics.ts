type EventName = 
  | "book_strategy_call"
  | "journal_signup"
  | "contact_submission"
  | "external_link_click"
  | "video_click"
  | "case_study_click";

/**
 * Clean integration point for Analytics (Google Analytics, Plausible, Microsoft Clarity).
 * 
 * @param eventName The standard event name
 * @param properties Additional context (e.g. location, url)
 */
export const trackEvent = (eventName: EventName, properties?: Record<string, string | number | boolean>) => {
  // In production, this would map to window.gtag or plausible()
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics Event] ${eventName}`, properties || "");
  }
  
  // Example integration points for when tracking is implemented:
  // if (typeof window !== "undefined" && (window as any).plausible) {
  //   (window as any).plausible(eventName, { props: properties });
  // }
};
