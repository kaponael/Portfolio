import { HomeSection } from "@/components/sections/home-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { SkillsSection } from "@/components/sections/skills-section";

const sectionClasses =
  "mx-auto min-h-svh w-full max-w-7xl px-[clamp(1.5rem,6vw,6rem)] pt-[calc(var(--section-offset)+3rem)] pb-16";
const sectionTitleClasses = "mb-4 text-[clamp(2rem,6vw,3rem)] leading-[1.2] font-bold";

export default function Home() {
  return (
    <>
      <HomeSection />
      <SkillsSection />
      <PortfolioSection />
      <section id="contact" className={sectionClasses} aria-labelledby="contact-title">
        <h2 id="contact-title" className={sectionTitleClasses}>Contact Me</h2>
      </section>
    </>
  );
}
