import { type ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

export function GlassCard({ children, className = "", dark = false }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 md:p-8 lg:p-10 ${dark ? "glass-card-dark" : "glass-card"} ${className}`}
    >
      {children}
    </div>
  );
}
