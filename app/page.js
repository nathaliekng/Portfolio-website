import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import ExperienceSection from "./components/ExperienceSection";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection/>
        <Technologies />
        <ExperienceSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
