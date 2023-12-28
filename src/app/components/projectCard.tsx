import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
interface ProjectCardProps {
  image: string;
  title: string;
  link: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  link,
  description,
}) => {
  return (
    <div className="border-2 border-gray-900 bg-gray-900 text-gray-300 dark:border-[#84828f] dark:bg-[#84828f] p-2 rounded-md hover:scale-110 transition duration-500">
      <div className="relative mb-2 pb-1/2 lg:pb-64">
        <Image
          src={image}
          className="rounded-lg absolute object-cover w-full h-full lg:h-64 "
          alt={description}
          fill={true}
        />{" "}
      </div>
      <h3 className="font-semibold text-[#2c3d55]">{title}</h3>
      <p>{description}</p>
      <div className="flex items-start align-start justify-start">
        <span className="mr-2">
          <FaGithub size={25} />
        </span>
        <a href={link} target="_blank" className="">
          github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
