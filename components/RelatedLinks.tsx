import Link from "next/link";
import Reveal from "@/components/Reveal";

interface RelatedLink {
  href: string;
  label: string;
  desc: string;
}

export default function RelatedLinks({ items }: { items: RelatedLink[] }) {
  return (
    <Reveal delay={160}>
      <div className="section-head" style={{ marginTop: 56 }}>
        <span className="eyebrow">Related</span>
        <h2>Where to go next.</h2>
      </div>
      <div
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        }}
      >
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="related-card">
            <span className="tag">{item.label}</span>
            <p>{item.desc}</p>
          </Link>
        ))}
      </div>
    </Reveal>
  );
}
