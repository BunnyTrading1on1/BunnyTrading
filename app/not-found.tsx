import Link from "next/link";

export default function NotFound() {
  return (
    <section className="line-top notfound">
      <div className="wrap">
        <span className="eyebrow">Error 404</span>
        <h2>Stopped out.</h2>
        <p>
          That page doesn&rsquo;t exist &mdash; or it moved. No harm done;
          the loss here is zero.
        </p>
        <div className="notfound-links">
          <Link href="/" className="cta-dark">
            Back to Home<span className="cta-arrow">→</span>
          </Link>
          <Link href="/pricing">See Pricing</Link>
          <Link href="/position-sizing">Sizing Tool</Link>
        </div>
      </div>
    </section>
  );
}
