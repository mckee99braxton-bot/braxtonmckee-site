"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type GoogleAnalyticsProps = {
  measurementId: string;
};

function sendEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params ?? {});
}

function eventNameForLink(link: HTMLAnchorElement) {
  const href = link.href;

  if (href.includes("linkedin.com")) {
    return "linkedin_click";
  }

  try {
    const url = new URL(href);

    if (url.pathname.startsWith("/writing")) {
      return "blog_cta_click";
    }

    if (url.pathname.startsWith("/journey")) {
      return "journey_nav_click";
    }
  } catch {
    return null;
  }

  return null;
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.gtag !== "function") {
      return;
    }

    const queryString = searchParams.toString();
    const pagePath = queryString ? `${pathname}?${queryString}` : pathname;

    window.gtag("config", measurementId, {
      page_path: pagePath,
    });
  }, [measurementId, pathname, searchParams]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;

      if (!(target instanceof Element)) {
        return;
      }

      const link = target.closest("a");

      if (!(link instanceof HTMLAnchorElement)) {
        return;
      }

      const eventName = eventNameForLink(link);

      if (!eventName) {
        return;
      }

      sendEvent(eventName, {
        link_text: link.textContent?.trim() ?? "",
        link_url: link.href,
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
