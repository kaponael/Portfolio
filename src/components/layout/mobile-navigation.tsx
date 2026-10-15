"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import styles from "./site-header.module.css";

type NavigationLink = { label: string; href: string };

export function MobileNavigation({ links }: { links: NavigationLink[] }) {
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
    <div className={styles.mobileNavigation} ref={containerRef}>
      <button
        className={styles.menuToggle}
        type="button"
        ref={buttonRef}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={styles.menuIcon} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>
      <nav
        id={menuId}
        className={styles.mobilePanel}
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {links.map(({ label, href }) => (
          <Link
            className={styles.navLink}
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
