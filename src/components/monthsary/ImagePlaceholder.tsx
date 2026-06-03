"use client";

import Image from "next/image";
import { useState } from "react";

type ImagePlaceholderProps = {
  /** Display label shown on the placeholder */
  label: string;
  /** File path — replace in src/config/images.ts */
  imagePath: string;
  variant?: "hero" | "portrait" | "landscape" | "square" | "scrapbook";
  className?: string;
  gradient?: string;
  priority?: boolean;
};

const VARIANTS = {
  hero: "min-h-screen w-full",
  portrait: "aspect-[4/5] w-full",
  landscape: "aspect-[16/10] w-full",
  square: "aspect-square w-full",
  scrapbook: "aspect-[4/5] w-full max-w-[220px]",
};

const DEFAULT_GRADIENTS: Record<string, string> = {
  hero: "from-[#3d2430] via-[#2a1f24] to-[#1a1218]",
  portrait: "from-rose-light via-rose to-rose-deep",
  landscape: "from-[#fde8d0] via-[#f5c896] to-gold",
  square: "from-[#d4e8f5] via-[#a8cce8] to-[#7eb3d4]",
  scrapbook: "from-[#f5e6d3] via-[#e8d0b0] to-gold",
};

export function ImagePlaceholder({
  label,
  imagePath,
  variant = "portrait",
  className = "",
  gradient,
  priority = false,
}: ImagePlaceholderProps) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const grad = gradient ?? DEFAULT_GRADIENTS[variant];

  const showPlaceholder = failed || !loaded;

  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-xl ${VARIANTS[variant]} ${className}`}
    >
      {/* Attempt to load real image — hidden until successful */}
      {!failed && (
        <Image
          src={imagePath}
          alt={label}
          fill
          className={`object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          priority={priority}
          sizes={
            variant === "hero"
              ? "100vw"
              : variant === "scrapbook"
                ? "220px"
                : "(max-width: 768px) 100vw, 50vw"
          }
        />
      )}

      {/* Placeholder overlay — visible until real image loads */}
      {showPlaceholder && (
        <div
          className={`placeholder-shimmer absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${grad} p-6 text-center`}
        >
          <span className="display-heading text-xl italic text-warm/70 md:text-2xl">
            {label}
          </span>
          <span className="rounded-full bg-white/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-warm/60">
            Replace: {imagePath}
          </span>
        </div>
      )}
    </div>
  );
}
