import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event) => {
		event.preventDefault();
		setResult("Sending....");
		const formData = new FormData(event.target);

		formData.append("access_key", "153a6a57-3cbf-4d9e-9564-546045447dc6");

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			setResult("");
			toast.success("Form Submitted Successfully");
			event.target.reset();
		} else {
			console.log("Error", data);
			toast.error(data.message);
			setResult("");
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, x: -200 }}
			transition={{ duration: 1 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			className="w-full p-6 py-24 overflow-hidden text-center lg:px-32"
			id="Contact"
		>
			<h1 className="mb-2 text-2xl font-bold text-center sm:text-4xl">
				Contact{" "}
				<span className="font-light underline underline-offset-4 decoration-1 under">
					With Us
				</span>
			</h1>
			<form
				onSubmit={onSubmit}
				className="max-w-2xl pt-8 mx-auto text-gray-600"
			>
				<div className="flex flex-wrap">
					<div className="w-full text-left md:w-1/2">
						Your Name
						<input
							className="w-full px-4 py-3 mt-2 border border-gray-300 rounded"
							type="text"
							placeholder="Enter your name"
							name="Name"
							required
						/>
					</div>
					<div className="w-full text-left md:w-1/2 md:pl-4">
						Your Email
						<input
							className="w-full px-4 py-3 mt-2 border border-gray-300 rounded"
							type="email"
							placeholder="Enter your email"
							name="Email"
							required
						/>
					</div>
				</div>
				<div className="my-6 text-left">
					Message
					<textarea
						className="w-full h-48 px-4 py-3 mt-2 border border-gray-300 rounded resize-none"
						name="Message"
						placeholder="Enter your message"
						required
					></textarea>
				</div>
				<button className="px-12 py-2 mb-10 text-white bg-yellow-500 rounded">
					{result ? result : "Send Message"}
				</button>
			</form>
		</motion.div>
	);
};

export default Contact;
