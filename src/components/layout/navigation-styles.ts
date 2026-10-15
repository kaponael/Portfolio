// Shared Tailwind classes keep the glass controls visually consistent.
export const glassClasses = [
  "pointer-events-auto border border-white/65 bg-white/8 dark:border-white/30 dark:bg-primary/22",
  "bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-white)_28%,transparent),color-mix(in_srgb,var(--color-white)_3%,transparent)_50%,color-mix(in_srgb,var(--color-white)_12%,transparent))]",
  "shadow-[0_8px_30px_color-mix(in_srgb,var(--color-primary)_18%,transparent),inset_0_1px_1px_color-mix(in_srgb,var(--color-white)_65%,transparent),inset_0_-1px_1px_color-mix(in_srgb,var(--color-white)_12%,transparent)]",
  "dark:shadow-[0_8px_30px_color-mix(in_srgb,var(--color-black)_24%,transparent),inset_0_1px_1px_color-mix(in_srgb,var(--color-white)_65%,transparent),inset_0_-1px_1px_color-mix(in_srgb,var(--color-white)_12%,transparent)]",
  "backdrop-blur-[24px] backdrop-saturate-[170%] transition-[background-color,border-color,color,box-shadow] duration-(--theme-duration) ease-(--theme-easing)",
].join(" ");

export const circularButtonClasses = `${glassClasses} grid size-11 shrink-0 cursor-pointer place-items-center rounded-full p-0 text-inherit min-[769px]:size-14 hover:bg-white/24 dark:hover:bg-secondary/22`;

export const navLinkClasses =
  "inline-flex min-h-11 items-center justify-center rounded-full px-5.5 py-2.5 text-[0.9375rem] leading-[1.5] font-medium whitespace-nowrap transition-colors duration-200 hover:bg-white/24 dark:hover:bg-secondary/22 motion-reduce:transition-none";
