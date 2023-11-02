import React from "react";

const withCounter = (WrappedComponent) => {
	const WithCounter = () => {
		const [count, setCount] = React.useState(0);

		const incrementCount = () => {
			setCount((count) => count + 1);
		};

		return <WrappedComponent count={count} incrementCount={incrementCount} />;
	};

	return WithCounter;
};

export default withCounter;
