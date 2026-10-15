import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";
import styles from "./site-header.module.css";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <MobileNavigation
        links={[...navigation, { label: "Contact Me", href: "/#contact" }]}
      />
      <nav className={styles.navbar} aria-label="Main navigation">
        {navigation.map(({ label, href }) => (
          <Link className={styles.navLink} href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className={styles.actions}>
        <Link className={styles.contactLink} href="/#contact">
          Contact Me
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
