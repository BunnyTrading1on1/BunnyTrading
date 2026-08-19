import Link from "next/link";
import Reveal from "@/components/Reveal";
import HeroParticles from "@/components/HeroParticles";
import HeroPhoto from "@/components/HeroPhoto";
import PhotoReveal from "@/components/PhotoReveal";

export default function Home() {
  return (
    <>
      <header className="hero">
        <HeroPhoto image="/images/hero-desk.jpg" />
        <HeroParticles />
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">One-on-one · Gold, Indexes, Crypto &amp; Stocks</span>
            <h1 className="hero-title">
              <span className="word">Trade</span>{" "}
              <span className="word">the</span>{" "}
              <span className="word accent">rule,</span>
              <br />
              <span className="word">not</span>{" "}
              <span className="word">the</span>{" "}
              <span className="word">number.</span>
            </h1>
            <p className="lede">
              Structured mentorship for gold, indexes, crypto, and stock
              traders — position sizing, discipline, and real feedback on
              every trade, before you click buy.
            </p>
            <div className="hero-stats">
              <div>
                <div className="num">0.01</div>
                <div className="lbl">Starting Lots</div>
              </div>
              <div>
                <div className="num">3%</div>
                <div className="lbl">Max Risk / Trade</div>
              </div>
              <div>
                <div className="num">1:2</div>
                <div className="lbl">Min Reward:Risk</div>
              </div>
            </div>
            <p className="hero-fineprint">
              Bunny Trading&rsquo;s own risk framework, not personalized
              advice for your account &mdash; your numbers may differ.
            </p>
          </div>
          <div className="ticker-card">
            <div className="pair">
              <span>XAU/USD · 1H</span>
              <span className="price">2,412.60</span>
            </div>
            <svg className="chart" viewBox="0 0 300 140" preserveAspectRatio="none">
              <polyline
                className="chart-line"
                fill="none"
                stroke="#C08A2E"
                strokeWidth="2"
                points="0,80 20,72 40,84 60,66 80,58 100,70 120,88 140,96 160,86 180,74 200,80 220,62 240,54 260,64 280,50 296,56"
              />
              <circle className="chart-dot" cx="296" cy="56" r="3.5" fill="#D9A94A" />
            </svg>
            <div className="rule-strip">
              <span>
                Written reason <b>required</b> before entry
              </span>
              <span>
                Stop at <b>100 pips</b> = risks <b>$10</b>
              </span>
            </div>
          </div>
        </div>
      </header>

      <section id="how-it-works" className="line-top">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>What week one looks like.</h2>
              <p>
                Everyone&rsquo;s week one will look different &mdash; this
                is just an example. Your weeks get set out for you as your
                journey goes on and as you grow.
              </p>
            </div>
          </Reveal>
          <Reveal stagger>
            <div className="steps">
              <div className="step">
                <span className="num">Step 01</span>
                <h3>Write it down first</h3>
                <p>
                  Before you enter, send the reason: the level, the
                  structure, the stop. If you can&rsquo;t explain it in a
                  sentence, that&rsquo;s the first thing we fix.
                </p>
              </div>
              <div className="step">
                <span className="num">Step 02</span>
                <h3>Size it to the stop</h3>
                <p>
                  Run the numbers before the trade, not after. The sizing
                  tool on this site is the same formula every review checks
                  against.
                </p>
              </div>
              <div className="step">
                <span className="num">Step 03</span>
                <h3>Get it reviewed</h3>
                <p>
                  Written feedback within 24 hours on Foundations &mdash;
                  real-time on Active Trader and Elite. Checked against your
                  rules before anything else.
                </p>
              </div>
              <div className="step">
                <span className="num">Step 04</span>
                <h3>Fix the rule, not the trade</h3>
                <p>
                  A winning trade that broke a rule still gets corrected.
                  Weekly homework locks in what changed, then the loop
                  repeats.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="gold-divider" aria-hidden="true" />

      <section id="levels" className="line-top">
        <div className="wrap">
          <Reveal>
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
          </Reveal>

          <Reveal delay={80}>
            <div className="feedback-card">
              <span className="tag">Sample feedback — Foundations tier</span>
              <p>
                &ldquo;You&rsquo;ve been right on direction three weeks
                straight, but you&rsquo;re still not making money &mdash;
                because you cut winners early and let losers run past your
                own stop. That&rsquo;s not a strategy problem, it&rsquo;s a
                discipline problem. This week: no closing a trade before it
                hits your stop or target, no exceptions. We&rsquo;ll talk
                about why in Friday&rsquo;s review.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="journal" className="line-top">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Example journal entry</span>
              <h2>What a reviewed trade looks like.</h2>
              <p>
                Every trade gets journalled against the same questions, then
                reviewed one on one. Here&rsquo;s an example of a completed
                entry with mentor feedback attached.
              </p>
            </div>
          </Reveal>
          <div className="split-grid">
          <Reveal delay={60}>
            <PhotoReveal
              src="/images/hand-mouse.jpg"
              alt="Close-up of a trader's hand at the desk, gold chart glowing on the monitor behind"
              focal="center 55%"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="portal">
              <div className="portal-head">
                <span>
                  <span className="dot"></span>Active Trader — Week 1, Day 3
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
                    All held. Hardest: not moving stop after the first
                    pullback.
                  </div>
                </div>
                <div className="journal-row">
                  <div className="q">Felt</div>
                  <div className="a">
                    Wanted to add size once it moved in my favor &mdash;
                    partly to prove I could&rsquo;ve gone bigger. Sent 0.02
                    lots like the plan said, and nothing more.
                  </div>
                </div>
                <div className="journal-row">
                  <div className="q">Mentor note</div>
                  <div className="a">
                    <i>
                      &ldquo;That urge to add size once you&rsquo;re already
                      right is the same instinct that blows accounts up
                      eventually &mdash; you just haven&rsquo;t paid for it
                      yet. Catching it and sticking to the number is worth
                      more than the extra pips would&rsquo;ve been. Write
                      that down for Friday.&rdquo;
                    </i>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
