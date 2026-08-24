import type { Metadata } from "next";
import Link from "next/link";
import PositionSizingCalculator from "@/components/PositionSizingCalculator";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "XAUUSD Position Sizing Tool — Bunny Trading",
  description:
    "Work out your recommended XAUUSD lot size from account size, risk per trade, and stop distance.",
};

export default function PositionSizing() {
  return (
    <section className="line-top">
      <div className="wrap">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sizing Tool" }]} />
        <div className="section-head">
          <span className="eyebrow">Try it live · Built for XAUUSD</span>
          <h1>XAUUSD position sizing, worked out for you.</h1>
          <p>
            The formula behind every gold trade review — turned into a
            tool you can use before every trade. Change the numbers below.
            Trading indexes, crypto, or stocks instead? The sizing math is
            different for each &mdash; bring your setup to a review and
            we&rsquo;ll work it out together.
          </p>
        </div>
        <PositionSizingCalculator />
        <p style={{ marginTop: 32, fontFamily: "var(--font-mono)", fontSize: 13 }}>
          <Link href="/blog/xauusd-position-sizing-guide" style={{ color: "var(--gold)" }}>
            Read the full breakdown of this formula →
          </Link>
        </p>
      </div>
    </section>
  );
}
