"use client";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import gif from "@/app/assets/images/berserk.gif";
import Navigation from "./components/navigation";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main>
        <Navigation />
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
      </main>
    </div>
  );
}
