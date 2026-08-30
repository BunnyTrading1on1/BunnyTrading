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
            <div className="hero-stats">
              <div>
                <div className="num">1:2</div>
                <div className="lbl">Min Reward:Risk</div>
              </div>
              <div>
                <div className="num">0</div>
                <div className="lbl">Sales Calls Required</div>
              </div>
            </div>
            <p className="hero-fineprint">
              Bunny Trading&rsquo;s own risk framework, not personalized
              advice for your account. Your numbers may differ.
            </p>
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
                Three levels of mentorship, from written trade reviews to
                unlimited live calls, all with student portal access:
                education modules, live markets, and your own trading journal.{" "}
                <Link href="/pricing" style={{ color: "var(--gold-text)" }}>
                  See full pricing →
                </Link>
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="feedback-card">
              <span className="tag">Real feedback · Foundations tier</span>
              <p>
                &ldquo;You&rsquo;ve been right on direction three weeks
                straight, but you&rsquo;re still not making money. That&rsquo;s
                because you cut winners early and let losers run past your
                own stop. It&rsquo;s not a strategy problem, it&rsquo;s a
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
