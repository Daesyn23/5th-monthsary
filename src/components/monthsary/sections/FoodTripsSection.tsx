"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { foodTripLabels, images } from "@/config/images";
import { GlassCard } from "../GlassCard";
import { ImagePlaceholder } from "../ImagePlaceholder";
import { gsap, registerGsapPlugins } from "@/lib/gsap";

const GALLERY_LABELS = foodTripLabels;

export function FoodTripsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsapPlugins();
    if (!bgRef.current || !sectionRef.current) return;

    gsap.to(bgRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    if (galleryRef.current) {
      const photos = galleryRef.current.querySelectorAll(".food-photo");
      gsap.from(photos, {
        opacity: 0,
        y: 40,
        scale: 0.92,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="food-trips"
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div ref={bgRef} className="absolute inset-0 -top-[15%] h-[130%]">
        <ImagePlaceholder
          label="Tinatangi Café"
          imagePath={images.foodTripsBackground}
          variant="hero"
          gradient="from-[#fde8d0] via-[#f5c896] to-gold"
          className="h-full rounded-none"
        />
        <div className="absolute inset-0 bg-cream/55 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="reveal mx-auto mb-16 max-w-3xl">
          <GlassCard>
            <span className="section-label mb-4 block">04 — Food Trips 🍔🍜</span>
            <p className="message-text mb-5">
              And of course, cheers sa mga food trips natin, loveey! ❤️🍔🍜 Isa
              yan sa mga favorite things ko na ginagawa natin together.
            </p>
            <p className="message-text mb-5">
              Sobrang saya ko every time na may natitikman tayong bago or may
              nadidiscover tayong place na masarap kainan. Hindi lang naman
              pagkain yung gusto kong i-explore, gusto ko pang maka-experience
              ng maraming bagay kasama ka.
            </p>
            <p className="message-text">
              I can&apos;t wait na mas marami pa tayong matry na food and gumawa
              pa ng maraming memories together.
            </p>
          </GlassCard>
        </div>

        <div
          ref={galleryRef}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5"
        >
          {images.foodTripsGallery.map((path, i) => (
            <div
              key={path}
              className="food-photo group relative aspect-square overflow-hidden rounded-2xl shadow-lg ring-1 ring-white/50"
            >
              <Image
                src={path}
                alt={GALLERY_LABELS[i]}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-warm/70 to-transparent p-3 pt-8">
                <span className="text-xs font-medium tracking-wide text-cream">
                  {GALLERY_LABELS[i]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
