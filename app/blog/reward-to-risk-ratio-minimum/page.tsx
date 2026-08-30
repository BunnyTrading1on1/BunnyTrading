import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/articleSchema";

const post = getPostBySlug("reward-to-risk-ratio-minimum")!;

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

export default function RewardToRiskPost() {
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
              Require at least 1:2 reward to risk. It&rsquo;s one of the
              first rules every student gets, and it&rsquo;s also one of the
              first ones people quietly water down once a setup they like
              doesn&rsquo;t quite meet it. The number isn&rsquo;t arbitrary
              though. It&rsquo;s the line where your win rate stops
              being the thing that determines whether you&rsquo;re
              profitable.
            </p>

            <img
              src="/images/risk-management.svg"
              alt="Table of reward-to-risk ratios from 1:50 to 50:1 against the breakeven win rate needed at each, alongside a chart showing that a 2:1 ratio only needs a 33% win rate to be profitable"
              width={1760}
              height={1300}
            />

            <h2>The math nobody does before they trade</h2>
            <p>
              At 1:1, you need to win more than half your trades just to
              break even before costs. At 1:2, the math flips: you only
              need to win 1 trade in 3 to come out ahead, because your
              winners are worth twice your losers. That gap between
              &ldquo;needs to be right most of the time&rdquo; and
              &ldquo;can be wrong most of the time&rdquo; is the entire
              reason this rule exists. It turns trading from a game you
              have to be good at predicting into a game you just have to
              execute consistently.
            </p>
            <h2>Why traders shrink it anyway</h2>
            <p>
              The setup that&rsquo;s only offering 1:1.3 usually looks
              fine in the moment. The structure&rsquo;s there, the
              level&rsquo;s clean, it just doesn&rsquo;t have room to run
              to a full 1:2 target before the next resistance. So the
              temptation is to take it anyway and call it close enough.
              It isn&rsquo;t. A ratio requirement only protects you if you
              actually hold the line on it. The moment it becomes
              negotiable, it stops doing the one job it has.
            </p>
            <p>
              If a setup can&rsquo;t offer 1:2, that&rsquo;s not a reason to
              lower the bar. It&rsquo;s information: the structure
              you&rsquo;re looking at isn&rsquo;t clean enough yet, or the
              entry is too late. Wait for the version of the setup that
              actually has room, or don&rsquo;t take it.
            </p>

            <h2>What this looks like in a review</h2>
            <p>
              When I&rsquo;m checking a trade against this rule, I&rsquo;m
              not just looking at the number you wrote down.
              I&rsquo;m checking whether the target was realistic given the
              structure, or whether it was picked backwards to make the
              ratio look right. A 1:2 target sitting past three levels of
              resistance isn&rsquo;t a real 1:2. It&rsquo;s a number
              on paper that price was never likely to reach. The rule only
              works if the target is honest.
            </p>
          </div>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/position-sizing",
              label: "Free tool",
              desc: "Run the position sizing formula that pairs with every reward-to-risk calculation.",
            },
            {
              href: "/pricing/foundations",
              label: "Level 01",
              desc: "Foundations builds R:R discipline into every weekly homework review.",
            },
            {
              href: "/blog",
              label: "Blog",
              desc: "More on the numbers behind consistent trading.",
            },
          ]}
        />
      </div>
    </section>
  );
}
