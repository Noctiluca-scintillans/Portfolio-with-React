import React, { useState } from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState("aboutMe"); //default state

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === "aboutMe") {
			return <AboutMe />;
		}
		if (currentPage === "portfolio") {
			return <Portfolio />;
		}
		if (currentPage === "contact") {
			return <Contact />;
		}
		return <Resume />;
	};

	const handlePageChange = (page) => setCurrentPage(page); //handlePageChange passes a parameter to setCurrentPage in order to change the state

	return (
		<div class="p-3 mb-2 bg-dark text-white">
			{/* We are passing the currentPage from state and the function to update it */}
			<NavTabs
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			{/* Here we are calling the renderPage method which will return a component  */}
			{renderPage()}
		</div>
	);
}
