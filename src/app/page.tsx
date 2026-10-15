import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <section id="home" className={styles.section} aria-labelledby="home-title">
        <h1 id="home-title">My portfolio</h1>
        <p>Welcome to my portfolio.</p>
      </section>
      <section id="skills" className={styles.section} aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
      </section>
      <section id="portfolio" className={styles.section} aria-labelledby="portfolio-title">
        <h2 id="portfolio-title">Portfolio</h2>
      </section>
      <section id="contact" className={styles.section} aria-labelledby="contact-title">
        <h2 id="contact-title">Contact Me</h2>
      </section>
    </>
  );
}
