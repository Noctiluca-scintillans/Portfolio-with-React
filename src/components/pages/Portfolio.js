import React from "react";
import Card from "react-bootstrap/Card";

export default function Portfolio() {
	//array of portfolio objects including title, link to repo, etc
	const projects = [
		{
			Id: 1,
			title: "Employee Tracker!",
			subtitle:
				"A command-line app to manage a company's employee information.",
			description:
				"This app is a content managment system built from scratch using Node.js, Inquirer, and MySql.  ",
			repo: "https://github.com/Noctiluca-scintillans/Employee-Tracker",
			deployed_URL:
				"https://drive.google.com/file/d/1iJv_3YIaGsj8JPUmZd-GV1ZTAgd9grn9/view",
			image: " <img src='asdf' className='img-fluid shadow-4' alt='...' />", //todo
		},
		{
			Id: 2,
			title: "E-commerce Back End",
			subtitle: "Building the back end for an existing site",
			description:
				"The shows my mastery of ORM (Object-Relational Mapping). I took a working Express.js API and configured it to use Sequelize to interact with a MySQL database. Please note that the application is not deployed, and the deployed URL takes you to a walkthrough video.",
			repo: "https://github.com/Noctiluca-scintillans/E-Commerce-Back-End",
			deployed_URL:
				"https://drive.google.com/file/d/1LqEl-L1l1fmLKjAZYBI0TBsrN4bHrP-Z/view",
			image: " <img src='asdf' className='img-fluid shadow-4' alt='...' />",
		},
		{
			Id: 3,
			title: "Frog Log Blog",
			subtitle: "A Content Managment System built from scratch.",
			description:
				"This app demonstrates my use of the Model-View-Controller architechtural paradigm. It uses Handlebars.js as the templating language, Sequelize as the ORM(Object Relational Mapping), and the express-session npm package for authentification. ",
			repo: "https://github.com/Noctiluca-scintillans/MVC-Tech-Blog",
			deployed_URL: "https://dashboard.heroku.com/apps/stormy-gorge-58008",
			image: " <img src='asdf' className='img-fluid shadow-4' alt='...' />", // TODO
		},
		{
			Id: 4,
			title: "Let's Network!",
			subtitle: "NoSQL Challenge: Social Network API",
			description:
				"This app shows that I can build and structure an API. I used Express.js for routing, a MongoDB database, and the Mongoose ODM. Please note that the `deployed` url will take you to a walk-through video as the APP is not actually deployed. ",
			repo: "https://github.com/Noctiluca-scintillans/Social-Network-API",
			deployed_URL: "https://watch.screencastify.com/v/pOD8r52BeDaPn99UDrVn", //todo do a new walkthrough
			image:
				" <img src='https://blah/blah/etc' className='img-fluid shadow-4' alt='...' />", //todo take a screenshot
		},
		{
			Id: 5,
			title: "Just Another Text Editor",
			subtitle: "A Progressive Web Application",
			description:
				" This app creates an object store and includes both Get and Put methods. It works on your desktop without an internet connection. It automatically saves content inside the text editor. It is bundled with webpack and cretes a service worker with workbox that caches static assets. It uses babel in order to use async/await and generates a manifest.json using WebpackPwaManifest plugi-in and can be installed as a PWA (Progressive Web Application).To build this PWA I started with an existing application found here: https://github.com/coding-boot-camp/cautious-meme.",
			repo: "https://github.com/Noctiluca-scintillans/PWA-Text-Editor ",
			deployed_URL: "https://damp-coast-38671.herokuapp.com/",
			image:
				"https://raw.githubusercontent.com/Noctiluca-scintillans/PWA-Text-Editor/main/Assets/two.png",
		},
		{
			Id: 6,
			title: "Mail-Me-Seeds",
			subtitle: "A full stack web application",
			description:
				"This app shows that I can collaborate to design, build, and deploy a full-stack web application. We used agile software development methods and a Git branching workflow to collaboratively develop this product. The concept was mine and demonstrates my creativity.",
			repo: "https://github.com/TheBluWiz/mail-me-seeds",
			deployed_URL: "https://mail-me-seeds.herokuapp.com/",
			image:
				"https://asset.cloudinary.com/dubimtz4j/7beb028fed7f98826b16f1366a92697e",
		},
	];

	//a single project component used multiple tiems by .map
	return (
		<div>
			{projects.map((item) => (
				<div class="d-inline-flex p-2">
					<Card style={{ width: "20rem" }}>
						<Card.Body
							// class="p-3 mb-2 bg-dark text-white"
							class="p-3 mb-2"
							style={{ backgroundColor: "#606c38" }}>
							<Card.Title>{item.title}</Card.Title>
							<Card.Subtitle
								className="mb-2"
								style={{ color: "#dda15e" }}>
								{item.subtitle}
							</Card.Subtitle>
							<Card.Text>{item.description}</Card.Text>
							<Card.Link href={item.repo}>Repository</Card.Link>
							<Card.Link href={item.deployed_URL}>Deployed App</Card.Link>
						</Card.Body>
					</Card>
				</div>
			))}
		</div>
	);
}
