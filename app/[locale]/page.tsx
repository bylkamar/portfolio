import { NavBar } from "../components/ui/NavBar";
import { About } from "../components/sections/About";
import Stacks from "../components/sections/Stacks";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
import Overlay from "../components/ui/Overlay";
import Footer from "../components/ui/Footer";
import { defaultLocale, isLocale } from "../i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;

  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black relative scroll-smooth">
      <Overlay locale={locale}>
        <NavBar locale={locale} />

        <div className="w-full max-w-7xl px-4 flex flex-col items-center">
          <About locale={locale} />
          <Stacks locale={locale} />
          <Projects locale={locale} />
          <Contact locale={locale} />
        </div>
        <Footer locale={locale} />
      </Overlay>
    </main>
  );
}
