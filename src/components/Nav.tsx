import { useEffect, useState } from "react";
import { useTheme } from "./useTheme";
import { meta } from "../data/proofs";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-zinc-100 bg-white/80 shadow-sm backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-6">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight transition-colors hover:text-blue-600 dark:hover:text-blue-400"
        >
          {meta.name.split(" ")[0].toLowerCase()}
          <span className="text-blue-500">.</span>dev
        </a>

        <div className="flex items-center gap-5">
          <div className="hidden items-center gap-4 sm:flex">
            {["work", "projects", "stack", "wins"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="link-underline text-xs text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                {s}
              </a>
            ))}
          </div>

          {meta.available && (
            <span className="flex items-center gap-1.5 rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              Open to work
            </span>
          )}

          <button
            onClick={toggle}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-sm transition-all hover:bg-zinc-100 active:scale-90 dark:border-zinc-800 dark:hover:bg-zinc-900"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
