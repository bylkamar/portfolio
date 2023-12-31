import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="p-2 md:p-4 mt-auto">
      {/* Contenu du footer */}
      <div className="flex justify-center">
        <div className="mr-2">
          <Link href="https://github.com/bylkamar">
            <FaGithub size={25} />
          </Link>
        </div>
        <div>
          <p className="text-center">
            © 2023 Portfolio AIT CHIKHOUNE Amer. All rights reserved. ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
