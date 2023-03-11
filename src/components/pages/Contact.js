//this code is from emailjs:   https://dashboard.emailjs.com/admin/templates/t5zk2vb
//YOU WILL NEE: npm install @emailjs/browser

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const EmailContactForm = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault(); // prevents the page from reloading when you hit “Send”

		emailjs
			.sendForm(
				"service_igsrlz8",
				"template_yrqe3wk",
				form.current,
				"RULpPGERQuAtLqd-9"
			)
			.then(
				(result) => {
					"you sent it!";
				},
				(error) => {
					"something went wrong!";
				}
			);
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}>
			<label>Name</label>
			<input
				type="text"
				name="user_name"
			/>
			<label>Email</label>
			<input
				type="email"
				name="user_email"
			/>
			<label>Message</label>
			<textarea name="message" />
			<input
				type="submit"
				value="Send"
			/>
		</form>
	);
};

export default EmailContactForm;
