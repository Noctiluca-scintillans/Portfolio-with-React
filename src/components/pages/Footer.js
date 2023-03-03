import React from "react";
import { MDBFooter, MDBIcon } from "mdb-react-ui-kit";

export default function Footer() {
	return (
		<MDBFooter
			// bgColor="light"
			className="text-center text-lg-start text-reset">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-lg-block">
					<span>Get connected with me on social networks:</span>
				</div>

				<div>
					<a
						href="https://stackoverflow.com/users/9012884/rhys-smoker"
						className="me-4 text-reset">
						<MDBIcon
							icon="camera-retro"
							//icon="stackoverflow"
							size="4x"
						/>
					</a>
					{/* <a
						href="https://www.linkedin.com/in/rhys-smoker/"
						className="me-4 text-reset">
						<MDBIcon
							fab
							icon="linkedin"
						/>
					</a>
					<a
						href="https://github.com/Noctiluca-scintillans"
						className="me-4 text-reset">
						<MDBIcon
							fab
							icon="github"
						/>
					</a> */}
				</div>
			</section>
		</MDBFooter>
	);
}
