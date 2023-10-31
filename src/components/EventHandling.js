import React from "react";

const EventHandling = () => {
	const buttonClicked = () => {
		console.log("Button clicked");
	};

	const buttonHoveredOver = () => {
		console.log("Button hovered over");
	};

	return (
		<>
			<h1>Hello</h1>
			<button onClick={buttonClicked} onMouseOver={buttonHoveredOver}>
				Hallo button
			</button>
		</>
	);
};

export default EventHandling;
