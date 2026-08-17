import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15130F",
          borderRadius: 4,
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#C08A2E",
            fontFamily: "sans-serif",
          }}
        >
          B
        </span>
      </div>
    ),
    { ...size },
  );
}
