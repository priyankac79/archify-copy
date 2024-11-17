import React from "react";
import TestimonialsData from "../TestimonialsData";
import star_icon from "../assets/star_icon.svg";
import { motion } from "framer-motion";

const Testimonials = () => {
	return (
		<motion.div
			initial={{ opacity: 0, x: 100 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="container w-full pt-24 mx-auto overflow-auto lg:px-32"
			id="Testimonials"
		>
			<h1 className="text-2xl font-bold text-center mb-14 sm:text-4xl">
				Testimonials
			</h1>
			<div className="flex flex-wrap justify-center gap-8">
				{TestimonialsData.map((testimonial, index) => (
					<div
						key={index}
						className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
					>
						<img
							className="w-20 h-20 mx-auto mb-4 rounded-full"
							src={testimonial.image}
							alt={testimonial.name}
						/>
						<h2 className="text-xl font-medium text-gray-700">
							{testimonial.name}
						</h2>
						<p className="mb-4 text-sm text-gray-500">{testimonial.title}</p>
						<div className="flex justify-center gap-1 mb-4 text-red-500">
							{Array.from({ length: testimonial.rating }, (item, index) => (
								<img key={index} src={star_icon} alt="star_icon" />
							))}
						</div>
						<p className="text-gray-600">{testimonial.message}</p>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Testimonials;
