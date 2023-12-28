"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import ButtonSwitchTheme from "./components/themes";
import { PiFolder, PiGithubLogo } from "react-icons/pi";
import { FaGithub, FaHome } from "react-icons/fa";
import gif from "@/app/assets/images/berserk.gif";
import Link from "next/link";
import Navigation from "./components/navigation";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Navigation />
        {/* <nav className=" border-gray-200 border-b-2">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-red-500">
                AIT CHIKHOUNE Amer
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="flex align-center py-2 px-3 dark:text-gray-100 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:dark:text-gray-100 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    <FaHome className="mx-1" size={20} />
                    Accueil
                  </a>
                </li>
                <li>
                  <Link
                    href="/projets"
                    className="flex align-center py-2 px-3 dark:text-gray-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:dark:text-gray-100 "
                  >
                    {" "}
                    <PiFolder className="mx-1" size={20} />
                    Parcours
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parcours"
                    className="flex align-center py-2 px-3 dark:text-gray-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:dark:text-gray-100 "
                  >
                    {" "}
                    <PiFolder className="mx-1" size={20} />
                    Parcours
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:dark:text-gray-100 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:dark:text-gray-100 md:dark:hover:bg-transparent"
                  >
                    <PiFolder className="mx-1" size={20} />
                    CV
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:dark:text-gray-100 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:dark:text-gray-100 md:dark:hover:bg-transparent"
                  >
                    <PiFolder className="mx-1" size={20} />
                    Contact
                  </a>
                </li>
                <li>
                  <ButtonSwitchTheme />
                </li>
              </ul>
            </div>
          </div>
        </nav> */}

        <div className="pt-32 flex justify-center">
          <div className="relative w-40 h-40 rounded-full overflow-hidden">
            <Image
              className="object-right"
              src={gif}
              alt="Avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <p className="text-center italic">
          (Ce n&apos;est pas moi sur l&apos;image)
        </p>
        <div className="pt-20 0 flex justify-center items-center">
          <section>
            <span className="text-2xl py-4 border font-semibold uppercase text-gray-200 bg-black dark:bg-gray-200 dark:text-gray-900 p-2 px-16 border-slate-300 rounded-md">
              A propos de moi
            </span>
          </section>
        </div>
        <section className="mt-[80px] mx-24">
          {/* <h2 className="text-2xl mb-5 text-gray-900 dark:text-gray-100 font-semibold uppercase underline underline-offset-4">
            A propos de moi
          </h2> */}
          <p className="md:text-xl lg:text-2xl">
            J&apos;ai 19 ans et je suis en BTS Informatique SIO première année.
            J&apos;aime bien développer des programmes et sites web en tout
            genre. Je suis passionné par l&apos;informatique depuis mon plus
            jeune âge. J&apos;ai commencé à développer des programmes en 2021
            notamment en créant des scripts pour récupérer des données sur des
            sites web. Et j&apos;ai donc par la suite appris des langages tels
            que le GoLang/JavaScript/PHP...
          </p>
        </section>
        {/* <section className="mt-[120px] ml-10 mr-5 ">
          <h2 className="text-2xl mb-8 text-gray-900 dark:text-gray-100 font-semibold uppercase underline underline-offset-4">
            Quelques projets...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border-2 rounded lg:ml-36">
              <h3 className="p-2 font-semibold">Random-Hadith</h3>
              <p className="p-2">
                Permet de générer un hadith aléatoire à partir d&apos;une base
                de données libre d&apos;accès.
              </p>
            </div>
            <div className="border-2 rounded lg:mr-36">
              <h3 className="p-2 font-semibold">Discord-Spotify-Lyrics</h3>
              <p className="p-2">
                Permet de synchroniser votre écoute spotify sur Discord en temps
                réel.
              </p>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="p-4 mt-auto">
        {/* Contenu du footer */}
        <div className="flex items-center align-center justify-center">
          <span className="mr-2">
            <FaGithub size={35} />
          </span>
          <p className="text-center">
            © 2023 Portfolio AIT CHIKHOUNE Amer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
