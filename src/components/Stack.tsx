import { stack } from "../data/proofs";
import Reveal from "./Reveal";

const categories: { key: keyof typeof stack; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "ai", label: "AI / ML" },
  { key: "backend", label: "Backend & Infra" },
  { key: "databases", label: "Databases" },
  { key: "networking", label: "Networking & Security" },
  { key: "blockchain", label: "Blockchain" },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="border-t border-zinc-100 py-16 dark:border-zinc-800"
    >
      <Reveal>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Stack
        </h2>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {categories.map((cat, ci) => (
          <Reveal key={cat.key} delay={ci * 80}>
            <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
                {cat.label}
              </p>

              <div className="space-y-2.5">
                {stack[cat.key].map((item) => (
                  <div key={item.name} className="flex items-center gap-3">
                    <span className="text-sm">{item.name}</span>
                    {"level" in item && typeof item.level === "number" && (
                      <div className="flex-1">
                        <div className="h-1 w-full rounded-full bg-zinc-100 dark:bg-zinc-800">
                          <div
                            className="h-1 rounded-full bg-blue-500 transition-all duration-700 dark:bg-blue-400"
                            style={{ width: `${item.level}%` }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
