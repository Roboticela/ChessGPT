import { ImageResponse } from "next/og";

export const alt = "ChessGPT: Teaching AI to Understand Chess";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#101416",
          padding: "80px",
          color: "#e8ebe9",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header with Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "#151b1e",
              border: "1.5px solid #364246",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "22px",
                backgroundColor: "#46d3c2",
                borderRadius: "3px",
              }}
            />
          </div>
          <span style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            Chess<span style={{ color: "#46d3c2" }}>GPT</span>
          </span>
          <div
            style={{
              marginLeft: "auto",
              padding: "8px 18px",
              borderRadius: "999px",
              border: "1px solid #364246",
              color: "#46d3c2",
              fontSize: "18px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "#46d3c2",
              }}
            />
            Research in progress
          </div>
        </div>

        {/* Center content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "64px",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              color: "#e8ebe9",
            }}
          >
            Teaching AI to Understand Chess.
          </div>
          <div
            style={{
              fontSize: "24px",
              lineHeight: 1.45,
              color: "#9eabaa",
              maxWidth: "850px",
            }}
          >
            An experimental neural-network research project exploring whether AI can learn chess
            positions, predict legal moves, and develop chess abilities through learned representations.
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "18px",
            color: "#9eabaa",
            borderTop: "1px solid #273134",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
            <span style={{ color: "#46d3c2" }}>Roboticela Research</span>
            <span>•</span>
            <span>Adeel Alam</span>
          </div>
          <span style={{ fontFamily: "monospace", color: "#46d3c2" }}>
            chesslab.roboticela.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
