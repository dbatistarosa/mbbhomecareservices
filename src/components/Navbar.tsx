"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-violet-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-700 to-pink-700 flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm tracking-tight">
                MBB
              </span>
            </div>
            <div>
              <p
                className={`font-bold text-base leading-tight transition-colors ${
                  transparent ? "text-white" : "text-violet-900"
                }`}
              >
                MBB Homecare
              </p>
              <p
                className={`text-xs transition-colors ${
                  transparent ? "text-violet-200" : "text-pink-600"
                }`}
              >
                Services
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    active
                      ? transparent
                        ? "bg-white/15 text-white"
                        : "bg-violet-50 text-violet-700"
                      : transparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-slate-600 hover:text-violet-700 hover:bg-violet-50"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:5618231442"
              className={`text-sm font-semibold transition-colors ${
                transparent
                  ? "text-violet-200 hover:text-white"
                  : "text-violet-600 hover:text-violet-800"
              }`}
            >
              (561) 823-1442
            </a>
            <Link
              href="/booking"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-700 to-pink-700 hover:from-violet-600 hover:to-pink-600 text-white text-sm font-semibold transition-all shadow-md shadow-violet-900/25"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              transparent
                ? "text-white hover:bg-white/10"
                : "text-slate-700 hover:bg-violet-50"
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
          <div className="md:hidden bg-white border-t border-violet-100 py-4 px-2 rounded-b-2xl shadow-xl">
            {navLinks.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 px-4 font-medium rounded-xl transition-colors ${
                    active
                      ? "bg-violet-50 text-violet-700"
                      : "text-slate-700 hover:bg-violet-50 hover:text-violet-700"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
            <div className="mt-3 px-4 pt-3 border-t border-violet-100 flex flex-col gap-3">
              <a
                href="tel:5618231442"
                className="text-violet-700 font-semibold text-sm"
              >
                (561) 823-1442
              </a>
              <Link
                href="/booking"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-gradient-to-r from-violet-700 to-pink-700 text-white font-semibold text-sm"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
