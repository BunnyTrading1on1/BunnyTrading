import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoReveal from "@/components/PhotoReveal";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-bg" aria-hidden="true">
          <img src="/images/hero-equity-curve.svg" alt="" />
        </div>
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">One-on-one · Gold, Indexes, Crypto &amp; Stocks</span>
            <h1 className="hero-title">
              <span className="word">Real</span>{" "}
              <span className="word accent">feedback</span>
              <br />
              <span className="word">on</span>{" "}
              <span className="word">every</span>{" "}
              <span className="word">trade.</span>
            </h1>
            <p className="lede">
              Structured mentorship for gold, indexes, crypto, and stock
              traders: position sizing, discipline, and a second pair of
              eyes before you click buy.
            </p>
          </div>
        </div>
      </header>

      <section className="who line-top">
        <div className="wrap split-grid">
          <Reveal>
            <PhotoReveal
              src="/images/bunny-portrait.jpg"
              alt="Bunny, founder of Bunny Trading"
              aspect="3 / 4"
              focal="center 20%"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Who you&rsquo;re actually working with</span>
              <h2>One mentor. Not a signal group.</h2>
              <p>
                I&rsquo;m Bunny, proudly South African, and I mentor a small
                number of traders one on one. Every review comes from me,
                not a team, not a bot, not a copy-paste template.
                That&rsquo;s also why I cap how many students I take.
              </p>
              <p>
                <Link href="/about">More about how I work →</Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="how-it-works" className="line-top">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">How it works</span>
              <h2>What week one looks like.</h2>
              <p>
                Everyone&rsquo;s week one will look different. This is just
                an example, and your weeks get set out for you as your
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
                  Run the numbers before the trade, not after. Use the
                  free position sizing tool on this site to work out your
                  lot size before you send your reason in.
                </p>
              </div>
              <div className="step">
                <span className="num">Step 03</span>
                <h3>Get it reviewed</h3>
                <p>
                  Written feedback within 24 hours on Foundations, real-time
                  on Active Trader and Elite. Checked against your rules
                  before anything else.
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
                Three levels, from written trade reviews to unlimited live
                calls. Every level includes student portal access. Month
                to month, no lock-in.
              </p>
            </div>
          </Reveal>

          <Reveal stagger>
            <div className="tiers">
              <Link href="/pricing/foundations" className="tier">
                <span className="lvl">Level 01</span>
                <h2>Foundations</h2>
                <div className="price">
                  $199<small> / mo</small>
                </div>
                <ul>
                  <li>Written trade reviews</li>
                  <li>Weekly homework</li>
                  <li>Replies within 24h</li>
                </ul>
                <span className="tier-btn">
                  Learn more<span className="cta-arrow">→</span>
                </span>
              </Link>
              <Link href="/pricing/active-trader" className="tier featured">
                <span className="lvl">
                  Level 02<span className="badge">Most take this</span>
                </span>
                <h2>Active Trader</h2>
                <div className="price">
                  $399<small> / mo</small>
                </div>
                <ul>
                  <li>Weekly 60-min 1-on-1 call</li>
                  <li>Real-time WhatsApp feedback</li>
                  <li>Prop firm prep</li>
                </ul>
                <span className="tier-btn">
                  Learn more<span className="cta-arrow">→</span>
                </span>
              </Link>
              <Link href="/pricing/elite" className="tier">
                <span className="lvl">Level 03</span>
                <h2>Elite</h2>
                <div className="price">
                  $999<small> / mo</small>
                </div>
                <ul>
                  <li>Sit in on live sessions</li>
                  <li>Unlimited calls</li>
                  <li>Priority, instant replies</li>
                </ul>
                <span className="tier-btn">
                  Learn more<span className="cta-arrow">→</span>
                </span>
              </Link>
            </div>
          </Reveal>
          <p style={{ marginTop: 28 }}>
            <Link href="/pricing" style={{ color: "var(--gold-text)" }}>
              See full pricing &amp; FAQ →
            </Link>
          </p>
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
                  <span className="dot"></span>Active Trader · Week 1, Day 3
                </span>
                <span className="status-pill">Reviewed</span>
              </div>
              <div className="portal-body">
                <div className="journal-row">
                  <div className="q">Did I trade?</div>
                  <div className="a">Yes, one long on XAU/USD, London open.</div>
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
                    Wanted to add size once it moved in my favor, partly to
                    prove I could&rsquo;ve gone bigger. Sent 0.02 lots like
                    the plan said, and nothing more.
                  </div>
                </div>
                <div className="journal-row">
                  <div className="q">Mentor note</div>
                  <div className="a">
                    <i>
                      &ldquo;That urge to add size once you&rsquo;re already
                      right is the same instinct that blows accounts up
                      eventually. You just haven&rsquo;t paid for it yet.
                      Catching it and sticking to the number is worth
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
