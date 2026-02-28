import { meta, experience, education } from "../data/proofs";
import Reveal from "./Reveal";

export default function Me() {
  return (
    <section id="work" className="border-t border-zinc-100 py-16 dark:border-zinc-800">
      <Reveal>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          About
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {meta.bio}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h3 className="mt-12 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Experience
        </h3>

        <div className="mt-6 space-y-0">
          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className={`relative py-6 pl-6 ${
                i !== experience.length - 1
                  ? "border-b border-zinc-100 dark:border-zinc-900"
                  : ""
              }`}
            >
              <div className="absolute left-0 top-0 flex h-full flex-col items-center">
                <div
                  className={`mt-7 h-2.5 w-2.5 rounded-full border-2 ${
                    i === 0
                      ? "border-blue-500 bg-blue-500"
                      : "border-zinc-300 bg-white dark:border-zinc-700 dark:bg-zinc-950"
                  }`}
                />
                {i !== experience.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                )}
              </div>

              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold">{exp.company}</p>
                  <p className="text-xs text-zinc-500">{exp.role}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                  {exp.period}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-xs text-zinc-500 dark:text-zinc-500"
                  >
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={150}>
        <h3 className="mt-12 text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Education
        </h3>

        <div className="mt-4 rounded-xl border border-zinc-100 bg-zinc-50/50 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold">{education.school}</p>
              <p className="text-xs text-zinc-500">{education.degree}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-400">
                {education.status}
              </span>
              <span className="font-mono text-[10px] text-zinc-400 dark:text-zinc-600">
                {education.period}
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {education.coursework.map((c) => (
              <span
                key={c}
                className="rounded-md bg-white px-2 py-0.5 text-[10px] text-zinc-500 shadow-sm dark:bg-zinc-800 dark:text-zinc-400"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
