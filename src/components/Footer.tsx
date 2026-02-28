import { useState } from "react";
import { meta, socials } from "../data/proofs";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(meta.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
            Get in touch
          </p>
          <button
            onClick={copyEmail}
            className="group mt-4 inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-blue-600 dark:hover:text-blue-400 sm:text-xl"
          >
            {meta.email}
            <span className="rounded-md border border-zinc-200 px-1.5 py-0.5 text-[10px] text-zinc-400 transition-all group-hover:border-blue-300 group-hover:text-blue-600 dark:border-zinc-800 dark:group-hover:border-blue-800 dark:group-hover:text-blue-400">
              {copied ? "Copied!" : "Copy"}
            </span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
            >
              {s.platform}
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 text-center">
          <p className="font-mono text-[10px] text-zinc-300 dark:text-zinc-800">
            &copy; {new Date().getFullYear()} {meta.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
