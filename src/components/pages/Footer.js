//todo footer should be used in line 38 of container.js

import React from "react";
import {
	MDBFooter,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
	return (
		<MDBFooter
			bgColor="light"
			className="text-center text-lg-start text-muted">
			<section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<a
						href=""
						className="me-4 text-reset">
						<MDBIcon
							fab
							icon="google"
						/>
					</a>
					<a
						href=""
						className="me-4 text-reset">
						<MDBIcon
							fab
							icon="linkedin"
						/>
					</a>
					<a
						href=""
						className="me-4 text-reset">
						<MDBIcon
							fab
							icon="github"
						/>
					</a>
				</div>
			</section>
		</MDBFooter>
	);
}
