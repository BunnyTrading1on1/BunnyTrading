export type Tier = "foundations" | "active" | "elite";

export const TIER_LABEL: Record<Tier, string> = {
  foundations: "Foundations",
  active: "Active Trader",
  elite: "Elite",
};

// Higher tiers include everything below them (matches the site's own
// "Foundations → Active Trader → Elite" progression framing).
export const TIER_RANK: Record<Tier, number> = {
  foundations: 0,
  active: 1,
  elite: 2,
};

// Module metadata is public on purpose — it's the "teaser" a locked module
// shows to upsell a student (title, subtitle, tier badge, lesson count). The
// actual lesson titles are NOT here — those live in the `lessons` table in
// Supabase, gated by tier via Row Level Security, and are fetched at runtime
// so a student's browser only ever receives content their tier can access.
export type Module = {
  id: string;
  title: string;
  sub: string;
  tier: Tier;
  icon: string;
  lessonCount: number;
  totalMinutes: number;
};

export const MODULES: Module[] = [
  {
    id: "forex-foundations",
    title: "Forex Foundations",
    sub: "The building blocks every trader needs first",
    tier: "foundations",
    icon: "book",
    lessonCount: 4,
    totalMinutes: 51,
  },
  {
    id: "market-structure",
    title: "Market Structure",
    sub: "Read the map before you take a trade",
    tier: "foundations",
    icon: "trend",
    lessonCount: 4,
    totalMinutes: 59,
  },
  {
    id: "support-resistance",
    title: "Support & Resistance Framework",
    sub: "Our core zone-based framework",
    tier: "active",
    icon: "layers",
    lessonCount: 4,
    totalMinutes: 57,
  },
  {
    id: "candlestick-confirmation",
    title: "Candlestick Confirmation",
    sub: "Timing entries with intent",
    tier: "active",
    icon: "bars",
    lessonCount: 4,
    totalMinutes: 56,
  },
  {
    id: "risk-management",
    title: "Risk Management",
    sub: "Protecting capital first",
    tier: "active",
    icon: "shield",
    lessonCount: 4,
    totalMinutes: 54,
  },
  {
    id: "xauusd-mastery",
    title: "XAUUSD Mastery",
    sub: "Trading gold with structure",
    tier: "elite",
    icon: "sun",
    lessonCount: 4,
    totalMinutes: 69,
  },
  {
    id: "trading-psychology",
    title: "Trading Psychology",
    sub: "Mastering the mental game",
    tier: "elite",
    icon: "heart",
    lessonCount: 4,
    totalMinutes: 54,
  },
];

export const MEDIA = {
  live: [
    {
      status: "live" as const,
      title: "Live Market Open: NY Session Gold Setups",
      desc: "Watching XAUUSD as New York opens — live reads on structure and reaction levels.",
      viewers: 128,
    },
    {
      status: "scheduled" as const,
      title: "Weekly Q&A: Ask Me Anything",
      desc: "Bring your charts and questions from the week.",
      when: "Fri · 7:00 PM EST",
    },
    {
      status: "scheduled" as const,
      title: "London Session Breakdown",
      desc: "Live walkthrough of the London open across majors.",
      when: "Mon · 8:00 AM EST",
    },
  ],
  videos: [
    { t: "Reading Order Flow in Real Time", d: "22:14" },
    { t: "Anatomy of a Perfect A+ Setup", d: "15:47" },
    { t: "Gold vs Forex: Key Differences", d: "18:03" },
    { t: "Trade Review: 3 Wins, 1 Loss", d: "26:32" },
  ],
  library: [
    { t: "Support & Resistance Cheat Sheet", s: "PDF · 1.2 MB" },
    { t: "Risk Management Calculator", s: "XLSX · 84 KB" },
    { t: "Candlestick Pattern Quick Reference", s: "PDF · 2.4 MB" },
    { t: "Trading Plan Template", s: "PDF · 340 KB" },
  ],
};
