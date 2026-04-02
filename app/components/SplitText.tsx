"use client";
import { useEffect, useState } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function SplitText({ text = "", className = "", delay = 80 }: SplitTextProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const letters = text.split("");

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {letters.map((letter, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: visible ? 1 : 0,
            transform: visible ? "translate3d(0,0,0)" : "translate3d(0,50px,0)",
            transition: `opacity 0.5s ease ${i * delay}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${i * delay}ms`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}
