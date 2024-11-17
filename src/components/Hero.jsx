import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			transition={{ duration: 1.5 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className="container px-6 py-4 mx-auto text-center text-white md:px-20 lg:px-32"
		>
			<h2 className="text-4xl sm:text-5xl md:text-[72px] inline-block max-w-3xl font-semibold pt-20">
				Designs that become reality
			</h2>
			<div className="mt-16">
				<Link
					to="/contact"
					className="px-6 py-2 text-sm font-semibold border-2 border-white rounded md:px-8 md:py-3 backdrop-blur-sm md:text-lg"
				>
					Consult Now
				</Link>
			</div>
		</motion.div>
	);
};

export default Hero;
