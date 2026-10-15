import type { NavigationLink } from "@/types/navigation-link";

export const navigation: NavigationLink[] = [
  { label: "Home", href: "/#home" },
  { label: "Skills", href: "/#skills" },
  { label: "Portfolio", href: "/#portfolio" },
];

export const contactNavigation: NavigationLink = {
  label: "Contact Me",
  href: "/#contact",
};

export const mobileNavigation: NavigationLink[] = [
  ...navigation,
  contactNavigation,
];
