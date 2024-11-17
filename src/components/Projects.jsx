import React, { useEffect, useState } from "react";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";
import projectData from "../ProjectData";
import { motion } from "framer-motion";

const Projects = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [cardToShow, setCardToShow] = useState(1);

	useEffect(() => {
		const updateCardsToShow = () => {
			if (window.innerWidth >= 1024) {
				setCardToShow(projectData.length);
			} else {
				setCardToShow(1);
			}
		};
		updateCardsToShow();
		window.addEventListener("resize", updateCardsToShow);
		return () => window.removeEventListener("resize", updateCardsToShow);
	}, []);

	const nextProject = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
	};

	const prevProject = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
		);
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: -200 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="container w-full px-6 py-4 mx-auto mt-20 overflow-hidden md:px-20 lg:px-32"
			id="Projects"
		>
			<h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
				Projects{" "}
				<span className="font-light underline underline-offset-4 decoration-1 under">
					Done
				</span>
			</h1>
			<p className="mx-auto mb-4 text-center text-gray-500 max-w-80">
				Designs made by us and executed well
			</p>
			<div className="flex items-center justify-end mb-4">
				<button
					onClick={prevProject}
					className="p-3 mr-2 rounded-lg bg-slate-200"
					aria-label="Previous"
				>
					<img src={left_arrow} alt="previous" />
				</button>
				<button
					onClick={nextProject}
					className="p-3 mr-2 rounded-lg bg-slate-200"
					aria-label="Next"
				>
					<img src={right_arrow} alt="next" />
				</button>
			</div>
			<div className="overflow-hidden">
				<div
					className="flex gap-8 transition-transform duration-500 ease-in-out"
					style={{
						transform: `translateX(-${(currentIndex * 100) / cardToShow}%)`,
					}}
				>
					{projectData.map((project, index) => (
						<div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
							<img
								src={project.image}
								alt={project.title}
								className="object-cover w-full h-full"
							/>
							<div className="absolute left-0 right-0 flex justify-center bottom-5">
								<div className="inline-block w-3/4 px-4 py-2 bg-white shadow-md">
									<h2 className="text-lg font-semibold text-gray-800">
										{project.title}
									</h2>
									<p className="text-sm text-gray-500">
										{project.price} <span className="px-1"> | </span>{" "}
										{project.location}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default Projects;
