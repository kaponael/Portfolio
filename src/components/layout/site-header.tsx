import Link from "next/link";
import { MobileNavigation } from "./mobile-navigation";
import { ThemeToggle } from "./theme-toggle";
import { glassClasses, navLinkClasses } from "./navigation-styles";

const navigation = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
];

export function SiteHeader() {
  return (
    <header className="pointer-events-none fixed inset-x-5 top-4 z-20 flex items-center justify-between gap-3 min-[769px]:top-6 min-[769px]:justify-center min-[901px]:inset-x-8 min-[901px]:grid min-[901px]:grid-cols-[1fr_auto_1fr] min-[901px]:gap-5">
      <MobileNavigation
        links={[...navigation, { label: "Contact Me", href: "/#contact" }]}
      />
      <nav className={`${glassClasses} col-start-2 hidden items-center rounded-full p-1.5 min-[769px]:flex`} aria-label="Main navigation">
        {navigation.map(({ label, href }) => (
          <Link className={navLinkClasses} href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="col-start-3 flex items-center justify-self-end gap-3">
        <Link
          className={`${glassClasses} hidden min-h-14 items-center justify-center rounded-full px-5.5 py-2.5 text-[0.9375rem] leading-[1.5] font-medium whitespace-nowrap hover:bg-white/24 dark:hover:bg-secondary/22 min-[769px]:inline-flex`}
          href="/#contact"
        >
          Contact Me
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
