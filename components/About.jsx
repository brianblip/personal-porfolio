import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
const About = () => {
  return (
    <div id="about" className="flex items-center w-full py-10 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2">
        <div className="col-span-2">
          <p className="py-4 text-4xl tracking-widest uppercase text-cyan-600">
            About Me
          </p>
          <p className="py-2 text-gray-600 ">
            My journey in web development began in 2020 when I started working
            on an e-commerce website as part of a school project. This project
            introduced me to HTML and CSS, and I quickly became fascinated with
            the creative possibilities of web development. Since then, I&apos;
            ve been eager to learn more about web development and have been
            expanding my skill set.
          </p>
          <p className="py-2 text-gray-600 ">
            I started learning JavaScript, which opened up a world of
            possibilities for creating dynamic and interactive websites. I also
            have experience working with popular front-end frameworks such as
            React and Angular, which have allowed me to build complex web
            applications with ease.
          </p>
          <div className="py-2">
            <Link
              href="/assets/BrianPrado.pdf"
              className={buttonVariants({ variant: "" })}
            >
              <p>Resume</p>
            </Link>
          </div>
        </div>
        <div className="shadow-xl shadow-gray-400 rounded-xl flex justify-between items-center w-[330px] h-[360px] m-auto p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/about-profile.png"
            alt="/"
            width="300"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
