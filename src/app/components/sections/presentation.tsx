"use client";
import React from "react";
import Image from "next/image";
import { Transition, TransitionChild } from "@headlessui/react";
import Link from "next/link";
import mecbg from "../../../../public/image/mecbg.bmp";
const BaseRotateTransition = {
  enter: "transform transition duration-[1200ms]",
  enterFrom: "opacity-0 rotate-[-120deg] scale-50",
  enterTo: "opacity-100 rotate-0 scale-100",
  leave: "transform duration-700 transition ease-in-out",
  leaveFrom: "opacity-100 rotate-0 scale-100",
  leaveTo: "opacity-0 scale-95",
};

const BaseTransition = {
  enter: "transition ease-out duration-700",
  enterFrom: "transform -translate-y-full opacity-0",
  enterTo: "transform translate-y-0 opacity-100",
  leave: "transition ease-in duration-500",
  leaveFrom: "transform translate-y-0 opacity-100",
  leaveTo: "transform -translate-y-full opacity-0",
};

const Presentation: React.FC = () => {
  const scrollToSection = () => {
    const section = document.getElementById("biographie");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <section id="starter" className="w-full text-center">
        <Transition show={true} appear={true}>
          <div className="text-gray-700">
            <div>
              <TransitionChild {...BaseTransition}>
                <h1 className="text-xl font-bold dark:text-white">Bienvenue</h1>
              </TransitionChild>
              <TransitionChild {...BaseTransition}>
                <h2 className="text-2xl font-bold hover:scale-125 duration-300 dark:text-white">
                  Je m&apos;apelle AIT CHIKHOUNE Amer
                </h2>
              </TransitionChild>
              <TransitionChild {...BaseTransition}>
                <h2 className="text-opacity-95 dark:text-gray-400">
                  Étudiant en Informatique
                </h2>
              </TransitionChild>
            </div>

            <div className="flex justify-center mt-2 gap-2 mb-[400px]">
              <TransitionChild {...BaseTransition}>
                <Link href={"files/cv_ait_chikhoune_amer.pdf"} target="blank">
                  <button className="bg-[#5263FF] hover:scale-110 hover:bg-opacity-90 text-white px-8 py-2 rounded-md flex justify-center hover:scale-125 duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25"
                      />
                    </svg>
                    Mon CV
                  </button>
                </Link>
              </TransitionChild>
              <TransitionChild {...BaseTransition}>
                <Link href="#" onClick={scrollToSection}>
                  <button className="bg-[#5263FF] hover:scale-110 hover:bg-opacity-90 text-white p-2 rounded-full flex justify-center duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </button>
                </Link>
              </TransitionChild>
            </div>
          </div>
        </Transition>
      </section>
      <section id="biographie" className="mx-24 mt-12 mb-[500px] scroll-mt-24">
        <h1 className="text-center text-gray-800 text-2xl font-bold dark:text-white mb-4">
          Présentation
        </h1>
        <div className="grid md:grid-cols-2">
          <Transition show={true} appear={true} {...BaseTransition}>
            <div className="rounded-full w-48 h-48 flex justify-end overflow-hidden m-auto">
              <Image
                src={mecbg}
                width={999999}
                height={99999}
                alt="photo de profil ait chikhoune amer"
              ></Image>
            </div>
          </Transition>
          <div className="m-auto mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2">
              <button className="bg-[#F6F8FF] dark:bg-[#242F42] dark:text-white hover:scale-110 hover:bg-opacity-90 text-gray-900 font-bold px-8 py-3 rounded-md duration-300 lg:ml-8 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-6 mr-2 flex-shrink-0 text-[#5263FF]" // Ajout de flex-shrink-0 pour empêcher le SVG de rétrécir
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <span>Autonome</span>
              </button>
              <button className="bg-[#F6F8FF] dark:bg-[#242F42] dark:text-white hover:scale-110 hover:bg-opacity-90 text-gray-900 font-bold px-8 py-3 rounded-md duration-300 lg:ml-8 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-6 mr-2 flex-shrink-0 text-[#5263FF]" // Ajout de flex-shrink-0 pour empêcher le SVG de rétrécir
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>
                <span>Adaptabilité</span>
              </button>
              <button className="bg-[#F6F8FF] dark:bg-[#242F42] dark:text-white hover:scale-110 hover:bg-opacity-90 text-gray-900 font-bold px-8 py-3 rounded-md duration-300 lg:ml-8 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-6 mr-2 flex-shrink-0 text-[#5263FF]" // Ajout de flex-shrink-0 pour empêcher le SVG de rétrécir
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                  />
                </svg>
                <span>Aprentissage rapide</span>
              </button>
            </div>

            <p className="text-gray-700 dark:text-white lg:ml-8 mt-4">
              J&apos;ai actuellement 19 ans et je prépare un BTS Services
              Informatiques aux Organisations (SIO) au Lycée Robert SCHUMAN à
              Metz. J&apos;aime bien l&apos;nformatique depuis mon plus jeune
              âge notamment la sécurité informatique auquel je souhaite me
              spécialiser. J&apos;ai commencé à développer des applications et
              des sites web personnel puis pour des particuliers et
              professionnelles. Je me tiens à votre disposition pour tout projet
              ou collaboration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Presentation;
