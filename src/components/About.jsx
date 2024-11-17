import React from "react";
import brand_img from "../assets/brand_img.jpg";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 200 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="container flex flex-col items-center justify-center w-full p-16 mx-auto overflow-hidden md:px-20 lg:px-32"
			id="About"
		>
			<h1 className="my-8 text-2xl font-bold sm:text-4xl">
				About{" "}
				<span className="font-light underline underline-offset-4 decoration-1 under">
					Our Brand
				</span>
			</h1>
			<p className="mb-8 text-center text-gray-500 max-w-80">
				Your Vision, Our Design
			</p>
			<div className="flex flex-col items-center md:flex-row md:items-start md:gap-20">
				<img
					src={brand_img}
					alt="brand_img"
					className="w-full sm:w-[22rem] max-w-lg"
				/>
				<div className="flex flex-col items-center mt-10 text-gray-600 md:items-start">
					<div className="grid w-full grid-cols-2 gap-6 md:gap-10 2xl:pr-28">
						<div>
							<p className="text-2xl font-medium text-gray-800 sm:text-4xl">
								1000+
							</p>
							<p className="text-sm sm:text-base">Projects Done</p>
						</div>
						<div>
							<p className="text-2xl font-medium text-gray-800 sm:text-4xl">
								2012
							</p>
							<p className="text-sm sm:text-base">Service Since</p>
						</div>
						<div>
							<p className="text-2xl font-medium text-gray-800 sm:text-4xl">
								300+
							</p>
							<p className="text-sm sm:text-base">Cities Covered</p>
						</div>
						<div>
							<p className="text-2xl font-medium text-gray-800 sm:text-4xl">
								800+
							</p>
							<p className="text-sm sm:text-base">Happy Clients</p>
						</div>
					</div>
					<p className="max-w-lg my-10 text-sm sm:text-base">
						Archify is a full-service architectural and interior design firm
						committed to transforming spaces into functional works of art. We
						bring together creativity and precision to craft environments that
						reflect your style and enhance your lifestyle. From concept to
						completion, Archify is dedicated to making your vision a beautiful
						reality.
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
