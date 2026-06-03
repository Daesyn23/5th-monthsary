"use client";

import { images } from "@/config/images";
import { GlassCard } from "../GlassCard";
import { ImagePlaceholder } from "../ImagePlaceholder";

export function PromiseSection() {
  return (
    <section id="promise" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="reveal mb-12">
          <ImagePlaceholder
            label="Promise Photo"
            imagePath={images.promise}
            variant="portrait"
            className="mx-auto max-w-md"
          />
        </div>
        <div className="reveal">
          <GlassCard className="text-left md:text-center">
            <span className="section-label mb-4 block">07 — My Promise</span>
            <p className="message-text mb-5">
              Thank you for these amazing 5 months, loveey. Thank you for
              choosing me every day and for loving me in your own special way.
            </p>
            <p className="message-text display-heading text-xl italic text-rose-deep md:text-2xl">
              I promise na pipiliin kita araw-araw at mamahalin kita sa lahat ng
              kaya ko.
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
