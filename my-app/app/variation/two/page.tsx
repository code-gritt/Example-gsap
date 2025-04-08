"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Prompt } from "next/font/google";
import { useEffect } from "react";
import { SmoothScroll } from "../../../components/SmoothScroll";
import React from "react";

const prompt = Prompt({
  weight: "600",
  subsets: ["latin"],
});

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      ".dot",
      {
        scale: 0,
        y: "100%",
      },
      {
        scale: 1,
        y: "-50%",
        ease: "none",
      }
    )
      .to("h1", { x: "-100vw", xPercent: -100, color: "white" }, 0)
      .set("body", { backgroundColor: "#113059" });
  }, []);

  return (
    <SmoothScroll>
      <main className="relative min-h-screen overflow-x-hidden bg-[#ffffff] text-white">
        <div className="full hero h-screen w-full overflow-hidden">
          <div className="dot absolute left-1/2 top-1/2 h-[142vmax] w-[142vmax] -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-[#113059]"></div>
          <h1
            className={`${prompt.className} absolute left-full top-1/2 m-0 -translate-y-1/2 whitespace-nowrap text-[8vmin] font-bold text-[#113059]`}
          >
            FINANCIAL PLANNING
          </h1>
        </div>
      </main>
    </SmoothScroll>
  );
}
