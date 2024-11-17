import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testimonials from "./components/Testimonials";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./components/Contact";

const App = () => {
	return (
		<BrowserRouter className="w-full overflow-hidden">
			<ToastContainer />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/testimonials" element={<Testimonials />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
