import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedLinks from "@/components/RelatedLinks";
import { getPostBySlug } from "@/lib/blog";
import { articleSchema } from "@/lib/articleSchema";

const post = getPostBySlug("demo-vs-live-trading")!;

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

export default function DemoVsLivePost() {
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
              &ldquo;Should I go live yet?&rdquo; is one of the most common
              questions I get, and the honest answer is that demo trading
              can&rsquo;t fully answer it. Demo money doesn&rsquo;t teach
              real emotional discipline. Fear and greed hit differently
              when it&rsquo;s your own money on the line. That&rsquo;s not a
              knock on demo accounts. It&rsquo;s just what they&rsquo;re
              actually for, and what they&rsquo;re not.
            </p>

            <h2>What demo is genuinely good for</h2>
            <p>
              Demo is the right place to learn the mechanics: reading
              structure, placing orders correctly, sizing positions,
              building the habit of writing a reason down before you enter.
              None of that requires real money, and getting it wrong on
              demo costs you nothing but time. If you&rsquo;re still making
              mechanical mistakes (wrong lot size, missed stops, entries
              that don&rsquo;t match your own plan), you&rsquo;re not ready
              for live yet, full stop. Real money won&rsquo;t fix a process
              problem. It&rsquo;ll just make it more expensive.
            </p>

            <h2>What demo can&rsquo;t teach you</h2>
            <p>
              The mechanics aren&rsquo;t what actually blows accounts up.
              It&rsquo;s the moment a real drawdown makes your hands shake,
              or a real winning streak makes you feel bulletproof enough to
              size up without a reason. You cannot simulate that on demo,
              because your brain knows, even subconsciously, that none of it
              is real. The first time real money is genuinely at risk is the
              first time you find out how you actually behave under
              pressure, and that&rsquo;s information you can only get by
              trading live.
            </p>

            <h2>So when do you move?</h2>
            <p>
              Not when a demo equity curve looks good. That&rsquo;s the
              easiest number to fake yourself out with, because it was never
              testing the part that matters. Move when your process is
              consistent enough that you&rsquo;re no longer thinking about
              mechanics mid-trade: sizing, stop placement, and entry
              criteria have become close to automatic. At that point
              you&rsquo;re ready to find out how you handle the
              psychological side, which only shows up with real money on
              the table.
            </p>
            <p>
              You don&rsquo;t need much to start. Plenty of students begin
              with $1,000 to $5,000 live instead of jumping straight to a
              funded evaluation. The amount matters less than the fact that
              it&rsquo;s real. Losing $10 you can&rsquo;t get back teaches
              you something losing $10,000 in demo credits never will.
            </p>

            <h2>What changes the day you go live</h2>
            <p>
              Expect your discipline to get worse before it gets better.
              Rules that were easy to follow on demo will suddenly feel
              harder to stick to, and that&rsquo;s not a sign you made a
              mistake going live. It&rsquo;s the actual test starting. This
              is exactly the stage where a second set of eyes on your trades
              matters most, because you&rsquo;re now finding out things
              about your own behavior that demo could never have shown you.
            </p>
          </div>
        </Reveal>

        <RelatedLinks
          items={[
            {
              href: "/pricing/active-trader",
              label: "Level 02",
              desc: "Prop firm prep and live discipline coaching once you're ready to move real money.",
            },
            {
              href: "/pricing/foundations",
              label: "Level 01",
              desc: "Build the mechanics on demo with structured weekly homework first.",
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
