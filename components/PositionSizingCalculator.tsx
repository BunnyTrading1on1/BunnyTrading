"use client";

import { useState } from "react";

// XAUUSD: pip value is $10 per 1.00 lot (standard 100 oz contract),
// so lots = riskDollars / (stopPips × 10).
const XAUUSD_PIP_VALUE_PER_LOT = 10;

export default function PositionSizingCalculator() {
  const [account, setAccount] = useState(100);
  const [riskPct, setRiskPct] = useState(10);
  const [stopPips, setStopPips] = useState(100);

  const safePips = stopPips || 0.0001;
  const riskDollars = account * (riskPct / 100);
  const lots = riskDollars / (safePips * XAUUSD_PIP_VALUE_PER_LOT);

  const lotDisplay = lots.toFixed(3).replace(/0+$/, "").replace(/\.$/, ".00");

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
      </div>
    </div>
  );
}
