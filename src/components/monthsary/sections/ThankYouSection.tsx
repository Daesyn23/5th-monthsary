"use client";

import { images } from "@/config/images";
import { GlassCard } from "../GlassCard";
import { ImagePlaceholder } from "../ImagePlaceholder";

export function ThankYouSection() {
  return (
    <section
      id="thank-you"
      className="relative bg-rose-light/20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-12">
          <ImagePlaceholder
            label="Thank You Photo"
            imagePath={images.thankYou}
            variant="landscape"
          />
        </div>
        <div className="reveal mx-auto max-w-3xl">
          <GlassCard>
            <span className="section-label mb-4 block">02 — Thank You</span>
            <p className="message-text mb-5">
              First, I want to thank youuu for bearing with me. I know may times
              na sobrang OA ko, makulit, needy, clingy, at minsan emotional.
              Always remember na ganon ako kasi mahal na mahal kita.
            </p>
            <p className="message-text">
              Thank you for being patient with me and for always understanding
              me kahit minsan ang kulit kulit ko na. 🥹❤️
            </p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
