"use client";

import {
  Dialog,
  DialogTitle,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import hpassion from "../../../../public/image/hpassion.jpg";
const Projects: React.FC = () => {
  // Permet de voir si l'élément est visible
  let [isOpenRH, setIsOpenRH] = useState(false);
  return (
    <section id="projets" className="mb-[400px]">
      <h1 className="text-center text-gray-700 dark:text-white font-bold mb-8 text-2xl">
        Mes projets perso/pro
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-stretch mx-[10%]">
        <div className="bg-[#F6F8FF] dark:bg-[#242F42] rounded-md p-4">
          <div className="rounded-lg">
            <Image
              src={"https://i.imgur.com/V8viUZf.png"}
              alt="projet par it chikhoune amer"
              className="rounded-lg h-[180px] "
              width={"99999"}
              height={"9999"}
            />
          </div>
          <h2 className="text-gray-700 dark:text-white font-bold text-xl mt-2">
            Random - Hadith
          </h2>
          <button
            onClick={() => setIsOpenRH(true)}
            className=" text-2xl font-medium mt-2 bg-[#5263FF] px-4 rounded-lg"
          >
            +
          </button>
          <Dialog
            open={isOpenRH}
            onClose={() => setIsOpenRH(false)}
            className="relative z-50 "
            transition
          >
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                transition
                className="max-w-lg space-y-4 border bg-white p-12 rounded-lg text-gray-700 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <DialogTitle className="font-bold text-center">
                  Random-Hadith
                </DialogTitle>
                <p>
                  Vous sort un hadith{" "}
                  <span className="italic">(histoire ou un enseignement) </span>
                  depuis de multiples collections avec son degré
                  d&lsquo;authenticité et sa traduction arabe/anglais.
                </p>
                <span className="font-bold">Framework</span>
                <ul className="list-disc">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/bylkamar/random-hadith"
                    target="blank"
                  >
                    <button className="bg-[#5263FF] duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold">
                      Voir le GitHub
                    </button>
                  </Link>
                  <button
                    className="bg-red-400 duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold"
                    onClick={() => setIsOpenRH(false)}
                  >
                    Fermer
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </div>

        <div className="bg-[#F6F8FF] dark:bg-[#242F42] rounded-md p-4">
          <div className="rounded-lg">
            <Image
              src={hpassion}
              alt="projet h-passion réalisé pour un client"
              className="rounded-lg h-[180px] w-full"
              width={"99999"}
              height={"9999"}
            />
          </div>
          <h2 className="text-gray-700 dark:text-white font-bold text-xl mt-2">
            h-passion
          </h2>
          <button
            onClick={() => setIsOpenRH(true)}
            className=" text-2xl font-medium mt-2 bg-[#5263FF] px-4 rounded-lg"
          >
            +
          </button>
          <Dialog
            open={isOpenRH}
            onClose={() => setIsOpenRH(false)}
            className="relative z-50 "
            transition
          >
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel
                transition
                className="max-w-lg space-y-4 border bg-white p-12 rounded-lg text-gray-700 duration-300 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <DialogTitle className="font-bold text-center">
                  Random-Hadith
                </DialogTitle>
                <p>
                  Vous sort un hadith{" "}
                  <span className="italic">(histoire ou un enseignement) </span>
                  depuis de multiples collections avec son degré
                  d&lsquo;authenticité et sa traduction arabe/anglais.
                </p>
                <span className="font-bold">Framework</span>
                <ul className="list-disc">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/bylkamar/random-hadith"
                    target="blank"
                  >
                    <button className="bg-[#5263FF] duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold">
                      Voir le GitHub
                    </button>
                  </Link>
                  <button
                    className="bg-red-400 duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold"
                    onClick={() => setIsOpenRH(false)}
                  >
                    Fermer
                  </button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Projects;
