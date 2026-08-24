"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "bt_cookie_notice_dismissed";

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="status">
      <p>
        This site uses cookies for basic analytics (Google Analytics, Vercel
        Analytics) to see how visitors use it. No personal data is sold.{" "}
        <Link href="/privacy-policy" style={{ color: "var(--gold)" }}>
          Learn more
        </Link>
      </p>
      <button type="button" className="cookie-notice-btn" onClick={dismiss}>
        Got it
      </button>
    </div>
  );
}
