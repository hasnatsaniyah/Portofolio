"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const LINKS = [
  {
    label: "Email",
    value: "hsntsaniyah@email.com",
    href: "mailto:hsntsaniyah@email.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <polyline points="2,4 12,13 22,4"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hasna-tsaniya-hidayat",
    href: "https://www.linkedin.com/in/hasna-tsaniya-hidayat/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/hasnatsaniyah",
    href: "https://github.com/hasnatsaniyah/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@hsntsani",
    href: "https://instagram.com/hsntsani",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const { ref, inView } = useInView(0.1);
  const [hovered, setHovered] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hsntsaniyah@email.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="relative bg-cream min-h-screen flex flex-col justify-between overflow-hidden py-24"
    >
      {/* ── Background dekorasi ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cgrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7a6a4a" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cgrid)"/>
        </svg>
        {/* Ring kanan bawah */}
        <div className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full border border-brown/8"/>
        <div className="absolute -bottom-60 -right-60 w-[900px] h-[900px] rounded-full border border-brown/[0.05]"/>
        {/* Glow gold */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]" style={{ background: "rgba(245,195,0,0.07)" }}/>
        {/* Top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"/>
      </div>

      {/* ── Konten ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 w-full flex-1 flex flex-col justify-center">

        {/* Label */}
        <div
          className={`flex items-center gap-3 mb-6 opacity-0-init ${inView ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.05s" }}
        >
          <span className="h-px w-10 bg-gold inline-block"/>
          <span className="text-xs tracking-[0.22em] font-medium text-muted uppercase font-sans">
            Get In Touch
          </span>
        </div>

        {/* Headline besar */}
        <div
          className={`mb-16 opacity-0-init ${inView ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.1s" }}
        >
          <h2 className="font-display text-[clamp(56px,10vw,130px)] leading-none text-brown">
            LET&apos;S
          </h2>
          <div className="flex items-end gap-4 flex-wrap">
            <h2 className="font-display text-[clamp(56px,10vw,130px)] leading-none text-gold [text-shadow:0_0_60px_rgba(245,195,0,0.25)]">
              WORK
            </h2>
            <h2 className="font-display text-[clamp(56px,10vw,130px)] leading-none text-brown">
              TOGETHER
            </h2>
          </div>
        </div>

        {/* Dua kolom bawah */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Kiri — deskripsi + copy email */}
          <div
            className={`opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.18s" }}
          >
            <p className="text-base leading-[1.9] text-taupe font-sans max-w-sm mb-10">
              Terbuka untuk peluang kolaborasi, project freelance, maupun
              posisi full-time. Jangan ragu untuk menghubungi — aku akan
              membalas sesegera mungkin.
            </p>

            {/* Copy email button */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center gap-4 border border-brown/12 rounded-2xl px-6 py-4 hover:border-gold/50 hover:shadow-[0_4px_24px_rgba(245,195,0,0.08)] transition-all duration-300 w-full max-w-sm bg-cream"
            >
              <div className="w-9 h-9 rounded-xl bg-brown/5 flex items-center justify-center text-muted group-hover:bg-gold/15 group-hover:text-gold transition-all duration-300 shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2,4 12,13 22,4"/>
                </svg>
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-[9px] tracking-[0.18em] text-muted font-sans uppercase mb-0.5">Email</p>
                <p className="text-sm font-medium text-brown font-sans truncate group-hover:text-gold transition-colors duration-200">
                  hasna@email.com
                </p>
              </div>
              <div className="shrink-0 text-brown/25 group-hover:text-gold transition-colors duration-200">
                {copied ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2"/>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                  </svg>
                )}
              </div>
            </button>
          </div>

          {/* Kanan — social links */}
          <div
            className={`opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.24s" }}
          >
            <p className="text-[9px] tracking-[0.22em] text-muted font-sans uppercase mb-5">
              Find me on
            </p>
            <div className="flex flex-col gap-3">
              {LINKS.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group flex items-center justify-between border border-brown/10 rounded-xl px-5 py-3.5 hover:border-gold/40 hover:shadow-[0_2px_16px_rgba(245,195,0,0.07)] bg-cream transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className={`transition-colors duration-200 ${hovered === i ? "text-gold" : "text-muted"}`}>
                      {link.icon}
                    </span>
                    <div>
                      <p className="text-[9px] tracking-[0.15em] text-muted font-sans uppercase">{link.label}</p>
                      <p className="text-sm font-medium text-brown font-sans group-hover:text-gold transition-colors duration-200">
                        {link.value}
                      </p>
                    </div>
                  </div>
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-all duration-200 ${hovered === i ? "text-gold translate-x-0.5 -translate-y-0.5" : "text-brown/20"}`}
                  >
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Footer strip ── */}
      <div
        className={`relative z-10 max-w-[1200px] mx-auto px-8 w-full mt-20 pt-8 border-t border-brown/10 flex items-center justify-between flex-wrap gap-4 opacity-0-init ${inView ? "animate-fade-up" : ""}`}
        style={{ animationDelay: "0.35s" }}
      >
        <p className="text-[10px] tracking-[0.18em] text-muted font-sans uppercase">
          © 2026 Hasna — All rights reserved
        </p>
        <p className="text-[10px] tracking-[0.18em] text-taupe font-sans uppercase">
          Designed & Built in Bandung, Indonesia
        </p>
      </div>
    </section>
  );
}
