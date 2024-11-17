import logo from "../assets/archify-logo.png";
import menu_icon from "../assets/menu_icon.svg";
import cross_icon from "../assets/cross_icon.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	useEffect(() => {
		if (showMobileMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
		return () => {
			document.body.style.overflow = "auto";
		};
	}, [showMobileMenu]);

	return (
		<div className="fixed top-0 left-0 z-10 w-full bg-gradient-to-r from-[#00010e] to-[#00213a]">
			<div className="container flex items-center justify-between px-6 py-4 mx-auto md:px-20 lg:px-32">
				<Link to="/">
					<img src={logo} alt="archify logo" className="h-14" />
				</Link>
				<ul className="hidden gap-6 font-semibold text-white md:flex lg:gap-10">
					<Link to="/" className="cursor-pointer hover:text-gray-400">
						Home
					</Link>
					<Link to="/about" className="cursor-pointer hover:text-gray-400">
						About
					</Link>
					<Link to="/projects" className="cursor-pointer hover:text-gray-400">
						Projects
					</Link>
					<Link
						to="/testimonials"
						className="cursor-pointer hover:text-gray-400"
					>
						Testimonials
					</Link>
				</ul>
				<button className="hidden px-8 py-2 bg-white rounded-full md:block">
					Sign up
				</button>
				<img
					onClick={() => setShowMobileMenu(true)}
					src={menu_icon}
					className="md:hidden w-7"
					alt="menu_icon"
				/>
			</div>
			<div
				className={`md:hidden ${
					showMobileMenu ? "fixed w-full" : "h-0 w-0"
				} right-0 top-0 bottom-0 overflow-hidden backdrop-blur-3xl text-black`}
			>
				<div className="flex justify-end p-6 cursor-pointer">
					<img
						onClick={() => setShowMobileMenu(false)}
						src={cross_icon}
						className="w-8 p-2 rounded-full bg-rose-200"
						alt="cross_icon"
					/>
				</div>
				<ul className="flex flex-col items-center gap-2 px-5 mt-5 text-lg font-semibold">
					<Link
						to="/"
						onClick={() => setShowMobileMenu(false)}
						className="inline-block px-4 py-2 rounded-full"
					>
						Home
					</Link>
					<Link
						to="/about"
						onClick={() => setShowMobileMenu(false)}
						className="inline-block px-4 py-2 rounded-full"
					>
						About
					</Link>
					<Link
						to="/projects"
						onClick={() => setShowMobileMenu(false)}
						className="inline-block px-4 py-2 rounded-full"
					>
						Projects
					</Link>
					<Link
						to="/testimonials"
						onClick={() => setShowMobileMenu(false)}
						className="inline-block px-4 py-2 rounded-full"
					>
						Testimonials
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
