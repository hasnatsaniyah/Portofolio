import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import HeroSection from "./components/sections/hero-section";
import AboutSection from "./components/sections/about-section";
import ProjectsSection from "./components/sections/projects-section";
import ContactSection from "./components/sections/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero Section ── */}
      <HeroSection />

      {/* ── About Section ── */}
      <AboutSection />

      {/* ── Projects Section ── */}
      <ProjectsSection />

      {/* ── Contact Section ── */}
      <ContactSection />

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
