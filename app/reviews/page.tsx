import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewsGrid from "@/components/ReviewsGrid";

export const metadata: Metadata = {
  title: "Student Feedback | Bunny Trading",
  description:
    "What students say about one-on-one mentorship with Bunny Trading, across Foundations, Active Trader, and Elite.",
};

export default function Reviews() {
  return (
    <section className="line-top">
      <div className="wrap">
        <Reveal>
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
          <div className="section-head">
            <span className="eyebrow">In their own words</span>
            <h1>What students actually say.</h1>
            <p>
              Illustrative examples of the kind of feedback students give
              across all three levels, including the ones who found it
              harder than expected. Real screenshots and clips are on the
              way to replace these.
            </p>
          </div>
        </Reveal>

        <Reveal stagger>
          <ReviewsGrid />
        </Reveal>

        <div style={{ marginTop: 48 }}>
          <Link href="/contact" className="nav-cta">
            DM to Start<span className="cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
