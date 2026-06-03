"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { adventureLabels, images } from "@/config/images";
import { GlassCard } from "../GlassCard";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

const TILTS = [
  "scrapbook-tilt-1",
  "scrapbook-tilt-2",
  "scrapbook-tilt-3",
  "scrapbook-tilt-4",
];

export function AdventuresSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrapbookRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!scrapbookRef.current || !sectionRef.current) return;

    const photos = scrapbookRef.current.querySelectorAll(".scrapbook-photo");
    gsap.from(photos, {
      opacity: 0,
      scale: 0.85,
      rotation: () => gsap.utils.random(-8, 8),
      duration: 0.8,
      stagger: 0.15,
      ease: "back.out(1.4)",
      scrollTrigger: {
        trigger: scrapbookRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="adventures"
      className="relative overflow-hidden bg-gradient-to-br from-[#d4e8f5]/30 via-cream to-rose-light/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          ref={scrapbookRef}
          className="mb-16 flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {images.adventures.map((path, i) => (
            <div
              key={path}
              className={`scrapbook-photo ${TILTS[i % TILTS.length]} relative aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-2xl shadow-2xl transition-transform hover:scale-105 hover:rotate-0`}
            >
              <Image
                src={path}
                alt={adventureLabels[i]}
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-warm/75 to-transparent p-3 pt-10">
                <span className="text-xs font-medium tracking-wide text-cream">
                  {adventureLabels[i]}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mx-auto max-w-3xl">
          <GlassCard>
            <span className="section-label mb-4 block">05 — Adventures ✈️</span>
            <p className="message-text mb-5">
              I can&apos;t wait din sa mga susunod nating adventures. Yung
              Mindoro trip natin, Laiya trip, Cavite, Batangas, at yung marami
              pang places na hindi pa natin napupuntahan.
            </p>
            <p className="message-text">
              Ang dami pa nating pwedeng i-explore, ang dami pa nating pwedeng
              puntahan, at excited ako maranasan lahat ng yun kasama ka. Kahit
              simpleng gala lang o spontaneous trip, basta ikaw kasama ko, masaya
              na ako.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
