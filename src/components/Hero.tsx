import { useState, useEffect } from "react";
import { meta, socials, roles } from "../data/proofs";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
      setTick((t) => t + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const firstName = meta.name.split(" ")[0];
  const lastName = meta.name.split(" ")[1];

  return (
    <section className="pb-16 pt-24 sm:pt-32">
      <div className="stagger">
        <div className="flex items-end justify-between gap-6">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl md:text-8xl lg:text-[6.5rem]">
            <span className="block leading-[0.9]">{firstName}</span>
            <span className="block leading-[0.9] text-zinc-300 dark:text-zinc-700">
              {lastName}
            </span>
          </h1>

          <img
            src="/ferris.svg"
            alt="Ferris the crab"
            className="hidden w-24 shrink-0 sm:block md:w-32 lg:w-36"
            draggable={false}
          />
        </div>

        <p className="mt-6 max-w-md text-base text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {meta.tagline}
        </p>

        <div className="mt-6 space-y-1 font-mono text-xs text-zinc-400 dark:text-zinc-500">
          <p>
            <span className="text-blue-500">&gt;</span>{" "}
            currently:{" "}
            <span key={tick} className="role-tick text-zinc-700 dark:text-zinc-300">
              {roles[roleIndex]}
            </span>
          </p>
          <p>
            <span className="text-blue-500">&gt;</span>{" "}
            location:{" "}
            <span className="text-zinc-700 dark:text-zinc-300">
              {meta.location}
            </span>
          </p>
          <p>
            <span className="text-blue-500">&gt;</span>{" "}
            status:{" "}
            <span className="text-zinc-700 dark:text-zinc-300">
              available for hire
            </span>
            <span className="cursor-blink" />
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-200 px-3 py-2 text-xs text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-100"
            >
              <SocialIcon type={s.icon} />
              <span>{s.handle}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "github":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "huggingface":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 32 32">
          <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm-3.5 20.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm7 0c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zm-9.75-7.25c-.69-.4-.926-1.278-.526-1.968s1.278-.926 1.968-.526l2.5 1.443c.69.4.926 1.278.526 1.968s-1.278.926-1.968.526l-2.5-1.443zm12.5 0l-2.5 1.443c-.69.4-1.568.164-1.968-.526s-.164-1.568.526-1.968l2.5-1.443c.69-.4 1.568-.164 1.968.526s.164 1.568-.526 1.968zM16 25c-2.761 0-5-1.119-5-2.5h10c0 1.381-2.239 2.5-5 2.5z" />
        </svg>
      );
    case "x":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.989-.217.15-.045.296-.09.436-.12a1.641 1.641 0 0 1 .329-.044c.465 0 .886.256.886.689 0 .363-.238.63-.674.854-.083.042-.17.078-.262.116-.18.074-.39.16-.59.29a3.73 3.73 0 0 0-.58.48c-.123.132-.226.271-.313.4-.167.24-.286.48-.372.732-.115.34-.074.593-.048.689.015.06.036.12.06.18.186.39.53.69.917 1.007.074.06.15.119.226.182.334.27.672.542.96.9.315.39.503.855.503 1.347 0 .18-.03.36-.09.531-.18.53-.604.939-1.119 1.109-.3.12-.629.18-.959.21-.18.016-.36.029-.526.048-.196.027-.38.058-.556.103a3.22 3.22 0 0 0-.469.165c-.18.09-.33.18-.479.29a1.14 1.14 0 0 1-.665.21c-.09 0-.18-.009-.27-.03a5.86 5.86 0 0 0-.48-.09 8.72 8.72 0 0 0-1.17-.09c-.42 0-.81.04-1.17.09-.18.03-.33.06-.48.09-.09.021-.18.03-.27.03a1.14 1.14 0 0 1-.665-.21 3.18 3.18 0 0 0-.479-.29 3.22 3.22 0 0 0-.469-.165 5.46 5.46 0 0 0-.556-.103 9.72 9.72 0 0 1-.526-.048 2.192 2.192 0 0 1-.959-.21c-.516-.17-.939-.58-1.119-1.109a1.54 1.54 0 0 1-.09-.531c0-.492.188-.957.504-1.347.287-.358.625-.63.96-.9.075-.063.151-.122.225-.182.387-.316.731-.617.917-1.007.024-.06.045-.12.06-.18.027-.096.068-.349-.048-.689a3.38 3.38 0 0 0-.372-.732 3.36 3.36 0 0 0-.313-.4 3.73 3.73 0 0 0-.58-.48c-.2-.13-.41-.216-.59-.29a2.37 2.37 0 0 1-.262-.116c-.436-.224-.674-.491-.674-.854 0-.433.42-.689.886-.689.11 0 .221.015.329.044.14.03.286.075.436.12.33.097.69.201.989.217.198 0 .326-.045.401-.09a9.3 9.3 0 0 1-.03-.51l-.003-.06c-.104-1.628-.23-3.654.3-4.847C7.86 1.069 11.216.793 12.206.793z" />
        </svg>
      );
    default:
      return null;
  }
}
