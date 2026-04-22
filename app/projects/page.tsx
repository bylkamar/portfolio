"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Footer from "../components/ui/Footer";
import { NavBar } from "../components/ui/NavBar";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  difficulty: "Easy" | "Medium" | "Hard";
  ux: "Polished" | "Experimental" | "Minimal";
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Aurora Portfolio",
    description:
      "A clean, fast portfolio with a glowing hero and smooth micro-interactions.",
    tags: ["Portfolio", "Landing", "Responsive", "Easy UX"],
    difficulty: "Easy",
    ux: "Polished",
  },
  {
    id: 2,
    title: "Prism Dashboard",
    description: "Analytics dashboard with cards, charts, and quick filters.",
    tags: ["Dashboard", "Data", "Easy UX"],
    difficulty: "Medium",
    ux: "Polished",
  },
  {
    id: 3,
    title: "Lumen Case Studies",
    description:
      "Project stories with outcomes, metrics, and process highlights.",
    tags: ["Case Study", "Grid", "Appealing"],
    difficulty: "Medium",
    ux: "Polished",
  },
];

const FILTERS = [
  "All",
  "Easy",
  "Easy UX",
  "Appealing",
  "Polished",
  "Minimal",
  "Experimental",
] as const;

function ProjectsPage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<(typeof FILTERS)[number]>("All");

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return PROJECTS.filter((project) => {
      const matchesQuery =
        normalizedQuery.length === 0 ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.description.toLowerCase().includes(normalizedQuery) ||
        project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery));

      const matchesFilter =
        activeFilter === "All" ||
        (activeFilter === "Easy" && project.difficulty === "Easy") ||
        (activeFilter === "Easy UX" && project.tags.includes("Easy UX")) ||
        (activeFilter === "Appealing" && project.tags.includes("Appealing")) ||
        (activeFilter === "Polished" && project.ux === "Polished") ||
        (activeFilter === "Minimal" && project.ux === "Minimal") ||
        (activeFilter === "Experimental" && project.ux === "Experimental");

      return matchesQuery && matchesFilter;
    });
  }, [query, activeFilter]);

  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black relative scroll-smooth">
      <NavBar />

      <section className="w-full">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pb-12 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-3">
              <span className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                Projects
              </span>
              <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-5xl">
                Explore delightful, easy-to-use interfaces
              </h1>
              <p className="max-w-2xl text-base text-zinc-600 dark:text-zinc-300 md:text-lg">
                Search and filter a growing collection of polished, easy UX
                projects. Built to feel smooth on mobile and spacious on
                desktop.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-3xl border border-zinc-200 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="relative flex-1">
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search projects, tags, or vibes..."
                    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700 shadow-sm outline-none transition focus:border-zinc-300 focus:ring-2 focus:ring-zinc-900/10 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-200 dark:focus:border-zinc-600 dark:focus:ring-zinc-100/10"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {filteredProjects.length} results
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
                  <div className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                    {PROJECTS.length}+ projects
                  </div>
                  {/* <div className="rounded-full bg-zinc-100 px-3 py-1 dark:bg-zinc-800">
                                        Mobile & desktop ready
                                    </div> */}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] transition ${
                      activeFilter === filter
                        ? "border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                        : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${query}-${activeFilter}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-100/40 via-transparent to-transparent opacity-0 transition group-hover:opacity-100 dark:from-white/5" />
                  <div className="relative flex h-full flex-col gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                        {project.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 dark:text-zinc-300">
                      {project.description}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.id}-${tag}`}
                          className="rounded-full border border-zinc-200 px-3 py-1 text-[11px] text-zinc-500 dark:border-zinc-700 dark:text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-3xl border border-dashed border-zinc-300 bg-white/60 p-10 text-center text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900/40"
            >
              No projects found. Try a different keyword or filter.
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default ProjectsPage;
