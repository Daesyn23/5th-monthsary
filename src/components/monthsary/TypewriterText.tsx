"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
  start?: boolean;
};

export function TypewriterText({
  text,
  speed = 45,
  className = "",
  start = true,
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!start) return;

    indexRef.current = 0;
    setDisplayed("");
    setDone(false);

    const interval = setInterval(() => {
      indexRef.current += 1;
      if (indexRef.current <= text.length) {
        setDisplayed(text.slice(0, indexRef.current));
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return (
    <span className={className}>
      {displayed}
      {!done && start && <span className="typewriter-cursor" aria-hidden="true" />}
    </span>
  );
}
