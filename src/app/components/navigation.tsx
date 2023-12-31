import { useState } from "react";
import Link from "next/link";
import { FaBars, FaBook, FaHome, FaRegWindowMinimize } from "react-icons/fa";
import { PiFolder } from "react-icons/pi";
import ButtonSwitchTheme from "./themes";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="w-full top-0 left-0 right-0 z-10 md:border-b-2 fixed md:static bg-white dark:bg-transparent">
        <div className="justify-between px-4  lg:max-w-7xl md:items-center md:flex">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link href="/">
                <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  AIT CHIKHOUNE Amer
                </h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={toggleMenu}
                >
                  {isOpen ? (
                    <FaRegWindowMinimize className="focus:border-none active:border-none" />
                  ) : (
                    <FaBars className="focus:border-none active:border-none" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center md:block md:pb-0 md:mt-0 ${
                isOpen ? "md:p-0 block" : "hidden"
              }`}
            >
              <ul className="font-medium flex flex-col p-4 bg-black dark:bg-gray-200 md:bg-transparent dark:md:bg-transparent md:p-0 mt-4 border border-gray-100 rounded-lg bg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:border-gray-700">
                <li>
                  <Link
                    href="/"
                    className="flex py-2 rounded-md p-0 text-gray-200 md:text-gray-900 dark:text-gray-900 dark:md:text-gray-200 hover:md:text-blue-700 hover:bg-gray-700 md:hover:bg-transparent dark:md:hover:bg-transparent dark:hover:bg-gray-100 md:border-0"
                  >
                    {" "}
                    <FaHome className="mx-1" size={20} />
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projets"
                    aria-current="page"
                    className="flex py-2 rounded-md p-0 text-gray-200 md:text-gray-900 dark:text-gray-900 dark:md:text-gray-200 hover:md:text-blue-700 hover:bg-gray-700 md:hover:bg-transparent dark:md:hover:bg-transparent dark:hover:bg-gray-100 md:border-0"
                  >
                    {" "}
                    <PiFolder className="mx-1" size={20} />
                    Projets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parcours"
                    className="flex py-2 rounded-md p-0 text-gray-200 md:text-gray-900 dark:text-gray-900 dark:md:text-gray-200 hover:md:text-blue-700 hover:bg-gray-700 md:hover:bg-transparent dark:md:hover:bg-transparent dark:hover:bg-gray-100 md:border-0"
                  >
                    {" "}
                    <FaBook className="mx-1" size={20} />
                    Parcours
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex py-2 rounded-md p-0 text-gray-200 md:text-gray-900 dark:text-gray-900 dark:md:text-gray-200 hover:md:text-blue-700 hover:bg-gray-700 md:hover:bg-transparent dark:md:hover:bg-transparent dark:hover:bg-gray-100 md:border-0"
                  >
                    <PiFolder className="mx-1" size={20} />
                    Contact
                  </a>
                </li>
                <li className="flex py-2 rounded-md p-0 text-gray-200 md:text-gray-900 dark:text-gray-900 dark:md:text-gray-200 hover:md:text-blue-700 hover:bg-gray-700 md:hover:bg-transparent dark:md:hover:bg-transparent dark:hover:bg-gray-100 md:border-0">
                  <ButtonSwitchTheme />
                  <span className="mx-1">Switch theme</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="border-gray-200 border-b-2">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-red-500">
              AIT CHIKHOUNE Amer
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
      {/* Show when the screen is larger */}
      {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className="flex align-center py-2 px-3 dark:text-gray-900 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:dark:text-gray-100 "
                >
                  {" "}
                  <FaHome className="mx-1" size={20} />
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/projets"
                  aria-current="page"
                  className="flex align-center py-2 px-3 dark:text-gray-100  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:dark:text-gray-100 md:dark:text-blue-500"
                >
                  {" "}
                  <PiFolder className="mx-1" size={20} />
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/parcours"
                  className="flex align-center py-2 px-3 dark:text-gray-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:dark:text-gray-100 "
                >
                  {" "}
                  <PiFolder className="mx-1" size={20} />
                  Parcours
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:dark:text-gray-100 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:dark:text-gray-100 md:dark:hover:bg-transparent"
                >
                  <PiFolder className="mx-1" size={20} />
                  CV
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:dark:text-gray-100 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:dark:text-gray-100 md:dark:hover:bg-transparent"
                >
                  <PiFolder className="mx-1" size={20} />
                  Contact
                </a>
              </li>
              <li>
                <ButtonSwitchTheme />
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Navigation;
