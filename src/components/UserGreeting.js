import React from "react";

const UserGreeting = () => {
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);
	setIsLoggedIn(true);

	if (isLoggedIn) {
		return (
			<>
				<div>
					<h1>Welcome MG</h1>
				</div>
			</>
		);
	} else {
		return (
			<>
				<div>
					<h1>Welcome Guest</h1>
				</div>
			</>
		);
	}
};

export default UserGreeting;
