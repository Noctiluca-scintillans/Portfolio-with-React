import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsStackOverflow } from "react-icons/bs";

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
						<BsStackOverflow />
					</a>

					<a
						style={{ marginLeft: "3rem" }}
						href="https://www.linkedin.com/in/rhys-smoker/">
						<BsLinkedin />
					</a>

					<a
						style={{ marginLeft: "3rem" }}
						href="https://github.com/Noctiluca-scintillans">
						<BsGithub />
					</a>
				</div>
			</section>
		</MDBFooter>
	);
}
