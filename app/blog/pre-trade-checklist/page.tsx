import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/articleSchema";

const post = getPostBySlug("pre-trade-checklist")!;

export const metadata: Metadata = {
  title: `${post.title} | Bunny Trading`,
  description: post.description,
};

const jsonLd = articleSchema({
  title: post.title,
  description: post.description,
  slug: post.slug,
  date: post.date,
});

export default function PreTradeChecklistPost() {
  return (
    <section className="line-top blog-post">
      <div className="wrap">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Reveal>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
          <div className="section-head">
            <span className="blog-post-meta">{post.displayDate}</span>
            <h1>{post.title}</h1>
          </div>

          <div className="prose">
            <p>
              Most of the damage I see in reviews didn&rsquo;t start with
              the trade. It started before the platform was even open:
              tired, distracted, already annoyed about something else, and
              trading anyway because the market was there. None of the
              rules on this site matter if you&rsquo;re not in a state to
              actually follow them. So before I look at a single chart, I
              run through this.
            </p>

            <img
              src="/images/pre-trading-checklist.svg"
              alt="Pre-Trading Checklist: did I eat and sleep well, am I in a good mood, do I have a setup that looks good based on my strategy, what condition is the overall market in, is my A-quality setup printed and pinned, are my metrics and track record from demo trading in front of me, am I willing to take zero trades if nothing looks good, and have I capped how many trades I take today"
              width={1760}
              height={1360}
            />

            <h2>This is psychology, not paperwork</h2>
            <p>
              None of these questions are really about sleep or mood in
              the way they sound. They&rsquo;re about whether you&rsquo;re
              in a state where your judgment can be trusted. A tired brain
              doesn&rsquo;t see a setup less clearly, it sees it
              selectively, filling in the parts of a mediocre chart that
              make it look like the good one you were hoping to find. You
              can know every rule on this site perfectly and still make
              the wrong call, not because the rule was wrong but because
              the person applying it wasn&rsquo;t in a state to apply it
              honestly.
            </p>

            <h2>The real test is doing nothing</h2>
            <p>
              The two hardest questions on that list aren&rsquo;t the ones
              about your setup, they&rsquo;re &ldquo;am I willing to take
              zero trades today&rdquo; and &ldquo;have I capped how many I
              take.&rdquo; Most traders can follow a rule when
              there&rsquo;s a trade to take. Far fewer can sit on their
              hands through a slow session without that feeling like a
              failure. That itch to force activity when nothing&rsquo;s
              there is the same instinct behind revenge trading, just
              triggered by boredom instead of a loss.
            </p>
            <p>
              Deciding your max trades and your walk-away point before the
              session starts takes that decision away from the version of
              you that&rsquo;s three hours in, caffeinated, and annoyed
              that nothing&rsquo;s worked yet. That version of you should
              never be the one setting the limit.
            </p>
          </div>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/blog/written-reason-before-entry",
              label: "Related read",
              desc: "Once you're actually ready to trade, this is the rule that comes next.",
            },
            {
              href: "/position-sizing",
              label: "Free tool",
              desc: "Work out your lot size once you've cleared the checklist above.",
            },
            {
              href: "/blog/revenge-trading-after-a-loss",
              label: "Related read",
              desc: "What it looks like when this checklist gets skipped after a loss.",
            },
          ]}
        />
      </div>
    </section>
  );
}
