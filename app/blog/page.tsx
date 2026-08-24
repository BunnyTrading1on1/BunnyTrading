import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Gold Trading Mentorship | Bunny Trading",
  description:
    "Position sizing, risk management, and trading psychology, written from the same rules every mentorship review is checked against.",
};

export default function BlogIndex() {
  return (
    <section className="line-top">
      <div className="wrap">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          <div className="section-head">
            <span className="eyebrow">From the desk</span>
            <h1>Rules, not predictions.</h1>
            <p>
              Position sizing, risk management, and trading psychology,
              written from the same rules every mentorship review is checked
              against.
            </p>
          </div>
        </Reveal>

        <Reveal stagger>
          <div className="blog-list">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-list-item">
                <span className="blog-list-date">{post.displayDate}</span>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <span className="blog-list-read">
                  Read<span className="cta-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
