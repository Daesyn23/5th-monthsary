"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { images } from "@/config/images";
import { GlassCard } from "../GlassCard";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

/** Per-photo tilt + size — larger polaroids, light z layering */
const PHOTO_STYLES = [
  { rotate: -8, size: "w-36 sm:w-44 md:w-48" },
  { rotate: 6, size: "w-36 sm:w-44 md:w-48" },
  { rotate: -5, size: "w-36 sm:w-44 md:w-48" },
  { rotate: 7, size: "w-40 sm:w-48 md:w-52" },
  { rotate: -6, size: "w-40 sm:w-48 md:w-52" },
  { rotate: 5, size: "w-36 sm:w-44 md:w-48" },
  { rotate: -7, size: "w-36 sm:w-44 md:w-48" },
  { rotate: 8, size: "w-40 sm:w-48 md:w-52" },
  { rotate: -4, size: "w-36 sm:w-44 md:w-48" },
  { rotate: 6, size: "w-40 sm:w-48 md:w-52" },
  { rotate: -7, size: "w-36 sm:w-44 md:w-48" },
] as const;

/** Staggered rows — minimal overlap via negative spacing */
const PHOTO_ROWS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10],
] as const;

export function BahayBahayanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!bgRef.current || !sectionRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    if (galleryRef.current) {
      const photos = galleryRef.current.querySelectorAll(".polaroid");
      gsap.from(photos, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.5)",
        immediateRender: false,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  const gallery = images.bahayBahayanGallery;

  return (
    <section
      ref={sectionRef}
      id="bahay-bahayan"
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div ref={bgRef} className="absolute inset-0 -top-[10%] h-[120%]">
        <ImagePlaceholder
          label="Bahay-Bahayan"
          imagePath={images.bahayBahayanBackground}
          variant="hero"
          gradient="from-[#f5e6d3] via-[#e8d0b0] to-gold"
          className="h-full rounded-none"
        />
        <div className="absolute inset-0 bg-cream/75" />
      </div>

      <div
        className="pointer-events-none absolute left-[5%] top-[20%] h-48 w-48 rounded-full bg-rose-light/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-[15%] right-[8%] h-56 w-56 rounded-full bg-gold/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto mb-14 max-w-3xl">
          <GlassCard>
            <span className="section-label mb-4 block">06 — Bahay-Bahayan 🏠</span>
            <p className="message-text mb-5">
              And loveey, I can&apos;t wait na madagdagan pa yung bahay-bahayan
              series natin. 🥹❤️ Sobrang saya ko every time na pinag-uusapan
              natin yung future natin together.
            </p>
            <p className="message-text">
              Nakaka-excite isipin na one day, hindi na lang siya
              bahay-bahayan. Hopefully, eventually, magiging totoo na siya at
              nasa iisang bahay na tayo, gigising at matutulog sa tabi ng
              isa&apos;t isa, sharing our everyday lives together.
            </p>
          </GlassCard>
        </div>

        <div
          ref={galleryRef}
          className="scrapbook-board mx-auto flex max-w-5xl flex-col items-center py-4"
        >
          {PHOTO_ROWS.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`scrapbook-row flex flex-wrap items-end justify-center ${
                rowIndex > 0 ? "-mt-5 sm:-mt-7 md:-mt-9" : ""
              } ${rowIndex % 2 === 1 ? "md:translate-x-5" : "md:-translate-x-3"} ${
                row.length === 2 ? "gap-0" : "gap-0"
              }`}
            >
              {row.map((photoIndex, colIndex) => {
                const path = gallery[photoIndex];
                const style = PHOTO_STYLES[photoIndex];
                const overlap =
                  colIndex > 0
                    ? row.length === 2
                      ? "-ml-4 sm:-ml-6 md:-ml-8"
                      : "-ml-4 sm:-ml-6 md:-ml-8"
                    : "";
                const nudge =
                  colIndex % 2 === 0 ? "mb-0" : "mb-2 sm:mb-3";

                return (
                  <div
                    key={path}
                    className={`polaroid polaroid-scatter group relative shrink-0 ${style.size} ${overlap} ${nudge} cursor-default opacity-100 transition-all duration-500 hover:z-40 hover:scale-110`}
                    style={{
                      transform: `rotate(${style.rotate}deg)`,
                      zIndex: rowIndex * 3 + colIndex + 1,
                    }}
                  >
                    <div className="polaroid-frame relative overflow-hidden bg-white p-2.5 pb-6 shadow-[0_10px_32px_rgba(42,31,36,0.2)] sm:p-3 sm:pb-8">
                      <div
                        className={`polaroid-tape ${
                          photoIndex % 3 === 0
                            ? "polaroid-tape-left"
                            : photoIndex % 3 === 1
                              ? "polaroid-tape-right"
                              : ""
                        }`}
                        aria-hidden="true"
                      />
                      <div className="relative aspect-[3/4] w-full overflow-hidden">
                        <Image
                          src={path}
                          alt=""
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 144px, 208px"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
