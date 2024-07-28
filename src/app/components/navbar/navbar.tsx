"use client";
import React from "react";
import { IoMoon, IoSunny } from "react-icons/io5";
import { useTheme } from "next-themes";
import logo from "../../../../public/image/logo.png";
import Image from "next/image";
const Navbar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 bg-[#E0E3FF] dark:bg-[#1F1F1F]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center">
          <Image src={logo} alt="Logo" width={30} height={30} />
          <div className="text-xl font-bold text-gray-700 dark:text-white ml-8">
            AIT CHIKHOUNE Amer
          </div>
        </div>
        <ul className="flex space-x-4">
          <li>
            <button onClick={() => switchTheme()}>
              {theme === "light" ? (
                <IoSunny size={24} className="text-gray-500" />
              ) : (
                <IoMoon size={24} className="text-white" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
