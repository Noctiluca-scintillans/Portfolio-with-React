import React from "react";
import Card from "react-bootstrap/Card";

export default function Portfolio() {
	//array of portfolio object including title, link to repo, etc
	const projects = [
		{
			Id: 1,
			title: "Project 1",
			subtitle: "it was my first project",
			description: "It's a really cool project",
			repo: "place@github.com",
			deployed_URL: "https://github.com",
			image:
				" <img src='https://blah/blah/etc' className='img-fluid shadow-4' alt='...' />", //with this work?
		},
		{
			Id: 2,
			title: "Project 2",
			subtitle: "it was my first project",
			description: "It's a really okay project",
			repo: "place@github.com",
			deployed_URL: "https://github.com",
			image: "https://images.image",
		},
		{
			Id: 3,
			title: "Mail-Me-Seeds",
			subtitle: "Where gardeners share with gardeners!",
			description:
				"This app shows that I can design, build, and deploy a full-stack web application. I used agile software development methods and a Git branching workflow to collaboratively develop this product.",
			repo: "https://github.com/TheBluWiz/mail-me-seeds",
			deployed_URL: "https://github.comhttps://mail-me-seeds.herokuapp.com/",
			image:
				"https://asset.cloudinary.com/dubimtz4j/7beb028fed7f98826b16f1366a92697e",
		},
	];

	//single project component used multiple tiems by .map
	//use card element and class names,
	//trying out some bootstrapping
	return (
		<div>
			{projects.map((item) => (
				//<div class="col-sm-6">
				//<div class="d-inline-flex p-2">
				<div class="d-inline-flex p-2">
					<div class="p-3 mb-2 bg-dark text-white">
						<Card style={{ width: "20rem" }}>
							<Card.Body class="p-3 mb-2 bg-dark text-white">
								<Card.Title>{item.title}</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									{item.subtitle}
								</Card.Subtitle>
								<Card.Text>{item.description}</Card.Text>
								Repository:<Card.Link href="#">{item.repo}</Card.Link>
								Deployment:<Card.Link href="#"> {item.deployed_URL}</Card.Link>
							</Card.Body>
						</Card>
					</div>
				</div>
			))}
		</div>
	);
	//This is the unstyled version
	// return (
	// 	<div>
	// 		{projects.map((item) => (
	// 			<div>
	// 				<h1>{item.title}</h1>
	// 				<h1>{item.description}</h1>
	// 				<h1>{item.repo}</h1>
	// 				<h1>{item.deployed_URL}</h1>
	// 			</div>
	// 		))}
	// 	</div>
	// );
}
