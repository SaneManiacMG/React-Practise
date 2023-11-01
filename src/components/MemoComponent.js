import React from "react";

const MemoComponent = ({ name }) => {
	console.log("Rendering Memo Component");
	return (
		<>
			<h1>Memo Component</h1>
		</>
	);
};

export default React.memo(MemoComponent);
