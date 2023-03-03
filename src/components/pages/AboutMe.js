import React from "react";

export default function AboutMe() {
	const styleObj = {
		textAlign: "left",
		paddingTop: "20px",
	};
	return (
		<div>
			<h1>About Rhys</h1>
			<img
				src="https://res.cloudinary.com/dubimtz4j/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1677806548/RhysSelfie_j2uq18.jpg"
				width={250}
				alt="portrait of rhys"
			/>
			<p style={styleObj}>
				I am a life-long learner who loves attaining new skills and working on
				teams. I am both hard-working and creative. My undergraduate degree from
				Cal Poly Humboldt was Oceanographic Science with a Visual Arts minor. I
				spent my 20's studying marine ecosystems and my 30's teaching math and
				science in public and private schools. My travels took me from the
				Channel Islands to the remote Pribilof Islands of the Bering Sea. I'm
				now settled in Bellingham WA, where I own a home with my wife and young
				children. I enjoy coding, spending time with my family, and building
				things. I'm looking for a career where I can continually learn and
				master new systems, and where my work-ethic and desire to help others is
				valued.
			</p>
		</div>
	);
}
