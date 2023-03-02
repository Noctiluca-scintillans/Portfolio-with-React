import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Porfolio() {
	return (
		<div className="d-flex flex-column align-items-center row-cols-2">
			<h4>React-Bootstrap Form Component</h4>
			<Form>
				<Form.Group>
					<Form.Label>Enter your full name:</Form.Label>
					<Form.Control
						type="text"
						placeholder="Enter your full name"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Your email address:</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter your your email address"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Enter your message:</Form.Label>
					<Form.Control
						type="number"
						placeholder="your message"
					/>
				</Form.Group>
				<Button
					variant="primary"
					type="submit">
					Click here to submit form
				</Button>
			</Form>
		</div>
	);
}
