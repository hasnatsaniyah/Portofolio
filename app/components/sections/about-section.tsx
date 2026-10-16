"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const JOBS = ["Front End Developer", "Quality Assurance"];

/* ── Tech Stack data ── */
interface Tech {
  name: string;
  category: string;
  description: string;
  pillar: string;
  architecture: string;
  icon: React.ReactNode;
}

const TECH_STACK: Tech[] = [
  {
    name: "TypeScript",
    category: "LANGUAGE",
    description: "Used to develop type-safe and scalable applications with improved code reliability.",
    pillar: "WEB",
    architecture: "ARCHITECTURE",
    icon: <img src="/image/Typescript_logo_2020.svg.webp" alt="TypeScript" width={32} height={32} className="rounded-lg" />,
  },
  {
    name: "JavaScript",
    category: "LANGUAGE",
    description: "Used to build dynamic and interactive web applications with flexible logic and API integration.",
    pillar: "WEB",
    architecture: "LANGUAGE",
    icon: <img src="/image/Unofficial_JavaScript_logo_2.svg.webp" alt="JavaScript" width={32} height={32} className="rounded-lg" />,
  },
  {
    name: "PHP",
    category: "LANGUAGE",
    description: "Used to build server-side web applications and dynamic content with robust backend logic.",
    pillar: "WEB",
    architecture: "BACKEND",
    icon: <img src="/image/PHP_Logo.png" alt="PHP" width={42} height={32} className="object-contain" />,
  },
  {
    name: "React",
    category: "FRAMEWORK",
    description: "Used to build interactive UIs with reusable components and efficient state management.",
    pillar: "WEB",
    architecture: "COMPONENT",
    icon: (
      <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" rx="4" fill="#20232A"/>
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="#61DAFB" strokeWidth="1"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="9" ry="3.4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: "Next.js",
    category: "FRAMEWORK",
    description: "Used to build full-stack web apps with server-side rendering and static generation.",
    pillar: "WEB",
    architecture: "ARCHITECTURE",
    icon: <img src="/image/nextjs.jpeg" alt="Next.js" width={32} height={32} className="rounded-lg object-cover" />,
  },
  {
    name: "Laravel",
    category: "FRAMEWORK",
    description: "Used to build robust back-end systems with elegant MVC architecture and powerful ORM.",
    pillar: "WEB",
    architecture: "BACKEND",
    icon: <img src="/image/Laravel.svg.webp" alt="Laravel" width={32} height={32} className="rounded-lg" />,
  },
  {
    name: "Tailwind CSS",
    category: "STYLING",
    description: "Used to craft responsive and consistent designs rapidly with utility-first classes.",
    pillar: "WEB",
    architecture: "DESIGN",
    icon: <img src="/image/Tailwind_CSS_Logo.svg.webp" alt="Tailwind CSS" width={32} height={32} className="rounded-lg object-contain" />,
  },
  {
    name: "PostgreSQL",
    category: "DATABASE",
    description: "Used as a reliable and scalable relational database for managing structured application data with strong consistency and complex queries.",
    pillar: "WEB",
    architecture: "DATABASE",
    icon: <img src="/image/Postgresql_elephant.svg.webp" alt="PostgreSQL" width={32} height={32} className="rounded-lg object-contain" />,
  },
  {
    name: "Cypress",
    category: "TESTING",
    description: "Used for end-to-end and component testing with real browser automation and detailed test reports.",
    pillar: "QA",
    architecture: "TESTING",
    icon: <img src="/image/cypress.png" alt="Cypress" width={32} height={32} className="rounded-lg object-contain" />,
  },
  {
    name: "Postman",
    category: "TESTING",
    description: "Used to test and document REST APIs, automate request collections, and validate backend responses.",
    pillar: "QA",
    architecture: "API TEST",
    icon: <img src="/image/postman.png" alt="Postman" width={32} height={32} className="rounded-lg object-contain" />,
  },
  {
    name: "Figma",
    category: "UI/UX",
    description: "Used to design and prototype user interfaces with collaborative vector tools and design systems.",
    pillar: "DESIGN",
    architecture: "PROTOTYPE",
    icon: <img src="/image/Figma-logo.svg" alt="Figma" width={32} height={32} className="object-contain" />,
  },
];

/* ── Tech Card Component ── */
function TechCard({ tech, index }: { tech: Tech; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [popupPos, setPopupPos] = useState({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setPopupPos({
        top: rect.bottom + window.scrollY + 10,
        left: rect.left + window.scrollX + rect.width / 2,
      });
    }
    setHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col justify-between w-[190px] shrink-0 bg-cream border border-brown/12 rounded-2xl p-5 cursor-default transition-all duration-300 hover:border-gold/50 hover:shadow-[0_4px_24px_0_rgba(245,195,0,0.10)]"
      style={{ animationDelay: `${0.45 + index * 0.07}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category badge */}
      <span className="absolute top-4 right-4 text-[9px] font-semibold tracking-[0.15em] text-muted font-sans uppercase">
        {tech.category}
      </span>

      {/* Icon */}
      <div className="mb-4 mt-1 w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center">
        {tech.icon}
      </div>

      {/* Name */}
      <p className="font-display text-[22px] leading-none text-brown tracking-wide mb-2">
        {tech.name.toUpperCase()}
      </p>

      {/* Description truncated */}
      <p className="text-[11px] leading-[1.7] text-taupe font-sans mb-5 line-clamp-3">
        {tech.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-brown/10">
        <span className="text-[9px] font-semibold tracking-[0.15em] text-muted font-sans uppercase">
          {tech.pillar}
        </span>
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-semibold tracking-[0.12em] text-taupe font-sans uppercase">
            {tech.architecture}
          </span>
          <span className="text-[9px] text-muted font-sans">→</span>
        </div>
      </div>

      {/* ── Popup via portal ── */}
      {hovered && typeof document !== "undefined" && createPortal(
        <div
          className="fixed z-[9999] w-[280px] bg-cream rounded-2xl p-5 shadow-[0_16px_48px_rgba(42,26,10,0.18)] border border-brown/10 pointer-events-none"
          style={{
            top: popupPos.top,
            left: popupPos.left,
            transform: "translateX(-50%)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
              {tech.icon}
            </div>
            <p className="font-display text-[18px] leading-none text-brown flex-1">
              {tech.name.toUpperCase()}
            </p>
            <span className="bg-brown text-cream text-[8px] font-semibold tracking-[0.15em] font-sans uppercase px-2 py-1 rounded-full">
              {tech.category}
            </span>
          </div>

          {/* Full description */}
          <p className="text-[11px] leading-[1.75] text-taupe font-sans mb-5">
            {tech.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-brown/10">
            <span className="text-[9px] font-semibold tracking-[0.15em] text-muted font-sans uppercase">
              {tech.pillar} PILLAR
            </span>
            <span className="text-[9px] font-semibold tracking-[0.12em] text-brown font-sans uppercase">
              {tech.architecture} // DETAILED
            </span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

const STATS = [
  { target: 5,  suffix: "+", label: "Projects" },
  { target: 1,  suffix: "+", label: "Years Exp." },
  { target: 10, suffix: "+", label: "Tech Stack" },
];

function CountUp({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(start));
      }
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <>{val}{suffix}</>;
}

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function AboutSection() {
  const { ref, inView } = useInView(0.15);

  // ── Typing effect ──
  const [displayed, setDisplayed] = useState("");
  const [jobIndex, setJobIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentJob = JOBS[jobIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === currentJob) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setJobIndex((p) => (p + 1) % JOBS.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? currentJob.slice(0, displayed.length - 1)
            : currentJob.slice(0, displayed.length + 1)
        );
      }, isDeleting ? 55 : 95);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, jobIndex]);

  return (
    <section
      ref={ref}
      id="about"
      className="relative min-h-screen flex items-center bg-cream overflow-hidden"
    >
      {/* ── Dekorasi Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        {/* Grid tipis */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.10]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid2" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#7a6a4a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid2)" />
        </svg>

        {/* Lingkaran besar kiri */}
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-muted/10" />
        <div className="absolute -left-44 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-muted/[0.06]" />

        {/* Garis aksen atas */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Dot-dot dekoratif kanan bawah */}
        <div className="absolute bottom-12 right-12 grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <span key={i} className="w-1 h-1 rounded-full bg-brown/15 inline-block" />
          ))}
        </div>
      </div>

      {/* ── Konten ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 py-28 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

        {/* ── Kiri: Teks ── */}
        <div>
          {/* Label section */}
          <div
            className={`flex items-center gap-3 mb-5 opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="h-px w-10 bg-gold inline-block" />
            <span className="text-xs tracking-[0.22em] font-medium text-muted uppercase font-sans">
              About Me
            </span>
          </div>

          {/* Nama besar */}
          <h2
            className={`font-display text-[clamp(60px,9vw,108px)] leading-none text-brown mb-1 opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            HASNA TSANIYA HIDAYAT
          </h2>

          {/* Typing job title */}
          <div
            className={`flex items-center mb-6 h-9 opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-lg font-normal text-taupe font-sans">I&apos;m a&nbsp;</span>
            <span className="text-lg font-semibold text-gold font-sans">{displayed}</span>
            <span className="animate-blink text-lg font-semibold text-gold font-sans ml-0.5">|</span>
          </div>

          {/* Garis pemisah */}
          <div
            className={`relative h-px bg-brown/10 mb-6 overflow-hidden opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.35s" }}
          >
            <span className={`absolute left-0 top-0 h-full bg-gold/60 opacity-0-init ${inView ? "animate-slide-right" : ""}`} style={{ animationDelay: "0.7s" }} />
          </div>

          {/* Deskripsi */}
          <p
            className={`text-base leading-[1.85] text-taupe font-sans max-w-md mb-8 opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.4s" }}
          >
            An Application Software Engineering student at 
            Telkom University who is passionate about web development 
            and software quality assurance. Focused on building elegant, 
            responsive user interfaces and ensuring product quality through 
            structured testing, from unit testing to UI testing.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex gap-4 flex-wrap opacity-0-init ${inView ? "animate-fade-up" : ""}`}
            style={{ animationDelay: "0.5s" }}
          >
            <button className="px-7 py-3 bg-brown text-cream text-sm font-medium font-sans rounded-full hover:bg-gold hover:text-brown transition-all duration-300 shadow-sm">
              Download CV
            </button>
            <button className="px-7 py-3 border border-brown/40 text-brown text-sm font-medium font-sans rounded-full hover:border-gold hover:text-gold transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Me →
            </button>
          </div>
        </div>

        {/* ── Kanan: Tech Stack Cards ── */}
        <div
          className={`opacity-0-init ${inView ? "animate-fade-up" : ""}`}
          style={{ animationDelay: "0.35s" }}
        >
          {/* Section label */}
          <p className="text-xs font-medium tracking-[0.22em] text-muted uppercase font-sans mb-5">
            Tech Stack
          </p>

          {/* Marquee cards — berjalan otomatis, pause on hover */}
          <div className="overflow-hidden -mx-1">
            <div
              className="flex gap-4 w-max animate-marquee"
              style={{ animationPlayState: "running" }}
              onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
              onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
            >
              {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <TechCard key={`${tech.name}-${i}`} tech={tech} index={i % TECH_STACK.length} />
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-brown/10">
            {STATS.map(({ target, suffix, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-[clamp(28px,4vw,40px)] leading-none text-brown mb-1">
                  <CountUp target={target} suffix={suffix} inView={inView} />
                </p>
                <p className="text-xs font-medium text-muted font-sans tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
