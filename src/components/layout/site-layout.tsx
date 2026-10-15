import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import styles from "./site-layout.module.css";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.layout}>
      <div className={styles.background} aria-hidden="true" />
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className={styles.content} tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
