import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import PhotoReveal from "@/components/PhotoReveal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "About Your South African Gold Trading Mentor | Bunny Trading",
  description:
    "One South African mentor, one method: rule-based mentorship across gold, indexes, crypto, and stocks, built on position sizing, discipline, and honest feedback.",
};

export default function About() {
  return (
    <>
      <header className="hero hero-compact hero-flat">
        <div className="wrap">
          <Reveal>
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            <div className="section-head">
              <span className="eyebrow">About</span>
              <h1>One mentor. Working with how you already trade.</h1>
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
        <div className="wrap split-grid bio-grid">
          <Reveal>
            <PhotoReveal
              src="/images/bunny-portrait.jpg"
              alt="Bunny, founder of Bunny Trading"
              aspect="3 / 4"
              focal="center 20%"
            />
          </Reveal>
          <Reveal delay={80}>
            <div>
              <span className="eyebrow">Meet Bunny</span>
              <h2>I&rsquo;ve made every mistake I teach against.</h2>
              <div className="prose">
                <p>
                  Hi, my name is Bunny, proudly South African, and
                  I&rsquo;ve been trading gold and penny stocks for
                  a few years now. Almost all of what I teach came from
                  mistakes I made myself before I learned to stop making
                  them.
                </p>
                <p>
                  Like most people, I started out sizing positions by feel,
                  not by math. A good week made me overconfident; a bad
                  week made me chase it back too fast. The turning point
                  wasn&rsquo;t a big win. It was realizing every
                  account-blowing mistake I&rsquo;d made traced back to the
                  same root cause: I never had a rule I actually followed
                  before I clicked buy.
                </p>
                <p>
                  So I built one. Then I stress-tested it on my own money
                  until it held up on the bad days, not just the good
                  ones. That&rsquo;s the system I teach now, not
                  because it&rsquo;s exciting, but because it&rsquo;s the
                  thing that actually kept me in the game long enough to
                  get good at this.
                </p>
                <p>
                  I started mentoring because I got tired of watching
                  people repeat the exact mistakes I made, alone, with no
                  one checking their math before the trade instead of
                  after.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="rules line-top">
        <div className="wrap">
          <Reveal>
            <div className="section-head center-head">
              <span className="eyebrow">The method</span>
              <h2>Your rules, not a template.</h2>
              <p>
                Every student trades under a written set of rules.
                What&rsquo;s in them depends on you: your account, your
                instrument, your tolerance. Gold and penny stocks
                don&rsquo;t get sized the same way, and two traders on
                the same instrument often shouldn&rsquo;t be either.
                What stays the same for everyone is the structure.
              </p>
            </div>
          </Reveal>
          <Reveal stagger>
            <div className="rule-grid">
              <div className="rule">
                <span className="num">01</span>
                <span>
                  Your risk per trade is a number we set together, and
                  it doesn&rsquo;t move mid-week
                </span>
              </div>
              <div className="rule">
                <span className="num">02</span>
                <span>
                  Size the position to the stop, never the other way
                  around
                </span>
              </div>
              <div className="rule">
                <span className="num">03</span>
                <span>
                  Your minimum reward-to-risk is set for your instrument,
                  then held to
                </span>
              </div>
              <div className="rule">
                <span className="num">04</span>
                <span>Write the reason down before entry, not after</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="line-top">
        <div className="wrap split-grid">
          <Reveal>
            <div>
              <span className="eyebrow">Why one-on-one</span>
              <h2>Feedback on your trades, not the market&rsquo;s.</h2>
              <p>
                Generic courses teach generic setups. Signal groups tell you
                what to click. Neither one looks at your account, your stop,
                your journal, or the trade you almost took but didn&rsquo;t.
                Every submission here is reviewed personally (not by a
                team, not by a bot), so the feedback is about your
                trading, specifically.
              </p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <PhotoReveal
              src="/images/office-atmosphere.jpg"
              alt="A quiet home trading office at night, where every submission gets reviewed personally"
              focal="center 40%"
            />
          </Reveal>
        </div>
      </section>

      <section className="selective">
        <div className="wrap">
          <Reveal>
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Before you DM</span>
              <h2>I&rsquo;m selective about who I take.</h2>
              <p>
                I&rsquo;ve mentored people who wanted someone else to make
                them rich while they stayed comfortable. That&rsquo;s not
                what this is. I take traders who show up for homework and
                are willing to be wrong and fix it.
              </p>
              <div className="sel-box">
                <p>
                  If I say we&rsquo;re at capacity or it&rsquo;s not the
                  right fit, that&rsquo;s not personal. I&rsquo;d rather
                  turn down a month&rsquo;s revenue than spend time with
                  someone who isn&rsquo;t going to commit.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="section-head center-head">
              <span className="eyebrow">Ready to start?</span>
              <h2>See what each level includes.</h2>
              <p>
                <Link href="/pricing" style={{ color: "var(--gold-text)" }}>
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
