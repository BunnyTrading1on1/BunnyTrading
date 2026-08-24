import Link from "next/link";
import Magnetic from "@/components/Magnetic";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>
          <h2>Ready to start?</h2>
          <div className="note">Month to month · No lock-in</div>
        </div>
        <Magnetic strength={0.3}>
          <Link href="/contact" className="cta">
            DM to Start<span className="cta-arrow">→</span>
          </Link>
        </Magnetic>
      </div>
      <div className="wrap footer-legal">
        <span className="copyright">&copy; 2026 Bunny Trading</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/risk-disclaimer">Risk Disclaimer</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
