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

export default function Home() {
  useEffect(() => {
    // Register plugin inside useEffect to ensure it only runs on client
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "+=800%", // Significantly increased for much slower animation
        scrub: 0, // Increased smoothing factor for smoother movement
        pin: true,
        markers: false, // Set to true for debugging
      },
    });

    tl.fromTo(
      ".flat-bottom-circle",
      { scale: 0, y: "100%" },
      {
        scale: 1,
        y: "-50%",
        ease: "power2.inOut", // Changed to power2 for smoother easing
        duration: 1.5, // Increased duration for slower animation
      }
    )
      .to(
        "h1",
        {
          xPercent: -100,
          color: "white",
          ease: "power2.inOut",
          duration: 0.8, // Increased for slower text movement
        },
        0.3 // Delay the text animation slightly
      )
      .set("body", { backgroundColor: "#113059" }, 0.8); // Delayed background change
  }, []);

  return (
    <SmoothScroll>
      <div className="fixed-bg"></div>
      <main className="relative min-h-screen overflow-x-hidden bg-transparent text-white">
        <div className="full hero h-screen w-full overflow-hidden">
          <div className="z-0 flat-bottom-circle absolute left-1/2 top-1/2 h-[142vmax] w-[200vmax] -translate-x-1/2 -translate-y-1/2 scale-0 bg-[#ffc100]">
            {/* This div creates the flat-bottom circle effect */}
          </div>
          <h1
            className={`${prompt.className} z-10 absolute left-full top-1/2 m-0 -translate-y-1/2 whitespace-nowrap text-[8vmin] font-bold text-[#113059]`}
          >
            FINANCIAL PLANNING
          </h1>
        </div>
      </main>
    </SmoothScroll>
  );
}
