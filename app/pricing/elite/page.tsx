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
          <div className="tier-head">
            <div className="tier-head__copy">
              <span className="eyebrow">Level 03</span>
              <h1>Elite</h1>
              <p className="lede">
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
            <aside className="tier-head__price">
              <div className="tier-head__amount">$999</div>
              <div className="tier-head__per">per month</div>
              <ul className="tier-head__terms">
                <li>
                  <span className="tick">✓</span>Month to month, no lock-in
                </li>
                <li>
                  <span className="tick">✓</span>Cancel or switch anytime
                </li>
                <li>
                  <span className="tick">✓</span>No sales call to start
                </li>
              </ul>
              <Link
                href={{ pathname: "/contact", query: { tier: "Elite" } }}
                className="tier-btn"
              >
                DM to start<span className="cta-arrow">→</span>
              </Link>
            </aside>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">What&rsquo;s included</span>
            <h2>Everything in Active Trader, and no ceiling.</h2>
          </div>
          <div className="included">
            <div className="included__item">
              <strong>Everything in Active Trader</strong>
              <span>All calls, all WhatsApp, all homework, all feedback.</span>
            </div>
            <div className="included__item">
              <strong>Unlimited calls</strong>
              <span>As many as we can schedule.</span>
            </div>
            <div className="included__item">
              <strong>Priority access</strong>
              <span>You come first, every single time.</span>
            </div>
            <div className="included__item">
              <strong>Live session access</strong>
              <span>Sit in while I trade and see the thinking in real time.</span>
            </div>
            <div className="included__item">
              <strong>Deep psychology work</strong>
              <span>Addressing the beliefs and patterns that hold traders back.</span>
            </div>
            <div className="included__item">
              <strong>Faith and emotional support</strong>
              <span>If you want it. This tier includes the hard conversations too.</span>
            </div>
            <div className="included__item">
              <strong>Anything on request</strong>
              <span>Within reason, no boundaries, no &ldquo;that&rsquo;s not included.&rdquo;</span>
            </div>
            <div className="included__item">
              <strong>The full student portal</strong>
              <span>
                Every education module unlocked, including XAUUSD
                Mastery and Trading Psychology, the two most advanced.
              </span>
            </div>
          </div>
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
              desc: "Meet Bunny, and what “partnership” actually means at this tier.",
            },
            {
              href: "/position-sizing",
              label: "Free tool",
              desc: "A free XAUUSD position sizing calculator, no login required.",
            },
          ]}
        />

        <Reveal delay={140}>
          <div style={{ marginTop: 48, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact?tier=Elite" className="tier-btn" style={{ padding: "14px 24px" }}>
              Start Elite<span className="cta-arrow">→</span>
            </Link>
            <Link href="/pricing" style={{ color: "var(--gold-text)", fontFamily: "var(--font-mono)", fontSize: 13, textDecoration: "none" }}>
              Compare all levels →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
