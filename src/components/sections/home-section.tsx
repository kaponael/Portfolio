const accentClasses =
  "text-hero-accent transition-colors duration-(--theme-duration) ease-(--theme-easing)";

export function HomeSection() {
  return (
    <section id="home" className="mx-auto flex min-h-svh w-full max-w-7xl items-center px-[clamp(1.5rem,6vw,6rem)] pt-[calc(var(--section-offset)+2rem)] pb-20" aria-labelledby="home-title">
      <div className="max-w-3xl">
        <h1 id="home-title" className="text-[clamp(1.875rem,7.2vw,6.5rem)] leading-[1.05] font-bold tracking-[-0.04em]">
          Hi, <span className={accentClasses}>I&apos;m Eleni</span>
        </h1>
        <p className="mt-6 max-w-120 text-[clamp(1.125rem,1.8vw,1.5rem)] leading-[1.5] text-balance">
          A <strong className={`${accentClasses} font-bold`}>front-end developer</strong> based in Cyprus
        </p>
        <a
          className="mt-8 inline-flex min-h-14 items-center justify-center gap-3.5 rounded-full border border-secondary/60 bg-primary px-6 py-3.5 text-base leading-[1.5] font-medium text-white shadow-[0_8px_24px_color-mix(in_srgb,var(--color-primary)_15%,transparent)] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:text-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          href="/Eleni-Kapona-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View CV (opens in a new tab)"
        >
          View CV
          <svg
            className="shrink-0"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </a>
      </div>
    </section>
  );
}
