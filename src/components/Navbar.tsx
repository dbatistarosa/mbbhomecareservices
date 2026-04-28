"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "#services" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-sky-700 flex items-center justify-center shadow-md group-hover:bg-sky-600 transition-colors">
              <span className="text-white font-bold text-sm tracking-tight">
                MBB
              </span>
            </div>
            <div className="hidden sm:block">
              <p
                className={`font-semibold text-base leading-tight transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                MBB Homecare
              </p>
              <p
                className={`text-xs transition-colors ${
                  scrolled ? "text-slate-500" : "text-sky-200"
                }`}
              >
                Services
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-sky-400 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:5618231442"
              className="text-sm font-semibold text-sky-500 hover:text-sky-400 transition-colors"
            >
              (561) 823-1442
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-sm font-semibold transition-colors shadow-md shadow-sky-900/20"
            >
              Get Care Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 py-4 px-2 rounded-b-2xl shadow-xl">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-slate-700 font-medium rounded-xl hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 px-4 pt-3 border-t border-slate-100 flex flex-col gap-3">
              <a
                href="tel:5618231442"
                className="text-sky-600 font-semibold text-sm"
              >
                (561) 823-1442
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-sky-600 text-white font-semibold text-sm"
              >
                Get Care Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
