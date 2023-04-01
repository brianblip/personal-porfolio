import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
{
	/* main branch */
}
const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className=" max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<h1 className="py-4 text-gray-700">
						Hi, I&apos;m <span className="text-[#146C94]">Brian</span>
					</h1>
					<h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						I&apos;m a front-end web developer with a passion for creating
						visually appealing and intuitive websites. With expertise in HTML,
						CSS, JavaScript, and Nextjs. I&apos;m always looking for new
						opportunities to learn and grow.
					</p>
					<div className="flex items-center justify-evenly max-w-[330px] m-auto py-4">
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<Link href="https://www.linkedin.com/in/john-brian-prado-584a13270/">
								<FaLinkedinIn />
							</Link>
						</div>
						<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
							<Link href="https://github.com/brianblip">
								<FaGithub />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
