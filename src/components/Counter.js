import React, { useState } from "react";

const Counter = (props) => {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Count - {count}</h1>
			<button onClick={() => setCount(count + 1, console.log(count + 1))}>
				Increment
			</button>
		</>
	);
};

export default Counter;
