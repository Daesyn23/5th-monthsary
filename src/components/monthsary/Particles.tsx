"use client";

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 5) % 95}%`,
  size: 2 + (i % 4),
  duration: 12 + (i % 8) * 2,
  delay: -(i * 1.3),
  opacity: 0.15 + (i % 5) * 0.05,
}));

export function Particles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="particle absolute bottom-0 rounded-full bg-rose"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
