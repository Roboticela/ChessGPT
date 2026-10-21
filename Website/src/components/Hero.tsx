"use client";

import { useState } from "react";
import HeroSvg from "./HeroSvg";

const INITIAL_FEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyFen = async () => {
    try {
      await navigator.clipboard.writeText(INITIAL_FEN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <section
      className="relative pt-16 md:pt-20 pb-20 md:pb-24 overflow-hidden isolation-auto"
      id="overview"
      aria-labelledby="hero-h"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none opacity-40"
        style={{
          backgroundImage:
            "conic-gradient(rgba(255,255,255,0.035) 25%, transparent 0 50%, rgba(255,255,255,0.035) 0 75%, transparent 0)",
          backgroundSize: "112px 112px",
          maskImage: "radial-gradient(ellipse 80% 90% at 75% 40%, #000 0, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 90% at 75% 40%, #000 0, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.02fr_1fr] gap-10 lg:gap-12 items-center">
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.14em] text-[#46d3c2] flex items-center gap-3 mb-6">
            <span className="w-7 h-[1px] bg-[#46d3c2]" aria-hidden="true" />
            Independent AI research project
          </div>

          <h1
            id="hero-h"
            className="font-serif font-medium text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.03] tracking-tight text-[#e8ebe9] max-w-[14ch]"
          >
            Teaching AI to Understand Chess.
          </h1>

          <p className="mt-7 text-lg sm:text-xl text-[#9eabaa] leading-relaxed max-w-[34em]">
            ChessGPT is an experimental neural-network research project investigating how AI can learn
            chess positions, predict legal moves, and develop chess-playing abilities through learned
            representations.
          </p>

          <div className="flex flex-wrap gap-3.5 mt-9">
            <a
              href="#research"
              className="inline-flex items-center justify-center font-sans font-semibold text-sm sm:text-base px-6 py-3 rounded bg-[#46d3c2] text-[#05201d] border border-[#46d3c2] hover:bg-[#7be6d8] hover:border-[#7be6d8] transition-colors shadow-sm"
            >
              Explore the Research
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center justify-center font-sans font-semibold text-sm sm:text-base px-6 py-3 rounded bg-transparent text-[#e8ebe9] border border-[#364246] hover:border-[#46d3c2] hover:text-[#46d3c2] transition-colors"
            >
              View the Roadmap
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2.5 px-3.5 py-2 border border-[#364246] rounded-full text-xs sm:text-sm text-[#9eabaa] bg-[#151b1e]/50 backdrop-blur-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#46d3c2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#46d3c2]"></span>
            </span>
            <span>Research in progress. No playable model has been released.</span>
          </div>

          {/* Interactive FEN representation */}
          <div className="mt-6 flex items-center gap-2 max-w-full">
            <code
              onClick={handleCopyFen}
              title="Click to copy FEN"
              className="font-mono text-xs text-[#2b8f84] hover:text-[#46d3c2] bg-[#151b1e]/60 border border-[#273134] hover:border-[#2b8f84] px-3 py-1.5 rounded transition-colors cursor-pointer select-all break-all"
            >
              {INITIAL_FEN}
            </code>
            <button
              type="button"
              onClick={handleCopyFen}
              className="shrink-0 text-xs text-[#9eabaa] hover:text-[#46d3c2] px-2 py-1 border border-[#273134] rounded hover:border-[#46d3c2] transition-colors font-mono"
              aria-label="Copy starting FEN notation"
            >
              {copied ? "Copied!" : "Copy FEN"}
            </button>
          </div>
        </div>

        <div className="mt-4 lg:mt-0">
          <HeroSvg />
        </div>
      </div>
    </section>
  );
}
