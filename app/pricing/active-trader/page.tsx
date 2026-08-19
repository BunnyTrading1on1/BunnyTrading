import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Active Trader — Bunny Trading",
  description:
    "Active Trader: weekly 1-on-1 calls, real-time WhatsApp feedback, and live trade corrections — $399/mo.",
};

export default function ActiveTraderPage() {
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
            <span className="eyebrow">Level 02 · Most take this</span>
            <h2>Active Trader</h2>
            <div className="price" style={{ margin: "12px 0 20px" }}>
              $399<small> / mo</small>
            </div>
            <p>
              Active Trader is Foundations with a mentor who&rsquo;s
              actually watching. Everything from Foundations stays &mdash;
              you still do the homework, you still get written feedback.
              But now you get live coaching on the one thing that separates
              learning traders from funded traders: real-time discipline
              under market pressure.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">What&rsquo;s included</span>
            <h2>Everything in Foundations, plus live coaching.</h2>
          </div>
          <ul className="detail-list">
            <li>Everything in Foundations &mdash; all homework, all written reviews, all education.</li>
            <li>
              <b>Weekly 1-on-1 call</b> &mdash; 60 minutes on your charts,
              every week.
            </li>
            <li>
              <b>Real-time WhatsApp feedback</b> &mdash; submit your trade
              reason before entry, get a same-day response during market
              hours.
            </li>
            <li>
              <b>Live trade feedback</b> &mdash; corrections while they
              actually matter, not postmortems.
            </li>
            <li>
              <b>Monthly accountability reviews</b> &mdash; performance
              analysis, what&rsquo;s working, what needs to shift.
            </li>
            <li>
              <b>Prop firm preparation</b> &mdash; how to pass evaluations,
              manage funded accounts, scale safely.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">What you&rsquo;re actually getting</span>
            <h2>Faster progress, real accountability.</h2>
            <div className="prose">
              <p>
                This is the tier where most people finally stick to their
                rules, because breaking them means admitting it to someone
                who actually cares. The WhatsApp check-ins mean you get
                feedback during market hours, not a day later. The weekly
                call is where you learn to think out loud about your trades
                with someone who can push back.
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
              <b>Months 1&ndash;2:</b> Faster progress. Real discipline,
              because someone holds you to it.
            </li>
            <li>
              <b>Month 3:</b> Many students start prop firm evaluations at
              this stage, once the Foundations habits hold up under
              real-time pressure.
            </li>
            <li>
              <b>After:</b> Step up to Elite if you want more access, or
              keep scaling here if this is working.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Who this is for</span>
            <h2>Ready for real coaching.</h2>
          </div>
          <ul className="detail-list">
            <li>Traders who&rsquo;ve done the homework and are ready for real coaching.</li>
            <li>Anyone with a live or demo account who wants feedback while trades are happening.</li>
            <li>Traders preparing for prop firm evaluations or scaling funded accounts.</li>
            <li>People in different timezones who need async feedback plus one live call a week.</li>
            <li>Most mentees &mdash; this is the tier that delivers the biggest shift in discipline and results.</li>
          </ul>
        </Reveal>

        <Reveal delay={140}>
          <div style={{ marginTop: 48, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <Link
              href={{ pathname: "/contact", query: { tier: "Active Trader" } }}
              className="tier-btn"
              style={{ padding: "14px 24px" }}
            >
              Start Active Trader<span className="cta-arrow">→</span>
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
