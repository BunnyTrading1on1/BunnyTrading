import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <div className="wrap">
        <Link href="/" className="logo">
          BUNNY <span>TRADING</span>
        </Link>
        <div className="links">
          <Link href="/pricing">Pricing</Link>
          <Link href="/position-sizing">Sizing Tool</Link>
        </div>
        <Link href="/contact" className="nav-cta">
          DM to Start
        </Link>
      </div>
    </nav>
  );
}
