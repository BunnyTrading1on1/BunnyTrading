import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroPhoto from "@/components/HeroPhoto";

export const metadata: Metadata = {
  title: "About — Bunny Trading",
  description:
    "One mentor, one method — rule-based XAU/USD mentorship built on position sizing, discipline, and honest feedback.",
};

export default function About() {
  return (
    <>
      <header className="hero hero-compact">
        <HeroPhoto image="/images/mentor-silhouette.jpg" focal="center 30%" />
        <div className="wrap" style={{ position: "relative", zIndex: 2 }}>
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">About</span>
              <h2>One mentor. One method.</h2>
              <p>
                Bunny Trading isn&rsquo;t a signal group and it isn&rsquo;t a
                course. It&rsquo;s one-on-one mentorship built around a
                single idea: the trade you take matters less than the rule
                you took it under.
              </p>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="line-top">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">The method</span>
              <h2>Rules first, charts second.</h2>
              <p>
                Every student works under the same non-negotiables: risk no
                more than 3% per trade, size the position to the stop
                &mdash; never the other way around, require at least 1:2
                reward to risk, and write the reason down before entry, not
                after. Position sizing isn&rsquo;t a suggestion here;
                it&rsquo;s the first thing you learn and the thing every
                trade review checks first.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="line-top">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Why one-on-one</span>
              <h2>Feedback on your trades, not the market&rsquo;s.</h2>
              <p>
                Generic courses teach generic setups. Signal groups tell you
                what to click. Neither one looks at your account, your stop,
                your journal, or the trade you almost took but didn&rsquo;t.
                Every submission here is reviewed personally &mdash; not by a
                team, not by a bot &mdash; so the feedback is about your
                trading, specifically.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="line-top">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Ready to start?</span>
              <h2>See what each level includes.</h2>
              <p>
                <Link href="/pricing" style={{ color: "var(--gold)" }}>
                  Compare Foundations, Active Trader, and Elite →
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
