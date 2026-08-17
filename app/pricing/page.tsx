import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Bunny Trading",
  description:
    "Three levels of one-on-one gold trading mentorship: Foundations, Active Trader, and Elite.",
};

export default function Pricing() {
  return (
    <section className="line-top">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Pick your level</span>
          <h2>What changes is my time.</h2>
          <p>
            Every level teaches you to read the market yourself. Month to
            month, no lock-in.
          </p>
        </div>
        <div className="tiers">
          <div className="tier">
            <span className="lvl">Level 01</span>
            <h3>Foundations</h3>
            <div className="price">
              $200<small> / mo</small>
            </div>
            <ul>
              <li>Weekly homework, real assignments</li>
              <li>Written trade reviews</li>
              <li>Risk management &amp; sizing</li>
              <li>No calls — replies in 24h</li>
            </ul>
            <Link href="/contact?tier=Foundations" className="tier-btn">
              Start Foundations
            </Link>
          </div>
          <div className="tier featured">
            <span className="lvl">Level 02 · Most Take This</span>
            <h3>Active Trader</h3>
            <div className="price">
              $400<small> / mo</small>
            </div>
            <ul>
              <li>Weekly 60-min 1-on-1 call</li>
              <li>Real-time WhatsApp feedback</li>
              <li>Live trade corrections</li>
              <li>Prop firm prep</li>
            </ul>
            <Link
              href={{ pathname: "/contact", query: { tier: "Active Trader" } }}
              className="tier-btn"
            >
              Start Active
            </Link>
          </div>
          <div className="tier">
            <span className="lvl">Level 03</span>
            <h3>Elite</h3>
            <div className="price">
              $1,000<small> / mo</small>
            </div>
            <ul>
              <li>Unlimited calls</li>
              <li>Sit in on live sessions</li>
              <li>Priority, instant replies</li>
              <li>Anything on request</li>
            </ul>
            <Link href="/contact?tier=Elite" className="tier-btn">
              Start Elite
            </Link>
          </div>
        </div>

        <div style={{ marginTop: 32 }}>
          <div className="feedback-card">
            <span className="tag">Sample review — Foundations tier</span>
            <p>
              &ldquo;Your entry was fine, but you sized 0.03 lots against a $5
              stop on a $500 account — that&rsquo;s 3% risk on a rule that
              says 1%. Re-run the position sizing formula and resend before
              your next trade.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
