"use client";

import { useEffect, useRef, useState } from "react";

/* ── Data ── */
interface Project {
  index: string;
  category: string;
  label: string;
  title: string;
  tags: string[];
  description: string;
  year: string;
  liveUrl?: string;
  detailUrl?: string;
  mockup?: string;
  mockupMobile?: string;
  isWeb?: boolean;
  accent: string;
  bg: string;
}

const PROJECTS: Project[] = [
  {
    index: "01 // 04",
    category: "MOBILE GAME",
    label: "PUZZLE ANIMAL GAME",
    title: "ZOOZLE",
    tags: ["Unity", "C#", "Game Design"],
    year: "2024",
    description:
      "Zoozle is a mobile puzzle game where players solve animal-themed puzzles to unlock and collect animals in their personal Zoo Expedition. Each completed level rewards a new animal, along with detailed educational information about that species — turning gameplay into a fun learning experience about wildlife.",
    liveUrl: "#",
    detailUrl: "#",
    mockup: "/image/zoozle.jpeg",
    accent: "#f5c300",
    bg: "#2a1a0a",
  },
  {
    index: "02 // 04",
    category: "WEB",
    label: "LIBRARY MANAGEMENT SYSTEM",
    title: "READ4FUTURE",
    tags: ["PHP", "MySQL", "Native Web"],
    year: "2025",
    description:
      "Read4Future is a web-based library management system implemented in a school environment. It features two dedicated portals — the Student Portal for book borrowing, returning, and attendance tracking, and the Admin Portal for full control over library circulation, book inventory, member data, and loan records.",
    liveUrl: "#",
    detailUrl: "#",
    mockup: "/image/read4futurelaptop.png",
    mockupMobile: "/image/read4futurehp.png",
    accent: "#c8b88a",
    bg: "#231508",
  },
  {
    index: "03 // 04",
    category: "QA",
    label: "QUALITY ASSURANCE PORTFOLIO",
    title: "QALAB",
    tags: ["Cypress", "Postman", "Google Sheets", "Manual Testing"],
    year: "2025 — 2026",
    description:
      "A QA track record spanning 6+ projects across both manual and automation testing. Manual testing workflows are documented using Google Workspace — test cases in Sheets, reports in Docs, and review sessions via Meet. Automation testing is handled with Cypress for end-to-end UI flows, covering functional, regression, and API testing layers.",
    liveUrl: "#",
    detailUrl: "#",
    mockup: "",
    accent: "#c8b88a",
    bg: "#231508",
  },
  {
    index: "04 // 04",
    category: "WEB · MOBILE",
    label: "HALAL INVESTMENT PLATFORM",
    title: "INVEST HALAL",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    year: "2026",
    description:
      "Invest Halal is a halal investment platform connecting investors with registered livestock companies. The Super Admin portal manages company registrations and oversees the entire ecosystem. Each Company portal lets businesses manage their livestock products — cattle, goat, and more — and control the product catalogs displayed on the mobile app for investors to browse and invest in.",
    liveUrl: "#",
    detailUrl: "#",
    mockup: "/image/inveshalal.png",
    isWeb: true,
    accent: "#f5c300",
    bg: "#2a1a0a",
  },
];

