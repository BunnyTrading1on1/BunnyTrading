"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Magnetic from "@/components/Magnetic";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/position-sizing", label: "Sizing Tool" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav>
      <div className="wrap">
        <Link href="/" className="logo">
          <Image
            src="/logo.jpg"
            alt="Bunny Trading"
            width={1024}
            height={572}
            priority
            className="logo-img"
          />
        </Link>

        <div className="links">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? "active" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <Magnetic strength={0.25}>
          <Link href="/contact" className="nav-cta">
            DM to Start<span className="cta-arrow">→</span>
          </Link>
        </Magnetic>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger${open ? " is-open" : ""}`} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div className={`mobile-menu${open ? " is-open" : ""}`}>
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "active" : undefined}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/contact" className="mobile-cta">
          DM to Start
        </Link>
      </div>
    </nav>
  );
}
