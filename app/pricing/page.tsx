import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Gold Trading Mentorship Pricing — Bunny Trading",
  description:
    "Three levels of one-on-one gold trading mentorship: Foundations, Active Trader, and Elite.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is this only for gold (XAU/USD)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Gold is my specialty and where the core curriculum lives, but I also mentor traders on indexes, crypto, and stocks (including penny stocks). Foundations and Active Trader are built around XAUUSD by default because that's where I have the deepest expertise — if your focus is elsewhere, we adapt the same structure (position sizing, risk management, psychology) to your instrument from the first call. Elite has the most built-in flexibility since we're building a custom plan from day one. The position sizing tool itself is XAUUSD-specific math, though — other instruments get sized properly in your reviews, not through that calculator.",
      },
    },
    {
      "@type": "Question",
      name: "What actually happens after I DM you?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You'll get a reply within 24 hours. From there we schedule a short call — 30 minutes, no more: I confirm you've got a live or demo account ready, we check your broker and position sizing numbers, I walk you through the three tiers and which fits, you pick a tier and get your welcome package, and we set your first homework deadline or call slot. No sales pitch, no upsell — just whether this is actually right for you, and when you start.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a funded or prop firm account first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — you can start on a demo. Plenty of students start with $1,000–$5,000 on a live account instead; both work. Demo money doesn't teach real emotional discipline — fear and greed hit differently when it's your own money on the line. For prop firm prep specifically (Active Trader), we start on whatever account you have and scale toward an evaluation once the system's proven out.",
      },
    },
    {
      "@type": "Question",
      name: "Can I cancel anytime?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — month to month, no lock-in. You pay for the month you're in; tell me before the next billing date if you're stopping. If you leave and want to come back later, you start over — there's no pausing a membership.",
      },
    },
    {
      "@type": "Question",
      name: "What's the actual difference between levels?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foundations is independent learning — written feedback only, no calls, slower but cheaper, best if your schedule doesn't allow real-time coaching. Active Trader adds accountability — one call a week, WhatsApp feedback during market hours, faster progress, the level most people take. Elite is real-time — unlimited calls, priority access, watching trades happen live. All three teach the same setups and rules; what changes is how much hand-holding and speed of feedback you get.",
      },
    },
    {
      "@type": "Question",
      name: "Can I switch levels later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, anytime. Upgrading mid-month means paying the difference for the remaining days; downgrading takes effect on the next billing cycle. Most people stay where they start, but some move up after a few months once they've seen the system work, and some move down if life gets busier.",
      },
    },
    {
      "@type": "Question",
      name: "What if I miss a week's homework or a call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On Foundations, missed homework has no make-up — you're paying for a system that only works if you do it, and missing a week just resets your own progress by a week. On Active Trader, a missed call is gone (though I'll share notes); the weekly rhythm is part of what makes it work. Elite has more flexibility since you're driving the schedule — a missed call gets rescheduled — but consistently missing homework is still on you to fix.",
      },
    },
  ],
};

