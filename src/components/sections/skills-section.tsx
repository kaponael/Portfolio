import { skillGroups } from "@/data/skills";
import type { SkillCardProps } from "@/types/skill-card-props";

function SkillCard({ group, index }: SkillCardProps) {
  return (
    <article
      className="flex min-h-55 flex-col rounded-2xl border border-white/60 bg-white/85 p-5.5 text-primary shadow-[0_12px_36px_color-mix(in_srgb,var(--color-primary)_10%,transparent)] backdrop-blur-[18px] transition-[transform,background-color,border-color,color] duration-300 ease-out hover:-translate-y-1.75 hover:border-secondary/35 hover:bg-white/95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-black/80 dark:text-white dark:hover:border-secondary/35 dark:hover:bg-black/95"
      aria-labelledby={`${group.id}-title`}
    >
      <span
        className="mb-11 block text-[0.7rem] leading-none tracking-[0.08em] text-primary/60 dark:text-white/60"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <ul
        className={`grid flex-1 content-start gap-x-3 gap-y-4 ${group.skills.length > 4 ? "grid-cols-3" : "grid-cols-2"}`}
      >
        {group.skills.map(({ name, logo }) => (
          <li key={name} className="grid min-w-0 place-items-center">
            <span
              role="img"
              aria-label={name}
              className="block size-10 bg-secondary [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
              style={{
                maskImage: `url("${logo.src}")`,
                WebkitMaskImage: `url("${logo.src}")`,
              }}
            />
          </li>
        ))}
      </ul>
      <h3
        id={`${group.id}-title`}
        className="mt-5 w-full text-left text-[1.15rem] leading-snug font-normal"
      >
        <code className="font-serif">{`<${group.title}/>`}</code>
      </h3>
    </article>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto min-h-svh w-full max-w-7xl px-[clamp(1.5rem,6vw,6rem)] pt-[calc(var(--section-offset)+3rem)] pb-16"
      aria-labelledby="skills-title"
    >
      <div className="mb-10">
        <p className="mb-5 text-[0.7rem] tracking-[0.14em] uppercase [font-family:Arial,Helvetica,sans-serif]">
          02 / MY TOOLKIT
        </p>
        <h2
          id="skills-title"
          className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-normal"
        >
          What I work with.
        </h2>
      </div>
      <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group, index) => (
          <SkillCard key={group.id} group={group} index={index} />
        ))}
      </div>
    </section>
  );
}
