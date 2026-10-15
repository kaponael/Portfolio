import type { Metadata } from "next";
import type { LayoutProps } from "@/types/layout-props";
import { SiteLayout } from "@/components/layout/site-layout";
import "./globals.css";

// Set the saved theme before paint to avoid flashing the wrong background.
const themeScript = `
  (() => {
    let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    try {
      const saved = localStorage.getItem('portfolio-theme');
      if (saved === 'light' || saved === 'dark') theme = saved;
    } catch {}
    document.documentElement.dataset.theme = theme;
  })();
`;

export const metadata: Metadata = {
  title: "Eleni Kapona | Front-End Developer in Cyprus",
  description:
    "Eleni Kapona is a front-end developer based in Cyprus. Explore her skills and portfolio, get in touch, or view her CV.",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
