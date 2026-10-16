"use client";

import { useEffect, useState } from "react";

const FULL_TEXT = "PORTFOLIO";

// Karakter per karakter dengan offset vertikal masing-masing
const CHARS: { char: string; offset: string; color: "brown" | "gold"; marginLeft?: string }[] = [
  { char: "P", offset: "top-[4px]",    color: "brown" },
  { char: "O", offset: "top-[14px]",   color: "gold"  },
  { char: "R", offset: "-top-[6px]",   color: "brown" },
  { char: "T", offset: "-top-[14px]",  color: "brown" },
  { char: "F", offset: "top-[8px]",    color: "brown" },
  { char: "O", offset: "-top-[4px]",   color: "gold"  },
  { char: "L", offset: "top-[10px]",   color: "brown" },
  { char: "I", offset: "-top-[10px]",  color: "brown" },
  { char: "O", offset: "top-[6px]",    color: "gold"  },
];

/* ── Custom SVG T — bar atas menjulur jauh ke kiri ── */
function CustomT() {
  return (
    <svg
      viewBox="0 0 0.72 1"
      style={{ width: "0.72em", height: "1em", display: "block", overflow: "visible" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bar horizontal atas — menjulur jauh ke kiri */}
      <rect x="-0.55" y="0" width="1.27" height="0.11" fill="#2a1a0a" />
      {/* Stem vertikal — di tengah agak ke kanan */}
      <rect x="0.27" y="0.11" width="0.18" height="0.89" fill="#2a1a0a" />
    </svg>
  );
}

/* ── Custom SVG L — stem + kaki panjang overflow ke kanan bawah I dan O ── */
function CustomL() {
  return (
    <svg
      viewBox="0 0 0.22 1"
      style={{ width: "0.22em", height: "1em", display: "block", overflow: "visible" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Stem vertikal */}
      <rect x="0" y="0" width="0.18" height="1" fill="#2a1a0a" />
      {/* Kaki menjulur jauh ke kanan — melewati bawah I dan O */}
      <rect x="0" y="0.89" width="1.1" height="0.11" fill="#2a1a0a" />
    </svg>
  );
}

export default function HeroSection() {
  // Berapa huruf yang sudah "diketik" — 0 sampai 9
  const [count, setCount] = useState(0);
  // Apakah cursor masih tampil (berhenti setelah selesai)
  const [showCursor, setShowCursor] = useState(true);
  // Fade in keseluruhan elemen lain
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Langsung ready — tidak perlu delay
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (count >= FULL_TEXT.length) {
      // Selesai — hilangkan cursor setelah 800ms
      const t = setTimeout(() => setShowCursor(false), 800);
      return () => clearTimeout(t);
    }
    // Ketik satu huruf tiap 150ms
    const t = setTimeout(() => setCount((c) => c + 1), 150);
    return () => clearTimeout(t);
  }, [ready, count]);

  return (
    <main
      id="home"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cream overflow-hidden"
    >
      {/* ── Background Dekoratif ── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.18]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7a6a4a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15%" cy="30%" r="120" fill="none" stroke="#5a4a2a" strokeWidth="1" />
          <circle cx="15%" cy="30%" r="80"  fill="none" stroke="#5a4a2a" strokeWidth="0.8" />
          <circle cx="85%" cy="70%" r="100" fill="none" stroke="#5a4a2a" strokeWidth="1" />
          <circle cx="85%" cy="70%" r="60"  fill="none" stroke="#5a4a2a" strokeWidth="0.8" />
          <circle cx="50%" cy="50%" r="280" fill="none" stroke="#8a7a4a" strokeWidth="0.5" />
          <circle cx="50%" cy="50%" r="200" fill="none" stroke="#8a7a4a" strokeWidth="0.5" />
        </svg>

        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-muted/20" />
      </div>

      {/* ── Konten ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center select-none"
        style={{ opacity: ready ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        {/* Label atas */}
        <div
          className="flex items-center gap-1.5 mb-6"
          style={{
            opacity: ready ? 1 : 0,
            transform: ready ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
          <span className="text-[0.75rem] font-medium tracking-[0.18em] text-muted uppercase font-sans">
            This Is My
          </span>
        </div>

        {/* PORTFOLIO — typing per huruf */}
        <h1 className="flex items-end gap-0.5 mb-6 overflow-visible py-5 min-w-[300px] justify-center">
          {CHARS.map((c, i) => {
            const visible = i < count;
            const isT = c.char === "T" && i === 3;
            const isL = c.char === "L" && i === 6;
            const isLast = i === count - 1;

            return (
              <span
                key={i}
                className={`relative ${c.offset} inline-block transition-all duration-150`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
                  marginLeft: c.marginLeft ?? undefined,
                }}
              >
                {isT ? (
                  <span className="text-[clamp(64px,13vw,140px)]" style={{ display: "block", lineHeight: 1 }}>
                    <CustomT />
                  </span>
                ) : isL ? (
                  <span className="text-[clamp(64px,13vw,140px)]" style={{ display: "block", lineHeight: 1 }}>
                    <CustomL />
                  </span>
                ) : (
                  <span
                    className={`font-display leading-none inline-block text-[clamp(64px,13vw,140px)] ${
                      c.color === "gold"
                        ? "text-gold [text-shadow:0_2px_16px_rgba(245,195,0,0.35)]"
                        : "text-brown"
                    }`}
                  >
                    {c.char}
                  </span>
                )}

                {/* Cursor */}
                {isLast && showCursor && (
                  <span className="absolute -right-[0.2em] bottom-0 font-display text-[clamp(64px,13vw,140px)] leading-none text-gold animate-blink">
                    |
                  </span>
                )}
              </span>
            );
          })}

          {count === 0 && showCursor && (
            <span className="relative inline-block font-display text-[clamp(64px,13vw,140px)] leading-none text-gold animate-blink">
              |
            </span>
          )}
        </h1>

        {/* Tahun */}
        <p
          className="text-sm font-normal tracking-[0.5em] text-taupe font-sans mb-10"
          style={{
            opacity: count >= FULL_TEXT.length ? 1 : 0,
            transform: count >= FULL_TEXT.length ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
          }}
        >
          — 2026 —
        </p>
      </div>

      {/* Scroll button */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 bg-transparent border border-brown/30 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer text-nav hover:border-gold hover:text-gold transition-all duration-200"
        style={{
          opacity: count >= FULL_TEXT.length ? 1 : 0,
          transition: "opacity 0.5s ease 0.5s",
        }}
        aria-label="Scroll down"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </main>
  );
}
