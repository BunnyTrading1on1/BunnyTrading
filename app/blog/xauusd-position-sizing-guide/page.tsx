import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/articleSchema";

const post = getPostBySlug("xauusd-position-sizing-guide")!;

export const metadata: Metadata = {
  title: `${post.title} — Bunny Trading`,
  description: post.description,
};

const jsonLd = articleSchema({
  title: post.title,
  description: post.description,
  slug: post.slug,
  date: post.date,
});

export default function PositionSizingGuidePost() {
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
              Every trade review I do starts in the same place, before I
              even look at the chart: is the position sized to the stop? Not
              &ldquo;does the setup look good&rdquo; — that comes later. If
              the size is wrong, nothing else about the trade matters yet.
            </p>

            <h2>The formula</h2>
            <p>
              For XAUUSD, gold moves in a contract where one standard lot
              (100 oz) is worth $10 per pip. That one number is the whole
              formula:
            </p>
            <ul>
              <li>Risk in dollars = account size × risk % per trade</li>
              <li>Lots = risk in dollars ÷ (stop distance in pips × $10)</li>
            </ul>
            <p>
              That&rsquo;s it. Two inputs you choose (account size, risk %),
              one input the market gives you (where your stop actually needs
              to sit), and the answer falls out the other end. You don&rsquo;t
              pick a lot size and hope — you calculate it.
            </p>

            <h2>A worked example</h2>
            <p>
              Say you&rsquo;re running a $1,000 account and risking 1% per
              trade — that&rsquo;s $10 on the line. Structure says your stop
              needs to sit 100 pips from entry to sit below the level that
              actually invalidates the trade. Lots = $10 ÷ (100 × $10) =
              0.01 lots. That&rsquo;s the whole calculation — you can run it
              yourself with{" "}
              <Link href="/position-sizing">the same calculator</Link> every
              one of my reviews gets checked against.
            </p>

            <h2>Why the order matters</h2>
            <p>
              The mistake I see most isn&rsquo;t bad math — it&rsquo;s doing
              the steps backwards. Traders decide how many lots &ldquo;feels
              right,&rdquo; then work out where the stop has to go to make
              that size survivable. That&rsquo;s sizing the stop to the
              position instead of the position to the stop, and it means
              your stop is no longer sitting where the structure says it
              should — it&rsquo;s sitting wherever your account size forced
              it. You&rsquo;ll get stopped out of trades that were actually
              right, on levels that never meant anything technically.
            </p>
            <p>
              Size to the stop, never the other way around. If the position
              size that comes out feels too small to be worth the trade, the
              answer is a bigger account or a tighter stop from a cleaner
              entry — not a bigger position.
            </p>

            <h2>What this doesn&rsquo;t cover</h2>
            <p>
              This math is XAUUSD-specific — the $10-per-pip constant only
              holds for the standard 100 oz gold contract. Indexes, crypto,
              and stocks all size differently, and I work that out with
              students directly in reviews rather than through a calculator,
              since contract specs vary by broker and instrument. The
              principle doesn&rsquo;t change though: size to the stop,
              always.
            </p>
          </div>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/position-sizing",
              label: "Free tool",
              desc: "Run your own numbers with the live XAUUSD position sizing calculator.",
            },
            {
              href: "/pricing/foundations",
              label: "Level 01",
              desc: "Foundations covers position sizing, stop placement, and R:R from week one.",
            },
            {
              href: "/blog",
              label: "Blog",
              desc: "More on risk management and trading psychology.",
            },
          ]}
        />
      </div>
    </section>
  );
}
