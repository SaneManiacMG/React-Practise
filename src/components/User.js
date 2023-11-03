import React from "react";

const User = (props) => {
	return (
		<div>
			<p>{props.render(true)}</p>
		</div>
	);
};

export default User;
