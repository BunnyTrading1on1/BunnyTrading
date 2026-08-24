import Link from "next/link";
import Reveal from "@/components/Reveal";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function Testimonials({
  limit,
  heading = "What students say.",
}: {
  limit?: number;
  heading?: string;
}) {
  const items = limit ? TESTIMONIALS.slice(0, limit) : TESTIMONIALS;

  return (
    <section id="testimonials" className="line-top">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">In their own words</span>
            <h2>{heading}</h2>
            {limit && limit < TESTIMONIALS.length && (
              <p>
                <Link href="/pricing#testimonials" style={{ color: "var(--gold-text)" }}>
                  Read more student feedback →
                </Link>
              </p>
            )}
          </div>
        </Reveal>
        <Reveal stagger>
          <div className="testimonial-grid">
            {items.map((t) => (
              <div key={t.title} className="testimonial-card">
                <p className="testimonial-title">&ldquo;{t.title}&rdquo;</p>
                <p className="testimonial-quote">{t.quote}</p>
                <span className="testimonial-attribution">{t.attribution}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
