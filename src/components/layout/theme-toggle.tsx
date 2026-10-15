"use client";

import { useSyncExternalStore } from "react";
import { circularButtonClasses } from "./navigation-styles";

const iconClasses =
  "col-start-1 row-start-1 size-5.5 origin-center transition-[opacity,rotate,scale] duration-(--theme-duration) ease-(--theme-easing) motion-reduce:rotate-0 motion-reduce:scale-100 motion-reduce:dark:rotate-0 motion-reduce:dark:scale-100";

const storageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";

function subscribe(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key !== storageKey) return;
    if (event.newValue === "light" || event.newValue === "dark") {
      document.documentElement.dataset.theme = event.newValue;
      onChange();
    }
  }

  window.addEventListener(themeChangeEvent, onChange);
  window.addEventListener("storage", onStorage);

  return () => {
    window.removeEventListener(themeChangeEvent, onChange);
    window.removeEventListener("storage", onStorage);
  };
}

function getTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

function getServerTheme() {
  return "light";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);
  const label = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;

  function toggleTheme() {
    const nextTheme = getTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;

    try {
      localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Theme switching still works when browser storage is unavailable.
    }

    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <button
      className={circularButtonClasses}
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      <svg
        className={`${iconClasses} dark:rotate-70 dark:scale-85 dark:opacity-0`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M20.9 13.1A9 9 0 0 1 10.9 3.1a9 9 0 1 0 10 10Z" />
      </svg>
      <svg
        className={`${iconClasses} -rotate-70 scale-85 opacity-0 dark:rotate-0 dark:scale-100 dark:opacity-100`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </svg>
    </button>
  );
}
