"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#101416]/90 backdrop-blur-md border-b border-[#273134] transition-all">
      <div className="max-w-[1180px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="#overview"
          onClick={closeMenu}
          className="flex items-center gap-2.5 text-inherit no-underline font-serif text-[1.3rem] font-semibold tracking-tight hover:opacity-95 transition-opacity"
          aria-label="ChessGPT, back to top"
        >
          <svg
            className="w-[26px] h-[26px] shrink-0"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <rect
              x="4"
              y="4"
              width="56"
              height="56"
              rx="8"
              fill="#151b1e"
              stroke="#364246"
            />
            <rect x="14" y="14" width="18" height="18" fill="#2b3639" />
            <rect x="32" y="32" width="18" height="18" fill="#2b3639" />
            <rect x="32" y="14" width="18" height="18" fill="#46d3c2" />
            <circle cx="23" cy="41" r="5" fill="#46d3c2" />
            <path d="M23 41L41 23" stroke="#05201d" strokeWidth="1.5" />
          </svg>
          <span className="font-serif">
            Chess<b className="text-[#46d3c2] font-semibold">GPT</b>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 list-none m-0 p-0">
            <li>
              <a
                href="#overview"
                className="text-sm font-medium text-[#9eabaa] hover:text-[#e8ebe9] hover:border-b hover:border-[#46d3c2] pb-1 transition-colors"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#research"
                className="text-sm font-medium text-[#9eabaa] hover:text-[#e8ebe9] hover:border-b hover:border-[#46d3c2] pb-1 transition-colors"
              >
                Research
              </a>
            </li>
            <li>
              <a
                href="#approach"
                className="text-sm font-medium text-[#9eabaa] hover:text-[#e8ebe9] hover:border-b hover:border-[#46d3c2] pb-1 transition-colors"
              >
                Approach
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                className="text-sm font-medium text-[#9eabaa] hover:text-[#e8ebe9] hover:border-b hover:border-[#46d3c2] pb-1 transition-colors"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-sm font-medium text-[#9eabaa] hover:text-[#e8ebe9] hover:border-b hover:border-[#46d3c2] pb-1 transition-colors"
              >
                About
              </a>
            </li>
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#research"
            className="inline-flex items-center gap-2 font-sans font-semibold text-sm px-4 py-2 rounded bg-[#46d3c2] text-[#05201d] border border-[#46d3c2] hover:bg-[#7be6d8] hover:border-[#7be6d8] transition-colors shadow-sm"
          >
            Explore the Research
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          id="menuBtn"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-11 h-11 rounded border border-[#364246] text-[#e8ebe9] bg-transparent hover:border-[#46d3c2] transition-colors focus-visible:outline-2 focus-visible:outline-[#46d3c2]"
        >
          {isOpen ? (
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 4l12 12M16 4L4 16" />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M3 6h14M3 10h14M3 14h14" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile Navigation"
          className="md:hidden border-b border-[#273134] bg-[#101416] px-6 py-4 flex flex-col animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <ul className="list-none m-0 p-0 flex flex-col">
            <li className="border-b border-[#273134]">
              <a
                href="#overview"
                onClick={closeMenu}
                className="block py-3.5 text-base text-[#e8ebe9] hover:text-[#46d3c2]"
              >
                Overview
              </a>
            </li>
            <li className="border-b border-[#273134]">
              <a
                href="#research"
                onClick={closeMenu}
                className="block py-3.5 text-base text-[#e8ebe9] hover:text-[#46d3c2]"
              >
                Research
              </a>
            </li>
            <li className="border-b border-[#273134]">
              <a
                href="#approach"
                onClick={closeMenu}
                className="block py-3.5 text-base text-[#e8ebe9] hover:text-[#46d3c2]"
              >
                Approach
              </a>
            </li>
            <li className="border-b border-[#273134]">
              <a
                href="#roadmap"
                onClick={closeMenu}
                className="block py-3.5 text-base text-[#e8ebe9] hover:text-[#46d3c2]"
              >
                Roadmap
              </a>
            </li>
            <li className="border-b border-[#273134]">
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-3.5 text-base text-[#e8ebe9] hover:text-[#46d3c2]"
              >
                About
              </a>
            </li>
            <li className="pt-4">
              <a
                href="#research"
                onClick={closeMenu}
                className="block w-full py-3 text-center font-semibold text-sm rounded bg-[#46d3c2] text-[#05201d] hover:bg-[#7be6d8] transition-colors"
              >
                Explore the Research
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
