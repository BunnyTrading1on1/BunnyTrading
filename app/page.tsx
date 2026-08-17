import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">One-on-one · XAU/USD</span>
            <h1>
              Trade the <span className="accent">rule,</span>
              <br />
              not the number.
            </h1>
            <p className="lede">
              Structured mentorship for gold traders — position sizing,
              discipline, and real feedback on every trade, before you click
              buy.
            </p>
            <div className="hero-stats">
              <div>
                <div className="num">0.01</div>
                <div className="lbl">Starting Lots</div>
              </div>
              <div>
                <div className="num">1%</div>
                <div className="lbl">Max Risk / Trade</div>
              </div>
              <div>
                <div className="num">1:2</div>
                <div className="lbl">Min Reward:Risk</div>
              </div>
            </div>
          </div>
          <div className="ticker-card">
            <div className="pair">
              <span>XAU/USD · 1H</span>
              <span className="price">2,412.60</span>
            </div>
            <svg className="chart" viewBox="0 0 300 140" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke="#C08A2E"
                strokeWidth="2"
                points="0,90 20,85 40,95 60,70 80,78 100,55 120,62 140,40 160,50 180,30 200,45 220,25 240,35 260,18 280,28 300,15"
              />
            </svg>
            <div className="rule-strip">
              <span>
                Written reason <b>required</b> before entry
              </span>
              <span>
                Stop at <b>$5</b> = risks <b>$5</b>
              </span>
            </div>
          </div>
        </div>
      </header>

      <section id="levels" className="line-top">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Pick your level</span>
            <h2>What changes is my time.</h2>
            <p>
              Three levels of mentorship, from written trade reviews to
              unlimited live calls.{" "}
              <Link href="/pricing" style={{ color: "var(--gold)" }}>
                See full pricing →
              </Link>
            </p>
          </div>

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
      </section>

      <section id="portal" className="line-top">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">How mentorship works</span>
            <h2>One place for every submission.</h2>
            <p>
              Instead of chasing journal entries across WhatsApp threads,
              students submit here — reviewed one on one, every trade.
            </p>
          </div>
          <div className="portal">
            <div className="portal-head">
              <span>
                <span className="dot"></span>Amy — Active Trader — Week 1, Day 3
              </span>
              <span className="status-pill">Reviewed</span>
            </div>
            <div className="portal-body">
              <div className="journal-row">
                <div className="q">Did I trade?</div>
                <div className="a">Yes — one long on XAU/USD, London open.</div>
              </div>
              <div className="journal-row">
                <div className="q">Reason sent first?</div>
                <div className="a">
                  Yes, 6 min before entry: &ldquo;4H structure holding above
                  2,398 support, London liquidity sweep confirmed.&rdquo;
                </div>
              </div>
              <div className="journal-row">
                <div className="q">Rules followed?</div>
                <div className="a">
                  All held. Hardest: not moving stop after the first pullback.
                </div>
              </div>
              <div className="journal-row">
                <div className="q">Felt</div>
                <div className="a">Tempted to add size mid-trade. Didn&rsquo;t.</div>
              </div>
              <div className="journal-row">
                <div className="q">Mentor note</div>
                <div className="a">
                  <i>
                    &ldquo;Good restraint on the add. That&rsquo;s the whole
                    lesson this week — write it down for Friday.&rdquo;
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
