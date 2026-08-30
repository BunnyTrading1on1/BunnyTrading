export interface Review {
  quote: string;
  tier: "Foundations" | "Active Trader" | "Elite";
  duration: string;
}

// Illustrative examples of the kind of feedback students give, written to
// show the range across tiers. Not yet tied to specific verified students —
// swap these for real testimonials (screenshots/clips) as they come in.
export const REVIEWS: Review[] = [
  {
    quote:
      "Before Bunny Trading I was taking trades without really understanding why I was entering. The mentorship helped me slow down, understand the setup, and actually have a reason behind my trades.",
    tier: "Active Trader",
    duration: "4 months in",
  },
  {
    quote:
      "I used to overtrade whenever I saw something I liked on the chart. Now I wait for the right setup and manage my risk properly. I feel much more confident with my trading.",
    tier: "Elite",
    duration: "7 months in",
  },
  {
    quote:
      "I came in wanting setups and got homework instead. It frustrated me for a few weeks. Looking back that was the point, but if you're expecting to be handed entries, know that up front.",
    tier: "Foundations",
    duration: "3 months in",
  },
  {
    quote:
      "What I liked most is that I wasn't just being told where to enter. I was taught the reasoning behind the trade and how to analyse it myself. That's made a massive difference to how I approach the market.",
    tier: "Foundations",
    duration: "2 months in",
  },
  {
    quote:
      "My biggest problem was forcing trades because I felt like I had to be in the market. The mentorship taught me that sometimes doing nothing is the better decision.",
    tier: "Elite",
    duration: "5 months in",
  },
  {
    quote:
      "Having someone actually look at my trades and explain what I did right and wrong has been extremely useful. I started noticing mistakes I didn't even realise I was making.",
    tier: "Active Trader",
    duration: "6 months in",
  },
];
