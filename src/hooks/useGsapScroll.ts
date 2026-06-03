"use client";

import { useEffect } from "react";
import { gsap, ScrollTrigger, registerGsapPlugins } from "@/lib/gsap";

export function useRevealOnScroll(selector = ".reveal") {
  useEffect(() => {
    registerGsapPlugins();

    const elements = gsap.utils.toArray<HTMLElement>(selector);
    const triggers: ScrollTrigger[] = [];

    elements.forEach((el) => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, [selector]);
}

export function useParallax(
  ref: React.RefObject<HTMLElement | null>,
  speed = 0.3
) {
  useEffect(() => {
    registerGsapPlugins();
    const el = ref.current;
    if (!el) return;

    const tween = gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
    };
  }, [ref, speed]);
}
