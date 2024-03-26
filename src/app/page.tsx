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
        {/* A propos de moi */}
        <section className="mt-[80px] mx-24">
          <p className="md:text-xl lg:text-2xl">
            J&apos;ai 19 ans et je suis en BTS Informatique SIO première année.
            J&apos;aime bien développer des programmes et sites web en tout
            genre. Je suis passionné par l&apos;informatique depuis mon plus
            jeune âge. J&apos;ai commencé à développer des programmes en 2021
            notamment en créant des scripts pour récupérer des données sur des
            sites web. Et j&apos;ai donc par la suite appris des langages tels
            que le GoLang/JavaScript/PHP...
          </p>
          <div className="flex justify-center mt-3">
            <button className="text-xl px-4 p-2 border font-semibold border-slate-950 uppercase bg-black hover:bg-white hover:text-gray-900 rounded-md">
              Télécharger mon CV
            </button>
          </div>
        </section>
        {/* Compétences */}
        <section className="mt-[80px] mx-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-3 content-center">
            <div className="border font-semibold uppercase text-gray-200 bg-black dark:bg-gray-200 dark:text-gray-900 border-slate-300 rounded">
              <div className="border-b border-black">
                <h3 className="ml-2 text-center text-xl">Programmation</h3>
              </div>
              <div>
                <ul className="ml-2">
                  <li>- GoLANG</li>
                  <li>- JavaScript</li>
                  <li>- PHP</li>
                  <li>- Python</li>
                  <li>- Java</li>
                  <li>- Bootstrap</li>
                </ul>
              </div>
            </div>

            <div className="border font-semibold uppercase text-gray-200 bg-black dark:bg-gray-200 dark:text-gray-900 border-slate-300 rounded">
              <div className="border-b border-black">
                <h3 className="ml-2 text-center text-xl">BDD</h3>
              </div>
              <div>
                <ul className="ml-2">
                  <li>- SQL</li>
                  <li>- PhpMyAdmin</li>
                  <li>- WinDesign</li>
                </ul>
              </div>
            </div>

            <div className="border font-semibold uppercase text-gray-200 bg-black dark:bg-gray-200 dark:text-gray-900 border-slate-300 rounded">
              <div className="border-b border-black">
                <h3 className="ml-2 text-center text-xl">Sys. Réseau</h3>
              </div>
              <div>
                <ul className="ml-2">
                  <li>- Cisco</li>
                  <li>- Active Directory</li>
                  <li>- Windows Server</li>
                  <li>- Linux</li>
                  <li>- Hyper-V</li>
                  <li>- GLPI/OCS</li>
                </ul>
              </div>
            </div>

            <div className="border font-semibold uppercase text-gray-200 bg-black dark:bg-gray-200 dark:text-gray-900 border-slate-300 rounded">
              <div className="border-b border-black">
                <h3 className="ml-2 text-center text-xl">Savoir Faire</h3>
              </div>
              <div>
                <ul className="ml-2">
                  <li>- Sérieux</li>
                  <li>- Autonome</li>
                  <li>- Travail d&apos;équipe</li>
                  <li>- Gestion de stresse</li>
                  <li>- Résolution de problèmes</li>
                  <li>- Apprentissage rapide</li>
                  <li>- Créativité</li>
                  <li>- Curiosité technique</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
