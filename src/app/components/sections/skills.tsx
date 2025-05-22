"use client";

import { Transition, TransitionChild } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { FaCode, FaJava, FaWordpress } from "react-icons/fa";
import {
  RiNextjsFill,
  RiJavascriptFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

const BaseTransition = {
  enter: "transition ease-out duration-700",
  enterFrom: "transform -translate-y-full opacity-0",
  enterTo: "transform translate-y-0 opacity-100",
  leave: "transition ease-in duration-500",
  leaveFrom: "transform translate-y-0 opacity-100",
  leaveTo: "transform -translate-y-full opacity-0",
};

const BaseRotateTransition = {
  enter: "transform transition duration-[1200ms]",
  enterFrom: "opacity-0 rotate-[-120deg] scale-50",
  enterTo: "opacity-100 rotate-0 scale-100",
  leave: "transform duration-700 transition ease-in-out",
  leaveFrom: "opacity-100 rotate-0 scale-100",
  leaveTo: "opacity-0 scale-95",
};

const Skill: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section id="competences" className="mb-[400px]">
      <h1
        ref={ref}
        className="text-gray-700 font-bold text-center text-2xl mb-8 dark:text-white"
      >
        Mes compétences
      </h1>
      <div className="mx-12 md:mx-64 lg:mx-[25%]">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#F6F8FF] dark:bg-[#242F42] dark:text-white rounded-md p-4">
            <h2 className="text-gray-700 dark:text-white font-bold text-xl mb-3">
              Développement Web
            </h2>
            <div className="grid grid-cols-2">
              <Transition appear show={isVisible}>
                {[
                  {
                    icon: <RiNextjsFill className="text-[#5263FF]" size={30} />,
                    title: "Next.js",
                    level: "En apprentissage",
                  },
                  {
                    icon: <SiPhp className="text-[#5263FF]" size={30} />,
                    title: "PHP",
                    level: "Bases solides",
                  },
                  {
                    icon: <PiFileSql className="text-[#5263FF]" size={30} />,
                    title: "SQL",
                    level: "Bases solides",
                  },
                  {
                    icon: (
                      <RiJavascriptFill className="text-[#5263FF]" size={30} />
                    ),
                    title: "JavaScript",
                    level: "Bases solides",
                  },
                  {
                    icon: (
                      <RiTailwindCssFill className="text-[#5263FF]" size={30} />
                    ),
                    title: "Tailwind",
                    level: "Bases solides",
                  },
                  {
                    icon: <FaWordpress className="text-[#5263FF]" size={30} />,
                    title: "WordPress",
                    level: "Bases solides",
                  },
                  {
                    icon: <FaJava className="text-[#5263FF]" size={30} />,
                    title: "Java",
                    level: "Bases solides",
                  },
                  {
                    icon: <FaCode className="text-[#5263FF]" size={30} />,
                    title: "Flutter/Dart",
                    level: "Bases solides",
                  },
                ].map(({ icon, title, level }, index) => (
                  <div
                    key={index}
                    className="text-gray-700 flex flex-col items-center mt-2"
                  >
                    <TransitionChild {...BaseRotateTransition}>
                      <div className="transform">{icon}</div>
                    </TransitionChild>
                    <TransitionChild {...BaseTransition}>
                      <div className="flex flex-col items-center">
                        <span className="font-bold dark:text-white">
                          {title}
                        </span>
                        <span className="font-medium dark:text-gray-400">
                          {level}
                        </span>
                      </div>
                    </TransitionChild>
                  </div>
                ))}
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
