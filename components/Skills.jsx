import React from "react";
import Image from "next/image";
const Skills = () => {
  return (
    <div id="skills" className="py-24 lg:h-screen md:ml-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full  px-2 ">
        <p className="text-3xl tracking-widest uppercase text-cyan-600">
          Skills
        </p>
        <h2 className="py-4 text-xl">What I can do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg uppercase">html</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg uppercase">css</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg uppercase">javascript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/node.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg uppercase">node</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg uppercase">react</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/nextjs.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg uppercase">nextjs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-lg uppercase">tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <Image
                  src="/assets/skills/firebase.png"
                  width="64"
                  height="64"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3 className="text-lg uppercase">firebase</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
