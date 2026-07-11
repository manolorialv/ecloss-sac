import { ImageResponse } from "next/og";

export var runtime = "edge";
export var size = { width: 1200, height: 630 };
export var contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0E17",
          backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,107,53,0.15), transparent 45%)",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 700, color: "#EDF1F7", letterSpacing: -2, display: "flex" }}>
          ECLOS <span style={{ color: "#FF6B35", marginLeft: 16 }}>GROUP</span>
        </div>
        <div style={{ fontSize: 28, color: "#8A94A6", marginTop: 24, display: "flex" }}>
          Ingenieria tecnologica integral, Lima Peru
        </div>
      </div>
    ),
    size
  );
}
