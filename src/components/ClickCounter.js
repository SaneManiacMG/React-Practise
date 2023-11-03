import React from "react";
import withCounter from "./withCounter";

const ClickCounter = (props) => {
	const { count, incrementCount } = props;

	return (
		<div>
			<button onClick={incrementCount}>
				{props.name} Clicked {count} times
			</button>
		</div>
	);
};

export default withCounter(ClickCounter, 5);
