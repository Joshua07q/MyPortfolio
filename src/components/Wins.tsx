import { companies, hackathons, highlights } from "../data/proofs";
import Reveal from "./Reveal";

const placementStyle: Record<string, string> = {
  Winner:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-900",
  Finalist:
    "bg-zinc-100 text-zinc-600 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-700",
};

export default function Wins() {
  return (
    <section
      id="wins"
      className="border-t border-zinc-100 py-16 dark:border-zinc-800"
    >
      <Reveal>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Wins
        </h2>
      </Reveal>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Reveal delay={50}>
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
              Worked with
            </p>
            <div className="mt-3 space-y-2.5">
              {companies.map((c) => (
                <div key={c.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        c.current ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"
                      }`}
                    />
                    <span className="text-sm">{c.name}</span>
                  </div>
                  <span className="text-[10px] text-zinc-400 dark:text-zinc-600">
                    {c.role}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
              Hackathons
            </p>
            <ul className="mt-3 space-y-3">
              {hackathons.map((h) => (
                <li
                  key={h.name + h.year}
                  className="flex items-start justify-between gap-2"
                >
                  <div>
                    <p className="text-sm">{h.name}</p>
                    <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                      {h.year}
                    </span>
                  </div>
                  {h.placement && (
                    <span
                      className={`shrink-0 rounded-md border px-2 py-0.5 text-[10px] font-medium ${
                        placementStyle[h.placement] ?? placementStyle["Finalist"]
                      }`}
                    >
                      {h.icon === "trophy" ? "🏆" : "🥈"} {h.placement}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={190}>
          <div className="rounded-xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-600">
              Highlights
            </p>
            <ul className="mt-3 space-y-2.5">
              {highlights.map((x) => (
                <li
                  key={x}
                  className="flex items-start gap-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-500" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
