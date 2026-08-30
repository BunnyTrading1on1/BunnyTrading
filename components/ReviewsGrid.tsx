"use client";

import { useState } from "react";
import { REVIEWS, type Review } from "@/lib/reviews";

const FILTERS = ["All", "Foundations", "Active Trader", "Elite"] as const;

export default function ReviewsGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");

  const visible: Review[] =
    filter === "All" ? REVIEWS : REVIEWS.filter((r) => r.tier === filter);

  return (
    <>
      <div className="chips">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            className={`chip${filter === f ? " on" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="rev-grid">
        {visible.map((r, i) => (
          <div className="rev" key={i}>
            <p>&ldquo;{r.quote}&rdquo;</p>
            <div className="rev-footer">
              <span className="mono">{r.tier}</span>
              <span>{r.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
