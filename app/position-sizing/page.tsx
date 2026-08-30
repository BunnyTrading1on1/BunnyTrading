import type { Metadata } from "next";
import Link from "next/link";
import PositionSizingCalculator from "@/components/PositionSizingCalculator";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "XAUUSD Position Sizing Tool | Bunny Trading",
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
            A free tool to work out your XAUUSD lot size before you
            trade: account size, risk per trade, and stop distance in,
            recommended lot size out. Change the numbers below. Trading
            indexes, crypto, or stocks instead? The math is different for
            each, and depends on your broker&rsquo;s contract specs.
          </p>
        </div>
        <PositionSizingCalculator />

        <div className="after-calc">
          <div>
            <h2>Got your number. Now what?</h2>
            <p>
              The math is the easy part. The hard part is following it on
              a day you&rsquo;ve already lost twice. That&rsquo;s what the
              mentorship is for.
            </p>
          </div>
          <div className="after-calc-actions">
            <Link href="/blog/xauusd-position-sizing-guide" className="tier-btn">
              Read the breakdown
            </Link>
            <Link href="/pricing" className="nav-cta">
              See pricing<span className="cta-arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
