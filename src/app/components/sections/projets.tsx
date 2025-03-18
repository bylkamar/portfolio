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
import cocciflore from "../../../../public/image/cocciflore.jpg";
// Définitions de tout les projets pour les affichers grâce à la fonction map
const projectsData = [
  {
    id: 2,
    title: "h-passion.fr",
    description: `Site vitrine Wordpress comprenant l'affichage de multiples offres (henné,peinture sur toile,certificat d'amitié...) pour une cliente`,
    imageUrl: hpassion,
    websiteLink: "https://h-passion.fr/",
    pro: true,
  },
  {
    id: 3,
    title: "[BTS SIO] - Agora",
    description: `Agora est une application de gestion de jeux et de créations de tournois, réalisée en cours de formation de BTS SIO. \nLe compte rendu est indisponible du aux données personnelles.`,
    imageUrl: sio,
    frameworks: ["HTML", "CSS", "PHP", "SYMFONY", "SQL", "TWIG"],
    websiteLink:
      "https://docs.google.com/document/d/1wd6OWrRK3juzj0C2je9J3iiV0FUcJBu0Cy3bcM_UbhI/edit?tab=t.0",
    pro: false,
  },
  {
    id: 4,
    title: "[BTS SIO] - EMAYA REST API",
    description: `Projet réalisé en cours de formation de BTS SIO, on devait crée une API pour notre application e-maya`,
    imageUrl: sio,
    frameworks: ["PHP", "SYMFONY"],
    websiteLink:
      "https://docs.google.com/document/d/1wbRiUR1g2UsDcnQpt4pyxGBSOqf7BxbvdzjSvFdYCCc/edit?tab=t.0",
    pro: false,
  },
  {
    id: 5,
    title: "[BTS SIO] - Projet 1",
    description: `Projet réalisé en cours de formation de BTS SIO, on devait réferencer la configuration matériel de notre poste de travail et crée une session à notre nom.`,
    imageUrl: sio,
    websiteLink:
      "https://docs.google.com/document/d/1qGSY-ZSfn4mFzY8d5jqp5mVf4Y996ko5/edit",
    pro: false,
  },
  {
    id: 6,
    title: "[BTS SIO] - Projet Emaya",
    description: `Projet réalisé en cours de formation de BTS SIO, e-maya est une application mobile qui permet d'acheter des fruits, visualiser le catalogue de la ferme.`,
    imageUrl: sio,
    websiteLink:
      "https://docs.google.com/document/d/1qBM7tnnyqQmDJRbs9ntX47tCQ6OC3XXn/edit",
    pro: false,
  },
  {
    id: 7,
    title: "Projet SOINSDOM",
    description: `Projet réalisé en cours de formation de BTS SIO, c'est un projet réalisé en groupe de 4 personnes, on devait chacun réaliser une classe en DART puis effectuer des tests unitaires.`,
    imageUrl: sio,
    websiteLink:
      "https://docs.google.com/document/d/1QfAwsC0FSsORwaPZi_jm5X0ywXhL9LHTVqN-8F5fbPA/edit?tab=t.0",
    frameworks: ["NextJS", "Tailwind CSS"],
    githubLink: "https://github.com/bylkamar/portfolio",
    pro: false,
  },
  {
    id: 8,
    title: "Projet Bootstrap",
    description: `Projet réalisé en cours de formation de BTS SIO, le but est de délpoyer un site web concu avec une template sur le web (cr non dispo)`,
    imageUrl: sio,
    websiteLink: "https://bylkamar.github.io/bootstrap-td/",
    frameworks: ["Bootstrap", "HTML", "CSS"],
    githubLink: "https://github.com/bylkamar/bootstrap-td",
    pro: false,
  },
  {
    id: 9,
    title: "Projet 2",
    description: `Projet réalisé en cours de formation de BTS SIO, le but est d'installer une VM sous Windows server avec hyper-v.`,
    imageUrl: sio,
    websiteLink:
      "https://docs.google.com/document/d/14mLJqwGXtbe0BXNLvuRlSlVdS8teXEav/edit",
    pro: false,
  },
  {
    id: 10,
    title: "Projet WordPress",
    description: `Projet réalisé en cours de formation de BTS SIO, le but du projet est de crée un portfolio avec WordPress.`,
    imageUrl: sio,
    pro: false,
  },
  {
    id: 11,
    title: "Projet Kairos (site)",
    description: `Projet réalisé en milieu professionnel, j'ai réalisé un site web pour la gestion des congées`,
    frameworks: ["PHP", "HTML", "CSS", "JS"],
    imageUrl: sio,
    pro: true,
  },
  {
    id: 14,
    title: "Projet WYP (site)",
    description: `Projet réalisé en milieu professionnel, j'ai réalisé un site web pour l'association WYP`,
    frameworks: ["NextJS"],
    imageUrl: sio,
    websiteLink:
      "https://docs.google.com/document/d/1abW5z_PttDeWToG5Lg4VIcAw5zvJLCo0/edit",
    pro: true,
  },
  {
    id: 12,
    title: "[BTS SIO] - Projet IA ",
    description: `Ce projet a été réalisé en cours de formation de BTS SIO, On devait réaliser une applciation/jeu uniquement à l'aide de l'IA.`,
    imageUrl: cocciflore,
    websiteLink: "https://bylkamar.github.io/cocciflore/",
    frameworks: ["HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/bylkamar/cocciflore/",
    pro: false,
  },
  {
    id: 13,
    title: "Portfolio (NextJS)",
    description: `Portfolio réalisé avec NextJS et Tailwind CSS, il est responsive et il y a un dark mode.`,
    imageUrl: sio,
    websiteLink: "https://aitchikhoune-amer.fr",
    frameworks: ["NextJS", "Tailwind CSS"],
    githubLink: "https://github.com/bylkamar/portfolio",
    pro: false,
  },
];
/**
 * Composant Projects qui affiche une liste de projets et permet de filtrer entre projets personnels et professionnels.
 *
 * @composant
 * @returns {JSX.Element} Le composant rendu.
 *
 * @exemple
 * <Projects />
 *
 * @remarques
 * Ce composant utilise les hooks React pour gérer l'état et le filtrage des projets. Il inclut également une boîte de dialogue pour afficher les détails des projets.
 *
 * @fonction
 * @nom Projects
 *
 * @description
 * Le composant Projects rend une section contenant des boutons pour filtrer les projets par type (personnel ou professionnel) et une grille de cartes de projets. Chaque carte de projet inclut une image, un titre et un bouton pour ouvrir une boîte de dialogue avec plus de détails sur le projet.
 *
 * @typedef {Object} Project
 * @property {number} id - L'identifiant unique du projet.
 * @property {string} title - Le titre du projet.
 * @property {string} imageUrl - L'URL de l'image du projet.
 * @property {string} description - Une brève description du projet.
 * @property {boolean} pro - Indique si le projet est professionnel.
 * @property {string[]} [frameworks] - Une liste optionnelle de frameworks utilisés dans le projet.
 * @property {string} [githubLink] - Une URL optionnelle vers le dépôt GitHub du projet.
 * @property {string} [websiteLink] - Une URL optionnelle vers le site web du projet.
 *
 * @état {Project[]} filteredProjects - La liste des projets filtrés par type.
 * @état {number | null} openProjectId - L'ID de la boîte de dialogue du projet actuellement ouverte, ou null si aucune boîte de dialogue n'est ouverte.
 *
 * @méthode filterProjects
 * @param {boolean} pro - Le type de projets à filtrer (true pour professionnel, false pour personnel).
 * @description Filtre les projets en fonction de leur type et met à jour l'état.
 *
 * @méthode setOpenProjectId
 * @param {number | null} id - L'ID du projet à ouvrir dans la boîte de dialogue, ou null pour fermer la boîte de dialogue.
 * @description Définit l'ID de la boîte de dialogue du projet actuellement ouverte.
 */
const Projects: React.FC = () => {
  // Définition des états
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  // Fonction pour filtrer les projets en fonction de leur type (perso/pro)
  const filterProjects = (pro: boolean) => {
    const filtered = projectsData.filter((project) => project.pro === pro);
    setFilteredProjects(filtered);
  };

  return (
    <section id="projets" className="mb-[200px]">
      <h1 className="text-center text-gray-700 dark:text-white font-bold mb-8 text-2xl">
        Mes projets perso/pro
      </h1>
      <div className="flex flex-row justify-center items-center gap-3 mb-4">
        <button
          className="p-3 bg-[#5263FF] dark:bg-[#242F42] text-center rounded-md text-white"
          onClick={() => filterProjects(false)}
        >
          PERSO
        </button>
        <button
          className="p-3 bg-[#5263FF] dark:bg-[#242F42] text-center rounded-md text-white"
          onClick={() => filterProjects(true)}
        >
          PRO
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-stretch mx-[20%]">
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
      <div className="mx-[15%] mt-8">
        <h2 className="text-center text-gray-700 dark:text-white font-bold mb-8 text-2xl">
          Tableau E5
        </h2>
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkfp9rJk70lGoamyPpN0pOi2oY65rSop_KvYpuKeffhojJkMT83SVH3TitBUvozw/pubhtml?gid=858567107&amp;single=true&amp;widget=true&amp;headers=false"
          className="w-full h-[500px] rounded-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Projects;
