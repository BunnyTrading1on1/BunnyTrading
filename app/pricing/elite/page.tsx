import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Elite — Bunny Trading",
  description:
    "Elite: unlimited calls, live session access, and priority replies — the fastest feedback loop available, $1,000/mo.",
};

export default function ElitePage() {
  return (
    <section className="line-top">
      <div className="wrap">
        <Reveal>
          <p style={{ marginBottom: 24 }}>
            <Link href="/pricing" style={{ color: "var(--muted)", fontFamily: "var(--font-mono)", fontSize: 13, textDecoration: "none" }}>
              ← Back to all levels
            </Link>
          </p>
          <div className="section-head">
            <span className="eyebrow">Level 03</span>
            <h2>Elite</h2>
            <div className="price" style={{ margin: "12px 0 20px" }}>
              $1,000<small> / mo</small>
            </div>
            <p>
              Elite is partnership. You get everything in Active Trader,
              and then unlimited access &mdash; no call cap, no
              &ldquo;I&rsquo;ll get back to you tomorrow,&rdquo; no limits
              on what you can ask for.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">What&rsquo;s included</span>
            <h2>Everything in Active Trader, and no ceiling.</h2>
          </div>
          <ul className="detail-list">
            <li>Everything in Active Trader &mdash; all calls, all WhatsApp, all homework, all feedback.</li>
            <li>
              <b>Unlimited calls</b> &mdash; as many as we can schedule.
            </li>
            <li>
              <b>Priority access</b> &mdash; you come first, every single
              time.
            </li>
            <li>
              <b>Live session access</b> &mdash; sit in while I trade and
              see the thinking in real time.
            </li>
            <li>
              <b>Deep psychology work</b> &mdash; addressing the beliefs
              and patterns that hold traders back.
            </li>
            <li>
              <b>Anything on request</b> &mdash; within reason, no
              boundaries, no &ldquo;that&rsquo;s not included.&rdquo;
            </li>
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">What you&rsquo;re actually getting</span>
            <h2>Rapid acceleration, real partnership.</h2>
            <div className="prose">
              <p>
                We work as actual partners, not coach and student.
                You&rsquo;re not waiting for feedback &mdash; you&rsquo;re
                getting it immediately. You&rsquo;re not wondering if the
                strategy is right &mdash; you&rsquo;re learning it in real
                time by watching execution. You&rsquo;re not isolated with
                your struggles &mdash; you have someone invested in your
                progress through the hard months, not just the good ones.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Timeline</span>
            <h2>What changes, and when.</h2>
          </div>
          <ul className="detail-list">
            <li>
              <b>Months 1&ndash;2:</b> Rapid acceleration. We work as
              partners.
            </li>
            <li>
              <b>Month 3:</b> More capacity, faster iteration on strategy
              &mdash; because access isn&rsquo;t rationed here.
            </li>
            <li>
              <b>Ongoing:</b> Sustainable growth, long-term partnership.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Who this is for</span>
            <h2>Maximum access, willing to pay for it.</h2>
          </div>
          <ul className="detail-list">
            <li>Serious traders ready to scale funded accounts or their own capital.</li>
            <li>Traders who value speed and immediate feedback over structure.</li>
            <li>People past the learning phase who need real-time strategy refinement.</li>
            <li>Anyone willing to do the hard psychology work behind consistent trading.</li>
            <li>Traders who&rsquo;ve proven they can stick to rules and are ready for the next level.</li>
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div style={{ marginTop: 48, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact?tier=Elite" className="tier-btn" style={{ padding: "14px 24px" }}>
              Start Elite<span className="cta-arrow">→</span>
            </Link>
            <Link href="/pricing" style={{ color: "var(--gold)", fontFamily: "var(--font-mono)", fontSize: 13, textDecoration: "none" }}>
              Compare all levels →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
