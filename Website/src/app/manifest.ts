import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ChessGPT: Teaching AI to Understand Chess",
    short_name: "ChessGPT",
    description:
      "An experimental neural-network research project exploring whether AI can learn chess representations.",
    start_url: "/",
    display: "standalone",
    background_color: "#101416",
    theme_color: "#101416",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
