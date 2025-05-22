import { Transition, TransitionChild } from "@headlessui/react";
import Link from "next/link";
import Skill from "./components/sections/skills";
import Projects from "./components/sections/projets";
import Presentation from "./components/sections/presentation";
import Contact from "./components/sections/contact";
import Parcours from "./components/sections/parcours";
import Navbar from "./components/navbar/navbar";
import Experience from "./components/sections/experiences";
import VeilleInfo from "./components/sections/veille";

const BaseTransition = {
  enter: "transition ease-out duration-700",
  enterFrom: "transform -translate-y-full opacity-0",
  enterTo: "transform translate-y-0 opacity-100",
  leave: "transition ease-in duration-500",
  leaveFrom: "transform translate-y-0 opacity-100",
  leaveTo: "transform -translate-y-full opacity-0",
};

export default function Home() {
  return (
    <main className="min-h-screen mt-48 " suppressHydrationWarning>
      <Navbar />
      <Presentation />
      <Skill />
      <Projects />
      <Parcours />
      <Experience />
      <VeilleInfo />
      <Contact />
      <section id="footer"></section>
    </main>
  );
}
