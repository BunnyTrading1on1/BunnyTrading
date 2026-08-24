"use client";

import { useEffect } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export const UTM_STORAGE_KEY = "bt_utm";

export default function UtmCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};

    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) found[key] = value;
    }

    if (Object.keys(found).length > 0) {
      window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(found));
    }
  }, []);

  return null;
}
