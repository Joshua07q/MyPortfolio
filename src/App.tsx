import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Me from "./components/Me";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import Wins from "./components/Wins";
import Footer from "./components/Footer";

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <Nav />

      <main className="mx-auto max-w-3xl px-6">
        <Hero />
        <Me />
        <Projects />
        <Stack />
        <Wins />
      </main>

      <Footer />
    </div>
  );
}