/* ── Mockup ── */
function MockupPane({ project }: { project: Project }) {
  // Laptop only (isWeb: true, no mobile)
  if (project.mockup && project.isWeb && !project.mockupMobile) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}08` }} />
        <div className="absolute inset-10 rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}05` }} />

        <div className="relative z-10 flex flex-col items-center" style={{ filter: `drop-shadow(0 24px 48px rgba(0,0,0,0.5))` }}>
          <div
            className="w-[340px] h-[213px] rounded-t-[12px] overflow-hidden border-[3px]"
            style={{ borderColor: `${project.accent}40`, borderBottom: "none", background: "#0a0602" }}
          >
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-cream/20" />
            </div>
            <div className="h-[calc(100%-18px)] overflow-hidden">
              <img src={project.mockup} alt={`${project.title} desktop`} className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="w-[340px] h-[7px]" style={{ background: `linear-gradient(180deg, ${project.accent}35, ${project.accent}10)` }} />
          <div className="w-[352px] h-[16px] rounded-b-xl" style={{ background: `${project.accent}15`, borderTop: `1px solid ${project.accent}20` }} />
          <div className="w-[390px] h-[5px] rounded-full mt-0.5" style={{ background: `${project.accent}10` }} />
        </div>

        <div className="absolute top-4 right-0 rounded-2xl px-3 py-2 border" style={{ background: "rgba(10,6,2,0.80)", backdropFilter: "blur(8px)", borderColor: `${project.accent}25` }}>
          <p className="text-[8px] tracking-[0.18em] font-sans uppercase" style={{ color: `${project.accent}70` }}>{project.category}</p>
          <p className="font-display text-sm text-cream">{project.year}</p>
        </div>
        <div className="absolute bottom-4 left-0 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
          <span className="text-[8px] tracking-[0.18em] text-cream/25 font-sans uppercase">Live Preview</span>
        </div>
      </div>
    );
  }
  // Web project dengan dua mockup — laptop + mobile berdampingan
  if (project.mockup && project.mockupMobile) {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Rings */}
        <div className="absolute inset-0 rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}08` }} />
        <div className="absolute inset-10 rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}05` }} />

        {/* Wrapper berdampingan */}
        <div className="relative z-10 flex items-end gap-5">

          {/* ── Laptop ── */}
          <div className="flex flex-col items-center" style={{ filter: `drop-shadow(0 24px 48px rgba(0,0,0,0.5))` }}>
            {/* Layar */}
            <div
              className="w-[280px] h-[175px] rounded-t-[10px] overflow-hidden border-[3px]"
              style={{
                borderColor: `${project.accent}40`,
                borderBottom: "none",
                background: "#0a0602",
              }}
            >
              {/* Kamera notch */}
              <div className="flex justify-center pt-1.5 pb-1">
                <div className="w-1.5 h-1.5 rounded-full bg-cream/20" />
              </div>
              <div className="h-[calc(100%-20px)] overflow-hidden">
                <img
                  src={project.mockup}
                  alt={`${project.title} desktop`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
            {/* Engsel */}
            <div
              className="w-[280px] h-[6px]"
              style={{ background: `linear-gradient(180deg, ${project.accent}30, ${project.accent}10)` }}
            />
            {/* Base/keyboard */}
            <div
              className="w-[290px] h-[14px] rounded-b-lg"
              style={{ background: `${project.accent}15`, borderTop: `1px solid ${project.accent}20` }}
            />
            {/* Kaki */}
            <div
              className="w-[320px] h-[4px] rounded-full mt-0.5"
              style={{ background: `${project.accent}10` }}
            />
          </div>

          {/* ── Phone ── */}
          <div
            className="relative flex flex-col w-[95px] h-[185px] rounded-[20px] overflow-hidden border-[2.5px] shrink-0"
            style={{
              borderColor: `${project.accent}45`,
              background: "#0a0602",
              boxShadow: `0 20px 48px rgba(0,0,0,0.5), 0 0 0 1px ${project.accent}12, inset 0 1px 0 ${project.accent}20`,
            }}
          >
            {/* Notch */}
            <div className="flex justify-center pt-2 shrink-0">
              <div className="w-10 h-[5px] rounded-full bg-cream/15" />
            </div>
            {/* Screen */}
            <div className="flex-1 overflow-hidden">
              <img
                src={project.mockupMobile}
                alt={`${project.title} mobile`}
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Home indicator */}
            <div className="flex justify-center pb-1.5 shrink-0">
              <div className="w-8 h-[3px] rounded-full bg-cream/20" />
            </div>
          </div>
        </div>

        {/* Floating badge */}
        <div
          className="absolute top-4 right-0 rounded-2xl px-3 py-2 border"
          style={{ background: "rgba(10,6,2,0.80)", backdropFilter: "blur(8px)", borderColor: `${project.accent}25` }}
        >
          <p className="text-[8px] tracking-[0.18em] font-sans uppercase" style={{ color: `${project.accent}70` }}>{project.category}</p>
          <p className="font-display text-sm text-cream">{project.year}</p>
        </div>

        <div className="absolute bottom-4 left-0 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
          <span className="text-[8px] tracking-[0.18em] text-cream/25 font-sans uppercase">Live Preview</span>
        </div>
      </div>
    );
  }

  // Mobile / game project — phone frame
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}08` }} />
      <div className="absolute inset-8 rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}05` }} />
      <div className="absolute inset-16 rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}03` }} />

      {/* Phone frame */}
      <div
        className="relative z-10 w-[220px] h-[440px] rounded-[32px] border-2 overflow-hidden flex flex-col"
        style={{
          borderColor: `${project.accent}30`,
          background: "rgba(10,6,2,0.70)",
          backdropFilter: "blur(12px)",
          boxShadow: `0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px ${project.accent}10`,
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2 shrink-0">
          <span className="text-[9px] text-cream/30 font-sans">9:41</span>
          <div className="w-14 h-4 rounded-full bg-cream/5" />
          <div className="w-3 h-2 rounded-sm bg-cream/20" />
        </div>

        {project.mockup ? (
          <img src={project.mockup} alt={`${project.title} mockup`} className="flex-1 w-full object-cover" />
        ) : (
          <div className="flex-1 flex flex-col gap-3 px-4 pb-4 pt-2 overflow-hidden">
            <div
              className="w-full h-28 rounded-2xl flex items-end p-3"
              style={{ background: `linear-gradient(135deg, ${project.accent}18, ${project.accent}06)` }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: `${project.accent}25` }}>
                <span className="font-display text-base" style={{ color: project.accent }}>{project.title[0]}</span>
              </div>
            </div>
            <div className="w-3/4 h-2 rounded-full bg-cream/10" />
            <div className="w-1/2 h-2 rounded-full bg-cream/7" />
            <div className="w-full h-16 rounded-xl bg-cream/5 mt-1" />
            <div className="w-full h-16 rounded-xl" style={{ background: `${project.accent}08` }} />
            <div className="w-full h-10 rounded-xl bg-cream/4" />
            <div className="mt-auto flex justify-around pt-2 border-t border-cream/5">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="w-4 h-4 rounded-md" style={{ background: i === 0 ? `${project.accent}30` : "rgba(245,240,232,0.06)" }} />
                  <div className="w-6 h-1 rounded-full bg-cream/6" />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pb-2 flex justify-center">
          <div className="w-14 h-1 rounded-full bg-cream/15" />
        </div>
      </div>

      {/* Floating badge */}
      <div
        className="absolute top-6 right-2 rounded-2xl px-3 py-2 border"
        style={{ background: "rgba(10,6,2,0.75)", backdropFilter: "blur(8px)", borderColor: `${project.accent}25` }}
      >
        <p className="text-[8px] tracking-[0.18em] font-sans uppercase" style={{ color: `${project.accent}80` }}>{project.category}</p>
        <p className="font-display text-sm text-cream">{project.year}</p>
      </div>

      <div className="absolute bottom-6 left-2 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
        <span className="text-[8px] tracking-[0.18em] text-cream/25 font-sans uppercase">Live Preview</span>
      </div>
    </div>
  );
}

/* ── Main export ── */
export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track which card is "on top" based on scroll position
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      // how far we've scrolled into the section (0 → totalHeight - vh)
      const scrolled = -top;
      const vh = window.innerHeight;
      // each card occupies one vh of scroll space (except the first which is free)
      const idx = Math.min(
        PROJECTS.length - 1,
        Math.max(0, Math.floor(scrolled / vh))
      );
      setActiveIndex(idx);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="projects">
      {/*
        Total scroll space = PROJECTS.length * 100vh
        Each card is sticky inside a 100vh-tall wrapper → stacks on top of previous
      */}
      <div
        ref={sectionRef}
        style={{ height: `${PROJECTS.length * 100}vh` }}
        className="relative"
      >
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="sticky top-0 h-screen overflow-hidden"
            style={{ zIndex: 10 + i }}
          >
            {/* Solid background so it fully covers the card below */}
            <div className="absolute inset-0" style={{ background: project.bg }} />

            {/* Grid dekorasi */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pg-${i}`} width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#f5f0e8" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pg-${i})`} />
            </svg>

            {/* Accent rings kanan */}
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}07` }} />
            <div className="absolute -right-56 top-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full border pointer-events-none" style={{ borderColor: `${project.accent}04` }} />

            {/* Top line */}
            <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: `linear-gradient(90deg, transparent, ${project.accent}25, transparent)` }} />

            {/* ── Header bar ── */}
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 sm:px-10 pt-6 sm:pt-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="font-display text-xs sm:text-sm tracking-widest" style={{ color: project.accent }}>{project.index}</span>
                <span className="w-px h-3 sm:h-4 bg-cream/15 inline-block" />
                <span className="text-[9px] sm:text-[10px] tracking-[0.18em] font-medium text-cream/35 font-sans uppercase">{project.category}</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-6">
                <span className="hidden sm:block text-[10px] tracking-[0.22em] text-cream/25 font-sans uppercase">Release Year — {project.year}</span>
                {/* Progress dots */}
                <div className="flex gap-1.5 sm:gap-2 items-center">
                  {PROJECTS.map((_, di) => (
                    <span
                      key={di}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: di === activeIndex ? "14px" : "5px",
                        height: "5px",
                        background: di <= i ? project.accent : "rgba(245,240,232,0.12)",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ── Main grid ── */}
            <div className="absolute inset-0 flex items-center overflow-y-auto">
              <div className={`w-full max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-10 py-20 grid gap-6 lg:gap-12 items-center ${
                project.category === "QA" ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2"
              }`}>
                {/* Kiri — animasi masuk dari bawah */}
                <div
                  key={project.title}
                  style={{
                    animation: "projectIn 0.6s cubic-bezier(0.22,1,0.36,1) forwards",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3 lg:mb-5">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: project.accent }} />
                    <span className="text-[9px] tracking-[0.18em] font-medium text-cream/45 font-sans uppercase">{project.label}</span>
                  </div>

                  <h2 className="font-display text-[clamp(36px,7vw,108px)] leading-none text-cream mb-4 lg:mb-6">
                    {project.title}
                  </h2>

                  <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-4 lg:mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[10px] font-medium font-sans rounded-full border text-cream/60"
                        style={{ borderColor: "rgba(245,240,232,0.12)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="h-px mb-4 lg:mb-6" style={{ background: "rgba(245,240,232,0.07)" }} />

                  <p className="text-xs lg:text-sm leading-[1.8] text-cream/50 font-sans max-w-lg mb-6 lg:mb-10 line-clamp-4 lg:line-clamp-none">
                    {project.description}
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    {/* CTA buttons — coming soon
                    <a href={project.liveUrl}>EXPLORE LIVE</a>
                    <a href={project.detailUrl}>VIEW DETAIL</a>
                    */}
                  </div>
                </div>

                {/* Kanan — sembunyikan di QA dan di mobile kecil */}
                {project.category !== "QA" && (
                  <div
                    className="relative h-[220px] sm:h-[340px] lg:h-[520px] hidden sm:block"
                    key={`mockup-${project.title}`}
                    style={{
                      animation: "projectInRight 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
                      opacity: 0,
                    }}
                  >
                    <MockupPane project={project} />
                  </div>
                )}
              </div>
            </div>

            {/* ── Footer bar ── */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 sm:px-10 pb-5 sm:pb-7">
              <div className="flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cream/20">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                <span className="text-[8px] sm:text-[9px] tracking-[0.18em] text-cream/20 font-sans uppercase">Scroll to reveal next</span>
              </div>
              <span className="text-[8px] sm:text-[9px] tracking-[0.18em] text-cream/15 font-sans uppercase hidden sm:block">
                Architectural Showcase // {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
