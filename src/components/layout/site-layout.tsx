import type { LayoutProps } from "@/types/layout-props";
import { SiteHeader } from "./site-header";

export function SiteLayout({ children }: LayoutProps) {
  return (
    <div className="isolate min-h-svh">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-86" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('../images/bg-lightmode.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-[url('../images/bg-darkmode.png')] bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-(--theme-duration) ease-(--theme-easing) dark:opacity-100" />
      </div>
      <a className="fixed top-4 left-4 z-100 -translate-y-[200%] rounded-full bg-foreground px-4 py-3 text-background focus-visible:translate-y-0" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" className="outline-none" tabIndex={-1}>
        {children}
      </main>
    </div>
  );
}
