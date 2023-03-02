import React from "react";
import Card from "react-bootstrap/Card";

export default function Portfolio() {
	//array of portfolio object including title, link to repo, etc
	const projects = [
		{
			Id: 1,
			title: "Project 1",
			description: "It's a really cool project",
			repo: "place@github.com",
			deployed_URL: "https://github.com",
			image: "https://images.image",
		},
		{
			Id: 2,
			title: "Project 2",
			description: "It's a really okay project",
			repo: "place@github.com",
			deployed_URL: "https://github.com",
			image: "https://images.image",
		},
		{
			Id: 3,
			title: "Project 3",
			description: "It's just a project",
			repo: "place@github.com",
			deployed_URL: "https://github.com",
			image: "https://images.image",
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
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>{item.description}</Card.Text>
								<Card.Link href="#">{item.repo}</Card.Link>
								<Card.Link href="#">{item.deployed_URL}</Card.Link>
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
