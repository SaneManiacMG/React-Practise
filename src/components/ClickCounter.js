import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
	const { count, incrementCount } = props;

	return (
		<div>
			<button onClick={incrementCount}>Clicked {count} times</button>
		</div>
	);
};

export default withCounter(ClickCounter);
