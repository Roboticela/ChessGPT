import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchSection from "@/components/ResearchSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import ApproachSection from "@/components/ApproachSection";
import PhilosophySection from "@/components/PhilosophySection";
import RoadmapSection from "@/components/RoadmapSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#101416]">
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />
        <ResearchSection />
        <ObjectivesSection />
        <ApproachSection />
        <PhilosophySection />
        <RoadmapSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
