import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Pricing — Bunny Trading",
  description:
    "Three levels of one-on-one gold trading mentorship: Foundations, Active Trader, and Elite.",
};

export default function Pricing() {
  return (
    <section className="line-top">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">Pick your level</span>
            <h2>What changes is my time.</h2>
            <p>
              Every level teaches you to read the market yourself. Month to
              month, no lock-in.
            </p>
          </div>
        </Reveal>
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

        <div
          style={{
            marginTop: 32,
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <div className="feedback-card">
            <span className="tag">Sample review — Foundations tier</span>
            <p>
              &ldquo;Your entry was fine, but you sized 0.03 lots against a $5
              stop on a $500 account — that&rsquo;s 3% risk on a rule that
              says 1%. Re-run the position sizing formula and resend before
              your next trade.&rdquo;
            </p>
          </div>
          <div className="feedback-card">
            <span className="tag">Sample feedback — Active Trader tier</span>
            <p>
              &ldquo;Caught this one live on WhatsApp: you moved your stop
              after the pullback instead of before. The setup was still
              valid — the rule violation is what we&rsquo;re fixing, not the
              trade.&rdquo;
            </p>
          </div>
          <div className="feedback-card">
            <span className="tag">Sample note — Elite tier</span>
            <p>
              &ldquo;Sat in on your London session today. You hesitated 4
              minutes past your own entry trigger waiting for
              &lsquo;more confirmation.&rsquo; That hesitation cost you 15
              pips — let&rsquo;s talk about why on our next call.&rdquo;
            </p>
          </div>
        </div>

        <Reveal>
          <div className="section-head" style={{ marginTop: 88 }}>
            <span className="eyebrow">Questions</span>
            <h2>Before you DM.</h2>
          </div>
        </Reveal>
        <div className="faq">
          <details>
            <summary>Is this only for gold (XAU/USD)?</summary>
            <p>
              Yes. Every rule, the position sizing tool, and every trade
              review are built specifically around XAU/USD — not a
              generalized multi-symbol curriculum.
            </p>
          </details>
          <details>
            <summary>What actually happens after I DM you?</summary>
            <p>
              You&rsquo;ll get a reply within 24 hours to work out which
              level fits, then you&rsquo;re started &mdash; no onboarding
              call required unless you want one.
            </p>
          </details>
          <details>
            <summary>Do I need a funded or prop firm account first?</summary>
            <p>
              No. Prop firm prep is part of the Active Trader and Elite
              tiers if and when you want to go that route — it&rsquo;s not a
              prerequisite to start.
            </p>
          </details>
          <details>
            <summary>Can I cancel anytime?</summary>
            <p>
              Yes — every level is month to month with no lock-in contract.
            </p>
          </details>
          <details>
            <summary>What&rsquo;s the actual difference between levels?</summary>
            <p>
              Access to my time, not quality of feedback. Foundations gets
              written reviews within 24 hours; Active Trader adds a weekly
              call and real-time WhatsApp feedback; Elite adds unlimited
              calls and live session access.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
