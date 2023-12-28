"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import ButtonSwitchTheme from "@/app/components/themes";
import { PiFolder } from "react-icons/pi";
import { FaGithub, FaPlusCircle, FaHome } from "react-icons/fa";
import randh from "@/app/assets/images/random-hadith.png";
import telegramrss from "@/app/assets/images/telegram-rss.png";
import Link from "next/link";
import ProjectCard from "../components/projectCard";
import Navigation from "../components/navigation";
export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="mb-auto">
        <Navigation />
        <section className="mt-[120px] ml-10 mr-5 ">
          <h2 className="text-2xl mb-8 text-gray-900 dark:text-gray-100 font-semibold uppercase underline underline-offset-4">
            Quelques projets personnelle...
          </h2>
          {/* <div className="border-2 rounded mx-32">
              <div className="relative mt-6 mx-10 mb-6 p-20 rounded-md group-hover:block group-hover:transition-opacity">
                <Image
                  src={randh}
                  className="rounded-lg"
                  alt="Random Hadith image preview"
                  fill
                  objectFit="fill"
                />{" "}
              </div>
              <h3 className="m-2 font-semibold">Random-Hadith</h3> */}
          {/* <p className="p-2">
                Permet de générer un hadith aléatoire à partir d&apos;une base
                de données libre d&apos;accès.
              </p> */}
          {/* </div> */}
          <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              image={randh.src}
              title="Random-Hadith"
              link="https://github.com/bylkamar/random-hadith"
              description="Permet de générer un hadith aléatoire à partir d'une base de
        données libre d'accès."
            />
            <ProjectCard
              image={telegramrss.src}
              title="Telegram-RSS"
              link="https://github.com/bylkamar/telegram-rss"
              description="Permet d'être notifié des nouveaux flux RSS d'un site web via un message telegram."
            />
          </div>
        </section>
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
