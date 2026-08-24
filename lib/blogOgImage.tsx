import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function renderBlogOgImage(title: string) {
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
          Bunny Trading &middot; Blog
        </span>
        <span
          style={{
            fontSize: 62,
            fontWeight: 800,
            color: "#F3EEE4",
            marginTop: 28,
            lineHeight: 1.15,
            textTransform: "uppercase",
          }}
        >
          {title}
        </span>
        <div
          style={{
            display: "flex",
            width: 120,
            height: 6,
            background: "#D9A94A",
            marginTop: 40,
          }}
        />
      </div>
    ),
    { ...ogImageSize },
  );
}
