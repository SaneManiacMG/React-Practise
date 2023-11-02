import React from "react";

const RefsDemo = () => {
	const inputRef = React.useRef();

	const handleClick = () => {
		inputRef.current.focus();
	};

	return (
		<div>
			<input type="text" ref={inputRef} />
			<button onClick={handleClick}>Focus</button>
		</div>
	);
};

export default RefsDemo;
