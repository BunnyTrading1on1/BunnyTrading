import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/articleSchema";

const post = getPostBySlug("written-reason-before-entry")!;

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

export default function WrittenReasonPost() {
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
              Send the reason before you enter: the level, the structure,
              the stop. It&rsquo;s the first rule I give every new student,
              and it&rsquo;s the one that does the most work, because
              it&rsquo;s not really about the writing. It&rsquo;s a test.
              If you can&rsquo;t explain the trade in a sentence before you
              take it, you don&rsquo;t have a setup yet. You have a
              feeling you haven&rsquo;t examined closely enough to know
              that.
            </p>

            <h2>Why the timing matters more than the content</h2>
            <p>
              Anyone can write a reason for a trade after it&rsquo;s already
              working. That&rsquo;s just narrating a result and
              calling it analysis. The value is entirely in doing it
              before, while you still don&rsquo;t know if you&rsquo;re
              right. That&rsquo;s the only point in the process where the
              reason reflects your actual thinking rather than a story
              built backwards to justify a trade you already wanted to
              take.
            </p>

            <h2>What a real reason looks like</h2>
            <p>
              A real reason names a specific level and a specific structure:
              &ldquo;4H structure holding above 2,398 support,
              London liquidity sweep confirmed&rdquo; is a reason. &ldquo;It
              feels like it&rsquo;s going up&rdquo; is not, and neither is
              &ldquo;this pattern has worked before&rdquo; without saying
              which pattern or why this instance of it is valid. If you
              strip out the trading vocabulary and what&rsquo;s left is a
              hunch, that&rsquo;s what you&rsquo;re actually trading on,
              vocabulary or not.
            </p>

            <h2>The setups that don&rsquo;t survive being written down</h2>
            <p>
              The real usefulness of this rule shows up in what it stops.
              Plenty of trades that feel obvious in the moment turn out to
              be nothing once you try to write the actual structural reason
              behind them. You start typing and realize there isn&rsquo;t
              one, just a chart that&rsquo;s been moving and a fear of
              missing it. That&rsquo;s the trade this rule is built to
              catch, and it only catches it if the reason gets written
              before entry, not filled in after as a formality.
            </p>
            <p>
              This is also what makes review actually useful. When
              there&rsquo;s a written reason on record, a review isn&rsquo;t
              judging the outcome. It&rsquo;s checking whether the
              trade matched the reason you gave for it, which is the only
              part of a trade you actually control.
            </p>
          </div>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/pricing/active-trader",
              label: "Level 02",
              desc: "Submit your reason via WhatsApp before entry and get real-time feedback on it.",
            },
            {
              href: "/blog/reward-to-risk-ratio-minimum",
              label: "Related",
              desc: "Why 1:2 reward-to-risk is a minimum, not a suggestion.",
            },
            {
              href: "/blog/pre-trade-checklist",
              label: "Related read",
              desc: "What to check before you're even ready to write a reason down.",
            },
          ]}
        />
      </div>
    </section>
  );
}
