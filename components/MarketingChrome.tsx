"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

// The student portal has its own dark, app-like look and shouldn't be
// sandwiched by the marketing site's light nav/footer/WhatsApp bubble.
export default function MarketingChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/portal")) return null;
  return <>{children}</>;
}
