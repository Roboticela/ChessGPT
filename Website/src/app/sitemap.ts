import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chesslab.roboticela.com";

  return [
    {
      url: `${baseUrl}/models/chessgpt`,
      lastModified: new Date("2026-10-21T00:00:00.000Z"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
