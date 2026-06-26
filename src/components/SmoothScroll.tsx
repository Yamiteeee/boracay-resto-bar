"use client";

import { useEffect, ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // 1. Initialize Lenis directly bound to the root window view
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      autoResize: true,
    });

    // Make the instance globally visible for any custom event calls
    (window as any).lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 2. Global click observer to catch relative hash link clicks smoothly
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (!anchor) return;

      const href = anchor.getAttribute("href");

      // Intercept any local anchor links (e.g., href="#menu")
      if (href && href.startsWith("#")) {
        // If it's a home back-to-top hash link
        if (href === "#") {
          e.preventDefault();
          lenis.scrollTo(0, { duration: 1.2 });
          return;
        }

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();
          lenis.scrollTo(targetElement, {
            offset: -16, // Visual offset buffer from navbar headers
            duration: 1.2,
          });
        }
      }
    };

    window.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      lenis.destroy();
      window.removeEventListener("click", handleAnchorClick, { capture: true });
      (window as any).lenis = null;
    };
  }, []);

  return <>{children}</>;
}