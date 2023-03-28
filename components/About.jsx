import React from "react";
import Image from "next/image";
const About = () => {
	return (
		<div id="about" className="w-full md:h-screen flex items-center py-10">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<h2 className="uppercase text-[25px] tracking-widest text-[#5651e5] py-4">
						About Me
					</h2>
					<p className=" py-2 text-gray-600">
						My journey in web development began in 2020 when I started working
						on an e-commerce website as part of a school project. This project
						introduced me to HTML and CSS, and I quickly became fascinated with
						the creative possibilities of web development. Since then, I&apos;
						ve been eager to learn more about web development and have been
						expanding my skill set.
					</p>
					<p className=" py-2 text-gray-600">
						I started learning JavaScript, which opened up a world of
						possibilities for creating dynamic and interactive websites. I also
						have experience working with popular front-end frameworks such as
						React and Angular, which have allowed me to build complex web
						applications with ease.
					</p>

					<p className="py-2 text-gray-600 underline cursor-pointer">
						Check out some of my projects.
					</p>
				</div>
				<div className="shadow-xl shadow-gray-400 rounded-xl flex justify-between items-center w-[330px] h-[360px] m-auto p-4 hover:scale-105 ease-in duration-300">
					<Image
						className="rounded-xl"
						src="/../public/assets/about-profile.png"
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
