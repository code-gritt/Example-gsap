"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Prompt } from "next/font/google";
import { useEffect } from "react";
import { SmoothScroll } from "../../../components/SmoothScroll";
import React from "react";

const prompt = Prompt({
  weight: "800",
  subsets: ["latin"],
});

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=1600%",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    tl.fromTo(
      ".flat-bottom-circle",
      { scale: 0, y: "100%" },
      {
        scale: 1,
        y: "-40%",
        ease: "none",
        duration: 2,
      }
    )
      .to(
        ".for-families",
        {
          x: "-100vw",
          opacity: 0,
          ease: "none",
          duration: 2.5,
        },
        0
      )
      .to(
        ".and-foodies",
        {
          x: "100vw",
          opacity: 0,
          ease: "none",
          duration: 2.5,
        },
        0
      )
      .set("body", { backgroundColor: "#113059" }, 0.8);
  }, []);

  return (
    <SmoothScroll>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="squiggly">
            <feTurbulence
              baseFrequency="0.02"
              numOctaves="1"
              result="noise"
              seed="10"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" />
          </filter>
        </defs>
      </svg>
      <div className="fixed-bg"></div>
      <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
        <div className="full hero h-screen w-full overflow-hidden">
          <div className="z-20 flat-bottom-circle absolute left-1/2 top-1/2 h-[142vmax] w-[200vmax] -translate-x-1/2 -translate-y-1/2 scale-0 bg-[#ffc100]"></div>
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center space-y-0 text-[#113059]">
            <h2
              className={`${prompt.className} text-[23vmin] leading-[0.9] font-bold for-families squiggly-text`}
            >
              For Families
            </h2>
            <h2
              className={`${prompt.className} text-[23vmin] leading-[0.9] font-bold and-foodies squiggly-text`}
            >
              And Foodies
            </h2>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
