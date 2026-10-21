import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#101416",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chesslab.roboticela.com"),
  title: {
    default: "ChessGPT: Teaching AI to Understand Chess",
    template: "%s | ChessGPT",
  },
  description:
    "ChessGPT is an independent, experimental research project exploring whether a neural network can learn chess positions, predict legal moves, and develop chess-playing ability through learned representations.",
  applicationName: "ChessGPT",
  authors: [{ name: "Adeel Alam", url: "https://roboticela.com" }],
  creator: "Adeel Alam",
  publisher: "Roboticela",
  keywords: [
    "Chess AI",
    "ChessGPT",
    "Neural Network Chess",
    "Machine Learning Chess",
    "Learned Representations",
    "FEN Representation",
    "Roboticela",
    "Adeel Alam",
    "Chess Neural Model",
    "Deep Learning",
  ],
  alternates: {
    canonical: "/models/chessgpt",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/models/chessgpt",
    siteName: "ChessGPT",
    title: "ChessGPT: Teaching AI to Understand Chess",
    description:
      "An independent, early-stage research project asking how much chess a neural network can learn from data.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChessGPT: Teaching AI to Understand Chess",
    description:
      "An independent, early-stage research project asking how much chess a neural network can learn from data.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} scroll-smooth antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#101416] text-[#e8ebe9] font-sans selection:bg-[#46d3c2] selection:text-[#05201d]">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-[#46d3c2] focus:text-[#05201d] focus:px-4 focus:py-2 focus:rounded focus:font-semibold focus:shadow-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
