"use client";

import { useEffect, useRef, useState } from "react";

// XAUUSD: pip value is $10 per 1.00 lot (standard 100 oz contract),
// so lots = riskDollars / (stopPips × 10).
const XAUUSD_PIP_VALUE_PER_LOT = 10;

export default function PositionSizingCalculator() {
  const [account, setAccount] = useState(1000);
  const [riskPct, setRiskPct] = useState(1);
  const [stopPips, setStopPips] = useState(100);

  const safePips = stopPips || 0.0001;
  const riskDollars = account * (riskPct / 100);
  const lots = riskDollars / (safePips * XAUUSD_PIP_VALUE_PER_LOT);

  // Tween the displayed lot size toward the target instead of snapping,
  // so every input change reads as a live recalculation, not a reset.
  const [displayLots, setDisplayLots] = useState(lots);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const from = displayLots;
    const to = lots;
    const start = performance.now();
    const duration = 380;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayLots(from + (to - from) * eased);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lots]);

  const lotDisplay = displayLots
    .toFixed(3)
    .replace(/0+$/, "")
    .replace(/\.$/, ".00");

  return (
    <div className="calc-panel">
      <div className="calc-title">XAUUSD</div>
      <div>
        <div className="field">
          <label htmlFor="acct">Account Size ($)</label>
          <input
            type="number"
            id="acct"
            min={1}
            value={account}
            onChange={(e) => setAccount(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="field">
          <label htmlFor="risk">Risk Per Trade (%)</label>
          <input
            type="number"
            id="risk"
            min={0.1}
            step={0.1}
            value={riskPct}
            onChange={(e) => setRiskPct(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div className="field">
          <label htmlFor="stop">Stop Distance (pips)</label>
          <input
            type="number"
            id="stop"
            min={0.1}
            step={0.1}
            value={stopPips}
            onChange={(e) => setStopPips(parseFloat(e.target.value) || 0)}
          />
        </div>
      </div>
      <div className="calc-result">
        <div className="lbl">Recommended Lot Size</div>
        <div className="val">{lotDisplay}</div>
        <div className="breakdown">
          Risking ${riskDollars.toFixed(2)} on a {safePips.toFixed(1)} pip stop
          <br />
          Lots = {riskDollars.toFixed(2)} ÷ ({safePips.toFixed(1)} × $
          {XAUUSD_PIP_VALUE_PER_LOT}/pip)
        </div>
        <div className="calc-fineprint">
          Not personalized advice. Every trader&rsquo;s numbers should
          reflect their own plan and risk tolerance.
        </div>
      </div>
    </div>
  );
}
