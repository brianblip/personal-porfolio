import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const ProjectItem = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  description,
}) => {
  return (
    <div className="flex flex-col rounded-md shadow-lg shadow-gray-300">
      <Image className="rounded-md" src={backgroundImg} alt="/" />

      <div className="flex-1 pt-6 pl-4 pr-4">
        <p className="text-3xl tracking-wide ">{title}</p>
        <p className="pt-1 text-lg">{tech}</p>
        <p className="pt-2 pr-4 text-justify ">{description}</p>
      </div>
      <div className="flex justify-start mt-4 mb-4 ml-4">
        <Link
          className={buttonVariants({ variant: "default" })}
          href={projectUrl}
        >
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
