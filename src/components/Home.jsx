import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
	return (
		<div>
			<Header />
			<Navbar />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
