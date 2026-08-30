export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601
  displayDate: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "pre-trade-checklist",
    title: "What I Check Before I Even Open a Chart",
    description:
      "Six honest questions before you start trading today, not once you're already staring at a setup. Sleep, mood, market conditions, and whether you're actually willing to walk away with zero trades.",
    date: "2026-08-30",
    displayDate: "August 30, 2026",
  },
  {
    slug: "xauusd-position-sizing-guide",
    title: "XAUUSD Position Sizing: How to Calculate Your Lot Size",
    description:
      "The formula behind XAUUSD position sizing: account size, risk percentage, stop distance, and why the order you calculate them in matters.",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
  },
  {
    slug: "stop-cutting-winners-early",
    title: "Why Cutting Winners Early Costs You More Than Bad Losses",
    description:
      "Cutting winners early feels like discipline. It isn't. It's the same fear that blows accounts up eventually, just wearing a more comfortable name.",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
  },
  {
    slug: "demo-vs-live-trading",
    title: "Demo vs Live: When to Move Real Money Into Gold Trading",
    description:
      "Demo money doesn't teach real emotional discipline. Here's how to know when you're actually ready to trade live, and what changes the day you do.",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
  },
  {
    slug: "reward-to-risk-ratio-minimum",
    title: "Why 1:2 Reward-to-Risk Is a Minimum, Not a Suggestion",
    description:
      "A 1:2 minimum isn't arbitrary. It's the line where being right less than half the time can still be profitable. Here's the math behind the rule.",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
  },
  {
    slug: "written-reason-before-entry",
    title: "The Written Reason Rule: Why I Won't Review a Trade Without One",
    description:
      "If you can't explain a trade in one sentence before you take it, you don't have a setup. You have a hunch dressed up as one.",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
  },
  {
    slug: "revenge-trading-after-a-loss",
    title: "Revenge Trading: The Pattern I Catch Most in Reviews",
    description:
      "Revenge trades don't look reckless from the inside. They look like conviction. Here's how to tell the difference before you click buy.",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
