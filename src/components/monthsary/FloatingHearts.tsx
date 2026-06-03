"use client";

const HEARTS = [
  { top: "8%", left: "6%", size: "4rem", delay: "0s", opacity: 0.12 },
  { top: "18%", left: "88%", size: "2.5rem", delay: "-2s", opacity: 0.1 },
  { top: "42%", left: "4%", size: "3rem", delay: "-4s", opacity: 0.08 },
  { top: "65%", left: "92%", size: "5rem", delay: "-1s", opacity: 0.14 },
  { top: "78%", left: "12%", size: "2rem", delay: "-3s", opacity: 0.1 },
  { top: "90%", left: "78%", size: "3.5rem", delay: "-5s", opacity: 0.11 },
];

export function FloatingHearts() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden" aria-hidden="true">
      {HEARTS.map((heart, i) => (
        <span
          key={i}
          className="floating-heart absolute text-rose-deep"
          style={{
            top: heart.top,
            left: heart.left,
            fontSize: heart.size,
            opacity: heart.opacity,
            animationDelay: heart.delay,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
