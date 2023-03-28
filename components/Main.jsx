import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

{/* main branch */}
const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className=" max-w-[1240] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="uppercase text-sm tracking-widest text-gray-600">
						LET&apos;S BUILD SOMETHING TOGETHER
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I&apos;m <span className="text-[#5651e5]">Brian</span>
					</h1>
					<h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I&apos;m a front-end web developer with a passion for creating
						visually appealing and intuitive websites. With expertise in HTML,
						CSS, JavaScript, and Nextjs. I&apos;m always looking for new
						opportunities to learn and grow.
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<FaLinkedinIn />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<FaGithub />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<AiOutlineMail />
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<BsFillPersonLinesFill />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
