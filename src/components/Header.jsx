import Hero from "./Hero";
import headerImage from "../assets/header_img.jpg";
import { motion } from "framer-motion";

const Header = () => {
	return (
		<div
			className="flex items-center w-full min-h-screen mb-4 overflow-hidden bg-center bg-cover"
			style={{ backgroundImage: `url(${headerImage})` }}
			id="Header"
		>
			<Hero />
		</div>
	);
};

export default Header;
