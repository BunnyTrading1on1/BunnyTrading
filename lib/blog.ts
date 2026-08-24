export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601
  displayDate: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "xauusd-position-sizing-guide",
    title: "XAUUSD Position Sizing: The Formula Behind Every Trade Review",
    description:
      "The exact math I check every gold trade against before I look at anything else — account size, risk percentage, stop distance, and why the order you calculate them in matters.",
    date: "2026-08-24",
    displayDate: "August 24, 2026",
  },
  {
    slug: "stop-cutting-winners-early",
    title: "Why Cutting Winners Early Costs You More Than Bad Losses",
    description:
      "Cutting winners early feels like discipline. It isn't — it's the same fear that blows accounts up eventually, just wearing a more comfortable name.",
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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
