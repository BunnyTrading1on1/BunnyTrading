import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/articleSchema";

const post = getPostBySlug("stop-cutting-winners-early")!;

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

export default function CuttingWinnersPost() {
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
              The pattern I flag more than any other in reviews isn&rsquo;t
              a bad setup or a blown stop. It&rsquo;s a trader who was
              right, closed the trade anyway, and called it &ldquo;taking
              profit early.&rdquo; That name makes it sound like a choice.
              Most of the time it isn&rsquo;t. It&rsquo;s fear wearing a
              more comfortable name.
            </p>

            <h2>What&rsquo;s actually happening</h2>
            <p>
              You enter a trade with a written plan: a target, a stop, a
              reason. Price moves in your favor. And somewhere before it
              reaches the target, a feeling shows up that has nothing to do
              with the chart: what if it turns around and gives this back?
              So you close it. The trade was correct. The exit wasn&rsquo;t
              part of the plan. And you walk away feeling disciplined,
              because you &ldquo;locked in a win,&rdquo; when what actually
              happened is you let a feeling override a rule you set when you
              were thinking clearly, before money was on the line.
            </p>
            <p>
              That&rsquo;s the same instinct, just running in reverse, as
              the trader who moves their stop back to avoid taking a loss
              that was already part of the plan. Both are the account
              overriding the plan mid-trade. One just happens to feel good
              in the moment instead of bad.
            </p>

            <h2>Why it costs more than it looks like</h2>
            <p>
              A single early exit doesn&rsquo;t blow an account. The problem
              is what it does to your numbers over time. At a true 1:2,
              you only need to win 1 trade in 3 to come out ahead. Shrink
              that to 1:0.8 by cutting winners short, and you need to be
              right more than half the time just to break even, the exact
              math your discipline was supposed to protect you from. That&rsquo;s
              exactly the pattern I see traders bring into reviews confused
              about. They weren&rsquo;t wrong about the market. They were
              wrong about following their own exit.
            </p>

            <h2>The fix isn&rsquo;t willpower</h2>
            <p>
              Telling yourself to &ldquo;just hold&rdquo; next time
              doesn&rsquo;t work, because the urge to exit early shows up
              exactly when your judgment is least trustworthy, mid-trade,
              with money moving. The fix has to happen before you&rsquo;re
              in that state:
            </p>
            <ul>
              <li>
                Write the target and the reason for it down before you
                enter, not as a rough idea but as a number
              </li>
              <li>
                Decide in advance what would actually justify closing
                early: a real structural change, not a feeling
              </li>
              <li>
                Journal every early exit the same way you&rsquo;d journal a
                loss, because it&rsquo;s the same category of mistake
              </li>
            </ul>
            <p>
              This is most of what a second set of eyes is actually for.
              It&rsquo;s hard to catch yourself rationalizing an early exit
              in real time. It&rsquo;s much easier for someone reviewing
              the trade after, checking it against what you wrote down
              before you entered.
            </p>
          </div>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/pricing/active-trader",
              label: "Level 02",
              desc: "Real-time WhatsApp feedback catches this while the trade is still open, not after.",
            },
            {
              href: "/blog/reward-to-risk-ratio-minimum",
              label: "Related read",
              desc: "The full breakeven math behind why 1:2 is a minimum, not a suggestion.",
            },
            {
              href: "/blog",
              label: "Blog",
              desc: "More on the psychology that actually moves accounts.",
            },
          ]}
        />
      </div>
    </section>
  );
}
