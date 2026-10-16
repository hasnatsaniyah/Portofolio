"use client";

import { useState } from "react";

/* ── Logo "Sany" — Cormorant Garamond italic ── */
function SanyLogo({ dark = true }: { dark?: boolean }) {
  return (
    <span
      style={{
        fontFamily: "var(--font-cormorant)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "28px",
        letterSpacing: "0.04em",
        color: dark ? "#2a1a0a" : "#f5f0e8",
        lineHeight: 1,
        display: "flex",
        alignItems: "baseline",
        gap: "1px",
      }}
    >
      Sany
      <span style={{ color: "#f5c300", fontSize: "32px", lineHeight: 1, marginLeft: "1px" }}>.</span>
    </span>
  );
}

const NAV_ITEMS = [
  { label: "Home",    id: "home" },
  { label: "About",   id: "about" },
  { label: "Works",   id: "projects" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-cream/90 backdrop-blur-sm border-b border-brown/10">
      <div className="max-w-[1200px] mx-auto px-8 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scrollTo("home")}
            className="cursor-pointer border-none bg-transparent p-0 flex items-center"
            aria-label="Home"
          >
            <SanyLogo />
          </button>
        </div>

        {/* Nav Links - desktop */}
        <ul className="hidden md:flex gap-10 list-none items-center">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="bg-transparent border-none cursor-pointer text-nav text-sm font-medium tracking-wide hover:text-gold transition-colors duration-200 font-sans"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Kanan: ikon kamera + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="/cv-hasna.pdf"
            download
            className="bg-transparent border border-brown/20 cursor-pointer text-nav px-4 py-1.5 rounded-full flex items-center gap-2 hover:border-gold hover:text-gold transition-all duration-200 text-[11px] font-medium font-sans tracking-wide"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            CV
          </a>

          {/* Hamburger mobile */}
          <button
            className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-[22px] h-0.5 bg-brown rounded-sm transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-[22px] h-0.5 bg-brown rounded-sm transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-0.5 bg-brown rounded-sm transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-8 py-4 gap-4 border-t border-brown/10 bg-cream">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollTo(item.id); setMenuOpen(false); }}
              className="bg-transparent border-none cursor-pointer text-brown text-base font-medium font-sans hover:text-gold transition-colors duration-200 text-left"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
