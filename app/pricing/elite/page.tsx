import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { serviceSchema } from "@/lib/serviceSchema";

const description =
  "Elite: unlimited calls, live session access, and priority replies. The fastest feedback loop available, $999/mo.";

export const metadata: Metadata = {
  title: "Elite | Gold Trading Mentorship | Bunny Trading",
  description,
};

const jsonLd = serviceSchema({
  name: "Elite",
  description,
  price: 999,
  path: "/pricing/elite",
});

export default function ElitePage() {
  return (
    <section className="line-top">
      <div className="wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Pricing", href: "/pricing" },
              { label: "Elite" },
            ]}
          />
          <div className="section-head">
            <span className="eyebrow">Level 03</span>
            <h1>Elite</h1>
            <div className="price" style={{ margin: "12px 0 20px" }}>
              $999<small> / mo</small>
            </div>
            <p>
              Elite is partnership. You get everything in Active Trader,
              and then unlimited access: no call cap, no
              &ldquo;I&rsquo;ll get back to you tomorrow,&rdquo; no limits
              on what you can ask for.
            </p>
            <p className="hero-fineprint" style={{ marginTop: 16 }}>
              This tier closes once it&rsquo;s full. Not artificial
              scarcity, unlimited access only works when there&rsquo;s
              actual capacity.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">What&rsquo;s included</span>
            <h2>Everything in Active Trader, and no ceiling.</h2>
          </div>
          <ul className="detail-list">
            <li>Everything in Active Trader: all calls, all WhatsApp, all homework, all feedback.</li>
            <li>
              <b>Unlimited calls:</b> as many as we can schedule.
            </li>
            <li>
              <b>Priority access:</b> you come first, every single
              time.
            </li>
            <li>
              <b>Live session access:</b> sit in while I trade and
              see the thinking in real time.
            </li>
            <li>
              <b>Deep psychology work:</b> addressing the beliefs
              and patterns that hold traders back.
            </li>
            <li>
              <b>Faith and emotional support</b>, if you want it.
              This tier includes the hard conversations too.
            </li>
            <li>
              <b>Anything on request:</b> within reason, no
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
                You&rsquo;re not waiting for feedback, you&rsquo;re
                getting it immediately. You&rsquo;re not wondering if the
                strategy is right, you&rsquo;re learning it in real
                time by watching execution. You&rsquo;re not isolated with
                your struggles, you have someone invested in your
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
              <b>Months 1 to 2:</b> Rapid acceleration. We work as
              partners.
            </li>
            <li>
              <b>Month 3:</b> More capacity, faster iteration on strategy,
              because access isn&rsquo;t rationed here.
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

        <RelatedLinks
          items={[
            {
              href: "/pricing/active-trader",
              label: "Level 02",
              desc: "Not sure Elite is the right fit yet? Active Trader is the tier most people start with.",
            },
            {
              href: "/about",
              label: "About",
              desc: "Meet Bunny and the rule-based method behind every tier.",
            },
            {
              href: "/position-sizing",
              label: "Free tool",
              desc: "Try the XAUUSD position sizing calculator every review is checked against.",
            },
          ]}
        />

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
