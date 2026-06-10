"use client";

import { useRef, useState } from "react";

export default function CopyButton({
  value,
  label,
  className = "",
}: {
  value: string;
  label?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      /* clipboard blocked — fail quietly, mailto still works */
    }
    setDone(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setDone(false), 1600);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${value}`}
      className={className}
      data-done={done}
    >
      {done ? "copied ✓" : (label ?? value)}
    </button>
  );
}
