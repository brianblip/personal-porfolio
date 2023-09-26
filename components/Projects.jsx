import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ imageSrc, title, description, link }) => {
	const [showFull, setShowFull] = useState(false);

	const getDescription = (text, maxLength) => {
		return showFull ? text : text.slice(0, maxLength) + "...";
	};

	const showReadMore = (text, maxLength) => {
		return text.length > maxLength && !showFull;
	};

	const toggleShowFull = () => {
		setShowFull(!showFull);
	};

	return (
		<div className="shadow-xl shadow-gray-300 rounded-xl lg:p-4">
			<Image
				className="rounded-sm hover:scale-105 ease-in duration-300 w-full h-[170px] object-cover"
				src={imageSrc}
				width="800"
				height="500"
				alt="/"
			/>
			<div>
				<h5 className="text-l tracking-wider py-3">{title}</h5>
				<p className="pb-6 pt-2">
					{getDescription(description, 140)}
					{showReadMore(description, 140) && (
						<span
							className="text-center text-lg text-blue-500 cursor-pointer"
							onClick={toggleShowFull}
						>
							Read More
						</span>
					)}
				</p>

				<Link href={link}>
					<h4 className="text-center py-2 rounded-lg bg-[#e7f4ff] px-5 text-lg text-[#19A7CE]">
						View Project
					</h4>
				</Link>
			</div>
		</div>
	);
};

const Projects = () => {
	return (
		<div id="projects" className="w-full lg:h-screen py-10">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl tacking-widest uppercase text-[#146C94]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid md:grid-cols-3 gap-8">
					<Project
						imageSrc="/assets/projects/calcu.png"
						title="Calc"
						description="Calcu is an online calculator that allows users to perform basic arithmetic operations. Built using HTML,CSS and Javascript, the application provides a simple and intuitive user interface that allows users to perform calculations with ease."
						link="https://calcu-one.vercel.app/"
					/>
					<Project
						imageSrc="/assets/projects/document-tracking.png"
						title="Document Request Tracking System"
						description="The Document Request Tracking System is a web-based application designed to streamline the process of managing and tracking document requests. Built using JavaScript and Firebase, the system allows users to submit requests for documents, track the status of their requests, and receive notifications when their requests have been fulfilled."
						link="https://drts.netlify.app/"
					/>
					<Project
						imageSrc="/assets/projects/voting-app.png"
						title="Online Voting Application"
						description="The Online Voting Application is a secure and user-friendly web-based platform designed for conducting online voting processes. Built using TypeScript, PHP, and MySQL, the application provides a simple and efficient way for voters to cast their votes remotely, while ensuring the integrity and accuracy of the election results."
						link="https://online-voting-app-api.000webhostapp.com/#/login"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
