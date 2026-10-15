import Image from "next/image";
import { projects } from "@/data/projects";
import type { ProjectCardProps } from "@/types/project-card-props";

function ExternalLinkIcon() {
  return (
    <svg
      width="16"
      height="16"
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
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-[20px] border border-secondary/20 bg-white/80 text-primary shadow-[0_15px_35px_color-mix(in_srgb,var(--color-primary)_12%,transparent)] backdrop-blur-[18px] transition-transform duration-300 hover:-translate-y-2 hover:-rotate-[0.5deg] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:rotate-0 dark:border-white/15 dark:bg-black/80 dark:text-white"
      aria-labelledby={`project-${index + 1}-title`}
    >
      <div className="relative h-57.5 overflow-hidden bg-secondary/10 min-[481px]:h-72.5">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 480px) calc(100vw - 3rem), (max-width: 760px) 45vw, 30vw"
          className="object-cover"
          placeholder="blur"
        />
      </div>
      <div className="grid flex-1 grid-cols-[32px_minmax(0,1fr)] content-start gap-x-2.5 p-4.5">
        <span className="pt-1 text-[0.7rem] text-primary/70 dark:text-white/70" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3
            id={`project-${index + 1}-title`}
            className="mb-0.75 font-serif text-[1.15rem] leading-snug font-normal"
          >
            {project.title}
          </h3>
          <p className="text-[0.7rem] leading-relaxed text-primary/70 dark:text-white/70">
            {project.type}
          </p>
        </div>
        <ul className="col-start-2 mt-2 flex flex-wrap gap-x-4">
          {project.links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on ${label} (opens in a new tab)`}
                className="inline-flex min-h-11 items-center gap-1.5 text-xs underline decoration-secondary/50 underline-offset-4 transition-colors hover:decoration-primary motion-reduce:transition-none dark:hover:text-secondary dark:hover:decoration-secondary"
              >
                {label}
                <ExternalLinkIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="mx-auto min-h-svh w-full max-w-7xl px-[clamp(1.5rem,6vw,6rem)] pt-[calc(var(--section-offset)+3rem)] pb-16"
      aria-labelledby="portfolio-title"
    >
      <div className="mb-10 min-[761px]:flex min-[761px]:items-end min-[761px]:justify-between min-[761px]:gap-7.5">
        <div>
          <p className="mb-5 text-[0.7rem] tracking-[0.14em] uppercase [font-family:Arial,Helvetica,sans-serif]">
            03 / Selected work
          </p>
          <h2
            id="portfolio-title"
            className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-normal"
          >
            A few things
            <br />
            <em>I&apos;ve worked on.</em>
          </h2>
        </div>
      </div>
      <div className="grid gap-3.75 min-[481px]:grid-cols-2 min-[761px]:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
