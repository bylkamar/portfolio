"use client";
import React from "react";
import Navigation from "../components/navigation";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
export default function Page() {
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText("https://discord.gg/U8nj7mjmkG");
  };
  return (
    <div className="flex flex-col h-screen justify-between">
      <main className="mb-auto">
        <Navigation />
        <section className="mt-[120px]">
          <h1 className="text-2xl mx-8 mb-4 font-semibold">Réseaux sociaux</h1>
          <div className="container m-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href={"https://www.linkedin.com/in/amerac/"} target="_blank">
              <div className="border-2 border-[#0A66C2] bg-[#0A66C2] mx-6 rounded p-2">
                <div className="flex items-start align-start justify-start">
                  <div className="mr-2 text-gray-200">
                    <FaLinkedin size={25} />
                  </div>
                  <div>
                    <span className="text-gray-200 font-semibold">
                      Linkedin
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={"https://www.linkedin.com/in/amerac/"} target="_blank">
              <div className="border-2 border-[#E94436] bg-[#E94436] mx-6 rounded p-2">
                <div className="flex items-start align-start justify-start">
                  <div className="mr-2 text-gray-200">
                    <SiGmail size={25} />
                  </div>
                  <div>
                    <span className="text-gray-200 font-semibold">Gmail</span>
                  </div>
                </div>
              </div>
            </Link>

            <Link href={"https://github.com/bylkamar/"} target="_blank">
              <div className="border-2 border-[#F6F8FA] bg-[#F6F8FA] mx-6 rounded p-2">
                <div className="flex items-start align-start justify-start">
                  <div className="mr-2 dark:text-black">
                    <FaGithub size={25} />
                  </div>
                  <div>
                    <span className="dark:text-black font-semibold">
                      GitHub
                    </span>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href={"https://discord.gg/U8nj7mjmkG"}
              target="_blank"
              onClick={handleCopyToClipboard}
            >
              <div className="border-2 border-[#404EED] bg-[#404EED] mx-6 rounded p-2">
                <div className="flex items-start align-start justify-start">
                  <div className="mr-2 text-gray-200">
                    <FaDiscord size={25} />
                  </div>
                  <div>
                    <span className="text-gray-200 font-semibold">Discord</span>
                  </div>
                </div>
              </div>
            </Link>
            {/* <div className="border-2 border-cyan-400 bg-cyan-400 mx-6">
              Mail
            </div>
            <div className="border-2 border-cyan-400 bg-cyan-400 mx-6">
              GitHub
            </div>
            <div className="border-2 border-cyan-400 bg-cyan-400 mx-6">
              Discord
            </div>
            <div className="border-2 border-cyan-400 bg-cyan-400 mx-6">
              Telegram
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
