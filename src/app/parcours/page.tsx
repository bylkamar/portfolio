"use client";
import React from "react";
import Navigation from "../components/navigation";
import { IoMdSchool } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <Navigation />
      <div className="mt-[120px] mx-8 md:mx-24">
        <h1 className="text-xl text-center font-semibold mb-8">
          Parcours scolaire
        </h1>
        <div className="space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              ?
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-700">Licence pro ?</div>
                <time className="font-caveat font-medium text-gray-400">
                  01/09/????
                </time>
              </div>
              <div className="text-slate-500"></div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <IoMdSchool size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-700 dark:text-gray-300">
                  BTS INFORMATIQUE SIO
                </div>
                <time className="font-caveat font-medium text-gray-400">
                  01/09/2023
                </time>
              </div>
              <div className="text-slate-500">
                Option: Solutions Logicielles et Applications Métiers (SLAM)
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <IoMdSchool size={20} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 dark:border-slate-700 shadow">
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-bold text-gray-700 dark:text-gray-300">
                  BAC STMG
                </div>
                <div>
                  <time className="font-caveat font-medium text-gray-400">
                    01/09/2020
                  </time>
                </div>
              </div>
              <div className="text-slate-500">
                Option: Système d&apos;information de gestion (SIG)
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-xl font-semibold text-center mt-20">
          Expérience profesionnelles
        </h1>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4  mb-20">
          <div className="border border-slate-700 p-4 rounded shadow">
            <div className="flex items-center justify-between space-x-2">
              <div>
                <h1 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  Préfécture de la moselle
                </h1>
              </div>
              <div>
                <time className="font-caveat font-medium text-gray-400">
                  Décembre 2021 (2 Week)
                </time>
              </div>
            </div>
            <div>
              <span className="text-slate-500">Technicien SID SIC</span>
            </div>
            <div className="mt-1">
              <ul className="list-disc list-inside">
                <li>
                  <span className="text-slate-500">
                    Maintenance Informatique (Hardware & Software)
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">GLPI (Ticketing)</span>
                </li>
                <li>
                  <span className="text-slate-500">CASPER (Logiciel RH)</span>
                </li>
                <li>
                  <span className="text-slate-500">Inventaire du matériel</span>
                </li>
                <li>
                  <span className="text-slate-500">
                    Windows Serveur (ActiveDirectory)
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">
                    Assistance de proximité sur Agent (Diagnostique et
                    résolution sur place)
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">
                    Assistance à distance (Bureau à distance)
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">
                    Manipulation de données
                    (Récupération/Sécurisation/Formatage)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-slate-700 p-4 rounded shadow">
            <div className="flex items-center justify-between space-x-2">
              <div>
                <h1 className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  GSM INFO SERVICE
                </h1>
              </div>
              <div>
                <time className="font-caveat font-medium text-gray-400">
                  Décembre 2019 (2 Week)
                </time>
              </div>
            </div>
            <div>
              <span className="text-slate-500">Technicien SID SIC</span>
            </div>
            <div className="mt-1">
              <ul className="list-disc list-inside">
                <li>
                  <span className="text-slate-500">
                    Gestion clientèle (Accueil du client et propositions de
                    solutions appropriés)
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">
                    Réparation de smartphone (Changement batterie, écran,
                    caméra)
                  </span>
                </li>
                <li>
                  <span className="text-slate-500">
                    Activation/déblocage carte SIM et de la Ventes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
