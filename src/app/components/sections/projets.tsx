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
import sio from "../../../../public/image/sio.webp";

const projectsData = [
  {
    id: 2,
    title: "h-passion.fr",
    description: `Site vitrine Wordpress comprenant l'affichage de multiples offres (henné,peinture sur toile,certificat d'amitié...) pour une cliente`,
    imageUrl: hpassion,
    websiteLink: "https://h-passion.fr/",
    pro: false,
  },
  {
    id: 3,
    title: "[BTS SIO] - Projet 1 (Config PC)",
    description: `Projet réalisé en cours de formation de BTS SIO, On devait installer et configurer un PC ainsi que lister sa configuration réseau et matériel. \nLe compte rendu est indisponible du aux données personnelles.`,
    imageUrl: sio,
    websiteLink: "https://google.fr",
    pro: false,
  },
  {
    id: 4,
    title: "[BTS SIO] - Projet 2 (Hyper-V)",
    description: `Projet réalisé en cours de formation de BTS SIO, On devait installer et configurer une machine virtuelle et lister sa configuration réseau et matériel sous hyper-v. \nLe compte rendu est indisponible du aux données personnelles.`,
    imageUrl: sio,
    websiteLink: "https://google.fr",
    pro: false,
  },
  {
    id: 5,
    title: "[BTS SIO] - Projet 6 (OCS/GLPI)",
    description: `Projet réalisé en cours de formation de BTS SIO, On devait installer et configurer OCS et GLPI sur un serveur Windows et lister la configuration réseau et matériel de notre parc informatique fictif.\nLe compte rendu est indisponible du aux données personnelles.`,
    imageUrl: sio,
    websiteLink: "https://google.fr",
    pro: false,
  },
  {
    id: 6,
    title: "[BTS SIO] - Projet 8 (Active Directory)",
    description: `Projet réalisé en cours de formation de BTS SIO, On devait installer et configurer un ACTIVE DIRECTORY avec un serveur Windows et on a crée un domaine puis importer une liste de comptes d'AD pour simuler un vrai en environnement.\nLe compte rendu est indisponible du aux données personnelles.`,
    imageUrl: sio,
    websiteLink: "https://google.fr",
    pro: false,
  },
  {
    id: 7,
    title: "Portfolio (NextJS)",
    description: `Portfolio réalisé avec NextJS et Tailwind CSS, il est responsive et il y a un dark mode.`,
    imageUrl: sio,
    websiteLink: "https://aitchikhoune-amer.fr",
    frameworks: ["NextJS", "Tailwind CSS"],
    githubLink: "https://github.com/bylkamar/portfolio",
    pro: false,
  },
];

const Projects: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const filterProjects = (pro: boolean) => {
    const filtered = projectsData.filter((project) => project.pro === pro);
    setFilteredProjects(filtered);
  };

  return (
    <section id="projets" className="mb-[400px]">
      <h1 className="text-center text-gray-700 dark:text-white font-bold mb-8 text-2xl">
        Mes projets perso/pro
      </h1>
      <div className="flex flex-row justify-center items-center gap-3 mb-4">
        <button
          className="p-3 bg-[#5263FF] dark:bg-[#242F42] text-center rounded-md text-white"
          onClick={() => filterProjects(true)}
        >
          PERSO
        </button>
        <button
          className="p-3 bg-[#5263FF] dark:bg-[#242F42] text-center rounded-md text-white"
          onClick={() => filterProjects(false)}
        >
          PRO
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-stretch mx-[10%]">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-[#F6F8FF] dark:bg-[#242F42] rounded-md p-4"
          >
            <div className="rounded-lg">
              <Image
                src={project.imageUrl}
                alt={`projet ${project.title}`}
                className="rounded-lg h-[180px] "
                width={"99999"}
                height={"9999"}
              />
            </div>
            <h2 className="text-gray-700 dark:text-white font-bold text-xl mt-2">
              {project.title}
            </h2>
            <button
              onClick={() => setOpenProjectId(project.id)}
              className=" text-2xl font-medium mt-2 bg-[#5263FF] px-4 rounded-lg text-white"
            >
              +
            </button>
            <Dialog
              open={openProjectId === project.id}
              onClose={() => setOpenProjectId(null)}
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
                    {project.title}
                  </DialogTitle>
                  <p>{project.description}</p>
                  {project.frameworks && (
                    <>
                      <span className="font-bold">Framework</span>
                      <ul className="list-disc">
                        {project.frameworks.map((framework, index) => (
                          <li key={index}>{framework}</li>
                        ))}
                      </ul>
                    </>
                  )}
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <Link href={project.githubLink} target="blank">
                        <button className="bg-[#5263FF] duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold">
                          Voir le GitHub
                        </button>
                      </Link>
                    )}
                    {project.websiteLink && (
                      <Link href={project.websiteLink} target="blank">
                        <button className="bg-[#5263FF] duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold">
                          Voir le site web
                        </button>
                      </Link>
                    )}
                    <button
                      className="bg-red-400 duration-300 hover:scale-110 p-2 px-3 rounded-full text-white font-bold"
                      onClick={() => setOpenProjectId(null)}
                    >
                      Fermer
                    </button>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
