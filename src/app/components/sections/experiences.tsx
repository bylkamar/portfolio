"use client";
import { useState } from "react";
import {
  Transition,
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from "@headlessui/react";
const BaseTransition = {
  enter: "transition ease-out duration-500",
  enterFrom: "transform -translate-y-full opacity-0",
  enterTo: "transform translate-y-0 opacity-100",
  leave: "transition ease-in duration-500",
  leaveFrom: "transform translate-y-0 opacity-100",
  leaveTo: "transform -translate-y-full opacity-0",
};
const Experiences: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-4 mx-[15%] mb-[400px]">
      <h2 className="text-gray-700 dark:text-white font-bold text-xl mt-2 text-center mb-8">
        Expériences professionnnelles
      </h2>{" "}
      <Disclosure as="div" className="w-full max-w-md mx-auto">
        <DisclosureButton className="w-full border-b pb-2 text-left flex justify-between">
          <h2>Stage Association WYP Work For Youth Progres - 2025</h2>
          <div className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </DisclosureButton>
        <div className="overflow-hidden py-2">
          <DisclosurePanel
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <ul className="pl-4">
              <li className="text-gray-600 dark:text-gray-300">
                - Conception Site Web
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Création de documentation technique
              </li>
            </ul>
          </DisclosurePanel>
        </div>
      </Disclosure>
      <Disclosure as="div" className="w-full max-w-md mx-auto">
        <DisclosureButton className="w-full border-b pb-2 text-left flex justify-between">
          <h2>Stage Association KAÏROS BELLECROIX - 2024</h2>
          <div className="size-5 fill-white/60 group-data-[hover]:fill-white/50 group-data-[open]:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </DisclosureButton>
        <div className="overflow-hidden py-2">
          <DisclosurePanel
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <ul className="pl-4">
              <li className="text-gray-600 dark:text-gray-300">
                - Maintenance Hardware & Software
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Création d&apos;une application web pour la gestion des congés
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Support à l&apos;utilisateur
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Création de documentation technique
              </li>
            </ul>
          </DisclosurePanel>
        </div>
      </Disclosure>
      <Disclosure as="div" className="w-full max-w-md mx-auto">
        <DisclosureButton className="w-full border-b pb-2 text-left flex justify-between">
          <h2>Stage Préfecture de la Moselle 2022</h2>
          <div className="size-5 fill-white/60  group-data-[hover]:fill-white/50 group-data-[open]:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </DisclosureButton>
        <div className="overflow-hidden py-2">
          <DisclosurePanel
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0"
          >
            <ul className="pl-4">
              <li className="text-gray-600 dark:text-gray-300">
                - Maintenance Hardware & Software
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Ticketing GLPI
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Gestion de données (NAS - Sauvegarde, Récupération,
                Sécurisation, Suppression, Lecture )
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Création de documentation technique
              </li>
            </ul>
          </DisclosurePanel>
        </div>
      </Disclosure>
      {/* <div className="border-b">
        <button
          className="flex justify-between items-center w-full py-3 text-left text-gray-700 hover:text-gray-900 dark:text-white"
          onClick={() => toggleAccordion(1)}
        >
          Stage Association KAÏROS BELLECROIX - 2024
          <span className="text-gray-500">&#x25BC;</span>
        </button>
        <Transition show={activeIndex === 1} {...BaseTransition}>
          <div className={activeIndex === 1 ? "block" : "hidden"}>
            <ul className="pl-4">
              <li className="text-gray-600 dark:text-gray-300">
                - Maintenance Hardware & Software
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Création d&apos;une application web pour la gestion des congés
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Support à l&apos;utilisateur
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                - Création de documentation technique
              </li>
            </ul>
          </div>
        </Transition>
      </div>
      <div className="border-b">
        <button
          className="flex justify-between items-center w-full py-3 text-left text-gray-700 hover:text-gray-900 dark:text-white"
          onClick={() => toggleAccordion(2)}
        >
          Stage Préfecture de la Moselle 2022
          <span className="text-gray-500">&#x25BC;</span>
        </button>
        <div className={activeIndex === 2 ? "block" : "hidden"}>
          <ul className="pl-4">
            <li className="text-gray-600 dark:text-gray-300">
              - Maintenance Hardware & Software
            </li>
            <li className="text-gray-600 dark:text-gray-300">
              - Ticketing GLPI
            </li>
            <li className="text-gray-600 dark:text-gray-300">
              - Gestion de données (NAS - Sauvegarde, Récupération,
              Sécurisation, Suppression, Lecture )
            </li>
            <li className="text-gray-600 dark:text-gray-300">
              - Création de documentation technique
            </li>
          </ul>
        </div>
      </div> */}
    </div>
  );
};
export default Experiences;
