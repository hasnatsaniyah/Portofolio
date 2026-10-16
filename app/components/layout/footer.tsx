"use client";

/* ── Logo "Sany" — Cormorant Garamond italic ── */
function SanyLogo({ large = false }: { large?: boolean }) {
  const size = large ? "42px" : "28px";
  const dotSize = large ? "48px" : "32px";
  return (
    <span
      style={{
        fontFamily: "var(--font-cormorant)",
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: size,
        letterSpacing: "0.04em",
        color: "#f5f0e8",
        lineHeight: 1,
        display: "flex",
        alignItems: "baseline",
        gap: "1px",
      }}
    >
      Sany
      <span style={{ color: "#f5c300", fontSize: dotSize, lineHeight: 1, marginLeft: "1px" }}>.</span>
    </span>
  );
}

const NAV_LINKS = [
  { label: "Home",    id: "home" },
  { label: "About",   id: "about" },
  { label: "Projects",id: "projects" },
  { label: "Contact", id: "contact" },
];

const SOCIAL_LINKS = [
  { label: "GitHub",    href: "https://github.com/hasnatsaniyah" },
  { label: "LinkedIn",  href: "https://linkedin.com/in/hasna-tsaniya-hidayat" },
  { label: "Instagram", href: "https://instagram.com/hsntsani" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className="relative bg-brown overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Grid dekorasi */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="fgrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f5f0e8" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fgrid)" />
      </svg>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-14">
        {/* ── Baris atas ── */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 pb-10 border-b border-cream/[0.07]">

          {/* Kiri — logo + tagline */}
          <div>
            <SanyLogo large />
            <p className="text-[11px] tracking-[0.22em] text-cream/30 font-sans uppercase mt-2">
              Front End Developer · Quality Assurance
            </p>
          </div>

          {/* Tengah — nav links */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[11px] tracking-[0.18em] text-cream/35 font-sans uppercase hover:text-gold transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Kanan — scroll to top */}
          <button
            onClick={() => scrollTo("home")}
            className="group flex items-center gap-3 border border-cream/15 rounded-full px-5 py-2.5 hover:border-gold/50 hover:text-gold transition-all duration-300 text-cream/35"
            aria-label="Scroll to top"
          >
            <span className="text-[10px] tracking-[0.18em] font-sans uppercase">Back to Top</span>
            <span className="w-6 h-6 rounded-full border border-cream/20 flex items-center justify-center group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="18 15 12 9 6 15"/>
              </svg>
            </span>
          </button>
        </div>

        {/* ── Baris bawah ── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8">
          {/* Copyright */}
          <p className="text-[10px] tracking-[0.15em] text-cream/20 font-sans uppercase">
            © 2026 Hasna — All rights reserved
          </p>

          {/* Social */}
          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.15em] text-cream/25 font-sans uppercase hover:text-gold transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>

          {/* Built with */}
          <p className="text-[10px] tracking-[0.15em] text-cream/15 font-sans uppercase">
            Built with Next.js · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
