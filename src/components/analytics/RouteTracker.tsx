"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView, trackWhatsAppClick } from "@/lib/analytics";

function RouteTrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Construct full path with search parameters if any
    const searchString = searchParams ? searchParams.toString() : "";
    const url = `${pathname}${searchString ? `?${searchString}` : ""}`;
    
    // Dispatch page_view event on route change
    trackPageView(url);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (anchor && anchor.href && (anchor.href.includes("wa.me") || anchor.href.includes("whatsapp.com"))) {
        // Determine the location of the click based on closest container
        let clickLocation = "unknown";
        if (anchor.closest("header") || anchor.closest("#mainHeader")) {
          clickLocation = "header";
        } else if (anchor.closest("footer")) {
          clickLocation = "footer";
        } else if (anchor.closest("#cta-final") || anchor.closest(".cta-container")) {
          clickLocation = "cta-final";
        } else if (anchor.closest(".page-hero")) {
          clickLocation = "page-hero";
        } else if (pathname === "/contato") {
          clickLocation = "contact-page";
        } else {
          clickLocation = pathname || "other";
        }
        
        trackWhatsAppClick(clickLocation, anchor.href);
      }
    };

    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [pathname]);

  return null;
}

export default function RouteTracker() {
  return (
    <Suspense fallback={null}>
      <RouteTrackerContent />
    </Suspense>
  );
}
