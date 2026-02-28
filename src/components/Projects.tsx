import { useState } from "react";
import { projects } from "../data/proofs";
import Reveal from "./Reveal";

const categories = [
  { key: "all", label: "All" },
  { key: "featured", label: "Featured" },
  { key: "ai", label: "AI/ML" },
  { key: "platform", label: "Platform" },
  { key: "systems", label: "Systems" },
];

const ARROW_ICON = (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
  >
    <path d="M7 17L17 7M17 7H7M17 7v10" />
  </svg>
);

export default function Projects() {
  const [filter, setFilter] = useState("featured");

  const filtered =
    filter === "all"
      ? projects
      : filter === "featured"
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="border-t border-zinc-100 py-16 dark:border-zinc-800"
    >
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Projects
          </h2>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((c) => (
              <button
                key={c.key}
                onClick={() => setFilter(c.key)}
                className={`rounded-md px-2.5 py-1 text-[10px] font-medium transition-all ${
                  filter === c.key
                    ? "bg-zinc-900 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
                    : "bg-zinc-100 text-zinc-500 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-6 space-y-3">
        {filtered.map((project, i) => (
          <Reveal key={project.name} delay={i * 60}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift group flex items-start justify-between gap-4 rounded-xl border border-zinc-100 bg-white p-4 sm:p-5 dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-zinc-300 dark:text-zinc-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-semibold">{project.name}</h3>
                  {project.featured && (
                    <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                      Featured
                    </span>
                  )}
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-100 bg-zinc-50 px-2 py-0.5 font-mono text-[10px] text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <span className="mt-1 shrink-0 text-zinc-300 transition-colors group-hover:text-blue-500 dark:text-zinc-700 dark:group-hover:text-blue-400">
                {ARROW_ICON}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      {filter !== "all" && (
        <Reveal delay={filtered.length * 60 + 100}>
          <div className="mt-6 text-center">
            <a
              href="https://github.com/Joshua07q?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              View all on GitHub
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </Reveal>
      )}
    </section>
  );
}
