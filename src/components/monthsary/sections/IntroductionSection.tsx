"use client";

import { images } from "@/config/images";
import { GlassCard } from "../GlassCard";
import { ImagePlaceholder } from "../ImagePlaceholder";

export function IntroductionSection() {
  return (
    <section id="introduction" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="reveal">
          <ImagePlaceholder
            label="Introduction Photo"
            imagePath={images.introduction}
            variant="portrait"
          />
        </div>
        <div className="reveal">
          <GlassCard>
            <span className="section-label mb-4 block">01 — Introduction</span>
            <p className="message-text">
              It may be our 5th month pa lang, pero for me parang ang tagal na
              rin natin. Ang dami na nating memories na nabuo together and ang
              dami ko pang gustong maranasan kasama ka.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
