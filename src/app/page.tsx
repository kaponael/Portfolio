import { ContactSection } from "@/components/sections/contact-section";
import { HomeSection } from "@/components/sections/home-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function Home() {
  return (
    <>
      <HomeSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
