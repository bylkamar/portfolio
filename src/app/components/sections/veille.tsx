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

const categoryColors: { [key: string]: string } = {
  devmobile: "#FAA275", // bleu clair
  devops: "#10B981", // vert
  devweb: "#f3ca40", // indigo
};

const projectsData = [
  {
    id: 16,
    title: "Tendances du développement mobile en 2025",
    description:
      "Le développement mobile en 2025 est marqué par l'essor des technologies hybrides comme Flutter et React Native, l'intégration de l'IA pour des expériences utilisateur personnalisées, et l'utilisation de la 5G pour des applications en temps réel. La sécurité des applications est également renforcée avec des authentifications biométriques et des API sécurisées.",
    imageUrl: sio,
    source:
      "https://devtitechnologie.com/blog/les-8-tendances-du-developpement-d-application-mobile-en-2025",
    sourceName: "DevTi Technologie",
    category: "devmobile",
    pro: false,
  },
  {
    id: 17,
    title:
      "L'avenir du DevOps : tendances clés et meilleures pratiques en 2025",
    description:
      "En 2025, le DevOps évolue avec l'intégration de l'IA et du machine learning pour automatiser les workflows, l'adoption de GitOps et de l'infrastructure as code pour une gestion efficace des déploiements, et la mise en œuvre de DevSecOps pour intégrer la sécurité dès les premières étapes du développement.",
    imageUrl: sio,
    source:
      "https://devops.com/the-future-of-devops-key-trends-innovations-and-best-practices-in-2025/",
    sourceName: "DevOps.com",
    category: "devops",
    pro: false,
  },
  {
    id: 18,
    title: "Développement web en 2025 : tendances et innovations",
    description:
      "Le développement web en 2025 est influencé par l'intégration de l'IA pour personnaliser l'expérience utilisateur, l'adoption du Web3 pour des applications décentralisées, et l'utilisation de frameworks modernes comme React, Angular et Vue.js. L'accessibilité et la cybersécurité restent des priorités majeures.",
    imageUrl: sio,
    source:
      "https://ipanema-consulting.com/actualites/marketing/tendances-et-innovations-du-developpement-web-en-2025/",
    sourceName: "Ipanema Consulting",
    category: "devweb",
    pro: false,
  },
  {
    id: 19,
    title: "Les 8 tendances du développement d'application mobile en 2025",
    description:
      "En 2025, le développement d'applications mobiles est marqué par l'intégration de l'IA pour des expériences utilisateur personnalisées, l'essor des applications à la demande, l'utilisation de la 5G pour des performances accrues, et l'adoption de technologies comme Flutter et React Native pour un développement multiplateforme efficace.",
    imageUrl: sio,
    source:
      "https://www.codeur.com/blog/tendances-developpement-application-mobile/",
    sourceName: "Codeur.com",
    category: "devmobile",
    pro: false,
  },
  {
    id: 20,
    title: "Les tendances DevOps à suivre en 2025",
    description:
      "Les tendances DevOps en 2025 incluent l'intégration de l'IA pour automatiser les processus, l'adoption de DevSecOps pour intégrer la sécurité dès le début du cycle de développement, et l'utilisation de GitOps pour une gestion efficace des infrastructures. L'observabilité cloud-native et les déploiements multi-cloud deviennent également des pratiques courantes.",
    imageUrl: sio,
    source:
      "https://www.h2kinfosys.com/blog/devops-trends-and-innovations-explained-in-2025/",
    sourceName: "H2K Infosys",
    category: "devops",
    pro: false,
  },
  {
    id: 21,
    title: "Les 11 tendances du développement web en 2025 avec l'IA",
    description:
      "En 2025, le développement web est transformé par l'IA, avec des processus de développement automatisés, l'essor des plateformes low-code et no-code, et l'utilisation de l'IA pour améliorer l'expérience utilisateur. L'accessibilité numérique et la cybersécurité restent des priorités, avec des interfaces plus intuitives et inclusives.",
    imageUrl: sio,
    source: "https://esokia.com/fr/blog/developpement-web-en-2025-ia",
    sourceName: "Esokia",
    category: "devweb",
    pro: false,
  },
];

const Veille: React.FC = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const filterProjects = (category: string) => {
    const filtered = projectsData.filter(
      (project) => project.category === category
    );
    setFilteredProjects(filtered);
  };

  return (
    <section id="projets" className="mb-[200px]">
      <h1 className="text-center text-gray-700 dark:text-white font-bold mb-8 text-2xl">
        Veille informationnelle
      </h1>
      <div className="flex flex-row justify-center items-center gap-3 mb-4">
        <button
          className="p-3 bg-[#5263FF] dark:bg-[#242F42] text-center rounded-md text-white"
          onClick={() => filterProjects("devops")}
        >
          DevOps
        </button>
        <button
          className="p-3 bg-[#5263FF] dark:bg-[#242F42] text-center rounded-md text-white"
          onClick={() => filterProjects("devmobile")}
        >
          DevMobile
        </button>
        <button
          className="p-3 bg-[#5263FF] dark:bg-[#242F42] text-center rounded-md text-white"
          onClick={() => filterProjects("devweb")}
        >
          DevWeb
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
                width={9999}
                height={9999}
              />
            </div>
            {project.category && (
              <span
                className="inline-block text-white text-sm px-2 py-1 rounded-full mt-2"
                style={{
                  backgroundColor:
                    categoryColors[project.category] || "#6B7280",
                }} // gris par défaut
              >
                {project.category}
              </span>
            )}
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

                  {/* {project.frameworks && (
                    <>
                      <span className="font-bold">Framework</span>
                      <ul className="list-disc">
                        {project.frameworks.map((framework, index) => (
                          <li key={index}>{framework}</li>
                        ))}
                      </ul>
                    </>
                  )} */}
                  {project.source && (
                    <div className="mt-2">
                      <span className="font-bold">Source :</span>{" "}
                      <Link
                        href={project.source}
                        target="_blank"
                        className="text-blue-600 underline"
                      >
                        {project.sourceName || project.source}
                      </Link>
                    </div>
                  )}
                  <div className="flex gap-4">
                    {project.source && (
                      <Link href={project.source} target="blank">
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

export default Veille;
