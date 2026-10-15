"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import type { MobileNavigationProps } from "@/types/mobile-navigation-props";
import { circularButtonClasses, glassClasses, navLinkClasses } from "./navigation-styles";

export function MobileNavigation({ links }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    function onPointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onFocusIn(event: FocusEvent) {
      if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    const desktop = window.matchMedia("(min-width: 769px)");
    function onResize(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("focusin", onFocusIn);
    desktop.addEventListener("change", onResize);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("focusin", onFocusIn);
      desktop.removeEventListener("change", onResize);
    };
  }, [isOpen]);

  return (
    <div className="relative min-[769px]:hidden" ref={containerRef}>
      <button
        className={circularButtonClasses}
        type="button"
        ref={buttonRef}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span className={`absolute inset-x-0 top-0 h-0.5 rounded-full bg-current transition-[transform,opacity] duration-220 motion-reduce:transition-none ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`absolute inset-x-0 top-[7px] h-0.5 rounded-full bg-current transition-opacity duration-220 motion-reduce:transition-none ${isOpen ? "opacity-0" : ""}`} />
          <span className={`absolute inset-x-0 top-3.5 h-0.5 rounded-full bg-current transition-[transform,opacity] duration-220 motion-reduce:transition-none ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </span>
      </button>
      <nav
        id={menuId}
        className={`${glassClasses} absolute top-[calc(100%+0.75rem)] left-0 w-[min(20rem,calc(100vw-2.5rem))] rounded-3xl p-2 motion-reduce:animate-none ${isOpen ? "grid animate-menu-enter" : "hidden"}`}
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {links.map(({ label, href }) => (
          <Link
            className={`${navLinkClasses} min-h-12 justify-start`}
            href={href}
            key={href}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
