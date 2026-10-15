import type { ReactNode } from "react";

function ContactIcon({ children, size = 18 }: { children: ReactNode; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

const socialLinkClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-secondary/40 bg-white px-4 py-2 text-sm text-primary shadow-sm transition-[color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-secondary/60 dark:bg-primary dark:text-white dark:hover:bg-secondary dark:hover:text-primary";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl px-[clamp(1.5rem,6vw,6rem)] pt-35 pb-8"
      aria-labelledby="contact-title"
    >
      <div className="rounded-3xl border border-white/60 bg-white/75 p-[27px] shadow-[0_15px_40px_color-mix(in_srgb,var(--color-primary)_12%,transparent)] backdrop-blur-[24px] backdrop-saturate-[140%] transition-colors duration-(--theme-duration) ease-(--theme-easing) min-[481px]:p-10.5 min-[761px]:flex min-[761px]:items-end min-[761px]:justify-between min-[761px]:gap-7 dark:border-white/15 dark:bg-black/70">
        <div className="min-w-0">
          <p className="mb-5 text-[0.7rem] tracking-[0.14em] uppercase [font-family:Arial,Helvetica,sans-serif]">
            04 / Say hello
          </p>
          <h2
            id="contact-title"
            className="font-serif text-[clamp(2.8rem,13vw,4rem)] leading-[0.9] font-normal tracking-[-0.065em] min-[481px]:text-[clamp(3rem,6vw,6rem)]"
          >
            Let&apos;s make something
            <br />
            <em className="text-hero-accent transition-colors duration-(--theme-duration) ease-(--theme-easing)">
              beautiful together.
            </em>
          </h2>
        </div>
        <a
          className="mt-8.75 flex min-h-11 w-fit shrink-0 items-center gap-[9px] border-b border-current pb-1.75 text-[0.78rem] leading-normal transition-[color,gap] duration-200 hover:gap-[13px] hover:text-hero-accent motion-reduce:transition-none min-[761px]:mt-0"
          href="mailto:kaponael0701@gmail.com"
        >
          <ContactIcon>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m3 6 9 7 9-7" />
          </ContactIcon>
          <span className="min-w-0 [overflow-wrap:anywhere]">kaponael0701@gmail.com</span>
          <ContactIcon size={16}>
            <path d="M7 17 17 7M7 7h10v10" />
          </ContactIcon>
        </a>
      </div>
      <footer className="flex flex-col items-start gap-3.75 px-1 py-8.5 text-[0.68rem] text-primary/75 min-[481px]:flex-row min-[481px]:flex-wrap min-[481px]:items-center min-[481px]:justify-between min-[481px]:gap-5 dark:text-white/75">
        <span>© {new Date().getFullYear()} Eleni Kapona</span>
        <nav className="flex flex-wrap gap-3" aria-label="Social profiles">
          <a
            className={socialLinkClasses}
            href="https://www.instagram.com/elshub_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eleni on Instagram (opens in a new tab)"
          >
            <ContactIcon>
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
            </ContactIcon>
            <span>Instagram</span>
          </a>
          <a
            className={socialLinkClasses}
            href="https://www.linkedin.com/in/elkapp/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Eleni on LinkedIn (opens in a new tab)"
          >
            <ContactIcon>
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7.5 10v7m4-7v7m0-4a3 3 0 0 1 6 0v4" />
              <circle cx="7.5" cy="7" r="0.75" fill="currentColor" stroke="none" />
            </ContactIcon>
            <span>LinkedIn</span>
          </a>
        </nav>
      </footer>
    </section>
  );
}
