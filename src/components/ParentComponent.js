import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
	const greetParent = (name) => {
		alert(`Hello ${name}`);
	};

	return (
		<>
			<ChildComponent greetHandler={greetParent} />
		</>
	);
};

export default ParentComponent;
