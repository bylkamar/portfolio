"use client";

import { Transition, TransitionChild } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";
import { FaWordpress } from "react-icons/fa";
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
  // Permet de voir si l'élément est visible
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust this value to control when the element is considered visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
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
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
          <div className="bg-[#F6F8FF] dark:bg-[#242F42] dark:text-white rounded-md p-4">
            <h2 className="text-gray-700 dark:text-white font-bold text-xl mb-3">
              Développement Web
            </h2>
            <div className="grid grid-cols-2">
              <Transition show={isVisible}>
                <div className="text-gray-700 flex flex-col items-center mt-2">
                  <TransitionChild {...BaseRotateTransition}>
                    <div className="transform">
                      <RiNextjsFill className="text-[#5263FF]" size={"30"} />
                    </div>
                  </TransitionChild>
                  <TransitionChild appear={true} {...BaseTransition}>
                    <div className="flex flex-col items-center">
                      <span className="font-bold dark:text-white">Next.js</span>
                      <span className="font-medium dark:text-gray-400">
                        Débutant
                      </span>
                    </div>
                  </TransitionChild>
                </div>

                <div className="text-gray-700 flex flex-col items-center mt-2">
                  <TransitionChild {...BaseRotateTransition}>
                    <div className="transform">
                      <SiPhp className="text-[#5263FF]" size={"30"} />
                    </div>
                  </TransitionChild>
                  <TransitionChild appear={true} {...BaseTransition}>
                    <div className="flex flex-col items-center">
                      <span className="font-bold dark:text-white">php</span>
                      <span className="font-medium dark:text-gray-400">
                        Débutant
                      </span>
                    </div>
                  </TransitionChild>
                </div>

                <div className="text-gray-700 flex flex-col items-center mt-2">
                  <TransitionChild {...BaseRotateTransition}>
                    <div className="transform">
                      <PiFileSql className="text-[#5263FF]" size={"30"} />
                    </div>
                  </TransitionChild>
                  <TransitionChild appear={true} {...BaseTransition}>
                    <div className="flex flex-col items-center">
                      <span className="font-bold dark:text-white">SQL</span>
                      <span className="font-medium dark:text-gray-400">
                        Débutant
                      </span>
                    </div>
                  </TransitionChild>
                </div>

                <div className="text-gray-700 flex flex-col items-center mt-2">
                  <TransitionChild {...BaseRotateTransition}>
                    <div className="transform">
                      <RiJavascriptFill
                        className="text-[#5263FF]"
                        size={"30"}
                      />
                    </div>
                  </TransitionChild>
                  <TransitionChild appear={true} {...BaseTransition}>
                    <div className="flex flex-col items-center">
                      <span className="font-bold dark:text-white">
                        JavaScript
                      </span>
                      <span className="font-medium dark:text-gray-400">
                        Intermédiaire
                      </span>
                    </div>
                  </TransitionChild>
                </div>

                <div className="text-gray-700 flex flex-col items-center mt-2">
                  <TransitionChild {...BaseRotateTransition}>
                    <div className="transform">
                      <RiTailwindCssFill
                        className="text-[#5263FF]"
                        size={"30"}
                      />
                    </div>
                  </TransitionChild>
                  <TransitionChild appear={true} {...BaseTransition}>
                    <div className="flex flex-col items-center">
                      <span className="font-bold dark:text-white">
                        Tailwind
                      </span>
                      <span className="font-medium dark:text-gray-400">
                        Débutant
                      </span>
                    </div>
                  </TransitionChild>
                </div>

                <div className="text-gray-700 flex flex-col items-center mt-2">
                  <TransitionChild {...BaseRotateTransition}>
                    <div className="transform">
                      <FaWordpress className="text-[#5263FF]" size={"30"} />
                    </div>
                  </TransitionChild>
                  <TransitionChild appear={true} {...BaseTransition}>
                    <div className="flex flex-col items-center">
                      <span className="font-bold dark:text-white">
                        WordPress
                      </span>
                      <span className="font-medium dark:text-gray-400">
                        Débutant
                      </span>
                    </div>
                  </TransitionChild>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
