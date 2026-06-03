"use client";

import { useEffect, useRef } from "react";
import { images } from "@/config/images";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();

    if (bgRef.current && sectionRef.current) {
      gsap.to(bgRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div ref={bgRef} className="absolute inset-0 -top-[10%] h-[120%]">
        <ImagePlaceholder
          label="Hero Background"
          imagePath={images.heroBackground}
          variant="hero"
          priority
          className="h-full rounded-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm/60 via-warm/40 to-warm/70" />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 px-6 text-center text-cream"
      >
        <p className="section-label mb-6 text-rose-light/80">For my Loveey</p>
        <h1 className="display-heading mb-4 text-5xl md:text-7xl lg:text-8xl">
          Happy 5th Monthsary, Loveey ❤️
        </h1>
        <p className="mx-auto max-w-xl text-lg font-light italic text-rose-light/90 md:text-xl">
          A little website dedicated to the most amazing person in my life.
        </p>
        <div className="mt-16 flex flex-col items-center gap-3 opacity-60">
          <span className="text-sm tracking-wide italic opacity-80">
            Scroll mo lovey hihi :&gt;&gt;
          </span>
          <div className="h-12 w-px bg-gradient-to-b from-rose-light to-transparent" />
        </div>
      </div>
    </section>
  );
}
