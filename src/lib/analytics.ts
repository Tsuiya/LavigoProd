// Utility library for handling Data Layer pushes and analytic events.
// Supports Google Tag Manager, Google Analytics 4, and Facebook Pixel.

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (command: string, action: string, params?: Record<string, unknown>) => void;
    fbq?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Pushes a generic event to the GTM/GA4 Data Layer.
 * If dataLayer isn't loaded yet, it initializes it.
 */
export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      
      const payload = {
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params,
      };
      
      window.dataLayer.push(payload);
      
      // Fallback: If GA4 gtag or FB Pixel are loaded directly (not via GTM), trigger them as well
      if (typeof window.gtag === "function") {
        window.gtag("event", eventName, params);
      }
      
      if (typeof window.fbq === "function") {
        // Map standard events for Facebook Pixel
        if (eventName === "contact_form_submit") {
          window.fbq("track", "Lead", {
            content_name: params.lead_service,
            value: 0.00,
            currency: "BRL"
          });
        } else if (eventName === "book_service_click") {
          window.fbq("track", "FindLocation", { // map to find location or custom
            content_category: params.service_id
          });
        } else if (eventName === "page_view") {
          window.fbq("track", "PageView");
        } else {
          window.fbq("trackCustom", eventName, params);
        }
      }
    }
  } catch (err) {
    console.error("Error pushing event to dataLayer:", err);
  }
}

/**
 * Tracks a page view event.
 */
export function trackPageView(url: string, title?: string) {
  trackEvent("page_view", {
    page_path: url,
    page_title: title || (typeof document !== "undefined" ? document.title : ""),
    page_location: typeof window !== "undefined" ? window.location.href : "",
  });
}

/**
 * Tracks a WhatsApp contact click.
 */
export function trackWhatsAppClick(location: string, destinationUrl?: string) {
  trackEvent("whatsapp_click", {
    click_location: location, // e.g. "header", "footer", "cta-final", "contact-page"
    destination: destinationUrl || "https://wa.me/5516991609339",
  });
}

/**
 * Tracks when a user clicks the button to book a specific service.
 */
export function trackBookServiceClick(serviceId: string, serviceTitle: string) {
  trackEvent("book_service_click", {
    service_id: serviceId,
    service_title: serviceTitle,
  });
}

/**
 * Tracks a contact form submission (lead generation).
 */
export function trackContactFormSubmit(service: string, date: string, name: string) {
  trackEvent("contact_form_submit", {
    lead_service: service,
    lead_date: date,
    lead_method: "WhatsApp Redirect",
    // We do NOT send full PII (like email/phone) to general Data Layer unless encrypted,
    // but sending the name (first name) or service is common and safe.
    lead_name_length: name.length,
  });
}

/**
 * Tracks lightbox / portfolio item views.
 */
export function trackViewPortfolioItem(photoSrc: string, photoTitle: string, category: string) {
  trackEvent("view_portfolio_item", {
    item_src: photoSrc,
    item_title: photoTitle,
    item_category: category,
  });
}
