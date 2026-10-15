import { HomeSection } from "@/components/sections/home-section";

const sectionClasses =
  "mx-auto min-h-svh w-full max-w-7xl px-[clamp(1.5rem,6vw,6rem)] pt-[calc(var(--section-offset)+3rem)] pb-16";
const sectionTitleClasses = "mb-4 text-[clamp(2rem,6vw,3rem)] leading-[1.2] font-bold";

export default function Home() {
  return (
    <>
      <HomeSection />
      <section id="skills" className={sectionClasses} aria-labelledby="skills-title">
        <h2 id="skills-title" className={sectionTitleClasses}>Skills</h2>
      </section>
      <section id="portfolio" className={sectionClasses} aria-labelledby="portfolio-title">
        <h2 id="portfolio-title" className={sectionTitleClasses}>Portfolio</h2>
      </section>
      <section id="contact" className={sectionClasses} aria-labelledby="contact-title">
        <h2 id="contact-title" className={sectionTitleClasses}>Contact Me</h2>
      </section>
    </>
  );
}
