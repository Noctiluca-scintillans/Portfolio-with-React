import React from "react";

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

	//mapping for each component  as in groceries List
	//use card element and class names,
	return (
		<div>
			{projects.map((item) => (
				<div>
					<h1>{item.title}</h1>
					<h1>{item.description}</h1>
					<h1>{item.repo}</h1>
					<h1>{item.deployed_URL}</h1>
				</div>
			))}
		</div>
	);
}
