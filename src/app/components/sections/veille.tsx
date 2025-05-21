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
import sio from "../../../../public/image/sio.webp";

const categoryColors: { [key: string]: string } = {
  devmobile: "#FAA275", // bleu clair
  devops: "#10B981", // vert
  devweb: "#f3ca40", // indigo
};

const projectsData = [
  // 🔵 DEVMOBILE
  {
    id: 101,
    title: "Les 8 tendances du développement d'application mobile en 2025",
    description:
      "Cet article présente les grandes évolutions prévues dans le développement mobile : montée en puissance des applications hybrides (Flutter, React Native), intégration de l’IA pour l'expérience utilisateur, développement renforcé grâce à la 5G, et respect des nouvelles normes d’accessibilité et de sécurité. Il met en lumière la nécessité d’un développement plus agile, plus sécurisé et plus responsable.",
    imageUrl: sio,
    source:
      "https://devtitechnologie.com/blog/les-8-tendances-du-developpement-d-application-mobile-en-2025",
    sourceName: "DevTi Technologie",
    category: "devmobile",
    pro: false,
  },
  {
    id: 102,
    title: "Le marché des applications mobiles : une année record en 2025",
    description:
      "Avec plus de 250 milliards de téléchargements prévus, les applications mobiles connaissent une croissance sans précédent. L’article analyse les raisons de cette explosion : augmentation du temps passé sur mobile, généralisation de l’usage des apps dans les services publics, la santé, l’éducation et la consommation. Il aborde aussi les enjeux pour les développeurs et les entreprises en termes de performance, d’UX et de rentabilité.",
    imageUrl: sio,
    source:
      "https://apptree.fr/le-marche-des-applications-mobiles-2025-une-annee-record-avec-250-milliards-de-telechargements-prevus/",
    sourceName: "Apptree",
    category: "devmobile",
    pro: false,
  },
  {
    id: 103,
    title: "Applications les plus téléchargées en 2025",
    description:
      "L’article revient sur les tendances de consommation mobile en 2025 : Instagram, TikTok, WhatsApp restent leaders, mais on observe l’émergence d’apps intégrant de l’intelligence artificielle générative. Le mobile devient aussi une plateforme de plus en plus tournée vers la productivité personnelle et l’assistance intelligente, transformant les usages traditionnels.",
    imageUrl: sio,
    source:
      "https://www.blogdumoderateur.com/mobile-2025-applications-plus-telechargees/",
    sourceName: "BDM",
    category: "devmobile",
    pro: false,
  },

  // 🟢 DEVOPS
  {
    id: 104,
    title: "DevOps en 2025 : un rôle transformé par l'IA et le cloud",
    description:
      "Cet article décrit comment l’automatisation, l’intelligence artificielle et l’utilisation massive du cloud modifient les pratiques DevOps. Il met en avant des outils comme GitOps, des pratiques comme le DevSecOps, et les nouveaux profils recherchés dans le domaine. Il insiste sur la nécessité d’une collaboration renforcée entre développeurs et ops pour sécuriser, déployer et maintenir plus vite et mieux.",
    imageUrl: sio,
    source:
      "https://www.free-work.com/fr/tech-it/blog/actualites-informatiques/le-devops-en-2025-comment-ce-role-evolue-t-il",
    sourceName: "Free-Work",
    category: "devops",
    pro: false,
  },
  {
    id: 105,
    title: "Les compétences DevOps indispensables en 2025",
    description:
      "Les profils DevOps doivent en 2025 maîtriser des domaines variés : conteneurisation avec Docker/Kubernetes, automatisation des tests, sécurité (DevSecOps), intégration et déploiement continu (CI/CD), et surtout être capable de collaborer avec toutes les équipes projet. Le tout avec une bonne culture de la supervision et de l’observabilité.",
    imageUrl: sio,
    source:
      "https://www.free-work.com/fr/tech-it/blog/actualites-informatiques/les-competences-devops-indispensables-en-2025",
    sourceName: "Free-Work",
    category: "devops",
    pro: false,
  },
  {
    id: 106,
    title: "Les dernières tendances DevOps et les statistiques essentielles",
    description:
      "En analysant les pratiques les plus répandues chez les entreprises en 2025, l’article montre l’importance de l’observabilité, de l’infrastructure as code, de la conteneurisation et de l’IA dans les pratiques DevOps. Il intègre aussi des statistiques clés sur les taux d’adoption de GitOps, le coût moyen d’une défaillance système, et les bénéfices obtenus avec les outils d’automatisation avancés.",
    imageUrl: sio,
    source: "https://geekflare.com/fr/devops-latest-trends/",
    sourceName: "Geekflare",
    category: "devops",
    pro: false,
  },

  // 🟣 DEVWEB
  {
    id: 107,
    title: "Développement Web en 2025 : tendances et innovation",
    description:
      "L’article met en avant les évolutions du développement web, notamment l’intégration de l’IA dans les interfaces, la généralisation du Web3, l’usage des microservices, la sécurité by design, et les exigences en accessibilité. Il insiste aussi sur l’importance de créer des expériences utilisateurs fluides sur tous types d’écrans.",
    imageUrl: sio,
    source:
      "https://ipanema-consulting.com/actualites/marketing/tendances-et-innovations-du-developpement-web-en-2025/",
    sourceName: "Ipanema Consulting",
    category: "devweb",
    pro: false,
  },
  {
    id: 108,
    title: "Le marché du développement web : 8 chiffres pour 2025",
    description:
      "L’article expose les données clés du marché en 2025 : le mobile-first est adopté par 80 % des sites, 60 % utilisent React ou Angular, et les entreprises mettent l’accent sur les performances, la sécurité et l’éco-conception. Le web devient un levier économique central pour les entreprises numériques.",
    imageUrl: sio,
    source:
      "https://modelesdebusinessplan.com/blogs/infos/marche-developpement-chiffres",
    sourceName: "Modèles de Business Plan",
    category: "devweb",
    pro: false,
  },
  {
    id: 109,
    title: "Développeur Java : quels défis en 2025 ?",
    description:
      "L’article met en lumière les enjeux spécifiques aux développeurs Java, toujours très demandés en 2025 : adaptation aux évolutions des frameworks, à la montée en puissance des microservices, à la sécurisation des APIs, et à l’amélioration de l’expérience utilisateur côté front. Le profil du dev Java doit évoluer sans cesse.",
    imageUrl: sio,
    source:
      "https://carriere.itlinkgroupe.com/fr/blog/defis-developpeur-java-2025",
    sourceName: "ITLink",
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