export default function Pricing() {
  return (
    <section className="line-top">
      <div className="wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <div className="section-head">
            <span className="eyebrow">Pick your level</span>
            <h1>What changes is my time.</h1>
            <p>
              Every level teaches you to read the market yourself. Month to
              month, no lock-in.
            </p>
          </div>
        </Reveal>
        <div className="tiers">
          <Link href="/pricing/foundations" className="tier">
            <span className="lvl">Level 01</span>
            <h3>Foundations</h3>
            <div className="price">
              $199<small> / mo</small>
            </div>
            <ul>
              <li>Weekly homework, real assignments</li>
              <li>Written trade reviews</li>
              <li>Risk management &amp; sizing</li>
              <li>No calls — replies in 24h</li>
            </ul>
            <span className="tier-btn">
              Learn more<span className="cta-arrow">→</span>
            </span>
          </Link>
          <Link href="/pricing/active-trader" className="tier featured">
            <span className="lvl">Level 02 · Most Take This</span>
            <h3>Active Trader</h3>
            <div className="price">
              $399<small> / mo</small>
            </div>
            <ul>
              <li>Weekly 60-min 1-on-1 call</li>
              <li>Real-time WhatsApp feedback</li>
              <li>Live trade corrections</li>
              <li>Prop firm prep</li>
            </ul>
            <span className="tier-btn">
              Learn more<span className="cta-arrow">→</span>
            </span>
          </Link>
          <Link href="/pricing/elite" className="tier">
            <span className="lvl">Level 03</span>
            <h3>Elite</h3>
            <div className="price">
              $999<small> / mo</small>
            </div>
            <ul>
              <li>Unlimited calls</li>
              <li>Sit in on live sessions</li>
              <li>Priority, instant replies</li>
              <li>Anything on request</li>
            </ul>
            <span className="tier-btn">
              Learn more<span className="cta-arrow">→</span>
            </span>
          </Link>
        </div>

        <Reveal>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Foundations → Active Trader → Elite</span>
            <h2>The progression.</h2>
            <p>
              Not everyone moves through all three. Some traders stay in
              Foundations for good, because that&rsquo;s their actual
              need. Some stay in Active Trader and scale successfully for
              years. Elite is for people who want maximum access and are
              willing to pay for it. Each tier teaches you to read the
              market yourself &mdash; the only thing that changes is how
              much of my time and attention you get while you&rsquo;re
              learning it.
            </p>
          </div>
        </Reveal>

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
              &ldquo;Three trades this week, three different reasons
              written down before entry &mdash; but two of them were the
              same setup wearing different names. That&rsquo;s the actual
              problem: you&rsquo;re trading on feel and calling it structure
              after the fact. Rewrite this week&rsquo;s journal using the
              real pattern name every time, not whatever sounds good in
              hindsight.&rdquo;
            </p>
          </div>
          <div className="feedback-card">
            <span className="tag">Sample feedback — Active Trader tier</span>
            <p>
              &ldquo;Caught this one live on WhatsApp, before you clicked
              buy: you&rsquo;d already lost twice today and this entry
              didn&rsquo;t match your usual criteria &mdash; it looked like
              revenge sizing dressed up as conviction. We waited. The real
              setup showed up two hours later, cleaner, and you took it at
              the size the plan called for.&rdquo;
            </p>
          </div>
          <div className="feedback-card">
            <span className="tag">Sample note — Elite tier</span>
            <p>
              &ldquo;Sat in on your London session today and watched you
              wait four minutes past your own entry trigger for &lsquo;more
              confirmation&rsquo; that never came &mdash; the setup ran
              without you. That&rsquo;s not caution, that&rsquo;s the same
              hesitation you journaled about last month. We&rsquo;re not
              treating it as a one-off anymore.&rdquo;
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
              No. Gold is my specialty and where the core curriculum
              lives, but I also mentor traders on indexes, crypto, and
              stocks (including penny stocks). Foundations and Active
              Trader are built around XAUUSD by default because
              that&rsquo;s where I have the deepest expertise &mdash; if
              your focus is elsewhere, we adapt the same structure
              (position sizing, risk management, psychology) to your
              instrument from the first call. Elite has the most built-in
              flexibility since we&rsquo;re building a custom plan from
              day one. The position sizing tool itself is XAUUSD-specific
              math, though &mdash; other instruments get sized properly in
              your reviews, not through that calculator.
            </p>
          </details>
          <details>
            <summary>What actually happens after I DM you?</summary>
            <p>
              You&rsquo;ll get a reply within 24 hours. From there we
              schedule a short call &mdash; 30 minutes, no more:
            </p>
            <ul>
              <li>I confirm you&rsquo;ve got a live or demo account ready</li>
              <li>We check your broker and position sizing numbers</li>
              <li>I walk you through the three tiers and which fits</li>
              <li>You pick a tier and get your welcome package</li>
              <li>We set your first homework deadline or call slot</li>
            </ul>
            <p>
              No sales pitch, no upsell &mdash; just whether this is
              actually right for you, and when you start. If you follow up
              once and still don&rsquo;t hear back, assume I&rsquo;m at
              capacity.
            </p>
          </details>
          <details>
            <summary>Do I need a funded or prop firm account first?</summary>
            <p>
              No &mdash; you can start on a demo. Plenty of students start
              with $1,000&ndash;$5,000 on a live account instead; both
              work. One honest caveat: demo money doesn&rsquo;t teach real
              emotional discipline &mdash; fear and greed hit differently
              when it&rsquo;s your own money on the line. Some people move
              to live after a couple of weeks, some wait a month. For prop
              firm prep specifically (Active Trader), we start on whatever
              account you have and scale toward an evaluation once the
              system&rsquo;s proven out.
            </p>
          </details>
          <details>
            <summary>Can I cancel anytime?</summary>
            <p>
              Yes &mdash; month to month, no lock-in. You pay for the month
              you&rsquo;re in; tell me before the next billing date if
              you&rsquo;re stopping. One thing worth knowing upfront: if you
              leave and want to come back later, you start over &mdash;
              there&rsquo;s no pausing a membership.
            </p>
          </details>
          <details>
            <summary>What&rsquo;s the actual difference between levels?</summary>
            <p>
              Foundations is independent learning &mdash; written feedback
              only, no calls, slower but cheaper, best if your schedule
              doesn&rsquo;t allow real-time coaching. Active Trader adds
              accountability &mdash; one call a week, WhatsApp feedback
              during market hours, faster progress, the level most people
              take. Elite is real-time &mdash; unlimited calls, priority
              access, watching trades happen live. All three teach the same
              setups and rules; what changes is how much hand-holding and
              speed of feedback you get.
            </p>
          </details>
          <details>
            <summary>Can I switch levels later?</summary>
            <p>
              Yes, anytime. Upgrading mid-month means paying the difference
              for the remaining days; downgrading takes effect on the next
              billing cycle. Most people stay where they start, but some
              move up after a few months once they&rsquo;ve seen the system
              work, and some move down if life gets busier. If
              you&rsquo;re downgrading, tell me why &mdash; it&rsquo;s
              useful either way.
            </p>
          </details>
          <details>
            <summary>What if I miss a week&rsquo;s homework or a call?</summary>
            <p>
              On Foundations, missed homework has no make-up &mdash;
              you&rsquo;re paying for a system that only works if you do
              it, and missing a week just resets your own progress by a
              week. On Active Trader, a missed call is gone (though
              I&rsquo;ll share notes); the weekly rhythm is part of what
              makes it work. Elite has more flexibility since you&rsquo;re
              driving the schedule &mdash; a missed call gets rescheduled
              &mdash; but consistently missing homework is still on you to
              fix.
            </p>
          </details>
        </div>

        <Reveal>
          <div className="section-head" style={{ marginTop: 56 }}>
            <span className="eyebrow">Before you DM</span>
            <h2>One more thing.</h2>
            <p>
              I&rsquo;m selective about who I take. I&rsquo;ve mentored
              people who wanted someone else to make them rich while they
              stayed comfortable &mdash; that&rsquo;s not what this is. I
              take traders who show up for homework and are willing to be
              wrong and fix it. If I say we&rsquo;re at capacity or
              it&rsquo;s not the right fit, that&rsquo;s not personal
              &mdash; I&rsquo;d rather turn down a month&rsquo;s revenue
              than spend time with someone who isn&rsquo;t going to
              commit.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
