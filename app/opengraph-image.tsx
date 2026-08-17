import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#15130F",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#C08A2E",
            fontWeight: 700,
          }}
        >
          One-on-one · XAU/USD
        </span>
        <span
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#F3EEE4",
            marginTop: 24,
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          Trade the <span style={{ color: "#D9A94A" }}>rule,</span>
        </span>
        <span
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#F3EEE4",
            lineHeight: 1.05,
            textTransform: "uppercase",
          }}
        >
          not the number.
        </span>
        <span
          style={{
            fontSize: 28,
            color: "#8A8172",
            marginTop: 40,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Bunny Trading
        </span>
      </div>
    ),
    { ...size },
  );
}
