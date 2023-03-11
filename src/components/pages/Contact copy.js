import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Porfolio() {
	return (
		<div className="d-flex flex-column align-items-center row-cols-2">
			<h4>
				Please Reach out if you have any questions, or just to say "hello"!
			</h4>
			<Form>
				<Form.Group>
					<Form.Label>Enter your full name:</Form.Label>
					<Form.Control
						type="text"
						placeholder="Captain Tightpants"
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Your email address:</Form.Label>
					<Form.Control
						type="email"
						placeholder="originalbrowncoat@serenityvalley.org"
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
