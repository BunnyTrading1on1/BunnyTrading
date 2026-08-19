"use client";

import { useEffect, useRef, useState } from "react";

interface PhotoRevealProps {
  src: string;
  alt: string;
  focal?: string;
  aspect?: string;
}

export default function PhotoReveal({
  src,
  alt,
  focal = "center",
  aspect = "4 / 3",
}: PhotoRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`photo-reveal${visible ? " is-visible" : ""}`}
      style={{ aspectRatio: aspect }}
    >
      <div
        className="photo-reveal-img"
        role="img"
        aria-label={alt}
        style={{ backgroundImage: `url(${src})`, backgroundPosition: focal }}
      />
    </div>
  );
}
