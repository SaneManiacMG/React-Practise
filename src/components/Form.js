import React from "react";

const Form = () => {
	const [username, setUsername] = React.useState("");
	const [comments, setComments] = React.useState("");
	const [topic, setTopic] = React.useState("react");

	const handleUsernameChange = (event) => {
		console.log("Username is " + event.target.value);
		setUsername(event.target.value);
	};
	const handleCommentsChange = (event) => {
		console.log("Comment is " + event.target.value);
		setComments(event.target.value);
	};
	const handleTopicsChange = (event) => {
		console.log(event.target.value + " selected");
		setTopic(event.target.value);
	};
	const handleSubmit = (event) => {
		alert(`${username} ${comments} ${topic}`);
		event.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<p>Form Component</p>
					<label>Username</label>
					<input
						type="text"
						value={username || ""}
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<label>Comments</label>
					<textarea
						type="text"
						value={comments || ""}
						onChange={handleCommentsChange}
					></textarea>
				</div>
				<div>
					<label>Topic</label>
					<select value={topic} onChange={handleTopicsChange}>
						<option value="react">React</option>
						<option value="angular">Angular</option>
						<option value="vue">Vue</option>
					</select>
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Form;
