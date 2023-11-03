import React from "react";

const ClickCounterTwo = (props) => {
	const { count, incrementCount } = props;
	return (
		<div>
			<button onClick={incrementCount}>Click {count} times</button>
		</div>
	);
};

export default ClickCounterTwo;
