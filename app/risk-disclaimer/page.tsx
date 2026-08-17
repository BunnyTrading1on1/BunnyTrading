import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclaimer — Bunny Trading",
  description:
    "Trading foreign exchange and commodities like gold (XAU/USD) carries a high level of risk. Read before using this site or its tools.",
};

export default function RiskDisclaimer() {
  return (
    <section className="line-top">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Please read</span>
          <h2>Risk Disclaimer</h2>
        </div>
        <div className="prose">
          <p>
            Trading foreign exchange and commodities such as gold (XAU/USD)
            on margin carries a high level of risk and may not be suitable
            for everyone. It is possible to lose some or all of your initial
            investment, and you should not trade with money you cannot
            afford to lose.
          </p>
          <p>
            Bunny Trading provides educational mentorship only. Nothing on
            this site, in the position sizing tool, in trade reviews, or in
            any conversation with a mentor constitutes financial advice, a
            recommendation to buy or sell any asset, or a guarantee of
            future results. Past performance &mdash; yours or anyone
            else&rsquo;s &mdash; is not indicative of future performance.
          </p>
          <p>
            The position sizing calculator on this site is a convenience
            tool based on standard XAUUSD contract math. It is provided as-is,
            may not reflect your broker&rsquo;s specific contract
            specifications, fees, or slippage, and should be verified
            against your own broker before use.
          </p>
          <p>
            You are solely responsible for your own trading decisions,
            account risk management, and compliance with any laws or
            regulations that apply to you. Consider seeking advice from a
            licensed financial advisor before trading with real capital.
          </p>
        </div>
      </div>
    </section>
  );
}
