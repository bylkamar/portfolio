import { NavBar } from "./components/ui/NavBar";
import { About } from "./components/sections/About";
import Stacks from "./components/sections/Stacks";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Overlay from "./components/ui/Overlay";
import Footer from "./components/ui/Footer";
export default function Home() {


  return (
    // FIX 1: added 'flex-col'
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black relative scroll-smooth">
      <Overlay>

        {/* FIX: added 'w-full flex flex-col items-center' 
      */}
        <NavBar />

        <div className="w-full max-w-7xl px-4 flex flex-col items-center">
          <About />
          <Stacks />
          <Projects />
          <Contact />
        </div>
        <Footer />
        {/* ...autres contenus... */}
      </Overlay>
    </main>
  );
}