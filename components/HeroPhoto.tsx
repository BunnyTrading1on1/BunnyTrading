"use client";

import { useEffect, useRef } from "react";

interface HeroPhotoProps {
  image: string;
  focal?: string;
}

export default function HeroPhoto({ image, focal = "center 42%" }: HeroPhotoProps) {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const el = photoRef.current;
    if (!el) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        el.style.setProperty("--parallax-y", `${window.scrollY * 0.25}px`);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="hero-photo-wrap" aria-hidden="true">
      <div
        ref={photoRef}
        className="hero-photo"
        style={{ backgroundImage: `url(${image})`, backgroundPosition: focal }}
      />
      <div className="hero-scrim" />
    </div>
  );
}
