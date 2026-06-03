"use client";

import { images } from "@/config/images";
import { GlassCard } from "../GlassCard";
import { ImagePlaceholder } from "../ImagePlaceholder";

export function AppreciationSection() {
  return (
    <section id="appreciation" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        <div className="reveal order-2 md:order-1">
          <GlassCard>
            <span className="section-label mb-4 block">03 — Appreciation</span>
            <p className="message-text mb-5">
              I want to say rin na I always appreciate you, loveey. Lahat ng
              efforts mo, mapa-big or small man yan, naaappreciate ko.
            </p>
            <p className="message-text">
              Thank you for your time, your care, your patience, and for always
              making me feel loved. Thank you for listening to my random kwentos,
              for making me laugh, and for always being there for me.
            </p>
          </GlassCard>
        </div>
        <div className="reveal order-1 md:order-2">
          <ImagePlaceholder
            label="Appreciation Photo"
            imagePath={images.appreciation}
            variant="portrait"
          />
        </div>
      </div>
    </section>
  );
}
