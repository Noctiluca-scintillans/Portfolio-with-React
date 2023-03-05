import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaLinkedinIn } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { FaStackOverflow } from "react-icons/fa";

export default function Footer() {
	return (
		<MDBFooter className="text-center text-lg-start text-reset">
			<section className="d-flex justify-content-center justify-content-center p-4 border-bottom">
				<div className="me-5 d-lg-block">
					<span>Let's connect !</span>
				</div>
				<div>
					<a
						style={{ marginLeft: "3rem" }}
						href="https://stackoverflow.com/users/9012884/rhys-smoker">
						<FaStackOverflow />
					</a>

					<a
						style={{ marginLeft: "3rem" }}
						href="https://www.linkedin.com/in/rhys-smoker/">
						<FaLinkedinIn />
					</a>

					<a
						style={{ marginLeft: "3rem" }}
						href="https://github.com/Noctiluca-scintillans">
						<GoMarkGithub />
					</a>
				</div>
			</section>
		</MDBFooter>
	);
}
