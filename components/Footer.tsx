import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <h3>Ready to start?</h3>
          <div className="note">Month to month · No lock-in</div>
        </div>
        <Link href="/contact" className="cta">
          DM to Start
        </Link>
      </div>
      <div className="wrap footer-legal">
        <Link href="/risk-disclaimer">Risk Disclaimer</Link>
      </div>
    </footer>
  );
}
