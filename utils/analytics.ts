// Google Analytics 4 utility functions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
// Note: The Google tag is already loaded in index.html, so this function
// is mainly for ensuring gtag is available and tracking page views
export const initGA = (measurementId: string) => {
  if (typeof window === 'undefined' || !measurementId) return;

  // gtag should already be loaded from index.html, but ensure it's available
  if (!window.gtag) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
  }

  // Track initial page view
  if (window.gtag) {
    window.gtag('config', measurementId, {
      page_path: window.location.pathname,
    });
  }
};

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID || '', {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

