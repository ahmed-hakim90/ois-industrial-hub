import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  value: string; // e.g. "1,200+", "35", "20+"
  duration?: number;
  className?: string;
};

// Parses a display string like "1,200+" into { number: 1200, prefix: "", suffix: "+" }
function parseValue(v: string) {
  const match = v.match(/^([^\d-]*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: v, hasNumber: false };
  const prefix = match[1] ?? "";
  const raw = (match[2] ?? "").replace(/,/g, "");
  const suffix = match[3] ?? "";
  const number = Number.parseFloat(raw);
  if (Number.isNaN(number)) return { prefix: "", number: 0, suffix: v, hasNumber: false };
  return { prefix, number, suffix, hasNumber: true };
}

function format(n: number) {
  return Math.round(n).toLocaleString("en-US");
}

export function CountUp({ value, duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const { prefix, number, suffix, hasNumber } = parseValue(value);
  const [display, setDisplay] = useState(hasNumber ? "0" : value);

  useEffect(() => {
    if (!hasNumber) return;
    if (reduce || !inView) {
      if (reduce) setDisplay(format(number));
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(format(number * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, number, duration, hasNumber]);

  return (
    <span ref={ref} className={className}>
      {hasNumber ? `${prefix}${display}${suffix}` : value}
    </span>
  );
}
