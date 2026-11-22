"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref + style object.
 * Element starts invisible, fades in when it enters the viewport.
 * No CSS class dependency — pure inline style, no flash.
 */
export function useFadeIn(delay = 0, threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
    willChange: "opacity, transform",
  };

  return { ref, style };
}
