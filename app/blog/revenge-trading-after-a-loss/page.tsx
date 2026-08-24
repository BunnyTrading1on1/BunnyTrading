import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/articleSchema";

const post = getPostBySlug("revenge-trading-after-a-loss")!;

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

export default function RevengeTradingPost() {
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
              Revenge trading doesn&rsquo;t announce itself. Nobody sits
              down after a loss and thinks &ldquo;I&rsquo;m about to make a
              worse decision to get even.&rdquo; It shows up wearing
              conviction&rsquo;s clothes &mdash; the next setup just happens
              to look unusually good, right after the account needed it to.
              That timing is the whole tell, and it&rsquo;s the thing
              that&rsquo;s hardest to see from inside your own head in the
              moment.
            </p>

            <h2>What it actually looks like</h2>
            <p>
              The pattern I catch most in reviews: two losses early in the
              session, then a third entry that doesn&rsquo;t quite match
              the trader&rsquo;s usual criteria &mdash; sized a little
              bigger, entered a little faster, with a reason that sounds
              right but was clearly written to justify a trade that had
              already been decided on emotionally. The setup gets described
              with real trading language. The sizing tells the actual
              story.
            </p>

            <h2>Why it&rsquo;s so easy to miss in yourself</h2>
            <p>
              A revenge trade and a genuinely good trade can look identical
              from the outside &mdash; same chart, same indicators, same
              vocabulary in the reason you write. The difference isn&rsquo;t
              in the setup. It&rsquo;s in why you&rsquo;re taking it right
              now, and that&rsquo;s exactly the part your own judgment is
              worst at evaluating honestly while you&rsquo;re still down
              money and want it back. You&rsquo;re not lying to yourself on
              purpose. The urgency just feels like conviction from the
              inside.
            </p>

            <h2>The check that actually catches it</h2>
            <p>
              Ask what would happen if you simply waited two hours before
              taking this exact setup. If the answer is that it would still
              be there and still be valid, take it on its own schedule, not
              the account&rsquo;s. If the real answer is that you&rsquo;re
              worried the window will close, notice that the worry is doing
              the deciding, not the structure. A setup that&rsquo;s only
              urgent because you just lost money isn&rsquo;t urgent &mdash;
              it&rsquo;s a signal to step back, not size up.
            </p>
            <p>
              This is the single biggest reason a second set of eyes matters
              more after a losing trade than after a winning one. Someone
              reviewing your setup in real time, before entry, isn&rsquo;t
              carrying the same urgency you are &mdash; which means
              they&rsquo;re the one person positioned to actually see the
              difference between your setup and your feelings about your
              account.
            </p>
          </div>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/pricing/active-trader",
              label: "Level 02",
              desc: "Real-time WhatsApp feedback catches this before the entry, not after.",
            },
            {
              href: "/blog/stop-cutting-winners-early",
              label: "Related",
              desc: "The other side of the same instinct — cutting winners early.",
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
