import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {
	const WithCounter = (props) => {
		const [count, setCount] = React.useState(0);

		const incrementCount = () => {
			setCount((count) => count + incrementNumber);
		};

		return (
			<WrappedComponent
				count={count}
				incrementCount={incrementCount}
				{...props}
			/>
		);
	};

	return WithCounter;
};

export default withCounter;
