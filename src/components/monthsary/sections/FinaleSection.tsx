"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";
import { TypewriterText } from "../TypewriterText";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

function fireConfetti() {
  const duration = 3000;
  const end = Date.now() + duration;
  const colors = ["#e8a0b4", "#c76b8a", "#f5d5de", "#d4647a", "#ffffff"];

  const frame = () => {
    confetti({
      particleCount: 3,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors,
    });
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.6 },
    colors,
  });
  frame();
}

export function FinaleSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [typewriterStart, setTypewriterStart] = useState(false);
  const confettiFired = useRef(false);

  useEffect(() => {
    registerGsapPlugins();
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !confettiFired.current) {
          confettiFired.current = true;
          fireConfetti();
          setTypewriterStart(true);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(section);

    if (contentRef.current) {
      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        },
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="finale"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-24 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-warm via-[#3d2430] to-[#1a1218]" />

      {/* Decorative hearts */}
      <span className="floating-heart absolute left-[10%] top-[15%] text-6xl text-rose/20">
        ♥
      </span>
      <span className="floating-heart absolute bottom-[20%] right-[12%] text-8xl text-rose/15">
        ♥
      </span>

      <div ref={contentRef} className="relative z-10 max-w-2xl">
        <h2 className="display-heading mb-8 text-4xl text-rose-light md:text-6xl">
          Happy 5th Monthsary ulit, Loveey ❤️
        </h2>

        <p className="message-text mb-10 text-cream/85">
          Cheers to more food trips, more adventures, more bahay-bahayan series,
          more memories, and more love.
        </p>

        <p className="display-heading text-3xl italic text-rose-light md:text-5xl">
          <TypewriterText
            text="I love you so muchhh ❤️"
            speed={60}
            start={typewriterStart}
          />
        </p>
      </div>

      <footer className="relative z-10 mt-20 text-sm tracking-widest text-cream/50">
        Made with love by your Asawa :&gt;&gt;! ❤️❤️❤️
      </footer>
    </section>
  );
}
