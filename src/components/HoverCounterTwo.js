import React from "react";

const HoverCounterTwo = (props) => {
	const { count, incrementCount } = props;
	return (
		<div>
			<h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
		</div>
	);
};

export default HoverCounterTwo;
