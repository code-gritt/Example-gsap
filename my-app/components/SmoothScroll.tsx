"use client";

import Lenis from "@studio-freight/lenis";
import { ReactNode, createContext, useContext, useLayoutEffect } from "react";

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => {
  return useContext(LenisContext);
};

export function SmoothScroll({ children }: { children: ReactNode }) {
  const lenis = new Lenis({
    duration: 3,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    touchMultiplier: 2,
  });

  useLayoutEffect(() => {
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}
