"use client";
import { FaGithub } from "react-icons/fa";
import randh from "@/app/assets/images/random-hadith.png";
import telegramrss from "@/app/assets/images/telegram-rss.png";
import ProjectCard from "../components/projectCard";
import Navigation from "../components/navigation";
export default function Page() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="mb-auto">
        <Navigation />
        <section className="mt-[120px] ml-10 mr-5 ">
          <h2 className="text-2xl mb-8 text-gray-900 dark:text-gray-100 font-semibold uppercase underline underline-offset-4">
            Quelques projets personnelle...
          </h2>
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
    </div>
  );
}
