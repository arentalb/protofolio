import { Header } from "@/components/Header.tsx";
import { HeroSection } from "@/features/home/sections/HeroSection.tsx";
import { SkillsSection } from "@/features/home/sections/SkillsSection.tsx";
import { BrightLine } from "@/components/common/BrightLine.tsx";
import { BrightCurvedLine } from "@/components/common/BrightCurvedLine.tsx";
import { ProjectSection } from "@/features/home/sections/ProjectSection.tsx";
import { ExperienceSection } from "@/features/home/sections/ExperienceSection.tsx";
import { CertificateSection } from "@/features/home/sections/CertificateSection.tsx";
import { StatisticsSection } from "@/features/home/sections/StatisticsSection.tsx";
import { CallToAction } from "@/features/home/sections/CallToAction.tsx";
import { Footer } from "@/components/Footer.tsx";

export function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <BrightLine />
      <SkillsSection />
      <BrightCurvedLine direction={"up"} />
      <ProjectSection />
      <ExperienceSection />
      <BrightCurvedLine direction={"down"} />
      <CertificateSection />
      <BrightLine />
      <StatisticsSection />
      <CallToAction />
      <Footer />
    </>
  );
}
