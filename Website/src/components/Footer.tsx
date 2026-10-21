"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [yearText, setYearText] = useState("2026");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    if (currentYear > 2026) {
      setYearText(`2026–${currentYear}`);
    }
  }, []);

  return (
    <footer className="border-t border-[#273134] pt-14 pb-10 bg-[#0c1011] text-[#9eabaa]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1.2fr] gap-12">
          <div>
            <Link
              href="#overview"
              className="inline-flex items-center gap-2.5 font-serif text-2xl font-semibold text-[#e8ebe9] tracking-tight hover:opacity-90 transition-opacity"
              aria-label="ChessGPT, back to top"
            >
              <span>
                Chess<b className="text-[#46d3c2]">GPT</b>
              </span>
            </Link>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#9eabaa] max-w-[32em]">
              An experimental neural-network research project exploring how a model can learn chess
              positions and moves from data.
            </p>
            <p className="mt-3 text-sm text-[#9eabaa]">
              Developed by Adeel Alam. Part of the{" "}
              <a
                href="https://roboticela.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#46d3c2] hover:text-[#7be6d8] transition-colors"
              >
                Roboticela
              </a>{" "}
              ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <nav aria-label="Footer navigation">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#9eabaa] mb-4 font-medium">
                On this page
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-sm">
                <li>
                  <a href="#overview" className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#research" className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors">
                    Research
                  </a>
                </li>
                <li>
                  <a href="#approach" className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#roadmap" className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#status" className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Project and contact links">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#9eabaa] mb-4 font-medium">
                Contact and links
              </h4>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-sm">
                <li>
                  <a
                    href="mailto:adeel@roboticela.com"
                    className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors"
                  >
                    adeel@roboticela.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Roboticela/ChessGPT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors"
                  >
                    Project repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/roboticela"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors"
                  >
                    Roboticela on GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://roboticela.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9eabaa] hover:text-[#46d3c2] transition-colors"
                  >
                    roboticela.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#273134] flex flex-wrap gap-4 justify-between items-center text-xs text-[#9eabaa]">
          <span>&copy; {yearText} Roboticela. All rights reserved.</span>
          <span>Experimental research under development.</span>
        </div>
      </div>
    </footer>
  );
}
