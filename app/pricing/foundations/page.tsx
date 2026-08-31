import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { serviceSchema } from "@/lib/serviceSchema";

const description =
  "Foundations: weekly homework, written trade reviews, and risk management education built around your own account. $199/mo.";

export const metadata: Metadata = {
  title: "Foundations | Gold Trading Mentorship | Bunny Trading",
  description,
};

const jsonLd = serviceSchema({
  name: "Foundations",
  description,
  price: 199,
  path: "/pricing/foundations",
});

export default function FoundationsPage() {
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
              { label: "Foundations" },
            ]}
          />
          <div className="tier-head">
            <div className="tier-head__copy">
              <span className="eyebrow">Level 01</span>
              <h1>Foundations</h1>
              <p className="lede">
                The Foundation Tier is where discipline meets structure. You
                get weekly homework that forces you to think like a trader
                before you risk real money: reading structure across
                timeframes, sizing positions correctly, managing risk before
                emotion takes over, and journaling the trades that matter.
              </p>
            </div>
            <aside className="tier-head__price">
              <div className="tier-head__amount">$199</div>
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
                href={{ pathname: "/contact", query: { tier: "Foundations" } }}
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
            <h2>Real work, every week.</h2>
          </div>
          <div className="included">
            <div className="included__item">
              <strong>Weekly homework assignments</strong>
              <span>Real work every single week that reinforces learning.</span>
            </div>
            <div className="included__item">
              <strong>Written trade reviews</strong>
              <span>Send me your setups, I break down what you&rsquo;re seeing and why it matters.</span>
            </div>
            <div className="included__item">
              <strong>Risk management education</strong>
              <span>
                Position sizing formulas, stop placement, R:R
                optimization, lot sizing strategies tailored to your
                account.
              </span>
            </div>
            <div className="included__item">
              <strong>Psychology and discipline training</strong>
              <span>The part most traders skip, and most regret skipping.</span>
            </div>
            <div className="included__item">
              <strong>Your personal trading plan</strong>
              <span>Built around your actual schedule and life, not a generic template.</span>
            </div>
            <div className="included__item">
              <strong>24-hour written feedback</strong>
              <span>On all submissions.</span>
            </div>
            <div className="included__item">
              <strong>Student portal access</strong>
              <span>
                The Forex Foundations and Market Structure education
                modules, live BTC/XAU price tracking, and your own
                trading journal.
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">What you&rsquo;re actually getting</span>
            <h2>Confusion to consistency.</h2>
            <div className="prose">
              <p>
                A structured path built on real skill, not chasing quick
                wins. You learn to spot setups on your own, size correctly
                for your account, and develop the discipline that
                separates traders who last from traders who blow up. No
                shortcuts, no calls, no real-time hand-holding. This
                level is about learning to think independently.
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
              <b>Months 1 to 2:</b> Build the foundation. Learn the
              setups. Get comfortable reading structure.
            </li>
            <li>
              <b>Month 3:</b> The habits start feeling automatic:
              sizing, journaling, reading structure without
              second-guessing yourself.
            </li>
            <li>
              <b>After:</b> Ready to step up to Active Trader, or stay here
              and keep building.
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Who this is for</span>
            <h2>Structure without hand-holding.</h2>
          </div>
          <ul className="detail-list">
            <li>Complete beginners who need to learn the system properly.</li>
            <li>
              Traders who&rsquo;ve been trading solo and want structure
              without real-time coaching.
            </li>
            <li>Anyone who needs accountability through homework, not live calls.</li>
            <li>People with schedules that don&rsquo;t align with real-time mentorship.</li>
          </ul>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/pricing/active-trader",
              label: "Level 02",
              desc: "Ready for real-time feedback instead of written-only reviews? See what Active Trader adds.",
            },
            {
              href: "/position-sizing",
              label: "Free tool",
              desc: "A free XAUUSD position sizing calculator — work out your lot size before you send in this week's homework.",
            },
            {
              href: "/about",
              label: "About",
              desc: "Meet Bunny, and why the rules matter more than the setup.",
            },
          ]}
        />

        <Reveal delay={140}>
          <div style={{ marginTop: 48, display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contact?tier=Foundations" className="tier-btn" style={{ padding: "14px 24px" }}>
              Start Foundations<span className="cta-arrow">→</span>
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
