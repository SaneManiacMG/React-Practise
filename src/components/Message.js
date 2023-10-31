import React from "react";

const Message = (props) => {
	const [message, setMessage] = React.useState("Welcome visitor");
	const [buttonText, setButtonText] = React.useState("Subscribe");

	const changeMessage = () => {
		setMessage("Thank you for subscribing");
		setButtonText("Subscribed");
	};

	return (
		<>
			<h1>{message}</h1>
			<button onClick={changeMessage}>{buttonText}</button>
		</>
	);
};

export default Message;
